log("Ai is Available")
let aibtn = document.getElementById("aibtn")
aibtn.addEventListener("click", () => {
    log("ai starting");
    ai(range)
})

let randint = (range, x) => Math.floor(Math.random() * (range, x) + x);

function ai(range) {
    let i = 1;
    let n = range / 2;
    let gs = [];
    while (i < 2000) {
        let g = Guess(n)
        gs.push(n)
        if(gs.includes(n)) {}
        if (g.result == 1) {
            return log(g);
        } else if (g.result == 2) {
            if (i == 1) n += Math.round(n/2)
            else if (i == 2) n += Math.round((n/2) / 3 )
            else n += 1
            log(g)
        } else if (g.result == 3) {
            if(i == 1) n -= Math.round(n/2)
            else if (i == 2) n -= Math.round(n/2)
            else n -= 1
            log(g)
        }
        i++
    }
}