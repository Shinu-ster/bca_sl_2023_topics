const itemPrice = 30000
const discount = 0.35
const vat = 0.13
const redeem_coin = 20
const distancePrice = 60

console.log("The discount amount is: "+(itemPrice * discount))
console.log("The vat amount is: "+(itemPrice * vat)) 
console.log("Total redeem amount: "+ (redeem_coin * 0.25))

function calcDistance(distance) {
    if (distance > 0 && distance <= 10) {
        return distancePrice
    } 
    else if(distance > 10) {
        let cost = distancePrice + (distance-10)*2
        return cost
    }
}
let distanceCharge = calcDistance(120)
console.log("Total delivery: "+distanceCharge)

function voucherDis(voucher) {
    if (voucher == 1000) {
        return 100
    } 
    else if(voucher == 10000) {
        return 500
    }
    else if(voucher == 20000) {
        return 1500
    }
}
console.log("Voucher discount: " + voucherDis(20000))
let total = itemPrice + distanceCharge + (itemPrice * vat)
console.log("Total price: " +total)
let payable = total - (itemPrice * vat) - (itemPrice * discount) - (redeem_coin * 0.25)
console.log("Payable price: "+payable)