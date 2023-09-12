  let hour = document.querySelector('.js-hour-counter');
  let minute = document.querySelector('.js-minutes-counter');
  let second = document.querySelector('.js-seconds-counter');

  let secondCount = 0;
  let minuteCount = 0;
  let hourCount = 0;
  let isCounting = false;
  let intervalId;

  function startTimer(){
    if (!isCounting){
      if (secondCount === 0){
        intervalId = setInterval(() => {
          secondCount += 1;
          second.innerHTML = secondCount;
        // console.log(count);
          if (secondCount === 60){
            secondCount = 0;
            minuteCount += 1
            minute.innerHTML = minuteCount;
          }
          else if (minuteCount === 60){
            minuteCount = 0;
            minute.innerHTML = minuteCount;
            hourCount += 1
            hour.innerHTML = hourCount;
          }
          else if(hourCount = 24){
            hourCount = 0;
            hour.innerHTML = hourCount;
          }
          isCounting = true;
        }, 1000);
      }
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    isCounting = false;
  }

  function resetTimer() {
    stopTimer();
    second.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
  }