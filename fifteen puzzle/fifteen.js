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
        console.log("vacant " + vacantX + " " + vacantY);
        const values = [0, 100, 200, 300];

        for (let i = 0; i < 100; i++) {
            const randomX = Math.floor(Math.random() * values.length);
            const randomY = Math.floor(Math.random() * values.length);

            let tempX = values[randomX];
            let tempY = values[randomY];
            console.log("random " + tempX + " " + tempY);


            // if (tempX == vacantX && tempY == vacantY) {
            //     console.log("blank detected");
            //     continue;
            // }
            // let tempX = 0;
            // let tempY = 0;
            let tile = "#square_" + tempX + "_" + tempY;
            // $(tile).attr("id", "square_" + vacantX + "_" + vacantY);


            $(tile).attr("x", vacantX);
            $(tile).attr("y", vacantY);
            let x = vacantX;
            let y = vacantY;

            $(tile).css({
                "left": x + 'px',
                "top": y + 'px',
                "backgroundImage": 'url("background.jpg")',
                "backgroundPosition": -x + 'px ' + (-y) + 'px'
            });

            $(tile).attr("id", "square_" + vacantX + "_" + vacantY);
            vacantX = tempX;
            vacantY = tempY;
        }


    });

    $(".puzzlepiece").click(function() {
        let tempX = parseInt($(this).attr("x"));
        let tempY = parseInt($(this).attr("y"));
        if ((tempX + 100 == vacantX && tempY == vacantY) ||
            (tempX - 100 == vacantX && tempY == vacantY) ||
            (tempY + 100 == vacantY && tempX == vacantX) ||
            (tempY - 100 == vacantY && tempX == vacantX)) {
            $(this).attr("x", vacantX);
            $(this).attr("y", vacantY);
            let x = vacantX;
            let y = vacantY;

            $(this).css({
                "left": x + 'px',
                "top": y + 'px',
                "backgroundImage": 'url("background.jpg")',
                "backgroundPosition": -x + 'px ' + (-y) + 'px'
            });
            $(this).attr("id", "square_" + vacantX + "_" + vacantY);
            vacantX = tempX;
            vacantY = tempY;
        } else {
            console.log(" can't move");

        }

    });


});