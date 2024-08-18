import { DataTypes } from "sequelize";
import { sequelize } from "../config/db-config.js";

export const Card = sequelize.define("cards", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: { msg: "Title cannot be null!" },
      notEmpty: { msg: "Title cannot be empty!" },
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Description cannot be null!" },
      notEmpty: { msg: "Description cannot be empty!" },
    },
  },
});
