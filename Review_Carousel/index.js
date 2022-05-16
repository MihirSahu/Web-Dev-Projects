//let category = ["waifu", "neko", "shinobu", "megumin", "bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat", "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive", "handhold", "nom", "bite", "glomp", "slap", "kill", "kick", "happy", "wink", "poke", "dance", "cringe"];
//let random_item = category[Math.floor(Math.random()*category.length)];
let data;
let picture_request = new XMLHttpRequest();
let name_request = new XMLHttpRequest();
//picture_request.open('GET', `https://api.waifu.pics/sfw/${random_item}`, true)
picture_request.open('GET', `https://picsum.photos/200/300`, true);
name_request.open('GET', `https://randomuser.me/api/`, true);
picture_request.onload = function () {
    // Begin accessing JSON data here
    data = JSON.parse(this.response);
    let element = document.getElementById("profile_pic");
    if (element != null) {
        element.src = data.url;
    }
};
name_request.onload = function () {
    data = JSON.parse(this.response);
    console.log(data.results[0].name);
    let element = document.getElementById("name");
    element.innerText = data.results[0].name.first + " " + data.results[0].name.last;
};
picture_request.send();
name_request.send();
