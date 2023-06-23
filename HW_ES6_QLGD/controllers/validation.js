function checkInput(id, idErr, checkValidation) {
  let dataInput = document.getElementById(id).value;
  // console.log(dataInput);
  if (dataInput && checkValidation) {
    document.getElementById(id).classList.remove("is-invalid");
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    document.getElementById(idErr).style.display = "block";
    return false;
  }
}
function check(id) {
  let dataInput = document.getElementById(id).value;
  if (dataInput) {
    document.getElementById(id).classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(id).classList.add("is-invalid");
    return false;
  }
}
// check email
function checkEmail(id) {
  let dataInput = document.getElementById(id).value;
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let tempEmail = regexEmail.test(dataInput);
  return tempEmail;
}
let checkMa = (id) => {
  let dataInput = document.getElementById(id).value;
  let listPerson = new ListPerson();
  let testMa = listPerson.arrListPerson.filter((item) => item.ma == dataInput);
  if (testMa) {
    return true;
  } else {
    return false;
  }
};
