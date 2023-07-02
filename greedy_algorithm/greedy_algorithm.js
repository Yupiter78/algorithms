/*function change(money, coins) {
    const arrayChange = [];
    for (let i = 0; i < coins.length; i++) {
        let changeMoney = Math.floor( money / coins[i]);
        arrayChange.push(`${coins[i]} * ${changeMoney}`);
        money -= coins[i] * changeMoney;
    }
    return arrayChange;
}*/

function change(money, coins) {
    return coins.reduce((prev, cur) => {
        const quantity = Math.floor( money / cur);
        money -= cur * quantity;
        return {...prev, [cur]: quantity};
    }, {});
}

console.log(change(167, [25, 10, 5, 1]));