let screen = document.querySelector('.screen')
// Query Selector: NAvigate to HTML page


const uploadToScreen = (number) => {
    screen.append(number)
}

// Once clicked, num_key to show value on the screen

    const clearScreen = () => {
        screen.innerHTML = ""
    }
   

// Clears Screen 
    const CalculateTerms = (x,x,sign) => {
        if(sign === "+"){
            screen.innerHTML = parseInt(x) +  
            parseInt(y);
        } else if (sign === "-"){
            screen.innerHTML = parseInt(x) -  
            parseInt(y);
        }else if (sign === "X"){
                screen.innerHTML = parseInt(x) *  
                parseInt(y);
        }else if (sign === "%"){
                    screen.innerHTML = parseInt(x) /  
                    parseInt(y);
        } else if (sign === "CLR"){
                    screen.innerHTML = clearScreen();
        }

    };

    const splitInput = () => {


        let nput = screen.textContent;

        console.log(nput);
        //splits two container
        if(nput.includes)

    }