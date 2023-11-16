let sec = document.querySelector('.sec')
let min = document.querySelector('.min')
let hour = document.querySelector('.hour')
let d = new Date()
let s = 0 , m = 0 , h = 0;
setInterval(clock , 1000)
function clock(){
    sec.style.transform = `rotateZ( ${6*(d.getSeconds()+s)}deg)`
    s++
    if(s % 60 == 0 || s == 1){
        min.style.transform = `rotateZ( ${6*(m + d.getMinutes()) }deg)`
        m++
        if(m % 60 == 0 || m == 1){
            hour.style.transform = `rotateZ( ${30*(h + d.getHours() + d.getMinutes()/60 )}deg)`
            h++
        }
    }
}