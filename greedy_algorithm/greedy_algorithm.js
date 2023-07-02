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

const obj = change(167, [25, 10, 5, 1]);
console.log(JSON.stringify(obj));

console.log(change(167, [25, 10, 5, 1]));

function change_2(money, coins) {
    const changeStr = coins.reduce((prev, cur) => {
        const quantity = Math.floor( money / cur);
        money -= cur * quantity;
        return prev + `"${cur}":${quantity},`;
    }, '');

    return JSON.parse(`{${changeStr.slice(0, -1)}}`);
}

console.log(change_2(167, [25, 10, 5, 1]));