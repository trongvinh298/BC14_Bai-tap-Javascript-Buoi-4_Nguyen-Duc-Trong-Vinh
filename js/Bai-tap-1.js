function sapXep() {
  var soThuNhat = parseInt(document.getElementById("soThuNhat").value);
  var soThuHai = parseInt(document.getElementById("soThuHai").value);
  var soThuBa = parseInt(document.getElementById("soThuBa").value);
  var divSapXep = document.getElementById("divSapXep");
  var sapXep = document.getElementById("sapXep");
  divSapXep.style.display = "block";
  if (soThuNhat < soThuHai) {
    if (soThuHai < soThuBa) {
      sapXep.innerHTML = soThuNhat + "," + soThuHai + "," + soThuBa;
    } else if (soThuBa > soThuNhat) {
      sapXep.innerHTML = soThuNhat + "," + soThuBa + "," + soThuHai;
    } else {
      sapXep.innerHTML = soThuBa + "," + soThuNhat + "," + soThuHai;
    }
  } else {
    if (soThuHai > soThuBa) {
      sapXep.innerHTML = soThuBa + "," + soThuHai + "," + soThuNhat;
    } else if (soThuBa < soThuNhat) {
      sapXep.innerHTML = soThuHai + "," + soThuBa + "," + soThuNhat;
    } else {
      sapXep.innerHTML = soThuHai + "," + soThuNhat + "," + soThuBa;
    }
  }
}
