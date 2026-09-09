import clientPromise from "@/database/mongodb"

const DB_NAME = "bitlinks"
const COLLECTION_NAME = "url"

async function getUrlCollection() {
    const client = await clientPromise
    const db = client.db(DB_NAME)
    return db.collection(COLLECTION_NAME)
}

export async function POST(request) {
    const body = await request.json()
    const urlCollection = await getUrlCollection()

    const existingEntry = await urlCollection.findOne({ shorturl: body.shorturl })

    if (existingEntry) {
        return Response.json({
            success: false,
            error: true,
            message: "URL already exists!",
        })
    }

    await urlCollection.insertOne({
        url: body.url,
        shorturl: body.shorturl,
    })

    return Response.json({
        success: true,
        error: false,
        message: "URL Generated Successfully",
    })
}
