import { test, expect } from '@playwright/test';

test('CT001 Busca por cursos existentes', async ({page}) => {
  await page.goto('https://www.pensarcursos.com.br');
  await page.getByRole('navigation').getByRole('link', { name: 'Cursos', exact: true }).click();
  await page.getByPlaceholder('Pesquise por cursos, áreas ou habilidades...').fill('Administração');
  await page.keyboard.press('Enter');
  await expect(page.getByRole("heading", { name: 'Resultados para "Administração"' })).toBeVisible();
})

test('CT002 Busca por cursos inexistentes', async({page}) => {
  await page.goto('https://www.pensarcursos.com.br');
  await page.getByRole('navigation').getByRole('link', {name: 'Cursos', exact: true}).click();
  await page.getByPlaceholder('Pesquise por cursos, áreas ou habilidades...').fill('abacaxi');
  await page.keyboard.press('Enter');
  await expect(page.getByRole("heading", { name: 'Resultados para "abacaxi"' })).toBeVisible();
})

//npx playwright test --ui