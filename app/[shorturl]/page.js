import { redirect } from "next/navigation"
import clientPromise from "@/database/mongodb"

const DB_NAME = "bitlinks"
const COLLECTION_NAME = "url"

async function getUrlCollection() {
    const client = await clientPromise
    const db = client.db(DB_NAME)
    return db.collection(COLLECTION_NAME)
}

export default async function Page({ params }) {
    const { shorturl } = await params

    const urlCollection = await getUrlCollection()
    const matchedEntry = await urlCollection.findOne({ shorturl })

    console.log(matchedEntry)

    if (matchedEntry) {
        redirect(matchedEntry.url)
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {url}</div>
}
