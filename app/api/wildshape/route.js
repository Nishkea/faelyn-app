import { NextResponse } from 'next/server'
import wildshapes from './wildshapes.json'
import Fuse from 'fuse.js'

export async function GET(request) {
    const options = {
        includeScore: true,
        shouldSort: true,
        keys: [
            {
            name: 'index',
            weight: 0.3
            },
            {
            name: 'name',
            weight: 1
            },
            {
            name: 'url',
            weight: 0.2
            }
        ],
        limit: 2,
        threshold: 0.5
    }

    const fuse = new Fuse(wildshapes, options)
    const { searchParams } = new URL(request.url)

    if (!searchParams.has('q')) {
        return NextResponse.redirect('/')
    }
    
    const results = fuse.search(searchParams.get('q'))

    return NextResponse.json(results)
}
