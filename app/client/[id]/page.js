'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Plus, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import AddProjectDialog from '@/components/AddProjectDialog'
import { formatCurrency, formatDate } from '@/lib/utils'

const API_URL = 'http://localhost:3001/api'

const statusColors = {
  'open': 'bg-[#F5E2C8]/20 text-[#F5E2C8] border border-[#F5E2C8]/30',
  'in progress': 'bg-[#D88373]/20 text-[#D88373] border border-[#D88373]/40',
  'done': 'bg-green-500/20 text-green-300 border border-green-500/30'
}

const statusLabels = {
  'open': 'Otwarty',
  'in progress': 'W realizacji',
  'done': 'Zakończony'
}

export default function ClientPage() {
  const params = useParams()
  const router = useRouter()
  const [client, setClient] = useState(null)
  const [isAddProjectDialogOpen, setIsAddProjectDialogOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      fetchClient()
    }
  }, [params.id])

  const fetchClient = async () => {
    try {
      const response = await fetch(`${API_URL}/clients/${params.id}`)
      if (!response.ok) {
        router.push('/')
        return
      }
      const data = await response.json()
      setClient(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching client:', error)
      router.push('/')
    }
  }

  const handleProjectAdded = () => {
    fetchClient()
    setIsAddProjectDialogOpen(false)
  }

  const totalValue = client?.projects.reduce((sum, p) => sum + parseFloat(p.value || 0), 0) || 0

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#18206F] via-[#17255A] to-[#18206F] flex items-center justify-center">
        <div className="text-lg text-[#F5E2C8]">Ładowanie...</div>
      </div>
    )
  }

  if (!client) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18206F] via-[#17255A] to-[#18206F]">
      <div className="container mx-auto py-8 px-4">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do listy
          </Button>
        </Link>

        {/* Client Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{client.name}</CardTitle>
            <CardDescription className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{client.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Data pozyskania: {formatDate(client.acquisitionDate)}</span>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                <div className="text-sm text-[#F5E2C8]/70 mb-1">Liczba projektów</div>
                <div className="text-2xl font-bold text-white">{client.projects.length}</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                <div className="text-sm text-[#F5E2C8]/70 mb-1">Łączna wartość</div>
                <div className="text-2xl font-bold text-white">{formatCurrency(totalValue)}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Projekty</CardTitle>
                <CardDescription>
                  Lista wszystkich projektów klienta
                </CardDescription>
              </div>
              <Button onClick={() => setIsAddProjectDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Dodaj projekt
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {client.projects.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                Brak projektów. Dodaj pierwszy projekt dla tego klienta.
              </div>
            ) : (
              <div className="space-y-4">
                {client.projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-slate-700 rounded-lg p-4 hover:bg-slate-700/50 hover:border-[#D88373]/50 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg text-white">
                            {project.name}
                          </h3>
                          <Badge className={statusColors[project.status]}>
                            {statusLabels[project.status]}
                          </Badge>
                        </div>
                        <div className="text-sm text-[#F5E2C8]/70">
                          Wartość: <span className="font-medium text-[#D88373]">
                            {formatCurrency(project.value)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <AddProjectDialog
        open={isAddProjectDialogOpen}
        onOpenChange={setIsAddProjectDialogOpen}
        onProjectAdded={handleProjectAdded}
        clientId={params.id}
      />
    </div>
  )
}

