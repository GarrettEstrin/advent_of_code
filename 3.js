// Part 1

// observations:
// 1 - 1 ^ 1
// 2 - 9 ^ 3
// 3 - 25 ^ 5
// 4 - 49 ^ 7

// Get number of points in each level

function getNumberOfPointsInLevel(level){
    points = (level+1)*(level+1)
    if(level % 2 == 0){
        points = points - 1;
    }
    // console.log(points);
    return points;
}

// test cases for getNumberOfPointsInLevel

// console.log("Points in level 1: 1 actual: " + getNumberOfPointsInLevel(1))
// console.log("Points in level 2: 8 acutal: " + getNumberOfPointsInLevel(2))
// console.log("Points in level 3: 16 actaul: " + getNumberOfPointsInLevel(3))
// console.log("Points in level 4: 24 actaul: " + getNumberOfPointsInLevel(4))
// console.log("Points in level 5: 36 actaul: " + getNumberOfPointsInLevel(5))

function getHighestNumberOfEachLevel(level){
    h = (level * 2) - 1
    h = h*h
    return h
}

// console.log("Highest Point in level 1: 1 actual: " + getHighestNumberOfEachLevel(1))
// console.log("Highest Point in level 2: 9 actual: " + getHighestNumberOfEachLevel(2))
// console.log("Highest Point in level 3: 25 actual: " + getHighestNumberOfEachLevel(3))
// console.log("Highest Point in level 4: 49 actual: " + getHighestNumberOfEachLevel(4))
// console.log(getHighestNumberOfEachLevel(5))

function getRangeOfLevel(level){
    range = [];
    range[0] = getHighestNumberOfEachLevel(level - 1) + 1
    range[1] = getHighestNumberOfEachLevel(level);
    return range;
}

// test cases for getRangeOfLevel
// console.log(`Numbers between ${getRangeOfLevel(4)[0]} and ${getRangeOfLevel(4)[1]} are in level 4`)
// console.log(`Numbers between ${getRangeOfLevel(5)[0]} and ${getRangeOfLevel(5)[1]} are in level 5`)
// console.log(`Numbers between ${getRangeOfLevel(6)[0]} and ${getRangeOfLevel(6)[1]} are in level 6`)

function findLevelOfNumber(num){
    numberFound = false
    level = 2
    while (!numberFound) {
        range = getRangeOfLevel(level)
        if(num >= range[0] && num <= range[1]){
            numberFound = true;
            return level
        } else {
            level = level + 1
        }
    }
}

// test cases for findLevelOfNumber
// console.log(`Level of 2 is ${findLevelOfNumber(2)}`)
// console.log(`Level of 9 is ${findLevelOfNumber(9)}`)
// console.log(`Level of 35 is ${findLevelOfNumber(35)}`)
// console.log(`Level of 81 is ${findLevelOfNumber(81)}`)
// console.log(`Level of 82 is ${findLevelOfNumber(82)}`)
// console.log(findLevelOfNumber(368078))

function getLowerRightNumberOfNumber(num){
    level = findLevelOfNumber(num)
    lrn = getHighestNumberOfEachLevel(level)
    return lrn
}

// test cases for getLowerRightNumberOfNumber
// console.log("Lower right number for 5 is: " + getLowerRightNumberOfNumber(5))
// console.log("Lower right number for 81 is: " + getLowerRightNumberOfNumber(81))
// console.log(getLowerRightNumberOfNumber(368078))

function getSidesOfLevel(num){
    level = findLevelOfNumber(num)
    numPerSide = getNumberInLevel(level) / 4
    range = getRangeOfLevel(level)
    side1 = [range[0], range[0] + numPerSide - 1]
    side2 = [side1[1] + 1, side1[1] + numPerSide]
    side3 = [side2[1] + 1, side2[1] + numPerSide]
    side4 = [side3[1] + 1, side3[1] + numPerSide]
    sides = [side1, side2, side3, side4]
    return sides
}

// test cases for getSideOfLevel
// console.log(getSidesOfLevel(49))

function findSideOfNumberOfLevel(num){
    sides = getSidesOfLevel(num)
    side = 0
    for(i=0;i<sides.length;i++){
        if(num >= sides[i][0] && num <= sides[i][1]){
            side = sides[i]
        }
    }
    return side;
}

// test cases
// console.log(findSideOfNumberOfLevel(50))



function getNumberInLevel(level){
    range = getRangeOfLevel(level)
    amountFromLevel = range[1] - range[0] + 1
    return amountFromLevel
}
// console.log(getNumberInLevel(5))

function getMiddleOfSide(num){
    side = findSideOfNumberOfLevel(num)
    length = side[1] - side[0] -1
    half = length / 2
    halfwayNum = side[0] + half
    return halfwayNum
}

// console.log(getMiddleOfSide(17))

function getStepsFromMiddleNum(num){
    middle = getMiddleOfSide(num)
    if(num >= middle){
        steps = num - middle
    } else {
        steps = middle - num
    }
    return steps
}

// console.log(getStepsFromMiddleNum(16))

function getStepsFromNumToPort(num){
    level = findLevelOfNumber(num)
    steps = getStepsFromMiddleNum(num)
    total_steps = level + steps - 1
    return total_steps
}
// answer
console.log(getStepsFromNumToPort(368078))

// part 2


