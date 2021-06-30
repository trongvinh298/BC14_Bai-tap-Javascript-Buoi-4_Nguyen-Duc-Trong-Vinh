function tinhNgayTrongThang() {
  var soThang = parseInt(document.getElementById("soThang1").value);
  var soNam = parseInt(document.getElementById("soNam1").value);
  var ngayTrongThang = document.getElementById("ngayTrongThang");
  ngayTrongThang.style.display = "block";
  if (soNam >= 0) {
    switch (soThang) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        {
          ngayTrongThang.innerHTML = "Số ngày trong tháng là 31";
        }
        break;
      case 2:
        {
          if (soNam / 4 !== Math.floor(soNam / 4)) {
            ngayTrongThang.innerHTML = "Số ngày trong tháng là 28";
          } else {
            ngayTrongThang.innerHTML = "Số ngày trong tháng là  29";
          }
        }
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        {
          ngayTrongThang.innerHTML = "Số ngày trong tháng là 30";
        }
        break;
      default: {
        ngayTrongThang.innerHTML = "Vui lòng nhập tháng và năm hợp lệ";
      }
    }
  } else ngayTrongThang.innerHTML = "Vui lòng nhập tháng và năm hợp lệ";
}
