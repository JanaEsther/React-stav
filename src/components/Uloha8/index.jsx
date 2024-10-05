import { useState } from 'react';

/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

export const Uloha8 = () => {
  const [pocasi, setPocasi] = useState('možná');

  const handleClick = () => {
    setPocasi((pocasi) => {
      if (pocasi === 'možná') return 'ano';
      if (pocasi === 'ano') return 'ne';
      return 'možná';
    });
  };
  return (
    <>
      <h3>Prší v Brně: {pocasi}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
