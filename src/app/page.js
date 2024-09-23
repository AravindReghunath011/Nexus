import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full text-stone-300">
      <div className="  m-auto h-full relative">
        <div className="absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] ">
          <h1 className="text-3xl xl:text-8xl  w-[80%] m-auto font-bold uppercase font-clash-semibold">
            Shopify Plus <br /> Agency Partner <br /> for Today's Leading  {" "}
            DTC + B2B Brands
          </h1>
          <div className="flex flex-col md:flex-row text-sm justify-around w-full mt-36 font-clash-medium">
            <span className="hidden lg:visible">KERALA.(INDIA)</span>
            <span>WEBSITE+APPLICATION DEVELOPMENT</span>
            <span>FOUNDED IN 2024</span>
            <span className="hidden lg:visible">SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div className=" h-[30vh] xl:h-[55vh] w-[95%]"></div>

        <div className="w-full h-[80vh] ">
          <video
            className="w-full    object-cover h-full "
            src="/pivot-home-loop_720p60.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div className="w-[90%] m-auto h-full ">
        <div className=" mt-10 xl:mt-36">
          <p className=" text-2xl font-clash-regular xl:text-2xl xl:font-clash-medium">
            Industry-recognized Shopify <br/> Plus ecommerce <br className="hidden" /> agency, <br /> driven to
            amplify the value of <br/> your brand.
          </p>
          <hr className="border-b  border-b-stone-800 mt-5 xl:mt-10" />
          <h1 className=" text-5xl xl:text-8xl mt-14 xl:mt-5 font-bold uppercase font-clash-semibold">Featured</h1>
          <h1 className="text-5xl xl:text-8xl font-bold flex justify-end uppercase">
            <span className="self-end font-clash-semibold">Works</span>
          </h1>
          <div className="flex flex-col xl:flex-row gap-10 mt-20">
          <ProjectCard/>
          <ProjectCard/>
          </div>
          <div className="flex flex-col xl:flex-row gap-10 mt-10 xl:mt-20">
          <ProjectCard/>
          <ProjectCard/>
          </div>
          <div className="w-full text-center mt-12 xl:mt-28">

          <h1 className="text-3xl xl:text-5xl font-medium underline font-clash-medium">More +</h1>
          </div>

          <div className="mt-32 xl:mt-64 font-clash-semibold">
            <h1 className="text-5xl xl:text-8xl font-bold uppercase text-center tracking-tight">Evolve with Nexus.</h1>
            <h1 className="text-5xl xl:text-8xl font-bold uppercase text-center tracking-tight">we'd love to hear from <br/>  you.</h1>

            <h1 className="text-3xl xl:text-5xl font-medium underline text-center mt-10 font-clash-medium">Get in touch </h1>
          </div>

        </div>
      </div>

      <footer className="h-full  m-auto pb-10 bg-neutral-900 mt-14">
        <div className="w-[90%] m-auto">
          <div className="h-[50vh] xl:h-[70vh] w-full  flex flex-col xl:flex-row">
            <section className="w-full xl:w-[50%]  flex flex-col justify-center gap-14">
              <h2 className="text-lg mt-5 xl:text-2xl font-clash-medium">
              Industry-recognized Shopify Plus ecommerce <br className="hidden xl:inline"/> agency, driven to amplify the value of your brand.
              </h2>
              <h1 className="text-3xl xl:text-5xl   underline font-clash-medium xl:font-clash-semibold">hello@nexus.com</h1>
            </section>
            <section className="w-full xl:w-[50%] mt-14 xl:mt-0  flex items-center">
            <div className="flex gap-5 xl:justify-around w-full text-2xl xl:text-4xl font-clash-medium">
            <span>IG</span>
            <span>IN</span>
            <span>X  </span>
          </div>
            </section>
          </div>
          <div>
          <div className="flex flex-col xl:flex-row text-center justify-around w-full mt-5 xl:mt-28  text-sm xl:text-base font-clash-medium">
            <span>KERALA.(INDIA)</span>
            <span>WEBSITE+APPLICATION DEVELOPMENT</span>
            <span>FOUNDED IN 2024</span>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <hr className="border-b border-b-stone-800 mt-5" />
          </div>
          </div>
      </footer>
    </div>
  );
}
