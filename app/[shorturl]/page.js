import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

// Optional: simple 404 page component
function NotFound({ shorturl }) {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Short URL Not Found</h1>
            <p>The short URL <strong>{shorturl}</strong> does not exist.</p>
            <a href={process.env.NEXT_PUBLIC_HOST || "/"}>Go Home</a>
        </div>
    );
}

export default async function Page({ params }) {
    const { shorturl } = params;

    // Redirect home if no shorturl is provided
    if (!shorturl) {
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }

    try {
        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // Find the document by shorturl
        const doc = await collection.findOne({ shorturl: shorturl.trim() });

        if (doc?.url) {
            // URL found → redirect
            redirect(doc.url.trim());
        } else {
            // Short URL not found → render 404 page
            return <NotFound shorturl={shorturl} />;
        }
    } catch (error) {
        console.error("❌ MongoDB error:", error);
        // On DB error → redirect home
        redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }
}
