# Mall för inlämning laboration 1, 1dv610
​
## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare
​
## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 
​
Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 
​
## Återanvändning

Alla instruktioner om hur man ska använda sig av min modul finns i README.md. Där finns det en installationsguide, alla metoder och en beskrivning av hur de fungerar, det finns listor på argument som vissa metoder stödjer samt kodexempel på hur man skulle kunna använda sig av metoderna. Jag har även kommenterat samtliga metoder genom JSDoc kommentarer vilket underlättar då förklaring av metoderna finns direkt tillgängliga.
​
## Beskrivning av min kod

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

Jag har testat min kod genom manuell testning. Testat all kod och sett så att den tänkta funktionaliteten finns där. Nedan finns testfallen och input i form av teststeg samt output som beskriver det som ska visas. Jag har gått igenom alla dessa och sett att det fungerar. 
​
### Testfall
​
| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
| **TC1** Skapa prompt med meddelande, färg och användning av svar.         |  1. ```ui.createPrompt('What is your name?', (user) => console.log('Welcome, ' + user + '\n'), 'blue')```</br> 2. Kör npm start i terminalen.</br>  3. Skriv in namnet Karl </br> 4. Klicka enter.         | Frågan "What is your name?" ska visas, användaren ska kunna skiva in sitt namn, efter inskrivet namn ska "Welcome, Karl" i blå färg visas.       |    PASS     |
| **TC2**  Lägga till exit alternativ        |    1. Lägg till ```ui.addExitOption()``` och ```ui.start()``` efter i koden. </br> 2. Kör npm start i terminalen </br> 3. Skriv Q och klicka enter     |    Längst ned i huvudmenyn ska det finnas "To exit the program enter Q" och när q har skrivits in ska programmet avslutas.   |    PASS     |
|  **TC3** Skapa huvudmeny vy         |   1. Lägg till ```ui.setMainMenu({1: 'Add', 2: 'Subtract', 3: 'Divide', 4: 'Multiply'})``` och ```ui.start()``` i koden. </br> 2. Kör npm start i terminalen.       |  Menyn ska visas och ska bestå av 1. Add, 2. Subtract, 3. Divide och 4. Multiply.      |    PASS     |
| **TC3.1** Skapa huvudmeny utan ```ui.start()```   |1. TC3 </br> 2. Ta bort ```ui.start()``` </br> 3. Kör npm start  | Menyn ska inte visas.   |    PASS     |
|  **TC4** Lägg till funktionalitet i menyn         |  1. TC3 </br> 2. Lägg till koden ```assignMainMenuFunctionality({1: () => console.log('addFunction')})``` före ``` ui.start() ``` </br> 3. Kör npm start i terminalen. </br> 4. Skriv "1" och klicka enter.       |   Meddelandet "addFunction" ska visas    |   PASS      |
|  **TC5**   Skapa en sub meny    |  1. TC4</br> 2. Skapa ```const view = {1. 'Say hello', 2. 'Say goodbye'}``` samt ```const functionality = {1. () => console.log('Hello'), 2. () => console.log('Goodbye)}``` </br> 3. Sätt in objekten i ```createSubMenu(view, functionality)``` och lägg funktionen i (nummer 1) huvudmenyns funktionalitet. (TC4) </br> 4. Kör npm start i terminalen.</br> 5. Skriv nummer 1 och tryck enter </br> 6. Tryck i nummer 1 i submenyn     |   Efter huvudmenyn ska en submeny visas</br> ```1. Say hello```</br> ```2. Say goodbye```</br> När 1 trycks in ska meddelandet ```Hello```visas i terminalen.    |   PASS      |
|  **TC6** Alternativ för att komma tillbaks till huvudmenyn ska finnas        |  1. TC4, TC5  </br> 2. Lägg dit ``` addReturnToMenuOption() ```innan ```ui.start()``` </br> 3. Kör npm start i terminalen </br> 4. Navigera till submenyn. </br> 5. Klicka på enter     |    Meddelandet ```To return to the main menu press enter.```ska visas längst ner i terminalen och om man klickar på enter ska man tas tillbaks till huvudmenyn    |    PASS     |
|  **TC7**  Skapa ett formulär   | 1. Skapa en array ```const questions = ['Vad heter du?', {'Var bor du?': ['Sverige', 'Danmark']}]``` </br> 2. Sätt in arrayen i ```ui.createForm(questions)```</br> 3. Kör npm start i terminalen </br> 4. Svara på formuläret | Frågan ```Vad heter du?``` ska visas med möjligheten till att svara, därefter ska ```Var bor du?``` visas följt av ett flervals alternativ.   |    PASS     |
|  **TC7.1**  Visa informationen i formuläret   | 1. TC7 </br> 2. Skriv ```console.log(await questions)```createForm. </br> 3. Kör npm start </br> 4. Fyll i formuläret | Informationen som skrivits in ska visas i terminalen.   |    PASS     |
| **TC8** Sätta färg på menyn   | 1. TC3 </br> 2. Skriv dit ```setColor('menu', 'blue')```</br> 3. Kör npm start |  Menyn ska vara blå.  |    PASS     |
| **TC8.1** Sätta färg på exit texten   | 1. TC3 </br> 2. Skriv dit ```setColor('exit', 'red')```</br> 3. Kör npm start |  Exit meddelandet ska vara rött.  |    PASS     |
| **TC8.2** Sätta färg på ```returnToMenu``` texten   | 1. TC5 </br> 2. Skriv dit ```setColor('returnToMenu', 'blue')```</br> 3. Kör npm start </br> 4. Navigera till submenyn  |  Meddelandet ```To return to the main menu press enter```ska vara blått.  |    PASS     |
| **TC8.3** Sätta färg på menyn   | 1. TC7 </br> 2. Skriv dit ```setColor('form', 'green')```</br> 3. Kör npm start |  Frågorna i formuläret ska vara gröna  |    PASS     |


