import React from 'react';
import book from '../../assets/Books.png'

const Hero = () => {
    return (
      <div className="container w-full h-screen flex flex-col-reverse md:flex-row justify-around items-center">
        <div className="md:w-[50%]">
          <h1 className="font-bold md:text-6xl text-3xl">
            Books to freshen up your bookshelf
          </h1>
          <button className="my-10 btn bg-[#23BE0A] text-white ">
            View the List
          </button>
        </div>
        <div>
          <img src={book} alt="banner image" srcset="" />
        </div>
      </div>
    );
};

export default Hero;