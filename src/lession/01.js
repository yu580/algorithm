
let sortTestHelper = new SortTestHelper()
let sortFn = new SortFn()
let customObj = new CustomObj()
var strArr = ['a', 'b', 'c', 'd', 'f', 'a', 'b', 'c', 'd', 'f']
var floatArr = [6.6, 7.7, 4.4, 5.5, 2.4, 3.4, 1.2, 3.4, 1.2, 45.2]

let n = 100
let arr = sortTestHelper.outPutArray(n, 0, n)
let arr1 = [...arr] //或者  arr1 = [].concat(arr)
let arr2 = [...arr] //或者  arr1 = [].concat(arr)
let arr3 = sortTestHelper.outNearlyOrderedArray(n,100)
let objArr = outCustomArr(sortTestHelper.outPutArray(n, 0, n), n)

// sortFn.selectionSort(arr, n)
// sortFn.selectionSort(strArr, n)
sortFn.shellSort(floatArr, 10)
// sortFn.selectionSort(objArr, n)

// sortTestHelper.testSort('选择排序', sortFn.selectionSort, arr, n)
// sortTestHelper.testSort('插入排序', sortFn.insertionSort, arr1, n)
// sortTestHelper.testSort('插入排序1', sortFn.insertionSort1, arr2, n)
// sortTestHelper.testSort('希尔排序', sortFn.shellSort, arr2, n)

arr = null
arr2 = null