const { Builder, Browser, By } = require("selenium-webdriver");

const axios = require("axios");

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get("https://food.grab.com/sg/en/restaurants");

    await getData(driver);
  } finally {
    await driver.quit();
  }
})();

const getData = async (driver) => {
  let data = await driver
    .findElement(By.id("__NEXT_DATA__"))
    .getAttribute("innerHTML");

  let parsedData = JSON.parse(data);
  console.log(parsedData);

  let recommend =
    parsedData.props.initialReduxState.pageRestaurantsV2.entities
      .restaurantList;

  for (let k in recommend) {
    let restaurant_data = {};
    restaurant_data.store_name = recommend[k]["name"];
    restaurant_data.latitude = recommend[k]["latitude"];
    restaurant_data.longitude = recommend[k]["longitude"];

    axios
      .post("http://localhost:9090/list_of_stores", restaurant_data)
      .then((res) => console.log(res));

   

    
    //I used localhost and json file to store the scrap data
  }

  await driver.findElement(By.css("button")).click();

  
   await driver.manage().setTimeouts({ implicit: 30000 });
 



  await getData(driver);
};
