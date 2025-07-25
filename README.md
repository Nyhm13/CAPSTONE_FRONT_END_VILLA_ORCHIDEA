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
In env.properties crea postgresql.password=LA TUA PASSWORD DB
gmail.password= LA TUA PASSWORD DI GMAIL PER AUTOMATIZZARE LE EMAIL
gmail.from= IL TUO INDIRIZZO EMAIL




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
1.Registrazione e login, Blocca la registrazione qual'ora esisti gia nel db un username o email inseriti , blocca la registrazione qual'ora il cliente non inserisce un numero di telefono valido e che non inizi con un prefisso tipo +39 
2.Visualizza disponibilità posti per data e fascia oraria
3.Crea e puo avere 1 prenotazione per giorno tranne il lunedi e solo per i giorni compresi tra il 20 giugno e 15 settembre (periodo stagione in cui la piscina e  aperta), modifica, cancella prenotazioni
4.Aggiorna profilo utente
5. L`utente riceve un email alla registrazione, alla creazione/modifica/cancellazione di una prenotazione con tutte le informazioni utili riguardo le varie operazioni di registrazione, creazione,modifica e cancellazione

✅ Admin
1.Vede tutte le prenotazioni per data selezionata
2.Controlla la disponibilità per giorno/fascia
3.Cancella o modifica qualsiasi prenotazione
4.Esporta o stampa lista

🔒 Autenticazione
Le rotte protette richiedono token JWT.

📌 Suggerimenti
✅ In produzione configura CORS e variabili .env in modo sicuro.

### Homepage
![HomePagePiscina](https://github.com/user-attachments/assets/c5a86f7a-a2c5-4f07-aa9d-327dcabda31f)
### Homepage mid section
![HomePagePiscinaMidSection]( https://github.com/user-attachments/assets/d188ff04-a441-4d62-b354-5f913ce59461)
### Homepage post log in che sblocca il tasto prenota la tua postazione 
<img width="1920" height="1040" alt="HomePagePiscina Dopo Login" src="https://github.com/user-attachments/assets/db59fd30-e8ba-476f-9b8b-ee645df4dc57" />
### Modale Login in 
<img width="1920" height="1040" alt="Modale Registrazione Utente" src="https://github.com/user-attachments/assets/9df5adae-0208-464d-a159-7bf3ce7b2eb1" />
### Modale Crea Prenotazione 
<img width="1920" height="1040" alt="Modale Prenotazione" src="https://github.com/user-attachments/assets/9fcba3dc-b1af-4d0f-a4f7-955ce7dfeb00" />
### Area Riservata Con le prenotazioni per chi e loggato 

<img width="1920" height="1040" alt="Area Riservata Utente" src="https://github.com/user-attachments/assets/49db23e1-fe74-4814-bfc3-13b002d76122" />
### Modale modifica prenotazione

<img width="1920" height="1040" alt="Modale Modifica Prenotazione" src="https://github.com/user-attachments/assets/d7bde1b8-19bc-4cde-80a8-ba49086bdd43" />

### Modale modifica dati user per user 
<img width="1920" height="1040" alt="Modale Modifica Dati User" src="https://github.com/user-attachments/assets/8cf6a381-3d87-4f31-bd0b-9e9307a0d6de" />
### Area Riservata ad admin dove filtra per data le prenotazioni 
<img width="1920" height="1040" alt="Area Riservata Admin" src="https://github.com/user-attachments/assets/aac0f169-55d4-4837-9e57-0ea59bd87ef0" />



