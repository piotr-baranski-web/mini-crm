'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const API_URL = 'http://localhost:3001/api'

export default function AddClientDialog({ open, onOpenChange, onClientAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    acquisitionDate: new Date().toISOString().split('T')[0]
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/clients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          acquisitionDate: new Date().toISOString().split('T')[0]
        })
        onClientAdded()
      }
    } catch (error) {
      console.error('Error adding client:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <DialogTitle>Dodaj nowego klienta</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nazwa</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nazwa klienta"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="kontakt@przykład.pl"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="acquisitionDate">Data pozyskania</Label>
            <Input
              id="acquisitionDate"
              name="acquisitionDate"
              type="date"
              value={formData.acquisitionDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Anuluj
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Dodawanie...' : 'Dodaj klienta'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

