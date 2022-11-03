const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
 
  difficulty: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: [
    "string"
  ],
  correct_answer: {
    type: String,
    required: true,
  }
});

const questionModel = model("question", questionSchema);

module.exports = questionModel;
