let input = document.getElementById("input"), button = document.getElementById("submit"), out = document.getElementById("out")


// 1 win / 2 smaller / 3 bigger

let range = 100,
    gueses = 0;
let r = Math.floor(Math.random() * range + 1);
let log = txt => console.log(txt)
function Guess(num) {

    let n = parseInt(num);
    if (n >= 1) {
        gueses += 1
        if (n == r) {
            log("Big Win");
            let o = {
                msg: "Big Win",
                result: 1,
                gueses,
                r
            }
            displayOut("Number Guessed <br>")
             r = Math.floor(Math.random() * range + 1);
            gueses = 0;
            return o
        } else if (n > r) {
            log("Incorrect, think smaller");
            displayOut("Incorrect, think smalller")
            return {
                msg: "Incorrect, think smalller",
                result: 3,
                n
            }
        } else if (n < r) {
            log("Incorrect think, bigger");
            displayOut("Incorrect, think bigger")
            return {
                msg: "Incorrect, think bigger",
                result: 2,
                n
            }
        }
    }
}

function displayOut(s) {
    out.innerHTML += s.toString() + "<br>"
}

button.addEventListener("click", () => {
    Guess(input.value);
    input.value = 0;
})