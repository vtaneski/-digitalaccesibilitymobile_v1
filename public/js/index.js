$(document).ready(function () {
    const AUDIO1 = "audio/1_Živko Marušič, Sanje.mp3";
    const AUDIO2 = "audio/2_Petra Varl, Plavalka.mp3";
    const AUDIO3 = "audio/3_Ivan Grohar, Kapelica.mp3";
    const AUDIO4 = "audio/4_Avgusta Šantel ml., Cvetje v vazi.mp3";
    const AUDIO5 = "audio/5_Darko Golija, Lega sesanja.mp3";
    const AUDIO6 = "audio/6_Slavko Tihec, Akvamobil.mp3";
    const AUDIO7 = "audio/7_Zdenko Huzjan, Vzglavnik zemlje in neba.mp3";

    const sound1 = new Audio(AUDIO1);
    const sound2 = new Audio(AUDIO2);
    const sound3 = new Audio(AUDIO3);
    const sound4 = new Audio(AUDIO4);
    const sound5 = new Audio(AUDIO5);
    const sound6 = new Audio(AUDIO6);
    const sound7 = new Audio(AUDIO7);

    const soundTxtArray = [AUDIO1, AUDIO2, AUDIO3, AUDIO4, AUDIO5, AUDIO6, AUDIO7];
    const soundsArray = [sound1, sound2, sound3, sound4, sound5, sound6, sound7];
    let currentSoundID = 0;

    // basic play and stop functions
    function playSound(sound) {
        sound.play();
        soundPlaying = true;
    }

    function pauseSound(sound) {
        sound.pause();
        soundPlaying = false;
    }

    // play the sound from the selected button
    function playBtnClck(newSoundTxt) {
        // check if we are playing a new sound or playing/pausing the current one
        if (newSoundTxt === soundTxtArray[currentSoundID]) {
            // current sound
            let currentSound = soundsArray[currentSoundID];
            const iconID = currentSoundID + 1;

            if (!currentSound.paused) { // current sound playing
                pauseSound(soundsArray[currentSoundID]);
                // set the proper icon
                $("#play" + iconID).show();
                $("#pause" + iconID).hide();
            } else if (currentSound.paused) { // current sound paused
                playSound(soundsArray[currentSoundID]);
                // set the proper icon
                $("#play" + iconID).hide();
                $("#pause" + iconID).show();
            }

            // in this case it is the same tile
            setActiveTile(iconID, iconID);
        } else {
            // we are playing a new sound
            // frist stop the current sound from playing
            pauseSound(soundsArray[currentSoundID]);
            const nonActiveID = currentSoundID + 1;
            // set the proper icon
            $("#play" + nonActiveID).show();
            $("#pause" + nonActiveID).hide();

            currentSoundID = soundTxtArray.indexOf(newSoundTxt);
            console.log(soundTxtArray[currentSoundID]);
            // play the new sound
            playSound(soundsArray[currentSoundID]);
            const activeID = currentSoundID + 1;
            // set the proper icon
            $("#play" + activeID).hide();
            $("#pause" + activeID).show();

            setActiveTile(nonActiveID, activeID);
        }
    }

    function setActiveTile(nonActiveID, activeID) {
        $("#btn" + nonActiveID).removeClass("active");
        $("#btn" + activeID).addClass("active");
    }

    $("#btn1").on("tap", function () {
        playBtnClck(AUDIO1);
    });
    $("#btn2").on("tap", function () {
        playBtnClck(AUDIO2);
    });
    $("#btn3").on("tap", function () {
        playBtnClck(AUDIO3);
    });
    $("#btn4").on("tap", function () {
        playBtnClck(AUDIO4);
    });
    $("#btn5").on("tap", function () {
        playBtnClck(AUDIO5);
    });
    $("#btn6").on("tap", function () {
        playBtnClck(AUDIO6);
    });
    $("#btn7").on("tap", function () {
        playBtnClck(AUDIO7);
    });
});