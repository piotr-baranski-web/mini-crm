'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Users, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import AddClientDialog from '@/components/AddClientDialog'
import { formatCurrency, formatDate } from '@/lib/utils'

const API_URL = 'http://localhost:3001/api'

export default function Home() {
  const [clients, setClients] = useState([])
  const [summary, setSummary] = useState({ totalProjects: 0, totalValue: 0 })
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClients()
    fetchSummary()
  }, [])

  const fetchClients = async () => {
    try {
      const response = await fetch(`${API_URL}/clients`)
      const data = await response.json()
      setClients(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching clients:', error)
      setLoading(false)
    }
  }

  const fetchSummary = async () => {
    try {
      const response = await fetch(`${API_URL}/summary`)
      const data = await response.json()
      setSummary(data)
    } catch (error) {
      console.error('Error fetching summary:', error)
    }
  }

  const handleClientAdded = () => {
    fetchClients()
    fetchSummary()
    setIsAddDialogOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18206F] via-[#17255A] to-[#18206F]">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Mini CRM</h1>
          <p className="text-[#F5E2C8]">System zarządzania klientami i projektami</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Liczba klientów
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clients.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Liczba projektów
              </CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summary.totalProjects}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Łączna wartość
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(summary.totalValue)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Clients List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Lista klientów</CardTitle>
                <CardDescription>
                  Zarządzaj swoimi klientami i ich projektami
                </CardDescription>
              </div>
              <Button onClick={() => setIsAddDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Dodaj klienta
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">
                Ładowanie...
              </div>
            ) : clients.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                Brak klientów. Dodaj pierwszego klienta, aby rozpocząć.
              </div>
            ) : (
              <div className="space-y-4">
                {clients.map((client) => (
                  <Link
                    key={client.id}
                    href={`/client/${client.id}`}
                    className="block"
                  >
                    <div className="border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 hover:border-[#D88373]/50 transition-all cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-white">
                            {client.name}
                          </h3>
                          <p className="text-sm text-[#F5E2C8]/70">{client.email}</p>
                          <p className="text-xs text-[#F5E2C8]/50 mt-1">
                            Data pozyskania: {formatDate(client.acquisitionDate)}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-white">
                            {client.projects.length} {client.projects.length === 1 ? 'projekt' : 'projektów'}
                          </div>
                          <div className="text-xs text-[#D88373] mt-1">
                            {formatCurrency(
                              client.projects.reduce((sum, p) => sum + parseFloat(p.value || 0), 0)
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <AddClientDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onClientAdded={handleClientAdded}
      />
    </div>
  )
}

