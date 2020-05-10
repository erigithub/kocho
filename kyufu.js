function typecheck() {
  var qes1A = document.getElementsByName("qes1");
  var qes2A = document.getElementsByName("qes2");
  var qes3A = document.getElementsByName("qes3");
  var qes4A = document.getElementsByName("qes4");
  var qes5A = document.getElementsByName("qes5");
  for(var i = 0; i < qes1A.length; i++){
    if(qes1A[i].checked) {
      q1A = qes1A[i].value;
    }
  }
  for(var i = 0; i < qes2A.length; i++){
    if(qes2A[i].checked) {
      q2A = qes2A[i].value;
    }
  }
  for(var i = 0; i < qes3A.length; i++){
    if(qes3A[i].checked) {
      q3A = qes3A[i].value;
    }
  }
  for(var i = 0; i < qes4A.length; i++){
    if(qes4A[i].checked) {
      q4A = qes4A[i].value;
    }
  }
  for(var i = 0; i < qes5A.length; i++){
    if(qes5A[i].checked) {
      q5A = qes5A[i].value;
    }
  }
  if(q1A === "q1_yes") {
    type = "ver2";
  } else {
    if(q2A === "q2_yes") {
      type = "ver1";
    } else {
      if(q3A === "q3_yes") {
        type = "ver3";
      } else {
        if(q4A === "q4_no") {
          type = "ver1";
        } else {
          if(q5A === "q5_yes") {
            type = "ver3";
          } else {
            type = "ver1";
          }
        }
      }
    }
  }
}

function kihonteate() {
  var date4 = document.getElementById("date4").value;
  var arrDate4 = date4.split("/");
  var date5 = document.getElementById("date5").value;
  var arrDate5 = date5.split("/"); // 0->year 1->month 2->day
  typecheck();
  console.log(type);
  nenrei = parseInt(document.getElementById("risyokunenrei").value);
  var dayS = arrDate5[2] - arrDate4[2];
  var monthS = arrDate5[1] - arrDate4[1];
  if(dayS < 0){
    monthS = monthS - 1;
  }
  yearS = arrDate5[0] - arrDate4[0];
  if(monthS < 0){
    yearS = yearS - 1;
  }

  switch (type) {
    case 'ver1':
      var typeresult = "一般の受給資格者の日数表をご覧ください";
      ver1();
      break;
    case 'ver2':
      var typeresult = "就職困難者の日数表をご覧ください";
      ver2();
      break;
    case 'ver3':
      var typeresult = "特定受給資格者の日数表をご覧ください";
      ver3();
      break;
  }
  if(nenrei > 64) {
    typeresult = "";
    kihonteatenissu = "基本手当ではなく高年齢求職者給付金が受給される可能性があります。ハローワークインターネットサービスのページをご確認ください。";
  }
  console.log(yearS + ":" + monthS + ":" + dayS);
  document.getElementById("typeresult").textContent = typeresult;
  document.getElementById("kihonteatenissu").textContent = kihonteatenissu;
}

