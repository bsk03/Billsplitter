const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const calc = document.querySelector('.count');
const error = document.querySelector('.error');
const cost =document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info')
let sum;

const calculate = () => {
	let tipValue = Number(tip.value) * price.value;
    
	sum = (Number(price.value) + tipValue)/people.value;
    costInfo.style.display='block';
	cost.textContent = `${sum.toFixed(2)}`; 
    
};

const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == '')
		error.textContent = 'Uzupełnij wszystkie pola!';
	else {
		calculate();
	}
};

calc.addEventListener('click', showBill);
