function range(start, end) {
    start = Number(start);
    end = Number(end);
    let rangeArr = [];
    if (start === end) {
        rangeArr.push(start);
        console.log(rangeArr);
    } else if (start > end) {
        console.log(`Sorry, that's not a valid range (start, end)`);
    } else {
        for (let x = start; x <= end; x++) {
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