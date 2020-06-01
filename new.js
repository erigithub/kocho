function kikan() {
  var date1 = document.getElementById("date1").value;
  var arrDate1 = date1.split("/");

  //末日チェックが外れて締め日の入力もない場合

  //賃金締め日のチェック末日だったらshimebi=32となる
  if(document.getElementById("shimebi2").checked) {
    document.getElementById("shimebi1").value = "";
    var shimebi = document.getElementById("shimebi2").value;
  } else {
    var shimebi = document.getElementById("shimebi1").value;
  }

  //入力年月日の作成
  var fyears = arrDate1[0];

  if(parseInt(arrDate1[2]) > parseInt(shimebi)) {
    var mont = arrDate1[1] - 1;
  } else {
    var mont = arrDate1[1] - 2;
  }

  if(shimebi == 32) {
    //fmons最初の日付の設定
    var fmons = 1;
    var mont = arrDate1[1] - 1;
    } else {
    var fmons = parseInt(shimebi) + 1;
  }

  //montの値によって判定,mont=fmonts
  if(mont <= 0) {
    var mont = 12;
    var fyears = arrDate1[0] - 1;
  }

  //0埋め処理
  var fmonts = ('0' + mont).slice(-2);
  var fmons = ('0' + fmons).slice(-2);
  var shimebi = ('0' + shimebi).slice(-2);

  //月によって値を決める
  if(shimebi == 32) {
    //末日の場合の処理
    // *monf の日数が暦数
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
    var freki = fmonf;
    var syears = fyearf;
    var smons = fmons;
    var smontf = ('0' + (parseInt(fmontf) - 1)).slice(-2);
    if(smontf == 0) {
      var smontf = 12;
      var syears = parseInt(fyears - 1);
    }
    var smonts = smontf;
    var syearf = syears;
    if(smonts == 02) {
      var smonf = 28;
    } else if (smonts ==  04 || smonts == 06 || smonts == 09 || smonts == 11) {
      var smonf = 30;
    } else {
      var smonf = 31;
    }
    if(smonts == 02 && syearf % 4 == 0) {
      var smonf = 29;
    }
    var sreki = smonf;
    var tmons = smons;
    var tmontf = ('0' + (parseInt(smontf) - 1)).slice(-2);
    var tyears = syearf;
    if(tmontf == 0) {
      var tmontf = 12;
      var tyears = parseInt(fyears - 1);
    }
    var tmonts = tmontf;
    var tyearf = tyears;
    if(tmonts == 02) {
      var tmonf = 28;
    } else if (tmonts ==  04 || tmonts == 06 || tmonts == 09 || tmonts == 11) {
      var tmonf = 30;
    } else {
      var tmonf = 31;
    }
    if(tmonts == 02 && tyearf % 4 == 0) {
      var tmonf = 29;
    }
    var treki = tmonf;
  }
  //else以下末日以外の処理
  // *reki の日数が暦数
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
    var smonf = fmonf;
    var syearf = fyears;
    var syears = syearf;
    var smons = fmons;
    var smontf = fmonts;
    var smonts = ('0' + (parseInt(mont) - 1)).slice(-2);
    if(smonts <= 0) {
      var smonts = 12;
      var syears = parseInt(fyears - 1);
    }
    if(smonts == 02) {
      var sreki = 28;
    } else if (smonts ==  04 || smonts == 06 || smonts == 09 || smonts == 11) {
      var sreki = 30;
    } else {
      var sreki = 31;
    }
    if(smonts == 02 && syears % 4 == 0) {
      var sreki = 29;
    }
    var tmonf = smonf;
    var tyearf = syears;
    var tyears = tyearf;
    var tmons = smons;
    var tmontf =smonts;
    var tmonts = ('0' + (parseInt(smonts) - 1)).slice(-2);
    if(tmonts <= 0) {
      var tmonts = 12;
      var tyears = parseInt(fyears - 1);
    }
    if(tmonts == 02) {
      var treki = 28;
    } else if (tmonts ==  04 || tmonts == 06 || tmonts == 09 || tmonts == 11) {
      var treki = 30;
    } else {
      var treki = 31;
    }
    if(tmonts == 02 && tyears % 4 == 0) {
      var treki = 29;
    }
  }

  var fmonS = fyears + "/" + fmonts + "/" + fmons;
  var fmonF = fyearf + "/" + fmontf + "/" + fmonf;
  document.getElementById("fmon").textContent = fmonS + "~" + fmonF;
  document.getElementById("pfmon").textContent = fmonS + "~" + fmonF;
  var smonS = syears + "/" + smonts + "/" + smons;
  var smonF = syearf + "/" + smontf + "/" + smonf;
  document.getElementById("smon").textContent = smonS + "~" + smonF;
  document.getElementById("psmon").textContent = smonS + "~" + smonF;
  var tmonS = tyears + "/" + tmonts + "/" + tmons;
  var tmonF = tyearf + "/" + tmontf + "/" + tmonf;
  document.getElementById("tmon").textContent = tmonS + "~" + tmonF;
  document.getElementById("ptmon").textContent = tmonS + "~" + tmonF;
  nissu = freki + sreki + treki;
}

function checkpart() {
  freki = parseInt(document.getElementById("fpart").value);
  sreki = parseInt(document.getElementById("spart").value);
  treki = parseInt(document.getElementById("tpart").value);
  partnissu = freki + sreki + treki;
}

function partkesu() {
  document.getElementById("fpart").value = 0;
  document.getElementById("spart").value = 0;
  document.getElementById("tpart").value = 0;
}

function teate() {
  //休業手当の計算
  var fmoney = parseInt(document.getElementById("fmoney").value);
  var smoney = parseInt(document.getElementById("smoney").value);
  var tmoney = parseInt(document.getElementById("tmoney").value);
  var ritsu = parseInt(document.getElementById("ritsu").value);

  freki = parseInt(document.getElementById("fpart").value);
  sreki = parseInt(document.getElementById("spart").value);
  treki = parseInt(document.getElementById("tpart").value);
  partnissu = freki + sreki + treki;

  let chingin = fmoney + smoney + tmoney;
  heichin = Math.round((chingin / nissu) * 100) / 100

  if(partnissu > 0){
    hikaku_pf = Math.round((chingin / partnissu) * 100) / 100 * 60 / 100;
    hikaku_ps = Math.round((chingin / nissu) * 100) / 100;
    if(hikaku_pf > hikaku_ps) {
      heichin = hikaku_pf;
    }else {
      heichin = hikaku_ps;
    }
    console.log(hikaku_pf + ":" + hikaku_ps);
  }
  heikinchin = ((Math.round(heichin / 0.001) / 1000)).toLocaleString();
  let kyugyoteate = (Math.round(heichin * ritsu / 100)).toLocaleString();
  document.getElementById("kyugyoteate").textContent = "平均賃金は" + heikinchin + "円で、休業手当の概算額は" + kyugyoteate + "円です";
}
