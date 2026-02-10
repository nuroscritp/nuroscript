export default function Login() {
  return (
    <>

      <div className="w-full h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-10">

        <h1 className="text-2xl lg:text-3xl text-white"><span className="text-white/80">Welcome to</span> nuroscript</h1>
        <h1 className="text-2xl lg:text-3xl text-white mt-10">Login</h1>

        <div className="flex flex-col gap-5 mt-10 w-[350px] lg:w-[400px]">
          
          <input type="email" placeholder="Email" className="border-2 border-white rounded-lg text-white py-2 px-5 " />
          <input type="password" placeholder="Password" className="border-2 border-white rounded-lg text-white py-2 px-5" />

          <div className="flex items-center justify-end px-1 "><button className="text-white/80 hover:text-white cursor-pointer">Forgot password?</button></div>

          <button className=" w-[350px] lg:w-[400px] bg-white text-black py-2 rounded-lg hover:bg-[#4f4f4f] hover:text-white cursor-pointer">Login</button>
          
        </div>
      </div>

    </>
  );
}
