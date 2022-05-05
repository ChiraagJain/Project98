var SpeechRecognition = window.webkitSpeechRecogntion;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
Content = event.result[0][0].transcript;
console.log(Content);
document.getElementById("text_box").innerHTML = Content;
}