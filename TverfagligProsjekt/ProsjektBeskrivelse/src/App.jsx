import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Tverfaglig prosjekt</h1>
      <h2>Innledning</h2>
      <p>
        Vi har fått i oppgave å sette opp et OS på en ny PC. Vi skal også
        dokumentere prosessen gjennom en nettside og et word dokument.
      </p>
      <h2>Planlegging</h2>
      <p>Navnestandar: 2ITA_17</p>
      <p>IP plan: 192.168.1.81</p>
      <p>Partisjonering: </p>
      <h2>Dokumentasjon</h2>
      <p>
        Jeg tror ikke at pc-en min har en Windows siden når den starter så
        begynner den å lage høye bipe lyder og ber meg gå inn i boot menyen.
        Etter en stund med å søke rundt og se hva andre gjorde så fikk jeg en
        flashdrive med windows av Tobias. Etter at jeg plugga inn flashdriven så
        måtte jeg bytte boot order sånn at flashdriven var først og så restarta
        pc-en. Da kom jeg in i windows setup så hvor jeg måtte velge språk og
        hvilket land jeg er i. Deretter så valgte jeg instalasjons metode også
        hvordan jeg skulle partisjonere disken. Etter det så begynte
        instalasjonen og når den var ferdig så restartet pc-en og jeg var inne i
        vanlig Windows 10 setup. Her så måtte jeg igjen velge hvor jeg er,
        språk, koble til internett (trengte ikke å gjøre det siden jeg er på
        windows 10) også velge navn og passord på pc-en. Jeg valgte å kalle
        pc-en for 2ITA_17 siden pc-en var markert med 17 og passorde er skole123
        siden det er et lett passord siden dette er bare labb pc-er.
      </p>

      <p></p>
    </>
  );
}

export default App;
