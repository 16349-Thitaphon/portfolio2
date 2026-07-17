const container = document.querySelector(".sakura-container");

function createSakura(){

    const flower = document.createElement("div");

    flower.classList.add("sakura");

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.fontSize = (18 + Math.random() * 20) + "px";

    flower.style.animationDuration = (6 + Math.random() * 6) + "s";

    container.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    },12000);

}

setInterval(createSakura,300);
