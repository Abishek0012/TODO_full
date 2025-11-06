import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import list from "../assets/list.json";

function Todo() {
  const filterList = list.filter((item)=>item.content.length !== 0)
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mt-30 flex grow flex-col items-center justify-start p-6 text-center">
        <h1 className="mb-6 text-3xl font-bold">
          Create Your <span className="text-indigo-400">Todo</span>
        </h1>

        <div className="flex w-full flex-col justify-center gap-4 sm:w-1/2 sm:flex-row">
          <input
            type="text"
            placeholder="Type your todo here..."
            className="input input-bordered w-full outline-none"
          />
          <button className="btn btn-primary">ADD</button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filterList.map((item) => (
            <Card data={item} key={item.id} showDelete={true}/>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Todo;
