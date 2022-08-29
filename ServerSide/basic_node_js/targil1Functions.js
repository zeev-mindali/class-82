module.exports = {
    replace: (num1, num2) => {
        num1 = num1 + num2; //2,8 num1=10
        num2 = num1 - num2; //10-8 => 2
        num1 = num1 - num2; //10-2 => 8
        console.log(num1, num2);
    },
    daniel: (num1, num2) => { console.log(num2, num1) }
}