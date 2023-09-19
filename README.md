# Frontend project 2

2. projekt front-end akademie - práce s polem a objekty

---

## task1.js
### Part1

```checkCountry(country, countries);```
Funkce checkCountry kontrololuje, zda je zadaná krajina validní (typ string, víc než 0 znaků).
Je-li validní a nachází se v poli krajin, vypíše na jakém indexu. Není-li validní, vypíše do konzole, že se zadaná krajina v seznamu nenachází.

### Part2

```addCountry(country, countries);```
Funkce addCountry kontroluje, zda je zadaná krajina validní (typ string, víc než 0 znaků).
Jestli se zadaná krajina v seznamu nachází, vypíše na jakém je indexu. Pokud se v seznamu nenachází, funkce přidá krajinu na konec seznamu, vypíše index a celkový počet krajin.

### Part3

```removeCountry(country, countries);```
Funkce removeCountry kontroluje, zda je zadaná krajina validní (typ string, víc než 0 znaků).
Pokud se zadaná krajina v seznamu nachází, zjistí na jakém indexu a krajinu ze seznamu vymaže.

---

## task2.js

```function percentageOfPopulation(population, populationTotal);```
Funkce vrací procentuální podíl populace krajiny z celkového počtu lidí.

Zbytek kódu pracuje s kopii původního pole: copyCountries:
Pomocí sort() pole řadí dle populace.
Pomocí forEach() přidává každému objektu v poli nové vlastnosti "id" a "percentage"
Pomocí filter() vytváří nové pole, kde název krajiny je delší než 4 znaky, není delší než 8 znaků a hodnota percentage je větší než 1.5 a menší než 10.
