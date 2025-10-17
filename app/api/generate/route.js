import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://penguin624:dbpassword@cluster0.qffywjm.mongodb.net/?retryWrites=true&w=majority";
let client;
let db;

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("🚀 Received body:", body);

        if (!body.url || !body.shorturl) {
            console.log("❌ Missing url or shorturl");
            return NextResponse.json({ success: false, message: "Missing url or shorturl" });
        }

        if (!client) {
            client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                },
            });
            await client.connect();
            db = client.db("bitlinks");
            console.log("✅ Connected to MongoDB");
        }

        const collection = db.collection("url");

        const existing = await collection.findOne({ shorturl: body.shorturl });
        console.log("🔍 Existing doc:", existing);

        if (existing) {
            console.log("⚠️ URL already exists");
            return NextResponse.json({ success: false, message: "URL already exists" });
        }

        let fullUrl = body.url;
        if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
            fullUrl = "https://" + fullUrl;
        }



        const result = await collection.insertOne({
            url: fullUrl,
            shorturl: body.shorturl,
        });

        console.log("✅ Inserted document:", result);

        return NextResponse.json({ success: true, message: "URL Generated Successfully" });
    } catch (err) {
        console.error("❌ API Error:", err);
        return NextResponse.json({ success: false, message: "Internal Server Error" });
    }
}
