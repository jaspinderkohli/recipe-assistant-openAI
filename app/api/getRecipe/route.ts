import { NextResponse } from "next/server";
import { openai } from "@/openai";

export async function POST(request: Request) {
    // weathersummary is the name of the engine we created in StepZen
    const { recipeData } = await request.json();
    // const { recipe}
    // const recipe = await
    console.log("recipeName -->", recipeData);

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        // model: "davinci",
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: `Pretend you are a chef at a famouse restaurant. be energetic and enthusiastic. Introduce yourself as a AI Chef. State the dish name that you are providing a recipe for. Provide an interesting fact about the dish.
                Return the data in a JSON format. The JSON has 'OpeningPara', 'History',  'Ingredients', 'Instructions', 'EndingPara'`,
            },
            {
                role: 'user',
                content: ` Hi there, can I get a recipe for ${JSON.stringify(recipeData)}`,
            },
        ]
    });

    const { data } = response;

    console.log("Data from OpenAI: ", data);

    return NextResponse.json(data.choices[0].message);
}