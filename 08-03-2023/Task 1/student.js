
function submit() {

    const StudentName = document.getElementById('Sname').value;
    if (StudentName == '') { alert('Please Enter Your Name'); return false;}

    const SchoolName = document.getElementById('scl').value;
    if (SchoolName == '') { alert('Please Enter School Name');return false; }

    const Stream = document.getElementById('stream').value;
    if (Stream != 'PCM' && Stream != 'PCB' && Stream != 'Commerce' && Stream != 'Arts') {
        alert('Please Choose a Streaam');
        return false;
    }

    const Board = document.getElementById('board').value;
    if (Board == '') {
        alert('Please Enter Your Board Name');
        return false;
    }

    let percentage10 = document.getElementById('10percentage').value;

    if (percentage10 == '') {
        alert('Please enter your class 10 percentage');
        return false;
    }
    
    percentage10 = parseInt(percentage10);

    if (percentage10 < 0 || percentage10 > 100) {
        alert('Please enter correct class 10 percentage');
        return false;
    }

    

    let percentage12 = document.getElementById('12percentage').value;

    if (percentage12 == '') {
        alert('Please enter your class 10 percentage');
        return false;
    }
    
    percentage12 = parseInt(percentage12);

    if (percentage12 < 0 || percentage12 > 100) {
        alert('Please enter correct class 12 percentage');
        return false;
    }

    alert('The form has been submitted successfully')
}