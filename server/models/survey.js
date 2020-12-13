let mongoose = require('mongoose');

// create model class

// survey questions 
let surveyQuestions = mongoose.Schema({
  question: {type:String},
	choices: [
		{
			choice: {type:String},
		}	
	]
});

//  survey structure
let surveyModel = mongoose.Schema({
  name: String,
	type: String,
	releaseDate: String,
	expiryDate: String,
	question: [surveyQuestions],	
},
{
  collection: "surveys_d"
});

module.exports = mongoose.model('Survey', surveyModel);