let mongoose = require('mongoose');

// create model class

let surveyModel = mongoose.Schema({
  name: String,
	type: String,
	id: String,
	releaseDate: String,
	expiryDate: String
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);