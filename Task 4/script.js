/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

async function getData() {
  const response = await fetch("./cars.json");
  try {
    if (response.ok) {
      data = await response.json();
      console.log(data);
      data.forEach((e) => {
        createCard(e);
      });
    } else {
      console.log("shit happens");
    }
  } catch (error) {
    console.log(error);
  }
}
getData();

function createCard(e) {
  const card = document.createElement("div");
  card.className = "card";
  const brand = document.createElement("h2");
  brand.className = "brand";
  brand.textContent = e.brand;
  const models = document.createElement("ul");
  models.className = "ul";
  const model = e.models;
  model.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    models.append(li);
  });
  card.append(brand, models);
  output.append(card);
}
