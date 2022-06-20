

function revealAbout() {
    const el = document.getElementById('about');
    el.style.display ="block";
}

function hideAbout() {
    const el = document.getElementById('about');
    el.style.display = "none";
}

function revealExperience() {
    const el = document.getElementById('experience');
    el.style.display ="block";
}

function hideExperience() {
    const el = document.getElementById('experience');
    el.style.display = "none";
}
function revealContact() {
    const el = document.getElementById('contact');
    el.style.display ="block";
}

function hideContact() {
    const el = document.getElementById('contact');
    el.style.display = "none";
}

var id = "";
var contentMessage = "";
var contentHead = "";

function content(id) {
    if(id==="about") {
        contentHead = "About Me"
        contentMessage = "Motivated life-long learner who takes consistent and measured risks to improve teaching practices. Approaches life and career with a growth-mindset, with the understanding that nothing is ever completely mastered, and there is always something new to learn. Dependable and team-oriented, always willing to consider other perspectives but also not afraid to voice my own viewpoint. A proud father to Wyatt and Willow, and a partner to Mark."

    }
}