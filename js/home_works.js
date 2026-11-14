const gmailInput = document.querySelector("#gmail_input");
const checkButton = document.querySelector("#gmail_button");
const result = document.querySelector("#gmail_result");

const gmailRegex = /^[a-zA-Z0-9][a-zA-Z0-9.]{4,28}[a-zA-Z0-9]@gmail\.com$/i;

checkButton.addEventListener("click", () => {
    const email = gmailInput.value.trim();

    if (gmailRegex.test(email)) {
        result.textContent = "Valid gmail!";
    } else {
        result.textContent = "Invalid gmail!";
    }
});
const parent = document.querySelector(".parent_block");
const child = document.querySelector(".child_block");
let x = 0;
let y = 0;
let direction = "right";
const speed = 1;
const maxX = parent.clientWidth - child.offsetWidth;
const maxY = parent.clientHeight - child.offsetHeight;

function move() {
    if (direction === "right") {
        x += speed;

        if (x >= maxX) {
            x = maxX;
            direction = "down";
        }
    } else if (direction === "down") {
        y += speed;

        if (y >= maxY) {
            y = maxY;
            direction = "left";
        }
    } else if (direction === "left") {
        x -= speed;

        if (x <= 0) {
            x = 0;
            direction = "up";
        }
    } else if (direction === "up") {
        y -= speed;

        if (y <= 0) {
            y = 0;
            direction = "right";
        }
    }

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
    requestAnimationFrame(move);
}
move()

const display = document.querySelector("#seconds")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

let count = 0
let timer = null

start.addEventListener("click", () => {
    if (timer !== null) return;

    timer = setInterval(() => {
        count++;
        display.textContent = count;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = null
})

reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;

    count = 0;
    display.textContent = count;
});