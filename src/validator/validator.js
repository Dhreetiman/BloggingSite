const mongoose = require("mongoose")

const isValidEmail = function (value) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/

  if (emailRegex.test(value)) return true;
};

const idCharacterValid = function (value) {
  //return mongoose.Types.ObjectId.isValid(value);
  let validId = /^[a-fA-F0-9]{24}$/
  if (validId.test(value)) return true;
};


const isValidString = function (str) {
  var re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
  let bool = re.test(str.trim());
  if (bool == true) {
    str = str.trim()
    str = str.replace(str[0], str[0].toUpperCase())
    return str
  } else {
    return false
  }
};

const isValidPassword = function (pw) {
  let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/;
  if (pass.test(pw)) return true;
};


module.exports = {
  isValidEmail,
  idCharacterValid,
  isValidString,
  isValidPassword
}