import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import team from '../assets/team.png'
import circle4 from '../assets/circle4.png'
const Team = () => {
  const [url, setUrl] = useState(
    "https://backend.n1beton.uz/story-company-list/"
  );
  const { data, isPending, error } = useFetch(url);
  return (
    <div className="pt-[5%]" id="about">
      {data &&
        data.map((info) => {
          return (
            <>
              <div className="tajriba" key={info.id}>
                <div className="border-[1px] border-[#555] "></div>
                <div className="border-[1px] border-[#555] text-center py-[15%]">
                  <p className="text-[#555] -ml-[15%]">TAJRIBA</p>
                  <h2 className=" lg:text-8xl md:text-6xl sm:text-4xl text-black font-buyan">
                    {info.experience}
                  </h2>
                </div>
                <div className="border-[1px] border-[#555]"></div>
              </div>
              <div className="tajriba">
                <div className="border-[1px] border-[#555] text-center py-[16%]">
                  <p className="text-[#555]">количество складов</p>
                  <h2 className=" lg:text-8xl md:text-6xl sm:text-4xl text-black font-buyan">
                    {info.stock}
                  </h2>
                </div>
                <div className="border-[1px] border-[#555] py-4"></div>
                <div className="border-[1px] border-[#555] text-center py-[15%]">
                  <p className="text-[#555]">Производит продукции более</p>
                  <h2 className=" lg:text-8xl md:text-6xl sm:text-4xl text-black font-buyan">
                    {info.product_number}
                  </h2>
                </div>
              </div>
              <img
                src={circle4}
                alt=""
                className="w-[17%] ml-[83%] -mt-[41.5%]"
              />

              <div className="grid grid-cols-2 mt-[13.5%] ">
              <div className="">
                <div className="grid grid-cols-2">
                  <div></div>
                  <div className="py-[13%] text-center bg-[#153973]">
                    <p className="text-zinc-300 -ml-[3%] ">Komanda A`zolari</p>
                    <h2 className="lg:text-8xl md:text-6xl sm:text-4xl text-white ">99+</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-[#153973]"></div>
                  <div className="bg-[#153973] lg:text-6xl md:text-5xl sm:text-2xl text-white text-center py-[12%] texts">Bizning Jamoa</div>
                </div>
              </div>
              <div>
                <img src={team} alt="" className="h-full" />
              </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Team;
