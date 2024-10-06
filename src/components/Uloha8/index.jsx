import { useState } from 'react';

/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

export const Uloha8 = () => {
  const [pocasi1, setPocasi1] = useState('možná');
  const [pocasi2, setPocasi2] = useState('možná');

  const handleClick1 = () => {
    setPocasi1((pocasi1) => {
      if (pocasi1 === 'možná') return 'ano';
      if (pocasi1 === 'ano') return 'ne';
      return 'možná';
    });
  };

  const handleClick2 = () => {
    setPocasi2((pocasi2) => {
      if (pocasi2 === 'možná') return 'ano';
      if (pocasi2 === 'ano') return 'ne';
      return 'možná';
    });
  };

  return (
    <>
      <h3>Prší v Praze: {pocasi1}</h3>
      <button onClick={handleClick1}>Změnit</button>
      <h3>Prší v Brně:{pocasi2}</h3>
      <button onClick={handleClick2}>Změnit</button>
    </>
  );
};
