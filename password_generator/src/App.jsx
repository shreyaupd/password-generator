import { useEffect, useState, useCallback } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [numcheck, setNumcheck] = useState(false);
  const [charcheck, setCharcheck] = useState(false);
  const [password, Setpassword] = useState("");

  const password_generator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numcheck) {
      str += "0123456789";
    }
    if (charcheck) {
      str += "~!@#$%^&*`";
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    Setpassword(pass);
  }, [length, numcheck, charcheck, Setpassword]);

  useEffect(() => {
    password_generator();
  }, [length, numcheck, charcheck, password_generator]);
  return (
    <>
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <h1 className=" absolute text-slate-500 mb-56 text-4xl ">
          Password Generator
        </h1>
        <div className="w-1/2 h-40 bg-slate-400 flex items-center">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="w-4/5 h-12 bg-gray-50 ml-3 mb-20 rounded-2xl text-black text-3xl outline-none pl-2"
          />
          <button className="w-24 h-12 bg-gray-50 ml-3 mb-20 rounded-2xl text-slate-400 text-xl outline-none p-2 shrink-0">
            Copy
          </button>
          <div className=" absolute flex items-center ml-3 gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-emerald-100">Length: {length}</label>
          </div>
          <div className="absolute flex items-center ml-64 gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numcheck}
              id="numberInput"
              onChange={() => setNumcheck(prev => !prev)}
            />
            <label htmlFor="numberInput" className="text-emerald-100">
              Numbers
            </label>
          </div>
          <div className="absolute flex items-center ml-96 gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charcheck}
              id="charInput"
              onChange={() => setCharcheck(prev => !prev)}
            />{" "}
            {/* makes charcheck true when false and false when true whenever you click in check button. */}
            <label htmlFor="charInput" className="text-emerald-100">
              Characteres
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
