function chokikan() {
  var date3 = document.getElementById("date3").value;
  var arrDate3 = date3.split("/");

  //賃金締め日のチェック末日だったらshimebi=32となる
  if(document.getElementById("choshimebi2").checked) {
    document.getElementById("choshimebi1").value = "";
    var shimebi = document.getElementById("choshimebi2").value;
  } else {
    var shimebi = document.getElementById("choshimebi1").value;
  }

  //入力年月日の作成
  var fyears = arrDate3[0];

  if(parseInt(arrDate3[2]) > parseInt(shimebi)) {
    var mont = arrDate3[1] - 1;
  } else {
    var mont = arrDate3[1] - 2;
  }

  if(shimebi == 32) {
    //fmons最初の日付の設定
    var fmons = 1;
    var mont = arrDate3[1] - 1;
    } else {
    var fmons = parseInt(shimebi) + 1;
  }

  //montの値によって判定,mont=fmonts
  if(mont <= 0) {
    var mont = 12;
    var fyears = arrDate3[0] - 1;
  }

  //0埋め処理
  var fmonts = ('0' + mont).slice(-2);
  var fmons = ('0' + fmons).slice(-2);
  var shimebi = ('0' + shimebi).slice(-2);

  //月によって値を決める
  if(shimebi == 32) {
    //末日の場合の処理
    if(fmonts == 02) {
      var fmonf = 28;
    } else if (fmonts ==  04 || fmonts == 06 || fmonts == 09 || fmonts == 11) {
      var fmonf = 30;
    } else {
      var fmonf = 31;
    }
    var fyearf = fyears;
    if(fmonts == 02 && fyearf % 4 == 0) {
      var fmonf = 29;
    }
    var fmontf = fmonts;
  }
  //else以下末日以外の処理
  else {
    var fmonf = shimebi;
    var fyearf = fyears;
    var fmontf = ('0' + (parseInt(mont) + 1)).slice(-2);
    if(fmontf >= 13) {
      var fmontf = ('0' + 1).slice(-2);;
      var fyearf = parseInt(fyears + 1);
    }
    if(fmonts == 02) {
      var freki = 28;
    } else if (fmonts ==  04 || fmonts == 06 || fmonts == 09 || fmonts == 11) {
      var freki = 30;
    } else {
      var freki = 31;
    }
    if(fmonts == 02 && fyears % 4 == 0) {
      var freki = 29;
    }
  }
  var fmonS = fyears + "/" + fmonts + "/" + fmons;
  var fmonF = fyearf + "/" + fmontf + "/" + fmonf;
  document.getElementById("chofmon").textContent = fmonS + "~" + fmonF;
}

function chojosei() {
  onetwo = document.joseiritsu.onetwo.checked;
  twothr = document.joseiritsu.twothr.checked;
  foufiv = document.joseiritsu.foufiv.checked;
  thrfou = document.joseiritsu.thrfou.checked;
  ninten = document.joseiritsu.ninten.checked;
  if(onetwo == true) {
    jnana = ((1 / 2) * 100);
  }else if (twothr == true) {
    jnana = ((2 / 3) * 100);
  }else if (foufiv == true) {
    jnana = ((4 / 5) * 100);
  }else if (thrfou == true) {
    jnana = ((3 / 4) * 100);
  }else if (ninten == true) {
    jnana = ((9 / 10) * 100);
  }

  var jgo = parseInt(document.getElementById("chokyuritsu").value);
  var jkyuu = parseInt(document.getElementById("chozikangai").value); //無い場合も
  var jhachiichi = parseInt(document.getElementById("kyugyoni").value); //無い場合も
  if(isNaN(jhachiichi) == true) {
    jhachiichi = 0;
  }
  var jhachini = parseInt(document.getElementById("kyugyoji").value); //無い場合も
  var jichi = parseInt(document.getElementById("chochingin").value);
  var jni = parseInt(document.getElementById("chohiho").value);
  var jsanni = parseInt(document.getElementById("syoteini").value);
  var jsannichi = parseInt(document.getElementById("syoteiji").value);

  var heichin = Math.ceil(jichi / (jni * jsanni));
  var kijunchin = (heichin * jgo / 100); //8330円が上限
  if(kijunchin > 8330) {
    kijunchin = 8330;
  }
  var joseigakutanka = Math.ceil(kijunchin * jnana / 100);
  var jzitan = Math.ceil(jhachini / jsannichi);
  if(isNaN(jzitan) == true) {
      jzitan = 0;
  }
  var jzikan = Math.ceil(jkyuu / jsannichi);
  if(isNaN(jzikan) == true) {
      jzikan = 0;
  }
  var jnichi = (jhachiichi + jzitan - jzikan);
  var joseigaku = (jnichi * joseigakutanka).toLocaleString();
  console.log("平均賃金額" + (heichin).toLocaleString() + " 基準賃金額" + (kijunchin).toLocaleString() + " 一人日当たり助成額単価" + (joseigakutanka).toLocaleString() + " 休業等延日数（全日）" + jhachiichi + " 休業等延日数（短時間）" + jzitan);
  document.getElementById("kochojoseigaku").textContent = "雇用調整助成金の概算額は" + joseigaku + "円です";
  document.getElementById("chuuikome").textContent = "教育訓練の実施で更に金額が加算される可能性があります";
}

function zikangaikesu() {
  document.getElementById("chozikangai").value = 0;
}
