'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
//@ts-ignore
export default function SizeModal({ isOpen, onClose, sneaker }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[700px] max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{sneaker.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-grow">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <img src={sneaker.image} alt={sneaker.title} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
            <div className="w-full md:w-1/2">
              <p><strong>Brand:</strong> {sneaker.brand}</p>
              <p><strong>SKU:</strong> {sneaker.sku}</p>
              <Separator className="my-2" />
              <p className="text-sm">{sneaker.description}</p>
            </div>
          </div>
          <Separator className="my-4" />
          <h3 className="text-lg font-semibold mb-2">Size and Price Details</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Size</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* @ts-ignore */}
              {sneaker.variants.map((variant) => (
                <TableRow key={variant.variant_id}>
                  <TableCell>{variant.size}</TableCell>
                  <TableCell>${variant.price}</TableCell>
                  <TableCell>
                    <a 
                      href={variant.variant_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Link
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}