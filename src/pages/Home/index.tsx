import Button from "@/components/Button"
import { useEffect } from "react"
import { blogs, faq, services, testimonials } from "@/constants/data"
import { ArrowLeft, ArrowRight, ChevronDownIcon, Dot, Eye, Feather, Sun } from "lucide-react"

import user from "@/assets/images/Rectangle 1270.png"
import user1 from "@/assets/images/Rectangle 1270-1.png"
import check from "@/assets/icons/check.svg"
import graph from "@/assets/icons/graph.svg"
import pie from "@/assets/icons/pie.svg"
import boldo from "@/assets/icons/boldo.svg"
import presto from "@/assets/icons/presto.svg"
import info1 from "@/assets/icons/mini.svg"
import info2 from "@/assets/images/Frame 219.png"
import info3 from "@/assets/icons/mini1.svg"
import circle from "@/assets/icons/circle.svg"
import image from "@/assets/images/Image.png"

const Home = () => {
  const logosContainer = document.getElementById("logos");
  const logosContainerScrollWidth = logosContainer?.scrollWidth;

  useEffect(() => {
    window.addEventListener("load", () => {
      self.setInterval(() => {
        if(logosContainer?.scrollLeft !== logosContainerScrollWidth) {
          logosContainer?.scrollTo(logosContainer.scrollLeft + 1, 0)
        }
      }, 15)
    })
  }, [])

  return (
    <div>
      <div className="relative px-5 md:px-10 lg:px-20 pt-10 bg-primary h-screen">
        <img src={circle} alt="circle" className="absolute top-0 right-0 w-1/2 opacity-30" />
        <div className="grid grid-cols-1 md:grid-cols-2 pt-60 items-center">
          <div>
            <h1 className="text-white font-normal text-5xl leading-[72px]">Save time by building  fast with Boldo Template</h1>
            <p className="font-normal text-[#F1F1F1] pt-4 mb-10">Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
            <div className="flex items-center gap-6">
              <Button className="bg-[#65E4A3] border-[#65E4A3] text-primary">Buy Template</Button>
              <Button className="" isSecondary>Explore</Button>
            </div>
          </div>
          <div className="mx-auto">
            <img src={info2} alt="info2" />
            <div className="flex items-center mt-5 gap-5">
            <img src={info1} alt="info1" className="w-full h-full" />
            <img src={info3} alt="info3" className="w-full h-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-20 whitespace-nowrap overflow-x-scroll w-full py-10 relative" id="logos">
          <div className="absolute h-full bg-gradient-to-l to-primary from-transparent px-20"></div>
          <img src={boldo} alt="boldo" />
          <img src={presto} alt="presto" />
          <img src={boldo} alt="boldo" />
          <img src={presto} alt="presto" />
          <img src={boldo} alt="boldo" />
          <img src={presto} alt="presto" />
          <div className="absolute h-full bg-gradient-to-r to-primary from-transparent px-20 right-0"></div>
        </div>
      </div>

      {/* Services */}
      <div className="px-5 md:px-10 lg:px-20 py-20">
        <p className="text-center text-[#777777] text-xl mb-4">Our Services</p>
        <p className="text-5xl leading-[72px] lg:w-4/5 mx-auto text-center">Handshake infographic mass market crowdfunding iteration.</p>

        <div className="my-20 flex flex-col md:flex-row items-stretch justify-between gap-20">
          {
            services.map(({title, desc, img}, index) => (
              <div key={index} className="w-full lg:w-1/3">
                <img src={img} alt={title} className="w-full" />
                <div className="pt-6">
                  <p className="mb-3 text-2xl">{title}</p>
                  <p className="mb-7 text-[#777777] text-xl">{desc}</p>
                </div>
                <button className="text-primary border-b border-primary flex items-center gap-3 py-2">Explore Page <ArrowRight /></button>
              </div>
            ))
          }
        </div>

        <div className="my-20 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative">
            <img src={user} alt="user" className="w-full mx-auto md:w-5/6" />
            <div className="absolute right-20 -bottom-28 bg-white shadow-sm p-10 rounded-xl">
              <img src={graph} alt="graph" />
              <div className="mt-5">
                <p className="text-primary text-2xl mb-1 font-bold">30%</p>
                <p className="text-primary text-sm">More income in June</p>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto">
            <p className="text-4xl leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</p>
            <ul className="mt-10 mb-14">
              <li className="flex items-center gap-3 mb-6"><img src={check} alt="check" /> We connect our customers with the best.</li>
              <li className="flex items-center gap-3 mb-6"><img src={check} alt="check" /> Advisor success customer launch party.</li>
              <li className="flex items-center gap-3"><img src={check} alt="check" /> Business-to-consumer long tail.</li>
            </ul>
            <Button className="!bg-primary border-primary">Start Now</Button>
          </div>
        </div>

        <div className="my-20 mt-40 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="w-3/4 mx-auto">
            <p className="text-4xl leading-[56px]">We connect our customers with the best, and help them keep up-and stay open.</p>
            <ul className="mt-10 mb-14">
              <li className="shadow-sm shadow-black/5 rounded-sm bg-primary text-white p-4 px-5 flex items-center gap-3 mb-6"><Feather /> We connect our customers with the best.</li>
              <li className="shadow-sm shadow-black/5 rounded-sm bg-white p-4 px-5 flex items-center gap-3 mb-6"><Eye /> Advisor success customer launch party.</li>
              <li className="shadow-sm shadow-black/5 rounded-sm bg-white p-4 px-5 flex items-center gap-3"><Sun /> Business-to-consumer long tail.</li>
            </ul>
          </div>
          <div className="relative">
            <img src={user1} alt="user" className="w-full mx-auto md:w-5/6" />
            <div className="absolute left-20 -bottom-28 bg-white shadow-sm p-10 rounded-xl">
              <img src={pie} alt="pie" />
              <div className="mt-5">
                <p className="text-xs mb-3 flex items-center"><Dot className="mr-1 text-[#0DBBFC]" /> 35% -  Agile Development</p>
                <p className="text-xs mb-3 flex items-center"><Dot className="mr-1 text-[#0DBBFC]" /> 30% -  Investor bandwidth</p>
                <p className="text-xs flex items-center"><Dot className="mr-1 text-[#0DBBFC]" /> 35% -  A/B testing </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="px-5 md:px-10 lg:px-20 py-20 bg-primary text-white">
        <div className="flex justify-between items-end">
      <p className="text-5xl leading-[72px] lg:w-3/5">An enterprise template to ramp up your company website</p>
          <div className="flex items-center gap-4">
            <ArrowLeft className="bg-white p-3 cursor-pointer text-primary hover:scale-105 duration-300 transition-all rounded-full" size={40} />
            <ArrowRight className="bg-white p-3 cursor-pointer text-primary hover:scale-105 duration-300 transition-all rounded-full" size={40} />
          </div>
        </div>

        <div className="mt-16 flex items-start flex-col md:flex-row gap-6 md:px-10">
          {
            testimonials.map(({ testimony, img, name, role}) => (
              <div key={name} className="w-full p-10 rounded-xl bg-white shadow-lg shadow-black/10">
                <p className="text-2xl mb-10 text-black">“{testimony}”</p>
                <div className="flex gap-3 items-center">
                  <img src={img} alt={name} />
                  <div className="text-primary">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm mt-1">{role}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    <div className="px-5 md:px-10 lg:px-20 py-20 mt-10">
<img src={image} alt="s-image" className="rounded-3xl w-full mb-14" />
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
  <p className="text-4xl leading-[56px]">
  We connect our customers with the best, and help them keep up-and stay open.
  </p>
          <div className="">
            {
              faq.map(({ question }) => (
                <div key={question} className="w-5/6 mx-auto">
                  <p className="border-b border-[#C4C4C4] py-4 flex items-center justify-between cursor-pointer">
                    {question} <ChevronDownIcon className="bg-primary p-1 rounded-full text-white" size={35} />
                  </p>
                </div>
              ))
            }
          </div>
</div>
          </div>

      {/* Blog */}
      <div className="px-5 md:px-10 lg:px-20 py-20">
        <p className="text-center text-[#777777] text-xl mb-4">Our Blog</p>
        <p className="text-5xl leading-[72px] lg:w-4/5 mx-auto text-center">Value proposition accelerator product management venture</p>

        <div className="mt-20 flex flex-col md:flex-col items-stretch gap-10">
          {
            blogs.map(({ title, author, authorImg, category, date, img }) => (
              <div key={title} className="w-full">
                <div className="flex flex-col gap-20 justify-between">
                  <div>
                <img src={img} alt={title} className="w-full" />
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-primary font-bold mb-3">{category} <span className="text-[#777777] font-normal">{date}</span></div>
                  <p className="text-xl">{title}</p>
                  </div>
                </div>
                  <div className="flex items-center gap-3">
                <img src={authorImg} alt={author} className="" />
                    <p>{author}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="flex items-center justify-center">
          <Button className="mt-20 border-primary text-primary" isSecondary>Load More</Button>
        </div>
    </div>

    <div className="px-5 md:px-10 lg:px-20 py-20">
      <div className="relative bg-primary text-white py-20 rounded-2xl">
      <img src={circle} alt="circle" className="absolute top-0 right-0 w-2/5 h-4/5 rounded-2xl opacity-30" />
        <p className="text-5xl leading-[72px] lg:w-3/5 mx-auto text-center">An enterprise template to ramp up your company website</p>
        <div className="flex items-center justify-center gap-5 mt-10">
          <input type="email" className="border-2 border-white bg-white text-xl text-black placeholder:text-black rounded-full px-10 py-4 w-1/3" placeholder="Your email address" />
        <Button className="bg-[#65E4A3] border-[#65E4A3] text-primary">Start Now</Button>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Home