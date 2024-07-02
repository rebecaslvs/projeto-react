// src/IMCForm.jsx

import React, { useState } from 'react';

const IMCForm = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);

  const handleCalcularIMC = () => {
    const alturaMetros = altura / 100;
    const calculoImc = peso / (alturaMetros * alturaMetros);
    setImc(calculoImc.toFixed(2));
  };

  const classificarIMC = () => {
    if (imc === null) {
      return '';
    } else if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 24.9) {
      return 'Peso normal';
    } else if (imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc < 34.9) {
      return 'Obesidade grau I';
    } else if (imc < 39.9) {
      return 'Obesidade grau II';
    } else {
      return 'Obesidade grau III';
    }
  };

  return (
    <div className="IMCForm">
      <h2>Calculadora de IMC</h2>
      <div className="form">
        <label>Altura (cm):</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <label>Peso (kg):</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button onClick={handleCalcularIMC}>Calcular</button>
      </div>
      {imc !== null && (
        <div className="resultado">
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificarIMC()}</p>
        </div>
      )}
    </div>
  );
};

export default IMCForm;
