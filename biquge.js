document.onkeydown = function(e) {
    e = e || window.event;
    console.log(e);
    switch (e.which || e.keyCode) {
        case 37:    // left
        console.log("left");
            document.getElementsByClassName("bottem2")[0].firstElementChild.click();
            break;
        case 39:    // right
            document.getElementsByClassName("bottem2")[0].children[1].firstElementChild.click();
        console.log("right");
            break;
        default:
            return;
    }
    e.preventDefault();
};
