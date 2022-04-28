var express = require('express');
var router = express.Router();

const memos = require('../memo.json')
let count = 2;

/* GET 메모 보낼 것 */
router.get('/', function(req, res, next) {
    console.log(memos);
    res.send(memos);
});

router.post('/', function(req, res, next) {
    const memo = req.body.data;
    count++;
    const m = {
        id: count,
        title: memo.title,
        memo: memo.memo,
        writer: '익명'
    };
    memos.push(m);
    res.send('ok');
})

//get을 통해 id 값이 동일한 메모를 보냄
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const m = memos.filter((memo) => {
        if(memo.id == id) {
            return true;
        };
    });
    res.send(m[0]);
});

module.exports = router;