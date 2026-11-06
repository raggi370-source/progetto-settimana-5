# Bloom — Studio di design

Landing page per Bloom, uno studio creativo che presenta i propri servizi, alcuni progetti e il gruppo di lavoro. Il sito è stato realizzato con HTML, CSS e JavaScript come progetto di esercitazione.

## Contenuto del sito

- **Header e navigazione:** mostra il logo Bloom, i collegamenti alle sezioni Servizi, Lavori, Team e Contatti e il pulsante per attivare il tema scuro.
- **Sezione iniziale:** presenta lo studio con il titolo “Trasformiamo idee in design”, una breve descrizione e il pulsante “Richiedi preventivo”.
- **Popup del preventivo:** si apre dal pulsante e contiene campi per nome, email, servizio richiesto e messaggio. Dopo l’invio mostra una conferma e si chiude dopo alcuni secondi.
- **Galleria dei lavori:** presenta sei riquadri immagine per mostrare esempi di progetti. Il layout può disporre le immagini in una o più colonne in base alla larghezza dello schermo.
- **Sezione servizi:** descrive le attività dello studio: identità visiva, web design e motion graphic.
- **Sezione team:** presenta tre persone, i rispettivi ruoli e una breve descrizione del loro lavoro.
- **Footer:** contiene il logo, una frase sullo studio e le icone di Instagram, LinkedIn e Behance.

## Tecnologie e risorse

- **HTML** per organizzare i contenuti e gli elementi della pagina.
- **CSS** per colori, spaziature, schede, popup, stati al passaggio del mouse e layout responsive.
- **JavaScript** per il cambio del tema, l’apertura e la chiusura del popup e il messaggio di conferma.
- **Font Awesome** per le icone. La libreria viene caricata da una CDN, quindi per visualizzare le icone è necessaria una connessione internet.

## File del progetto

```text
index.html       Struttura e contenuti della pagina
style.css        Stili, colori e layout per le diverse larghezze
script.js        Interazioni del tema e del popup
img/works.png    Immagine di esempio usata nella galleria
```

## Come aprire il progetto

1. Tieni `index.html`, `style.css` e `script.js` nella cartella principale del progetto.
2. Crea una cartella chiamata `img` e inserisci al suo interno `works.png`.
3. Apri la cartella del progetto in Visual Studio Code.
4. Avvia `index.html` nel browser. In alternativa, usa l’estensione Live Server per vedere gli aggiornamenti mentre modifichi i file.

## Personalizzazione

- **Testi e contenuti:** modifica le intestazioni, le descrizioni, i nomi del team e le voci del menu in `index.html`.
- **Immagini:** sostituisci `img/works.png` con i percorsi delle immagini desiderate e aggiorna il testo `alt` per descriverle.
- **Colori e aspetto:** modifica le regole in `style.css`, comprese quelle associate alla classe `dark` per il tema scuro.
- **Adattamento agli schermi:** usa le media query in `style.css` per cambiare disposizione e dimensioni su telefono, tablet e computer. Il layout responsive è ancora in fase di completamento.
- **Interazioni:** modifica `script.js` per cambiare il comportamento del pulsante tema e del popup.

## Stato del lavoro e difficoltà incontrate

Il progetto mi ha aiutato a esercitarmi con la struttura HTML, le classi CSS, le media query e le prime interazioni JavaScript. Ho incontrato diverse difficoltà durante la realizzazione, soprattutto nel disporre gli elementi e nel far funzionare correttamente alcune parti del JavaScript. Con un po’ di aiuto sono riuscito a individuare gli errori e a risolverne diversi da solo.

La versione per telefono è quella su cui ho lavorato maggiormente. Le versioni per tablet e desktop non sono ancora complete e hanno ancora alcune lacune: devo continuare a sistemare larghezze, spaziature e disposizione delle sezioni. Anche il JavaScript è una parte su cui voglio fare ulteriore pratica.

## Limiti attuali

Il modulo del preventivo mostra i campi e il messaggio di conferma nel browser, ma non invia i dati a un indirizzo email e non li salva. Per ricevere davvero le richieste va collegato a un servizio o a un server.
