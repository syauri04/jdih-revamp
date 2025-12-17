"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DataStatistikChart() {
  const series = [
    {
      name: "Tidak Berlaku",
      data: [190, 420, 300, 80, 200, 400, 520],
    },
    {
      name: "Berlaku",
      data: [450, 380, 340, 720, 280, 320, 300],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 20,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    colors: ["#043927", "#9DC209"],
    dataLabels: { enabled: false },
    stroke: { width: 0 },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: [
        "Pedoman",
        "Peraturan\nPemerintah",
        "Instruksi\nPresiden",
        "Peraturan\nMenteri\nPertanian",
        "Peraturan\nMenteri",
        "Undang-Undang",
        "Peraturan Presiden",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      max: 1000,
      tickAmount: 4,
      labels: {
        formatter: (val) => Math.round(val).toString(),
      },
    },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
    responsive: [
      {
        breakpoint: 768, // < md
        options: {
          chart: {
            height: 420, // 🔥 TAMBAH TINGGI
          },
          plotOptions: {
            bar: {
              columnWidth: "60%", // 🔥 BAR LEBIH RAMPING
              borderRadius: 14,
            },
          },
          grid: {
            padding: {
              left: 12,
              right: 12,
            },
          },
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-0 lg:px-10 ">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </>
  );
}
