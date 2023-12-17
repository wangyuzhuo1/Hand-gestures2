
Webcam.set({
    width:350, 
    height:300,
    img_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="' +data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nbzYuzP3e/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('capture_img');
    classifer.classify(img, gotResult);
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = toSpeak();
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}











