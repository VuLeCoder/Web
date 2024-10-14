// const plugin = require("tailwindcss");

// Loans -----------------------------------------------------------------------
const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Sales ($)",
      data: [12000, 15000, 8000, 18000, 20000, 22000, 25000],
      backgroundColor: ["rgb(44, 123, 229)"],
      barThickness: 10,
      maxBarThickness: 15,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      x: {
        display: false,
      },
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
};

const weeklySalesChart = new Chart(
  document.getElementById("Loans"),
  config
);
//---------------------------------------------------------------------------------


// Customer -----------------------------------------------------------------------
var ctx = document.getElementById("Customer").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "01 May",
      "05 May",
      "10 May",
      "15 May",
      "20 May",
      "25 May",
      "30 May",
    ],
    datasets: [
      {
        label: "May",
        data: [100, 200, 300, 500, 400, 300, 200],
        fill: false,
        backgroundColor: "rgb(44, 123, 229)",
        borderColor: "rgb(44, 123, 229)",
        tension: 0.1,
      },
      {
        label: "April",
        data: [50, 50, 50, 50, 200, 300, 400],
        fill: false,
        backgroundColor: "rgba(44, 123, 229, 0.5)",
        borderColor: "rgba(44, 123, 229, 0.3)",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
        beginAtZero: true,
      },
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