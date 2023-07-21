import { ClockIcon } from "@heroicons/react/outline";

function RecipeLoading() {
  return (
    <div className="bg-gradient-to-r from-[#394F68] to-[#183B7E] min-h-screen flex flex-col items-center justify-center text-slate-500">
      <ClockIcon className="h-24 w-24 animate-spin text-green-500" color="green" />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Recipe Information
      </h1>
      <h2 className="text-xl font-bold text-center animate-pulse">
        Hold on, we are fetching the recipe details for you!
      </h2>
    </div>
  );
}

export default RecipeLoading;
