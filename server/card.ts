
import Sequelize from 'sequelize';
import db from './db';
import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
const { STRING, INTEGER } = Sequelize;


export interface CardModel extends Model<InferAttributes<CardModel>, InferCreationAttributes<CardModel>> {
  id: CreationOptional<number>;
  question: CreationOptional<string>;
  answer: CreationOptional<string>;
}
const Card = db.define<CardModel>('card', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: STRING,
    allowNull: false,
  },
  answer: {
    type: STRING,
    allowNull: false,
  },
});

export default Card;