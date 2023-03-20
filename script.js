const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button")
//const numArray = Array.from(Array(10).keys()) //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

buttons.forEach(button => button.addEventListener('click', function onClick(){
    console.log(button.id);
    let but = button.id;
    if (isNaN(but)) {
        // do something with word buttons
        switch(but){
            case("clear"):
                display.innerHTML = ''
                break;
        }
    } else {
        display.insertAdjacentHTML('beforeend', parseFloat(but))
    }
}));

// Add text to the display
