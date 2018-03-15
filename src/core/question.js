function Qu() {
    /**
     * 查询数组中排在第m位的值
     * @param {*查询的数组} arr 
     * @param {* 数组长度} n
     * @param {* 查询的下标+1} m //查询数组的第多少位
     */
    this.selectionOne = (arr, n, m) => {
        var _this = this
        __quickSort(arr, 0, n - 1, m)
        function __quickSort(arr, l, r, m) {
            if (l >= r) {
                return
            }
            //基本上所有的高级排序在底层都可以采用插入排序进行优化
            // if (r - l <= 10) {
            //     _this.insertionSort2(arr, l, r)
            //     return
            // }
            let p = __partition(arr, l, r)
            if (p > m) {
                __quickSort(arr, l, p - 1, m)
            } else if (p < m) {
                __quickSort(arr, p + 1, r, m)
            } else {
                log(arr[p])
            }

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
}