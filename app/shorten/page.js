"use client"

// shorten route

import Link from 'next/link'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [error, setError] = useState("") // new state for error message

    const generate = async () => {
        setError("") // reset error on new attempt
        setGenerated("")

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const finalShort = shorturl.trim() || nanoid(6); // generates 6-char unique ID

        const raw = JSON.stringify({
            url,
            shorturl: finalShort
        });

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: myHeaders,
                body: raw
            });

            const result = await response.json();
            console.log(result);

            if (result.success) {
                setGenerated(`${window.location.origin}/${finalShort}`);
                setError("")
            } else {
                setError(result.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => setUrl(e.target.value)}
                />

                <input
                    type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text (optional)'
                    onChange={e => setShorturl(e.target.value)}
                />

                <button
                    onClick={generate}
                    className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'
                >
                    Generate
                </button>

                {/* Inline error message */}
                {error && <span className="text-red-600 font-semibold">{error}</span>}
            </div>

            {generated && (
                <>
                    <span className='font-bold text-lg'>Your Link </span>
                    <code>
                        <Link target="_blank" href={generated}>{generated}</Link>
                    </code>
                </>
            )}
        </div>
    )
}

export default Shorten
