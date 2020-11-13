let express = require('express');
let router = express.Router();

let surveyController = require('../controllers/survey');

// GET route for surveys list page
router.get('/', surveyController.displaySurveyItems);

/** *
 *  Add Survey Routes  - CREATE
 * */
// GET - display add survey page
router.get('/add', surveyController.displayAddSurveyItem);

// POST - process add survey page
router.post('/add', surveyController.addSurveyItem);

/** *
 * Edit Survey Routes  -  UPDATE
 * */
// GET - display edit survey page
router.get('/edit/:id', surveyController.displayEditSurveyPage);

// POST - process edit survey page
router.post('/edit/:id', surveyController.updateSurveyItem);

/** *
 * Delete Survey Routes - DELETE
 *  */
// GET - survey deletion
router.get('/delete/:id', surveyController.deleteSurveyItem);

module.exports = router;
