import { DataTypes, Model } from 'sequelize'
import { createInitModelFunction } from '../create-init-model'

class CoverageMajorLecture extends Model {}

export const coverageMajorLecture = createInitModelFunction(
  CoverageMajorLecture,
  'coverage_major_lecture',
  {
    lecture_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lecture',
        key: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    coverage_major: {
      primaryKey: true,
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'coverage_major',
        key: 'name',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
  }
)

export type CoverageMajorLectureType = {
  lecture_id: number
  coverage_major: string
}
