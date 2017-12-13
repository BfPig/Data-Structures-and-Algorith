// 归并排序
function merge_sortPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    if (array.length === 1) {
        return array;
    }
    var mid = ~~(array.length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid);
    return merge(merge_sortPx(left), merge_sortPx(right), compare);
}

function merge(left, right, compare) {
    var tmp = [];
    while (left.length && right.length) {
        if (compare(left[0], right[0])) {
            tmp.push(left.shift());
        } else {
            tmp.push(right.shift());
        }
    }
    return tmp.concat(left, right);
}

export { merge_sortPx }