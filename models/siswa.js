const { DataTypes} = require("sequelize");
const { sequelize } = require("../config/db");

const Siswa = sequelize.define(
    "siswa",
    {
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        umur: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "siswa",
        timestamps: false,
    }
);

module.exports = Siswa;