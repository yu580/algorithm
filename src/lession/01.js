
let sortTestHelper = new SortTestHelper()
let sortFn = new SortFn()
let customObj = new CustomObj()
let qu = new Qu()
var strArr = ['a', 'b', 'c', 'd', 'f', 'a', 'b', 'c', 'd', 'f']
var floatArr = [6.6, 7.7, 4.4, 5.5, 2.4, 3.4, 1.2, 3.4, 1.2, 45.2]

let n = 500000
//随机0--n
let arr = sortTestHelper.outPutArray(n, 0, n)
let arr1 = [...arr] //或者  arr1 = [].concat(arr)
let arr2 = [...arr] //或者  arr1 = [].concat(arr)
//近乎有序的数组
let arr3 = sortTestHelper.outNearlyOrderedArray(n, 10)
let arr4 = [...arr3]
let arr5 = [...arr3]
//很多相同值得数组
let arr6 = sortTestHelper.outPutArray(n, 0, 10)
let arr7 = [...arr6]
let arr8 = [...arr6]
//自定义对象的数组
let objArr = outCustomArr(sortTestHelper.outPutArray(n, 0, n), n)

// 简单测试
// sortFn.selectionSort(arr, n)
// sortFn.selectionSort(strArr, n)
// sortFn.shellSort(floatArr, 10)
// sortFn.selectionSort(objArr, n)

// 性能测试
// sortTestHelper.testSort('选择排序', sortFn.selectionSort, arr, n)
// sortTestHelper.testSort('插入排序', sortFn.insertionSort, arr1, n)
// sortTestHelper.testSort('插入排序1', sortFn.insertionSort1, arr3, n)
// sortTestHelper.testSort('插入排序2', sortFn.insertionSort2, arr, n)
// sortTestHelper.testSort('希尔排序', sortFn.shellSort, arr4, n)
// sortTestHelper.testSort('归并排序', sortFn.mergeSort, arr, n)
// sortTestHelper.testSort('归并排序bu', sortFn.mergeSortBu, arr3, n)
// sortTestHelper.testSort('快速排序', sortFn.quickSort, arr7, n)
// sortTestHelper.testSort('快速排序2', sortFn.quickSort2, arr6, n)
sortTestHelper.testSort('快速排序3', sortFn.quickSort3Ways, arr2, n)


//问题测试
// qu.selectionOne(arr,500)
sortTestHelper.testQu('查找数组任意下标的值', qu.selectionOne, arr, n, 500)



arr = null
arr1 = null
arr2 = null
arr3 = null
arr4 = null
arr5 = null
arr6 = null
arr7 = null
arr8 = null