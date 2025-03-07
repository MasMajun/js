const express = require('express');
const router = express.Router();
const Siswa = require('../models/siswa');

router.get('/siswa', async (req, res) => {
    try {
        const siswa = await Siswa.findAll();
        res.json(siswa);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.post('/siswa', async (req, res) => {
    try {
        const { nama, umur, alamat } = req.body;
        const siswa = await Siswa.create({
            nama,
            umur,
            alamat
        });
        res.json(siswa);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.put('/siswa/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const { nama, umur, alamat } = req.body;
        const siswa = await Siswa.findByPk(id);
        
        if (!siswa) {
            return res.status(404).json({ msg: 'Siswa not found' });
        }
    siswa.nama = nama;
    siswa.umur = umur;
    siswa.alamat = alamat;
    await siswa.save();

    res.json(siswa);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

router.delete('/siswa/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const siswa = await Siswa.findByPk(id);
        
        if (!siswa) {
            return res.status(404).json({ msg: 'Siswa not found' });
        }
        await siswa.destroy();
        res.json({ msg: 'Siswa removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;