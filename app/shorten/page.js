"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const ShortenForm = () => {
    const [originalUrl, setOriginalUrl] = useState("")
    const [customSlug, setCustomSlug] = useState("")
    const [generatedLink, setGeneratedLink] = useState("")

    const buildRequestBody = () => JSON.stringify({
        url: originalUrl,
        shorturl: customSlug,
    })

    const generate = () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: buildRequestBody(),
            redirect: "follow",
        }

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGeneratedLink(`${process.env.NEXT_PUBLIC_HOST}/${customSlug}`)
                setOriginalUrl("")
                setCustomSlug("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>

            <div className='flex flex-col gap-2'>
                <input
                    type="text"
                    value={originalUrl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={(e) => setOriginalUrl(e.target.value)}
                />

                <input
                    type="text"
                    value={customSlug}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={(e) => setCustomSlug(e.target.value)}
                />

                <button
                    onClick={generate}
                    className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'
                >
                    Generate
                </button>
            </div>

            {generatedLink && (
                <>
                    <span className='font-bold text-lg'>Your Link </span>
                    <code>
                        <Link target="_blank" href={generatedLink}>{generatedLink}</Link>
                    </code>
                </>
            )}
        </div>
    )
}

export default ShortenForm
