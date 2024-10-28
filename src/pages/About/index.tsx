import Button from "@/components/Button";
import { teams, values } from "@/constants/data";

import circle from "@/assets/icons/circle.svg";
import about1 from "@/assets/images/about (1).png";
import about2 from "@/assets/images/about (2).png";
import about3 from "@/assets/images/about (3).png";
import about4 from "@/assets/images/about (4).png";
import about5 from "@/assets/images/about (5).png";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-20 bg-primary py-40 text-white">
        <div className="text-center lg:w-3/4 mx-auto">
          <p className="text-center text-[#F1F1F1] text-xl mb-4">About</p>
          <p className="text-4xl md:text-6xl leading-[40px] md:leading-[72px] lg:w-4/5 mx-auto text-center">
            We love to make great things, things that matter.
          </p>
          <p className="lg:w-3/4 mx-auto font-normal text-[#F1F1F1] pt-6 mb-10">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>

      <div className="relative px-5 md:px-10 lg:px-20 py-20">
        <div className="opacity-0 grid grid-cols-1 md:grid-cols-3 gap-10 lg:px-10">
          <img src={about1} className="w-full h-full" alt="im" />
          <img src={about2} className="w-full row-span-2 h-full" alt="im" />
          <img src={about3} className="w-full h-full" alt="im" />
          <img src={about4} className="w-full h-full" alt="im" />
          <img src={about5} className="w-full h-full" alt="im" />
        </div>
        <div className="absolute -top-28 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 lg:px-10">
          <img src={about1} className="w-full h-full" alt="im" />
          <img src={about2} className="w-full row-span-2 h-full" alt="im" />
          <img src={about3} className="w-full h-full" alt="im" />
          <img src={about4} className="w-full h-full" alt="im" />
          <img src={about5} className="w-full h-full" alt="im" />
        </div>
        <div className="lg:w-3/5 mx-auto">
          <p className="text-[#777777] text-xl mb-4">Our story</p>
          <p className="text-3xl md:text-5xl leading-[40px] md:leading-[72px] mx-auto">
            Handshake infographic mass market crowdfunding iteration.
          </p>
          <div className="mt-6 text-[#777777] text-xl">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{" "}
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-20 bg-primary py-20 text-white">
        <p className="text-center text-[#F1F1F1] text-xl mb-4">Our numbers</p>
        <p className="text-3xl md:text-5xl leading-[40px] md:leading-[72px] lg:w-4/5 mx-auto text-center">
          Handshake infographic mass market crowdfunding iteration.
        </p>
        <div className="flex gap-10 md:gap-0 mt-10 md:mt-0 flex-col md:flex-row items-center justify-between px-10">
          <div>
            <p className="text-5xl md:text-[96px] text-[#4FE9A4]">120m</p>
            <p className="text-2xl text-[#F1F1F1]">Cool feature title</p>
          </div>
          <div>
            <p className="text-5xl md:text-[96px] text-[#4FE9A4]">10.000</p>
            <p className="text-2xl text-[#F1F1F1]">Cool feature title</p>
          </div>
          <div>
            <p className="text-5xl md:text-[96px] text-[#4FE9A4]">240</p>
            <p className="text-2xl text-[#F1F1F1]">Cool feature title</p>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-20 py-20">
        <div className="lg:w-3/5 mx-auto">
          <p className="text-[#777777] text-xl mb-4">Our team</p>
          <p className="text-3xl md:text-5xl leading-[40px] md:leading-[72px] mx-auto">The leadership team</p>
          <p className="text-[#777777] text-lg mt-5">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>
        </div>

        <div className="lg:w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {teams.map(({ img, name, role }) => (
            <div key={name}>
              <img src={img} alt={name} />
              <p className="text-3xl mb-3 mt-6">{name}</p>
              <p className="text-xl text-[#777777]">{role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary px-5 md:px-10 lg:px-20 py-20 text-white">
        <div className="lg:w-3/5 mx-auto">
          <p className="text-[#777777] text-xl mb-4">Our values</p>
          <p className="text-3xl md:text-5xl leading-[40px] md:leading-[72px] mx-auto">
            Things in we believe
          </p>
          <p className="text-[#F1F1F1] text-lg mt-5">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.{" "}
          </p>

          <div className="mt-16">
            {values.map(({ title, desc, img }) => (
              <div className="flex flex-col md:flex-row items-start gap-12 mb-16" key={title}>
                <img src={img} alt={title} />
                <div>
                  <p className="text-2xl md:text-3xl">{title}</p>
                  <p className="text-xl mt-4">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Zoom>
        <div className="md:px-10 lg:px-20 py-20">
          <div className="relative bg-primary px-5 text-white py-20 md:rounded-2xl">
            <img
              src={circle}
              alt="circle"
              className="absolute top-0 right-0 w-2/5 h-4/5 rounded-2xl opacity-30"
            />
            <p className="text-3xl md:text-5xl leading-[44px] md:leading-[72px] lg:w-3/5 mx-auto text-center">
              An enterprise template to ramp up your company website
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-10">
              <input
                type="email"
                className="w-full border-2 border-white bg-white text-xl text-black placeholder:text-black rounded-full px-10 py-4 md:w-1/3"
                placeholder="Your email address"
              />
              <Button className="!bg-[#65E4A3] !border-[#65E4A3] !text-primary">
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
