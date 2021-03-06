window.onload = function() {
    if (!(checkCookie("cookiePromptShown"))) {
        document.getElementById('cookieBar').style.display = "flex";
    }
    document.getElementById('navbar').innerHTML = "<img src='../logo.svg'><div><li><a href='../' target='_blank'>Home</a></li><li><a href='../Contents/resources.html' target='_blank'>Resources</a></li><li><a href='../Contents/tutorials.html' target='_blank'>Tutorials</a></li><li><a href='../Contents/CTFs.html' target='_blank'>CTFs</a></li></div>";
}

window.onscroll = function() { updateScrollBar() };

function updateScrollBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

function setCookie(cname, cvalue, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var username = getCookie(cname);
    if (username == "") {
        return false;
    } else {
        return true;
    }
}

function delay(URL) {
    setTimeout(function() { window.location = URL }, 700);
}

function hideCookieBar() {
    setCookie("cookiePromptShown", "yes", 30);
    document.getElementById("cookieBar").style.display = "none";
}

function copyText(id) {
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById('copy').innerHTML = "done";
    setTimeout(function() {
        document.getElementById('copy').innerHTML = "content_copy";
    }, 2000);
}