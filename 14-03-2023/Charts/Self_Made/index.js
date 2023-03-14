const data = {
    Physics: 70,
    Chemistry: 80,
    Maths: 50,
    English: 100,
  };

  const colors = ["red","green","blue","burlywood"];

  const quote = '"';
  let chart = "";
  let max = 0;
  let i = 0;
  for (const key in data) {
    if(data[key]>max){max=data[key];}
    if(i>= colors.length){i=0;}
    chart +=
      "<div style = " +
      quote +
      " height:20px;width:" +
      (data[key] * 2).toString() +
      "px;background-color:"+
      colors[i]
      +";margin: 5px" +
      quote +
      ">" +
      key +
      "</div>";
    i++;
  }
   
  document.getElementById("chart").innerHTML = chart;

  document.getElementById("chart").style.borderBottom = "1px dashed black";

  document.getElementById("chart").style.borderLeft = "1px dashed black";

  document.getElementById("chart").style.width = ((max*2)+5).toString()+"px";