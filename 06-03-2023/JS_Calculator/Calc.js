

function Calculate(btn) {
    //READING USER ENTERED VALUES
    const principal = document.getElementById('amt').value;
    const rate = document.getElementById('int').value;
    const time = document.getElementById('time').value;
    try {
        interest = 0;

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
            interest = (principal * rate * time / 100).toFixed(2);
        }
        else if (btn == 1) {
            interest = ((principal * Math.pow((1 + (rate / 100)), time)) - principal).toFixed(2);
        }
        document.getElementById('output_interest').innerHTML = "Interest : " + interest;
    }
    catch (err) {
        window.alert(err);
    }
}