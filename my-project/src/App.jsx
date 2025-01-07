
import './App.css'

function App() {
  

  return (
    <section className="bg-black h-scroll w-scroll flex items-center justify-center text-center flex-col overflow-hidden">
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

<div class="relative h-[594px] w-[870px] flex items-end rounded-tl-[24px] rounded-bl-[24px] mr-0 ml-[auto] bg-[#1d1d1f]">
  <div class="absolute top-1/4 right-0 transform translate-x-3/4 -translate-y-1/2">
    <div class="w-[260px] h-[260px] bg-orange-500 rounded-full"></div>
  </div>
 
  <div class="relative">
    <img src="./src/assets/images/img3.png" alt="Phones" class="w-[820px] h-[458.75px] h-auto" />
  </div>
</div>



<div className="mt-[80px] px-10">
  <div className="flex justify-around text-left text-white gap-[20px] items-start ">
    <div className="w-[300px]">
      <h2 className="text-[22px] font-bold flex items-center gap-2">
        <span className="icon">📋</span> Research & Discovery
      </h2>
      <hr className="border-t border-gray-500 mt-2 mb-4" />
      <p className="text-gray-500 text-[16px] leading-[24px]">
        We start by understanding your vision, target audience, and market trends. This ensures our designs align
        with your goals and resonate with your users.
      </p>
    </div>
    <div className="w-[300px]">
      <h2 className="text-[22px] font-bold flex items-center gap-2">
        <span className="icon">🔍</span> Ideation
      </h2>
      <hr className="border-t border-gray-500 mt-2 mb-4" />
      <p className="text-gray-500 text-[16px] leading-[24px]">
        Through brainstorming and wireframing, we create innovative concepts and layouts, focusing on
        functionality, aesthetics, and user experience.
      </p>
    </div>
    <div className="w-[300px]">
      <h2 className="text-[22px] font-bold flex items-center gap-2">
        <span className="icon"></span> Design & Prototyping
      </h2>
      <hr className="border-t border-gray-500 mt-2 mb-4" />
      <p className="text-gray-500 text-[16px] leading-[24px]">
        Our team transforms ideas into detailed, visually appealing designs. Interactive prototypes allow you to
        experience the look and feel before finalization.
      </p>
    </div>
    <div className="w-[300px]">
      <h2 className="text-[22px] font-bold flex items-center gap-2">
        <span className="icon">✅</span> Review & Refinement
      </h2>
      <hr className="border-t border-gray-500 mt-2 mb-4" />
      <p className="text-gray-500 text-[16px] leading-[24px]">
        We incorporate feedback and refine designs to perfection, ensuring the final product meets your
        expectations and is ready for implementation.
      </p>
    </div>
  </div>
  <p className="text-center text-gray-500 text-[20px] px-[50px] leading-[30px] max-w-[1300px] mx-auto mt-9">
  We specialize in developing products that not only meet user needs but exceed their expectations.
  With a perfect balance of cutting-edge technology, thoughtful design, and unmatched functionality,
  we craft solutions that people genuinely love to use. Our goal is to create experiences that are
  intuitive, engaging, and leave a lasting impression, ensuring that every product we deliver
  becomes an integral part of our users’ lives.strt
</p>
<h1 className="text-[32px] font-bold text-white flex mt-8">In<span className="text-[#fe5d26] underline ml-2">W</span>eb Application</h1>
<img className="h-[690.36px] w-[1210.36] t-[2620px] l-[500px] items-center justify-center" src='./src/assets/images/img4.png'/>

<h1 className="text-center text-[28px] font-bold text-white flex mt-8"><span className="text-[#fe5d26] underline ml-2">T</span>ransform Your Digital Presence with Exceptional Website Design</h1>

</div>


      </section>
  )
}

export default App
