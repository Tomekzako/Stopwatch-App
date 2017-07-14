$(function () {
    let gameMode = false;
    let action;
    let timeCounter = 0;
    let lapNumber = 0;
    let lapCounter = 0;
    let timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;

    showHideBtns(".startbtn", ".lapbtn");

    $(".startbtn").on('click', function () {
        gameMode = true;
        showHideBtns(".stopbtn", ".lapbtn");
        startAction();
    });

    $(".stopbtn").on('click', function () {
        showHideBtns(".resumebtn", ".resetbtn");
        clearInterval(action);
    });

    $(".resumebtn").on('click', function () {
        showHideBtns(".stopbtn", ".lapbtn");
        startAction();
    });

    $(".resetbtn").on('click', function () {
        location.reload();
    });

    $(".lapbtn").on('click', function () {
        if (gameMode == true) {
            clearInterval(action);
            lapCounter = 0;
            addLap();
            startAction();

        }
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
            if (timeCounter == 100 * 60 * 100) {
                timeCounter = 0;
            }
            lapCounter++;
            if (lapCounter == 100 * 60 * 100) {
                lapCounter = 0;
            }
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

    function addLap() {
        lapNumber++;
        let newLap = '<div>' + '<div>' + 'Lap' + lapNumber + '</div>' + '<div>' + '</div>' + '</div>';
        $(newLap).appendTo(".laps");
    }


});