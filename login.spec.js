const { chromium } = require('playwright');

(async () => {
  // O comando abaixo manda o robô criar uma pasta de vídeos!
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: 'videos/' } 
  });
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  // Espera 2 segundos na tela dos produtos para o vídeo não cortar rápido
  await page.waitForTimeout(2000); 

  await context.close();
  await browser.close();
})();
