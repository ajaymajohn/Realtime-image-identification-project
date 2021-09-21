Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vRBqCqUse/',modelLoaded);
function modelLoaded(){
    console.log('model Loaded');
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(error);
        document.getElementById("result_person_name").innerHTML=results[0].label;
        document.getElementById("result_person_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}