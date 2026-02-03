import { useState } from "react";
import storiesData from "../../data/storiesData";
import Story from "./Story";
import { X } from "lucide-react";

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);


  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide">
        {storiesData.map((story) => (
          <Story key={story.id} story={story} onOpen={setActiveStory} />
        ))}
      </div>

      {activeStory && (
        <div className=" flex flex-col justify-center z-50 fixed bg-black/80 inset-0 p-3 min-h-dvh">
          <button onClick={() => setActiveStory(null)} className="text-white"><X size={50}/></button>
          <img src={activeStory.storyImg} alt="story" className="border-2 border-gray-300 rounded-lg"/>
        </div>
      )}
    </div>
  );
}

export default Stories;