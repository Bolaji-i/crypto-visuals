import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import HistoricPrice from "./HistoricPrice";
import CurrentPrice from "./CurrentPrice";
import { params, endpoints, fetchData } from "./helpers";

export default function App() {
  const [coinPrice, setCoinPrice] = useState<String>("");
  const [coinData, setCoinData] = useState<params[]>([]);

  const getHistoricData = useCallback(async (currency: string = "EUR") => {
    const url = `${endpoints.historicPrice}${currency}`;
    const response = await fetchData(url);

    if (response) {
      let data: any[] = [];
      for (const [date, price] of Object.entries(response.bpi)) {
        data.push({ date, price });
      }

      data = data.slice(-10);
      setCoinData(data);
    }
  }, []);

  const getDailyData = useCallback(async (currency: string = "EUR") => {
    const url = `${endpoints.currentPrice}${currency}.json`;
    const response = await fetchData(url);
    if (response) {
      console.log(response.bpi[currency]);
      setCoinPrice(response.bpi[currency].rate);
    }
  }, []);

  useEffect(() => {
    getDailyData();
    getHistoricData();
  }, []);

  return (
    <div className="container App">
      <div className="currentPrice">
        <CurrentPrice rate={coinPrice}
         updatePrice={getDailyData}
         updateHistory={getHistoricData}
        />
      </div>
      <HistoricPrice data={coinData} />
      <p className="paragh">Chart shows the price of bitcoin for the past 10 days.</p>
    </div>
  );
}


