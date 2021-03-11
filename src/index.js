
exports.min = function min (array) {
	if (!array || !array.length) {
		return 0;
	}

	let res = array[0];

	for (let i = 0; i < array.length; i++) {
		if (array[i] < res) {
			res = array[i];
		}
	}

	return res;
}

exports.max = function max (array) {
    if (array && array.length) {
        let res = array[0];

        for (let i = 0; i < array.length; i++) {
            if (array[i] > res) {
                res = array[i];
            }
        }

        return res;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (!array || !array.length) {
		return 0;
}

    let sum = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);

    return(sum / array.length);
}
