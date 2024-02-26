const trafficCanvas = document.getElementById("trafficChart");
const dailyTrafficCanvas = document.getElementById("dailyTrafficChart");
const mobileUsersCanvaas = document.getElementById("mobileUsersChart");
new Chart(trafficCanvas, {
	type: "line",
	data: {
		labels: [
			"16-22",
			"23-29",
			"30-5",
			"6-12",
			"13-19",
			"20-26",
			"27-3",
			"4-10",
			"11-17",
			"18-24",
			"25-31",
		],
		datasets: [
			{
				data: [
					750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
					2500,
				],
				backgroundColor: "rgba(116, 119, 191, .4)",
				borderWidth: 1,
				fill: true,
			},
		],
	},
	options: {
		aspectRatio: 2.5,
		animation: {
			duration: 0,
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			line: {
				tension: 0.4,
			},
		},
	},
});
new Chart(dailyTrafficCanvas, {
	type: "bar",
	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [
			{
				data: [75, 115, 175, 125, 225, 200, 100],
				backgroundColor: "rgba(116, 119, 191, 1)",
				borderWidth: 2,
				borderColor: "#696BAC",
				fill: true,
			},
		],
	},
	options: {
		aspectRatio: 2.5,
		animation: {
			duration: 0,
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	},
});
new Chart(mobileUsersCanvaas, {
	type: "doughnut",
	data: {
		labels: ["Desktop", "Tablet", "Phones"],
		datasets: [
			{
				data: [2000, 550, 500],
				backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
				borderWidth: 0,
				fill: true,
			},
		],
	},
	options: {
		aspectRatio: 1.9,
		plugins: {
			legend: {
				position: "right",
				labels: {
					boxWidth: 20,
					fontStyle: "bold",
				},
			},
		},
	},
});
