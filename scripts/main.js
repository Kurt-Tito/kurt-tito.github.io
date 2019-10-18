/* start sakura animation */
$(function () {
    $('body').sakura();
});

/* Initialize when document is ready */
$(document).ready(function () {
    /* sets timeline container display to none for the fade in */
    var timeline = document.getElementsByClassName("container");
    for (var i = 0; i < timeline.length; i++) {
        timeline[i].style.display = "none";
    }

    /* set project title display to none for the fade in */
    document.getElementById("projectTitle").style.display = "none";
    document.getElementById("projectIcon").style.display = "none";

    /* set some elements to fade in */
    $('.initDivider').delay().fadeIn(2500);
    $('#aboutMeContainer').fadeIn(1000);
    $('#educationContainer').fadeIn(1000);
    $('#downloadResumeContainer').fadeIn(1000);
    $('#programmingTools').fadeIn(1000);

    //changes first bubble progress bar
    $('#section1').addClass('changeColor');
});

/* Scrolling down the document, sets progress bubbles */
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y >= 0 && y <= 600) {
        $('#section1').addClass('changeColor');
        $('#section2').removeClass('changeColor');
        $('#section3').removeClass('changeColor');
    } else if (y > 600) {
        $('#section1').removeClass('changeColor');
        $('#section2').addClass('changeColor');
        $('#section3').removeClass('changeColor');
    } else {
        $('#section1').removeClass('changeColor');
        $('#section2').removeClass('changeColor');
        $('#section3').addClass('changeColor');
    }

    if (y > 200) {
        document.getElementById("projectTitle").style.display = "block";
        document.getElementById("projectTitle").style.animation = "2s slidein-right";
        $("#projectIcon").delay().fadeIn(2500);
    }

    /* triggers timeline containers fadein */
    var timeline = document.getElementsByClassName("container");
    for (var i = 0; i < timeline.length; i++) {
        if (y > (300 + i * 200)) {
            timeline[i].style.display = "block";
            timeline[i].style.animation = "2s fadeleft";
        }

    }
});