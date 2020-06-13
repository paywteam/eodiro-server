import { Action } from './interface'
import { OneApiFunction } from '@/api/one/scheme/types/utils'
import { TipListResponse } from '@/database/models/tip'
import prisma from '@/modules/prisma'

const func: OneApiFunction<Action> = async (data) => {
  const { topic, cursor } = data

  const totalCount = await prisma.tip.count()

  const tipList = await prisma.tip.findMany({
    where: {
      topic: topic,
    },
    include: {
      tipLikes: true,
      tipBookmarks: true,
    },
    cursor: {
      id: cursor,
    },
    take: -10,
  })

  const tips = tipList.map((item) => {
    const response: TipListResponse = {
      ...item,
      tipLikes: item.tipLikes.length,
      tipBookmarks: item.tipBookmarks.length,
      isLiked: true,
      isBookmarked: true,
    }
    return response
  })

  return {
    err: null,
    data: {
      tips,
      totalCount,
    },
  }
}

export default func