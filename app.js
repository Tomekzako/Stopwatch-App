$(function () {

    let action;
    let timeCounter = 0;
    let lapCounter = 0;
    let timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;

    showHideBtns(".startbtn", ".lapbtn");

    $(".startbtn").on('click', function () {
        showHideBtns(".stopbtn", ".lapbtn");
        startAction();
    });


    // Functions 

    function showHideBtns(x, y) {
        $('.control').hide();
        $(x).show();
        $(y).show();
    }

    function startAction() {
        action = setInterval(function () {
            timeCounter++;
            lapCounter++;
            updateTime();
        }, 10);
    }

    function updateTime() {
        timeMinutes = Math.floor(timeCounter / 6000);
        timeSeconds = Math.floor((timeCounter % 6000) / 100);
        timeCentiseconds = Math.floor((timeCounter % 6000) % 100);

        $('#timeminute').text(timeMinutes);
        $('#timesecond').text(timeSeconds);
        $('#timecentisecond').text(timeCentiseconds);

        $('#lapeminute').text(timeMinutes);
        $('#lapsecond').text(timeSeconds);
        $('#lapcentisecond').text(timeCentiseconds);
    }


});