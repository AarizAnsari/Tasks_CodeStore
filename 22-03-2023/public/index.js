
document.getElementById('submitbutton').addEventListener("click",submit);

function submit(){
    const name = document.getElementById('name').value;
    const standard = document.getElementById('class').value;
    const marks = document.getElementById('number').value;
    const image = document.getElementById('image').value;
    console.log(image);
}