let wrench = false;
function main(){
    startGame();
    masterPath();
}

function startGame(){
    let playerName= prompt(" What is your name friend? ");
    alert(`Hello ${playerName}, welcome to Ben and Jack's spooky adventure?`);
    alert("You're trapped in a school with a psychological unstable kid that is looking to hunt you down. Hes lowkey skibidi and trying to mog you for your brawl bucks. Your too sigma so your hiding from him. Don't let him find you or else he will through you in the backrooms with nothing but a grimace shake to grow out you gyatt");
}

function masterPath(){
    let choiceOne = prompt("You run into the front entrance haunted school down the street. Screams echo throughugh the building scan the dark around you. You have three direction to explore, Do you (1) go straight? (2) go right? Or (3) go left?");
    if (choiceOne === "1"){
        alert("You proceed down the hallway straight ahead. The pathway that went right glows from around the corner. You run away from that path and everything seems ok.");
        straight();
    } else if (choiceOne === "2"){
        alert("You turn right. You walk slowly, but hear a sudden creak. A faint glow fades in and out of the darkness. Silence surrounds your weak mind...");
        endGame();
    } else if(choiceOne === "3"){
        alert("You proceed down the hallway left. You turn around to see a faint glow. You run away from that path and everything seems ok.");
        left();
    } 
}


function straight(){
    let choiceTwo = prompt("As you proceed straight you see a stairwell and a door to the outside. You could try the door, but maybe the monster would catch up? Do you (1) proceed up the stairwell? Or (2) try to unlock the door?");
    if (choiceTwo === "1"){
        alert("You go up the stairwell. You spot a wrench on the stairwell, you grab it thinking it can be useful later.");
        wrench =true;
        left();
    } else if (choiceTwo === "2"){
        alert("As you pull the handle to the door, you feel an evil presence surround you. You turn around and it is just Mr J.");
        doorOpen();
    }
}

function doorOpen(){
    alert("You reply with a simple 'my bad J' I was late to class. He grimmed at you with a devious look and said 'you mean sorry?' before you can rethink your actions it was already too late the walls started to close in the ground started to shake and before you knew it he failed your ICS3U course and then your butt exploaded than you died lol");
    endGame();
}

function left(){
    let choiceThree = prompt("You are now somehow one of the upper floors. You mustve either teleported here from the left hallway at the entrance,  or gone up a stairwell. You see only two doors  from where you are standing? Which door do you enter? (enter 1 or 2)");
    if (choiceThree === "1"){
        alert("You open door one. Morbidus is sitting in the middle of the room with a chair opposite from him.");
        morbius();
    } else if (choiceThree === "2"){
        alert("The secound door swings open with a slight touch. A glass window leading to a trampoline on the ground is the only thing in the room. Maybe you break the window? ");
        if(wrench === true){
            alert("You swing your wrench and break the window. At the same time the monster bursts into the room. You sprint towards the hole and jump. You wake up on the trampoline missing a shoe, but esacped with your life.");
            winGame();
        } else {
            alert("You search your pockets and find nothing. While turning around to exit the room, in order to look for something to break the window. A monster lunges at you and tears off your hand. You are drowning in a pool of blood.");
            endGame();
        }
    }
}

function morbius(){
    let choiceFour = prompt("Art thou take thy Blue Treat or thy Red Treat");
    if (choiceFour === "1"){
        alert("You take the red pill from his hand. You start to feel tried and your vision starts to fade. Morbius stands above you a laughs in your demise. He transforms into the monster revealing his true form.");
        endGame();
    } else if(choice === "2"){
        alert("Your feet suddenly disappear from beneath your legs! Morbius stands above you a laughs in your demise. He transforms into the monster revealing his true form. You search for something to hit him with in your pockets... ");
        if(wrench === true){
            alert("You pull out the wrench you found in the stairwell,and jam it down the monsters throat as you're turning it around in there until you take it out the large intestines are caught up in it. You quickly sprint out of the school.");
            winGame();
        } else{
            alert("You find two empty pockets. The monster stares into your soul grinning.");
            endGame();
        }
    }
}

function winGame(){
    alert("Woo Hoo you won really sigma!!!! five stars A+, YOU DID NOT GET MOGGED!!!!!!あなたは素晴らしい仕事をしました、スーパー!!!!!!!!");
}

