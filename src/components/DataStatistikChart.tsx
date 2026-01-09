"use client";

import dynamic from "next/dynamic";
import type { ApexOptions } from "apexcharts";
import type { ChartType } from "./SectionDataStatistik";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DataStatistikChart({
  selectedChart,
}: {
  selectedChart: ChartType;
}) {
  const chartConfig: Record<
    ChartType,
    { series: ApexAxisChartSeries; options: ApexOptions }
  > = {
    "status-puu": {
      series: [
        { name: "Tidak Berlaku", data: [190, 420, 300, 80, 200, 400, 520] },
        { name: "Berlaku", data: [450, 380, 340, 720, 280, 320, 300] },
      ],
      options: {
        chart: { type: "bar", stacked: true, toolbar: { show: false } },
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
        },
        legend: { show: false },
      },
    },

    "jumlah-dokumen": {
      series: [{ name: "Jumlah Dokumen", data: [1200, 860, 430, 320] }],
      options: {
        chart: { type: "bar", toolbar: { show: false } },
        plotOptions: { bar: { columnWidth: "45%", borderRadius: 16 } },
        colors: ["#097969"],
        xaxis: { categories: ["PUU", "Putusan", "Monografi", "Artikel"] },
        legend: { show: false },
      },
    },

    "jumlah-pengunjung": {
      series: [{ name: "Jumlah Pengunjung", data: [32000, 18500, 9200, 6400] }],
      options: {
        chart: { type: "bar", toolbar: { show: false } },
        plotOptions: { bar: { columnWidth: "45%", borderRadius: 16 } },
        colors: ["#9DC209"],
        xaxis: { categories: ["PUU", "Putusan", "Monografi", "Artikel"] },
        legend: { show: false },
      },
    },
  };

  const { series, options } = chartConfig[selectedChart];

  return (
    <div className="max-w-7xl mx-auto px-0 lg:px-10">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
