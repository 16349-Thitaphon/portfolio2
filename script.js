for(let i=0;i<50;i++){

    const flower=document.createElement("div");

    flower.innerHTML="🌸";

    flower.style.position="fixed";
    flower.style.left=Math.random()*100+"vw";
    flower.style.top="-50px";
    flower.style.fontSize=(15+Math.random()*25)+"px";
    flower.style.zIndex="-1";

    flower.animate(
        [
            {transform:"translateY(-100px)"},
            {transform:"translateY(120vh)"}
        ],
        {
            duration:5000+Math.random()*8000,
            iterations:Infinity,
            delay:Math.random()*5000
        }
    );

    document.body.appendChild(flower);
}
