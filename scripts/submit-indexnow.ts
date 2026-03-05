import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://sanfordcleaning.com';
const API_KEY = '2f14c693d06a486682abd59cd58cd84d';
const INDEXNOW_URL = 'https://api.indexnow.org/indexnow';

async function submitToIndexNow() {
    try {
        console.log(`Fetching sitemap from ${SITE_URL}/sitemap.xml...`);
        const response = await fetch(`${SITE_URL}/sitemap.xml`);

        if (!response.ok) {
            throw new Error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
        }

        const xml = await response.text();

        // Extract all <loc> content from the sitemap
        const urls: string[] = [];
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;

        while ((match = regex.exec(xml)) !== null) {
            if (match[1]) {
                urls.push(match[1]);
            }
        }

        console.log(`Found ${urls.length} URLs in the sitemap.`);

        if (urls.length === 0) {
            console.log('No URLs to submit.');
            return;
        }

        const payload = {
            host: new URL(SITE_URL).host,
            key: API_KEY,
            keyLocation: `${SITE_URL}/${API_KEY}.txt`,
            urlList: urls
        };

        console.log(`Submitting to IndexNow...`);

        const submitResponse = await fetch(INDEXNOW_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        if (submitResponse.ok || submitResponse.status === 202 || submitResponse.status === 200) {
            console.log('Successfully submitted URLs to IndexNow!');
        } else {
            console.error(`Failed to submit: ${submitResponse.status} ${submitResponse.statusText}`);
            console.error(await submitResponse.text());
        }
    } catch (error) {
        console.error('Error submitting to IndexNow:', error);
        process.exit(1);
    }
}

submitToIndexNow();
