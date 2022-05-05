function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HT1BNlJRg/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }

    else 
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_con").innerHTML = 'Accuracy - '+(results[0].confidence * 100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_con").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        audio = document.getElementById('audio')
        dog = document.getElementById('dog')
        cat = document.getElementById('cat')

        if(results[0].label == "cat")
        {
            audio
        }

        else if(results[0].label == "bell")
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }

        else if(results[0].label == "snap")
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }

        else
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
        

    }
}