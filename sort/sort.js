let arr = [0, 5, 4, 8, 7, 8, 6, 16, 25];
//冒泡排序 相邻元素比较 大的往后放 重复arr.length次得到最终结果
(function () {
    let _arr = arr.concat()
    for (let i = 0; i < _arr.length; i++) {
        for (let j = 0; j < _arr.length - 1; j++) {
            if (_arr[j] > _arr[j + 1]) {
                let temp = _arr[j + 1];
                _arr[j + 1] = _arr[j]
                _arr[j] = temp

            }
        }
    }
    // console.log(_arr)
})();
//改良版 在一次排序中找到最大值和最小值  从而缩小几乎一半的时间
(function () {
    let _arr = arr.concat();
    let low = 0;
    let high = _arr.length - 1;
    let tmp, j;
    while (low < high) {
        for (j = low; j < high; ++j) //正向冒泡,找到最大者
            if (_arr[j] > _arr[j + 1]) {
                tmp = _arr[j]; _arr[j] = _arr[j + 1]; _arr[j + 1] = tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j = high; j > low; --j) //反向冒泡,找到最小者
            if (_arr[j] < _arr[j - 1]) {
                tmp = _arr[j]; _arr[j] = _arr[j - 1]; _arr[j - 1] = tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    // console.log(_arr)
})();

//选择排序 最垃圾的排序 没有之一 原理 nge记录
(function () {
    let _arr = arr.concat()
    var len = _arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (_arr[j] < _arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = _arr[i];
        _arr[i] = _arr[minIndex];
        _arr[minIndex] = temp;
    }
    // console.log(_arr)
})();

//插入排序
// <1>.从第一个元素开始，该元素可以认为已经被排序；
// <2>.取出下一个元素，在已经排序的元素序列中从后向前扫描；
// <3>.如果该元素（已排序）大于新元素，将该元素移到下一位置；
// <4>.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// <5>.将新元素插入到该位置后；
// <6>.重复步骤2~5
(function () {
    let _arr = arr.concat()
    for (var i = 1; i < _arr.length; i++) {
        var key = _arr[i];
        var j = i - 1;
        while (j >= 0 && _arr[j] > key) {
            _arr[j + 1] = _arr[j];
            j--;
        }
        _arr[j + 1] = key;
    }
    // console.log(_arr);
})();
//插入排序二分法调优
(function () {
    let _arr = arr.concat()
    for (var i = 1; i < _arr.length; i++) {
        var key = _arr[i], left = 0, right = i - 1;
        while (left <= right) {
            var middle = parseInt((left + right) / 2);
            if (key < _arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        for (var j = i - 1; j >= left; j--) {
            _arr[j + 1] = _arr[j];
        }
        _arr[left] = key;
    }
    console.log(_arr)
})()


