
var first = 0;
var computer;
var player;
var tileContents=0;
var id=0;
var tileArray=["square-1","square-2","square-3","square-4","square-5","square-6","square-7","square-8","square-9"];
var tileArray2=(10);
function firstPlayer(){
	first = Math.floor(Math.random()*10+1);
	if(first>=6){
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
function playGame(){
	if(computer==="X"){
		var tile= Math.floor(Math.random()*9+1);
		document.getElementById("square-"+tile).innerHTML=computer;
	}else{
		document.getElementById("message").innerHTML="Make the opening move";
		// console.log("The computer is: "+computer);
		// console.log("The player is: "+player)
	}
}
function play(obj){
	id = obj.id;
	tileContents =document.getElementById(id).textContent;
	// console.log("The value in the clicked square is:"+tileContents);
	if(tileContents==="X"||tileContents==="O"){
		document.getElementById(id).disabled=true;
	}else{
			document.getElementById(id).innerHTML=player;		
			var tile= Math.floor(Math.random()*9+1);
			var isOccupied=document.getElementById("square-"+tile).textContent;
		for(i=0;i<10;i++){
			if((isOccupied==="X")||(isOccupied==="O")){			
				var tile= Math.floor(Math.random()*9+1);
				var isOccupied=document.getElementById("square-"+tile).textContent;
			}
		}
		document.getElementById("square-"+tile).innerHTML=computer;
		checkWin();
	}
}
function xWins(){
	document.getElementById("message").innerHTML="X's Win!"
}
function oWins(){
	document.getElementById("message").innerHTML="O's Win!"
}
function checkWin(){
	var xCounter=0;
	var oCounter=0;	
	for(i=1;i<4;i++){
		var temp1 = document.getElementById("square-"+i).textContent;
		var temp2 = document.getElementById("square-"+i).textContent;
		console.log("The value of temp1 is: "+temp1);
		if(temp1==="X"){
			xCounter++;
			if(xCounter===3){
			xWins();
			}
		}else if(temp2==="O"){
			oCounter++;
			if(oCounter===3){
				oWins();
			}
		}
	}
	var xCounter1=0;
	var oCounter1=0;	
	for(i=4;i<6;i++){
		var temp3 = document.getElementById("square-"+i).textContent;
		var temp4 = document.getElementById("square-"+i).textContent;	
		if(temp3==="X"){
			xCounter++;
			if(xCounter===3){
			xWins();
			}
		}else if(temp4==="O"){
			oCounter++;
			if(oCounter===3){
				oWins();
			}
		}
	}
	var xCounter2=0;
	var oCounter2=0;	
	for(i=4;i<6;i++){
		var temp5 = document.getElementById("square-"+i).textContent;
		var temp6 = document.getElementById("square-"+i).textContent;	
		if(temp5==="X"){
			xCounter++;
			if(xCounter===3){
			xWins();
			}
		}else if(temp6==="O"){
			oCounter++;
			if(oCounter===3){
				oWins();
			}
		}
	}
	
		
}