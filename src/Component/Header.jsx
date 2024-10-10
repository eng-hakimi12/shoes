function Header() {
    return <div className=" ">
        
<div className="flex justify-between font-primaryFont  text-black h-[160px] ">
              <div>
              <h1 className="font-bold sm:text-5xl text-2xl mt-5 sm:ml-[200px] ml-8  "> <span className="text-white">Eng</span> Hakimi</h1>

              </div>
            <ul className="flex gap-10  text-black text-4xl mt-7">
              <li className="text-black hover:text-white">Home</li>
              <li className="text-black hover:text-white">About</li>
              <li className="text-black hover:text-white">Page</li>
              <li className="text-black hover:text-white">Contact</li>
            </ul>
          <div className="mr-[150px] flex justify-between">
            
            <input className="w-[300px]  mr-[350px]  ml-[10px] h-[70px] mt-6  rounded-[10px]  border-4 border-solid outline-none border-sky-500 bg-white" type="Search" />
        </div>
            </div>


    </div>
}

export default Header