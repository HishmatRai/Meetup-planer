// Create Event

function homepage(){
    window.location.href="../second-page/second.html"
}

// My event
function myEvent(){
    window.location.href="../My-Events/MyEvent.html"
}



// Get name


var logout1 = localStorage.getItem("data");
logout1 = JSON.parse(logout1);
logout1 = logout1.email.slice(0, logout1.email.length-10).toUpperCase();
document.getElementById("getNameFromUser").innerHTML = logout1;




// Log out

function logout(){
    window.location.href = "../index.html";
    localStorage.removeIteme("user1");
}




