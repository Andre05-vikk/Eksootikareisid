# Eksootikareisid

Eksootikareisid on moodne reisibüroo veebileht, mis pakub eksklusiivseid reisipakette eksootilistesse sihtkohtadesse. Rakendus on ehitatud kasutades Next.js raamistikku ja pakub mitmekeelset kasutajaliidest.

## Rakenduse käivitamine

### Nõuded
- Node.js (v18 või uuem)
- MariaDB (v10.5 või uuem)
- npm v9+

### Paigaldamine



2. Installi sõltuvused:
```bash
npm install
```

3. Seadista andmebaas:
```bash
mysql -u root -p < src/db/migrations/01_create_users_table.sql
```

4. Kopeeri keskkonnamuutujate fail ja seadista see:
```bash
cp .env.example .env.local
```

5. Käivita arenduskeskkond:
```bash
npm run dev
```

Rakendus on nüüd kättesaadav aadressil `http://localhost:3000`

## Dokumentatsioon

Täpsem tehniline dokumentatsioon ja arendusinfo on saadaval [PROJECT_GUIDE.md](PROJECT_GUIDE.md) failis.
