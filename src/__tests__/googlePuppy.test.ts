import * animals from "../animals.json"
animals.forEach((animal) => {
test("async await functionality", async () => {
    await driver.get("https://www.google.com");
    await driver.wait(until.elementLocated(By.name("q")));
    await driver.findElement(By.name("q")).sendKeys(`${animal}\n`);
    await driver.wait(until.elementLocated(By.id("rso")));
    let value = await driver.findElement(By.id("rso")).getText();
    expect(value.toLowerCase()).toContain("animal");
  });
});
  
  afterAll(async () => {
    await driver.quit();
  });