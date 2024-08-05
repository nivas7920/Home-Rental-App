import React from "react"

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl lg:mx-auto p-5 md:px-10 lg:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]">
            RentRite: Feel at Home, Whatever You Are!
          </h1>

          <p className="text-[20px] md:text-[24px] font-normal leading-[30px] md:leading-9 tracking-[2%]">
          Welcome to RentRite, your go-to platform for finding the perfect rental home, no matter where you are in the world. Whether you're relocating for work, planning an extended vacation, or just looking for a new place to call home, RentRite makes the process seamless and stress-free.....
          </p>
        </div>

        <img
          src="https://media.istockphoto.com/id/155700839/photo/a-beautiful-home-available-for-rent.jpg?s=1024x1024&w=is&k=20&c=Fx6PnBDpDp2ayw7hA3EABr6a8aDGldqN8zVVuquYgYI="
          alt=""
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center"
        />
      </div>
    </div>
  )
}

export default Hero
