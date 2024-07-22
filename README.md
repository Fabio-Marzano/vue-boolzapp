PROBLEMA 
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo

SOLUZIONE 
1- Ciclo l'array. 
2- Creo una lista di utenti con i loro rispettivi contatti.
3 - Genero una funzione che mi permette di selezionare il contatto cliccato.
4- Genero una funzione che mi permette di inserire il messaggio che mi crea la risposta.
5- Pusho il messaggio tramite la funzione filtered.
6- Attivo la funzione che mi permette di impostare l'index del messaggio.
7- Creo la funzione che mi consente di rimuovere il messaggio. 
8- Creo una funzione che mi permette di eliminare definitivamente il messaggio.
9- Attivo la funzione che mi permette di filtrare i miei contatti. 
10- Creo funzione che mi consente di inviare nuovi messaggi dopo un secondo dall'evento click. 