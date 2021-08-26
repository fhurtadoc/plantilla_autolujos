
showResult()
function showResult(){ 

    let div =document.createElement("div")
    div.id = "myDiv"; 
    let trace1 = {
        x:['marzo', 'abril', 'mayo','junio', 'julio', 'agosto'],
        y: [5500000, 2600000, 3700000, 1800000, 2900000, 4400000],
        type: 'scatter'
    };
   
    
    var layout = {
        title: 'Ventas ultimo Semestre',
        showlegend: false
    };

      var data = [trace1];
      
      
      Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
      
}