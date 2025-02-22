# Eksootikareisid - Arenduse Juhend

## Üldised Põhimõtted

### 1. Andmete Haldus
- MITTE kasutada hardcoded andmeid
- Kõik andmed peavad tulema data/ kaustast olevatest failidest
- Andmefailid on ajutised ja asendatakse hiljem API-ga
- Igal andmefailil peab olema selge struktuur (interface) ja mock andmed

### 2. Koodi Struktuur
- Komponendid peavad olema modulaarsed ja taaskasutatavad
- Iga suurem funktsionaalsus eraldi kaustas koos oma alamkomponentidega
- Ühtne kirjastiil läbi kogu projekti
- Tüübid ja liidesed eraldi types/ kaustas

### 3. SearchEngine Komponendi Arendus
- Praegu on kaks versiooni:
  1. /components/SearchEngine.tsx (praegu kasutusel)
  2. /components/SearchEngine/components/SearchEngine.old.tsx (uuem versioon)
- Arendame järk-järgult, võttes uuemast versioonist kasulikke osi
- Liigume samm-sammult uue struktuuri poole

### 4. Komponendi Struktuur
- /components/SearchEngine/
  ├── index.tsx (peakomponent)
  ├── components/
  │   ├── DepartureCitySearch/
  │   ├── DestinationSearch/
  │   ├── RegionSearch/
  │   ├── TravelersInput/
  │   ├── HotelSearch/
  │   └── DatePicker/
  ├── hooks/
  ├── types/
  └── utils/

### 5. Stiilid ja UI
- Kasutame TailwindCSS
- Ühtne värvipalett ja stiilid
- Mobiilisõbralik disain
- Sujuvad animatsioonid modaalakendel

### 6. Funktsionaalsus
- Otsing peab töötama loogilises järjekorras:
  1. Lähtekoht → filtreerib sihtkohad
  2. Sihtkoht → filtreerib piirkonnad
  3. Kuupäev → näitab ainult saadaolevaid lende
- Modaalaknad reisijate ja hotellide valimiseks
- Dünaamiline otsing ja filtreerimine

### 7. Andmevoog
- Kasutame praegu järgmisi andmefaile:
  - departureCities.ts
  - hotels.ts
  - mealPlans.ts
  - regions.ts
- Hiljem asendame need API endpointidega

### 8. Keeled ja Tõlked
- Kõik tekstid peavad tulema tõlkefailidest
- Dünaamiline keelte laadimine
- Tõlked hiljem andmebaasist

### 9. Jõudlus
- Lazy loading modaalakendele
- Debounced otsing
- Optimeeritud renderdamine

### 10. Järgmised Sammud
1. Liigutada SearchEngine uude struktuuri
2. Implementeerida TravelersInput modaal
3. Täiendada otsingu loogikat
4. Lisada hotellide ja piirkondade valimine
5. Integreerida kuupäevade valik

### 11. Testimine
- Komponentide unit testid
- Integratsiooni testid
- Kasutajaliidese testid

### 12. Dokumentatsioon
- Kood peab olema hästi dokumenteeritud
- README failis juhised arendajatele
- API dokumentatsioon (kui valmis)
