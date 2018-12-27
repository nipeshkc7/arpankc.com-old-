function closepopup(boxName){
    document.getElementById("list").style.display="none";
    document.getElementById(boxName).style.opacity="0";
    document.getElementById(boxName).style.height="0";
}


function openpopup(boxName){
    document.getElementById(boxName).style.transition="all 0.8s ease"; 
    document.getElementById(boxName).style.display="inline";
    document.getElementById(boxName).style.height="auto";
    document.getElementById(boxName).style.opacity="0.9";
    document.getElementById("list").style.display="inline";
   
}