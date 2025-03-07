const { Sequelize } = require("sequelize");

//Menghubungkan Ke MySQL
const sequelize = new Sequelize("siswa_smk_bpi", "root", "", {
    host: "localhost",
     dialect: "mysql",
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Koneksi ke MySQL berhasil!");
    }   catch (error) {
        console.error("Tidak bisa terhubung ke MySQL:", error);
    }
};

module.exports = { sequelize, connectDB };