import { useState } from 'react';

/*
Zadání 1: Převeďte `cislo` na stavovou proměnnou.
Zadání 2: Zařiďte, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku,
  vynulovat nastavovalo na nulu apod.
*/

const Pocitadlo = () => {
  const [cislo, setCislo] = useState(0);

  const decreaseNumber5 = () => {
    setCislo(cislo - 5);
  };

  const decreaseNumber1 = () => {
    setCislo(cislo - 1);
  };

  const vynulovatNumber = () => {
    setCislo(0);
  };

  const increaseNumber1 = () => {
    setCislo(cislo + 1);
  };

  const increaseNumber5 = () => {
    setCislo(cislo + 5);
  };

  return (
    <>
      <h3>Počítadlo: {cislo}</h3>
      <div>
        <button onClick={decreaseNumber5}>-5</button>
        <button onClick={decreaseNumber1}>-1</button>
        <button onClick={vynulovatNumber}>vynulovat</button>
        <button onClick={increaseNumber1}>+1</button>
        <button onClick={increaseNumber5}>+5</button>
      </div>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
    </>
  );
};
