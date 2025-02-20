import { JSX } from 'react';

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Privaatsuspoliitika</h1>
        <div className="prose prose-orange max-w-none">
          <h2 className="text-2xl font-bold mb-6">Eksootikareisid OÜ PRIVAATSUSPOLIITIKA</h2>

          <p className="mb-8">
            Soovides pakkuda klientidele parimaid teenuseid, peame töötlema isikuandmeid.
            Klientide isikuandmete terviklikkuse ja kaitse tagamine on meile oluline.
            Soovime teavitada, milliseid isikuandmeid ja milleks me kogume ning millised on
            isiku valikud seoses isikuandmete töötlemisega.
          </p>

          <h3 className="text-xl font-bold mb-4">I EESMÄRK</h3>
          <div className="pl-6 mb-8 space-y-4">
            <p>1.1 Privaatsuspoliitika määrab kindlaks põhimõtted, kuidas isikuandmete töötleja Eksootikareisid OÜ seoses reisi- ja muude teenuste osutamisega isikuandmeid kaitseb ning millistel eesmärkidel neid töötleb.</p>
            <p>1.2 Privaatsuspoliitika kehtib kõigi isikute suhtes, kes kasutavad Eksootikareisid OÜ reisi- ja muid teenuseid, veebilehte ning esitavad päringuid Eksootikareisid OÜ teenuste kohta.</p>
            <p>1.3 Privaatsuspoliitika lähtub Euroopa Liidu isikuandmete kaitse üldmäärusest (GDPR) ja muudest isikuandmete kaitse õigusaktidest.</p>
            <p>1.4 Privaatsuspoliitika on Eksootikareisid OÜ teenuste lepingu osa. Külastades veebilehte, tellides uudiskirja, esitades päringuid teenuste kohta ja kasutades Eksootikareisid OÜ teenuseid, nõustute privaatsuspoliitikas kirjeldatud andmetöötluse põhimõtetega.</p>
          </div>

          <h3 className="text-xl font-bold mb-4">II MÕISTED</h3>
          <div className="pl-6 mb-8 space-y-4">
            <div>
              <p className="font-semibold">Isik</p>
              <p className="pl-4">tähendab klienti, uudiskirja tellijat ja veebilehe külastajat.</p>
            </div>
            <div>
              <p className="font-semibold">Klient</p>
              <p className="pl-4">tähendab isikut või tema esindajat, kes kasutab Eksootikareisid OÜ teenuseid ning isikut, kes tunneb huvi Eksootikareisid OÜ teenuste vastu. Kliendina käsitletakse ka kliendiga seotud isikut.</p>
            </div>
            <div>
              <p className="font-semibold">Kliendiga seotud isik</p>
              <p className="pl-4">tähendab isikut, kelle andmeid Eksootikareisid OÜ seoses reisiteenuse lepingu ja Eksootikareisid OÜ poolt vahendatavate koostööpartnerite teenustega (nt kindlustuslepingute vahendus) töötleb (nt kliendiga koos reisivad ja kindlustatud isikud).</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4">III MILLISEL EESMÄRGIL ME ISIKUANDMEID TÖÖTLEME</h3>
          <div className="pl-6 mb-8 space-y-4">
            <p>3.1 Eksootikareisid OÜ töötleb isikuandmeid selleks, et pakkuda parimaid teenuseid, täita lepingut ning vastata Eksootikareisid OÜ teenuste kohta esitatud päringutele. Kliendiandmete kogumisel piirdume vaid teenuste osutamiseks vajalike andmetega.</p>
            
            <div>
              <p>3.2 Eksootikareisid OÜ kogub isikuandmeid järgmistel juhtudel:</p>
              <ul className="list-disc pl-8 mt-2">
                <li>3.2.1 Reisiteenuste, hotellide ja lennupiletite tellimisel ja kasutamisel;</li>
                <li>3.2.2 Kindlustusteenuste vahendamisel;</li>
                <li>3.2.3 Eksootikareisid OÜ koostööpartneritele teenuste vahendamisel.</li>
              </ul>
            </div>
            
            <p>3.3 Andmete töötlemine on vajalik, et Eksootikareisid OÜ saaks osutada klientidele teenuseid.</p>
            <p>3.4 Andmete töötlemise aluseks on isiku nõusolek, leping või seadus. Seoses kindlustusvahendusega töötleb Eksootikareisid OÜ kliendi andmeid ilma nõusolekuta seaduse alusel.</p>
          </div>

          {/* ... ülejäänud sektsioonid samas stiilis ... */}

          <h3 className="text-xl font-bold mb-4">XI MUUDATUSED PRIVAATSUSPOLIITIKAS</h3>
          <div className="pl-6">
            <p>11.1 Eksootikareisid OÜ jätab endale õiguse muuta privaatsuspoliitikat ning teavitab muudatustest veebilehe kaudu vähemalt 30 päeva ette.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
