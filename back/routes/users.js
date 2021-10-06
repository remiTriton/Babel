const express = require('express');

const router = express.Router();

const fakeUserDb = [
    {
        id: 1,
        name: 'castelly',
        firstname: 'thomas',
    }, {
        id: 2,
        name: 'Triton',
        firstname: 'Remi'
    }
]

// get fake user 1
router.get('/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const userOne = fakeUserDb.find((u) => u.id === userId);
    res.send(JSON.stringify(userOne));
});

router.post('/', (req, res) => {
    fakeUserDb.push(req.body);
    res.send('saved');
})

module.exports = router;