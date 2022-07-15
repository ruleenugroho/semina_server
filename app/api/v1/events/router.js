const express = require('express');
const router = express();
const { create, index, find, update, destroy, updateStatus } = require('./controller');

router.get('/events', index);
router.get('/events/:id', find);
router.put('/events/:id', update);
router.put('/events-status/:id', updateStatus);
router.delete('/events/:id', destroy);
router.post('/events', create);

module.exports = router;
