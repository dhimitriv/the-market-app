import { useEffect, useState } from "react";

function Converter() {
  const [amount, setAmount] = useState("1");
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }

      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div className="flex items-center h-[30px] w-[270px] m-4">
      <label className="text-white text-[10px] pr-0.5">Currency</label>
      {amount === undefined ? amount : ""}
      <input
        className="p-[4.5px] text-sm bg-[#ffffff5b] text-white w-[35px]"
        type="text"
        placeholder="0"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        className="p-1 text-sm bg-[#ffffff75] m-0.5"
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <select
        className="p-1 text-sm bg-[#ffffff75] mr-2"
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <p className="flex text-[12px] bg-[#ffffff75]  px-[1px] py-[4.5px]">
        {parseFloat(converted).toFixed(3)} {toCur}
      </p>
    </div>
  );
}

export default Converter;
