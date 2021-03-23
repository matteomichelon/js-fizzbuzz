/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//Stampa i numeri da 1 a 100

var numero = -1;

var fizz = "Fizz";

var buzz = "Buzz";

var fizzBuzz = "FizzBuzz";

for ( var i = 1; i <= 100; i++ ) {

    numero = i;

    //trova i multipli di 3 che di 5 stampi FizzBuzz
    if ( ( numero % 3 == 0 ) && ( numero % 5 == 0 ) ) {

        numero = fizzBuzz;

    //trova i multipli di 3 e scrivi fizz
    } else if ( numero % 3 == 0 ) {

        numero = fizz;

    //trova i multipli di 5 e scrivi buzz
    } else if ( numero % 5 == 0 ) {

        numero = buzz;

    }
    //Output dei numeri attraverso console.log
    console.log( numero );
}

