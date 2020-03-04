require('module-alias/register')
import { boot } from '@/boot'
import Db, { MysqlUpdateResult } from '@/db'
import SqlB from '@/modules/sqlb'
;(async (): Promise<void> => {
  await boot({
    mail: false,
    bot: false,
    isDev: true,
  })
  const [, results] = await Db.query<MysqlUpdateResult>(
    SqlB()
      .update('test', {
        'name': '111',
      })
      .build()
  )
})()