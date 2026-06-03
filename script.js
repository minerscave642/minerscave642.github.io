const bullet = document.getElementById("bullet");
const sprayButton = document.getElementById("sprayButton");

sprayButton.addEventListener("click", () => {
    let x = 145;
    let y = 145;
    let step = 0;

    const interval = setInterval(() => {
        x += (Math.random() * 20 - 10);
        y -= 8; // upward recoil

        bullet.style.left = x + "px";
        bullet.style.top = y + "px";

        step++;

        if (step > 20) clearInterval(interval);
    }, 80);
});
