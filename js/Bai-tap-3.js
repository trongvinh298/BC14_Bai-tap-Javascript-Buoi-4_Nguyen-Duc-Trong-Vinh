function timSoChanLe() {
  var soThu1 = parseInt(document.getElementById("soThu1").value);
  var soThu2 = parseInt(document.getElementById("soThu2").value);
  var soThu3 = parseInt(document.getElementById("soThu3").value);
  var timChanLe = document.getElementById("timChanLe");
  var xuatChan = document.getElementById("xuatSoChan");
  var xuatLe = document.getElementById("xuatSoLe");
  timChanLe.style.display = "block";
  var n = 0;
  if (soThu1 / 2 === Math.floor(soThu1 / 2)) {
    n = n + 1;
  } else n = n;
  if (soThu2 / 2 === Math.floor(soThu2 / 2)) {
    n = n + 1;
  } else n = n;
  if (soThu3 / 2 === Math.floor(soThu3 / 2)) {
    n = n + 1;
  } else n = n;
  var m = 3 - n;
  console.log(n);
  console.log(m);
  xuatChan.innerHTML = n + " số chẵn";
  xuatLe.innerHTML = m + " số lẻ";
}
