window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        const d = new Date();
        const hours = d.getHours() % 12;
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        document.getElementById("hour-hand").style.transform  = `rotate(${30 * hours + minutes / 2}deg)`;
        document.getElementById("minute-hand").style.transform = `rotate(${6 * minutes}deg)`;
        document.getElementById("second-hand").style.transform = `rotate(${6 * seconds}deg)`;


    }, 1000);
});