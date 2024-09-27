async function waitForSelector(page, selector) {
    await page.waitForSelector(selector);
}

module.exports = {
    waitForSelector
};
