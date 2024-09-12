export async function GET(request) {
    const data = {
        name: 'John',
        age: 20,
        bio: 'info'
    }

    return new Response(JSON.stringify(data))
}

export async function POST(request) {

    return new Response(request.body)
}

export async function DELETE(request) {

    return new Response(request.body)
}