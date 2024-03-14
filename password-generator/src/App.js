import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
      str+= "0123456789"
    }
    if(character){
      str+= "!@#$%^&*()_+~-={}[]"
    }
    for(let i = 1;i<=length;i++){
      let n = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(n)
    }
    setPassword(pass)
  }, [length, number, character, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [number, character, length, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-xl my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            name='passLength'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="passLength">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={number}
            id='numberInput'
            onChange={()=>{
              setNumber((prev) => !prev);
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={character}
            id='charInput'
            onChange={()=>{
              setCharacter((prev) => !prev);
            }} 
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
      
    </>
  );
}

export default App;
