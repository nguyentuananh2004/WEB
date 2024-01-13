//bài 1
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateExponential() {
    var x = parseFloat(document.getElementById('inputX').value);
    var result = 1.0;

    for (var i = 1; i <= 10; i++) {
        result += Math.pow(x, i) / factorial(i);
    }

    document.getElementById('result').innerText = "Result: " + result.toFixed(4);
}

//bài 2

function numerator(n) {
    return n * (n + 1);
}

function denominator(n) {
    return n * (n + 1) / 2;
}

function calculateSeries() {
    var x = parseFloat(document.getElementById('inputX2').value);
    var result2 = 1.0;

    for (var i = 1; i <= 5; i++) {
        var num = numerator(i);
        var den = denominator(i);
        var term = (i % 2 === 0) ? -num / den : num / den;
        result2 += term * Math.pow(x, i);
    }

    document.getElementById('result2').innerText = "Result: " + result2.toFixed(4);
}

//bài 3
function calculateLogSeries() {
    var x = parseFloat(document.getElementById('inputX3').value);

    if (x < -1 || x >= 1) {
        document.getElementById('result3').innerText = "Error: x must be in the range [-1, 1).";
        return;
    }

    var result3 = 0.0;

    for (var i = 1; i <= 10; i++) {
        if (i !== 1) { // Bỏ qua i = 1 để tránh chia cho 0
            result3 -= Math.pow(x, i) / i;
        }
    }

    document.getElementById('result3').innerText = "Result: " + result3.toFixed(4);
}
//bài 4
function calculateSquareRootSeries() {
    var x = parseFloat(document.getElementById('inputX4').value);

    if (x <= -1 || x >= 1) {
        document.getElementById('result4').innerText = "Error: x must be in the range (-1, 1).";
        return;
    }

    var result4 = 1.0;
    var term = 1.0;

    for (var i = 1; i <= 10; i++) {
        term *= (1/2) * (2 * i - 1) / i * x;
        result4 += term;
    }

    document.getElementById('result4').innerText = "Result: " + result4.toFixed(4);
}
// bài 5
function calculateReciprocalSquareRootSeries() {
    var x = parseFloat(document.getElementById('inputX5').value);

    if (x <= -1 || x >= 1) {
        document.getElementById('result5').innerText = "Error: x must be in the range (-1, 1).";
        return;
    }

    var result5 = 1.0;
    var term = 1.0;

    for (var i = 1; i <= 10; i++) {
        term *= (2 * i - 1) / (2 * i) * x;
        result5 -= term;
    }

    document.getElementById('result5').innerText = "Result: " + result5.toFixed(4);
}
//bài 6
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateSineSeries() {
    var x = parseFloat(document.getElementById('inputX6').value);
    var result6 = x;
    var sign = -1;

    for (var i = 3; i <= 10; i += 2) {
        var term = Math.pow(x, i) / factorial(i);
        result6 += sign * term;
        sign *= -1;
    }

    document.getElementById('result6').innerText = "Result: " + result6.toFixed(4);
}
// bài 7
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateCosineSeries() {
    var x = parseFloat(document.getElementById('inputX7').value);
    var result7 = 1;
    var sign = -1;

    for (var i = 2; i <= 10; i += 2) {
        var term = Math.pow(x, i) / factorial(i);
        result7 += sign * term;
        sign *= -1;
    }

    document.getElementById('result7').innerText = "Result: " + result7.toFixed(4);
}
//bài 8
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateArcsineSeries() {
    var x = parseFloat(document.getElementById('inputX8').value);

    if (x <= -1 || x >= 1) {
        document.getElementById('result8').innerText = "Error: x must be in the range (-1, 1).";
        return;
    }

    var result8 = x;
    var term = x;

    for (var i = 1; i <= 10; i += 2) {
        term *= (2 * i - 1) / (2 * i) * x * x;
        result8 += term / (2 * i + 1);
    }

    document.getElementById('result8').innerText = "Result: " + result8.toFixed(4);
}
// bài 9
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateSineOverXSeries() {
    var x = parseFloat(document.getElementById('inputX9').value);
    var result9 = 1;
    var term = 1;

    for (var i = 2; i <= 10; i += 2) {
        term *= -1 * x * x / ((i + 1) * i);
        result9 += term;
    }

    document.getElementById('result9').innerText = "Result: " + result9.toFixed(4);
}
// bài 10
function calculateArctangentSeries() {
    var x = parseFloat(document.getElementById('inputX10').value);

    if (x <= -1 || x >= 1) {
        document.getElementById('result10').innerText = "Error: x must be in the range (-1, 1).";
        return;
    }

    var result10 = x;
    var term = x;

    for (var i = 3; i <= 10; i += 2) {
        term *= -1 * x * x / i;
        result10 += term;
    }

    document.getElementById('result10').innerText = "Result: " + result10.toFixed(4);
}
//bài 11
function calculateNaturalLogarithmSeries() {
    var x = parseFloat(document.getElementById('inputX11').value);

    if (x <= -1 || x > 1) {
        document.getElementById('result11').innerText = "Error: x must be in the range (-1, 1].";
        return;
    }

    var result11 = 0;
    var term = x;
    var sign = -1;

    for (var i = 2; i <= 10; i++) {
        term *= x / i;
        result11 += sign * term;
        sign *= -1;
    }

    document.getElementById('result11').innerText = "Result: " + result11.toFixed(4);
}
//bài 12
function calculateLogarithmSeries() {
    var x = parseFloat(document.getElementById('inputX12').value);

    if (x <= -1 || x >= 1) {
        document.getElementById('result12').innerText = "Error: x must be in the range (-1, 1).";
        return;
    }

    var result12 = 0;
    var term = x;
    var sign = 1;

    for (var i = 3; i <= 10; i += 2) {
        term *= x * x / i;
        result12 += sign * term;
        sign *= -1;
    }

    result12 *= 2;

    document.getElementById('result12').innerText = "Result: " + result12.toFixed(4);
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateHyperbolicSineSeries() {
    var x = parseFloat(document.getElementById('inputX13').value);
    var result13 = x;
    var term = x;
    var sign = 1;

    for (var i = 3; i <= 10; i += 2) {
        term *= x * x / factorial(i);
        result13 += sign * term;
        sign *= -1;
    }

    document.getElementById('result13').innerText = "Result: " + result13.toFixed(4);
}
//bài 14
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateHyperbolicCosineSeries() {
    var x = parseFloat(document.getElementById('inputX14').value);
    var result14 = 1;
    var term = 1;

    for (var i = 2; i <= 10; i += 2) {
        term *= x * x / factorial(i);
        result14 += term;
    }

    document.getElementById('result14').innerText = "Result: " + result14.toFixed(4);
}