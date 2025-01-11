# Selenium E-Commerce Automation

This project demonstrates automation of an e-commerce website using Selenium WebDriver with Node.js. The script performs the following steps:

## Features

1. **Navigate to the website**: Opens the demo e-commerce website.
2. **Search for a product**: Searches for the product `Nike react phantom` using the search bar.
3. **Retrieve product price**: Extracts the price of the product.
4. **Interact with product options**:
   -  Selects size (`X`).
   -  Selects color (`Black`).
5. **Modify quantity**: Clears the quantity input and sets it to `3`.
6. **Add to cart**: Adds the product to the cart.
7. **Navigate to cart and checkout**: Opens the cart and proceeds to checkout.

## Prerequisites

Before running the project, ensure the following are installed:

1. **Node.js**: [Download and install Node.js](https://nodejs.org/).
2. **Google Chrome**: Install the latest version of Chrome.
3. **ChromeDriver**: Ensure ChromeDriver is installed and matches your Chrome version. It can be installed via `npm`:
   ```bash
   npm install chromedriver
   ```
4. **Selenium WebDriver**: Install Selenium for Node.js:
   ```bash
   npm install selenium-webdriver
   ```

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/LailaSumiyaKhan/Automation_Testing_Selenium.git
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Save the script as `automation.js` in the project directory.
2. Run the script using Node.js:
   ```bash
   node automation.js
   ```
3. Observe the automated browser actions.

## Script Details

### Steps Performed

1. **Open the Website**

   -  Opens the demo e-commerce website using Selenium WebDriver.

   ```javascript
   await driver.get("https://demo.evershop.io/");
   ```

2. **Search for a Product**

   -  Clicks the search icon and searches for `Nike react phantom`.

   ```javascript
   await driver.findElement(By.className("search-icon")).click();
   await driver
      .findElement(By.xpath("//input[@placeholder='Search']"))
      .sendKeys("Nike react phantom", Key.RETURN);
   ```

3. **Retrieve Product Price**

   -  Extracts the product price using XPath.

   ```javascript
   const price = await driver
      .findElement(
         By.xpath(
            "//div[contains(. , 'Nike react phantom run flyknit 2')]/following-sibling::div/div/span"
         )
      )
      .getText();
   console.log("price is: ", price);
   ```

4. **Interact with Product Options**

   -  Selects size and color options.

   ```javascript
   await driver.findElement(By.xpath("//a[text()='X']")).click();
   await driver.sleep(3000);
   await driver.findElement(By.xpath("//a[text()='Black']")).click();
   ```

5. **Modify Quantity and Add to Cart**

   -  Clears the quantity input, sets it to `3`, and clicks the "Add to Cart" button.

   ```javascript
   await driver.findElement(By.xpath("//input[@name='qty']")).clear();
   await driver.findElement(By.xpath("//input[@name='qty']")).sendKeys("3");
   const button = await driver.findElement(
      By.xpath(
         "//button[contains(@class, 'primary') and span[text()='ADD TO CART']]"
      )
   );
   await button.click();
   ```

6. **Navigate to Cart and Checkout**
   -  Opens the cart and proceeds to checkout.
   ```javascript
   await driver
      .findElement(By.xpath("//a[contains(text(), 'VIEW CART (1)')]"))
      .click();
   await driver
      .findElement(By.xpath("//span[contains(text(), 'CHECKOUT')]"))
      .click();
   ```

## Notes

-  The script uses explicit sleeps (`await driver.sleep()`) to allow for UI updates. For better performance, replace these with WebDriver explicit waits where applicable.
-  Ensure that the demo website is accessible and its structure matches the XPath locators used.

## Dependencies

-  [Selenium WebDriver](https://www.npmjs.com/package/selenium-webdriver)
