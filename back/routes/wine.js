const express = require('express');

const router = express.Router();

const wine = [
    {
        id: 1,
        name: 'La Sorga',
        firstname: 'Yodel Master',
    }, {
        id: 2,
        name: 'La Sorga',
        firstname: 'Maître Splinter'
    }
]

// router.get()
router.get('/:ywine', (req, res) => {
    const wineId = Number(req.params.wineId);
    const wineOne = wineDb.find((u) => u.id === wineId);
    res.send(JSON.stringify(wineOne));
});
// router.post()
router.post('/', (req, res) => {
    wineDb.push(req.body);
    res.send('saved');
})


module.exports = router;