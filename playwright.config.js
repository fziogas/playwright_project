const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    trace: 'on-first-retry',
    video: 'on',
  },
  reporter: [
    ['list'],
    ['json', {outputFile: 'test-results/results.json'}],
    ['html', { outputFolder: 'test-results', open:'never'}]
  ]
});
