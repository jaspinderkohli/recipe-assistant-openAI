'use client'

import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Interactive Recipe Assistant</h1>
        <p className="text-lg mb-8">Random Fact: Did you know that...</p>
        <div className="w-96">
          <form>
            <label className="block mb-2 font-bold" htmlFor="recipeInput">
              What do you want to cook today?
            </label>
            <input
              id="recipeInput"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              type="text"
              placeholder="Enter dish name"
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
  )
}
