# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [ ] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [ ] Kodkvaliterskraven är ifyllda
    - [ ] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

Alla instruktioner om hur man ska använda sig av min modul finns i README.md. Där finns det en installationsguide, alla metoder och en beskrivning av hur de fungerar, det finns listor på argument som vissa metoder stödjer samt kodexempel på hur man skulle kunna använda sig av metoderna. Jag har även kommenterat samtliga metoder genom JSDoc kommentarer vilket underlättar då förklaring av metoderna finns direkt tillgängliga.
​
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

createPrompt(message, functionality, color) - Denna metoden skriver ut ett meddelande och om det har valts en färg så gör metoden om meddelandet till denna färgen. Metoden fortsätter sedan med att begära ett input från användaren och därefter hanteras input med den funktion man skickat med som argument. Funktionen som skickas med som argument kan använda sig av en egen parameter som då är användarens input och man kan därmed hantera input i funktionen man skickar med.

setMainMenu() - Sätter ett objekt av meny val i en privat variabel.

assignMainMenuFunctionality() - Sätter ett objekt av funktionalitet som ska motsvara de meny val som finns.

start() - Denna metod "startar" modulen på det sätt att kör huvudmenyn vilket gör så att resten av funktionaliteten har möjlighet att köras. Den kollar om det finns en bestämd meny och skapar isåfall den sedan kollar den om det ska finnas möjlighet att stänga av applikationen och lägger till det därefter hanterar den input med hjälp av handleMenuInput metoden.

createForm(questions) - Denna metoden skapar ett formulär som kan bestå av vanliga frågor eller frågor med flervalssvar. Den tar in questions som argument vilket består av en array av strings (vanliga frågor) men även objekt som innehåller en string och alternativ för svar. Metoden loopar igenom questions och kollar om det är ett objekt eller string och kan därmed bestämma om den ska hanteras som flerval eller vanlig. Vid objekt tar den ut frågan och sedan svarsalternativen och visar dem på korrekt sätt, den kollar sedan efter input och matchar input med värdet av svarsalternativet genom en annan funktion. Den tar sedan svaret och sätter i ett objekt, på vanliga frågor så tas det skrivna objekten och sätts i samma objekt. Detta returneras sedan. Metoden är också asynkron då jag använder mig av ett promise vid input för att kunna vänta på varje input när det är flera efter varandra.

setColor(section, color) - Metoden tar in en sektion (menu, exit, form etc) och en färg, metoden kollar sedan vilken färg som valts och sätter denna färgen i motsvarande sektion. Själva färgen sätts inte här utan endast en privat variabel vilket gör att man kan kolla om/vilken färg en sektion ska ha innan man skriver ut sagd sektion.

handleMenuInput(menuFunctionalityObject, userInput) - Argumenten består av ett objekt med numrerade funktioner och användarens input i form av nummer som motsvarar en av dessa funktioner. Metoden plockar ut den funktionen som användaren valt genom att använda siffran som skrivits in (som motsvarar index i funktion objektet). Den kollar sedan om det finns en tilldelad funktion till detta index och isåfall körs funktionen. 

createSubMenu(view, functionality) - Fungerar likt huvudmenyn men tar istället in både vy och funktionalitet samt att det hanteras annorlunda då det här finns stöd för att gå tillbaks till huvudmenyn. Den loopar igenom vyn och skriver ut menyvalen, kollar om det ska finnas ett "tillbaka till huvudmenyn" alternativ, ber om input och skickar sedan vidare input och funktionaliteten till handleMenuInput.
​
## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.
​
### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?
​
| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
|  Skapa prompt med meddelande, färg och användning av svar.         |  1. ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue') 2. Kör npm start i terminalen. 3. Skriv in namnet Karl 4. Klicka enter.         | Frågan "What is your name?" ska visas, användaren ska kunna skiva in sitt namn, efter inskrivet namn ska "Welcome, Karl" i blå färg visas.       |         |
|           |           |        |         |
|           |           |        |         |
|           |           |        |         |
|           |           |        |         |
|           |           |        |         |

​
​
## Kodkvalitetskrav
​
**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.
​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| createForm                     |                                              |
| setMainMenu                     |                                              |
| addExitOption                     |                                              |
| assignMainMenuFunctionality                     |                                              |
| start                     |                                              |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| createForm(questions)                     |                                              |
| setColor(section, color)                    |                                              |
| handleMenuInput(menuFunctionalityObject, userInput)                     |                                              |
| promptUserWaitForInput()                     |                                              |
| createSubMenu(view, functionality)                     |                                              |
​
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 

pick one word per concept, skulle använda set för alla t.ex, just nu set, add, assign för ungefär samma sak.