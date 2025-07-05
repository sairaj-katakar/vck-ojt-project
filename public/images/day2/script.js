
	let x=23;
	let y=23;
	console.log(x);
	console.log(y);
	
	function calculatesum(){
	let num1=parseFloat(document.getElementById("demo").innerText);
	let num2=parseFloat(document.getElementById("demo1").value);
	let sum=num1+num2;
	documet.getElementById("result").innerText=sum;
	}