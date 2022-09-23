let x = prompt("5+5");
if (x == 10) {
    console.log("okey,you won 100$")
    let y = prompt("10+20");
    if (y == 30) {
        console.log("okey,you won 200$")
        let z = prompt("30+10")
        if (z == 40) {
            console.log("okey,you won 300$")
            let i = prompt("50+50")
            if (i == 100) {
                console.log("okey,you won 400$")
            } else {
                console.log("sorry, you won only 300$")
            }
        } else {
            console.log("sorry, you won only 200$")
        }
    } else {
        console.log("sorry, you won only 100$")
    }
} else {
    console.log("sorry")
}