function endGame(){
    beep();
    console.log("The monster opens it's mouth revealing rows upon rows of sharp dagger like teeth. Then all the sudden it eats your ass.......");
    console.log("⣿⠛⠉⠉⠁⠀⠛⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⡇⠰⢶⣟⣃⠀⠠⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣅⡀⢾⣿⣽⣶⠒⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠋⠉⠉⠉⠉⠉⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠃⠀⢈⠻⡿⠄⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣦⣝⣿⣦⣤⡉⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠛⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡋⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣯⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⢀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠂⠀⠀⢀⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⣀⣰⡗⢀⣠⣤⣶⣶⣶⣶⣶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠉⠿⣿⣿⣿⣿⠋⢤⣾⣶⠝⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡛⠿⣿⣿⢿⡀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣷⣌⣉⡉⣠⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⣤⣶⣶⣤⣀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢹⢫⠛⣧⠈⠻⡄⠀⣀⠀⠀⠀⠀⠀⠉⠻⢿⣻⠿⢿⣿⠿⣿⠿⠻⠃⠀⠀⣀⠀⠀⠀⠀⠀⢦⣾⣿⡿⠛⣻⣙⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢧⡞⠀⠛⣧⠀⢻⠟⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣠⣼⠗⠦⣤⠀⡾⣿⣿⣇⡘⠿⠟⣸⣇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠘⠁⣶⡿⣿⡖⣯⠀⡁⢿⣷⣤⣤⣽⡶⠦⠖⠒⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⡟⡠⢀⣿⡇⠃⠹⢻⣿⣿⣷⣾⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢦⡻⣤⣈⣆⢻⠀⢹⠸⠿⣿⣿⣦⣤⣠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢉⡻⠁⠀⠈⣼⡿⠃⠀⠀⠀⠁⠉⠉⠉⠁⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡙⠷⠍⣹⣿⡄⠀⠀⢸⡈⢻⣿⣿⣿⣿⣶⣶⣶⣦⣤⣄⣀⣀⡀⠀⠙⠆⠒⠀⠹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⣠⣿⡇⠀⠀⠀⠃⠀⢿⣿⣿⣿⣿⣿⣿⢿⣿⣿⢿⣿⣿⣿⣶⣶⣤⣄⣀⣀⣀⠀⠀⠀⠀⠀⢹⣦⣼⣥⠜⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣇⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣴⣯⣼⢸⣃⣿⡿⢹⣿⣿⢿⣿⣿⣿⣿⣶⣶⣠⣤⣾⣿⣟⠁⡄⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢻⡄⠀⢀⠀⠀⠀⠈⢿⣿⣿⣿⣻⢿⣿⣿⣿⣿⣿⣷⣾⣿⣧⣾⣿⡞⠙⣻⣿⣿⣿⡿⢻⢟⠏⢀⢃⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠘⣷⡀⠈⠄⢡⠀⠀⠀⠈⠻⣿⣿⣤⡿⢹⢏⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⡼⠋⢀⡼⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⡀⢹⣷⡄⠀⡈⣆⠀⠀⠀⠀⠽⣿⣿⣿⣿⣾⣁⠋⣿⡏⡿⠿⢿⣙⣼⣿⣿⠏⠁⢀⣾⡁⣉⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⢸⡜⠾⣿⣿⣾⡆⢧⠀⠀⠀⠀⠐⢤⡀⢻⡿⢿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⠓⠀⠘⡇⠀⢻⣿⣿⣿⡜⣧⠀⠀⠀⠀⠀⠉⠀⠡⢤⣬⣉⣉⡿⠋⠁⠀⡀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠿⠿⠿⠿⠿⠿⠛⠛⠛⠉⠉⠀⢀⣼⠃⠀⠀⠀⢻⠀⢸⣿⣿⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠓⠉⠉⠀⠀⠀⠎⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⡏⠀⠀⠀⠸⡏⠀⠨⡿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠃⠀⠃⠀⢰⣧⠀⠀⠀⢹⣿⣿⣿⣿⣿⣷⣆⣀⠀⠀⠀⠀⠀⠀⠀⢀⣴⢟⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡆⠘⣦⠀⠀⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣦⣤⣤⣴⣿⢁⠎⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿");
    console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢠⠀⠀⠀⠀⡀⠀⠉⢻⢿⣿⣿⣿⣿⣿⣿⣟⣿⡿⠋⠂⢰⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
    console.log("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠘⣦⣀⣘⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⢀⡞⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿")
}

function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

main();