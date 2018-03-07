//自定义对象

//自定义可以比较的对象（重写对象的tostring或者valueOf）
function CustomObj() {
    this.num = 0
    this.setNum = (n) => {
        this.num = n
        return this
    }
    this.toString = () => {
        return this.num
    }
}
//输出一个自定义对象的数组
function outCustomArr (arr, n) {
    let result = []
    for (let i = 0; i < n; i++) {
        let c = new CustomObj().setNum(arr[i])
        result.push(c)
    }
    return result
}