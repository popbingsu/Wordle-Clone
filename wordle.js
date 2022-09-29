let block1 = "";
let block2 = "";
let block3 = "";
let block4 = "";
let block5 = "";

let word = "RIGHT";
let game = true;
let enter = false;
let last_entered = -1;

function addletter(letter){
    if(enter === false && game === true){
        if(block1.length <5 ){
            block1 += letter;    
            document.getElementsByClassName("block1")[0].children[(block1.length === 0? 0: block1.length  - 1)].innerText = letter;
            if(block1.length === 5){
                enter=true;
            }
        }
        else if(block2.length <5 ){
                block2+= letter;    
                document.getElementsByClassName("block2")[0].children[(block2.length === 0? 0: block2.length  - 1)].innerText = letter;
                if(block2.length === 5){
                    enter=true;
                }
        }
        else if(block3.length <5 ){
                block3 += letter;    
                document.getElementsByClassName("block3")[0].children[(block3.length === 0? 0: block3.length  - 1)].innerText = letter;
                if(block3.length === 5){
                    enter=true;
                }
        }
        else if(block4.length <5 ){
                block4 += letter;    
                document.getElementsByClassName("block4")[0].children[(block4.length === 0? 0: block4.length  - 1)].innerText = letter;
                if(block4.length === 5){
                    enter=true;
                }
        }
        else if(block5.length <5 ){
                block5 += letter;    
                document.getElementsByClassName("block5")[0].children[(block5.length === 0? 0: block5.length  - 1)].innerText = letter;
                if(block5.length === 5){
                    enter=true;
                }
        }
    }
}

function deleteletter(){
    let blocks = [block1, block2, block3, block4, block5];
    if(last_entered == -1 && block1.length > 0){
        block1 = block1.slice(0,-1);
        document.getElementsByClassName('block1')[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
        enter = false;
    }
    else if(last_entered == 0 && block2.length > 0){
        block2 = block2.slice(0,-1);
        document.getElementsByClassName('block2')[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
        enter = false;
    }
    else if(last_entered == 1 && block3.length > 0){
        block3  = block3.slice(0,-1);
        document.getElementsByClassName('block3')[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
        enter = false;
    }
    else if(last_entered == 2 && block4.length > 0){
        block4  = block4.slice(0,-1);
        document.getElementsByClassName('block4')[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
        enter = false;
    }
    else if(last_entered == 3 && block5.length > 0){
        block5  = block5.slice(0,-1);
        document.getElementsByClassName('block5')[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
        enter = false;
    }
}

function enterWord(){
    let blocks = [block1, block2, block3, block4, block5];
    let num = 0;
    if(game === true){
        for(i = 0; i < 5; i++){
            if(blocks[i].length === 5){
                num = i;
            }
        }
        last_entered = num;
        match(blocks[num], num + 1);
        if(num === 4){   
            game = false;
            enter = true;
        }
    }
    enter = false;
}

function match(block, num){
    let letters = word.split("");
    let submit = block.split("");
    let letters_left="";
    let submit_left = "";
    let matched = 0;

    for(i = 0; i < 5; i++){
        if(letters[i] === submit[i]){
            document.getElementsByClassName(`block${num}`)[0].children[i].style.backgroundColor = "#6aaa64";
            document.getElementById(`${submit[i].toLowerCase()}`).style.backgroundColor = "#6aaa64";
            document.getElementById(`${submit[i].toLowerCase()}`).style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.borderColor = "transparent"; //keyboard-block-1"
            submit_left = submit_left + "#";
            letters_left = letters_left + "#";
            matched++;
            matched === 5? game = false: "";
        }
        else{
            submit_left = submit_left + submit[i];
            letters_left = letters_left + letters[i];
        }
    }
    for(i = 0; i < 5; i++){
        if(letters_left.includes(submit_left[i]) === false){
            document.getElementsByClassName(`block${num}`)[0].children[i].style.backgroundColor = "#787c7e";
            document.getElementById(`${submit[i].toLowerCase()}`).style.backgroundColor = "#787c7e";
            document.getElementById(`${submit[i].toLowerCase()}`).style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.borderColor = "transparent";
        }
        else if(letters_left[letters_left.indexOf(submit_left[i])] !== "#"){
            document.getElementsByClassName(`block${num}`)[0].children[i].style.backgroundColor = "#c9b458";
            document.getElementById(`${submit[i].toLowerCase()}`).style.backgroundColor = "#c9b458";
            document.getElementById(`${submit[i].toLowerCase()}`).style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.color = "white";
            document.getElementsByClassName(`block${num}`)[0].children[i].style.borderColor = "transparent";
            letters_left = letters_left.substring(0, letters_left.indexOf(submit_left[i])) + "#" + letters_left.substring(letters_left.indexOf(submit_left[i]) + 1);
        }
    }
}

function newGame(){
    block1 = "";
    block2 = "";
    block3 = "";
    block4 = "";
    block5 = "";
    word = "randomword"
    game = true;
    enter = false;
}