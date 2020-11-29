let mongoose = require('mongoose');

// create model class

// survey questions 
let surveyQuestions = mongoose.Schema({
  question: {type:String},
	choices:
		{
			c1: {type:String},
			c2: {type:String},
			c3: {type:String},
			c4: {type:String},
		}	
});

//  survey structure
let surveyModel = mongoose.Schema({
  name: String,
	type: String,
	releaseDate: String,
	expiryDate: String,
	question: surveyQuestions,	
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);