// function list_name() {
//     var nams = prompt("enter name split ,")
//     var nameARR = nams.split(",")
//     var res = "<ul>"
//     for (let el of nameARR) {
//         res += `<li>${el} </li>`
//     }
//     res += "</ul>"
//     return res
// }
// document.write(list_name())
// function list_name() {
//     var nams = prompt("enter name split ,")
//     var nameARR = nams.split(",")
//     var res = "<ul>"
//     if (nameARR.length < 1) {

//         for (let el of nameARR) {
//             res += `<li>${el} </li>`
//         }
//         res += "</ul>"

//     } else {
//         document.write("write something")
//     }
//     return res
// }
// document.write(list_name())
function list_name() {
    var nams = prompt("enter name split ,")
    if (nams) {
        var nameARR = nams.split(",")
        var res = "<ul>"
        if (nameARR.length > 1) {
            for (let el of nameARR) {
                res += `<li>${el} </li>`
            }
            res += "</ul>"

        }
    } else {
        document.write("write something")
        return " "
    }

    return res
}
document.write(list_name())