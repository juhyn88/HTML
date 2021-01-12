
function nextGallery(){
    var num = 1;
    num++
    if(num > 7)
        num = 1;

    document.getElementById("gallery").src = "images/img" + num + ".jpg";
}

//prevGllery() 함수 만들기
//
function prevGllery(){
    num--;
    if(num<1)
        num = 7;
        document.getElementById("gALLERY").src = "images/img" + num + ".jpg";
}