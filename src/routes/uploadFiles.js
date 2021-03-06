const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const folder = 'public/images/'
const { auth } = require('@helper/auth')

const { promisify } = require('util');
const unlink = promisify(fs.unlink);

//config multer 
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, folder)
        console.log(file)
    },
    filename: function(req, file, cb) {
        //function para contar arquivos
        fs.readdir(folder, (err, paths) => {
            //def nomes do arquivos
            cb(null, paths.length + 1 + file.originalname)
        })
    }
})

const upload = multer({
    storage,
    fileFilter: (req, res, cb) => {
        if (file.mimetype == "image/jpg") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
})



router.get('/', (req, res) => {
    fs.readdir(folder, (err, paths) => {
        res.render('paths_files/upLoadFile')
    })
})

router.post('/upload', upload.single('img'), (req, res) => {
    req.flash('success_msg', 'Imagem enviada com sucesso!')
    res.redirect('/admin')
})

router.post('/files', (req, res) => {
    fs.readdir(folder, (err, paths) => {
        res.render('paths_files/viz-file')
            //res.send(`<img src="/images/${file}" class="img-fluid" alt="imgs">`)
    })
})


router.post('/delete', async(req, res) => {
    try {
        fs.unlinkSync('./' + folder + req.body.file)
        res.send('excluido com secesso!')
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocorreu um erro interno.');
    }
})


module.exports = router