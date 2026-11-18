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



function delay(value, ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Ошибка при обработке: ${value}`));
            } else {
                resolve(value)
            }
        }, ms)
    })
}

function runSequence() {
    delay(1, 500)
        .then(value => {
            console.log("Первый результат:", value);
            return delay(value + 1, 500, true);
        })
        .then(value => {
            console.log("Второй результат:", value);
            return delay(value + 1, 500);
        })
        .then(value => {
            console.log("Третий результат:", value);
        })
        .catch(error => {
            console.log("Ошибка:", error.message);
        })
        .finally(() => {
            console.log("Цепочка завершена");
        })
}

async function runSequenceAsync() {
    try {
        let value = await delay(1, 500);
        console.log("Первый результат:", value);

        value = await delay(value + 1, 500, true);
        console.log("Второй результат:", value);

        value = await delay(value + 1, 500);
        console.log("Третий результат:", value);

    } catch (error) {
        console.log("Ошибка:", error.message)
    } finally {
        console.log("Цепочка завершена");
    }
}

async function processArray() {
    const numbers1 = [1, 2, 3, 4];
    const results1 = [];

    for (const number of numbers1) {
        try {
            const result = await delay(
                number,
                500,
                Math.random() > 0.7
            );

            results1.push({
                value: result,
                error: null
            });

        } catch (error) {
            results1.push({
                value: number,
                error: error.message
            });
        }
    }

    console.log("Результаты массива:", results1);
}

async function runAll() {
    try {
        const results = await Promise.all([
            delay(1, 500),
            delay(2, 1000),
            delay(3, 1500),
            delay(4, 2000, true)
        ]);

        console.log("Результаты:", results);

    } catch (error) {
        console.log("Ошибка:", error.message)
    }
}

async function runAllSettled() {
    const results = await Promise.allSettled([
        delay(1, 500),
        delay(2, 1000, true),
        delay(3, 1500),
        delay(4, 2000, true)
    ]);

    const succeeded = results.filter(
        item => item.status === "fulfilled"
    );

    const failed = results.filter(
        item => item.status === "rejected"
    );

    console.log("Успешные:", succeeded)
    console.log("Ошибки:", failed)
}

async function runRace() {
    try {
        const result = await Promise.race([
            delay("Полезная операция", 2000),
            delay("Таймаут", 500, true)
        ]);

        console.log("Результат:", result)

    } catch (error) {
        console.log("Гонка завершилась ошибкой:", error.message)
    }
}
runSequence();
// runSequenceAsync();
// processArray();
// runAll();
// runAllSettled();
// runRace();