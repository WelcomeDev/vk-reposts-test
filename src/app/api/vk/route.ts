import { getDb, setDb } from '@/app/api/vk/storage';

export async function POST(req: Request) {
    const body = await req.json();
    console.log(JSON.stringify(body));
    if (body.type === 'confirmation') {
        return new Response(process.env.CONFIRMATION_CODE);
    }

    const data = await getDb()
    data.push(body);
    await setDb(data);

    return new Response('ok')
}
