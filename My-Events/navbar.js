// ***************************   Create Event   *********************************

function cEvent(){
    window.location.href="../Create-Event/index.html"
}


// **********************************     My event *****************************************
function homePage(){
    window.location.href="../second-page/second.html"
}


// ********************** Get name who is log in now ********************************


var logout1 = localStorage.getItem("data");
logout1 = JSON.parse(logout1);
logout1 = logout1.email.slice(0, logout1.email.length-10).toUpperCase();
document.getElementById("getNameFromUser").innerHTML = logout1;



// ******************** Log out *****************************************

function logout(){
    window.location.href = "../index.html";
    localStorage.removeIteme("user1");
}
//  ******************** Get valuse from Create event *********************************8
var creatEvent = localStorage.getItem("newValues");

if (creatEvent === null){
    creatEvent = []

}
else{
    creatEvent = JSON.parse(creatEvent)
}

for (var i = 0; i < creatEvent.length; i++){

// ********************** Show event ***********************************************

    var getDateAndSave = document.getElementById("getDateAndSave");
    var createDivMain = document.createElement("div");
    createDivMain.setAttribute('class', 'mainDiv');
    getDateAndSave.appendChild(createDivMain);
    
    var createDivForImage = document.createElement("div");
    createDivForImage.setAttribute('class', 'imageSave');
    createDivMain.appendChild(createDivForImage);
    
    var createImgTag = document.createElement("img");
    createImgTag.setAttribute('src', creatEvent[i].imagePath);
    
    createDivForImage.appendChild(createImgTag);
    var createUl = document.createElement("ul");
    createDivMain.appendChild(createUl);
    
    var createLiForName = document.createElement("li");
    createLiForName.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForName);
    createLiForName1 = document.createTextNode("Name : " +creatEvent[i].name);
    createLiForName.appendChild(createLiForName1);
    
    
    var createLiForEventName = document.createElement("li");
    createLiForEventName.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForEventName);
    createLiForEventName1 = document.createTextNode("Event Name : "+creatEvent[i].eventName);
    createLiForEventName.appendChild(createLiForEventName1);
    
    var createLiForEventTime = document.createElement("li");
    createLiForEventTime.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForEventTime);
    createLiForEventTime1 = document.createTextNode("Event Time : "+creatEvent[i].eventTime);
    createLiForEventTime.appendChild(createLiForEventTime1);
     
    var createLiForEventDate = document.createElement("li");
    createLiForEventDate.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForEventDate);
    createLiForEventDate1 = document.createTextNode("Event Date : "+creatEvent[i].eventDate);
    createLiForEventDate.appendChild(createLiForEventDate1);
    
    var createLiForEventPrice = document.createElement("li");
    createLiForEventPrice.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForEventPrice);
    createLiForEventPrice1 = document.createTextNode("Event Price : "+creatEvent[i].eventPrice);
    createLiForEventPrice.appendChild(createLiForEventPrice1);
    
    var createLiForUserEmail = document.createElement("li");
    createLiForUserEmail.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForUserEmail);
    createLiForUserEmail1 = document.createTextNode("User's Email : "+creatEvent[i].emailAddress);
    createLiForUserEmail.appendChild(createLiForUserEmail1);
    
    var createLiForUserMessage = document.createElement("li");
    createLiForUserMessage.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForUserMessage);
    createLiForUserMessage1 = document.createTextNode("User's Message : "+creatEvent[i].description);
    createLiForUserMessage.appendChild(createLiForUserMessage1);
  
    


    var createLiForUserlike = document.createElement("li");
    createLiForUserlike.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForUserlike);
    createLiForUserlike1 = document.createTextNode("User's Like : "+creatEvent[i].like);
    createLiForUserlike.appendChild(createLiForUserlike1);
    
    


    
    var createLiForUserdislike = document.createElement("li");
    createLiForUserdislike.setAttribute('class', 'allLiTag');
    createUl.appendChild(createLiForUserdislike);
    createLiForUserdislike1 = document.createTextNode("User's DisLike : "+creatEvent[i].disLike);
    createLiForUserdislike.appendChild(createLiForUserdislike1);
    var lineBreak1=document.createElement('br');
    createUl.appendChild(lineBreak1) ;

}