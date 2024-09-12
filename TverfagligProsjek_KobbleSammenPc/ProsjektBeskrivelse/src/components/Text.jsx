import './css/Text.css';
import Dokumentasjon from './Dokumentasjon';

export default function Text() {
  return (
    <>
      <div className="main">
        <h2>Oppgave</h2>
        <div className="oppgave">
          <p>
            Vi har fått i oppgave å sette opp et OS på en ny PC. PC-ene skal
            også kunne komunisere med værandre via å pinge og kunne overføre
            filer med en FTP klient og server Vi skal også dokumentere prosessen
            gjennom en nettside og et word dokument.
          </p>
        </div>
        {/* intro slutt */}
        <h2>Planlegging</h2>
        <div className="planning">
          <p>Navnestandar: 2ITA_17 (2ITA_NummerPåPC)</p>
          <p>IP plan: 192.168.1.81</p>
          <p>Partisjonering: </p>
        </div>{' '}
        {/* plan slutt */}
        <h2>Dokumentasjon</h2>
        <div className="dokumentasjon">
          <p>
            <Dokumentasjon />
          </p>
        </div>{' '}
        {/* doc slutt */}
        <h2>Refleksjon</h2>
        <div className="refleksjon">
          <h4>Hva jeg har lært</h4>
          <p>
            Jeg har lært hvordan det å laste ned windows på en fresh pc Jeg har
            lært hvordan tillate pc-er på samme nettverk å pinge værandre ved å
            enable noe på firewallen. Jeg har lært hvordan overføre filer med en
            FTP på pc-er som er på samme nettverk og koble en FTP klient til en
            FTP server. For å gjøre dette måtte vi også åpne noen porter på
            firewallen.
          </p>
          <h4>Innsats og Fokus</h4>
          <p>
            Jeg mener at jeg har hat gannske god innsats gjennom oppgaven, men
            jeg har ikke alltid hatt riktig fokus. Det har vært ganger hvor jeg
            har endt opp med å bare snakke med venner om ting som ikke er
            rellevant og det har kanskje vært litte granne spilling.{' '}
          </p>
          <h4>Hva ville jeg gjort annerledes</h4>
          <p>
            Hvis jeg skulle gjort denne oppgaven på nytt så hadde jeg planlegga
            mye mer og også søkt opp og prøvd å finne ut av mer selv. Siden jeg
            planlegga veldig lite, jeg viste ingen ting om det å partisjonere
            disken og jeg skjønte ikke hvorfor vi måtte planlegge ip-en vi
            skulle bruke siden vi skulle bare bruke 2 enheter.
          </p>
        </div>
        {/* learned slutt */}
      </div>
      {/* Main slutt */}
    </>
  );
}
