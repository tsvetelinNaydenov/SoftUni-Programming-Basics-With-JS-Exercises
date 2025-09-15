function delayTimeDisplayer (hour, minutes){
      let totalMinutes = (hour * 60) + minutes + 15;
      let newHour = Math.floor(totalMinutes / 60) % 24;
      let newMinutes = totalMinutes % 60;

      if (newMinutes < 10)
         console.log(`${newHour}:0${newMinutes}`);
      else
         console.log(`${newHour}:${newMinutes}`);
     }

delayTimeDisplayer(12, 49);