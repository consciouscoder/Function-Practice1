var tripleFive = function () {
    for(var i = 0; i < 3; i++) {
        console.log("Five! ")
    }
}

tripleFive()


var lastLetter = function (str) {
    return str[str.length - 1]
}
    
console.log(lastLetter('hello'))


var square = function (num) {
    return num *= num
}

console.log(square(3))
console.log(square(5))


var negate = function (num) {
    return num *= -1
}

console.log(negate(5))
console.log(negate(-8))


var toArray = function (arg1, arg2, arg3) {
    var Arr = []
    
    Arr[0] = arg1
    Arr[1] = arg2
    Arr[2] = arg3
    
    return Arr 
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))


var startsWithA = function (str) {
    if (str[0] === 'a') {
        return true
    } else {
        return false
    }
}

console.log(startsWithA('aardvark'))
console.log(startsWithA('bear'))


var excite = function (str) {
    return str + '!!!'
}

console.log(excite('yes'))
console.log(excite('go'))


var sun = function (str) {
    if (str.indexOf('sun') === -1) {
        return false
    } else  {
        return true
    }
}

console.log(sun('sundries'))
console.log(sun('asunder'))
console.log(sun('catapult'))


var tiny = function (num) {
    if (num > 0 && num < 1) {
        return true
    } else {
        return false
    }
}

console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))


var getSeconds = function (str) {
    var tt = str.split(':')
    var mm = 0
    var ss = 0
    var secs = 0 
    
    mm = tt[0] * 60
    ss = tt[1]
    secs = mm + ss * 1
    
    return (secs) 
}

console.log(getSeconds('01:30'))
console.log(getSeconds('10:25'))