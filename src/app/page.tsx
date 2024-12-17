import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col text-black">
      <div className="w-screen h-[10%] bg-[#D9D9D9]"></div>
      <div className="flex w-screen h-[90%]  items-center">
        <div className="flex flex-col w-[45%] h-[100%] justify-center ml-8 px-4 gap-6 -mt-8">
          <h1 className="text-3xl font-bold font-inter">
            Welcome to our Website
          </h1>
          <p className="font-normal text-[20px] w-68">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard
          </p>
          <button className="text-white w-[140px] h-[38px]  bg-black mt-4">
            Contact Us
          </button>
        </div>
        <div className="w-[55%] h-[100%] items-center">
          <div className="w-[100%] h-[100%] flex items-center justify-center">
            <Image
              width={300}
              height={250}
              className="w-[500px] h-[400px] px-4"
              src="/images/hero.png"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
