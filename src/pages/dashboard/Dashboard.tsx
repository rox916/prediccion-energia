import React, { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import NLQuestion from "../components/NLQuestion";
import PredictionChart from "../components/PredictionChart";

export default function Dashboard() {
  const [results, setResults] = useState<{ time: string; value: number }[]>([]);

  const handleNewPrediction = (value: number) => {
    const newEntry = { time: new Date().toLocaleTimeString(), value };
    setResults((prev) => [...prev, newEntry]);
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PredictionForm onResult={handleNewPrediction} />
      <NLQuestion onResult={handleNewPrediction} />
      <div className="col-span-2">
        <PredictionChart data={results} />
      </div>
    </div>
  );
}
