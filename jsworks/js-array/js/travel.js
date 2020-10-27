var itemList = []; //물품을 저장할 배열

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);  //addList는 함수

function addList(){
    var item = document.querySelector("#item").value;
    itemList.push(item);    //push() 1개 저장
    document.querySelector("#item").value="";   //기존 내용 지움
    document.querySelector("#item").focus();    //커서

    showList();
}

//물품 조회
function showList(){
    var list = "<ul>";
    for(var i=0; i<itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id =" + i + "x<li>";
    }
    list += "</ul>"

    document.getElementById('itemList').innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for(var i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}

//물품 삭제
function removeList(){
    var id = this.getAttribute('id');
    //id 값을 가져와 id 변수에 저장
    itemList.splice(id, 1); //id 위치의 값을 1개 삭제

    showList(); //삭제 후 목록 화면 보임
}