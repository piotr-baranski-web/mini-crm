const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const initialData = {
    clients: [
      {
        id: '1',
        name: 'Firma ABC Sp. z o.o.',
        email: 'kontakt@abc.pl',
        acquisitionDate: '2024-01-15',
        projects: [
          {
            id: 'p1',
            name: 'Strona internetowa',
            status: 'done',
            value: 15000
          },
          {
            id: 'p2',
            name: 'Sklep online',
            status: 'in progress',
            value: 35000
          }
        ]
      },
      {
        id: '2',
        name: 'Tech Solutions Ltd',
        email: 'info@techsolutions.com',
        acquisitionDate: '2024-03-20',
        projects: [
          {
            id: 'p3',
            name: 'System CRM',
            status: 'open',
            value: 50000
          }
        ]
      }
    ]
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

// Helper functions
const readData = () => {
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Routes

// Get all clients
app.get('/api/clients', (req, res) => {
  try {
    const data = readData();
    res.json(data.clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read clients' });
  }
});

// Get single client
app.get('/api/clients/:id', (req, res) => {
  try {
    const data = readData();
    const client = data.clients.find(c => c.id === req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read client' });
  }
});

// Create new client
app.post('/api/clients', (req, res) => {
  try {
    const data = readData();
    const newClient = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      acquisitionDate: req.body.acquisitionDate || new Date().toISOString().split('T')[0],
      projects: []
    };
    data.clients.push(newClient);
    writeData(data);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create client' });
  }
});

// Add project to client
app.post('/api/clients/:id/projects', (req, res) => {
  try {
    const data = readData();
    const client = data.clients.find(c => c.id === req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    const newProject = {
      id: Date.now().toString(),
      name: req.body.name,
      status: req.body.status || 'open',
      value: parseFloat(req.body.value) || 0
    };
    client.projects.push(newProject);
    writeData(data);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add project' });
  }
});

// Get summary
app.get('/api/summary', (req, res) => {
  try {
    const data = readData();
    let totalProjects = 0;
    let totalValue = 0;

    data.clients.forEach(client => {
      totalProjects += client.projects.length;
      client.projects.forEach(project => {
        totalValue += parseFloat(project.value) || 0;
      });
    });

    res.json({
      totalProjects,
      totalValue
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate summary' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

