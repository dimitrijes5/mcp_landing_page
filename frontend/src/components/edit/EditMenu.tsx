import { useEditMode } from "@/contexts/EditModeContext";

const EditMenu = () => {
  const { toggleEditMode } = useEditMode();
  return <div className="w-full h-full min-h-screen px-4 py-4 border-l-2 border-gray-400">
    <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">Edit the page</h2>
        <h2 className="text-2xl font-bold cursor-pointer" onClick={() => {toggleEditMode()}}>X</h2>
    </div>
  </div>;
};

export default EditMenu;
