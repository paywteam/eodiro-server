import Db from '@/db'
import User from '@/db/modules/user'
import { DBSchema } from '@/db/schema'
import Auth from '@/modules/auth'
import SqlB from '@/modules/sqlb'
import Time from '@/modules/time'
import { Interface } from './interface'

export default async function(
  data: Interface['data']
): Promise<Interface['payload']> {
  const authPayload = await Auth.isSignedUser(data.accessToken)

  if (authPayload === false) {
    return {
      err: 'Unauthorized',
    }
  }

  const user = await User.findAtId(authPayload.userId)

  const body = data.body.trim()
  if (body.length === 0) {
    return {
      err: 'No Body',
    }
  }

  const query = SqlB<DBSchema.Comment>()
    .insert('comment', {
      user_id: user.id,
      random_nickname: user.random_nickname,
      post_id: data.postId,
      body: data.body,
      uploaded_at: Time.getCurrTime(),
    })
    .build()

  const [err] = await Db.query(query)
  if (err) {
    return {
      err: 'Internal Server Error',
    }
  }

  return {
    err: null,
  }
}
