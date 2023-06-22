import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();
listPerson.getLocalStorage();

document.getElementById("addUser").addEventListener("click", () => {
  document.getElementById("btnAddUser").style.display = "block";
});
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
  for (const item of arrInput) {
    item.value = "";
  }
  document.getElementById("idBtnClose").click();
});
window.deleteUser = (maInput) => {
  listPerson.deleteUser(maInput);
};
window.getInfoUser = (maUser) => {
  listPerson.getInfoUser(maUser);
};

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

document.getElementById("searchId").addEventListener("input", (event) => {
  let value = event.target.value;

  listPerson.findUser(value);
});
//Render Only User
document.getElementById("renderOnlyUser").onchange = () => {
  let checkInputRender = document.getElementById("renderOnlyUser").value;

  if (checkInputRender == "all") {
    listPerson.renderUser(listPerson.arrListPerson);
  }
  if (checkInputRender == "student") {
    let renderAllStudent = listPerson.arrListPerson.filter(
      (item) => item.type == "student"
    );
    listPerson.renderUser(renderAllStudent);
  }
  if (checkInputRender == "employee") {
    let renderAllEmployee = listPerson.arrListPerson.filter(
      (item) => item.type == "employee"
    );
    listPerson.renderUser(renderAllEmployee);
  }
  if (checkInputRender == "customer") {
    let renderAllCustomer = listPerson.arrListPerson.filter(
      (item) => item.type == "customer"
    );
    listPerson.renderUser(renderAllCustomer);
  }
};
