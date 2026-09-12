import TechnologyCard from "../TechnologyCard/TechnologyCard";
import StackPanel from "../StackPanel/StackPanel";

import type { Technology } from "../../types/technology";

interface TechnologySectionProps{
  technologies: Technology[];
  selectedStack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function TechnologySection({
  technologies,
  selectedStack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologySectionProps){
  return (
    <section
      id="technologies"
      className="mx-auto max-w-[1080px] px-5 py-16"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#172033]">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Pick technologies to build your ideal development stack.
        </p>
      </div>

      {/* Cards + Stack */}
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(240px,1fr)]">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              isSelected={selectedStack.some(
                (item) => item.id === technology.id
              )}
              onAdd={onAdd}
            />
          ))}
        </div>

        {/* Stack */}
        <StackPanel
          selectedStack={selectedStack}
          onRemove={onRemove}
          onRemoveAll={onRemoveAll}
        />
      </div>
    </section>
  );
}

export default TechnologySection;