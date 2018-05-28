// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'scatter']});


// --- ^ Only have to do this once!
// For second chart:
// 1. Seta  callback for it
// 2. Have the callback function for it (setOnLoadCallback).
// 3. Be sure all callback functions have different names
// 4. Be sure all callback functions use different divs to draw in. Add a new div to HTML for each chart

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'Year');
	data.addColumn('number', 'Billion btu');

	data.addRows([
		[	2015	,	234192	]	,
		[	2014	,	226863	]	,
		[	2013	,	229666	]	,
		[	2012	,	220020	]	,
		[	2011	,	222956	]	,
		[	2010	,	223518	]	,
		[	2009	,	213642	]	,
		[	2008	,	195232	]	,
		[	2007	,	190489	]	,
		[	2006	,	185564	]	,
		[	2005	,	183175	]	,
		[	2004	,	179462	]	,
		[	2003	,	188473	]	,
		[	2002	,	174327	]	,
		[	2001	,	158038	]	,
		[	2000	,	194952	]	,
		[	1999	,	204114	]	,
		[	1998	,	205485	]	,
		[	1997	,	231308	]	,
		[	1996	,	240343	]	,
		[	1995	,	220211	]	,
		[	1994	,	215563	]	,
		[	1993	,	217028	]	,
		[	1992	,	230779	]	,
		[	1991	,	212955	]	,
		[	1990	,	198986	]	,
		[	1989	,	232261	]	,
		[	1988	,	113802	]	,
		[	1987	,	107606	]	,
		[	1986	,	116356	]	,
		[	1985	,	110698	]	,
		[	1984	,	108740	]	,
		[	1983	,	91705		]	,
		[	1982	,	104674	],
		[	1981	,	83117	]	,
		[	1980	,	90049	]	,
		[	1979	,	69419	]	,
		[	1978	,	65357	]	,
		[	1977	,	59953	]	,
		[	1976	,	56507	]	,
		[	1975	,	50007	]	,
		[	1974	,	52429	]	,
		[	1973	,	56250	]	,
		[	1972	,	54389	]	,
		[	1971	,	49968	]	,
		[	1970	,	51035	]	,
		[	1969	,	51489	]	,
		[	1968	,	49556	]	,
		[	1967	,	44550	]	,
		[	1966	,	42760	]	,
		[	1965	,	39916	]	,
		[	1964	,	39016	]	,
		[	1963	,	38613	]	,
		[	1962	,	35826	]	,
		[	1961	,	34417	]	,
		[	1960	,	35680	]	
	]);


// Set chart options
	var options = {
          chart: {
            title: 'Annual Renewable Energy Production in Florida',
          },
          width: 800,
          height: 500,
          series: {
            0: {axis: 'hours studied'},
            1: {axis: 'final grade'}
          },
          axes: {
            y: {'hours studied': {label: 'Billion btu'},
            }
          }
        };

// Instantiate and draw our chart, passing in some options.
	var chart = new google.charts.Scatter(document.getElementById('chart_div1'));
	chart.draw(data, options);
}

function drawChart2() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Slices');
	data.addRows([
		['Mushrooms', 3],
		['Onions', 1],
		['Olives', 1],
		['Zucchini', 1],
		['Pepperoni', 2]
	]);

	// Set chart options
	var options = {'title':'How Much Pizzzza I Ate Last Night',
								 'width':400,
								 'height':300,
									'legend': 'left',
								 'is3D': true
								};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}
