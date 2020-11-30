let express = require('express');
let router = express.Router();

let surveyController = require('../controllers/survey');

// helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    req.flash('loginMessage', 'Access denied! Please login to access the content.');
    return res.redirect('/login');
  }
  next();
}

// GET route for surveys list page
router.get('/', requireAuth, surveyController.displaySurveyItems);

/** *
 *  Add Survey Routes  - CREATE
 * */
// GET - display add survey page
router.get('/add', requireAuth, surveyController.displayAddSurveyItem);

// POST - process add survey page
router.post('/add', requireAuth, surveyController.addSurveyItem);

/** *
 * Edit Survey Routes  -  UPDATE
 * */
// GET - display edit survey page
router.get('/edit/:id', requireAuth, surveyController.displayEditSurveyPage);

// POST - process edit survey page
router.post('/edit/:id', requireAuth, surveyController.updateSurveyItem);

/** *
 * Delete Survey Routes - DELETE
 *  */
// GET - survey deletion
router.get('/delete/:id', requireAuth, surveyController.deleteSurveyItem);

module.exports = router;
