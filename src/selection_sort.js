// 选择排序
let selection_sortName  = "选择排序";
function selection_sortPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (compare(array[j], array[minIndex])) {
                minIndex = j;
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
    }
    return array;
}

export { selection_sortName, selection_sortPx }