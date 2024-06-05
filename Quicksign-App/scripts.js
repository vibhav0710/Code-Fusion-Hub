const colorPicker  = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const fontPicker = document.getElementById("fontPicker")
const canvas = document.getElementById("myCanvas");
const clearBtn = document.getElementById("clearBtn");
const saveBtn = document.getElementById("saveBtn")
const retrieveBtn = document.getElementById("retrieveBtn");
const ctx = canvas.getContext('2d')

ctx.lineJoin = 'round'
ctx.lineCap = 'round'

colorPicker.addEventListener('change', (e)=> {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
})

canvas.addEventListener('mousedown', (e)=>{
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
})

canvas.addEventListener('mousemove', (e)=> {
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        lastX = e.offsetX;
        lastY = e.offsetY;
    }
})

canvas.addEventListener('mouseup', (e)=>{
    isDrawing = false;
})

canvasColor.addEventListener('change', (e)=> {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0,0,800,500)
})

fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
})

saveBtn.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());

    let link = document.createElement('a');

    link.download = 'my-canvas.png';

    link.href = canvas.toDataURL();

    link.click();
})

retrieveBtn.addEventListener('click', (e)=> {
    let savedCanvas = localStorage.getItem('canvasContents');

    if(savedCanvas){
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img,0,0)
    }
})

document.body.addEventListener("touchstart", function(e) {
    if (e.target == canvas) {
        e.preventDefault();
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        isDrawing=true
        draw(clientX, clientY)
    }
}, false);

document.body.addEventListener("touchend", function(e) {
    if (e.target == canvas) {
        e.preventDefault();
        isDrawing=false
    }
}, false);

document.body.addEventListener("touchmove", function(e) {
    if (e.target == canvas) {
        e.preventDefault();
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        draw(clientX, clientY)
    }
}, false);
