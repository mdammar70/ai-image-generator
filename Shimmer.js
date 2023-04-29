import React from "react";

function Shimmer() {
  return (
    <>
      <div className="p-5 animate-pulse overflow-y-auto scrollbar-hide">
        <div className="h-[600px] w-[600px] bg-slate-700 rounded-md"></div>
      </div>
    </>
  );
}
export default Shimmer;
