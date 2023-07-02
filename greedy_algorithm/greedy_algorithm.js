function change(money, coins) {
    const arrayChange = [];
    for (let i = 0; i < coins.length; i++) {
        let changeMoney = Math.floor( money / coins[i]);
        arrayChange.push(`${coins[i]} * ${changeMoney}`);
        money -= coins[i] * changeMoney;
    }

    return arrayChange;
}

console.log(change(167, [25, 10, 5, 1]));