import React from "react";
import { useNavigate } from "react-router-dom";
import './css/GettingStarted.css'

const GettingStarted = () => {
  const navigate = useNavigate();
  const aboutSection = [
    "Verbal Interaction",
    "Multilingual Support",
    "Seamless Integration",
    "Customizable",
  ];
  return (

    <div>
      {/* header
       */}
      <section className="w-full h-[70px] [background:linear-gradient(90.01deg,_#090b1e,_#13193b_51.55%,_#090b1e)]">
        <div className="h-[70px] w-[870px] flex justify-between items-center mx-auto ">
          <h1 className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            Home
          </h1>
          <h1 className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            About
          </h1>
          <h1 className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            Service
          </h1>
          <h1 className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            Pricing
          </h1>
          <h1 className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            Contact Us
          </h1>
          <h1 onClick={()=>navigate('/demo')} className="relative cursor-pointer hover:opacity-50 text-[1rem] font-medium font-montserrat text-white text-center">
            Demo
          </h1>
        </div>
      </section>

      {/* 2nd div */}
      <section className="bg-[#090B1E] w-full h-fit pt-[150px] pb-[114px]">
        <div className=" flex flex-col w-[1200px] mx-auto">
          <b className="w-[74.81rem] mx-auto relative text-[2.38rem] inline-block font-montserrat font-bold text-center h-[5.13rem] text-white">
            <span>{`Revolutionize Customer Care Service with Our Multilingual `}</span>
            <span className="text-[#334FFF]">AI-Powered</span>
            <span> Conversational Platform </span>
          </b>
          <div className="w-[31rem] mx-auto mt-[45px] relative text-[0.88rem] capitalize font-montserrat font-[400] text-white text-center inline-block">{`a universal tool for your business to reach unprecedented heights `}</div>

          <div className="flex w-[330px] mt-[127px] mx-auto justify-between">
            <div className="w-[153px] flex justify-center items-center relative rounded-[65px] bg-gray box-border h-[2.56rem] overflow-hidden text-center text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#828eff]">
              <div className=" font-medium">About</div>
            </div>

            <div className="w-[153px] flex justify-center items-center relative rounded-[65px] [background:linear-gradient(99.19deg,_#0a0d21,_#4c66ff)] box-border h-[2.56rem] overflow-hidden text-center text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#828eff]">
            <a href="/start">  <div  className=" font-medium">Try Demo</div></a>
            </div>
          </div>

          <div className="relative w-full mt-[53px]">
            <img
              className="w-[348px] h-[348px] object-cover mx-auto "
              src="https://cdn.discordapp.com/attachments/1198196635780522055/1203051920705724446/image.png?ex=65cfb069&is=65bd3b69&hm=8bf48b9c868a3701561d7f3d2674d7c9b3f071e72c39ef5ba838b46dbb979ed5&"
              alt=""
            />
          </div>

          <div className="w-full pt-[88px] pb-[114px] flex flex-col justify-center">
            <b className="w-[30.94rem] mx-auto relative text-[2.38rem] font-[700] inline-block font-montserrat text-white text-center">
              {" "}
              Our Platform Supports 70+ Languages
            </b>
            <div className="w-[12.19rem] pb-[104px] mx-auto mt-[16px] relative text-[1rem] font-[400] capitalize font-montserrat text-white text-left inline-block">
              10+ Regional Languages
            </div>
          </div>
        </div>
        {/* 1st image mover */}
        <section className=" w-full overflow-x-hidden">
          <div className="relative w-[3100%] h-[54px]">
            <img
            
              className=" horizontalStrip1 h-[54px] w-auto object-contain"
              src="https://cdn.discordapp.com/attachments/1198196635780522055/1203054392492826685/image.png?ex=65cfb2b6&is=65bd3db6&hm=ba424c2dc664a84c423b1f707dfa9f210184db28686a648915942b82a05a9f19&"
              alt=""
            />
          </div>
        </section>

        {/* 2nd image mover */}
        <section className="w-full mt-[52px] overflow-hidden">
          <div className="relative w-max overflow-hidden">
            <img
              className=" horizontalStrip1 h-[54px] w-auto object-contain"
              src="https://cdn.discordapp.com/attachments/1198196635780522055/1203054392492826685/image.png?ex=65cfb2b6&is=65bd3db6&hm=ba424c2dc664a84c423b1f707dfa9f210184db28686a648915942b82a05a9f19&"
              alt=""
            />
          </div>
        </section>
      </section>

      {/* about section */}
      <div className="w-full bg-[#090B1E]">
        <section className="w-[1174px] mx-auto ">
          <div className="relative flex items-center justify-center w-[110px] h-[41px] ">
            <img
              className="absolute w-full h-full"
              src="https://cdn.discordapp.com/attachments/1198196635780522055/1203060984827224175/image.png?ex=65cfb8da&is=65bd43da&hm=56aed5b08c4cb46daa3a32b76af35f9c689d4fea0d80cc84f7c9d41465c38333&"
              alt=""
            />
            <div className="w-[3.19rem] relative text-[1rem] font-medium font-montserrat text-white text-center inline-block ">
              About
            </div>
          </div>

          <div className="pt-[34px]">
            <b className="w-[80.25rem] relative text-[2.13rem] font-[700] inline-block font-montserrat text-white text-left h-[5.13rem]">
              Our Vision is to create a global standard for effortless and
              personalized customer interactions through our AI-driven platform.
            </b>
          </div>

          <div className="w-[41.06rem]  pt-[17px] pb-[160px] relative text-[1rem] capitalize font-montserrat text-white text-left inline-block">
            Empowering businesses with adaptable and flexible conversational AI
            solutions.
          </div>

          <div className="flex pb-[121px]  justify-evenly">
            {aboutSection.map((a) => {
              return (
                <div className="w-[186px] flex items-center justify-center relative rounded-[143px] [background:linear-gradient(-0.83deg,_#000423_75.87%,_#000535)] box-border h-[11.63rem] overflow-hidden text-center text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000535]">
                  <div className=" font-medium">{a}</div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* how it works section */}


      <section className="w-full bg-[#090B1E]">
        <section className="w-[1174px] mx-auto ">
          <div className="relative flex items-center justify-center w-[132px] h-[41px] ">
            <img
              className="absolute w-full h-full"
              src="https://cdn.discordapp.com/attachments/1198196635780522055/1203086983560298566/image.png?ex=65cfd111&is=65bd5c11&hm=7e9afe0a74e57a4738188229b55b9fe1da658e5c027e10563f4ec07596906c4c&"
              alt=""
            />
            <div className="w-[7.63rem] relative text-[1rem] font-medium font-montserrat text-white text-center inline-block ">
              How it works?
            </div>
          </div>

          <div className="h-[670px] relative">
            {/* line 1 */}
            <img className="w-[341px] object-contain absolute top-[95px] left-[159px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203090735310831657/image.png?ex=65cfd48f&is=65bd5f8f&hm=e3aea2aa3a0ef59c970155286cb3519cdf5326d6e0efcbd6a43a6d8e5ea40f5d&" alt="" />
            {/* line 2 */}
            <img className="w-[304px] object-contain absolute top-[95px] left-[705px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203090767258722345/image.png?ex=65cfd497&is=65bd5f97&hm=4deef63a95328908dc25f10d8713e9b6f1d130689b62d8e3ae3bd052cade910b&" alt="" />
            {/* line 3 */}
            <img className="h-[75px] object-contain absolute top-[95px] left-[159px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203090904185966723/image.png?ex=65cfd4b7&is=65bd5fb7&hm=452f6dca7ee7e599e128552b6e8cc05e03c02adc52c8aac7c68097e262464274&" alt="" />
            {/* line 4 */}
            <img className="h-[110px] object-contain absolute top-[95px] left-[1009px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203090963048829039/image.png?ex=65cfd4c5&is=65bd5fc5&hm=8877d4c54ee4e0f23c596d43fd1277b8e495615cad75d24191d67d702f676624&" alt="" />
            

            <div className="absolute left-[500px] top-[59px]">
              <div className="w-[203px] relative rounded-[10px] bg-[#0D102C] box-border h-[4.63rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
                <div className="absolute top-[2.31rem] left-[1.38rem] font-semibold">{`Terms & Conditions`}</div>
                <div className="absolute top-[1.06rem] left-[3.94rem] font-semibold">
                  User Data
                </div>
              </div>
            </div>

            <div className="absolute left-[72px] top-[173px] ">
            <div className="w-[203px] relative rounded-[10px] bg-[#414dc514] box-border h-[8.5rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
<div className="absolute top-[3rem] left-[2.56rem] font-semibold inline-block w-[7.56rem]">Company /Organization</div>
</div>
            </div>

            {/* line 5 */}
            <img className="w-[221px] object-contain absolute top-[239px] left-[276px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203091020649332776/image.png?ex=65cfd4d3&is=65bd5fd3&hm=ea02cccc2879ebace399e2bf8eb91d58d182b9fe7a2b76698505f79259fba95e&" alt="" />
          
            <div className="absolute left-[497px] top-[203px]">
            <div className="w-[203px] relative rounded-[10px] bg-[#414dc514] box-border h-[4.06rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
<div className="absolute top-[1.44rem] left-[2.56rem] font-semibold inline-block w-[7.56rem]">CustomCare.ai</div>
</div>
</div>

 {/* line 6 */}
 <img className="w-[198px] object-contain absolute top-[239px] left-[700px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203091094724935700/image.png?ex=65cfd4e5&is=65bd5fe5&hm=d0e40e859ccd3b0f3d8b753cbf2304d757f8f9efef1f0f04dec466563d2e9430&" alt="" />
          

 <div className="absolute left-[897px] top-[205px]">
 <div className="w-[203px] relative rounded-[10px] bg-[#414dc514] box-border h-[4.06rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
<div className="absolute top-[1.44rem] left-[3.75rem] font-semibold">AI MODEL</div>
</div>
</div>

 {/* line 7 */}
 <img className="h-[147px] object-contain absolute top-[270px] left-[1009px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203090963048829039/image.png?ex=65cfd4c5&is=65bd5fc5&hm=8877d4c54ee4e0f23c596d43fd1277b8e495615cad75d24191d67d702f676624&" alt="" />
         
         <div className="absolute w-[150px] h-[150px] left-[932px] top-[416px]">
         <div className="w-[156px] relative rounded-[39px] bg-[#414dc514] box-border h-[9.13rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
<img className="absolute top-[1.31rem] left-[1.88rem] w-[5.31rem] h-[5.31rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203162573755650058/image.png?ex=65d01777&is=65bda277&hm=b5df3da8e51ed3fc2b0f686df03e6dd1c7b155725747c0924625788ed4c9ecbf&" />
<div className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem] overflow-hidden" />
<div className="absolute top-[6.63rem] left-[3rem] font-medium">AI Bot</div>
</div>
         </div>

         {/* line 8 */}
 <img className="w-[700px] object-contain absolute top-[489px] left-[233px]" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203091159686320229/image.png?ex=65cfd4f4&is=65bd5ff4&hm=1bafa44f8be00ae5cdaafcda65c25f0e8e36a109fbd0a1909d80d3c64c35af7d&" alt="" />
 
 <div className="absolute w-[150px] h-[150px] left-[77px] top-[416px]">
         <div className="w-[156px] relative rounded-[39px] bg-[#414dc514] box-border h-[9.13rem] overflow-hidden text-left text-[1rem] text-white font-montserrat border-[1px] border-solid border-[#000853]">
<img className="absolute top-[1.31rem] left-[1.88rem] w-[5.31rem] h-[5.31rem] overflow-hidden" alt="" src="https://cdn.discordapp.com/attachments/1198196635780522055/1203162573755650058/image.png?ex=65d01777&is=65bda277&hm=b5df3da8e51ed3fc2b0f686df03e6dd1c7b155725747c0924625788ed4c9ecbf&" />
<div className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem] overflow-hidden" />
<div className="absolute top-[6.63rem] left-[3rem] font-medium">User</div>
</div>
         </div>

          </div>
        </section>
      </section>

      {/* services section */}
    <div className="relative w-full">
      <img className="absolute top-0 h-[1866px] w-[1670px] object-fill" src="https://cdn.discordapp.com/attachments/1096324843877703713/1203523387113218120/image.png?ex=65d1677f&is=65bef27f&hm=f6ecf31ad43be2e076512306b10263e970c5d82f6fd4a24675f44084a8c43247&" alt="" />
    </div>
    </div>
  );
};

export default GettingStarted;
