import { chromium } from 'playwright';

const browser = await chromium.launch();

try {
    const page = await browser.newPage();

    await page.goto('http://localhost:4321/', {
        waitUntil: 'networkidle',
    });

    await page.pdf({
        path: 'dist/dan-ware-cv.pdf',
        format: 'A4',
            printBackground: true,
            preferCSSPageSize: true,
    });
} finally {
    await browser.close();
}
