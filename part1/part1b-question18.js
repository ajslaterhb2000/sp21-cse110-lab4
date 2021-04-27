

setInterval(timest,1000);
function timest() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}