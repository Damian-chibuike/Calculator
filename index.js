let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(buttons => {
    buttons.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                if(display.innerText){
            display.innerText = display.innerText.slice(0, -1);
        }
            break;
            case 'OFF':
             display.innerText ='';
             break;
             case 'ON':
             display.innerText ='';
             break;
             case 'M+':
                if(display.innerText){
             display.innerText = display.innerText.repeat(0, -1);
            }
             break;
             case '=':
                 try{
                     display.innerText = eval(display.innerText);
                 } catch{
                     display.innerText = 'Error!'
                 }
            
             break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});


display.style.backgroundColor = 'gray';
