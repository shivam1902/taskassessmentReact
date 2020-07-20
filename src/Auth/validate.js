var passwordValidator = require("password-validator");

export default function (values) {
  const errors = {};
  const requiredFields = ["email", "password", "contactnumber"];
  var schema = new passwordValidator();
  var schema2 = new passwordValidator();
  schema2.min(10);
  schema
    .is()
    .min(8) // Minimum length 8
    .is()
    .max(100) // Maximum length 100
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not()
    .oneOf(["Passw0rd", "Password123"]);
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = ` ${field} Required`;
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  if (values.password !== values.conformpassword) {
    errors.conformpassword = "Please Conform Correct Password";
  }

  if (!/^[A-Za-z]+$/.test(values.firstname)) {
    errors.name = "PLease Enter Valid First Name";
  }

  if (!schema.validate(values.password)) {
    errors.password =
      "PLease Enter 1 Uppercase,lowercase,digit and Minimum length 8";
  }

  if (!schema2.validate(values.number)) {
    errors.contactnumber = "PLease Enter Valid Contact Number";
  }
  return errors;
}
