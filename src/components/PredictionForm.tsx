import React, { useState } from "react";
import { predictConsumption } from "../services/api";

type Props = {
  onResult: (result: number) => void;
};

const PredictionForm: React.FC<Props> = ({ onResult }) => {
  const [consumo, setConsumo] = useState<number>(0);
  const [tarifa, setTarifa] = useState<number>(0);
  const [empresa, setEmpresa] = useState<string>("Luz del Sur");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (consumo <= 0 || tarifa <= 0) {
      alert("Los valores deben ser mayores a 0");
      return;
    }
    const result = await predictConsumption(consumo, tarifa, empresa);
    onResult(result.prediccion);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white shadow rounded-lg flex flex-col gap-3"
    >
      <label>Consumo (kWh)</label>
      <input
        type="number"
        value={consumo}
        onChange={(e) => setConsumo(Number(e.target.value))}
        className="border p-2 rounded"
      />

      <label>Tarifa (S/)</label>
      <input
        type="number"
        value={tarifa}
        onChange={(e) => setTarifa(Number(e.target.value))}
        className="border p-2 rounded"
      />

      <label>Empresa</label>
      <select
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Luz del Sur</option>
        <option>Enel</option>
        <option>Hidrandina</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Calcular predicción
      </button>
    </form>
  );
};

export default PredictionForm;
