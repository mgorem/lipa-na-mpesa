import { useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [phone, setPhone] = useState();
  const [amount, setAmount] = useState();

  const submitPaymentDetails = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/token", {
        phone,
        amount,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-10 justify-center items-center flex flex-col">
      <h1 className="text-2xl my-3">
        Lipa Na <span className="text-green-600 font-bold my-3">Mpesa</span>
      </h1>
      <form className="flex flex-col space-y-5">
        <label className="font-bold">Phone Number</label>
        <input
          placeholder="enter phone number"
          onChange={(e) => setPhone(e.target.value)}
          className="bg-slate-100 text-center rounded-xl"
        />
        <label className="font-bold">Amount</label>
        <input
          placeholder="enter amount"
          onChange={(e) => setAmount(e.target.value)}
          className="bg-slate-100 text-center rounded-xl"
        />
        <button
          onClick={submitPaymentDetails}
          className="bg-green-600 text-white px-2 py-1 rounded-2xl"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default App;
