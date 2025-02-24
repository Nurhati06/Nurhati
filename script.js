function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = '';
}

function calculateResult() {
    const result = document.getElementById("result").value;
    try {
        const evaluation = eval(result);
        document.getElementById("result").value = evaluation;
         if (evaluation === Infinity || evaluation === -Infinity) {
                throw new Error('Infinity');
}
calculate = result.toString();
dispaly.value = calculate;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}