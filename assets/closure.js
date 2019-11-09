function range(start, end) {
    start = Number(start);
    // if (start === end) {
    //     rangeArr.push(start);
    //     console.log(rangeArr);
    // } else if (start > end) {
    //     console.log(`Sorry, that's not a valid range (start, end)`);
    // } 
    if (end === undefined) {
        console.log(`You didn't provide an ending value.`);
        return function getEnd(end) {
            return getRange(start, end);
        };
    } else {
        end = Number(end);
        return getRange(start, end);
    };

    function getRange(start, end) {
        var rangeArr = [];
        for (let x = start; x <= end; x++) {
            rangeArr.push(x);
        };
        console.log(rangeArr);
    };
};


range(3, 3);
range(3, 8);
range(3, 0);
range(5);

var start3 = range(3);

start3(3);
start3(8);
start3(0);