import RecipeCard from "@/components/recipes/RecipeCard";
import { recipes } from "@/data/recipes";

export default function Recipes() {
  return (
    <div className="flex flex-col p-6 gap-4 w-full">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
