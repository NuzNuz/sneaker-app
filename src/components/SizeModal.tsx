// File: components/SizeModal.js
'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
//@ts-ignore
export default function SizeModal({ isOpen, onClose, sneaker }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[800px] w-[90vw] h-[80vh] p-0">
        <div className="h-full flex flex-col">
          <DialogHeader className="p-6">
            <DialogTitle className="text-2xl font-bold">{sneaker.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-grow overflow-hidden p-6 pt-0">
            <div className="flex flex-col md:flex-row gap-4 h-full">
              <div className="w-full md:w-1/2 flex flex-col">
                <img src={sneaker.image} alt={sneaker.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p><strong>Brand:</strong> {sneaker.brand}</p>
                <p><strong>SKU:</strong> {sneaker.sku}</p>
                <Separator className="my-2" />
                <ScrollArea className="flex-grow">
                  <p className="text-sm">{sneaker.description}</p>
                </ScrollArea>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Size and Price Details</h3>
                <div className="flex-grow overflow-hidden">
                  <ScrollArea className="h-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="sticky top-0 bg-background">Size</TableHead>
                          <TableHead className="sticky top-0 bg-background">Price</TableHead>
                          <TableHead className="sticky top-0 bg-background">Link</TableHead>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// The SneakerCard component and app/page.js remain the same as in the previous artifact.