//ver1 ->一般
function ver1() {
  if(yearS > 19) {
    kihonteatenissu = "所定給付日数は150日です";
  } else if (yearS > 9) {
    kihonteatenissu = "所定給付日数は120日です";
  } else if (yearS > 0) {
    kihonteatenissu = "所定給付日数は90日です";
  } else {
    kihonteatenissu = "算定基礎期間が1年未満のため基本手当給付対象になりません";
  }
  document.getElementById("type1hyo").style.display ="block";
  document.getElementById("type2hyo").style.display ="none";
  document.getElementById("type3hyo").style.display ="none";
}
//ver2 ->就職困難者
function ver2() {
  if(yearS > 0) {
    if(nenrei > 44){
      kihonteatenissu = "所定給付日数は360日です";
    } else {
      kihonteatenissu = "所定給付日数は300日です";
    }
  } else {
    kihonteatenissu = "所定給付日数は150日です";
  }
  document.getElementById("type2hyo").style.display ="block";
  document.getElementById("type1hyo").style.display ="none";
  document.getElementById("type3hyo").style.display ="none";
}
//ver3 ->特定受給資格者
function ver3() {
  if(yearS > 19) {
    if(nenrei > 59) {
      kihonteatenissu = "所定給付日数は240日です";
    } else if (nenrei > 44) {
      kihonteatenissu = "所定給付日数は330日です";
    } else if (nenrei > 34) {
      kihonteatenissu = "所定給付日数は270日です";
    } else if (nenrei > 29) {
      kihonteatenissu = "所定給付日数は240日です";
    } else {
      kihonteatenissu = "年齢と資格取得・離職年月日を確認してください";
    }
  } else if (yearS > 9) {
    if(nenrei > 59) {
      kihonteatenissu = "所定給付日数は210日です";
    } else if (nenrei > 44) {
      kihonteatenissu = "所定給付日数は270日です";
    } else if (nenrei > 34) {
      kihonteatenissu = "所定給付日数は240日です";
    } else if (nenrei > 29) {
      kihonteatenissu = "所定給付日数は210日です";
    } else {
      kihonteatenissu = "所定給付日数は180日です";
    }
  } else if (yearS > 4) {
    if(nenrei > 59) {
      kihonteatenissu = "所定給付日数は180日です";
    } else if (nenrei > 44) {
      kihonteatenissu = "所定給付日数は240日です";
    } else if (nenrei > 34) {
      kihonteatenissu = "所定給付日数は180日です";
    } else if (nenrei > 29) {
      kihonteatenissu = "所定給付日数は180日です";
    } else {
      kihonteatenissu = "所定給付日数は120日です";
    }
  } else if (yearS > 0) {
    if(nenrei > 59) {
      kihonteatenissu = "所定給付日数は150日です";
    } else if (nenrei > 44) {
      kihonteatenissu = "所定給付日数は180日です";
    } else if (nenrei > 34) {
      kihonteatenissu = "所定給付日数は150日です";
    } else if (nenrei > 29) {
      kihonteatenissu = "所定給付日数は120日です";
    } else {
      kihonteatenissu = "所定給付日数は90日です";
    }
  } else {
    kihonteatenissu = "所定給付日数は90日です";
  }
  document.getElementById("type3hyo").style.display ="block";
  document.getElementById("type2hyo").style.display ="none";
  document.getElementById("type1hyo").style.display ="none";
}

//qestion表示の問題
function displayQes1() {
  var qes1A = document.getElementsByName("qes1");
  for(var i = 0; i < qes1A.length; i++){
    if(qes1A[i].checked) {
      q1A = qes1A[i].value;
    }
  }
  if(q1A === "q1_yes"){
    document.getElementById("kihonqa2").style.display ="none";
  } else {
    document.getElementById("kihonqa2").style.display ="block";
  }
}

function displayQes2() {
  var qes2A = document.getElementsByName("qes2");
  for(var i = 0; i < qes2A.length; i++){
    if(qes2A[i].checked) {
      q2A = qes2A[i].value;
    }
  }
  if(q2A === "q2_yes"){
    document.getElementById("kihonqa3").style.display ="none";
    document.getElementById("kihonqa4").style.display ="none";
    document.getElementById("kihonqa5").style.display ="none";
  } else {
    document.getElementById("kihonqa3").style.display ="block";
  }
}

function displayQes3() {
  var qes3A = document.getElementsByName("qes3");
  for(var i = 0; i < qes3A.length; i++){
    if(qes3A[i].checked) {
      q3A = qes3A[i].value;
    }
  }
  if(q3A === "q3_yes"){
    document.getElementById("kihonqa4").style.display ="none";
    document.getElementById("kihonqa5").style.display ="none";
  } else {
    document.getElementById("kihonqa4").style.display ="block";
  }
}

function displayQes4() {
  var qes4A = document.getElementsByName("qes4");
  for(var i = 0; i < qes4A.length; i++){
    if(qes4A[i].checked) {
      q4A = qes4A[i].value;
    }
  }
  if(q4A === "q4_yes"){
    document.getElementById("kihonqa5").style.display ="block";
  } else {
    document.getElementById("kihonqa5").style.display ="none";
  }
}
