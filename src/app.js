import { numberTest } from './test.js';
import { bubble_sortPx } from './bubble_sort.js'
import { selection_sortPx } from './selection_sort.js';
import { insertion_sortPx } from "./insertion_sort.js"
import { insertion_sort_proPx } from "./insertion_sort_pro.js"
import { shell_sortPx } from "./shell_sort.js"
import { merge_sortPx } from "./merge_sort.js"


let testArr = new numberTest(10000);

// 希尔排序
console.time("希尔排序");
shell_sortPx(testArr);
console.timeEnd("希尔排序");
// 冒泡排序
console.time("冒泡排序");
bubble_sortPx(testArr);
console.timeEnd("冒泡排序");

// 选择排序
console.time("选择排序");
selection_sortPx(testArr);
console.timeEnd("选择排序");

// 插入排序
console.time("插入排序");
insertion_sortPx(testArr);
console.timeEnd("插入排序");

// 插入排序优化
console.time("优化后的插入排序");
insertion_sort_proPx(testArr);
console.timeEnd("优化后的插入排序");

// 归并排序
console.time("归并排序");
merge_sortPx(testArr);
console.timeEnd("归并排序");