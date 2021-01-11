function background() {
    var x = document.getElementsByClassName('backgound')[0];
    if (x.style.backgroundColor === 'black') {
        x.style.backgroundColor = 'white';
    } else {
        x.style.backgroundColor = 'black';
    }
}

function topLeft() {
    var all = document.getElementsByClassName('circle');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor="whitesmoke";
    }
    var one = document.getElementById('top-left')
    one.style.backgroundColor="red"
}

function topRight() {
    var all = document.getElementsByClassName('circle');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor="whitesmoke";
    }
    var one = document.getElementById('top-right')
    one.style.backgroundColor="red"
}

function bottomLeft() {
    var all = document.getElementsByClassName('circle');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor="whitesmoke";
    }
    var one = document.getElementById('bottom-left')
    one.style.backgroundColor="red"
}

function bottomRight() {
    var all = document.getElementsByClassName('circle');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor="whitesmoke";
    }
    var one = document.getElementById('bottom-right')
    one.style.backgroundColor="red"
}

// functions for the controler

function topControl() {
    var all = document.getElementsByClassName('circle');
    var topLeft = all[0].style.backgroundColor;
    var topRight = all[1].style.backgroundColor;
    var bottomLeft = all[2].style.backgroundColor;
    var bottomRight = all[3].style.backgroundColor;
    all[0].style.backgroundColor = bottomLeft
    all[1].style.backgroundColor = bottomRight
    all[2].style.backgroundColor = topLeft
    all[3].style.backgroundColor = topRight
}

function midControl() {
    var x = document.getElementsByClassName('backgound')[0];
    if (x.style.backgroundColor === 'black') {
        x.style.backgroundColor = 'white';
    } else {
        x.style.backgroundColor = 'black';
    }
}

function bottomControl() {
    var all = document.getElementsByClassName('circle');
    var topLeft = all[0].style.backgroundColor;
    var topRight = all[1].style.backgroundColor;
    var bottomLeft = all[2].style.backgroundColor;
    var bottomRight = all[3].style.backgroundColor;
    all[0].style.backgroundColor = topRight
    all[1].style.backgroundColor = topLeft
    all[2].style.backgroundColor = bottomRight
    all[3].style.backgroundColor = bottomLeft
}