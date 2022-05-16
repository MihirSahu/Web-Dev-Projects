var count = 0;
function Increase() {
    count++;
    document.getElementById("counter").innerText = String(count);
}
function Decrease() {
    count--;
    document.getElementById("counter").innerText = String(count);
}
function Reset() {
    count = 0;
    document.getElementById("counter").innerText = String(count);
}