## Kodkvalitetskrav

​
### Namngivning
​
| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **createForm**  - Metodnamn på metod som skapar ett formulär                   |  **Method Names** </br> Använder sig av verbet "create"                                             |
| **setMainMenu** - metodnamn på metod som sätter en huvudmeny                    |      **Solution Domain Names** </br> Använder "set" som är vanligt inom utveckling och visar därför på vad den faktiskt gör, den sätter informationen men visar ingenting direkt.  </br> **Method Names** </br> Set bör användas vid mutators samt följas av vad det faktiskt är som sätts vilket jag gör med detta namnet.                                      |
| **addExitOption**  - metodnamn på metod som lägger till ett "exit" alternativ                   |   **Method Names** </br> Borde vara setExitOption istället då det är en mutator. </br> **Pick one word per concept** </br>Borde namngivit denna till setExitOption då det är en mutator och om jag skulle följt dessa på samtliga mutators hade denna regeln följts.                                          |
| **assignMainMenuFunctionality(functionality)** - Metodnamn på metod som sätter huvudmenyns funktionalitet                     |  **Use Intention-Revealing Names** </br> Detta namnet visar på att menyn behöver funktionalitet, att den ger denna funktionalitet till huvudmenyn och att den gör detta genom att skicka med en parameter.  **Don't be cute** </br> Följer denna genom att med namnet visa exakt vad som händer. </br> **Method Names** </br> Borde varit set även här då det är en mutator. </br>                                          |
| **start** - metodnamn på metod som sätter igång huvudmenyn.                    |   **Don't be cute** </br> Borde vara tydligare och visa vad den faktiskt gör, svårt att förstå vad den faktiskt startar.                                         |
| **arrayOfAlternatives** - Variabel som förvarar flervalssvar i formuläret                   |   **Avoid disinformation** </br> Här är jag tydlig med att inte använda exempelvis "listOfAlternatives" utan väljer istället "array" för att faktiskt visa vad är för någonting. Då en array är någonting andra utvecklare är vana vid så förstår dem direkt hur de ska hantera denna variabel.                                        |
​
### Funktioner
​
| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
| **createForm(questions)** - Metod som skapar ett formulär med angivna frågor och eventuellt svarsalternativ.                   |  **Small!** </br> Borde brutit ut denna funktionen i mindre delar och på så sätt gjort den mer förståelig. </br> **One Level of Abstraction per Function** </br> Väldigt olika abstraktionsnivåer där det används väldigt höga (andra funktioner), medel som ``` const arrayOfAlternatives = Object.values(questions[i])[0] ``` och även väldigt låga där det skrivs ut i terminalen med index, strings med hjälp av en loop etc. </br> **Have no side effects** </br> Denna metoden har en side effect genom att den kör ```this.start()``` för att komma tillbaks till huvudmenyn efter formuläret är ifyllt vilket inte bör vara här och istället hanteras utanför denna funktionen då ingenting i funktionens namn indikerar på att man ska ta sig till huvudmenyn efteråt.</br> **Command Query Seperation** </br> Gör flera saker när den borde göra en. Ändrar i objekt, returnerar information och skriver ut information .                                        |
| **getColorCode(color)**  - Metod som tar in en färg och returnerar motsvarande färgkod.                  |    **Do one thing** </br> Denna funktion gör endast en sak vilket är att omvandla färg till färgkod. </br> **Switch statements** </br> Användningen av switch statement är inte att föredra men förenklade det i situationen, den blir väldigt stor, jag använder bara switch en gång vilket är detta tillfället. Det går att argumentera för att denna faktiskt inte gör endast en sak då den kollar varje färg vilket isåfall motsäger "Do on thing".                                          |
| **handleMenuInput(menuFunctionalityObject, userInput)** - Metod som hanterar input för en meny och kör motsvarande funktionalitet beroende på input                   |   **Extract Try/Catch blocks** </br>  Då try catch inte ser bra ut och inte underlättar läsbarhet kunde jag ha gjort det som skrivits i dessa block till egna funktioner för att underlätta.                                            |
| **promptUserWaitForInput()** - Metod som gör en prompt men använder ett promise som gör att om man kör denna efter varandra körs inte resten förrän input är hanterat.                   |  **Use descriptive names** </br> Använder sig av ett beskrivande namn som är aningen långt men som både visar på funktionalitet och lite om varför denna metod kan vara bra att användas. </br>                                            |
| **createSubMenu(view, functionality)** - Skapar en undermeny och tar in menyalternativ samt funktionerna som ska motsvara alternativen.                    |   **Function Arguments** </br> Trots att det inte är optimalt med två argument (dyadic) så ger det trots det en bra beskrivning på hur funktionen ska fungera samt att det i detta fall är nödvändigt för att enklare dela upp koden. Vi vet att en meny behöver en "view" och någonting som händer när ett alternativ i view väljs (functionality), då detta är en modul menad för andra programmerare underlättar detta och är nödvändigt för att kunna välja utseende och funktionalitet själv. Ett Alternativ/lösning skulle kunna vara att slå ihop dessa två argument.                                     |
​
## Laborationsreflektion

