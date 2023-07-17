import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Price (props) {
    const apiKey =  "282FD518-3BE2-4FCD-AA32-BBB1A23DC4C0"
    const params = useParams();
    const symbol = params.symbol
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  // State to hold the coin data.

    const [coin, setCoin] = useState("null");
  // Function to fetch coin data.

    const getCoin = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCoin(data);
        } catch(e){
            console.error(e)
        }
    };

  // useEffect to run getCoin when component mounts.

    useEffect(() =>{
        getCoin();
    },[]);

const loaded = () => {
    return(
        <div>
            <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
        </div>
    );
};

const loading = () => {
    return <h1>Loading...</h1>
};

return coin && coin.rate ? loaded(): loading();
}