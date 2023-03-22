const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")
let value = '';

function getExpressionAfterBR(string){
    //Returns the first non-whitespace character and full expression after a line break
    const tag = "<br>"
    // Get new expression
    const startIndex = string.lastIndexOf(tag) + tag.length;
    const substring = string.substr(startIndex);
    return [substring.trim()[0], substring];
};

function evaluateExpression(string){
    //executes string expression
    try {
        const tempVal = math.evaluate(string); 
        return tempVal;
    } catch (e) {
        return ''; // if there's an error, return nothing.
    };
}

buttons.forEach(button => button.addEventListener('click', function onClick(){
    const but = button.id;
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
                if (currentHTML.length > 0){ // if there are characters to remove
                    const newHTML = currentHTML.slice(0,-1); //remove last char
                    display.innerHTML = newHTML; 
                };
                break;
            case("equals"):
                const [firstChar, cutExpr] = getExpressionAfterBR(currentHTML) // get first character of new line and the new math expression
                if (currentHTML.indexOf("<br>=") === -1){ // if there's no previous expression
                    value = evaluateExpression(currentHTML); // execute formula
                } else if(cutExpr === ''){
                    // equals pressed with no value entered
                    display.insertAdjacentHTML('beforeend',`<br>= ${value}<br>`) // enter previously calculated value
                    break;
                } else if(value === ''){
                    value = evaluateExpression(cutExpr); // if previous expression is N/A then only execute new line
                } else {
                    if (!isNaN(firstChar)){
                        // if the first character is a number, ignore the stored value from previous expression
                        value = evaluateExpression(cutExpr);
                    } else {
                        // first char is a mathematical operator, attempt to modify it using operators in new line
                        value = value.toString();
                        value = evaluateExpression(value.concat(cutExpr));
                    };
                }
                value==='' ? display.insertAdjacentHTML('beforeend',"<br>= N/A<br>") : display.insertAdjacentHTML('beforeend',`<br>= ${value}<br>`); 
                break;
        }
    } else {
        display.insertAdjacentHTML('beforeend', but) // add on number to string
    }
    //Auto scroll to the bottom when button pressed
    display.scrollTop = display.scrollHeight - display.clientHeight

}));
