function myData() {
    let data = prompt("Enter The Data", " 1 - January-2022")
    if (data != null) {
        document.getElementById("bigbox").innerHTML = "Hello! you have entered the data: " + data
    }
}
myData()