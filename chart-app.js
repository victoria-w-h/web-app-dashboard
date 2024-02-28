const trafficCanvas = document.getElementById("trafficChart");
const dailyTrafficCanvas = document.getElementById("dailyTrafficChart");
const mobileUsersCanvaas = document.getElementById("mobileUsersChart");

//////////////////////////////// Daily traffic Chart

const dailyTrafficOptions = {
	responsive: true,
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
};
const dailyTrafficData = {
	labels: ["S", "M", "T", "W", "T", "F", "S"],
	datasets: [
		{
			data: [75, 115, 175, 125, 225, 200, 100],
			backgroundColor: "rgba(116, 119, 191, 1)",
			fill: true,
		},
	],
};
new Chart(dailyTrafficCanvas, {
	type: "bar",
	data: dailyTrafficData,
	options: dailyTrafficOptions,
});

//////////////////////////////// Mobile Users Chart

const mobileUsersOptions = {
	responsive: true,
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
};
const mobileUsersData = {
	labels: ["Desktop", "Tablet", "Phones"],
	datasets: [
		{
			data: [2000, 550, 500],
			backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
			borderWidth: 0,
			fill: true,
		},
	],
};

new Chart(mobileUsersCanvaas, {
	type: "doughnut",
	data: mobileUsersData,
	options: mobileUsersOptions,
});
//////////////////////////////// Web Traffic Chart

let trafficData1 = {
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
			data: [7, 12, 10, 20, 15, 17, 12, 18, 22, 15, 25],
			backgroundColor: "rgba(116, 119, 191, .4)",
			borderWidth: 1,
			fill: true,
		},
	],
};

let trafficData2 = {
	labels: [
		"1-22",
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
			data: [130, 158, 240, 480, 390, 470, 430, 320, 400, 400, 600],
			backgroundColor: "rgba(116, 119, 191, .4)",
			borderWidth: 1,
			fill: true,
		},
	],
};

let trafficData3 = {
	labels: [
		"1-22",
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
			data: [700, 750, 700, 1200, 1300, 1750, 950, 1350, 950, 1500, 1300],
			backgroundColor: "rgba(116, 119, 191, .4)",
			borderWidth: 1,
			fill: true,
		},
	],
};

let trafficData4 = {
	labels: [
		"1-22",
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
				3500, 4400, 2500, 5000, 4800, 6100, 3500, 5000, 4200, 6500,
				5200,
			],
			backgroundColor: "rgba(116, 119, 191, .4)",
			borderWidth: 1,
			fill: true,
		},
	],
};
// traffic options

const trafficCanvasOptions = {
	responsive: true,
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
};

let trafficChart = new Chart(trafficCanvas, {
	type: "line",
	data: trafficData1,
	options: trafficCanvasOptions,
});

let trafficList = document.getElementsByClassName("traffic-term");

for (let i = 0; i < trafficList.length; i++) {
	let trafficTerm = trafficList[i];
	trafficTerm.addEventListener("click", function () {
		var current = document.getElementsByClassName("traffic-active");
		current[0].classList.remove("traffic-active");
		trafficTerm.classList.add("traffic-active");
	});
}

for (let i = 0; i < trafficList.length; i++) {
	let trafficTerm = trafficList[i];
	trafficTerm.addEventListener("click", (e) => {
		let selectedTerm = trafficTerm.dataset.traffic;
		if (selectedTerm === "hourlyTraffic") {
			trafficChart.data = trafficData1;
			trafficChart.update();
		} else if (selectedTerm === "dailyTraffic") {
			trafficChart.data = trafficData2;
			trafficChart.update();
		} else if (selectedTerm === "weeklyTraffic") {
			trafficChart.data = trafficData3;
			trafficChart.update();
		} else if (selectedTerm === "monthlyTraffic") {
			trafficChart.data = trafficData4;
			trafficChart.update();
		}
	});
}
