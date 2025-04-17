const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Helper function to read components data
const getComponents = () => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'components.json'), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading components file:', error);
    return [];
  }
};

// GET /components - List all components
app.get('/components', (req, res) => {
  const components = getComponents();
  res.json(components);
});

// GET /components/:name - Get a single component by name
app.get('/components/:name', (req, res) => {
  const { name } = req.params;
  const components = getComponents();
  
  const component = components.find(comp => 
    comp.name.toLowerCase() === name.toLowerCase()
  );
  
  if (!component) {
    return res.status(404).json({ error: 'Component not found' });
  }
  
  res.json(component);
});

// GET /search?q=keyword - Search components by name or description
app.get('/search', (req, res) => {
  const { q } = req.query;
  
  if (!q) {
    return res.status(400).json({ error: 'Search query is required' });
  }
  
  const components = getComponents();
  const searchTerm = q.toLowerCase();
  
  const results = components.filter(component => 
    component.name.toLowerCase().includes(searchTerm) || 
    component.description.toLowerCase().includes(searchTerm)
  );
  
  res.json(results);
});

// Start the server
app.listen(PORT, () => {
  console.log(`MCP Landing Page server running on http://localhost:${PORT}`);
  console.log(`Available endpoints:
  - GET /components
  - GET /components/:name
  - GET /search?q=keyword`);
}); 