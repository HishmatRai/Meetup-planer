//  ****************************   Sign Up *****************************************************
function signup(){
    
var email = document.getElementById("EmailId");
console.log(email.value)
console.log(email)

var password = document.getElementById("PasswordID");
var firstName = document.getElementById("firstName");
console.log(firstName)
var lastName = document.getElementById("lastName");
console.log(lastName)
var contact = document.getElementById("contact");
console.log(contact)
var age = document.getElementById("age");
console.log(age)
    var appUsers = localStorage.getItem("users");
    console.log(appUsers);

    var existsUser = false;
    if(appUsers === null){
        appUsers = [];
    }
    else{
        appUsers = JSON.parse(appUsers);
        console.log(appUsers);
    }
    var userObject = {
        email:email.value,
        password:password.value,
        firstName:firstName.value,
        lastName:lastName.value,
        age:age.value,
        contact:contact.value
    }
    // ********************************************   Validation ***************************************************************

    if(firstName.value.length === 0){
        alert("Please Enter First Name");
        firstName.focus();
        return false;
    }

    if(lastName.value.length === 0){
        alert("Please Enter Last Name");
        lastName.focus();
        return false;
    }

    if(contact.value.length !== 11){
        alert("Please Enter Correct Contact Number");
        contact.focus();
        return false;
    }
    
    if(age.value.length === 0){
        alert("Please Enter Your Age");
        age.focus();
        return false;
    }
    var emailValue = email.value;
    // console.log(emailValue);

    // emailValue = emailValue.slice(emailValue.length-4);
    // console.log(emailValue);
    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    if(!(emailValue.match(regex))){
        alert("Please Enter Correct Email ");
        emailValue.focus();
        return false;
       }
      
       else if(password.value.length < 6){
           alert("Please Enter Password Equal Or Greater Then Six Characters");
           password.focus();
           return false;
       }
       else{
    for(var i = 0; i < appUsers.length; i++){
        if(appUsers[i].email === email.value ){
            existsUser = true;
        }
    }
    if(existsUser === true){
        // extra.innerHTML = "User already exists..";\.com.com
        alert("User already Sign Up !")
        window.location.href="index.html"

    }
    else{
        appUsers.push(userObject);
        appUsers = JSON.stringify(appUsers);
        appUsers = localStorage.setItem("users",appUsers);
        email.value = "";
        password.value = "";
        firstName.value = "";
        lastName.value = "";
        contact.value = "";
        age.value = "";
        // extra.innerHTML = "Successfully Signup";
        alert("Sign Up Successfully !")
        window.location.href="index.html"

    }
}
}
// ******************************************************** Log in ***********************************************************************
function Login(){
    var email = document.getElementById("EmailId1");
console.log(email.value)
console.log(email)

var password = document.getElementById("PasswordID1");
    var appUsers = localStorage.getItem("users");
    console.log(appUsers);
    if(appUsers === null){
        appUsers = [];
    }
    else{
        appUsers = JSON.parse(appUsers);
        // console.log(appUsers);
    }
    var logObject = {
        email:email.value,
        password:password.value,
       
    }
    var existsUser = false;
    for(var i = 0; i < appUsers.length; i++){
        if(appUsers[i].email === email.value && appUsers[i].password === password.value){
           existsUser = true;
        //    var dataForm = document.getElementById("link1");
        //    dataForm.setAttribute("href", "Home/allevents.html");
        }
    }
    
    if(existsUser === true){
         var logData = JSON.stringify(logObject);
        localStorage.setItem("data",logData);
        email.value = "";
        password.value = "";
        // extra.innerHTML = "Successfully login";
        alert("Successfully Log in !!")
        window.location.href="second-page/second.html";
// ========================
        var user = localStorage.getItem("data");
        user = JSON.parse(user);
    
    var saveData = localStorage.getItem("values");
    if(saveData === null){
        saveData = []
    }
    else{
        saveData = JSON.parse(saveData);
        console.log(saveData);
    }
    // ==================
    var newValues = [];
    for (var i = 0; i < saveData.length; i++){
        if (user.email === saveData[i].email){
            newValues.push(saveData[i])
        }
    }
    // newValues.push(userData);
    localStorage.setItem("newValues",JSON.stringify(newValues));


      localStorage.setItem("user1",JSON.stringify(logOut));

   }
    else{
        email.value = "";
        password.value = "";
        // extra.innerHTML = "Login Failed";
        alert("Log in Faild ! Please Enter Correct Email and Password !" )
        email.focus();
        return false;
    }

}

