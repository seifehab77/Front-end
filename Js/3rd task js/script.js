debugger;

function showPreview() {
    var htmlCode = document.getElementById("htmlcode").value;
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode);
    frame.close();
}