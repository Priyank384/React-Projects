import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>{setcolor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={()=>{setcolor("green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={()=>{setcolor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={()=>{setcolor("violet")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick={()=>{setcolor("yellow")}}
          className="outline-none px-4 py-1 rounded-full text-red shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={()=>{setcolor("black")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={()=>{setcolor("white")}}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>White</button>
        </div>
      </div>
    </div>
  );
}

export default App;
