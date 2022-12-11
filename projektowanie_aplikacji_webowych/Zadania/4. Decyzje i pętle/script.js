/*

1)  Napisz funkcje która przyjmuje jeden parametr który jest liczbą.
    Funkcja niech wypisuję na konsolę "Liczba nieparzysta" w przypadku gdy przy wywołaniu funkcji została
    podana liczba nieparzysta lub "Liczba parzysta" w przypadku gdy przy wywołaniu funkcji została podana liczba parzysta.
    Zadanie wykonaj z wykorzystaniem konstrukcji IF

2)  Napisz funkcję która wypisze na konsole liczby od 1 do 100 podzielne przez 3.

 */
function evenOrOdd(n) {
    if (n % 2) {
        return("Liczba nieparzysta")
    } else {
        return("Liczba parzysta")
    }
}

console.log(evenOrOdd());

function oneToHundred() {
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0) ;
        {
            return(i)
        }
    }
}

console.log(oneToHundred());
