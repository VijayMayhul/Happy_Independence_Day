
var mileSec = 1000;
var count = 10;
let cenDiv = document.getElementById("center-div");
cenDiv.style.fontSize = 100+"px";
cenDiv.style.color = "blue";
cenDiv.innerText = count;
setTimeout(()=>{
    count--;
    cenDiv.innerText = count;
    setTimeout(()=>{
        count--;
        cenDiv.innerText = count;
        setTimeout(()=>{
            count--;
            cenDiv.innerText = count;
            setTimeout(()=>{
                count--;
                cenDiv.innerText = count;
                setTimeout(()=>{
                    count--;
                    cenDiv.innerText = count;
                    setTimeout(()=>{
                        count--;
                        cenDiv.innerText = count;
                        setTimeout(()=>{
                            count--;
                            cenDiv.innerText = count;
                            setTimeout(()=>{
                                count--;
                                cenDiv.innerText = count;
                                setTimeout(()=>{
                                    count--;
                                    cenDiv.innerText = count;
                                    setTimeout(()=>{
                                        // cenDiv.style.color = "white";
                                        // cenDiv.innerHTML = "Happy<br> Independence<br> Day";
                                        cenDiv.innerText = "";
                                        document.body.style.backgroundImage = 'url("Img/indiaGif5.gif")';
                                        document.body.style.backgroundSize = "100% 100%";
                                    },mileSec);
                                },mileSec);
                            },mileSec);
                        },mileSec);
                    },mileSec);
                },mileSec);
            },mileSec);
        },mileSec);
    },mileSec);
},mileSec);

