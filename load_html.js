function load_div(path, name) {
    console.log(path)
    fetch(path).then(response=> response.text())
    .then(text=> document.getElementById(name).innerHTML = text);
}