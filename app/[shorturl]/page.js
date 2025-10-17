import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    console.log("🚀 Received params:");

    const resolvedParams = await params;

    const shorturl = resolvedParams?.shorturl?.trim();
    console.log("🔍 Looking for shorturl:", shorturl);

    if (!shorturl) {
        console.log("❌ No shorturl provided, redirecting home");
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });
    console.log("📄 Found document:", doc);

    if (doc?.url) {
        const target = doc.url.trim();
        console.log("✅ Target URL found:", target);

        redirect(target);

    } else {
        console.log("❌ No document found for shorturl, redirecting home");
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    return <div>Redirecting...</div>; // fallback UI
}
