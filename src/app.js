import { numberTest, objTest } from './test.js';
import { selection_sortName, selection_sortPx } from './selection_sort.js';
import { insertion_sortName, insertion_sortPx } from "./insertion_sort.js"
import { insertion_sort_proName, insertion_sort_proPx } from "./insertion_sort_pro.js"


let testArr = new objTest(10000);
// 选择排序
console.time(selection_sortName);
selection_sortPx(testArr);
console.timeEnd(selection_sortName);

// 插入排序
console.time(insertion_sortName);
insertion_sortPx(testArr);
console.timeEnd(insertion_sortName);

// 插入排序优化
console.time(insertion_sort_proName);
insertion_sort_proPx(testArr);
console.timeEnd(insertion_sort_proName);