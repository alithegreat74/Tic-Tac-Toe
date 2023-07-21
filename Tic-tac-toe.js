let isCircle=true;
let isFinished=false;
let table=new Array(3);
for(let i=0;i<3;i++){
    table[i]=new Array(3);
    for(let j=0;j<3;j++){
        table[i][j]={
          isOcupied:false,fill:''  
        };
    }
}
const crossPicture='<img class="play-pic" src="Pics/Cross.png">';
const circlePicture='<img class="play=pic" src="Pics/Circle.png">';

const winnerH1='<img class="H1" src="Pics/Horizontal Line.png">';
const winnerH2='<img class="H2" src="Pics/Horizontal Line.png">';
const winnerH3='<img class="H3" src="Pics/Horizontal Line.png">';

const winnerV1='<img class="V1" src="Pics/Vertical Line.png">';
const winnerV2='<img class="V2" src="Pics/Vertical Line.png">';
const winnerV3='<img class="V3" src="Pics/Vertical Line.png">';

const winnerD1='<img class="D1" src="Pics/Diagonal Line1.png">';
const winnerD2='<img class="D2" src="Pics/Diagonal Line2.png">';


function setSquare(id){
    if(!isFinished){
        id--;
        let row=Math.floor(id/3);
        let indexNum=id%3;
        if(!table[row][indexNum].isOcupied){
            table[row][indexNum].isOcupied=true;
            if(isCircle){
                isCircle=false;
                table[row][indexNum].fill=circlePicture;
            }
            else{
                isCircle=true;
                table[row][indexNum].fill=crossPicture;
            }
            document.getElementById(id+1).innerHTML=table[row][indexNum].fill;
            checkForWinner(id+1);
    }
    }
    
}

function checkForWinner(id){
    id--;
    let row=Math.floor(id/3);
    let indexNum=id%3;
    if(isCircle){
        let isWon=false;
        let isWonRow=true;
        for(let i=0;i<3;i++){
            if(table[row][i].fill!=crossPicture){
                console.log(table[row]);
                isWonRow=false;
                break;
            }
        }
        if(isWonRow){
            drawLines('H',row,indexNum);
        }
        let isWonColumn=true;
        for(let i=0;i<3;i++){
            if(table[i][indexNum].fill!=crossPicture){
                isWonColumn=false;
                break;
            }
        }
        if(isWonColumn){
            drawLines('V',row,indexNum);
        }
        let isWonDiagonal1=true;
        for(let i=0;i<3;i++){
            if(table[i][i].fill!=crossPicture){
                isWonDiagonal1=false;
                break;
            }
        }
        if(isWonDiagonal1){
            drawLines('D1',row,indexNum);
        }
        let isWonDiagonal2=true;
        if(table[2][0].fill!=crossPicture){
            isWonDiagonal2=false;
        }
        else if(table[1][1].fill!=crossPicture){
            isWonDiagonal2=false;
        }
        else if(table[0][2].fill!=crossPicture){
            isWonDiagonal2=false;
        }
        if(isWonDiagonal2){
            drawLines('D2',row,indexNum);
        }
    }
    else{
        let isWon=false;
        let isWonRow=true;
        for(let i=0;i<3;i++){
            if(table[row][i].fill!=circlePicture){
                console.log(table[row]);
                isWonRow=false;
                break;
            }
        }
        if(isWonRow){
            drawLines('H',row,indexNum);
        }
        let isWonColumn=true;
        for(let i=0;i<3;i++){
            if(table[i][indexNum].fill!=circlePicture){
                isWonColumn=false;
                break;
            }
        }
        if(isWonColumn){
            drawLines('V',row,indexNum);
        }
        let isWonDiagonal1=true;
        for(let i=0;i<3;i++){
            if(table[i][i].fill!=circlePicture){
                isWonDiagonal1=false;
                break;
            }
        }
        if(isWonDiagonal1){
            drawLines('D1',row,indexNum);
        }
        let isWonDiagonal2=true;
        if(table[2][0].fill!=circlePicture){
            isWonDiagonal2=false;
        }
        else if(table[1][1].fill!=circlePicture){
            isWonDiagonal2=false;
        }
        else if(table[0][2].fill!=circlePicture){
            isWonDiagonal2=false;
        }
        if(isWonDiagonal2){
            drawLines('D2',row,indexNum);
        }
    }
}

function drawLines(way,row,indexNum){
    if(way=='D1'){
        document.querySelector('.table').innerHTML+=winnerD1;
    }
    else if (way=='D2'){
        document.querySelector('.table').innerHTML+=winnerD2;
    }
    else if(way=='H'){
        if(row==0){
            document.querySelector('.table').innerHTML+=winnerH1;
        }
        else if (row==1){
            document.querySelector('.table').innerHTML+=winnerH2;
        }
        else{
            document.querySelector('.table').innerHTML+=winnerH3;
        }
    }
    else{
        if(indexNum==0){
            document.querySelector('.table').innerHTML+=winnerV1;
        }
        else if(indexNum==1){
            document.querySelector('.table').innerHTML+=winnerV2;
        }
        else{
            document.querySelector('.table').innerHTML+=winnerV3;
        }
    }
    isFinished=true;
}

