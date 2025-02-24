import React, { useState } from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Layout from "../components/Layout";
import { IoLocationOutline, IoShareSocialOutline } from "react-icons/io5";
import { LuCalendarRange } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import StarRating from "../components/StarRating";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import GotQuestion from "../components/gotQuestion";
const revisionImageUrl = "/assets/images/revision.png";
const airbnbImageUrl = "/assets/images/icons/airbnb.png";
const bookingImageUrl = "/assets/images/icons/booking.png";
const vrboImageUrl = "/assets/images/icons/vrbo.png";
const expediaImageUrl = "/assets/images/icons/expedia.png";
const agodaImageUrl = "/assets/images/icons/agoda.png";
const PhotoImageUrl = "/assets/images/photo.png";

const SearchResultPage = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <Layout>
      <h1 className="xl:text-4xl text-3xl font-semibold mt-[40px] mb-5 text-[#57606F] w-full">
        Price Comparison Results
      </h1>
      <div className="w-full">
        <div className="w-full flex justify-between text-lg text-[#57606F]">
          <div className="flex gap-[40px]">
            <div className="flex gap-[10px] justify-center items-center">
              <IoLocationOutline className="h-5 w-auto text-[#57606F]" />
              <div>United Kingdom · England · Leigh</div>
            </div>
            <div className="xl:flex gap-[10px] justify-center items-center hidden">
              <StarRating score={4.0} maxScore={5} />
              <div>4.0</div>
            </div>
            <div className="xl:flex gap-[10px] justify-center items-center hidden">
              <img src={revisionImageUrl} alt="" className="w-4 h-4" />
              <div>5 Reviews</div>
            </div>
          </div>
          <div className="xl:flex gap-[10px] justify-center items-center hidden">
            <IoShareSocialOutline className="w-4 h-4" />
            <div>Share</div>
          </div>
        </div>
        <div className="w-full flex xl:flex-row flex-col gap-[30px] xl:justify-between justify-center items-center pt-[5px]">
          <div className="xl:w-[41%] w-full max-w-[475px]">
            <CCarousel
              controls={true}
              indicators
              className="h-full  custom-carousel"
            >
              <CCarouselItem className="h-full w-full">
                <div className="h-full w-full flex justify-center items-center overflow-hidden">
                  <img
                    src={PhotoImageUrl}
                    alt=""
                    className="w-full h-full rounded-[20px]"
                  />
                </div>
              </CCarouselItem>
              <CCarouselItem className="h-full w-full">
                <div className="h-full w-full flex justify-center items-center overflow-hidden">
                  <img
                    src={PhotoImageUrl}
                    alt=""
                    className="w-full h-full rounded-[20px]"
                  />
                </div>
              </CCarouselItem>
              <CCarouselItem className="h-full w-full">
                <div className="h-full w-full flex justify-center items-center overflow-hidden">
                  <img
                    src={PhotoImageUrl}
                    alt=""
                    className="w-full h-full rounded-[20px]"
                  />
                </div>
              </CCarouselItem>
            </CCarousel>
          </div>
          <div className="flex-1 flex flex-col gap-[5px] w-full">
            <div className="w-full flex justify-between items-center p-[19px] rounded-[20px] border-[#DFE4EA] border-[1px] mb-[15px]">
              <div className="flex-1 flex justify-start items-center">
                <LuCalendarRange className="w-[30px] h-[30px] text-[#FF4757] xl:block hidden" />
                <div className="text-[#57606F] xl:ml-5">
                  <div className="text-sm font-semibold leading-5">
                    Check in
                  </div>
                  <div className="text-base leading-5">Jun 8, 2025</div>
                </div>
                <div className="text-[#57606F] xl:ml-[67px] ml-[27px]">
                  <div className="text-sm font-semibold leading-5">
                    Check out
                  </div>
                  <div className="text-base leading-5">Jun 11, 2025</div>
                </div>
              </div>
              <div className="xl:w-[220px] w-[95px] border-l-[1px] border-[#DFE4EA] flex justify-start items-center">
                <FaRegUserCircle className="w-[30px] h-[30px] text-[#FF4757] ml-10 xl:block hidden" />
                <div className="text-[#57606F] ml-5">
                  <div className="text-sm font-semibold leading-5">Guests</div>
                  <div className="text-base leading-5">2 guests</div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={airbnbImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £158/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book on Airbnb
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={bookingImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £158/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book on Booking.com
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={vrboImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £165/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book on Vrbo
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={agodaImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £170/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book on Agoda
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={expediaImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £183/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book on Expedia
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <div className="w-fit flex flex-col items-start">
                  <div className="flex gap-[10px] items-center">
                    <div className="text-sm font-semibold text-[#FF4757] leading-5">
                      Direct Booking Link
                    </div>
                    <div className="relative">
                      <TbInfoSquareRoundedFilled
                        className="w-4 h-4 text-[#FF4757] border-none"
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                      />
                      {tooltipVisible && (
                        <div className="absolute bottom-[100%] z-10 inline-block p-[10px] text-sm text-[#57606F] border-[1px] bg-white rounded-lg shadow-xs">
                          <div className="w-[235px]">
                            We have used our bespoke AI search tool to try and
                            find the direct booking link. These are our top
                            three estimates.
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    Princeville Vacation Rentals
                  </div>
                </div>
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £183/night
                  </div>
                </div>
              </div>
              <div className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden">
                Book Direct
              </div>
            </div>
          </div>
        </div>
      </div>
      <GotQuestion />
    </Layout>
  );
};

export default SearchResultPage;
