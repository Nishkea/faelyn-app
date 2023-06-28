import { NextResponse } from 'next/server'

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    if (!searchParams.has('wildshape')) {
        return NextResponse.redirect('/')
    }

    const searchParam = searchParams.get('wildshape')

    const res = await fetch(`https://www.dnd5eapi.co${searchParam}`)
    if (!res.ok) {
        return NextResponse.redirect('/')
    }

    const data = await res.json()
    return NextResponse.json(data)
}