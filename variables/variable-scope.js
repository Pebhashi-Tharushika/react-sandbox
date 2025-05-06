var _var = 10;
let _let = 20;
const _const = 30;

console.log(_var); // 10
console.log(_let); // 20
console.log(_const); // 30


function variableScope() {
    var _var2 = 100;
    let _let2 = 200;
    const _const2 = 300;

    console.log(_var2); // 100
    console.log(_let2); // 200
    console.log(_const2); // 300

    if(true){
        console.log(_var2); // 100
        console.log(_let2); // 200
        console.log(_const2); // 300

        var _var3 = 1;
        let _let3 = 2;
        const _const3 = 3;
        console.log(_var3); // 1
        console.log(_let3); // 2
        console.log(_const3); // 3
    }

    console.log(_var3); // 1
    // console.log(_let3); // Can not access outside the block
    // console.log(_const3); // Can not access outside the block
}

variableScope();

// console.log(_var2); // Can not access outside the function



console.log(_var); // 10
console.log(_let); // 20
console.log(_const); // 30