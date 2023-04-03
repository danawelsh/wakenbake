const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const bookRoutes = require('./bookRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/bookroutes', bookRoutes);

module.exports = router;
