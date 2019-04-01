(function() {
  'use strict'

  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let result = document.getElementById('result');
  let startTime;

  start.addEventListener('click', function() {
    startTime = Date.now();
    this.className = 'pushed';
    stop.className = '';
  });

  stop.addEventListener('click', function() {
    let elapsedTime;
    let diff;
    elapsedTime = (Date.now() - startTime) / 1000;  //ミリ秒から秒への変換
    // result.textContent = elapsedTime;
    result.textContent = elapsedTime.toFixed(3);  //小数点以下3桁まで表示する
    this.className = 'pushed';
    start.className = '';
    diff = elapsedTime - 5.0;
    // if (diff > -1.0 && diff < 1.0)
    if (Math.abs(diff) < 1.0) {  //diffの絶対値をとる
        result.className = 'perfect';
    }
  });
})();
