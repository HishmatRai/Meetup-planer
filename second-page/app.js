// *****************************    Create Event *************************************************************

function cEvent(){
    window.location.href="../Create-Event/index.html"
}


// ************************************ My event *****************************************
function myEvent(){
    window.location.href="../My-Events/MyEvent.html"
}


// ********************************** Get name who is Login now*****************************************


var logout1 = localStorage.getItem("data");
logout1 = JSON.parse(logout1);
logout1 = logout1.email.slice(0, logout1.email.length-10).toUpperCase();
document.getElementById("getNameFromUser").innerHTML = logout1;



// ***********************************           Log out ************************************

function logout(){
    window.location.href = "../index.html";
    localStorage.removeIteme("user1");
    localStorage.removeIteme("newValues");

}


var creatEvent = localStorage.getItem("values");

if (creatEvent === null){
    creatEvent = []

}
else{
    creatEvent = JSON.parse(creatEvent)
}

for (var i = 0; i < creatEvent.length; i++){

// *************************** Show Data ****************************************
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
    var lineBreak1 =document.createElement('br');
    createUl.appendChild(lineBreak1) ;
    // ********************* Interest Button ***********************************
    var createInterestButton  =document.createElement('input');
    createUl.appendChild(createInterestButton);
    createInterestButton.setAttribute('type', 'button');
    createInterestButton.setAttribute('value', 'Interest');
    createInterestButton.setAttribute('class', 'deletebtn');
    createInterestButton.setAttribute('id', creatEvent[i].name);

// ***********************Not interest Butoon **********************************
    var createNotInterestButton  =document.createElement('input');
    createUl.appendChild(createNotInterestButton);
    createNotInterestButton.setAttribute('type', 'button');
    createNotInterestButton.setAttribute('value', 'Not Interest');
    createNotInterestButton.setAttribute('class', 'deletebtn');
    createNotInterestButton.setAttribute('id', creatEvent[i].name);

// *************************** Interest not intrest *******************************
createInterestButton.addEventListener("click", function () {
    var intrest = localStorage.getItem("values");
    intrest = JSON.parse(intrest);
    var creat2 = localStorage.getItem("data");
    creat2 = JSON.parse(creat2);
    for (var j = 0; j < intrest.length; j++){
      if (this.id === intrest[j].name){
    //   alert("You like this Event !");

      flag = true;
        for (var k = 0; k < intrest[j].likeEmail.length; k++){
            if (intrest[j].likeEmail[k] === creat2.name){
                // alert("your emaili is present");            
                flag = false;
        }
       } 
        var check1 = "true"
        if (flag === true){
         for (var l = 0; l < intrest[j].disLikeEmail.length; l++){
            if (intrest[j].disLikeEmail[l] === creat2.email){
                check1 = "flase"
                intrest[j].disLikeEmail.splice(l,1)
                intrest[j].disLike--; //= notintrest[j].intrest0 - 1;
                intrest[j].like++ 
                intrest[j].likeEmail.push(creat2.email);
                localStorage.setItem("values", JSON.stringify(intrest));
            }
        }
         if (check1 === "true"){
         intrest[j].like++ //= notintrest[j].notIntrest0 + 1;
         intrest[j].likeEmail.push(creat2.email);
         localStorage.setItem("values", JSON.stringify(intrest));
    }
}
}
}
})
//  **************************** Not Interest **********************************************
createNotInterestButton.addEventListener("click", function () {
    var notintrest = localStorage.getItem("values");
    notintrest = JSON.parse(notintrest);
    var creat2 = localStorage.getItem("data");
     creat2 = JSON.parse(creat2);
    for (var j = 0; j < notintrest.length; j++){
     if (this.id === notintrest[j].name){
    //  alert("You Dislike this Event");
     flag = true;
        for (var k = 0; k < notintrest[j].disLikeEmail.length; k++){
             if (notintrest[j].disLikeEmail[k] === creat2.email){
                // alert("your emaili is present");
                flag = false;
        }
       } 
       var check = "true"
       if (flag === true){
        for (var l = 0; l < notintrest[j].likeEmail.length; l++){
            if (notintrest[j].likeEmail[l] === creat2.email){
                check = "false"
                notintrest[j].likeEmail.splice(l,1);
                notintrest[j].like-- 
                notintrest[j].disLike++ //= notintrest[j].notIntrest0 + 1;
                notintrest[j].disLikeEmail.push(creat2.email);
                localStorage.setItem("values", JSON.stringify(notintrest));
            }
        }
        if (check === "true"){
            notintrest[j].disLike++ //= notintrest[j].notIntrest0 + 1;
            notintrest[j].disLikeEmail.push(creat2.email);
            localStorage.setItem("values", JSON.stringify(notintrest));
      }
     }
    }
   }
 })



}





