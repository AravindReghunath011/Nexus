import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full text-stone-300">
      <div className="  m-auto h-full relative">
        <div className="absolute text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] ">
          <h1 className="text-8xl  w-[80%] m-auto font-bold uppercase font-clash-semibold">
            Shopify Plus <br /> Agency Partner <br /> for Today's Leading <br />{" "}
            DTC + B2B Brands
          </h1>
          <div className="flex justify-around w-full mt-36 font-clash-medium">
            <span>KERALA.(INDIA)</span>
            <span>WEBSITE+APPLICATION DEVELOPMENT</span>
            <span>FOUNDED IN 2024</span>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div className=" h-[55vh] w-[95%]"></div>

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
        <div className="mt-36">
          <p className="text-2xl font-clash-medium">
            Industry-recognized Shopify Plus ecommerce <br /> agency, driven to
            amplify the value of your brand.
          </p>
          <hr className="border-b border-b-stone-800 mt-10" />
          <h1 className="text-8xl mt-5 font-bold uppercase font-clash-semibold">Featured</h1>
          <h1 className="text-8xl font-bold flex justify-end uppercase">
            <span className="self-end font-clash-semibold">Works</span>
          </h1>
          <div className="flex gap-10 mt-20">
          <ProjectCard/>
          <ProjectCard/>
          </div>
          <div className="flex gap-10 mt-20">
          <ProjectCard/>
          <ProjectCard/>
          </div>
          <div className="w-full text-center mt-28">

          <h1 className="text-5xl font-medium underline font-clash-medium">More +</h1>
          </div>

          <div className="mt-64 font-clash-semibold">
            <h1 className="text-8xl font-bold uppercase text-center tracking-tight">Evolve with Nexus.</h1>
            <h1 className="text-8xl font-bold uppercase text-center tracking-tight">we'd love to hear from <br/>  you.</h1>

            <h1 className="text-5xl font-medium underline text-center mt-10 font-clash-medium">Get in touch </h1>
          </div>

        </div>
      </div>

      <footer className="h-full  m-auto pb-10 bg-neutral-900 mt-14">
        <div className="w-[90%] m-auto">
          <div className="h-[70vh] w-full  flex">
            <section className="w-[50%]  flex flex-col justify-center gap-14">
              <h2 className="text-2xl font-clash-medium">
              Industry-recognized Shopify Plus ecommerce <br/> agency, driven to amplify the value of your brand.
              </h2>
              <h1 className="text-5xl font-bold underline font-clash-semibold">hello@nexus.com</h1>
            </section>
            <section className="w-[50%]  flex items-center">
            <div className="flex justify-around w-full text-4xl font-clash-medium">
            <span>IG</span>
            <span>IN</span>
            <span>X <span className="text-2xl">(Twitter)</span> </span>
          </div>
            </section>
          </div>
          <div>
          <div className="flex justify-around w-full mt-28 font-clash-medium">
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
