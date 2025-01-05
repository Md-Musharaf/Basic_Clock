const clock = document.getElementById('clock')
const date1 = document.getElementById('date')
// const clock = document.querySelector('#clock')



setInterval( function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
    date1.innerHTML = date.toDateString();
} , 1000)
