import { useState } from "react";
import Shimmer from "./Shimmer";
function App() {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

    // if (!loading) {
    //     return (
    //       <>
    //         <div className="flex justify-center flex-wrap px-7   ">
    //           <Shimmer />
    //           <Shimmer />
    //           <Shimmer />
    //           <Shimmer />
    //           <Shimmer />
    //         </div>
    //       </>
    //     );
    // }
  return (
    <>
      <div className="flex justify-center text-white text-[30px] ">
        <h3 className="bg-red-500 px-10 pb-3 rounded-b-md shadow-md tex">
          🤖 AI Image Generator 🤖
        </h3>
      </div>
      <div className="flex py-[3%]">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="focus:outline-0 text-white text-2xl px-5 bg-[#333f4a] w-full shadow shadow-lg  ml-[10%] py-4 rounded-md "
          type="text"
          placeholder="Convert Your Thoughts To Images. Ex- 'a blue ostrich eating melon'"
        ></input>
        <button
          onClick={getImages}
          className=" inline-block align-middle bg-emerald-500 shadow-lg shadow-green-500/50  text-white text-[1.3rem]  rounded-md mr-[8%] ml-5 py-4 px-3"
        >
          <span className="whitespace-nowrap">Generate🚀</span>
        </button>
      </div>
      <div className="flex justify-center flex-wrap px-7">
        {loading ? (
          <div className="flex flex-wrap justify-center shadow-md">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
          </div>
        ) : (
          images?.map((image, i) => (
            <img
              className=" m-3 shadow-md shadow-black-500/50 h-[600px]  rounded-md "
              key={i}
              src={image.url}
            />
          ))
        )}
      </div>
    </>
  );
}
export default App;
