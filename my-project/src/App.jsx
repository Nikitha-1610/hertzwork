
import './App.css'

function App() {
  

  return (
    <section className="bg-black h-scroll w-scroll flex items-center justify-center text-center flex-col overflow-visible">
      <h1 className=" text-glow text-[50px] font-bold text-[#fe5d26] m-10">What We Do?</h1>
      <p className="text-[36px] text-center mb-8" >
        We Develop Products That People Love to Use.
      </p>
      <img className="h-[500px] w-[591] items-center justify-center" src='./src/assets/images/img1.png'/>
      <p className="text-center text-white text-[28px] p-[10px] overflow-x-hidden relative leading-[45px]">We specialize in developing products that not only meet user needs but exceed their expectations. 
        With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality, 
        we craft solutions that people genuinely love to use. Our goal is to create experiences that are intuitive, 
        engaging, and leave a lasting impression, ensuring that every product we deliver becomes an integral part of 
        our users’ lives.</p>
        <h1 className=" text-glow text-[50px] font-bold text-white-500 mb-4 flex flex-row mt-[147px]"><h1 className="text-[#fe5d26] underline">D</h1>esign Services</h1>
        <div className="flex gap-1 ml-0 mr-[auto] mt-[100px] p-10">
  <h1 className="text-[32px] font-bold text-white flex">In<span className="text-[#fe5d26] underline ml-2">M</span>obile Application</h1>
  <img
    src="./src/assets/images/img2.png"
    alt="Icon"
    className="h-[37px] ml-0 item-end"
  />
</div>

<div className="bg-[#1d1d1f] h-[594px] w-[870px] rounded-tl-[24px] rounded-bl-[24px] ml-[auto] mr-0 mt-[50px]"></div>
      </section>
  )
}

export default App
