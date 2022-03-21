const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {

    if (req.query?.index == null)
        db.Locations.find()
            .then( allLocations => res.status(206).render(('locations/index'), {data: allLocations}))
            .catch(err => {
                console.log(err);
                res.status(404).render('error404');
            });
    else
        db.Locations.findById(req.query.index)
            .then ( location => res.status(206).render('locations/read', {data: location}))
            .catch( err => {
                console.log(err);
                res.status(404).render('error404');
            });
});

router.get('/new', (req, res) => res.status(206).render('locations/new'));

module.exports = router;