//
// function moneyConverter(valNum ) {
//     document.getElementById('outputuan').innerHTML=valNum*28.7;
//
// }
//
//
// let sum = prompt('enter sum'),
//     currencyIn = prompt('currencyIn'),
//     currencyOut = prompt('currencyOut');
//
//
// let currencyEnglish = ['usd', 'eur', 'uan'];
//
// if ( currencyIn === currencyEnglish [0] && currencyOut === currencyEnglish [1]){
//     alert(`you got money ${Math.round(sum * 0.75)} ${currencyOut}`)
// };
//
//
// if (currencyIn === currencyEnglish [1] && currencyOut === currencyEnglish [0]){
//     alert(`you got money ${Math.round(sum * 1.25)} ${currencyOut}`)
// };
//
// if (currencyIn === currencyEnglish [0] && currencyOut === currencyEnglish [2]){
//     alert(`you got money ${Math.round(sum * 28)} ${currencyOut}`)
// };
//
// if (currencyIn === currencyEnglish [2] && currencyOut === currencyEnglish [0]){
//   alert(`you got money ${Math.round(sum / 28)} ${currencyOut}`)
// };
//
// if ( currencyIn === currencyEnglish [2] && currencyOut === currencyEnglish [1]){
//     alert(`you got money ${Math.round(sum / 35)} ${currencyOut}`)
// };
//
// if (currencyIn === currencyEnglish [1] && currencyOut === currencyEnglish [2]){
//   alert(`you got money ${Math.round(sum * 35)} ${currencyOut}`)
// };
//
//
//
// function convert() {
//     let coef = [1.25, 28.7, 35];
//     let curName = ['usd', 'eur', 'uan'];
//     let curRusName = ['долла', 'евро', 'гривна'];
//
//
//     let amound = +prompt('Enter sum');
//     let currencyHave = prompt('enter currency you have');
//     let currencyWant = prompt('enter currency you Want');
//
//     if ((currencyHave === curName [0] || currencyHave === curRusName [0]) && (currencyWant === curName [2] || currencyWant === curRusName [2])){
//         return amound * coef [1];
//     }
// };
//
// console.log(convert());

