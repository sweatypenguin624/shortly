import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { shorturl } = params;
    console.log("🚀 Received shorturl:", shorturl);

    if (!shorturl) {
        console.log("❌ No shorturl provided, redirecting home");
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: shorturl.trim() });
    console.log("📄 Found document:", doc);

    if (doc?.url) {
        const target = doc.url.trim();
        console.log("✅ Redirecting to target URL:", target);
        redirect(target);
    } else {
        console.log("❌ No document found for shorturl, redirecting home");
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }
}
