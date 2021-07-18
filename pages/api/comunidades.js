import { SiteClient } from 'datocms-client';

export default async function recebeReqs(request, response) {

    if(request.method == 'POST') {
        const TOKEN = '232ddc1afdbfbeeaa8bd0bca70c384';
        const client = new SiteClient(TOKEN);
    
        const newRecord = await client.items.create({
            itemType: "977029",
            ...request.body,
            //title: "Teste",
            //imageUrl: "https://place-hold.it/300x300",
            //creatorSlug: "-"
        });
    
        response.json({
            tchurubei: "turubai",
            newRecord: newRecord,
        });

        return;
    }

    response.status(404).json({
        message: 'Nada para ver aqui'
    })
}