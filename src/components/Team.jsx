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
    <div className="pt-[5%] team-manage" id="about">
      {data &&
        data.map((info) => {
          return (
            <>
              <div className="tajriba" key={info.id}>
                <div className="border-[1px] border-[#555] "></div>
                <div className="border-[1px] border-[#555] text-center py-[15%]">
                  <p className="text-[#555] -ml-[15%]">TAJRIBA</p>
                  <h2 className="buyan lg:text-9xl md:text-6xl sm:text-4xl text-black ">
                    {info.experience}
                  </h2>
                </div>
                <div className="border-[1px] border-[#555]"></div>
              </div>
              <div className="tajriba">
                <div className="border-[1px] border-[#555] text-center lg:py-[13%] md:py-[10%] sm:py-[5%]">
                  <p className="text-[#555]">количество складов</p>
                  <h2 className="buyan lg:text-9xl md:text-6xl sm:text-4xl text-black ">
                    {info.stock}
                  </h2>
                </div>
                <div className="border-[1px] border-[#555] py-4"></div>
                <div className="border-[1px] border-[#555] text-center lg:py-[13%] md:py-[10%] sm:py-[5%]">
                  <p className="text-[#555]">Производит продукции более</p>
                  <h2 className="buyan lg:text-9xl md:text-6xl sm:text-4xl text-black ">
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
                  <div className="lg:py-[15%] md:py-[10%] sm:py-[5%] text-center bg-[#153973]">
                    <p className="text-zinc-300 -ml-[3%] ">Komanda A`zolari</p>
                    <h2 className="lg:text-9xl md:text-6xl sm:text-4xl text-white buyan">99+</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-[#153973]"></div>
                  <div className="bg-[#153973] text-center py-[15%] lg:px-[25%] sm:text-center  "><h1 className="buyan lg:text-7xl md:text-5xl sm:text-2xl text-white text-center">Bizning Jamoa</h1></div>
                </div>
              </div>
              <div>
                <img src={team} alt="" className="h-[100%] team-image w-fit" />
              </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Team;
