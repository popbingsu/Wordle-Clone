let block1 = "";
let block2 = "";
let block3 = "";
let block4 = "";
let block5 = "";

let wordbank = ["RIGHT", "BURST", "MORSE", "THERE", "FRIED", "GHOST", "HEART", "SHARD", "STYLE" ]
let word = wordbank[Math.floor(Math.random() * 9)];
let game = true;
let enter = false;
let last_entered = -1;

const match_word = [{transform:"rotateX(0deg)"},{transform:"rotateX(180deg)"}];
const letter_added = [{transform:"scale(1)"}, {transform:"scale(1.1)"}];
const letter_added_timing = {duration:100, iterations:1};

function addstyle(block, n, letter){
    document.getElementsByClassName(`block${n}`)[0].children[(block.length === 0? 0: block.length  - 1)].innerText = letter;
    document.getElementsByClassName(`block${n}`)[0].children[(block.length === 0? 0: block.length  - 1)].style.borderColor = "#787c7e"
    document.getElementsByClassName(`block${n}`)[0].children[(block.length === 0? 0: block.length  - 1)].animate(letter_added, letter_added_timing);
    if(block.length === 5){
    enter=true;}
}

function addletter(letter){
    if(enter === false && game === true){
        if(block1.length <5 ){
            block1 += letter;
            addstyle(block1,1, letter);
        }
        else if(block2.length <5 ){
            block2 += letter;
            addstyle(block2,2, letter);
        }
        else if(block3.length <5 ){
            block3 += letter;
            addstyle(block3,3, letter);
        }
        else if(block4.length <5 ){
            block4 += letter;
            addstyle(block4,4, letter);
        }
        else if(block5.length <5 ){
            block5 += letter;
            addstyle(block5,5, letter);
        }
    }
}

function deletestyle(n, blocks){
    document.getElementsByClassName(`block${n}`)[0].children[blocks[last_entered + 1].length === 0? 0:blocks[last_entered + 1].length - 1].innerText = "";
    enter = false;
}

function deleteletter(){
    let blocks = [block1, block2, block3, block4, block5];
    if(last_entered == -1 && block1.length > 0){
        block1 = block1.slice(0,-1);
        deletestyle(1, blocks);
    }
    else if(last_entered == 0 && block2.length > 0){
        block2 = block2.slice(0,-1);
        deletestyle(2, blocks);
    }
    else if(last_entered == 1 && block3.length > 0){
        block3  = block3.slice(0,-1);
        deletestyle(3, blocks);
    }
    else if(last_entered == 2 && block4.length > 0){
        block4  = block4.slice(0,-1);
        deletestyle(4, blocks);
    }
    else if(last_entered == 3 && block5.length > 0){
        block5  = block5.slice(0,-1);
        deletestyle(5, blocks);
    }
}

function enterWord(){
    let blocks = [block1, block2, block3, block4, block5];
    let num = 0;
    if(game === true){
        for(i = 0; i < 5; i++){
            if(blocks[i].length === 5){
                num = i;}
        }
        last_entered = num;
        blocks[num].length === 5 ? match(blocks[num], num + 1): "";
        if(num === 4){   
            game = false;
            enter = true;}
    }
    enter = false;
}

function matchstyle(num,color, key){
    document.getElementsByClassName(`block${num}`)[0].children[i].style.backgroundColor = color;
    document.getElementById(`${key.toLowerCase()}`).style.backgroundColor = color;
    document.getElementById(`${key.toLowerCase()}`).style.color = "white";
    document.getElementsByClassName(`block${num}`)[0].children[i].style.color = "white";
    document.getElementsByClassName(`block${num}`)[0].children[i].style.borderColor = "transparent";
    document.getElementsByClassName(`block${num}`)[0].children[i].animate(match_word, {duration:600 * (i === 0 ? 0.8 : i) - (150 * (i === 0 ? 0.5 : i)), iterations:1});
}

function match(block, num){
    let letters = word.split("");
    let submit = block.split("");
    let letters_left="";
    let submit_left = "";
    let matched = 0;

    for(i = 0; i < 5; i++){
        if(letters[i] === submit[i]){
            matchstyle(num, "#6aaa64", submit[i]);
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
            matchstyle(num, "#787c7e", submit_left[i]);
        }
        else if(letters_left[letters_left.indexOf(submit_left[i])] !== "#"){
            matchstyle(num, "#c9b458", submit_left[i]);
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