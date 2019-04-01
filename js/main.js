(function() {
  'use strict'

  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let result = document.getElementById('result');
  let startTime;
  let isStarted = false;

  //スタートボタンを押したときの処理
  start.addEventListener('click', function() {
    if (isStarted === true) {　//returnで関数内の処理が止まる？
      return;
    }
    isStarted = true;
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
    result.textContent = '0.000';
    result.className ='standby';
  });

  //ストップボタンを押したときの処理
  stop.addEventListener('click', function() {
    let elapsedTime;
    let diff;
    if (isStarted === false) {　//returnで関数内の処理が止まる？
      return;
    }
    isStarted = false;
    elapsedTime = (Date.now() - startTime) / 1000;  //ミリ秒から秒への変換
    result.textContent = elapsedTime.toFixed(3);  //小数点以下3桁まで表示する
    this.className = 'pushed';
    start.className = '';
    result.className = '';
    diff = elapsedTime - 5.0;
    if (Math.abs(diff) < 1.0) {  //diffの絶対値をとる
        result.className = 'perfect';
    }
  });
})();
