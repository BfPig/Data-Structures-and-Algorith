function shell_sortPx(array, fn) {
    let compare = fn || function(a, b) { return a < b }
    let gap, i, j;
    let temp;
    for (gap = array.length >> 1; gap > 0; gap >>= 1) {
        for (i = gap; i < array.length; i++) {
            temp = array[i];
            for (j = i - gap; j >= 0 && compare(array[j], temp); j -= gap)
                array[j + gap] = array[j];
            array[j + gap] = temp;
        }
    }
    return array;
}
export { shell_sortPx }