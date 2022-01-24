var start = false;

$(document).ready(function() {
    $(".boundary").mouseenter(function() {
        if (start) {
            $(".boundary").css("backgroundColor", "red");
            $("#status").text("You Lose! :(");
            start = false;
        }

    });
});

$(function() {
    $("#start").mouseenter(function() {
        $(".boundary").css("backgroundColor", "#eeeeee");
        $("#status").text("Game started, move to end");
        start = true;
    });
});

$(function() {
    $("#end").mouseenter(function() {
        if (start) {
            if (!isWallTouched) {
                $("#status").text("You Win! :)");
            }
            start = false;
        }
    });

});

$(function() {
    $("#maze").mouseleave(function() {
        if (start) {
            $(".boundary").css("backgroundColor", "red");
            $("#status").text("You Lose! :[");
            start = false;
        }
    });
})