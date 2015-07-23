var keys = document.querySelectorAll('#calculator span');

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function() {
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var buttonPressed = this.innerHTML;
		
		if(buttonPressed == 'CLEAR') {
			input.innerHTML = '';
		}
		
		else if(input.innerHTML.length>9)
		{
			input.innerHTML = '';
		}
		else if(buttonPressed == '=') {
			var equation = inputVal;

			if(equation){
				input.innerHTML = eval(equation).toFixed(8);
				if(input.innerHTML == 'Infinity')
					input.innerHTML = '∞' ;	
			}
		}

		else {
			input.innerHTML += buttonPressed;	
		}
	} 
}
