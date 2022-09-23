function cal() {

    var num = prompt("enter number split ,")
    num = num.split(",")
    var op = prompt("(+ - * /)")
    var res = 0
    if (op == "+") {
        for (let el of num) {
            res += Number(el)
        }
    } else if (op == "-") {
        var res = num[0]
        for (var i = 1; i < num.length; i++) {
            res -= Number(num[i])
        }
    } else if (op == "*") {
        var res = num[0]
        for (var i = 1; i < num.length; i++) {
            res *= Number(num[i])
        }
    } else if (op == "/") {
        var res = num[0]
        for (var i = 1; i < num.length; i++) {
            res /= Number(num[i])
        }

    }
    return res
}
document.write(cal())