import React from "react"
import { categories } from "../data"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <div className="py-12 px-16 sm:px-5 flex flex-col items-center text-center bg-gray-300">
      <h1 className="text-slate-700 text-4xl font-extrabold mb-4">
        Here is our Top Categories
      </h1>

      <p className="max-w-3xl text-lg">
      Welcome to RentRite, your go-to platform for finding the perfect rental home, no matter where you are in the world. Whether you're relocating for work, planning an extended vacation, or just looking for a new place to call home, RentRite makes the process seamless and stress-free...
      </p>

      <div className="flex flex-wrap py-12 justify-center gap-5">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/listings/category/${category.label}`}>
            <div
              className="relative flex justify-center items-center w-[250px] h-[200px] cursor-pointer"
              key={index}
            >
              <img
                src={category.img}
                alt={category.label}
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute w-full h-full bg-black bg-opacity-55"></div>

              <div className="relative text-white text-center">
                <div className="text-5xl">{category.icon}</div>

                <p className="font-semibold">{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
