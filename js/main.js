$(function() {

	var container = $(".graph");

	// Determine how many data points to keep based on the placeholder's initial size;
	// this gives us a nice high-res plot while avoiding more than one point per pixel.

	var maximum = 100;

	//

	var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

	//

	series = [{
		data: getRandomData(),
		shadowSize: 0,
		lines: {
			lineWidth: 1.2,
			fill: true,
			fillColor:{
				colors:["#fff","#c9e9ee"]
			},
			shadowSize: 5
		}
	}];

	//

	var plot = $.plot(container, series, {
		colors: ["#5bbbca", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
		grid: {
			show: false,
			borderWidth: 0, 
			backgroundColor: {
				colors: ["#fff", "#e4f4f4"]
			}
		},
		xaxis: {
			tickFormatter: function() {
				return "";
			}
		},
		yaxis: {
			min: 0,
			max: 110
		},
		legend: {
			show: true
		}
	});

	// Create the demo X and Y axis labels
 

	// Since CSS transforms use the top-left corner of the label as the transform origin,
	// we need to center the y-axis label by shifting it down by half its width.
	// Subtract 20 to factor the chart's bottom margin into the centering.

	 
	// Update the random dataset at 25FPS for a smoothly-animating chart

	// setInterval(function updateRandom() {
	// 	series[0].data = getRandomData();
	// 	plot.setData(series);
	// 	plot.draw();
	// }, 40);

});