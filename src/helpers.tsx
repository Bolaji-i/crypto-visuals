export async function fetchData(url: string) {
  const request = await fetch(url);
  const response = await request.json();
  return response;
}

export const endpoints = {
  historicPrice: "https://api.coindesk.com/v1/bpi/historical/close.json?currency=",
  currentPrice: "https://api.coindesk.com/v1/bpi/currentprice/",
};


export type params = {
  date: String;
  price: Number;
};