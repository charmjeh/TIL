function makeRangeIterator (start = 0, end = Infinity, step = 1) {
    var nextIndex = start;
    var n = 0;

    var rangeIterator = {
        next: () => {
            var result;
            if(start < end) {
                result = {value: nextIndex, done: false}
            } else if (nextIndex == end) {
                result = {value: n, done: true}
            } else {
                result = {done: true}
            }
            nextIndex += step;
            n++;
            return result;
        }
    };
    return rangeIterator;
}