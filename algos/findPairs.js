// Given an array count the number of pairs that add up to a value K

function solution(a, k) {
    let numOfPairs = 0;

    // count frequency of each remainder map them to a hash
    const frequency = new Map();
    // given array a, for each item in array
    a.forEach((x) => {
        // calculate the remainder for each value in array and set to remainder variable
        const remainder = x % k;
        // check the frequency map for that remainder and if it doesnt exist set oldFrequency to 0
        const oldFrequency = frequency.get(remainder) || 0;
        // call the frequency map and set the oldFrequency value for that reminder 
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