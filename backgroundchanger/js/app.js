const btn = document.querySelector("#button");
let colors = ['orange', 'blue', 'red', 'black'];

btn.addEventListener('click', () => {
 changeRandomColor()
})

const changeRandomColor = () => {
    const max = colors.length -1
    const min = 0
    const randomPosition = Math.floor(Math.random() * (max - min)) + min;
    document.body.style.backgroundColor = colors[randomPosition]
}