
function submit1(){
    // ===============         Get Value From HTMl Start         ===========================================
    var name = document.getElementById("name").value;
    console.log(name)
    var eventName = document.getElementById("eventName").value;
    console.log(eventName)
    var eventTime = document.getElementById("eventTime").value;
    console.log(eventTime)
    var eventDate = document.getElementById("eventDate").value;
    console.log(eventDate)
    var eventPrice = document.getElementById("eventPrice").value;
    console.log(eventPrice)
    var emailAddress = document.getElementById("emailAddress").value;
    console.log(emailAddress)
    var description = document.getElementById("description").value;
    console.log(description)
    var fileToUpload = document.getElementById("fileToUpload").value;
    console.log(fileToUpload)
    var imagePath = fileToUpload.slice(12);
    // ===============    Get Value From HTMl End   ===========================================
    //  **************** get who is log in now ********************
    var user = localStorage.getItem("data");
    user = JSON.parse(user);
var like = 0;
var disLike = 0;
var likeEmail = [user.email];
var disLikeEmail = [user.email]
function Data(name,eventName,eventTime,eventDate,eventPrice,emailAddress,description,imagePath,email,like,disLike,likeEmail,disLikeEmail){
    this.name = name;
    this.eventName = eventName;
    this.eventTime = eventTime;
    this.eventDate = eventDate;
    this.eventPrice = eventPrice;
    this.emailAddress = emailAddress;
    this.description = description;
    this.imagePath = imagePath;
    this.email = email;
    this.likeEmail = likeEmail;
    this.disLikeEmail = disLikeEmail;
    this.like = like;
    this.disLike = disLike;
}

var userData = new Data(name,eventName,eventTime,eventDate,eventPrice,emailAddress,description,imagePath,user.email,like,disLike,likeEmail
    ,disLikeEmail);
var saveData = localStorage.getItem("values");
if(saveData === null){
    saveData = []
}

else{
    saveData = JSON.parse(saveData);
    console.log(saveData);
}

// =================================Velidation Start================================
if(name.length === 0){
    alert("Please Enter  Name");
    return false;
}
 if(eventName.length === 0){
    alert("Please Enter Event Name");
    return false;
}
 if(eventTime.length === 0){
    alert("Please Select Event Time");
    return false;
}
 if(eventDate.length === 0){
    alert("Please Select Event Date");
    return false;
}
 if(eventPrice.length === 0){
    alert("Please Enter Event Price");
    return false;
}
 if(emailAddress.length === 0){
    alert("Please Enter User's Email");
    return false;
}
 if(imagePath.length === 0){
    alert("Please Choose Image");
    return false;
}
 if(description.length === 0){
    alert("Please Enter User's Message");
    return false;
}
//=============================== Validation end===================================================

// ************************** Save Data of whose create evant and his log in email show *****************88
var newValues = [];
for (var i = 0; i < saveData.length; i++){
    if (user.email === saveData[i].email){
        newValues.push(saveData[i])
    }
}
newValues.push(userData);
localStorage.setItem("newValues",JSON.stringify(newValues));
saveData.push(userData);
document.getElementById("reseatData").reset();
localStorage.setItem("values",JSON.stringify(saveData));

//  ==============                     Create  Events Show  Start           ==========================================

var getDateAndSave = document.getElementById("getDateAndSave");
var createDivMain = document.createElement("div");
createDivMain.setAttribute('class', 'mainDiv');
getDateAndSave.appendChild(createDivMain);

var createDivForImage = document.createElement("div");
createDivForImage.setAttribute('class', 'imageSave');
createDivMain.appendChild(createDivForImage);

var createImgTag = document.createElement("img");
createImgTag.setAttribute('src', imagePath);

createDivForImage.appendChild(createImgTag);
var createUl = document.createElement("ul");
createDivMain.appendChild(createUl);

var createLiForName = document.createElement("li");
createLiForName.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForName);
createLiForName1 = document.createTextNode("Name : " + name);
createLiForName.appendChild(createLiForName1);


var createLiForEventName = document.createElement("li");
createLiForEventName.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForEventName);
createLiForEventName1 = document.createTextNode("Event Name : "+eventName);
createLiForEventName.appendChild(createLiForEventName1);

