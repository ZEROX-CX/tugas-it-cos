const changeBg = document.getElementById("changeBg")
const Colors = ["red", "green", "blue", "white", "black"];
const text = document.getElementById("text")

changeBg.addEventListener("click", event => {
    const randomColors = Math.floor(Math.random() * Colors.length);
    const fixedColors = Colors[randomColors]

    document.body.style.backgroundColor = `${fixedColors}`;
    if(fixedColors === "black"){
        text.style.color = "white"
    }
    else{
        text.style.color = "black"
    }
})