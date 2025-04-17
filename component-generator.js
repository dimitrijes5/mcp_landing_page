/**
 * Component Generator Utility
 * 
 * This utility generates fully-styled React TypeScript components
 * using Tailwind CSS based on component specifications from the MCP server.
 */
const fs = require('fs');
const path = require('path');

/**
 * Generate a TypeScript type definition for component props
 * @param {Object} propTypes - The prop types from the component specification
 * @returns {string} - TypeScript interface definition
 */
const generatePropTypes = (propTypes) => {
  let typeDefinition = '';
  
  Object.entries(propTypes).forEach(([propName, propType]) => {
    // Convert JSON schema type to TypeScript type
    let tsType = 'any';
    switch(propType) {
      case 'string':
        tsType = 'string';
        break;
      case 'number':
        tsType = 'number';
        break;
      case 'boolean':
        tsType = 'boolean';
        break;
      case 'array':
        tsType = 'any[]';
        break;
      case 'object':
        tsType = 'Record<string, any>';
        break;
    }
    
    typeDefinition += `  ${propName}: ${tsType};\n`;
  });
  
  return typeDefinition;
};

/**
 * Generate a React component with Tailwind styling
 * @param {Object} component - The component specification
 * @returns {string} - Complete React TypeScript component
 */
const generateComponent = (component) => {
  const { name, props, tailwind = {}, responsive = {} } = component;
  
  // Generate props interface
  const propsInterface = `export interface ${name}Props {
${generatePropTypes(props)}
}`;

  // Generate component JSX with Tailwind classes
  let componentJSX = '';
  
  // Different component templates based on component type
  switch(name) {
    case 'Navbar':
      componentJSX = `
  return (
    <nav className="${tailwind.container}">
      <div className="flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="Logo" className="${tailwind.logo}" />
        </div>
        
        <div className="${tailwind.menu}">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={\`#\${item.toLowerCase()}\`} 
              className="${tailwind.menuItem}"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div>
          <a 
            href={actionButton.url} 
            className="${tailwind.actionButton}"
          >
            {actionButton.text}
          </a>
        </div>
        
        <div className="${tailwind.mobileMenu}">
          <button className="${tailwind.mobileMenuButton}">
            <span className="sr-only">Open menu</span>
            {/* Menu icon */}
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );`;
      break;
      
    case 'HeroSection':
      componentJSX = `
  return (
    <section className="${tailwind.container}">
      <div className="${tailwind.wrapper}">
        <div className="${tailwind.grid}">
          <div className="${tailwind.contentWrapper}">
            <h1 className="${tailwind.title}">{title}</h1>
            <p className="${tailwind.subtitle}">{subtitle}</p>
            <div className="${tailwind.ctaWrapper}">
              <a href={cta.url} className="${tailwind.ctaButton}">
                {cta.text}
              </a>
            </div>
          </div>
          <div className="${tailwind.imageWrapper}">
            <img src={image} alt={title} className="${tailwind.image}" />
          </div>
        </div>
      </div>
    </section>
  );`;
      break;
      
    default:
      // Generic component template
      componentJSX = `
  return (
    <div className="component ${name.toLowerCase()}">
      {/* Generated component for ${name} */}
      <h2>${name} Component</h2>
      <p>This is a generated component. Add custom JSX here.</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );`;
  }
  
  // Combine everything into a complete component
  return `import React from 'react';

${propsInterface}

const ${name}: React.FC<${name}Props> = ({
${Object.keys(props).map(prop => `  ${prop}`).join(',\n')}
}) => {${componentJSX}
};

export default ${name};
`;
};

/**
 * Generate a LandingPage component that imports and uses all components
 * @param {Array} components - Array of component specifications
 * @returns {string} - Complete LandingPage.tsx file
 */
const generateLandingPage = (components) => {
  // Generate imports
  let imports = 'import React from \'react\';\n';
  components.forEach(component => {
    imports += `import ${component.name} from './components/${component.name}';\n`;
  });
  
  // Generate component usage
  let componentUsage = '';
  components.forEach(component => {
    // Extract sample props from example
    componentUsage += `      {/* ${component.name} */}\n`;
    componentUsage += `      ${component.example}\n\n`;
  });
  
  // Combine into complete file
  return `${imports}

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
${componentUsage}
    </div>
  );
};

export default LandingPage;
`;
};

/**
 * Save a generated component to a file
 * @param {string} componentCode - The component code to save
 * @param {string} filename - The filename to save to
 */
const saveComponentToFile = (componentCode, filename) => {
  const componentsDir = path.join(__dirname, 'components');
  
  // Create components directory if it doesn't exist
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }
  
  const filepath = path.join(componentsDir, filename);
  fs.writeFileSync(filepath, componentCode);
  console.log(`Component saved to ${filepath}`);
};

/**
 * Generate all component files and landing page from components.json
 */
const generateAllComponents = () => {
  try {
    // Read components data
    const componentsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'components.json'), 'utf8'));
    
    // Generate each component file
    componentsData.forEach(component => {
      const componentCode = generateComponent(component);
      saveComponentToFile(componentCode, `${component.name}.tsx`);
    });
    
    // Generate landing page
    const landingPageCode = generateLandingPage(componentsData);
    fs.writeFileSync(path.join(__dirname, 'LandingPage.tsx'), landingPageCode);
    console.log(`LandingPage.tsx generated successfully!`);
    
    return true;
  } catch (error) {
    console.error('Error generating components:', error);
    return false;
  }
};

module.exports = {
  generatePropTypes,
  generateComponent,
  generateLandingPage,
  generateAllComponents
};

// Allow running directly from command line
if (require.main === module) {
  generateAllComponents();
} 