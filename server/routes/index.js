let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);
router.get('/home', indexController.displayHomePage);

/* login page - GET */
router.get('/login', indexController.displayLoginPage);

/* process login - POST */
router.post('/login', indexController.processLogin);

/* logout action - GET */
router.get('/logout', indexController.processLogout);

/* displaying Register page */
router.get('/register', indexController.displayRegisterPage);

/* process Registration */
router.post('/register', indexController.processRegistration);

module.exports = router;
 