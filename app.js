let calculator=()=>{
    let seconds=1000;
    let minutes=seconds*60;
    let hours=minutes*60;
    let days=hours*24;
    let years=days*365;
    const startDate= new Date('June 27, 2019 20:00:00').getTime();
const now=new Date().getTime();
let difference=now-startDate;
let calcYears=Math.floor(difference/years);
let calcDays=Math.floor((difference%years)/days);
let calcHours=Math.floor((difference%years%days)/hours);
let calcMins=Math.floor((difference%years%days%hours)/minutes);
let calcSeconds=Math.floor((difference%years%days%hours%minutes)/seconds)
// console.log(calcYears, calcDays, calcHours, calcMins,calcSeconds);
document.querySelector(".year").innerHTML=calcYears;
document.querySelector(".day").innerHTML=calcDays;
document.querySelector(".hour").innerHTML=calcHours;
document.querySelector(".minute").innerHTML=calcMins;
document.querySelector(".second").innerHTML=calcSeconds;
}
setInterval(calculator,1000);
