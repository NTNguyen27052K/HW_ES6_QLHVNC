import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();

listPerson.getLocalStorage();
// ------------
document.getElementById("btnAddUser").addEventListener("click", () => {
  let arrInput = document.querySelectorAll(
    ".modal-body input, .modal-body textarea, .modal-body .form-select"
  );

  let arrSel = document.querySelector(".modal-body select").value;
  let person;
  if (arrSel == "student") {
    person = new Student();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    listPerson.addUser(person);
    console.log(person.type);
  }
  if (arrSel == "employee") {
    person = new Employee();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    listPerson.addUser(person);
  }
  if (arrSel == "customer") {
    person = new Customer();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    listPerson.addUser(person);
  }
  console.log(listPerson.arrListPerson);
  listPerson.renderUser(listPerson.arrListPerson);
  listPerson.setLocalStorage(listPerson.arrListPerson);
});
window.deleteUser = (maInput) => {
  listPerson.deleteUser(maInput);
};
window.getInfoUser = (maUser) => {
  listPerson.getInfoUser(maUser);
};
// document.getElementsByClassName("editBtn").click = () => {
//   document.getElementById("btnEdit").style.display = "block";
// };

document.getElementById("btnEdit").onclick = () => {
  let arrInput = document.querySelectorAll(
    ".modal-body input, .modal-body textarea, .modal-body .form-select"
  );
  let arrSel = document.querySelector(".modal-body select").value;
  if ((arrSel = "student")) {
    let person = new Student();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    console.log(person.ma);
    listPerson.editInfoUser(person);
  }
  if ((arrSel = "employee")) {
    let person = new Employee();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    listPerson.editInfoUser(person);
  }
  if ((arrSel = "customer")) {
    let person = new Customer();
    for (const item of arrInput) {
      let {id, value} = item;
      person[id] = value;
    }
    listPerson.editInfoUser(person);
  }
  document.getElementById("btnEdit").style.display = "none";
};
// let editAction = () => {
//   document.getElementById("btnEdit").style.display = "none";
// };
