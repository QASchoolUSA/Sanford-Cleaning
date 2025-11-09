import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list']],
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    // Uncomment to add more browsers
    // { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
  ],
});