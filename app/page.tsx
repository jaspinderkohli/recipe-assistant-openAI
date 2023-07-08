'use client'

import NavBar from "@/components/NavBar"
import { useState } from "react"
import { useRouter } from "next/navigation";

type recipeName = {
  recipeName: string
}

export default function Home() {

  const [recipeName, setRecipeName] = useState<recipeName>({recipeName: ""});
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form submission
  
    console.log(recipeName); // Access the recipeName state value
    // You can perform further actions, such as redirecting to the recipe page
    router.push(`/recipe/${recipeName.recipeName}`)
  };

  return (
    <div>
      <NavBar />
      <div
        className="flex justify-center"
        style={{
          backgroundImage: `url(/images/home-bg.jpg)`, // Replace with the path to your background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Interactive Recipe Assistant</h1>
        <p className="text-lg mb-8">Random Fact: Did you know that...</p>
        <div className="w-96">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-bold" htmlFor="recipeInput">
              What do you want to cook today?
            </label>
            <input
              id="recipeInput"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              placeholder="Enter dish name"
              value={recipeName.recipeName} // Bind the value to the state
              onChange={(e) => setRecipeName({ recipeName: e.target.value })} // Update the state onChange
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Lets Cook
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}
