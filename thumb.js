function game() {
    var name="username";
    var score=0;
    var topscore=100;
    var level=null;
    var teamname;
    var update=score==topscore;
    var rank;
    if(score>=100){
        rank="Diamond";
    }
    else if(score>=50){
        rank="silver";
    }
    else if (score >= 90) {
        rank = "Gold";
    }
    else{
        rank="bronze";
    }
    var hour=new Date().getHours();
    var greeting;
    if(hour<12){
        gretting="good morning fellow gamer";
    }
    else if(hour<17){
        greeting="good afternoon fellow, gamer";
    }
    else{
        greeting="good night fellow gamer";
    }
    var rating="";
    var count=0;

    while(count<5){
        rating=rating+"⭐";
        count=(count)+1;
    }
    document.getElementById("A").innerHTML=name;
    document.getElementById("B").innerHTML=score+" out of "+topscore;
    document.getElementById("C").innerHTML=topscore;
    document.getElementById("D").innerHTML=rank;
    document.getElementById("E").innerHTML=greeting;
    document.getElementById("F").innerHTML = rating;
    document.getElementById("G").innerHTML = level;
    document.getElementById("H").innerHTML = teamname;
}