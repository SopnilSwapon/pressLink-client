import { Chart } from "react-google-charts";
const data = [
    ["Year", "Premium Users", "Normal Users"],
    ["2021", 700, 500],
    ["2022", 770, 460],
    ["2023", 900, 320],
    ["2024", 1030, 240],
  ];
  
  const options = {
    title: "PressLink News Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };
const AdimAreaChart = () => {
    
    return (
        <div>
             <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
        </div>
    );
};

export default AdimAreaChart;