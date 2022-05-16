function change_color() {
    if (document.body.style.backgroundColor == "red") {
        document.body.style.cssText = "background-color: blue";
        document.querySelector("h3").style.cssText = "color: blue";
        document.querySelector("h3").innerText = "Blue";
    }
    else {
        document.body.style.cssText = "background-color: red";
        document.querySelector("h3").style.cssText = "color: red";
        document.querySelector("h3").innerText = "Red";
    }
}
