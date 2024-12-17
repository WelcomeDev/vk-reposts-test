import { getDb, setDb } from '@/app/api/vk/storage';

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body);
    if (body.type === 'confirmation') {
        return new Response(JSON.stringify({ "type": "confirmation", "group_id": 228707067 }));
    }

    const data = await getDb()
    data.append(body);
    await setDb(data);

    return new Response('ok')
}
