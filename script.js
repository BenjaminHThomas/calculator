const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")

buttons.forEach(button => button.addEventListener('click', function onClick(){
    //console.log(button.id);
    let but = button.id;

    if(display.innerHTML.indexOf("=") !== -1){
        display.innerHTML = '';
    };

    let currentHTML = display.innerHTML;

    if (isNaN(but)) {
        // do something with word buttons
        switch(but){
            case("clear"):
                display.innerHTML = ''
                break;
            case("openBrack"):
                display.insertAdjacentHTML('beforeend','(');
                break;
            case("closeBrack"):
                display.insertAdjacentHTML('beforeend',')');
                break;
            case("dot"):
                display.insertAdjacentHTML('beforeend','.');
                break;
            case("multiply"):
                display.insertAdjacentHTML('beforeend',"*");
                break;
            case("minus"):
                display.insertAdjacentHTML('beforeend',"-");
                break;
            case("plus"):
                display.insertAdjacentHTML('beforeend',"+");
                break;
            case("divide"):
                display.insertAdjacentHTML('beforeend',"/");
                break;
            case("backspace"):
                if (currentHTML.length > 0){
                    const newHTML = currentHTML.slice(0,-1); //remove last char
                    display.innerHTML = newHTML;
                }
                break;
            case("equals"):
                let value;
                try {
                    value = math.evaluate(currentHTML); 
                } catch (e) {
                    value = "N/A"
                };
                display.insertAdjacentHTML('beforeend',`<br>= ${value}`);
                break;
        }
    } else {
        display.insertAdjacentHTML('beforeend', parseFloat(but))
    }
}));

// Add text to the display
