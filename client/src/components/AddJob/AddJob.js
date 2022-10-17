import React, { useState } from "react";
import "./AddJob.css";

export default function AddJob({user}) {
  const [trading_pair, setTradingPair] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [comment, setComment] = useState("");



  const [errors, setErrors] = useState([]);

  let id = 1;

  {user ? id=user.id: id = 1}
 
  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it

    {user ? id = user.id : id = 1}


    const formData = {
      trading_pair,
      image_url,
      comment,
      user_id : id,
    };

    const response = await fetch("/charts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      // console.log(data);
      window.location = '/charts-page';
    } else {
      setErrors(data.errors);
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">SHARE CHART</h3>
          <div className="form-group mt-3">
            <label>Trading Pair</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="XAU/USD"
              value={trading_pair}
              onChange={(e) => setTradingPair(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Chart Image</label>
            <input
              type="url"
              className="form-control mt-1"
              placeholder="image url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label>Comment</label>
            <textarea
              rows="4"
              cols="30"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button id = "submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
