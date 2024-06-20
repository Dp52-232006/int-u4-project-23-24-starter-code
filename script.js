// JavaScript goes here.
let elsa = document.querySelector(".frozen");
let hakuna = document.querySelector(".hakuna");
let cars = document.querySelector(".car");
let monsters = document.querySelector(".monster");
let zendaya = document.querySelector(".zendaya");
let dwayne = document.querySelector(".dwayne");
let question1text = document.querySelector(".question1");
let question2text = document.querySelector(".question2");
let question3text = document.querySelector(".question3");
let buttonsubmit = document.querySelector("button");
let resultdiv = document.querySelector(".result");

elsa.addEventListener("click", function () {
    question1text.value = "Let it go";
});
hakuna.addEventListener("click", function () {
    question1text.value = "Hakuna Matata";
});
cars.addEventListener("click", function () {
    question2text.value = "Cars";
});
monsters.addEventListener("click", function () {
    question2text.value = "Monsters.inc";
});
zendaya.addEventListener("click", function () {
    question3text.value = "Zendaya";
});
dwayne.addEventListener("click", function () {
    question3text.value = "Dwayne 'the Rock' Johnson";
});
buttonsubmit.addEventListener("click", function () {
    let result1 = question1text.value;
    let result2 = question2text.value;
    let result3 = question3text.value;
    if (result1 === "Let it go" && result2 === "Monsters.inc" && result3 === "Zendaya") {
        resultdiv.innerHTML = "You are Joy!";
        resultdiv.innerHTML+= "<br><p>You are always happy and excited. You are curious to try new things and always on top of things.</p>";
        resultdiv.innerHTML+= "<br><img src='https://i.pinimg.com/originals/09/6d/92/096d92bbda95c3392d1a8e8a2f5949fc.gif'>";
    }
    else if (result1 ==="Hakuna Matata" && result2 === "Cars" && result3 === "Dwayne 'the Rock' Johnson"){
        resultdiv.innerHTML= "You are Anger!";
        resultdiv.innerHTML+= "<br><p>You got anger-issues. You easily become annoyed by people and have no patience.</p>";
        resultdiv.innerHTML+= "<br><img src='https://media1.tenor.com/m/betdspk32EoAAAAC/insideout-anger.gif'>";
    }
    else if (result1=== "Let it go" && result2=== "Cars" && result3 === "Zendaya"){
        resultdiv.innerHTML= "You are Disgust!";
        resultdiv.innerHTML+= "<br><p>You hate anything that is not pretty. You have self-conscious of your appearance and can never be a likable person.</p>";
        resultdiv.innerHTML+= "<br><img src='https://media0.giphy.com/media/10ngGQdSSV7EZ2/giphy.gif?cid=6c09b952rmg3sn8lmk3ov29k596cdjo3yycpki8r78f0y7n8&ep=v1_gifs_search&rid=giphy.gif&ct=g'>";
    }
    else if (result1 ==="Hakuna Matata" && result2=== "Monsters.inc" && result3 === "Dwayne 'the Rock' Johnson"){
        resultdiv.innerHTML = "You are fear!";
        resultdiv.innerHTML+= "<br><p>You are always on your toes and can never trust anyone. You are easily scared and think the worst possible outcome for any situation.</p>";
        resultdiv.innerHTML+= "<br><img src='https://gifdb.com/images/high/fear-inside-out-faint-o50h10tfabafxkno.gif'>";
    }
    else if (result1=== "Let it go" && result2=== "Monsters.inc" && result3=== "Zendaya"){
        resultdiv.innerHTML= "You are Sadness";
        resultdiv.innerHTML+= "<br><p>You are constantly depressed and like to cry:(</p>";
        resultdiv.innerHTML+= "<br><img src='https://themidult.com/wp-content/uploads/2020/11/inside-out-sadness-800x500.png'>";
    }
    else {
        resultdiv.innerHTML= "You are all of the Emotions!";
        resultdiv.innerHTML+= "<br><p>You are a mixture of all the emotions. You are Anger, Disgust, Joy, Fear, and a little bit of Sadness.</p>";
        resultdiv.innerHTML+= "<br><img src='https://media.licdn.com/dms/image/C5612AQEBPsmjTww9BQ/article-cover_image-shrink_600_2000/0/1520156748400?e=2147483647&v=beta&t=A1s2TZenNuATudAeP1PlliE2HlFCcIZLTsrxGeGXYJ0'>";

    }
});