Uppgiften har varit intressant och väldigt lärorik, det har hela tiden funnits ett fokus på att försöka hålla kodkvalitén bra samtidigt som man ska lösa det problem man vill lösa vilket har varit svårt men även lärorikt. Då man inte hade samma kunskap när man började som när man avslutade projektet så är det lite olika nivå på kodkvalitén men att reflektera över hela uppgiften både I efterhand, under tiden och genom den dokumentation som krävdes har gett väldigt mycket insikt och förståelse för ämnet. Jag fokuserade mycket på namngivning till en början och försökte beskriva funktioner, variabler, metoder och liknande tydligt.
</br>  
En regel som jag kunde gjort bättre är “Pick one word per concept” där jag på flera ställen I min kod använder mig av metoder som i princip gör samma sak (mutators) men som jag har varierande namn på, detta skulle helt klart bli tydligare om jag som regeln säger höll mig till ett ord per koncept. Jag hade mycket fokus på att använda mig av verb vid metoder och jag försökte följa “Use intention revealing names” strikt för att verkligen visa vad mina metoder och variabler gör, är och hur dem fungerar. Det som kan sägas om hur jag gjorde detta är att längden på dessa blev väldigt långa I vissa fall vilket enligt boken är bra om det ger en tydlig förklaring men samtidigt är det att föredra kortare namn då det ger en bättre läsbarhet, jag tror jag hanterade detta bra men det finns definitivt förbättringsmöjligheter inom detta område och vissa namn kunde nog kortas ner utan att försämra förståelsen för vad som menas. 
</br>
Där jag mest kan se mina svagheter är funktionerna, jag har flera funktioner med varierande abstraktionsnivå vilket strider mot “One level of abstraction per function”, vilket är någonting som skulle förbättra min kod väldigt mycket om jag inte hade. Jag har funktioner som har en del sidoeffekter samt funktioner som gör flera saker än en vilket kunde lösas genom att dela upp funktionerna bättre och i mindre varianter. Det är att föredra att ha så få argument I funktionerna som möjligt vilket jag tyckte var svårt på grund av att modulen är till för en annan programmerare som ska kunna anpassa metoderna genom dessa argument. Jag tror dock att jag kunde minskat antalet argument genom bättre struktur och möjligtvis sammanslagning av vissa argument. 
</br>
Värt att nämna är också att jag kunde delat upp min kod I flera klasser och på så sätt enklare delat upp ansvaret för vissa funktioner vilket jag även tror hade främjat ännu mer uppdelning av funktionalitet och på så sätt minskat storlek, ansvar på funktionerna. 
