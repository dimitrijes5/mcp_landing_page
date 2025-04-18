import { useEditMode } from "@/contexts/EditModeContext";
import { useState } from "react";
import ComponentEditor from "./ComponentEditor";

const COMPONENTS_LIST = ["NavBar","Hero","Services","HowItWorks","SocialProof","WhyChooseUs","MeetTheTeam","MapContactForm","FAQ","Footer"]

const EditMenu = () => {
  const { toggleEditMode } = useEditMode();

  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [showComponentEditor, setShowComponentEditor] = useState(false);

  const handleComponentClick = (component: string) => {
    setSelectedComponent(component);
    console.log(component);
  };

  const handleEditClick = (component: string) => {
    setSelectedComponent(component);
    setShowComponentEditor(true);
  };

  const handleBackToList = () => {
    setShowComponentEditor(false);
  };

  if (showComponentEditor && selectedComponent) {
    return <ComponentEditor componentName={selectedComponent} onBack={handleBackToList} />;
  }

  return (
  <div className="w-full h-full min-h-screen bg-white shadow-lg border-l border-gray-200">
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Page Editor</h2>
        <button 
          onClick={() => {toggleEditMode()}} 
          className="text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    </div>
    
    <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Components</h3>
    </div>
    
    <div className="py-2 px-2 overflow-y-auto">
        {COMPONENTS_LIST.map((component) => (
            <div 
              key={component} 
              onClick={() => {handleComponentClick(component)}} 
              className={`flex items-center justify-between px-3 py-3 my-1 rounded-md transition-all duration-200 
                ${selectedComponent === component 
                  ? 'bg-blue-50 border-l-4 border-blue-500' 
                  : 'hover:bg-gray-50 border-l-4 border-transparent'}`}
            >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${selectedComponent === component ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                  <span className="text-base font-medium text-gray-800">{component}</span>
                </div>
                <button 
                  className="text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditClick(component);
                  }}
                >
                  Edit
                </button>
            </div>
        ))}
    </div>
    </div>
    );
};

export default EditMenu;
