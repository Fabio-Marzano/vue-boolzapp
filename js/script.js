//AVVIO CICLO DELL'ARRAY//
var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './image/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './image/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './image/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './image/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './image/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './image/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './image/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './image/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            ,
            currentContact: 0,  //CONTATTO//
            currentMessage: null,   //MESSAGGIO//
            messageText: "",    //MESSAGGIO VUOTO//
            search: "",     //RICERCA CONTATTI VUOTA//
        },
        methods: {
            // FUNZIONE PER ATTIVARE IL CONTATTO CLICCATO//
            setIndexContact: function (position) {
                this.currentContact = position;
                return this.currentContact;
            },
            // GENERO FUNZIONE PER INSERIRE IL NUOVO MESSAGGIO CHE MI CREA LA RISPOSTA//
            newMessage: function (contact) {
                let newSentMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.messageText,
                    status: 'sent'
                };
                //PUSHO IL MESSAGGIO TRAMITE LA FUNZIONE FILTERED//
                this.filteredContacts[contact].messages.push(newSentMessage);

                this.messageText = "";
                //CREO FUNZIONE CHE MI CONSENTE DI RICEVERE IL MESSAGGIO DI RISPOSTA//
                setTimeout(
                    () => {
                        let newReceivedMessage = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            message: "Ok",
                            status: 'received'
                        };

                        this.filteredContacts[contact].messages.push(newReceivedMessage);

                    }, 1000
                );
            },
            // ATTIVO LA FUNZIONE PER IMPOSTARE L'INDEX DEL MESSAGGIO//
            setIndexMessage: function (position) {
                this.currentMessage = position;
                return this.currentMessage;
            },
            // ATTIVO FUNZIONE PER RIMUOVERE IL MESSAGGIO//
            removeIndexMessage: function () {
                this.currentMessage = null;
                return this.currentMessage;
            },
            // FUNZIONE PER ELIMINARE DEFINITIVAMENTE IL MESSAGGIO//
            deleteMessage: function (position, messagePosition) {
                this.filteredContacts[position].messages.splice(messagePosition, 1);
            },
        },
        // GENERO LA FUNZIONE PER FILTRARE I MIEI CONTATTI//
        computed: {
            filteredContacts() {
                return this.contacts.filter(
                    element => {
                        return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
                    }
                );
            }
        }
    }
)    