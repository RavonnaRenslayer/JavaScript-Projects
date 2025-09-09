//Defining array
let board = ["", "", "",
             "", "", "",
             "", "",  ""];

let gameOver = false;


//This variable keeps track of whose turn it is.
let activePlayer = 'X';

//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

const body = document.querySelector('body');

let computerTimeout = null;

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    if (gameOver) return false; // do nothing if the game is over

    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(e => e.startsWith(squareNumber))) {
            const select = document.getElementById(squareNumber);
        //This variable retrieves the HTML elemnt id that was clicked.
       
    
        if (activePlayer === 'X') {
        //If activePlayer is equal to 'X', the x.png is placed in HTML
        //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        select.style.backgroundImage = 'url("Images/x.png")';
        } else {
        //If activePlayer is equal to 'O', the o.png is placed in HTML
        select.style.backgroundImage = 'url("Images/o.png")';
    }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();

         //This function plays placement sound.
        let audio = new Audio('Media/place.mp3');
        audio.play();
        
        // Switch active player AFTER finishing the move
        if (activePlayer === 'X' && !gameOver) {
        activePlayer = 'O';
            
            //This function disables clicking for computers turn.
            disableClick();
            //This function waits 1 second before the computer places an image and enables click.
            computerTimeout = setTimeout(() => { 
                if (!gameOver) { 
                computersTurn(); 
                enableClick(); 
                }
                computerTimeout = null; 
            }, 1000);

        } else {
            activePlayer = "X";
        }
        return true;
    }
    return false;
}
        //This function results in a random square being selected by the computer.
        function computersTurn() {
            if (gameOver) return;
            //This boolean is needed for our while loop.
            let success = false;
            //This variable stores a random number 0-8.
            let pickASquare;
            //This condition allows our while loop to keep trying is a square is selected already.
            while (!success) {
                //A random number between 0 and 8 is selected.
                pickASquare = String(Math.floor(Math.random() * 9));
                //This changes our boolean and ends the loop.
                    success = placeXOrO(pickASquare);
                }
            }    
    


//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(0, 101, 608, 101);
                                            handleWin(0, 101, 608, 101);}

        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(0, 304, 608, 304);
                                                  handleWin(0, 304, 608, 304);}

        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(0, 507, 608, 507);
                                                handleWin(0, 507, 608, 507);}

        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(101, 0, 101, 608);
                                                handleWin(101, 0, 101, 608);}

        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 0, 304, 608);
                                                   handleWin(304, 0, 304, 608);}

        else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(50, 0, 507, 608);
                                                 handleWin(507, 0, 507, 608);}

        else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(0, 0, 608, 608);
                                                    handleWin(0, 0, 608, 608);}

        else if (arrayIncludes('2X', '4X', '6X')) {drawWinLine(608, 0, 0, 608);
                                                    handleWin(608, 0, 0, 608);;}

    // Repeat the same for O
    if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(0, 101, 608, 101);
                                            handleWin(0, 101, 608, 101);}
        else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(0, 304, 608, 304);
                                                    handleWin(0, 304, 608, 304);}
        else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(0, 507, 608, 507);
                                                    handleWin(0, 507, 608, 507);}
        else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(101, 0, 101, 608);
                                                    handleWin(101, 0, 101, 608);}
        else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 0, 304, 608);
                                                    handleWin(304, 0, 304, 608);}
        else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(507, 0, 507, 608);
                                                    handleWin(507, 0, 507, 608);}
        else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(0, 0, 608, 608);
                                                    handleWin(0, 0, 608, 608);}
        else if (arrayIncludes('2O', '4O', '6O')) {drawWinLine(507, 0, 0, 507);
                                                    handleWin(507, 0, 0, 507);}

    //This condition checks for tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
    gameOver = true; // stop any further moves

    if (computerTimeout) {
        clearTimeout(computerTimeout);
        computerTimeout = null;
    }
document.querySelector('.center-container').style.pointerEvents = 'none';
    audio('Media/tie.mp3');
    setTimeout(() => { 
        resetGame(); 
document.querySelector('.center-container').style.pointerEvents = 'auto';
    }, 1000);
        }
    }

//This function checks if an array includes 3 strings. Is is used to check for
//each win condition
function arrayIncludes(squareA, squareB, squareC) {
    return (
    //These 3 variables wi;; be used to check for 3 in a row.
    selectedSquares.includes(squareA) &&
    selectedSquares.includes(squareB) &&
    selectedSquares.includes(squareC)
    );
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(() => { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound('Media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

function handleWin(x1, y1, x2, y2) {
    if (computerTimeout) {
        clearTimeout(computerTimeout);
        computerTimeout = null;
    }
    gameOver = true; // freeze all input

    body.style.pointerEvents = 'none'; // optional, blocks clicks visually
    audio('Media/winGame.mp3');
    drawWinLine(x1, y1, x2, y2);

    setTimeout(() => {
        const canvas = document.getElementById('win-lines');
        const c = canvas.getContext('2d');
        c.clearRect(0, 0, canvas.width, canvas.height);
        resetGame();
        gameOver = false; // allow input again
        body.style.pointerEvents = 'auto';
    }, 1500);
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(x1, y1, x2, y2) {
    //This line accesses our HTMl canvas element.
    const canvas = document.getElementById('win-lines');

    //This line gives us acess to methods and properties to use on canvas.
    const c = canvas.getContext('2d');

        //This variable stores temporary x axis data we update in our animation loop.
    let x = x1,
        
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;

    // Determine step directions
    const xStep = x2 > x1 ? 10 : -10;
    const yStep = y2 > y1 ? 10 : -10;

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    //This mehtod starts a new path.
    c.beginPath();

    //This method moves us to a starting point in our line.
    c.moveTo(x1, y1);

    //This method indicates the end point of our line.
    c.lineTo(x, y);

    //This method sets the width of our line.
    c.lineWidth = 10;

    //This method sets the color of our line.
    c.strokeStyle = 'rgba(70, 255, 33, 0.8)';

    //This method draws everything we laid out above.
    c.stroke();

           // Update x and y
            if ((xStep > 0 && x < x2) || (xStep < 0 && x > x2)) x += xStep;
            if ((yStep > 0 && y < y2) || (yStep < 0 && y > y2)) y += yStep;

            // Continue animating while not reached
            if ((xStep > 0 && x < x2) || (xStep < 0 && x > x2) ||
            (yStep > 0 && y < y2) || (yStep < 0 && y > y2)) {
            requestAnimationFrame(animate);
            }

    }
    animate();
}


//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element.
    for (let i = 0; i < 9; i++) { 
     //This variable gets the HTML element i. 
     let square = document.getElementById(String(i));
     //This removes our elements backgroundImage.
     square.style.backgroundImage = '';
    }
     // Clear the canvas
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, canvas.width, canvas.height);

    // Reset arrays and state
    selectedSquares = [];
    gameOver = false;
    activePlayer = 'X';
}
