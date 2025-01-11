const { Builder, By, Key, until } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

async function execution() {
   try {
      const productName = "Nike react phantom run flyknit 2";
      await driver.manage().window().maximize();
      await driver.get("https://demo.evershop.io/");
      // console.log("opened website");
      await driver.findElement(By.className("search-icon")).click();
      // console.log("clicked search icon");
      await driver
         .findElement(By.xpath("//input[@placeholder='Search']"))
         .sendKeys("Nike react phantom");
      // console.log("searched for Nike react phantom");
      await driver
         .findElement(By.xpath("//input[@placeholder='Search']"))
         .sendKeys(Key.RETURN);
      // console.log("pressed enter");
      // const price = await driver
      //    .findElement(By.xpath("//span[contains(@class,'sale-price')]"))
      //    .getText();
      const price = await driver
         .findElement(
            By.xpath(
               `//div[contains(. , '${productName}')]/following-sibling::div/div/span`
            )
         )
         .getText();
      console.log("price is: ", price);
      await driver
         .findElement(By.xpath(`//span[contains(text(),'${productName}')]`))
         .click();
      // console.log("clicked on product");
      await driver.findElement(By.xpath("//a[text()='X']")).click();
      await driver.sleep(3000);
      console.log("selected size");
      await driver.findElement(By.xpath("//a[text()='Black']")).click();
      // console.log("selected color");
      await driver.findElement(By.xpath("//input[@name='qty']")).clear();
      // console.log("cleared quantity");

      await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys("3");
      // console.log("added quantity");
      const button = await driver.findElement(
         By.xpath(
            "//button[contains(@class, 'primary') and span[text()='ADD TO CART']]"
         )
      );
      await button.click();
      // console.log("clicked add to cart button");
      await driver.sleep(3000);

      await driver
         .findElement(By.xpath("//a[contains(text(), 'VIEW CART (1)')]"))
         .click();
      await driver.sleep(3000);
      await driver
         .findElement(By.xpath("//span[contains(text(), 'CHECKOUT')]"))
         .click();
      await driver.sleep(3000);
      await driver.quit();
      // console.log("closed browser");
   } catch (error) {
      console.error(error);
   }
}
execution();
