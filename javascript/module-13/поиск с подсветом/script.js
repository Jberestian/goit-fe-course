const currencyList = 'https://api.coinmarketcap.com/v1/ticker/?limit=30';
let names = [];

fetch(currencyList)
    .then((response)=>response.json())
    .then((data)=> names = names.concat(data));

let findCurrency = (search, currencyNames)=>{
   let filterArr = currencyNames.filter(item =>{
        let reg = new RegExp(`^${search}`, 'gi');
        return item.name.match(reg) || item.symbol.match(reg);
    });
    return filterArr;
};

function showResult () {
    let resultArr = findCurrency(this.value, names);
    // console.log(resultArr);
    // console.log(this);
   let html = resultArr.map(item =>{
       const regex = new RegExp(this.value, 'gi');
       const nameCurrency = item.name.replace(regex, `<span class="hl">${this.value}</span>`);
       const symbolCurrency = item.symbol.replace(regex, `<span class="hl">${this.value}</span>`);
       return `
         <li>
         <span class="name">${nameCurrency}, ${symbolCurrency}</span>
     </li>`
    }).join('');
    // console.log(html);
    container.innerHTML = html;
}


const input = document.querySelector('.search');
const container = document.querySelector('.result');

input.addEventListener('input', showResult);
container.addEventListener('click', function () {
    console.log(event.target.textContent);
    input.value = event.target.textContent;
    container.innerHTML = '';

});

