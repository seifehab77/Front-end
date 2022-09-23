function myFunction() {
    var text = "Choose OK or Cancel.";
    if (confirm(text) == true) {
        document.write(`<div class="ok">
        <h1> true </h1>
    </div>`)
    } else {
        document.write(`  <div class="noo">
        <h1> cancel </h1>
    </div>`)
    }
}
myFunction();