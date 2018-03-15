
/**
 * 交换数组中索引a和索引b的值得位置
 * @param {* 需要改变的数组} arr 
 * @param {* 第一个值得索引} a 
 * @param {* 第二个值得索引} b 
 */
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


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
                    // var temp = arr[minIndex]
                    // arr[minIndex] = arr[j]
                    // arr[j] = temp
                    swap(arr, minIndex, j)
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
    //对于插入排序在排序一个近乎有序的数组时效率可以达到O(n)级
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
    //特定区间的数组排序[l,r] 闭区间
    this.insertionSort2 = (arr, l, r) => {
        // log(l)
        for (let i = l + 1; i <= r; i++) {
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
     * 希尔排序  基于插入排序的原理
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
     * 归并排序   递归方式
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.mergeSort = (arr, n) => {
        var _this = this
        //传入n-1是保证 数组 arr 是[l,mid][mid+1,r]是两个保单左右端的闭区间
        __mergeSort(arr, 0, n - 1)
        //归并两个闭区间
        function __merge(arr, l, mid, r) {
            let result = arr;
            let i = l, j = mid + 1;
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
        //递归分解
        function __mergeSort(arr, l, r) {
            if (l >= r) {
                return
            }
            //尝试优化  存在bug
            // if (r - l <= 2) {
            //     _this.insertionSort2(arr, l, r)
            //     return
            // }

            //l+r可能超出计算机的最大数值
            let mid = Math.floor((l + r) / 2)
            __mergeSort(arr, l, mid)
            __mergeSort(arr, mid + 1, r)
            //对于近乎有序数组的排序优化
            //因为每一次__merge都会保证 l到mid是有序的  mid到 r是有序的
            if (arr[mid] > arr[mid + 1]) {
                __merge(arr, l, mid, r)
            }
        }
    }
    /**
     * 归并排序   自底向上
     * 相比较于是比递归方式要慢一点   可以很好的对链表数据结构排序nlogon级别的排序
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.mergeSortBu = (arr, n) => {
        for (let size = 1; size < n; size += size) {
            for (let i = 0; i + size < n; i += size + size) {
                let max = i + size + size - 1 > n - 1 ? n - 1 : i + size + size - 1
                //排序优化
                if (arr[i + size - 1] > arr[i + size]) {
                    //对 [i,i+size-1]和[i+size,i+size+size-1]进行归并
                    __merge(arr, i, i + size - 1, max)
                }
            }

        }

        function __merge(arr, l, mid, r) {
            let result = arr;
            let i = l, j = mid + 1;
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
    }
    /**
     * 快速排序 号称20世界最有影响算法之一
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.quickSort = (arr, n) => {
        var _this = this
        __quickSort(arr, 0, n - 1)
        function __quickSort(arr, l, r) {

            if (l >= r) {
                return
            }
            //基本上所有的高级排序在底层都可以采用插入排序进行优化
            // if (r - l <= 10) {
            //     _this.insertionSort2(arr, l, r)
            //     return
            // }
            let p = __partition(arr, l, r)
            __quickSort(arr, l, p - 1)
            __quickSort(arr, p + 1, r)
        }
        //对arr进行partition操作返回一个索引下标 p
        //满足 arr[l,p1]里面所有的值都小于 arr[p] , arr[p+1,r]里面所有的值都大于 arr[p]
        function __partition(arr, l, r) {
            let n = parseInt(Math.random() * (r - l + 1) + l, 10)
            swap(arr, l, n)
            let v = arr[l]
            let p = l
            // arr[l+1...p] < v < arr[p+1...r)  r这边是开区间 因为r本身是被考察的对象
            for (let i = l + 1; i <= r; i++) {
                if (arr[i] < v) {
                    swap(arr, p + 1, i)
                    p++
                }
            }
            swap(arr, l, p)
            return p
        }
    }

    /**
     * 快速排序 解决多个重复值得情况
     * @param {* 需要排序的数组} arr 
     * @param {* 数组长度} n 
     */
    this.quickSort2 = (arr, n) => {
        var _this = this
        __quickSort(arr, 0, n - 1)
        function __quickSort(arr, l, r) {

            if (l >= r) {
                return
            }
            //基本上所有的高级排序在底层都可以采用插入排序进行优化
            // if (r - l <= 10) {
            //     _this.insertionSort2(arr, l, r)
            //     return
            // }
            let p = __partition(arr, l, r)
            __quickSort(arr, l, p - 1)
            __quickSort(arr, p + 1, r)
        }
        //对arr进行partition操作返回一个索引下标 p
        //满足 arr[l,p1]里面所有的值都小于 arr[p] , arr[p+1,r]里面所有的值都大于 arr[p]
        function __partition(arr, l, r) {
            let n = Math.floor(Math.random() * (r - l + 1) + l, 10)
            swap(arr, l, n)
            let v = arr[l]
            let i = l + 1, p = r
            while (true) {
                while (i <= r && arr[i] < v) {
                    i++
                }
                while (p >= l + 1 && arr[p] > v) {
                    p--
                }
                if (i > p) {
                    break
                }
                swap(arr, i, p)
                i++
                p--
            }
            swap(arr, l, p)
            return p
        }
    }
    /**
    * 3路快速排序 解决多个重复值得情况
    * @param {* 需要排序的数组} arr 
    * @param {* 数组长度} n 
    */
    this.quickSort3Ways = (arr, n) => {
        var _this = this
        __quickSort(arr, 0, n - 1)
        function __quickSort(arr, l, r) {

            // if (l >= r) {
            //     return
            // }
            //基本上所有的高级排序在底层都可以采用插入排序进行优化
            if (r - l <= 15) {
                _this.insertionSort2(arr, l, r)
                return
            }
            //partition操作
            let n = Math.floor(Math.random() * (r - l + 1) + l, 10)
            swap(arr, l, n)
            let v = arr[l]
            let lt = l; // arr[l+1...lt] < v
            let gt = r + 1; // arr[gt...r] > v
            let i = l + 1; // arr[lt...i] == v

            while (i < gt) {
                if (arr[i] < v) {
                    swap(arr, i, lt + 1)
                    lt++
                    i++
                } else if (arr[i] > v) {
                    swap(arr, i, gt - 1)
                    gt--
                } else {
                    i++
                }
            }
            swap(arr,l,lt)

            __quickSort(arr,l,lt-1)
            __quickSort(arr,gt,r)
        }

    }
}