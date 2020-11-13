let mongoose = require('mongoose');

// create model class

let surveyModel = mongoose.Schema({
  name: String,
	address: String,
	age: String,
	height: String,
	weight: String
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);