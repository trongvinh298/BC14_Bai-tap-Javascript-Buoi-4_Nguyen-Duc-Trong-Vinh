function tinhNgayThangNam() {
  var day = parseInt(document.getElementById("soNgay").value);
  var month = parseInt(document.getElementById("soThang").value);
  var year = parseInt(document.getElementById("soNam").value);
  var nextDay = document.getElementById("ngayTiepTheo");
  var prevDay = document.getElementById("ngayTruocDo");
  nextDay.style.display = "block";
  prevDay.style.display = "block";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
      {
        if ((day < 31) & (day > 1)) {
          nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
          prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
        } else if (day === 1) {
          nextDay.innerHTML = 2 + "/" + month + "/" + year;
          switch (month) {
            case 1:
              {
                prevDay.innerHTML = "31/12" + "/" + (year - 1);
              }
              break;
            case 8:
              {
                prevDay.innerHTML = "31/7" + "/" + year;
              }
              break;
            case 3:
              {
                if (year / 4 !== Math.floor(year / 4)) {
                  prevDay.innerHTML = "28/2/" + year;
                } else {
                  prevDay.innerHTML = "29/2/" + year;
                }
              }
              break;
            case 5:
            case 7:
            case 10: {
              if ((day !== 31) & (day !== 1)) {
                nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
                prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
              } else if (day === 31) {
                nextDay.innerHTML = "1/" + (month + 1) + "/" + year;
                prevDay.innerHTML = "30/" + month + "/" + year;
              } else if (day === 1) {
                nextDay.innerHTML = 2 + "/" + month + "/" + year;
                prevDay.innerHTML = "30/" + (month - 1) + "/" + year;
              } else {
                prevDay.innerHTML = "Ngày không hợp lệ";
                nextDay.innerHTML = "Ngày không hợp lệ";
              }
            }
          }
        } else if (day === 31) {
          nextDay.innerHTML = 1 + "/" + (month + 1) + "/" + year;
          prevDay.innerHTML = "30/" + month + "/" + year;
        } else {
          prevDay.innerHTML = "Ngày không hợp lệ";
          nextDay.innerHTML = "Ngày không hợp lệ";
        }
      }
      break;

    case 2:
      {
        if (year / 4 !== Math.floor(year / 4)) {
          if ((day < 28) & (day > 1)) {
            nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
            prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
          } else if (day === 28) {
            nextDay.innerHTML = "1/3/" + year;
            prevDay.innerHTML = "27/2/" + year;
          } else if (day === 1) {
            nextDay.innerHTML = "2/2/" + year;
            prevDay.innerHTML = "31/1/" + year;
          } else {
            prevDay.innerHTML = "Ngày không hợp lệ";
            nextDay.innerHTML = "Ngày không hợp lệ";
          }
        } else {
          if ((day < 29) & (day > 1)) {
            nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
            prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
          } else if (day === 29) {
            nextDay.innerHTML = "1/3/" + year;
            prevDay.innerHTML = "28/2/" + year;
          } else if (day === 1) {
            nextDay.innerHTML = "2/2/" + year;
            prevDay.innerHTML = "31/1/" + year;
          } else {
            prevDay.innerHTML = "Ngày không hợp lệ";
            nextDay.innerHTML = "Ngày không hợp lệ";
          }
        }
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      {
        if ((day < 30) & (day > 1)) {
          nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
          prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
        } else if (day === 1) {
          nextDay.innerHTML = 2 + "/" + month + "/" + year;
          prevDay.innerHTML = "31/" + (month - 1) + "/" + year;
        } else if (day === 30) {
          nextDay.innerHTML = 1 + "/" + (month + 1) + "/" + year;
          prevDay.innerHTML = "29/" + month + "/" + year;
        } else {
          prevDay.innerHTML = "Ngày không hợp lệ";
          nextDay.innerHTML = "Ngày không hợp lệ";
        }
      }
      break;
    case 12:
      {
        if ((day < 31) & (day > 1)) {
          nextDay.innerHTML = day + 1 + "/" + month + "/" + year;
          prevDay.innerHTML = day - 1 + "/" + month + "/" + year;
        } else if (day === 1) {
          nextDay.innerHTML = 2 + "/" + month + "/" + year;
          prevDay.innerHTML = "30/11/" + year;
        } else if (day === 31) {
          nextDay.innerHTML = "1/1/" + (year + 1);
          prevDay.innerHTML = "30/12/" + year;
        } else {
          prevDay.innerHTML = "Ngày không hợp lệ";
          nextDay.innerHTML = "Ngày không hợp lệ";
        }
      }
      break;
    default: {
      prevDay.innerHTML = "Ngày không hợp lệ";
      nextDay.innerHTML = "Ngày không hợp lệ";
    }
  }
}
