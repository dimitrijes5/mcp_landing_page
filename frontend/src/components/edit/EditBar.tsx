import { Button } from "@/components/ui/button";
import { useEditMode } from "@/contexts/EditModeContext";

const EditBar = () => {
  const { isEditMode, toggleEditMode } = useEditMode();

  return !isEditMode && (
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between items-center border-t border-gray-200">
        <div></div>
        <p>{isEditMode ? "You're currently in edit mode" : "You're currently in view mode"}</p>
        <Button onClick={toggleEditMode}>
          {isEditMode ? "Exit Edit Mode" : "Click here to edit"}
        </Button>
      </div>
  );
};

export default EditBar;
