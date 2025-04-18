import { useState, useEffect } from 'react';
import { usePage } from '@/contexts/PageContext';
import { NavbarProps } from '@/types';
// Define component properties interface
interface ComponentEditorProps {
  componentName: string;
  onBack: () => void;
}

// Define component property types for each component
interface ComponentProps {
  [key: string]: {
    description: string;
    props: {
      [key: string]: string;
    };
  };
}

const COMPONENT_PROPS: ComponentProps = {
  NavBar: {
    description: "Top navigation bar with logo and menu links",
    props: {
      logoSrc: "string",
      links: "Array<{ label: string; href: string }>",
      sticky: "boolean"
    }
  },
};

const ComponentEditor = ({ componentName, onBack }: ComponentEditorProps) => {
  const { page, setNavbar } = usePage();
  const [formState, setFormState] = useState<Record<string, any>>({});
  
  // Get component details
  const componentDetails = COMPONENT_PROPS[componentName];

  useEffect(() => {
    // Here you would load the initial values from your page context
    // This is a placeholder for now
    setFormState(componentDetails.props);
  }, [componentName]);

  const handleInputChange = (propName: string, value: any) => {
    setFormState((prev: Record<string, any>) => ({
      ...prev,
      [propName]: value
    }));
  };

  const handleSave = () => {
    // Save component changes - to be implemented
    switch (componentName) {
      case 'NavBar':
        setNavbar({
          ...page?.navbar,
          ...formState
        } as NavbarProps);
        break;
    }
  };

  return (
    <div className="w-full h-full min-h-screen bg-white shadow-lg border-l border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-800">Edit {componentName}</h2>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <p className="text-sm text-gray-600">{componentDetails.description}</p>
      </div>

      {/* Properties */}
      <div className="py-4 px-6 overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Properties</h3>
        
        <div className="space-y-4">
          {Object.entries(componentDetails.props).map(([propName, propType]) => (
            <div key={propName} className="border rounded-md p-4">
              <div className="flex justify-between items-start mb-2">
                <label className="text-sm font-medium text-gray-700">{propName}</label>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">{propType}</span>
              </div>
              
              {/* Simple input for string types - in a real app you'd have custom editors for complex types */}
              {propType === "string" ? (
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formState[propName] || ''}
                  onChange={(e) => handleInputChange(propName, e.target.value)}
                  placeholder={`Enter ${propName}...`}
                />
              ) : propType === "boolean" ? (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={!!formState[propName]}
                    onChange={(e) => handleInputChange(propName, e.target.checked)}
                  />
                  <label className="ml-2 text-sm text-gray-700">Enable</label>
                </div>
              ) : (
                <div className="text-sm text-gray-500 italic">
                  Complex type editor would go here
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentEditor; 