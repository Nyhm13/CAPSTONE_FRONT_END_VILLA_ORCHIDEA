# React + Vite

----------------------------------------------README CAPSTONE------------------------------------------------------

🌺 Villa Orchidea — Piscina e Prenotazioni
Benvenuto nel progetto Villa Orchidea!
Questa è un'applicazione full-stack che permette agli utenti di registrarsi, prenotare postazioni in piscina e gestire le proprie prenotazioni.
L'admin può gestire tutte le prenotazioni e monitorare la disponibilità.

📂 Struttura del progetto
✅ Backend: Spring Boot + Java + JPA + JWT per autenticazione link per il back-end lo trovate qui ----> https://github.com/Nyhm13/VillaOrchidea
✅ Frontend: React + Bootstrap

🚀 Prerequisiti
Backend:
Java 17+
Maven

Database: PostgreSQL configurato

Frontend:
Node.js 18+
npm

---

⚙️ 1. Come avviare il Backend
Clona la repository del backend: -----> https://github.com/Nyhm13/VillaOrchidea

Configura le variabili:

Modifica application.properties:
spring.datasource.url=jdbc:postgresql://localhost:5432/villaorchidea
spring.datasource.username=TUO_USER_DB
spring.datasource.password=TUO_PASSWORD_DB

Assicurati di creare anche un file env.properties per usufruire del invio delle email alla creazione user,prenotazione,modifica e delete delle prenotazioni

Verifica:

Vai su http://localhost:8080

Le API saranno attive.

Puoi testarle con Postman

💻 2. Come avviare il Frontend
Clona la repository del frontend:------> https://github.com/Nyhm13/CAPSTONE_FRONT_END_VILLA_ORCHIDEA

Installa le dipendenze:
npm install

Avvia:
npm start o npm run dev

Apri il browser:
Registra un nuovo account, fai login, prova le prenotazioni.

📌 Funzionalità principali
✅ Utente
1.Registrazione e login
2.Visualizza disponibilità posti per data e fascia oraria
3.Crea e puo avere 1 prenotazione per giorno tranne il lunedi(giorno di chiusura) e solo per i giorni compresi tra il 20 giugno e 15 settembre, modifica, cancella prenotazioni
4.Aggiorna profilo utente

✅ Admin
1.Vede tutte le prenotazioni per data selezionata
2.Controlla la disponibilità per giorno/fascia
3.Cancella o modifica qualsiasi prenotazione
4.Esporta o stampa lista

🔒 Autenticazione
Le rotte protette richiedono token JWT.

📌 Suggerimenti
✅ In produzione configura CORS e variabili .env in modo sicuro.
