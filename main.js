
prediction_1 = "sad"
prediction_2 = "bored"

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function takepicture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id= 'takenimage' src= " + data_uri + ">"
    });


}
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4oSZhqJSB/model.json", modelloaded);

function modelloaded() {
    console.log("model has been loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var speakthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(speakthis);
}
function check(){
    img= document.getElementById("takenimage");
    Classifier.classify(img, gotresult);
}
function gotresult(error,result){
    if(error){
console.error("error"+error);
    }
    else{
        console.log(result);
        prediction_1= result[0].label;
        prediction_2= result[1].label;
        document.getElementById("emotiondisplayforprediction1").innerHTML= prediction_1;
        document.getElementById("emotiondisplayforprediction2").innerHTML= prediction_2;
        if(prediction_1== "Good"){
            document.getElementById("emojidisplayforprediction1").innerHTML= "👍";
        }
        if(prediction_1== "Bad"){
            document.getElementById("emojidisplayforprediction1").innerHTML= "&#128078;";
        }
        if(prediction_1== "Cool"){
            document.getElementById("emojidisplayforprediction1").innerHTML= "&#129304;";
        }
        if(prediction_1== "That Looks Perfect"){
            document.getElementById("emojidisplayforprediction1").innerHTML= "👌";
        }
        if(prediction_1== "Peace"){
            document.getElementById("emojidisplayforprediction1").innerHTML= "✌";
        }
        if(prediction_2== "Good"){
            document.getElementById("emojidisplayforprediction2").innerHTML= "👍";
        }
        if(prediction_2== "Bad"){
            document.getElementById("emojidisplayforprediction2").innerHTML= "&#128078;";
        }
        if(prediction_2== "Cool"){
            document.getElementById("emojidisplayforprediction2").innerHTML= "&#129304;";
        }
        if(prediction_2== "That Looks Perfect"){
            document.getElementById("emojidisplayforprediction2").innerHTML= "👌";
        }
        if(prediction_2== "Peace"){
            document.getElementById("emojidisplayforprediction2").innerHTML= "✌";
        }
        
    }
}

