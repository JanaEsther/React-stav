import { useCasVSekundach } from './hodiny';

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

/* padStart(targetLength.padString)

*/ 

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();
  const hours = String(Math.floor(casVSekundach / 3600)).padStart(2, '0')
  const minutes = String(Math.floor((casVSekundach % 3600)/60)).padStart(2, '0')
  const seconds = String(Math.floor(casVSekundach %60)).padStart(2, '0')

  return (
    <>
      Čas právě teď:{' '}
      <b>{`${hours}:${minutes}:${seconds}`}</b>
    </>
  );
};
