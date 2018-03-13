
//排序方法集合
function SortFn() {
    /**
     * 选择排序方法
     * @param {* 需要排序的数组} arr 
     * @param {* 数组的长度} n 
     */
    this.selectionSort = (arr, n) => {
        for (let i = 0; i < n; i++) {
            let minIndex = i
            for (let j = i + 1; j < n; j++) {
                //arr[j] < arr[minIndex] 可以抽象成一个函数 例如less（）return一个boolean 
                //更高的抽象可以将这个less函数以函数指针的传递进来  这个样函数就更灵活
                if (arr[j] < arr[minIndex]) {
                    // [arr[minIndex], arr[j]] = [arr[j], arr[minIndex]]
                    // 找到当前数组的最小值放到第一位
                    var temp = arr[minIndex]
                    arr[minIndex] = arr[j]
                    arr[j] = temp
                }
            }
        }
        // log(arr)
    }

    /**
     * 插入排序方法
     * @param {* 需要排序的数组} arr 
     * @param {* 数组的长度} n 
     */
    this.insertionSort = (arr, n) => {
        for (let i = 1; i < n; i++) {
            //寻找arr[i]合适的插入位置,所以需要遍历之前比较过的数据
            for (let j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    //变量结构赋值 测试10000数据的时候预计多消耗.3s的性能
                    // [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]

                    var temp = arr[j - 1]
                    arr[j - 1] = arr[j]
                    arr[j] = temp
                } else {
                    break
                }
            }
        }
    }
    //插入排序优化写法,将比较后互换位置 变成寻找位置并赋值
    this.insertionSort1 = (arr, n) => {
        for (let i = 1; i < n; i++) {
            //寻找arr[i]合适的插入位置,所以需要遍历之前比较过的数据
            let e = arr[i];
            let j
            for (j = i; j > 0 && arr[j - 1] > e; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = e
        }
    }
    /**
     * 冒泡排序
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.bubbleSort = (arr, n) => {
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            log(arr)
        }
    }
    /**
     * 希尔排序  img里面有图解
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.shellSort = (arr, n) => {
        gap = Math.floor(n / 2);
        while (gap !== 0) {
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j;
                for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
                    arr[j + gap] = arr[j];
                }
                arr[j + gap] = temp;
            }
            gap = Math.floor(gap / 2);
        }
    }
    /**
     * 归并排序  
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    function __merge(arr, l, mid, r) {
        let result = arr;
       
        let i = l, j = mid + 1;
        // log(result)
        for (let k = l; k <= r; k++) {
            if (i > mid) {
                arr[k] = result[j - l]
                j++
            } else if (j > r) {
                arr[k] = result[i - l]
                i++
            } else if (arr[i - l] < arr[j - l]) {
                arr[k] = result[i - l]
                i++
            } else {
                arr[k] = result[j - l]
                j++
            }
        }
        
    }
    function __mergeSort(arr, l, r) {
        if (l >= r) {
            return
        }
        //l+r可能超出计算机的最大数值
        let mid = Math.floor((l + r) / 2)
        __mergeSort(arr, l, mid)
        __mergeSort(arr, mid + 1, r)
        __merge(arr, l, mid, r)
    }
    this.mergeSort = (arr, n) => {
        // log(arr)
        __mergeSort(arr, 0, n -1)
    }

    
}