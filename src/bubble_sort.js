// 插入排序
let bubble_sortName  = "插入排序";
function bubble_sortPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    for (let i = 1; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j > 0; j--) {
            if (compare(array[j], array[j - 1])) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]]
            } else {
                break;
            }
        }
    }
    return array;
}
export { bubble_sortName, bubble_sortPx }