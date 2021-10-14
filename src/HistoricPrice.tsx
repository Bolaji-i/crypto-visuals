import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function HistoricPrice() {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const mainUrl =
      "https://api.coindesk.com/v1/bpi/historical/close.json?currency=";
    let url = `${mainUrl}/USD`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setCoinData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let data = coinData;
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="bpi" stroke="#8864c8" fill="#8864c8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
