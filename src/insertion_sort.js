// 插入排序
let insertion_sortName  = "插入排序";
function insertion_sortPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    for (let i = 1; i < array.length; i++) {
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
export { insertion_sortName, insertion_sortPx }