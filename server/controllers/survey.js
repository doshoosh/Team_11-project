let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to survey model db schema
let Survey = require('../models/survey');

// GET route for surveys list page
module.exports.displaySurveyItems = (req, res, next) => {
  Survey.find((err, surveys) => {
    if (err) {
      return console.log(err);
    } else {
      res.render('survey/list', {
        title: 'Available surveys',
        slug: 'surveys',
        surveyList: surveys,
      });
    }
  });
}

/** *
 *  Add Survey Routes  - CREATE
 * */

// GET - display add survey page
module.exports.displayAddSurveyItem = (req, res, next) => {
  res.render('survey/add', { 
    title: 'Create Survey', 
    slug: 'surveys',    
  });
}

// POST - process add survey page
module.exports.addSurveyItem = (req, res, next) => {
  let = newSurvey = Survey({
    name: req.body.name,
    type: req.body.type,
    releaseDate: req.body.releaseDate,
    expiryDate: req.body.expiryDate,
    question: {
      question: req.body.q1,
      choices: 
        {
          c1: req.body.q1c1,
          c2: req.body.q1c2,
          c3: req.body.q1c3,
          c4: req.body.q1c4,
        }
      ,
    },
  });

  Survey.create(newSurvey, (err, Survey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/survey-list');
    }
  });
}

/** *
 * Edit Survey Routes  -  UPDATE
 * */

// GET - display edit survey page
module.exports.displayEditSurveyPage = (req, res, next) => {
  let id = req.params.id;

  Survey.findById(id, (err, selectedSurvey) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('survey/edit', {
        title: 'Edit Survey',
        slug: 'surveys',
        survey: selectedSurvey,
      });
    }
  });
}

// POST - process edit survey page
module.exports.updateSurveyItem = (req, res, next) => {
  let id = req.params.id;

  let updateSurvey = Survey({
    _id: id,
    name: req.body.name,
    type: req.body.type,
    releaseDate: req.body.releaseDate,
    expiryDate: req.body.expiryDate,
    question: {
      question: req.body.q1,
      choices: 
        {
          c1: req.body.q1c1,
          c2: req.body.q1c2,
          c3: req.body.q1c3,
          c4: req.body.q1c4,
        }
      ,
    },
  });

  Survey.updateOne({ _id: id }, updateSurvey, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/survey-list');
    }
  });
}

/** *
 * Delete Survey Routes - DELETE
 *  */

// GET - survey deletion
module.exports.deleteSurveyItem = (req, res, next) => {
  let id = req.params.id;

  Survey.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/survey-list');
    }
  });
}