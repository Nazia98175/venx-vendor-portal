"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const textColor = isDarkMode ? "rgba(255, 255, 255, 0.7)" : "#5A607F";
  const tooltipBg = isDarkMode ? "#1E293B" : "#06497C";
  const arrowColor = isDarkMode ? "#1E293B" : "#F78124";
  const gridColor = isDarkMode ? "rgba(234, 234, 234, 0.1)" : "#EAEAEA";

  const chartData = {
    series: [
      {
        name: "Sales",
        data: [10, 20, 18, 30, 40, 38, 45, 50],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
      },
      colors: ["#F78124"],
      dataLabels: { enabled: false },
      stroke: { curve: "straight", width: 2 },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.4,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 100],
        },
      },
      markers: {
        size: [6], // Default size
        colors: ["#FFFFFF"],
        strokeColors: ["#F78124"],
        strokeWidth: 4,
        hover: {
          size: 6, // Increased hover size to make interaction stable
        },
      },
      xaxis: {
        tooltip: { enabled: false },
        categories: [
          "Oct Q1",
          "Oct Q2",
          "Oct Q3",
          "Oct Q4",
          "Nov Q1",
          "Nov Q2",
          "Nov Q3",
          "Nov Q4",
        ],
        axisBorder: {
          show: true,
          color: gridColor,
        },
        axisTicks: { show: false },
        labels: {
          offsetY: 5,
          style: {
            colors: textColor,
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        min: 0,
        max: 50,
        labels: {
          offsetX: -15,
          formatter: (val) => `${val}%`,
          style: {
            colors: textColor,
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: true,
        borderColor: gridColor,
        strokeDashArray: 0, // Optional: Make grid lines dashed
        strokeWidth: 0.96, // Set the border width (increase for thicker lines)
      },
      tooltip: {
        enabled: true,
        followCursor: true, // Smooth cursor-following tooltip
        intersect: false, // Ensures tooltip stays when hovering close points
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const customCategories = [
            "Oct Q1",
            "Oct Q2",
            "Oct Q3",
            "Oct Q4",
            "Nov Q1",
            "Nov Q2",
            "Nov Q3",
            "Nov Q4",
          ];
          const category = customCategories[dataPointIndex];
          const value = series[seriesIndex][dataPointIndex];

          return `
            <div style="
              background: ${tooltipBg};
              color: white;
              padding: 10px 30px;
              border-radius: 8px;
              font-size: 14px;
              font-weight: bold;
              text-align: center;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            ">
              ${category}
              <div style="font-size: 14px; font-weight: normal;">
                Series: ${value}
              </div>
              <div style="
                position: relative;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid ${arrowColor};
              "></div>
            </div>
          `;
        },
      },
    },
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-[10px] lg:mb-[30px]">
        <h2 className="text-base lg:text-[22px] font-semibold font-inter ">
          Last 3 Months Sale
        </h2>
        <Select>
          <SelectTrigger className="w-fit ">
            <SelectValue placeholder="Select Range " />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3" className="py-1.5 pl-4 pr-2 ">
              Last 3 Months
            </SelectItem>
            <SelectItem value="6" className="py-1.5 pl-4 pr-2">
              Last 6 Months
            </SelectItem>
            <SelectItem value="9" className="py-1.5 pl-4 pr-2">
              Last 9 Months
            </SelectItem>
            <SelectItem value="12" className="py-1.5 pl-4 pr-2">
              Last 12 Months
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
        key={isDarkMode} // Force re-render on dark mode change
      />
    </div>
  );
};

export default SalesChart;
