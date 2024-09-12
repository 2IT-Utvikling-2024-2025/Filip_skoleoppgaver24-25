export default function Dokumentasjon() {
  return (
    <>
      <p>
        PC-en jeg valgte viste seg å ikke ha noe OS på seg fra før av, derfor
        trengte jeg ikke å avinstalere noe fra pc-en og gikk rett til
        instalasjonen av windows på pc-en. Etter litt undersøkelse og søking på
        nettet, fikk jeg en flashdrive med Windows-installasjonsfiler fra
        Tobias. For å starte installasjonen, plugget jeg inn flashdriven og
        måtte deretter endre boot-rekkefølgen i BIOS, slik at USB-en ble satt
        som første oppstartsenhet. Etter å ha lagret endringene og startet PC-en
        på nytt, kom jeg inn i Windows-oppsettet.
      </p>
      <p>
        I Windows-oppsettet ble jeg bedt om å velge språk og region, deretter
        valgte jeg installasjonsmetode og hvordan jeg ønsket å partisjonere
        harddisken. Installasjonen startet etter disse valgene, og etter en
        stund var den fullført. PC-en restartet automatisk, og jeg ble møtt av
        det vanlige Windows 10-oppsettet. Her måtte jeg igjen velge språk og
        region, men jeg hoppet over kobling til internett, siden det ikke var
        nødvendig for denne versjonen av Windows. Jeg opprettet deretter en
        brukerkonto og satte PC-navnet til "2ITA_17", siden PC-en var merket med
        dette nummeret og pc-en. Passordet ble satt til "skole123", et enkelt og
        standar passord fra det vi har blitt lært.
      </p>
      Etter at Windows-oppsettet var ferdig, koblet vi PC-ene sammen ved hjelp
      av en nettverkskabel til en switch. For at PC-ene skulle kunne kommunisere
      med hverandre, måtte vi endre innstillingene i brannmuren på begge
      maskinene, slik at de kunne tillate ping gjennom kommandolinjen. Dette ble
      testet ved å bruke `ping`-kommandoen i Command Prompt. Dette er nettsiden
      vi brukte for å fikse firewall instillingene:
      <a href="https://manage.accuwebhosting.com/knowledgebase/2609/How-to-Allow-Pingor-ICMP-Echo-Request-in-Windows-Firewall.html">
        Lenke til firewall instrukser
      </a>
      <p>
        Jeg installerte FileZilla Client på én PC og FileZilla Server på den
        andre, dette gjorde vi gjennom å installere instalasjons filene på en
        flashdrive og overførte dem til labb pc-ene. Vi støtte på noen
        utfordringer underveis, blant annet det at vi skrev feil IP-adresse og
        vanskeligheter med å sette opp brukere på FTP-serveren. Etter å ha fått
        hjelp fra Andreas, klarte vi å konfigurere en bruker med riktig tilgang
        på FileZilla Server, og vi sørget for at den korrekte IP-adressen ble
        brukt i klienten. Til slutt fikk vi filoverføringen til å fungere uten
        problemer, og PC-ene kunne kommunisere og overføre filer som planlagt.
        Alle utfordringer ble løst, og systemet fungerer nå som det skal.
      </p>
    </>
  );
}
