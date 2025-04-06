export interface Recipe {
  id: number;
  title: string;
  description: string;
  thumbnailURL: string | undefined;
  ingredients: string[];
  instructions: string[];
}
