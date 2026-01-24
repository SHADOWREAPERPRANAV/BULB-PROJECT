function bulb() {
    const img1 = document.getElementById("bulbofff");
    if(img1.src.includes("IMAGES/bulb-off.png")){
        img1.src = "IMAGES/bulb-on.png";
    }
    else{
        img1.src = "IMAGES/bulb-off.png";
    }
    


}