

const currency1 = document.querySelector('#currency-1')
const currency2 = document.querySelector('#currency-2')
const amount1 = document.querySelector('#amount-1')
const amount2 = document.querySelector('#amount-2')
const swap = document.querySelector('#swap')
const rate = document.querySelector('#rate')

const  calculate = () =>{
    const currencyOne = currency1.value
    const currencyTwo = currency2.value
    API_KEY = 'ultra&apiKey=2ba4da585365e612b5d0'
    fetch(`https://free.currconv.com/api/v7/convert?q=${currencyOne}_${currencyTwo}&compact=${API_KEY}`)
    .then(res => res.json())
    .then (data => {
        const rateValue = data[`${currencyOne}_${currencyTwo}`];

        rate.innerHTML = `1 ${currencyOne} = ${rateValue} ${currencyTwo}`;
    
        amount2.value = (amount1.value * rateValue).toFixed(2);
    })
  
}


currency1.addEventListener('change' ,calculate)
currency2.addEventListener('change', calculate)
amount1.addEventListener('input' , calculate)
amount2.addEventListener('input' , calculate)
swap.addEventListener('click' ,()=>{
    const temp = currency1.value;
    currency1.value = currency2.value
    currency2.value = temp;
    calculate()
})