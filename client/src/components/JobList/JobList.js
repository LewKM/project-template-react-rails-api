import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

export default function JobList() {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch("/charts")
      .then((res) => res.json())
      .then(setCharts);
  }, []);
  

  return (
    <div className="text-dark">
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h4 className="text-black">Posted Charts :</h4>
        </div>
        <div className="row mt-4 g-1">
          {charts.map((chart) => (
            <Card key={chart.id} 
		id={chart.id}
		trading_pair={chart.trading_pair}
		image_url={chart.image_url}
		comment={chart.comment}
		user_id={chart.user_id} />
          ))}
        </div>
      </div>
    </div>
  );
}


