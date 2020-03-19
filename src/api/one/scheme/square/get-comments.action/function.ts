import { CommentType } from '@/database/models/comment'
import Db from '@/db'
import Auth from '@/modules/auth'
import SqlB from '@/modules/sqlb'
import { Interface } from './interface'

export default async function(
  data: Interface['data']
): Promise<Interface['payload']> {
  const authPayload = await Auth.isSignedUser(data.accessToken)
  if (!authPayload)
    return {
      err: 'Unauthorized',
      data: null,
    }

  const query = SqlB<CommentType>()
    .select('*')
    .from('comment')
    .where()
    .equal('post_id', data.postId)
    .andMore('id', data.mostRecentCommentId || 0)
    .order('id', 'asc')
    .limit(data.amount)
    .build()

  const [err, results] = await Db.query<CommentType[]>(query)

  if (err) {
    return {
      err: 'Internal Server Error',
      data: null,
    }
  }

  return {
    err: null,
    data: results,
  }
}