import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    try {
        const { shorturl } = params;

        if (!shorturl) {
            // No shorturl provided → redirect home
            redirect(process.env.NEXT_PUBLIC_HOST || "/");
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // Find the document by shorturl
        const doc = await collection.findOne({ shorturl: shorturl.trim() });

        if (doc?.url) {
            // URL found → redirect to target
            redirect(doc.url.trim());
        } else {
            // Short URL not found → redirect to custom 404 page or home
            redirect("/404"); // or process.env.NEXT_PUBLIC_HOST || "/"
        }
    } catch (error) {
        console.error("Error fetching short URL:", error);

        // On error → redirect home
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }
}
