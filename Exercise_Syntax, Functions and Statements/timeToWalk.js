function calculate(steps, footPrint, kmPerH) {
    let mPerS = (kmPerH * 1000) / 3600;
    let distance = steps * footPrint;
    let restTime = Math.floor(distance / 500) * 60;
    let time = (distance / mPerS) + restTime;

    let hours = (Math.floor(time / 3600)).toString().padStart(2, '0');
    let mins = (Math.floor(time / 60)).toString().padStart(2, '0');
    let secs = (time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${mins}:${secs}`);
}
calculate(2564, 0.70, 5.5);