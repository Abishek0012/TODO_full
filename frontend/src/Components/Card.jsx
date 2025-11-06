import React from "react";

function Card({ data, showDelete = false }) {
  return (
    <div>
      <div className="ease-in card bg-base-200 h-full min-h-32 w-full min-w-80 transform shadow-sm transition-transform duration-300 hover:scale-110">
        <div className="card-body">
          <h1>{data.content}</h1>
          <div className="card-actions mt-3 justify-center space-x-5">
            {showDelete && (
              <button className="btn btn-primary transform border-none bg-green-500 shadow-none transition-transform duration-300 hover:scale-110 hover:bg-green-600">
                Begin Task
              </button>
            )}
            <button className="transform btn btn-primary bg-red-500 hover:bg-red-600 border-none shadow-none transition-transform duration-300 hover:scale-110">
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
