

function Calculate(btn) {
    const principal = document.getElementById('amt').value;
    const rate = document.getElementById('int').value;
    const time = document.getElementById('time').value;
    try {
        if (principal <= 0) {
            throw "Amount should be greater or equal to zero";
        }
        else if (rate <= 0) {
            throw "Interest rate should be greater than zero";
        }
        else if (time <= 0) {
            throw "Time should be greater than zero";
        }
        else if (btn == 0) {
            document.getElementById('output').innerHTML = principal * rate * time / 100;
        }
        else if (btn == 1) {
            document.getElementById('output').innerHTML =
                ((principal * Math.pow((1 + (rate / 100)), time)) - principal);
        }
    }
    catch (err) {
        window.alert(err);
    }
}