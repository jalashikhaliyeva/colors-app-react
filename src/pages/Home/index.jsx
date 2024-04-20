import React from "react";
import Header from "../../components/Header";

function Home({ groups }) {
  return (
    <>
      <Header />
      <h4 className="flex pt-10 pb-10">Home Page</h4>
      {groups &&
        groups?.map((group, index) => (
          <div key={index} className="flex">
            {group.map((color, idx) => (
              <div
                key={idx}
                className="outline-orange-300 w-32 h-32 mt-1.5 mb-1 border border-stone-600 text-yellow-100"
                style={{ backgroundColor: color.code }}
              >{color.name}</div>
            ))}
          </div>
        ))}
    </>
  );
}

export default Home;
