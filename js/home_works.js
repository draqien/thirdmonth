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
let position = 0;
const speed = 1;
const maxPosition = parent.clientWidth - child.offsetWidth;

function move() {
    position += speed;

    if (position >= maxPosition) {
        position = maxPosition;
        child.style.left = `${position}px`;
        return;
    }

    child.style.left = `${position}px`;
    requestAnimationFrame(move);
}
move();
