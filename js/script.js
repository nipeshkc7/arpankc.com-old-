function closePopup(){
    console.log("closepopup");
    document.getElementById("list").style.display="none";
    document.getElementById("skills").style.opacity="0";
    document.getElementById("skills").style.height="0";
    document.getElementById("skills").style.padding="0";
    document.getElementById("skillsContent").style.display="none";
}


function openpopup(){
    console.log("openpopup");
    document.getElementById("skills").style.transition="opacity 0.8s ease"; 
    document.getElementById("skills").style.display="inline";
    document.getElementById("skills").style.height="auto";
    document.getElementById("skills").style.padding="40px 55px 30px 55px";
    document.getElementById("skills").style.opacity="0.9";
    document.getElementById("list").style.display="inline";  
    document.getElementById("skillsContent").style.display="inline";
}

function openPreviousWork(){
    document.getElementById("previousWork").style.transition="opacity 0.8s ease"; 
    document.getElementById("previousWork").style.display="inline";
    document.getElementById("previousWork").style.height="auto";
    document.getElementById("previousWork").style.padding="40px 55px 30px 55px";
    document.getElementById("previousWork").style.opacity="1";
    document.getElementById("monitor").style.display="inline";
    document.getElementById("monitor").style.opacity="1";
    document.getElementById("previousWorkContent").style.display="inline";
   
}

function closePreviousWork(){
    document.getElementById("previousWork").style.height="0";
    document.getElementById("previousWork").style.padding="0";
    document.getElementById("previousWork").style.opacity="0";
    document.getElementById("previousWorkContent").style.display="none";
    document.getElementById("monitor").style.display="none";
}

function openMyServices(){
    document.getElementById("myServices").style.transition="opacity 0.8s ease"; 
    document.getElementById("myServices").style.display="inline";
    document.getElementById("myServices").style.height="auto";
    document.getElementById("myServices").style.padding="40px 55px 30px 55px";
    
    document.getElementById("myServices").style.opacity="0.9";
    document.getElementById("service-list").style.display="inline";  
    document.getElementById("myServicesContent").style.display="inline";
}

function closeMyServices(){
    document.getElementById("service-list").style.display="none";
    document.getElementById("myServices").style.opacity="0";
    document.getElementById("myServices").style.height="0";
    document.getElementById("myServices").style.padding="0";
    document.getElementById("myServicesContent").style.display="none";
}

function openContactInfo(){
    document.getElementById("contactInfo").style.transition="opacity 0.8s ease"; 
    document.getElementById("contactInfo").style.display="inline";
    document.getElementById("contactInfo").style.height="auto";
    document.getElementById("contactInfo").style.padding="40px 55px 30px 55px";
    document.getElementById("contactInfo").style.marginTop="100px";
    document.getElementById("contactInfo").style.textAlign="center";
    document.getElementById("contactInfo").style.fontSize="30px";
    document.getElementById("contactInfo").style.opacity="0.9";
    document.getElementById("contactInfoContent").style.display="inline";
}

function closeContactInfo(){
    document.getElementById("contactInfo").style.opacity="0";
    document.getElementById("contactInfo").style.height="0";
    document.getElementById("contactInfo").style.padding="0";
    document.getElementById("contactInfoContent").style.display="none";
}

function openConnect(){
    document.getElementById("connect").style.transition="opacity 0.8s ease"; 
    document.getElementById("connect").style.display="inline";
    document.getElementById("connect").style.height="auto";
    document.getElementById("connect").style.padding="40px 55px 30px 55px";
    document.getElementById("connect").style.opacity="1";
    document.getElementById("connectContent").style.display="inline";
}

function closeConnect(){
    document.getElementById("connect").style.opacity="0";
    document.getElementById("connect").style.height="0";
    document.getElementById("connect").style.padding="0";
    document.getElementById("connectContent").style.display="none";

}
var index=1;
var workJSON=[{
    "title":"Twenty74 Cafe",
    "description":"Stunning landing page built for a local business using Bootstrap and PHP.",
    "imgURL":"./img/twenty74.png",
    "link":"http://twenty74.com.au"
    },{
    "title":"Nepal Life Science",
    "description":"Wordpress powered page built for a not for profit organisation based in Australia.",
    "imgURL":"./img/lifesciencenepal.png",
    "link":"http://lifesciencenepal.com"
    }];

function next(){
    document.getElementById("project-title").innerHTML=workJSON[index].title;
    document.getElementById("project-description").innerHTML=workJSON[index].description;
    document.getElementById("monitor-screen").style.backgroundImage="url('"+workJSON[index].imgURL+"')";
    
    var elem = document.getElementById("monitor-screen");   
    var opacity = 0;
    function fadeIn() {
        opacity++;
        elem.style.opacity = opacity/100;
        if (opacity < 100){
            requestAnimationFrame(fadeIn);
        }
    }
    requestAnimationFrame(fadeIn);

    index++;
    if(index==2){
        index=0;
    }
}

function prev(){
    document.getElementById("project-title").innerHTML=workJSON[index].title;
    document.getElementById("project-description").innerHTML=workJSON[index].description;
    document.getElementById("monitor-screen").style.backgroundImage="url('"+workJSON[index].imgURL+"')";
    
    var elem = document.getElementById("monitor-screen");   
    var opacity = 0;
    function fadeIn() {
        opacity++;
        elem.style.opacity = opacity/100;
        if (opacity < 100){
            requestAnimationFrame(fadeIn);
        }
    }
    requestAnimationFrame(fadeIn);
    
    index--;

    if(index<0){
        index=1;
    }
}

function sendMail(){
    fetch('https://reqres.in/api/users?page=1')
    .then(function(response){
        return response;
    })
    .then(function(data){
        console.log(data);
    })
}

