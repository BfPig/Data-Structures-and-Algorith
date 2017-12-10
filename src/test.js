function numberTest(len) {
    let testArr = [];
    for (var i = 0; i < len; i++) {
        testArr[i] = Math.round(Math.random() * 1000);
    }
    return testArr;
}

export { numberTest }