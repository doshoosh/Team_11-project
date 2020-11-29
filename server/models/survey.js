let mongoose = require('mongoose');

// create model class

let surveyModel = mongoose.Schema({
  	name: String,
	type: String,
	releaseDate: String,
	expiryDate: String,
	question1: String,
	question2: String
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);