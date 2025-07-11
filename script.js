
 
 const days = document.querySelector("#days");
 const hours = document.querySelector("#hours");
 const mins = document.querySelector("#min");
 const secs = document.querySelector("#sec");

 const currentDate = new Date().getFullYear();

 const anniversaryDate = new Date(`July 25  ${currentDate} 00:00:00`);

 function Timer(){

    const currentTime = new Date();
    const diff = anniversaryDate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 /60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;  
    
    days.textContent  =  d < 10? '0' + d : d ;
    hours.textContent =  h < 10? '0' + h : h ;
    mins.textContent  =  m < 10? '0' + m : m ;
    secs.textContent  =  s < 10? '0' + s : s ;

 }

 setInterval(Timer, 1000);

 Timer();