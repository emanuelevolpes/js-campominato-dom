<!--CONSEGNA
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.-->

1. utilizzo una funzione che generi 16 numeri casuali con un range pari a quello della difficoltà selezionata e che non si ripetano:
    - all'interno della funzione ho bisogno di un array vuoto con un ciclo al suo interno che si incrementi fino al valore del range di mio interesse e che pushi il valore dell'indice nell'array;
    - utilizzo un secondo array vuoto per inserire i numeri casuali che dovrò generare sempre con un ciclo for con valore massimo dell'output che voglio ottenere (16 numeri) e la funzione Math.random al suo interno;

2. clicco su una cella e aggiungo il suo valore all'interno di un array, verifico se il valore in questione sia presente all'interno dell'array dei numeri generati: se è presente coloro la cella di rosso e termino il gioco facendo apparire un messaggio sullo schermo, altrimenti coloro la cella di blu e proseguo ripetendo il procedimento;

3. se il valore dell'array delle celle cliccate che non sono bombe è uguale al valore del range della difficoltà selezionata meno il numero delle bombe presenti allora ho elezionato tutte le celle senza bomba eho vinto la partita;

4. quando termina la partita, sia in caso di vittoria che di sconfitta, faccio comparire un messaggio con il punteggio raggiunto.