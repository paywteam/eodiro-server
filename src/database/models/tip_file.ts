import { DataTypes, Model } from 'sequelize'

import { PrimaryAIAttribute } from '../utils/model-attributes'
import { createInitModelFunction } from '../create-init-model'

class TipFile extends Model {}

export const getTipFile = createInitModelFunction(TipFile, 'tip_file', {
  id: PrimaryAIAttribute,
  tip_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tip',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
  file_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'file',
      key: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  },
})

export type TipFileType = {
  tip_id: number
  file_id: number
}
