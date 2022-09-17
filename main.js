function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/1NsLUgI6h/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}