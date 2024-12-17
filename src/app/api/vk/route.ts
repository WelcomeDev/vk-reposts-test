import { getDb, setDb } from '@/app/api/vk/storage';

export async function POST(req: Request) {
    const body = await req.json();
    if (body.type === 'confirmation') {
        return new Response(process.env.CONFIRMATION_CODE);
    }

    const data = await getDb()
    data.append(body);
    await setDb(data);

    return new Response('ok')
}
