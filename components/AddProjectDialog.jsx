'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

const API_URL = 'http://localhost:3001/api'

export default function AddProjectDialog({ open, onOpenChange, onProjectAdded, clientId }) {
  const [formData, setFormData] = useState({
    name: '',
    status: 'open',
    value: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/clients/${clientId}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          value: parseFloat(formData.value) || 0
        }),
      })

      if (response.ok) {
        setFormData({
          name: '',
          status: 'open',
          value: ''
        })
        onProjectAdded()
      }
    } catch (error) {
      console.error('Error adding project:', error)
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
          <DialogTitle>Dodaj nowy projekt</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nazwa projektu</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nazwa projektu"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="open">Otwarty</option>
              <option value="in progress">W realizacji</option>
              <option value="done">Zakończony</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="value">Wartość (PLN)</Label>
            <Input
              id="value"
              name="value"
              type="number"
              step="0.01"
              value={formData.value}
              onChange={handleChange}
              placeholder="0.00"
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
              {loading ? 'Dodawanie...' : 'Dodaj projekt'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

