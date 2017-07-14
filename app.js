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

        lapMinutes = Math.floor(lapCounter / 6000);
        lapSeconds = Math.floor((lapCounter % 6000) / 100);
        lapCentiseconds = Math.floor((lapCounter % 6000) % 100);

        $('#timeminute').text(formatNumbers(timeMinutes));
        $('#timesecond').text(formatNumbers(timeSeconds));
        $('#timecentisecond').text(formatNumbers(timeCentiseconds));

        $('#lapeminute').text(formatNumbers(lapMinutes));
        $('#lapsecond').text(formatNumbers(lapSeconds));
        $('#lapcentisecond').text(formatNumbers(lapCentiseconds));
    }

    function formatNumbers(n) {
        if (n < 10) {
            return "0" + n;
        } else {
            return n;
        }
    }


});