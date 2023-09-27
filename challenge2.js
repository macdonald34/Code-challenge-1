const readline = require('readline');

const rl = readline.createInterface({
    input: process. stdin,
    output: process. stdout
});

rl.question('Enter the vehicle\'s speed: ',(userInput) => {
    const speed = parseFloat(userInput);
    if( 1sNaN (speed));{
        speedDetactor(speed);
    } else {
        console.log("Invalid input. please enter a valid speed.");
    }

    rl.close();
});

function speedDetactor(speed)
{
    let demerit = 0
    if(speed<70){
        console.log("OK");
         
            let difference = speed-70
            demerit = difference / 5

            if (demerit > 12){
                console.log("License suspended")
            }
            else{
                console.log('points ${demerit}')
            }
        }
    }
