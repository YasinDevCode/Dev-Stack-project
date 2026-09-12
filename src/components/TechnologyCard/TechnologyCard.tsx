import { FiStar } from "react-icons/fi";
import type { Technology } from "../../types/technology";

interface TechnologyCardProps{
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps){
  return (
   <article
  className={`card border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
    isSelected
      ? "border-pink-500 ring-2 ring-pink-100"
      : "border-gray-200"
  }`}
>
      <div className="card-body p-5">

        {/* Icon + Badge*/}
        <div className="flex items-center justify-between">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-9 w-9 object-contain"
          />

          <span className="badge badge-success badge-outline text-[9px]">
            {technology.badge}
          </span>
        </div>

        {/*Name */}
        <h3 className="mt-2 text-[17px] font-bold text-[#172033]">
          {technology.name}
        </h3>

        {/*Description */}
        <p className="text-[11px] leading-6 text-gray-500">
          {technology.description}
        </p>

        {/*Information */}
        <div className="mt-auto flex items-center justify-between gap-2 py-4 text-[9px] text-gray-500">
          <span className="rounded bg-gray-100 px-2 py-1">
            {technology.category}
          </span>
          

          <span className="hidden sm:inline">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1">
            <FiStar className="fill-yellow-400 text-yellow-400" />
            {technology.rating}
          </span>
        </div>

        {/*Add Button */}
        <button
          type="button"
          disabled={isSelected}
          onClick={() => onAdd(technology)}
          className={`btn w-full border-none text-[11px] font-medium ${
            isSelected
              ? "cursor-not-allowed bg-gray-400 text-white"
              : "bg-[#0c1220] text-white hover:bg-gray-800"
          }`}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;