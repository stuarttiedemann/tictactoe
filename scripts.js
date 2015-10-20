
var whoGoesFirst = 0;
var computer;
var player;
var tileContents=0;
var id=0;
var tile=0;
var currentTile =[];
var board1=["Z","Z","Z","Z","Z","Z","Z","Z","Z",];
//Determines who the first player will be
function firstPlayer(){
	whoGoesFirst = Math.floor(Math.random()*10+1);
	if(whoGoesFirst>=6){
		computer="X";	
		player="O";
		document.getElementById("message").innerHTML="The computer is X's and will go first";
		document.getElementById("first-player").disabled=true;
	}else{
		document.getElementById("message").innerHTML="You are X's and will go first";
		document.getElementById("first-player").disabled=true;
		computer="O";
		player="X";
	}
}
// Generates a random number to place a tile on the board
function random(){
	var randomNumber=Math.floor(Math.random()*9+1);
	return randomNumber;
}
// Initiates the opening move of the game
function playGame(){
	if(computer==="X"){
		tile= random();
		currentTile=(tile);
		document.getElementById("square-"+tile).innerHTML=computer;
		currentTile=["square-"+tile+","+computer];
		board1.splice((tile-1),1,computer);
	}else{
		document.getElementById("message").innerHTML="Make the opening move";
	}
}
// logic ro remaining moves of the game
function play(obj){
	id = obj.id;
	idString=id.slice(-1);
	tileContents =document.getElementById(id).textContent;
	if(tileContents==="X"||tileContents==="O"){
		document.getElementById(id).disabled=true;
	}else{
		document.getElementById(id).innerHTML=player;
		board1.splice((idString-1),1,(player));		
		tile= random();
		var isOccupied=document.getElementById("square-"+tile).textContent;
		for(i=0;i<10;i++){
			if((isOccupied==="X")||(isOccupied==="O")){			
				var tile= random();
				var isOccupied=document.getElementById("square-"+tile).textContent;
				currentTile="square-"+tile;
			}
		}
		document.getElementById("square-"+tile).innerHTML=computer;
		board1.splice((tile-1),1,(computer));
		checkWin();
	}
}
// Function to display that X's won
function xWins(){
	document.getElementById("message").innerHTML="X's Win!"
}
// Function to display that O's won
function oWins(){
	document.getElementById("message").innerHTML="O's Win!"
}
// Function to check if we have a winner
function checkWin(){
	if((board1[0]==="X")&&(board1[3]==="X")&&(board1[6]==="X")){
		xWins();
	}else if((board1[0]==="O")&&(board1[3]==="O")&&(board1[6]==="O")){
		oWins();
	}else if((board1[1]==="X")&&(board1[4]==="X")&&(board1[7]==="X")){
		xWins();
	}else if((board1[1]==="O")&&(board1[4]==="O")&&(board1[7]==="O")){
		oWins();
	}else if((board1[2]==="X")&&(board1[5]==="X")&&(board1[8]==="X")){
		xWins();
	}else if((board1[2]==="O")&&(board1[5]==="O")&&(board1[8]==="O")){
		oWins();
	}else if((board1[0]==="X")&&(board1[1]==="X")&&(board1[2]==="X")){
		xWins();
	}else if((board1[0]==="O")&&(board1[1]==="O")&&(board1[2]==="O")){
		oWins();
	}else if((board1[3]==="X")&&(board1[4]==="X")&&(board1[5]==="X")){
		xWins();
	}else if((board1[3]==="O")&&(board1[4]==="O")&&(board1[5]==="O")){
		oWins();
	}else if((board1[6]==="X")&&(board1[7]==="X")&&(board1[8]==="X")){
		xWins();
	}else if((board1[6]==="O")&&(board1[7]==="O")&&(board1[8]==="O")){
		oWins();
	}else if((board1[0]==="X")&&(board1[4]==="X")&&(board1[8]==="X")){
		xWins();
	}else if((board1[0]==="O")&&(board1[4]==="O")&&(board1[8]==="O")){
		oWins();
	}else if((board1[6]==="X")&&(board1[4]==="X")&&(board1[2]==="X")){
		xWins();
	}else if((board1[6]==="O")&&(board1[4]==="O")&&(board1[2]==="O")){
		oWins();
	}
}