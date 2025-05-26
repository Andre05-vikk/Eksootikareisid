# Eksootikareisid

## Node.js versiooni nõue ja nvm kasutamine

See projekt vajab Node.js versiooni 20.x (soovitavalt 20.12.2). Kui Sinu masinas on muu versioon, võivad tekkida buildi- või jooksutamise vead.

Kasuta [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), et tagada õige Node.js versioon:

```sh
nvm install       # Paigaldab versiooni .nvmrc faili põhjal
nvm use           # Lülitab õigesse Node.js versiooni
```

Kui nvm puudub, paigalda see esmalt [nvm juhiste](https://github.com/nvm-sh/nvm#installing-and-updating) järgi.

Eksootikareisid on moodne reisibüroo veebileht, mis pakub eksklusiivseid reisipakette eksootilistesse sihtkohtadesse.
Rakendus on ehitatud kasutades Next.js raamistikku ja pakub mitmekeelset kasutajaliidest.

## Rakenduse käivitamine

### Nõuded

- Node.js (v18 või uuem)
- MariaDB (v10.5 või uuem)
- npm v9+

### Paigaldamine

1. Installi sõltuvused:

```bash
npm install
```

2. Seadista andmebaas:

```bash
mysql -u root -p < src/db/migrations/01_create_users_table.sql
```

3. Käivita arenduskeskkond:

```bash
npm run dev
```

Rakendus on nüüd kättesaadav aadressil `http://localhost:3000`

## API dokumentatsioon ja Swagger UI

Kõik projekti API endpointid, nende struktuur ja vigadekäsitlus on dokumenteeritud Swagger UI-s, mis on kättesaadav aadressil [/docs](/docs).

- Swagger UI loeb OpenAPI kirjeldust failist `/swagger.yaml` (see kopeeritakse buildi käigus kaustast `/docs/swagger.yaml` kausta `/public`).
- Kõik muudatused API-s tuleb peegeldada failis `/docs/swagger.yaml`.
- Kui lisad/muudat API endpointi, uuenda alati ka YAML dokumentatsiooni!

## Dokumentatsioon

Täpsem tehniline dokumentatsioon ja arendusinfo on saadaval [PROJECT_GUIDE.md](PROJECT_GUIDE.md) failis.
