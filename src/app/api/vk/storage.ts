import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export async function getDb() {
    try {
        const content = await fs.readFile(path.resolve('./data/messages.json'), 'utf8');
        return JSON.parse(content);
    } catch (err) {
        return [];
    }
}

export async function setDb(data: any) {
    await fs.writeFile(path.resolve('./data/messages.json'), JSON.stringify(data), 'utf8');
}
