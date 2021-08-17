/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositeAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';

    return depositeAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    /*  const depositInput = document.getElementById('deposit-input');
     const depositAmountText = depositInput.value;
     const depositeAmount = parseFloat(depositAmountText); */
     const depositeAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositeTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositeTotal + depositeAmount;
    console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    /* // clear input field
    depositInput.value = ''; */

})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;

    // clear input field
    withdrawInput.value = '';

    // update balcnce
    const balanceTotal = document.getElementById('balance-total');
    const balacneTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balacneTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})