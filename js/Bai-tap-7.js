function docSoNguyen() {
  var soNguyen3 = parseInt(document.getElementById("soNguyen3").value);
  var hangTram = Math.floor(soNguyen3 / 100);
  var hangChuc = Math.floor((soNguyen3 - hangTram * 100) / 10);
  var hangDonVi = soNguyen3 - hangTram * 100 - hangChuc * 10;
  var cachDoc = document.getElementById("cachDoc");
  var docHangTram = document.getElementById("hangTram");
  var docHangChuc = document.getElementById("hangChuc");
  var docHangDonVi = document.getElementById("hangDonVi");
  cachDoc.style.display = "block";
  switch (hangTram) {
    case 1:
      {
        docHangTram.innerHTML = "Một Trăm ";
      }
      break;
    case 2:
      {
        docHangTram.innerHTML = "Hai Trăm ";
      }
      break;
    case 3:
      {
        docHangTram.innerHTML = "Ba Trăm ";
      }
      break;
    case 4:
      {
        docHangTram.innerHTML = "Bốn Trăm ";
      }
      break;
    case 5:
      {
        docHangTram.innerHTML = "Năm Trăm ";
      }
      break;
    case 6:
      {
        docHangTram.innerHTML = "Sáu Trăm ";
      }
      break;
    case 7:
      {
        docHangTram.innerHTML = "Bảy Trăm ";
      }
      break;
    case 8:
      {
        docHangTram.innerHTML = "Tám Trăm ";
      }
      break;
    case 9: {
      docHangTram.innerHTML = "Chín Trăm ";
    }
  }
  switch (hangChuc) {
    case 0:
      {
        if (hangDonVi !== 0) {
          docHangChuc.innerHTML = "Lẻ ";
        } else docHangChuc.innerHTML = "";
      }
      break;

    case 1:
      {
        docHangChuc.innerHTML = "Mười ";
      }
      break;
    case 2:
      {
        docHangChuc.innerHTML = "Hai Mươi ";
      }
      break;
    case 3:
      {
        docHangChuc.innerHTML = "Ba Mươi ";
      }
      break;
    case 4:
      {
        docHangChuc.innerHTML = "Bốn Mươi ";
      }
      break;
    case 5:
      {
        docHangChuc.innerHTML = "Năm Mươi ";
      }
      break;
    case 6:
      {
        docHangChuc.innerHTML = "Sáu Mươi ";
      }
      break;
    case 7:
      {
        docHangChuc.innerHTML = "Bảy Mươi ";
      }
      break;
    case 8:
      {
        docHangChuc.innerHTML = "Tám Mươi ";
      }
      break;
    case 9: {
      docHangChuc.innerHTML = "Chín Mươi ";
    }
  }
  switch (hangDonVi) {
    case 0:
      {
        docHangDonVi.innerHTML = "";
      }
      break;

    case 1:
      {
        if (hangChuc === 0) {
          docHangDonVi.innerHTML = "Một";
        } else {
          docHangDonVi.innerHTML = "Mốt";
        }
      }
      break;
    case 2:
      {
        docHangDonVi.innerHTML = "Hai";
      }
      break;
    case 3:
      {
        docHangDonVi.innerHTML = "Ba";
      }
      break;
    case 4:
      {
        docHangDonVi.innerHTML = "Bốn";
      }
      break;
    case 5:
      {
        docHangDonVi.innerHTML = "Năm";
      }
      break;
    case 6:
      {
        docHangDonVi.innerHTML = "Sáu";
      }
      break;
    case 7:
      {
        docHangDonVi.innerHTML = "Bảy";
      }
      break;
    case 8:
      {
        docHangDonVi.innerHTML = "Tám";
      }
      break;
    case 9: {
      docHangDonVi.innerHTML = "Chín";
    }
  }
}
