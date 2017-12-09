// 插入排序优化
let insertion_sort_proName = "插入排序优化";

function insertion_sort_proPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    for (let i = 1; i < array.length; i++) {
        let e = array[i];
        let j;
        for (j = i; j > 0 && array[j - 1] > e; j--) {
            array[j] = array[j - 1];
        }
        array[j] = e;
    }
    return array;
}
export { insertion_sort_proName, insertion_sort_proPx }