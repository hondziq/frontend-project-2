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
