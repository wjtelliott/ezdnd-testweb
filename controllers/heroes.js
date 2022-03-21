const router = require('express').Router();
const db = require('../models');
const util = require('../assets/heroUtil');

router.get('/', (req, res) => {

    if (req.query?.index == null)
        db.Heroes.find()
            .then( allHeroes => res.status(206).render(('heroes/index'), {data: allHeroes}))
            .catch(err => {
                console.log(err);
                res.status(404).render('error404');
            });
    else
        db.Heroes.findById(req.query.index)
            .then ( hero => res.status(206).render('heroes/read', {data: hero}))
            .catch( err => {
                console.log(err);
                res.status(404).render('error404');
            });
});

router.delete('/', (req,res) => {
    db.Users.find({'username': req.body?.uname})
    .then(users => {
        for (let i = 0; i < users.length; i++)
            if (users[i]._doc.password === req.body?.psw) {
                // Create user in db. Send back to index
                util.deleteHero(req.query?.index);
                return res.status(200).redirect('/heroes');
            }
        res.status(404).render('error404password');
    })
    .catch(err => {
        console.log(err);
        res.status(404).render('error404');
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    db.Users.find({'username': req.body?.uname})
        .then(users => {
            for (let i = 0; i < users.length; i++)
                if (users[i]._doc.password === req.body?.psw) {
                    // Create user in db. Send back to index
                    util.createNewHero(req.body);
                    return res.status(200).redirect('/heroes');
                }
            res.status(404).render('error404password');
        })
        .catch(err => {
            console.log(err);
            res.status(404).render('error404');
        });
});

router.get('/new', (req, res) => res.status(206).render('heroes/new'));

module.exports = router;