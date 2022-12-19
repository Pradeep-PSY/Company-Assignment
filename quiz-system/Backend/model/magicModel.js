const { Schema, model } = require("mongoose");

const magicSchema = new Schema({
 
  
  magic: [
    "string"
  ],
  
  email_list:['string']
});

const magicModel = model("magic", magicSchema);

module.exports = magicModel;
