
//排序辅助函数集合
function SortTestHelper() {
    /**
     * 返回输出一个数组
     * @param {* 数组长度} n 
     * @param {* 数组最大值} rangeL 
     * @param {* 数组最小值} rangeR 
     */
    this.outPutArray = (n, rangeL, rangeR) => {
        if (rangeR < rangeL) {
            log('rangeR必须大于rangeL')
            return
        }
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL, 10)
        }
        return arr
    }

    this.isSorted = (arr, n) => {
        for (var i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }
        return true
    }
    /**
     * 测试排序时间
     * @param {*排序算法的名称} name 
     * @param {*排序函数} fn 
     * @param {*需要排序的数组} arr 
     * @param {*数组长度} n 
     */
    this.testSort = (name, fn, arr, n) => {
        let startTime = new Date().getTime();
        fn(arr, n)
        let endTime = new Date().getTime();

        if (this.isSorted(arr, n)) {
            log(name + ":排序耗时" + String((endTime - startTime) / 1000) + 's')
        } else {
            log('排序失败')
        }
    }
    /**
     * 生成一个几乎排列好的数组
     * @param {* 数组长度} n 
     * @param {* 调换位置的次数} swrapTime 
     */
    this.outNearlyOrderedArray = (n, swrapTime) => {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr[i] = i
        }
        for (let i = 0; i < swrapTime; i++) {
            var X = Math.floor(Math.random() * n)
            var Y = Math.floor(Math.random() * n)
            [arr[X], arr[Y]] = [arr[Y], arr[X]]
        }
        return arr
    }
    /**
     * 打乱数组 洗牌算法
     * @param {* 需要打乱的数组} arr 
     * @param {* 数组长度} n 
     */
    /**不完全的数组打乱方法
     * [12,4,16,3].sort(function() {
            return .5 - Math.random();
        });
     */
    this.shuffle = (arr, n) => {
        for (let i = 1; i < arr.length; i++) {
            const random = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[random]] = [arr[random], arr[i]];
        }
        return arr;
    };

}
