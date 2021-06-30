function chaoHoi() {
  var nguoiDung = document.getElementById("user").value;
  var chaoHoi = document.getElementById("chaoHoi");
  var nguoiChao = document.getElementById("nguoiChao");
  chaoHoi.style.display = "block";
  switch (nguoiDung) {
    case "dad":
      nguoiChao.innerHTML = "Bố";
      break;
    case "mom":
      nguoiChao.innerHTML = "Mẹ";
      console.log(user);
      break;
    case "brother":
      nguoiChao.innerHTML = "Anh Trai";
      break;
    case "sister":
      nguoiChao.innerHTML = "Em Gái";
  }
}
