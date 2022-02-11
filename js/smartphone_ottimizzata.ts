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
//utilizzo dei metodi giusti per effettuare due ricariche e due chiamate

//console.log():
/*'primo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
*/
console.log('----------Primo utente----------');
console.log(`Valore del credito iniziale: ${primo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${primo.getNumeroChiamate()}`);
primo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${primo.numero404()} euro`);
console.log(`Effettuo una chiamata da ${minutiChiamata} minuti`);
primo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${primo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${primo.numero404()}`);
primo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${primo.getNumeroChiamate()}`);
console.log('');
/*
'secondo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
*/
console.log('----------Secondo utente----------');
console.log(`Valore del credito iniziale: ${secondo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${secondo.getNumeroChiamate()}`);
secondo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${secondo.numero404()} euro`);
console.log(`Effettuo una chiamata da ${minutiChiamata} minuti`);
secondo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${secondo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${secondo.numero404()}`);
secondo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${secondo.getNumeroChiamate()}`);
console.log('');
/*
'terzo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
 */
console.log('----------Terzo utente----------');
console.log(`Valore del credito iniziale: ${terzo.numero404()} euro`);
console.log(`Numero chiamate iniziali: ${terzo.getNumeroChiamate()}`);
terzo.ricarica(ricaricaCredito);
console.log(`Valore del credito dopo una ricarica di ${ricaricaCredito} euro: ${terzo.numero404()} euro`);
console.log(`Effettuo una chiamata da ${minutiChiamata} minuti`);
terzo.chiamata(minutiChiamata);
console.log(`Numero chiamate: ${terzo.getNumeroChiamate()}`);
console.log(`Valore del credito dopo la chiamata: ${terzo.numero404()}`);
terzo.azzeraChiamate();
console.log(`Numero chiamate dopo l'azzeramento: ${terzo.getNumeroChiamate()}`);