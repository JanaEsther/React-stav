import './style.css';
import { useState } from 'react';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [soucet1, setSoucet1] = useState(0);
  const [soucet2, setSoucet2] = useState(0);

  const handleSoucet1Change = (e) => {
    setSoucet1(Number(e.target.value));
  };
  const handleSoucet2Change = (e) => {
    setSoucet2(Number(e.target.value));
  };

  const sum = soucet1 + soucet2;

  return (
    <div className="bonus4">
      <input type="number" value={soucet1} onChange={handleSoucet1Change} /> +{' '}
      <input type="number" value={soucet2} onChange={handleSoucet2Change} /> ={' '}
      <output>{sum}</output>
    </div>
  );
};
