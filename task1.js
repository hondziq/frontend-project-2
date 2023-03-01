const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

// PART1

let country;

function checkCountry(country, countries) {
  if (typeof country != "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${countries.indexOf(
        country
      )}`
    );
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`);
  }
}

// PART2

function addCountry(country, countries) {
  if (typeof country != "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${countries.indexOf(
        country
      )}`
    );
  } else {
    countries.push(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidaná do seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Celkový počet krajin v seznamu je ${countries.length}.`
    );
  }
}

// PART3

function removeCountry(country, countries) {
  if (typeof country != "string" || country.length === 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    console.log(
      `Zadaná krajina ${country} byla odstraněná se seznamu krajin na indexu ${countries.indexOf(
        country
      )}. Aktuální počet krajin v seznamu je ${countries.length - 1}.`
    );
    countries.splice(countries.indexOf(country), 1);
  } else {
    console.log(`Zadaná krajina ${country} se nenachází v seznamu.`);
  }
}
