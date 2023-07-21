/*
make it such that it's reading recipe data from a JSON since our component is dynamic. It can have any recipe. The json can have these keys
'OpeningPara', 'history',  'Ingredients', 'Instructions', 'EndingPara'

*/

import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import getBasePath from "@/lib/getBasePath";
import CalloutCard from "@/components/CalloutCard";
import { json } from "stream/consumers";


export const revalidate = 60;

type Props = {
    params: {
        recipeName : string
    };
}

type RecipeData = {
    OpeningPara: string;
    History: string;
    Ingredients: string[];
    Instructions: string[];
    EndingPara: string;
}

// async function RecipePage({params: {recipeName}} : Props) {
async function RecipePage({params: {recipeName}} : Props) {

    const decodedRecipe = decodeURIComponent(recipeName);

    const res = await fetch(`${getBasePath()}/api/getRecipe`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            recipeData: recipeName
        })
    })

    const GPTdata = await res.json();

    const res_data = JSON.parse(GPTdata.content);


  return (
    <div>
        <NavBar />
        <div
        className="flex justify-center"
        style={{
          backgroundImage: `url(/images/copy-space-italian-food-ingredients.jpg)`, // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2x bg-gray-100 bg-opacity-75 rounded-lg shadow-md">
        {/* "w- bg-gray-100 bg-opacity-90 rounded-lg shadow-md" */}
          <div className="px-6 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{decodedRecipe} Recipe</h2>
            <div className="text-gray-600 mb-6">
              <p>{res_data.OpeningPara}</p>
              <p>{res_data.History}</p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h3>
            <ul className="text-gray-600 mb-6">
              {res_data.Ingredients?.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h3>
            <ol className="text-gray-600 mb-6 list-decimal pl-6">
              {res_data.Instructions?.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
            <p className="text-gray-600">{res_data.EndingPara}</p>
          </div>
        </div>
      </div>
    </div>
    

  )
}

export default RecipePage