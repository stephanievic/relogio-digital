setInterval(() => {
    const date = new Date ();

    let hour = date.getHours ();
    let minutes = date.getMinutes ();
    let seconds = date.getSeconds ();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    const time = hour + ":" + minutes + ":" + seconds;
    
    const divClock = document.getElementById ("hour");
    divClock.textContent = time; 
}, 1000);

time ();
