// File: app/page.js
'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import SneakerCard from '@/components/SneakerCard'

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    const response = await fetch(`https://api.sneakersapi.dev/search?query=${encodeURIComponent(query)}&page=1`)
    const data = await response.json()
    setResults(data.hits)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sneaker Search</h1>
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter shoe name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((sneaker) => (
          // @ts-ignore
          <SneakerCard key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </main>
  )
}