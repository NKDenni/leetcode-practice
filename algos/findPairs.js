// Given an array count the number of pairs that add up to a value K

function solution(a, k) {
    let numOfPairs = 0;

    // count frequency of each remainder map them to a hash
    const frequency = new Map();
    a.forEach((x) => {
        const remainder = x % k;
        const oldFrequency = frequency.get(remainder) || 0;
        frequency.set(remainder, oldFrequency + 1);
    });

    for (let [remainder, value] of frequency.entries()) {
        if (remainder === 0 || (2 * remainder === k)) {
            numOfPairs += value * (value - 1);
        } else {
            numOfPairs += value * (frequency.get(k - remainder) || 0);
        }
    }

    return numOfPairs / 2;
}