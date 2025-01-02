const {Builder, By, Key, until} = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();

async function execution(){
   await driver.manage().window().maximize();
   await driver.get("https://demo.evershop.io/")
   await driver.findElement(By.className("search-icon")).click();
   await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Nike react phantom run flyknit 2");
   await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.RETURN);
  const price = await driver.findElement(By.xpath("//span[contains(@class,'sale-price')]")).getText();
  console.log(price);
  await driver.sleep(5000);
   await driver.quit();
}
execution();
