import { expect, test } from '@playwright/test';

test('카드 목록을 볼 수 있다', async ({ page }) => {
	await page.goto("http://localhost:3000/cards", { waitUntil: 'networkidle' });

	await page.getByRole('link', { name: '일주일 시작하기' }).click();

	await expect(page).toHaveURL(new RegExp('/cards/1')) // /cards/1
});
