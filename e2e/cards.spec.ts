import { expect, test } from '@playwright/test';

test('카드 목록을 볼 수 있다', async ({ page }) => {
    await page.goto("http://localhost:3000/cards", { waitUntil: 'networkidle' });

    await expect(page.getByRole('link', { name: '15분씩 일주일 시작하기' })).toBeVisible();
});
