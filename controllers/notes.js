const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
    db.Notes.find()
        .then(notes => res.status(206).render('notes/index', {data: notes}))
        .catch(err =>{
            console.log(err);
            res.status(404).render('error404');
        })
});

router.get('/new', (req, res) => res.status(206).render('notes/new'));

module.exports = router;