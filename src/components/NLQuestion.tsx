import React, { useState } from "react";
import { predictConsumption } from "../services/api";

type Props = {
  onResult: (result: number) => void;
};

export default function NLQuestion({ onResult }: Props) {
  const [question, setQuestion] = useState("");

  const parseQuestion = (text: string) => {
    const consumoMatch = text.match(/(\d+)\s?kWh/i);
    const tarifaMatch = text.match(/tarifa\s?(\d+(\.\d+)?)/i);

    const consumo = consumoMatch ? parseInt(consumoMatch[1]) : 100;
    const tarifa = tarifaMatch ? parseFloat(tarifaMatch[1]) : 0.5;

    return { consumo, tarifa };
  };

  const handleAsk = async () => {
    const { consumo, tarifa } = parseQuestion(question);
    const result = await predictConsumption(consumo, tarifa, "Luz del Sur");
    onResult(result.prediccion);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col gap-3">
      <label>Pregunta en lenguaje natural</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ej: ¿Cuánto pagaré si consumo 200 kWh con tarifa 0.5?"
        className="border p-2 rounded"
      />
      <button
        onClick={handleAsk}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Preguntar
      </button>
    </div>
  );
}