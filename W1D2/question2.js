function sum(){
    let x = parseInt(document.getElementById("num1").value)
    let y = parseInt(document.getElementById("num2").value)

    let sum = x + y
    return document.getElementById("result").innerHTML = sum;
}

function mul(){
    let x = parseInt(document.getElementById("num1").value)
    let y = parseInt(document.getElementById("num2").value)

    let mul = x * y
    return document.getElementById("result").innerHTML = mul;
}

function sub(){
    let x = parseInt(document.getElementById("num1").value)
    let y = parseInt(document.getElementById("num2").value)

    let sub = x - y
    return document.getElementById("result").innerHTML = sub;
}

