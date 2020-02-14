import DbConnector from '@/modules/db-connector'
import { MysqlError, FieldInfo } from 'mysql'

export type MysqlResult = any[] | Record<string, any>
export type MysqlQueryReturn<ResultType> = [MysqlError, ResultType, FieldInfo[]]
export type QueryValues = (string | number)[] | string | number

export default class Db {
  static query<ResultType = MysqlResult>(
    query: string
  ): Promise<MysqlQueryReturn<ResultType>>
  static query<ResultType = MysqlResult>(
    query: string,
    values: QueryValues
  ): Promise<MysqlQueryReturn<ResultType>>
  static query<ResultType = MysqlResult>(
    query: string,
    values?: QueryValues
  ): Promise<MysqlQueryReturn<ResultType>> {
    return new Promise(async (resolve) => {
      const conn = await DbConnector.getConnection()

      if (!values) {
        values = null
      }

      conn.query(query, values, (err, results, fields) => {
        if (err) {
          console.error(err)
        }
        resolve([err, results, fields])
      })
    })
  }

  static escape(str: string): string {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
      switch (char) {
        case '\0':
          return '\\0'
        case '\x08':
          return '\\b'
        case '\x09':
          return '\\t'
        case '\x1a':
          return '\\z'
        case '\n':
          return '\\n'
        case '\r':
          return '\\r'
        case '"':
        case "'":
        case '\\':
        case '%':
          return '\\' + char // prepends a backslash to backslash, percent,
        // and double/single quotes
        default:
          return char
      }
    })
  }
}
