

function tripleFive() {
    for(var i = 0; i < 3; i++) {
        console.log("Five! ")
    }
}

tripleFive()


function lastLetter(str) {
    return str[str.length - 1]
}
    
console.log(lastLetter('hello'))


function square(num) {
    return num *= num
}

console.log(square(3))
console.log(square(5))


function negate(num) {
    return num *= -1
}

console.log(negate(5))
console.log(negate(-8))


function toArray(arg1, arg2, arg3) {
    var Arr = []
    
    Arr[0] = arg1
    Arr[1] = arg2
    Arr[2] = arg3
    
    return Arr 
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))


function startsWithA(str) {
    if (str[0] === 'a') {
        return true
    } else {
        return false
    }
}

console.log(startsWithA('aardvark'))
console.log(startsWithA('bear'))


function excite(str) {
    return str + '!!!'
}

console.log(excite('yes'))
console.log(excite('go'))


function sun(str) {
    if (str.indexOf('sun') === -1) {
        return false
    } else  {
        return true
    }
}

console.log(sun('sundries'))
console.log(sun('asunder'))
console.log(sun('catapult'))


function tiny(num) {
    if (num > 0 && num < 1) {
        return true
    } else {
        return false
    }
}

console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))


function getSeconds(str) {
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