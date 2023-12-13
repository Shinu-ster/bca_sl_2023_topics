expenses = [700, 1000, 2000, 1000];
income = [30000, 3000, 300];
// const remaining = 0;

let incomeSum = 0;
for(let i= 0; i<income.length; i++) {
    incomeSum += income[i];  
}

function calcTds(incomeSum) {
    tds = 0.01 * incomeSum
    console.log(tds)
    const remaining = incomeSum - tds
    
    return remaining  
}
console.log("TDS with 1% income:");
const remaining = calcTds(incomeSum);
console.log("remaining:" +remaining);



function calcPf (remaining) {
    // let salary = income - incomeSum
    let pf = 0.10 * remaining
    console.log("pf: "+pf)
    let salary = remaining - pf
    console.log("Income after deducting pf: " +salary)
    
}
calcPf(remaining);

