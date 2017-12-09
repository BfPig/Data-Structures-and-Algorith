function numberTest(len) {
    let testArr = [];
    for (var i = 0; i < len; i++) {
        testArr[i] = Math.round(Math.random() * 1000);
    }
    return testArr;
}

function objTest(len) {
    let testArr = [];
    for (var i = 0; i < len; i++) {
        testArr[i] = {
            [Math.random().toString(36).substr(2)]: Math.round(Math.random() * 1000)
        };
    }
    return testArr;
}

export { numberTest, objTest }