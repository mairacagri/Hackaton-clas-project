const express = require('express');
const homePage = require('./resolvers/homePage');
const routeNotFound = require('./resolvers/routeNotFound');

const router = express.Router();

router.get('/', homePage);
router.get('/api/v1/', homePage);
router.get('/api/v1/', homePage);
router.get('*', routeNotFound);

module.exports = router;