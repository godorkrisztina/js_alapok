console.log("hello");

(function () {
   'use strict'
    //minden amit ide írok az strict mode-ban fog futni
    // a strict mode szigorúbb szabályokkal futtatja
    //a javascript kódot, és több hibát fog kiírni a böngésző
    //ami tenélkül nem tenne meg
    
    //ez egy újradekralálható változó  lesz:
    var szoveg2 = "valami";
    console.log(szoveg2);
    // erre nem kapunk hibát mert a var kulcsszóvAL DEKLARÁLT VÁLTOZÓT újradeklarálhatjuk:
     var szoveg2 = "valami";
    
    let szoveg3 = "szoveg3 ezt let-el hoztuk letre";
    console.log(szoveg3);
    // a let kulcsszóval létrehozókatnem lehet újra DEKLARÁlNI 
    // a követkető sort ha nem kommentezzük hibát kapunk:
     //let szoveg3 = "szoveg3 ezt let-el hoztuk letre";

    //ez egy értékadás, nem deklarálás:
    szoveg3 = "uj erteket kap a szoveg3";
    
    //a console.log egy függvény aminek átadjuk a szoveg3 változót
    // a console.log  eg más ember által kiírt kód, ami azt csinálja a neki adott változóval hogy kiírja a console-ra
    console.log(szoveg3);
    
    //kiirhatunk egyszerre szöveget és változót is:
    let szam1 = 94;
    console.log("a szam1 valtozo erteke: " +szam1);
    
    
} () ); // itt van vége a strict mode-nak, ez után már nem fog strict  mode-banb futni a kód



//implicit global változó lesz a szöveg
//global: a szöveg változó mindenhol elérhető lesz a kódban
//implicit global változót lehetőleg ne használjuknk! 
szoveg = "ez itt egy szoveg";

console.log(szoveg);
