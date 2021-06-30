function tinhKhoangCach() {
  var xT = parseInt(document.getElementById("xTruong").value);
  var yT = parseInt(document.getElementById("yTruong").value);
  var xA = parseInt(document.getElementById("xA").value);
  var yA = parseInt(document.getElementById("yA").value);
  var xB = parseInt(document.getElementById("xB").value);
  var yB = parseInt(document.getElementById("yB").value);
  var xC = parseInt(document.getElementById("xC").value);
  var yC = parseInt(document.getElementById("yC").value);
  var tenSinhVien = document.getElementById("tenSinhVien");
  tenSinhVien.style.display = "block";
  var khoangCachA = Math.sqrt(
    Math.pow(Math.abs(xA - xT), 2) + Math.pow(Math.abs(yA - yT), 2)
  );
  var khoangCachB = Math.sqrt(
    Math.pow(Math.abs(xB - xT), 2) + Math.pow(Math.abs(yB - yT), 2)
  );
  var khoangCachC = Math.sqrt(
    Math.pow(Math.abs(xC - xT), 2) + Math.pow(Math.abs(yC - yT), 2)
  );
  var khoangCachMax = Math.max(khoangCachA, khoangCachB, khoangCachC);
  console.log(khoangCachA);
  console.log(khoangCachB);
  console.log(khoangCachC);
  switch (khoangCachMax) {
    case khoangCachA:
      {
        tenSinhVien.innerHTML = "Nhà sinh viên A xa trường nhất";
      }
      break;
    case khoangCachB:
      {
        tenSinhVien.innerHTML = "Nhà sinh viên B xa trường nhất";
      }
      break;
    case khoangCachC: {
      tenSinhVien.innerHTML = "Nhà sinh viên C xa trường nhất";
    }
  }
}
