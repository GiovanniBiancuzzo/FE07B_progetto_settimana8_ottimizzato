interface Smartphone {
    credito: number;//inserire proprietà interfaccia
    numeroChiamate: number;


    //dichiarare i metodi
    ricarica(unaRicarica: number): void;

    chiamata(minutiDurata: number): void;

    numero404(credito: number): number;

    getNumeroChiamate(): number;

    azzeraChiamate(): void;

}

//prima classe
class User implements Smartphone {
    //modificatori di accesso sulle proprietò, ricdicharare le proprietò dell'interfaccia definendole puyblic
    public credito: number;//inserire proprietà interfaccia
    public numeroChiamate: number;
    //dichiarazioni del costruttore
    constructor(_credito: number, _numeroChiamate: number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }


    //implememntazione metodi dell'interfaccia

    public ricarica(unaRicarica: number): void {//implementazione metodo ricartica
        this.credito += unaRicarica;
    }

    public chiamata(minutiDurata: number): void {//implementazione metodo chiamata
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    }

    public numero404(): number {//implementazione metodo numero404 (return)
        return this.credito;
    }

    public getNumeroChiamate(): number {//implementazione metodo getnumerochiamate (return)
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void { //implementazione metodo azzerachiamate
        this.numeroChiamate = 0;
    }

}

//implementazione della classe

const primo = new User(100, 50);
const secondo = new User(80, 10);
const terzo = new User(30, 0);

let ricaricaCredito = 20;
let minutiChiamata = 50;


$(() => {
    let primoUtente = $('#primoUtente');
    let secondoUtente = $('#secondoUtente');
    let terzoUtente = $('#terzoUtente');
    /*'primo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
    */

    primoUtente.append(`<li>Valore del credito iniziale: ${primo.numero404()} euro</li>`);
    primoUtente.append(`<li>Numero chiamate iniziali: ${primo.getNumeroChiamate()}</li>`);
    primo.ricarica(ricaricaCredito);
    primoUtente.append(`<li>Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${primo.numero404()} euro</li>`);
    primoUtente.append(`<li>Effettuo una chiamata da ${minutiChiamata} minuti</li>`);
    primo.chiamata(minutiChiamata);
    primoUtente.append(`<li>Numero chiamate: ${primo.getNumeroChiamate()}</li>`);
    primoUtente.append(`<li>Valore del credito dopo la chiamata: ${primo.numero404()}</li>`);
    primo.azzeraChiamate();
    primoUtente.append(`<li>Numero chiamate dopo l'azzeramento: ${primo.getNumeroChiamate()}</li>`);
    /*
    'secondo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
    */
    secondoUtente.append(`<li>Valore del credito iniziale: ${secondo.numero404()} euro</li>`);
    secondoUtente.append(`<li>Numero chiamate iniziali: ${secondo.getNumeroChiamate()}</li>`);
    secondo.ricarica(ricaricaCredito);
    secondoUtente.append(`<li>Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${secondo.numero404()} euro</li>`);
    secondoUtente.append(`<li>Effettuo una chiamata da ${minutiChiamata} minuti</li>`);
    secondo.chiamata(minutiChiamata);
    secondoUtente.append(`<li>Numero chiamate: ${secondo.getNumeroChiamate()}</li>`);
    secondoUtente.append(`<li>Valore del credito dopo la chiamata: ${secondo.numero404()}</li>`);
    secondo.azzeraChiamate();
    secondoUtente.append(`<li>Numero chiamate dopo l'azzeramento: ${secondo.getNumeroChiamate()}</li>`);
    /*
    'terzo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
     */
    terzoUtente.append(`<li>Valore del credito iniziale: ${terzo.numero404()} euro</li>`);
    terzoUtente.append(`<li>Numero chiamate iniziali: ${terzo.getNumeroChiamate()}</li>`);
    terzo.ricarica(ricaricaCredito);
    terzoUtente.append(`<li>Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${terzo.numero404()} euro</li>`);
    terzoUtente.append(`<li>Effettuo una chiamata da ${minutiChiamata} minuti</li>`);
    terzo.chiamata(minutiChiamata);
    terzoUtente.append(`<li>Numero chiamate: ${terzo.getNumeroChiamate()}</li>`);
    terzoUtente.append(`<li>Valore del credito dopo la chiamata: ${terzo.numero404()}</li>`);
    terzo.azzeraChiamate();
    terzoUtente.append(`<li>Numero chiamate dopo l'azzeramento: ${terzo.getNumeroChiamate()}</li>`);
})