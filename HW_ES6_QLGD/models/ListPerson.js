import Student from "./Student.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
import renderUserObj from "../controllers/helper.js";
export default class ListPerson {
  constructor(student, employee, customer) {
    this.arrListPerson = [];
    this.student = student;
    this.employee = employee;
    this.customer = customer;
  }
  addUser(user) {
    this.arrListPerson.push(user);
  }
  renderUser(arr) {
    let contentStudent = arr.map((item, index) => {
      let student = new Student();
      Object.assign(student, item);
      let {type, hoTen, diaChi, ma, email, toan, ly, hoa, dTB} = student;
      if (type == "student") {
        return `
                <tr class="text-center">
                  <td style="vertical-align: middle">${ma}</td>
                  <td style="vertical-align: middle">${hoTen}</td>
                  <td style="vertical-align: middle">${diaChi}</td>
                  <td style="vertical-align: middle">${email}</td>
                  <td class="text-start" style="padding-left: 40px">
                      Điểm toán: ${toan}<br/>
                      Điểm Lý: ${ly}<br/>
                      Điểm hóa: ${hoa}<br/>
                      Điểm TB: ${dTB()}
                  </td>
                  <td style="vertical-align: middle; text-align: center">
                    <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </td>
                </tr>`;
      }
    });
    document.getElementById("renderListStudent").innerHTML =
      contentStudent.join("");

    let contentEmployee = arr.map((item, index) => {
      let employee = new Employee();
      Object.assign(employee, item);
      let {
        type,
        hoTen,
        diaChi,
        ma,
        email,
        soNgayLamViec,
        luongMotNgay,
        salary,
      } = employee;
      if (type == "employee") {
        return `
                <tr class="text-center">
                  <td style="vertical-align: middle">${ma}</td>
                  <td style="vertical-align: middle">${hoTen}</td>
                  <td style="vertical-align: middle">${diaChi}</td>
                  <td style="vertical-align: middle">${email}</td>
                  <td class="text-start" style="padding-left: 40px">
                      Số ngày làm việc: ${soNgayLamViec}<br/>
                      Lương một ngày: ${luongMotNgay}<br/>
                      Tổng lương: ${salary()}
                  </td>
                  <td style="vertical-align: middle; text-align: center">
                      <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                      <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                        <i class="fa-solid fa-pen"></i>
                      </button>
                  </td>
                </tr>`;
      }
    });
    document.getElementById("renderListEmployee").innerHTML =
      contentEmployee.join("");

    let contentCustomer = arr.map((item, index) => {
      let customer = new Customer();
      Object.assign(customer, item);
      let {type, hoTen, diaChi, ma, email, tenCTY, triGiaHoaDon, danhGia} =
        customer;
      if (type == "customer") {
        return `
                  <tr class="text-center">
                    <td style="vertical-align: middle">${ma}</td>
                    <td style="vertical-align: middle">${hoTen}</td>
                    <td style="vertical-align: middle">${diaChi}</td>
                    <td style="vertical-align: middle">${email}</td>
                    <td class="text-start" style="padding-left: 40px">
                        Tên công ty: ${tenCTY}<br/>
                        Trị giá hóa đơn: ${triGiaHoaDon}<br/>
                        Đánh giá: ${danhGia}<br/>
                    </td>
                    <td style="vertical-align: middle; text-align: center">
                        <button class="btn btn-danger" onclick="deleteUser('${ma}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-warning" onclick="getInfoUser('${ma}')">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </td>
                  </tr>`;
      }
    });
    document.getElementById("renderLisCustomer").innerHTML =
      contentCustomer.join("");
  }
  setLocalStorage(arr) {
    localStorage.setItem("arListPerson", JSON.stringify(arr));
  }
  getLocalStorage() {
    let getListPerson = JSON.parse(localStorage.getItem("arListPerson"));
    if (getListPerson) {
      this.arrListPerson = [...getListPerson];
      // this.renderUser(getListPerson);
      this.renderUser(this.arrListPerson);
    }
  }
  deleteUser(maInput) {
    let indexUser = this.arrListPerson.findIndex((user) => user.ma == maInput);
    this.arrListPerson.splice(indexUser, 1);
    this.renderUser(this.arrListPerson);
    this.setLocalStorage(this.arrListPerson);
  }

  getInfoUser(maUser) {
    document.getElementById("btnEdit").style.display = "block";
    let user = this.arrListPerson.find((user) => user.ma == maUser);
    let arrEditUser = document.querySelectorAll(
      ".modal-body input, .modal-body textarea"
    );

    let {type} = user;

    if (type) {
      document.getElementById("addUser").click();
      if (type == "student") {
        renderUserObj("student");
        let arrStudent = document.querySelectorAll(
          ".inputStudent input, .modal-body .form-select"
        );
        let arr = [...arrStudent, ...arrEditUser];

        for (const item of arr) {
          let {id} = item;
          item.value = user[id];
        }
      }
      if (type == "employee") {
        renderUserObj("employee");
        let arrEmployee = document.querySelectorAll(
          ".inputEmployee input, .modal-body .form-select"
        );
        let arr = [...arrEmployee, ...arrEditUser];

        for (const item of arr) {
          let {id} = item;
          item.value = user[id];
        }
      }
      if (type == "customer") {
        renderUserObj("customer");
        let arrCustomer = document.querySelectorAll(
          ".inputCustomer input, .modal-body textarea"
        );
        let arr = [...arrCustomer, ...arrEditUser];

        for (const item of arr) {
          let {id} = item;
          item.value = user[id];
        }
      }
    }
  }
  editInfoUser(arrInfoUser) {
    let indexUser = this.arrListPerson.findIndex(
      (user) => user.ma == arrInfoUser.ma
    );
    if (indexUser != -1) {
      this.arrListPerson[indexUser] = arrInfoUser;
      this.renderUser(this.arrListPerson);
      this.setLocalStorage(this.arrListPerson);
    }
  }
}
