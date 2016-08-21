(function($) {
		'use strict';
	function addition(a, b) {
		a = parseFloat(a);
		b = parseFloat(b);
		return a + b;
	}
	function subtraction(a, b) {
		a = parseFloat(a);
		b = parseFloat(b);
		
		return a - b;
	}
	function multiplication(a, b) {
		a = parseFloat(a);
		b = parseFloat(b);
		return a * b;
	}
	function division(a, b) {
		a = parseFloat(a);
		b = parseFloat(b);
		return a / b;
	}
	console.log('im adding 3 and 4 ', addition(3, 4));
	console.log('im subtraction 3 and 4 ', subtraction(3, 4));
	console.log('im multiplication 3 and 4 ', multiplication(3, 4));
	console.log('im division 3 and 4 ', division(3, 4));
	function calculator(){
		var $parameter1, $parameter2, $operator, $result;
		$parameter1 = $("#parameter1");
		console.log('loging $parameter1', $parameter1);
		$parameter2 = $("#parameter2");
		console.log('loging $parameter2', $parameter2);
		$operator = $("#operator");
		console.log('loging $operator', $operator);
		$result = $("#result");
		console.log('loging result', $result);
		console.log('parameter1 value', $parameter1.val());
		console.log('parameter2 value', $parameter2.val());
		console.log('operator value', $operator.val());
		console.log('result value', $result.val());
		var parameter1Value = $parameter1.val(),
			parameter2Value = $parameter2.val(),
			operatorValue = $operator.val();
		if(operatorValue === 'addition') {
			$result.val(addition(parameter1Value, parameter2Value));
			console.log(addition(parameter1Value, parameter2Value));
			
		} else if(operatorValue === 'subtraction') {
			$result.val(subtraction(parameter1Value, parameter2Value));
			console.log(subtraction(parameter1Value, parameter2Value));
		} else if(operator.value === 'multiplication') {
			$result.val(multiplication(parameter1Value, parameter2Value));
			console.log(multiplication(parameter1Value, parameter2Value));
		} else if(operator.value === 'division') {
			$result.val(division(parameter1Value, parameter2Value));
			console.log(division(parameter1Value, parameter2Value));
		}



	}
	$(document).ready(function(){
		var $form = $('#form');
		$form.on('submit', function(e){
			e.preventdefult();
			calculator();
			return false;
		});
		$('#parameter1, #parameter2, #operator').on('change keyup',function(){
			calculator();
		});
	    calculator();
	});
})(jQuery);
	



		

		
