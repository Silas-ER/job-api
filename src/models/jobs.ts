import { DataTypes, Model, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyCountAssociationMixin } from 'sequelize';
import { sequelize } from '../database';
import { CandidateInstance } from './candidate';

interface JobInstance extends Model {
    id: number;
    title: string;
    description: string;
    limitDate: Date;
    companyId: number;
    addCandidate: BelongsToManyAddAssociationMixin<CandidateInstance, number>;   
    removeCandidate: BelongsToManyRemoveAssociationMixin<CandidateInstance, number>; 
    countCandidate: BelongsToManyCountAssociationMixin;
}

export const Job = sequelize.define<JobInstance>(
    'jobs', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        limitDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            }
        }
    }
);
