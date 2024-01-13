let turn = 0;

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");


reset.addEventListener("click", ()=>{
    turn = 0;
    for(i=0; i<9; i++){
        boxes[i].removeAttribute("disabled");
        boxes[i].innerHTML = "";
    }
    document.querySelector("#result").innerHTML = "";

});

const pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]



function checkWinner(){
    let tie = 0;
    
    for(pat of pattern){
        

        let pos1 = boxes[pat[0]].innerHTML;
        let pos2 = boxes[pat[1]].innerHTML;
        let pos3 = boxes[pat[2]].innerHTML;
        let concate = pos1 + pos2 + pos3;
        if(concate != ""){
            if(pos1 == pos2 && pos2 == pos3){
                for(i=0; i<9; i++){
                    boxes[i].setAttribute("disabled", "");
                }
                if(pos1 == "X"){
                    document.querySelector("#result").innerHTML = "Player 1 Won!";
                    return;
                }
                else{
                    document.querySelector("#result").innerHTML = "Player 2 Won!";
                    return;
                }
            }
        }
    }

    for(i=0; i<9; i++){
        if(boxes[i].innerHTML != ""){
            tie++;
        }
    }
    if(tie == 9){
        document.querySelector("#result").innerHTML = "Game Tied!";
        return;
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(box.innerHTML == ""){
            if(turn == 0){
                box.innerHTML = "X";
                turn = 1;
            }
            else{
                box.innerHTML = "O";
                turn = 0;
            }
        }
        else{}

        checkWinner();
    })
});




