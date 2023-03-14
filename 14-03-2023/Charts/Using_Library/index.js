
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});
      google.charts.load('current', {'packages':['timeline']});
      google.charts.load('current', {'packages':['table']});
      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawPieChart);
      google.charts.setOnLoadCallback(drawTable);
      google.charts.setOnLoadCallback(drawTimeleine);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawPieChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'activity');
        data.addColumn('number', 'distribution');
        data.addRows([
          ['Coding', 4],
          ['Research', 1],
          ['Studying', 2],
          ['Bug Fixing', 2]
        ]);

        // Set chart options
        var options = {'title':'Activity Pie Chart',
                       'width':800,
                       'height':400};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }

      function drawTable() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Task');
        data.addColumn('string', 'Duration');
        data.addColumn('boolean', 'Status');
        data.addRows([
          ['Correction','01:00', true],
          ['Generic Types','02:00', true],
          ['Lunch','01:00', true],
          ['Charts','02:00', false],
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true,width : '1000px',height: '300px'});
      }

      function drawTimeleine() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Task' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Correction', new Date("March 14 2023 10:00"),new Date("March 14 2023 11:00")],
          [ 'Generic Type', new Date("March 14 2023 11:00"),new Date("March 14 2023 13:00")],
          [ 'Charts', new Date("March 14 2023 13:10"),new Date("March 14 2023 14:00")],
          [ 'Lunch', new Date("March 14 2023 14:00"),new Date("March 14 2023 15:00")],
          [ 'Charts', new Date("March 14 2023 15:00"),new Date("March 14 2023 18:00")],
        ]);

        chart.draw(dataTable);
      }


      function drawChart() {
        const dataTable = new google.visualization.DataTable();
        dataTable.addColumn({type: 'string', 'id': 'category'});
        dataTable.addColumn({type: 'number', 'id': 'amount'});
        dataTable.addRows([
          ['A', 28],
          ['B', 55],
          ['C', 43],
          ['D', 91],
          ['E', 81],
          ['F', 53],
          ['G', 19],
          ['H', 87],
        ]);

        const options = {
          "vega": {
            "$schema": "https://vega.github.io/schema/vega/v4.json",
            "width": 500,
            "height": 200,
            "padding": 5,

            'data': [{'name': 'table', 'source': 'datatable'}],

            "axes": [
              { "orient": "bottom", "scale": "xscale" },
              { "orient": "left", "scale": "yscale" }
            ],

          }
        };

        const chart = new google.visualization.VegaChart(document.getElementById('chart-div'));
        chart.draw(dataTable, options);
      }