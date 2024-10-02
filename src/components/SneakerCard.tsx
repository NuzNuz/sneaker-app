'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SizeModal from './SizeModal'
//@ts-ignore
export default function SneakerCard({ sneaker }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{sneaker.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={sneaker.image} alt={sneaker.title} className="w-full h-48 object-cover mb-2" />
        <p>Base Price: ${sneaker.base_price}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setIsModalOpen(true)}>View Details</Button>
      </CardFooter>
      <SizeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sneaker={sneaker}
      />
    </Card>
  )
}