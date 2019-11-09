function range(start, end) {
    var rangeArr = [];
    if (start === end) {
        rangeArr.push(start);
        console.log(rangeArr);
    } else if (start > end) {
        console.log(`Sorry, that's not a valid range (start, end)`);
    } else {
        for (var x = start; x < (end + 1); x++) {
            rangeArr.push(x);
        };
        console.log(rangeArr);
    };
    console.log(`~~~~~~~~~~~~~~~~~~~~`)
};
console.log(`hello`)
range(3, 3);
range(3, 8);
range(3, 0);