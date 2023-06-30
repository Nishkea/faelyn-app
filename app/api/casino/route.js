import { NextResponse } from 'next/server'

export async function GET(request) {
    let shapeArray = []

    async function getCasinoForms() {
        const res = await fetch('https://directus.shoto.studio/items/faelyn?fields=casino')
        const json = await res.json()
        const { casino } = json.data
        
        if (casino.length == 0) {
            return { error: 'Casino is empty!', status: 400 }
        }

        for (const form of casino) {
            console.log(form)
            const data = await getShapeDetails({ shape: form.wildshape })
            shapeArray.push(data)
        }
    
        return shapeArray
    }

    return NextResponse.json(await getCasinoForms())
}

export async function PATCH(request) {
    const { searchParams } = new URL(request.url)
    const directusKey = process.env.DIRECTUS_KEY

    async function postNewCasinoForm() {
        const form = searchParams.get('form')
        const removeShape = searchParams.get('remove')

            
    
        const getCasinoItems = await fetch('https://directus.shoto.studio/items/faelyn?fields=casino')
        const casinoJson = await getCasinoItems.json()
        const { casino } = casinoJson.data.casino ? casinoJson.data : { casino: []}

        if (removeShape) {
            const payload = {
                casino: [
                    ...casino.filter(shape => shape.wildshape !== removeShape)
                ]
            }
            const res = await fetch(`https://directus.shoto.studio/items/faelyn?access_token=${directusKey}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            const json = await res.json()
            return json
        }

        if (casino.length >= 20) {
            return { error: 'Casino is full!', status: 400 }
        }

        const payload = {
            casino: [
                ...casino,
                {
                    'wildshape': form,
                }
            ]
        }

        const res = await fetch(`https://directus.shoto.studio/items/faelyn?access_token=${directusKey}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        const json = await res.json()
        return json
    }

    return NextResponse.json(await postNewCasinoForm())
}

async function getShapeDetails({ shape}) {
    const res = await fetch(`https://www.dnd5eapi.co/api/monsters/${shape}`)
    const json = await res.json()
    return json
}