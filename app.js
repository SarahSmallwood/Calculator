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
    const calculateTerms = (x,x,sign) => {
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
        }else {
            alert("error");
        }

    };

    const splitInput = () => {
        let nput = screen.textContent;

        console.log(nput);
        //splits two container
        if (nput.includes("+")) {
            let solve = nput.split("+");
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "+");
          } else if (nput.includes("-")) {
            let solve = nput.split("-");
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "-");
          } else if (nput.includes("X")) {
            let solve = nput.split("X");
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "X");
          } else if (nput.includes("%")) {
            let solve = nput.split("%");
            console.log("input:", solve);
            calculateTerms(solve[0], solve[1], "%");
          } else {
            alert("You need to add a Symbol in order to calculate");
          }
          //
        };