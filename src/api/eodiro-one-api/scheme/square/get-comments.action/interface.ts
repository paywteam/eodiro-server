import { Comments } from '../../../db-schema/generated'
import { OneAPIError } from '../../types/utils'

export interface Interface {
  data: {
    postId: number
    mostRecentCommentId?: number
    amount?: number
  }
  payload: {
    err: OneAPIError<void>
    data: Comments
  }
}