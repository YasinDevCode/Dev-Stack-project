import { FiX } from "react-icons/fi";
import type { Technology } from "../../types/technology";

interface StackPanelProps{
  selectedStack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function StackPanel({
  selectedStack,
  onRemove,
  onRemoveAll,
}: StackPanelProps){
  const isEmpty = selectedStack.length === 0;

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5">

      <div>
        <h3 className="text-[17px] font-bold text-[#172033]">
          Your Stack
        </h3>

        <p className="mt-1 text-[11px] text-gray-400">
          {isEmpty
            ? "No technologies selected yet."
            : `${selectedStack.length} Technology Selected`}
        </p>
      </div>

      {isEmpty ? (
        <div className="mt-4 grid min-h-[100px] place-items-center rounded-lg border border-dashed border-gray-200 px-4 text-center text-xs text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-2">
            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="flex min-h-[52px] items-center rounded-lg border border-gray-200 p-2"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-8 w-8 object-contain"
                />

                <div className="ml-2 flex-1">
                  <strong className="block text-[11px] text-[#172033]">
                    {technology.name}
                  </strong>

                  <span className="text-[8px] text-gray-400">
                    {technology.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="btn btn-ghost btn-circle btn-sm text-gray-400 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="btn btn-outline mt-5 w-full border-red-200 text-[11px] font-medium text-red-500 hover:bg-red-50 hover:text-red-600"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;