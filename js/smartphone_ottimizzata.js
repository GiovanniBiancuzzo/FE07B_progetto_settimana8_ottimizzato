//prima classe
var User = /** @class */ (function () {
    //dichiarazioni del costruttore
    function User(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    //implememntazione metodi dell'interfaccia
    User.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    User.prototype.numero404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//implementazione della classe
var primo = new User(100, 50);
var secondo = new User(80, 10);
var terzo = new User(30, 0);
var ricaricaCredito = 20;
var minutiChiamata = 50;
$(function () {
    var primoUtente = $('#primoUtente');
    var secondoUtente = $('#secondoUtente');
    var terzoUtente = $('#terzoUtente');
    /*'primo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
    */
    primoUtente.append("<li>Valore del credito iniziale: ".concat(primo.numero404(), " euro</li>"));
    primoUtente.append("<li>Numero chiamate iniziali: ".concat(primo.getNumeroChiamate(), "</li>"));
    primo.ricarica(ricaricaCredito);
    primoUtente.append("<li>Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(primo.numero404(), " euro</li>"));
    primoUtente.append("<li>Effettuo una chiamata da ".concat(minutiChiamata, " minuti</li>"));
    primo.chiamata(minutiChiamata);
    primoUtente.append("<li>Numero chiamate: ".concat(primo.getNumeroChiamate(), "</li>"));
    primoUtente.append("<li>Valore del credito dopo la chiamata: ".concat(primo.numero404(), "</li>"));
    primo.azzeraChiamate();
    primoUtente.append("<li>Numero chiamate dopo l'azzeramento: ".concat(primo.getNumeroChiamate(), "</li>"));
    /*
    'secondo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
    */
    secondoUtente.append("<li>Valore del credito iniziale: ".concat(secondo.numero404(), " euro</li>"));
    secondoUtente.append("<li>Numero chiamate iniziali: ".concat(secondo.getNumeroChiamate(), "</li>"));
    secondo.ricarica(ricaricaCredito);
    secondoUtente.append("<li>Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(secondo.numero404(), " euro</li>"));
    secondoUtente.append("<li>Effettuo una chiamata da ".concat(minutiChiamata, " minuti</li>"));
    secondo.chiamata(minutiChiamata);
    secondoUtente.append("<li>Numero chiamate: ".concat(secondo.getNumeroChiamate(), "</li>"));
    secondoUtente.append("<li>Valore del credito dopo la chiamata: ".concat(secondo.numero404(), "</li>"));
    secondo.azzeraChiamate();
    secondoUtente.append("<li>Numero chiamate dopo l'azzeramento: ".concat(secondo.getNumeroChiamate(), "</li>"));
    /*
    'terzo utente'
    'valore carica disponibile:' -> metodo
    'numero chiamate:' -> metodo
    'dopo l'azzeramento'
    'numero chiamate:' -> metodo
     */
    terzoUtente.append("<li>Valore del credito iniziale: ".concat(terzo.numero404(), " euro</li>"));
    terzoUtente.append("<li>Numero chiamate iniziali: ".concat(terzo.getNumeroChiamate(), "</li>"));
    terzo.ricarica(ricaricaCredito);
    terzoUtente.append("<li>Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(terzo.numero404(), " euro</li>"));
    terzoUtente.append("<li>Effettuo una chiamata da ".concat(minutiChiamata, " minuti</li>"));
    terzo.chiamata(minutiChiamata);
    terzoUtente.append("<li>Numero chiamate: ".concat(terzo.getNumeroChiamate(), "</li>"));
    terzoUtente.append("<li>Valore del credito dopo la chiamata: ".concat(terzo.numero404(), "</li>"));
    terzo.azzeraChiamate();
    terzoUtente.append("<li>Numero chiamate dopo l'azzeramento: ".concat(terzo.getNumeroChiamate(), "</li>"));
});