var createLiForEventTime = document.createElement("li");
createLiForEventTime.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForEventTime);
createLiForEventTime1 = document.createTextNode("Event Time : "+eventTime);
createLiForEventTime.appendChild(createLiForEventTime1);

var createLiForEventDate = document.createElement("li");
createLiForEventDate.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForEventDate);
createLiForEventDate1 = document.createTextNode("Event Date : "+eventDate);
createLiForEventDate.appendChild(createLiForEventDate1);

var createLiForEventPrice = document.createElement("li");
createLiForEventPrice.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForEventPrice);
createLiForEventPrice1 = document.createTextNode("Event Price : "+eventPrice);
createLiForEventPrice.appendChild(createLiForEventPrice1);

var createLiForUserEmail = document.createElement("li");
createLiForUserEmail.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForUserEmail);
createLiForUserEmail1 = document.createTextNode("User's Email : "+emailAddress);
createLiForUserEmail.appendChild(createLiForUserEmail1);

var createLiForUserMessage = document.createElement("li");
createLiForUserMessage.setAttribute('class', 'allLiTag');
createUl.appendChild(createLiForUserMessage);
createLiForUserMessage1 = document.createTextNode("User's Message : "+description);
createLiForUserMessage.appendChild(createLiForUserMessage1);
var lineBreak1 =document.createElement('br');
createUl.appendChild(lineBreak1) ;
//  ==============                     Create  Events Show  End           ==========================================
// ================        Delete Button                            ====================
var createDeleteButton  =document.createElement('input');
createUl.appendChild(createDeleteButton);
createDeleteButton.setAttribute('type', 'button');
createDeleteButton.setAttribute('value', 'Delete');
createDeleteButton.setAttribute('id', name);
createDeleteButton.setAttribute('class', 'deletebtn');
createDeleteButton.addEventListener('click',   function(){
        var getData = localStorage.getItem('values');
        getData = JSON.parse(getData);
        console.log(getData)
        for(var i=0; i < getData.length; i++){
            if(this.id===getData[i].name);
            console.log(getData[i].name)
 
            getData.splice(i, 1);
           localStorage.setItem('values', JSON.stringify(getData) );


           var getData1 = localStorage.getItem('newValues');
        getData1 = JSON.parse(getData1);
        console.log(getData1)
        for(var i=0; i < getData1.length; i++){
            if(this.id===getData1[i].name);
            console.log(getData1[i].name)
 
            getData1.splice(i, 1);
           localStorage.setItem('newValues', JSON.stringify(getData1) );
        }
        }
        this.parentNode.parentNode.remove()
 
     })
}

//  ************************* after  Refresh data show **********************************
var creatEvent = localStorage.getItem("newValues");

if (creatEvent === null){
    creatEvent = []

}
else{
    creatEvent = JSON.parse(creatEvent)
}

for (var i = 0; i < creatEvent.length; i++){


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
    //  ********************** Delete Button **********************
    var createDeleteButton  =document.createElement('input');
    createUl.appendChild(createDeleteButton);
    createDeleteButton.setAttribute('type', 'button');
    createDeleteButton.setAttribute('value', 'Delete');
    createDeleteButton.setAttribute('class', 'deletebtn');
    createDeleteButton.setAttribute('id', creatEvent[i].name);
    createDeleteButton.addEventListener('click',   function(){
            var getData = localStorage.getItem('values');
            getData = JSON.parse(getData);
            console.log(getData)
            for(var i=0; i < getData.length; i++){
                if(this.id===getData[i].name);
                console.log(getData[i].name)
     
                getData.splice(i, 1);
               localStorage.setItem('values', JSON.stringify(getData) );
    
    
               var getData1 = localStorage.getItem('newValues');
            getData1 = JSON.parse(getData1);
            console.log(getData1)
            for(var i=0; i < getData1.length; i++){
                if(this.id===getData1[i].name);
                console.log(getData1[i].name)
     
                getData1.splice(i, 1);
               localStorage.setItem('newValues', JSON.stringify(getData1) );
            }
            }
            this.parentNode.parentNode.remove()
     
         })
    

















}