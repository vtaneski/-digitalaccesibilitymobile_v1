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
        console.log("Sound playing: " + soundPlaying);
    }

    function stopSound(sound) {
        sound.pause();
        sound.currentTime = 0;
        soundPlaying = false;
        console.log("Sound playing: " + soundPlaying);
    }

    // play the sound from the selected button
    function playBtnClck(soundTxt) {
        // frist stop the current sound from playing
        stopSound(soundsArray[currentSoundID]);
        const nonActiveID = currentSoundID + 1;

        currentSoundID = soundTxtArray.indexOf(soundTxt);
        console.log(soundTxtArray[currentSoundID]);
        // play the new sound
        playSound(soundsArray[currentSoundID]);
        const activeID = currentSoundID + 1;

        setActiveTile(nonActiveID, activeID);
    }

    function setActiveTile(nonActiveID, activeID) {
        $("#" + nonActiveID).removeClass("active");
        $("#" + activeID).addClass("active");
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