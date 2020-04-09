function dispF() {
  var kyuboxfc = document.getElementById("date1").value;
  if(kyuboxfc.length > 5) {
    document.getElementById("kyuboxf").style.display ="block";
  }
}

function dispS() {
  var kyuboxsc = document.getElementById("shimebi1").value;
  var kyuboxscc = document.getElementById("shimebi2");
  var flag = false;
  if(kyuboxscc.checked === true) {
    var flag = true;
  }
  if(kyuboxsc == "" && flag == false) {
    document.getElementById("errmsg").textContent = "賃金の締め日を入力してください";
    document.getElementById("kyuboxs").style.display ="none";
  } else {
    document.getElementById("kyuboxs").style.display ="block";
      document.getElementById("errmsg").textContent = "";
  }
}

function dispCF() {
  var kochok = document.getElementById("kochok");
  if(kochok.checked === true) {
    document.getElementById("joseif").style.display ="block";
  } else {
    document.getElementById("joseif").style.display ="none";
  }
}

function dispCS() {
  if(document.getElementById("chokyuritsu").value >= 60) {
    document.getElementById("joseis").style.display ="block";
  } else {
    document.getElementById("joseis").style.display ="none";
  }
}

function dispCT() {
  var date3c = document.getElementById("date3").value;
  if(date3c.length > 5) {
    document.getElementById("joseit").style.display ="block";
  }
}

function dispCFi() {
  var choboxc = document.getElementById("choshimebi1").value;
  var choboxcc = document.getElementById("choshimebi2");
  var flag = false;
  if(choboxcc.checked === true) {
    var flag = true;
  }
  if(choboxc == "" && flag == false) {
    document.getElementById("joseifiv").style.display ="none";
  } else {
    document.getElementById("joseifiv").style.display ="block";
  }
}

function dispCSi() {
  var csixf = document.getElementById("kyugyoni").value;
  var csixs = document.getElementById("kyugyoji").value;
  var csixt = document.getElementById("chozikangai").value;
  if(isNaN(csixf) == true || isNaN(csixs) == true || isNaN(csixt) == true) {
    document.getElementById("joseisix").style.display ="none";
  } else {
    document.getElementById("joseisix").style.display ="block";
  }
}

function dispCSe() {
    if(document.getElementById("chochingin").value == "") {
      document.getElementById("joseisev").style.display ="none";
    } else {
      document.getElementById("joseisev").style.display ="block";
    }
}

function dispCEi() {
    if(document.getElementById("chohiho").value == "") {
      document.getElementById("joseieig").style.display ="none";
    } else {
      document.getElementById("joseieig").style.display ="block";
    }
}

function dispCNi() {
  var cninf = document.getElementById("syoteini").value;
  var cnins = document.getElementById("syoteiji").value;
  if(cninf == "" && cnins == "") {
    document.getElementById("joseinin").style.display ="none";
  } else {
    document.getElementById("joseinin").style.display ="block";
  }
}
