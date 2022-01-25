$(function() {
    var vacantX = 300;
    var vacantY = 300;
    $("#puzzlearea").children().each(function(i) {
        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);

        $(this).addClass("puzzlepiece");
        $(this).attr("id", "square_" + x + "_" + y);
        $(this).css({
            "left": x + 'px',
            "top": y + 'px',
            "backgroundImage": 'url("background.jpg")',
            "backgroundPosition": -x + 'px ' + (-y) + 'px'
        });
        $(this).attr("x", x);
        $(this).attr("y", y);

    });

    //code to shuffle the tiles
    $("#controls").click(function() {
        const values = [0, 100, 200, 300];

        for (let i = 0; i < 200; i++) {
            const randomX = Math.floor(Math.random() * values.length);
            const randomY = Math.floor(Math.random() * values.length);

            let tempX = values[randomX];
            let tempY = values[randomY];
            let tile = "#square_" + tempX + "_" + tempY;
            ({ vacantX, vacantY } = moveTile(tile, vacantX, vacantY, tempX, tempY));
        }


    });

    //hover on movable title
    $(".puzzlepiece").hover(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (isMovable(tempX, vacantX, tempY, vacantY)) {
            $(this).css({ "border-color": "red", "color": "red" });
        }
    }, function() {
        $(this).css({ "border-color": "black", "color": "black" });
    });

    //click on movable title
    $(".puzzlepiece").click(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if (isMovable(tempX, vacantX, tempY, vacantY)) {
            ({ vacantX, vacantY } = moveTile(this, vacantX, vacantY, tempX, tempY));

        } else {
            console.log(" can't move");
        }

    });


});

function isMovable(tempX, vacantX, tempY, vacantY) {
    return (tempX + 100 == vacantX && tempY == vacantY) ||
        (tempX - 100 == vacantX && tempY == vacantY) ||
        (tempY + 100 == vacantY && tempX == vacantX) ||
        (tempY - 100 == vacantY && tempX == vacantX);
}

function moveTile(tile, vacantX, vacantY, tempX, tempY) {
    $(tile).attr("x", vacantX);
    $(tile).attr("y", vacantY);
    let x = vacantX;
    let y = vacantY;

    $(tile).css({
        "left": x + 'px',
        "top": y + 'px',
        "backgroundImage": 'url("background.jpg")',
        // "backgroundPosition": -x + 'px ' + (-y) + 'px'
    });

    $(tile).attr("id", "square_" + vacantX + "_" + vacantY);
    vacantX = tempX;
    vacantY = tempY;
    return { vacantX, vacantY };
}