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
	var parameter1, parameter2, operator, result;
	parameter1 = document.getElementById("parameter1");
	console.log('loging parameter1', parameter1);
	parameter2 = document.getElementById("parameter2");
	console.log('loging parameter2', parameter2);
	operator = document.getElementById("operator");
	console.log('loging operator', operator);
	result = document.getElementById("result");
	console.log('loging result', result);
	console.log('parameter1 value', parameter1.value);
	console.log('parameter2 value', parameter2.value);
	console.log('operator value', operator.value);
	console.log('result value', result.value);
	if(operator.value === 'addition') {
		result.value = addition(parameter1.value, parameter2.value);
		console.log(addition(parameter1.value, parameter2.value));
		
	} else if(operator.value === 'subtraction') {
		result.value = subtraction(parameter1.value, parameter2.value);
		console.log(subtraction(parameter1.value, parameter2.value));
	} else if(operator.value === 'multiplication') {
		result.value = multiplication(parameter1.value, parameter2.value);
		console.log(multiplication(parameter1.value, parameter2.value));
	} else if(operator.value === 'division') {
		result.value = division(parameter1.value, parameter2.value);
		console.log(division(parameter1.value, parameter2.value));
	}



}
calculator();
	
