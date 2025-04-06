import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/models/Recipe";
import { CookingPot } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card className="flex flex-row">
      <div className="p-6">
        {recipe.thumbnailURL ? (
          <Image
            src={recipe.thumbnailURL}
            alt={"Picture of " + recipe.title}
            width={128}
            height={128}
            className="object-cover rounded w-48 h-48"
          />
        ) : (
          <div className="flex items-center justify-center w-48 h-48 rounded bg-gray-200">
            <CookingPot size={128} />
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-2">
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Some info</p>
        </CardContent>
        <CardFooter>
          <p>Tags, etc.</p>
        </CardFooter>
      </div>
    </Card>
  );
}
