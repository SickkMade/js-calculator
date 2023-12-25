let windows = document.querySelectorAll('.draggable-window');

let xClickStart = 0;
let yClickStart = 0;

let currentWindow = null;
let isMouseDown = false;

windows.forEach(function(dWindow){
    dWindow.addEventListener('mousedown', function(e){

        if(dWindow.style.top == ''){
            dWindow.style.left = '0px';
            dWindow.style.top = '0px';
        }

        console.log(dWindow.style.top);

        xClickStart = e.clientX - parseInt(dWindow.style.left);
        yClickStart = e.clientY - parseInt(dWindow.style.top);

        currentWindow = dWindow;
        isMouseDown = true; // only works if mouse over window
    })
})

document.addEventListener('mousemove', function(e){
    if(isMouseDown){
        //console.log((`ymouse: ${e.clientY} - yclickStart: ${yClickStart} = ${e.clientY - yClickStart}`));
        currentWindow.style.top = `${(e.clientY - yClickStart)}px`;
        currentWindow.style.left = `${(e.clientX - xClickStart)}px`;
    }
})
document.addEventListener('mouseup', function(){
    isMouseDown = false;
})