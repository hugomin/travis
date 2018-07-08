const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3000/index/index');
    await driver.findElement(By.id('thumb')).click();
    const _animation = driver.findElement(By.id('animation'))
    await driver.wait(_animation.isDisplayed(),10000);
    console.log('success')
  } finally {
    // await driver.quit();
  }
})();