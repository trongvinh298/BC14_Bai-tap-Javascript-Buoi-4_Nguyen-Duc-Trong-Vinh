function kiemTra() {
  var canhThu1 = parseInt(document.getElementById("canhThu1").value);
  var canhThu2 = parseInt(document.getElementById("canhThu2").value);
  var canhThu3 = parseInt(document.getElementById("canhThu3").value);
  var kiemTra = document.getElementById("kiemTra");
  kiemTra.style.display = "block";
  if (canhThu1 <= 0 || canhThu2 <= 0 || canhThu3 <= 0) {
    kiemTra.innerHTML = "Chiều dài các cạnh không hợp lệ";
  } else {
    if (canhThu1 === canhThu2) {
      if (canhThu3 === canhThu2) {
        kiemTra.innerHTML = "Đây là tam giác đều";
      } else kiemTra.innerHTML = "Đây là tam giác cân";
    } else if (canhThu2 === canhThu3) {
      kiemTra.innerHTML = "Đây là tam giác cân";
    } else if (canhThu1 === canhThu3) {
      kiemTra.innerHTML = "Đây là tam giác cân";
    } else {
      if (
        Math.pow(canhThu1, 2) + Math.pow(canhThu2, 2) ===
          Math.pow(canhThu3, 2) ||
        Math.pow(canhThu1, 2) + Math.pow(canhThu3, 2) ===
          Math.pow(canhThu2, 2) ||
        Math.pow(canhThu2, 2) + Math.pow(canhThu3, 2) === Math.pow(canhThu1, 2)
      ) {
        kiemTra.innerHTML = "Đây là tam giác vuông";
      } else kiemTra.innerHTML = "Đây không phải làm tam giác đặc biệt";
    }
  }
}
