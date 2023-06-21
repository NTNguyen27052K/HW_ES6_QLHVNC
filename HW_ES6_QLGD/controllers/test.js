if (user == 1) {
  let content = this.arrListPerson.map((item, index) => {
    let student = new Student();
    Object.assign(student, item);
    let {id, hoTen, diaChi, ma, email, toan, ly, hoa, dTB} = student;
    if (id == 1) {
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
                <button class="btn btn-warning" onclick="capNhat('${ma}')">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </td>
            </tr>`;
    }
  });
  document.getElementById("renderListStudent").innerHTML = content.join("");
}
if (user == 2) {
  let content = this.arrListPerson.map((item, index) => {
    let employee = new Employee();
    Object.assign(employee, item);
    let {id, hoTen, diaChi, ma, email, soNgayLamViec, luongMotNgay, salary} =
      employee;
    if (id == 2) {
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
                  <button class="btn btn-warning" onclick="capNhat('${ma}')">
                    <i class="fa-solid fa-pen"></i>
                  </button>
              </td>
            </tr>`;
    }
  });
  document.getElementById("renderListEmployee").innerHTML = content.join("");
}
if (user == 3) {
  let content = this.arrListPerson.map((item, index) => {
    let {id, hoTen, diaChi, ma, email, tenCTY, triGiaHoaDon, danhGia} = item;
    if (id == 3) {
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
                    <button class="btn btn-warning" onclick="capNhat('${ma}')">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                </td>
              </tr>`;
    }
  });
  document.getElementById("renderLisCustomer").innerHTML = content.join("");
}
// arrListPerson.map((item, index) => {
//   if (user == 1) {
//     let student = new Student();
//     Object.assign(student, item);
//     let {id, hoTen, diaChi, ma, email, toan, ly, hoa, dTB} = student;
//     if (id == 1) {
//       let content = `
//       <tr class="text-center">
//         <td style="vertical-align: middle">${ma}</td>
//         <td style="vertical-align: middle">${hoTen}</td>
//         <td style="vertical-align: middle">${diaChi}</td>
//         <td style="vertical-align: middle">${email}</td>
//         <td class="text-start" style="padding-left: 40px">
//             Điểm toán: ${toan}<br/>
//             Điểm Lý: ${ly}<br/>
//             Điểm hóa: ${hoa}<br/>
//             Điểm TB: ${dTB()}
//         </td>
//         <td style="vertical-align: middle; text-align: center">
//           <button class="btn btn-danger" onclick="deleteUser('${ma}')">
//             <i class="fa-solid fa-trash"></i>
//           </button>
//           <button class="btn btn-warning" onclick="capNhat('${ma}')">
//             <i class="fa-solid fa-pen"></i>
//           </button>
//         </td>
//       </tr>`;
//       document.getElementById("renderListStudent").innerHTML = content;
//     }
//   }
//   if (user == 2) {
//     let employee = new Employee();
//     Object.assign(employee, item);
//     let {
//       id,
//       hoTen,
//       diaChi,
//       ma,
//       email,
//       soNgayLamViec,
//       luongMotNgay,
//       salary,
//     } = employee;
//     if (id == 2) {
//       let content = `
//       <tr class="text-center">
//         <td style="vertical-align: middle">${ma}</td>
//         <td style="vertical-align: middle">${hoTen}</td>
//         <td style="vertical-align: middle">${diaChi}</td>
//         <td style="vertical-align: middle">${email}</td>
//         <td class="text-start" style="padding-left: 40px">
//             Số ngày làm việc: ${soNgayLamViec}<br/>
//             Lương một ngày: ${luongMotNgay}<br/>
//             Tổng lương: ${salary()}
//         </td>
//         <td style="vertical-align: middle; text-align: center">
//             <button class="btn btn-danger" onclick="deleteUser('${ma}')">
//               <i class="fa-solid fa-trash"></i>
//             </button>
//             <button class="btn btn-warning" onclick="capNhat('${ma}')">
//               <i class="fa-solid fa-pen"></i>
//             </button>
//         </td>
//       </tr>`;
//       document.getElementById("renderListEmployee").innerHTML = content;
//     }
//   }
//   if (user == 3) {
//     let {id, hoTen, diaChi, ma, email, tenCTY, triGiaHoaDon, danhGia} =
//       item;
//     if (id == 3) {
//       let content = `
//         <tr class="text-center">
//           <td style="vertical-align: middle">${ma}</td>
//           <td style="vertical-align: middle">${hoTen}</td>
//           <td style="vertical-align: middle">${diaChi}</td>
//           <td style="vertical-align: middle">${email}</td>
//           <td class="text-start" style="padding-left: 40px">
//               Tên công ty: ${tenCTY}<br/>
//               Trị giá hóa đơn: ${triGiaHoaDon}<br/>
//               Đánh giá: ${danhGia}<br/>
//           </td>
//           <td style="vertical-align: middle; text-align: center">
//               <button class="btn btn-danger" onclick="deleteUser('${ma}')">
//                   <i class="fa-solid fa-trash"></i>
//               </button>
//               <button class="btn btn-warning" onclick="capNhat('${ma}')">
//                   <i class="fa-solid fa-pen"></i>
//               </button>
//           </td>
//         </tr>`;
//       document.getElementById("renderLisCustomer").innerHTML = content;
//     }
//   }
// });
