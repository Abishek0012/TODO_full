import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="container mx-auto my-10 flex max-w-screen-2xl flex-col justify-center px-4 md:flex-row md:px-20">
      {/* Main content */}
      <div className="mt-12 w-full md:mt-32 md:w-1/2">
        <div className="space-y-8 text-center">
          <h1 className="text-3xl font-bold">
            Hello, welcome to the{" "}
            <span className="text-indigo-400"> TODO APP </span> <br /> create
            new todo list so you could use it later
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, eos
            minus iusto sit ducimus totam facilis, porro quod dolores
            accusantium incidunt! Libero eligendi praesentium non!
          </p>
          <div>
            <Link to='/todo' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
