const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const componentGenerator = require('./component-generator');

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

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the MCP Landing Page Components API',
    endpoints: [
      { method: 'GET', path: '/components', description: 'List all components' },
      { method: 'GET', path: '/components/:name', description: 'Get component by name' },
      { method: 'GET', path: '/search', description: 'Search components by keyword' },
      { method: 'GET', path: '/categories', description: 'List all component categories' },
      { method: 'GET', path: '/categories/:category', description: 'Get components by category' },
      { method: 'POST', path: '/generate-component', description: 'Generate a TypeScript component with Tailwind' },
      { method: 'POST', path: '/generate-landing-page', description: 'Generate a complete landing page with all components' },
      { method: 'POST', path: '/generate-all', description: 'Generate all component files and landing page' }
    ]
  });
});

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

// GET /categories - List all component categories
app.get('/categories', (req, res) => {
  const components = getComponents();
  const categories = [...new Set(components.map(component => component.category))].filter(Boolean);
  
  res.json(categories);
});

// GET /categories/:category - Get components by category
app.get('/categories/:category', (req, res) => {
  const { category } = req.params;
  const components = getComponents();
  
  const categoryComponents = components.filter(comp => 
    comp.category && comp.category.toLowerCase() === category.toLowerCase()
  );
  
  if (categoryComponents.length === 0) {
    return res.status(404).json({ error: 'Category not found or has no components' });
  }
  
  res.json(categoryComponents);
});

// POST /generate-component - Generate a TypeScript component with Tailwind
app.post('/generate-component', (req, res) => {
  try {
    const { componentName } = req.body;
    
    if (!componentName) {
      return res.status(400).json({ error: 'Component name is required' });
    }
    
    const components = getComponents();
    const component = components.find(c => c.name.toLowerCase() === componentName.toLowerCase());
    
    if (!component) {
      return res.status(404).json({ error: 'Component not found' });
    }
    
    // Generate component code
    const componentCode = componentGenerator.generateComponent(component);
    
    res.json({
      name: component.name,
      code: componentCode
    });
  } catch (error) {
    console.error('Error generating component:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /generate-landing-page - Generate a complete landing page with all components
app.post('/generate-landing-page', (req, res) => {
  try {
    const components = getComponents();
    const landingPageCode = componentGenerator.generateLandingPage(components);
    
    res.json({
      code: landingPageCode
    });
  } catch (error) {
    console.error('Error generating landing page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /generate-all - Generate all component files and landing page
app.post('/generate-all', (req, res) => {
  try {
    const success = componentGenerator.generateAllComponents();
    
    if (success) {
      res.json({ 
        message: 'All components generated successfully',
        components: getComponents().map(c => c.name)
      });
    } else {
      res.status(500).json({ error: 'Failed to generate components' });
    }
  } catch (error) {
    console.error('Error generating all components:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`MCP Landing Page server running on http://localhost:${PORT}`);
  console.log(`Available endpoints:
  - GET /components
  - GET /components/:name
  - GET /search?q=keyword
  - GET /categories
  - GET /categories/:category
  - POST /generate-component
  - POST /generate-landing-page
  - POST /generate-all`);
}); 