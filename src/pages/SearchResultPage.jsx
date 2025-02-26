import React, { useEffect, useState } from "react";
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
import { useSearchContext } from "../context/SearchContext";
import moment from "moment";
import { useNavigate } from "react-router-dom";
// const result = {
//   base_source: {
//     source: "Airbnb",
//     name: "Stunning rural retreat perfect for couples & dogs",
//     reviews: {
//       aggregate_score || '': "4.9",
//       total_reviews: "128",
//       type: 5,
//     },
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/c1cdc66a-7221-4ab8-938a-861d6a2bd34c.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/0c7252d5-0aaf-495d-a4c0-6e9d6b606902.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/cda16295-ba04-4096-82e7-67617b1698cd.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/b4f7bd5f-5312-49d4-9b5b-064689779cfd.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/d768e1e6-9d47-47fb-bd01-0374a87e472b.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//     ],
//     price: {
//       total: "$4,767 HKD",
//       perNight: "$1,118 HKD ",
//     },
//     address: "Leigh, United Kingdom",
//     description:
//       "Welcome to The Loft at The Croft!\n\nKick back and relax in this immaculately decorated annexe located in the peaceful village of The Leigh.\n\nSeparate from the main house and looking out onto open fields, we welcome individuals, couples and furry companions to take a break.\n\nLocated close to Cheltenham (and the racecourse) and within a convenient distance of Tewkesbury, Gloucester and the Cotswolds you will be spoilt for choice on places to visit, footpaths to walk and pubs to discover.\n\nThe space\nThe Loft is furnished to a very high standard with King-sized bed, fully equipped kitchen, bathroom and copper bath tub.\n\nWhen you're ready to turn in, lie down in the crisp Egyptian cotton sheets and down pillows. You will be sure to have an enjoyable night's sleep.\n\nDespite the peaceful setting, the Loft is connected to high-speed internet and the television has multiple video streaming apps.\n\nWe are very dog friendly and there is plenty of space outside if you do decide to bring your pooch with you on your trip.\n\nGuest access\nThe Loft is located on our small-holding 'The Croft'. Guests have their own private parking area and are welcome to spend their time in the Loft and surrounding fields.\n\nOther things to note\nWe are surrounded by dairy farms and equestrian pasture. There are many footpaths and opportunities to walk your dog nearby, but you will need wellies in autumn and winter months and a lead for fields occupied by livestock.\n\nThere is a taxi driver located within the village and opportunity to schedule airport pick-ups and drop-offs.",
//     link: "https://www.airbnb?.com/rooms/602688994973938827?source_impression_id=p3_1736855552_P34ATomOsExGaRDH&guests=2&adults=1&children=1&check_in=2025-04-22&check_out=2025-04-26",
//   },
//   google_search_result: {
//     Airbnb: [
//       {
//         source: "Airbnb",
//         name: "Stunning rural retreat perfect for couples & dogs",
//         reviews: {
//           aggregate_score || '': "4.9",
//           total_reviews: "128",
//           type: 5,
//         },
//         image_urls: [
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/c1cdc66a-7221-4ab8-938a-861d6a2bd34c.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/0c7252d5-0aaf-495d-a4c0-6e9d6b606902.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/cda16295-ba04-4096-82e7-67617b1698cd.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/b4f7bd5f-5312-49d4-9b5b-064689779cfd.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//           "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjAyNjg4OTk0OTczOTM4ODI3/original/d768e1e6-9d47-47fb-bd01-0374a87e472b.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
//         ],
//         price: {
//           total: "$4,767 HKD",
//           perNight: "$1,118 HKD ",
//         },
//         address: "Leigh, United Kingdom",
//         description:
//           "Welcome to The Loft at The Croft!\n\nKick back and relax in this immaculately decorated annexe located in the peaceful village of The Leigh.\n\nSeparate from the main house and looking out onto open fields, we welcome individuals, couples and furry companions to take a break.\n\nLocated close to Cheltenham (and the racecourse) and within a convenient distance of Tewkesbury, Gloucester and the Cotswolds you will be spoilt for choice on places to visit, footpaths to walk and pubs to discover.\n\nThe space\nThe Loft is furnished to a very high standard with King-sized bed, fully equipped kitchen, bathroom and copper bath tub.\n\nWhen you're ready to turn in, lie down in the crisp Egyptian cotton sheets and down pillows. You will be sure to have an enjoyable night's sleep.\n\nDespite the peaceful setting, the Loft is connected to high-speed internet and the television has multiple video streaming apps.\n\nWe are very dog friendly and there is plenty of space outside if you do decide to bring your pooch with you on your trip.\n\nGuest access\nThe Loft is located on our small-holding 'The Croft'. Guests have their own private parking area and are welcome to spend their time in the Loft and surrounding fields.\n\nOther things to note\nWe are surrounded by dairy farms and equestrian pasture. There are many footpaths and opportunities to walk your dog nearby, but you will need wellies in autumn and winter months and a lead for fields occupied by livestock.\n\nThere is a taxi driver located within the village and opportunity to schedule airport pick-ups and drop-offs.",
//         link: "https://www.airbnb?.com/rooms/602688994973938827?source_impression_id=p3_1736855552_P34ATomOsExGaRDH&guests=2&adults=1&children=1&check_in=2025-04-22&check_out=2025-04-26",
//       },
//     ],
//   },
//   filter_options: {
//     checkIn: "2025-04-22",
//     checkOut: "2025-04-26",
//     adults: "1",
//     children: "1",
//   },
//   rest_data: [],
//   status: "success",
// };
const SearchResultPage = () => {
  const navigate = useNavigate();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const { setIsLoading, setError, result } = useSearchContext();
  useEffect(() => {
    if (result?.status != "success") {
      navigate("/");
    }
  });
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
              <div>{result?.base_source.address}</div>
            </div>
            <div className="xl:flex gap-[10px] justify-center items-center hidden">
              <StarRating
                score={result?.base_source.reviews?.aggregate_score || ''}
                maxScore={result?.base_source.reviews?.type || 5}
              />
              <div>{result?.base_source.reviews?.aggregate_score || ''}</div>
            </div>
            <div className="xl:flex gap-[10px] justify-center items-center hidden">
              <img src={revisionImageUrl} alt="" className="w-4 h-4" />
              <div>{result?.base_source.reviews?.total_reviews || ''} Reviews</div>
            </div>
          </div>
          <div className="xl:flex gap-[10px] justify-center items-center hidden">
            <IoShareSocialOutline className="w-4 h-4" />
            <div>Share</div>
          </div>
        </div>
        <div className="w-full flex xl:flex-row flex-col gap-[30px] xl:justify-between justify-center items-center pt-[5px]">
          <div className="xl:w-[41%] w-full aspect-[1/1] max-w-[475px]">
            <CCarousel
              controls={true}
              indicators
              className="h-full custom-carousel"
            >
              {result?.base_source.image_urls.map((imageUrl, index) => (
                <CCarouselItem className="h-full w-full" key={index}>
                  <div className="h-full w-full flex justify-center items-center overflow-hidden">
                    <img
                      src={imageUrl}
                      alt=""
                      className="w-auto h-full rounded-[20px]"
                    />
                  </div>
                </CCarouselItem>
              ))}
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
                  <div className="text-base leading-5">
                    {moment(result?.filter_options.checkIn).format(
                      "MMM DD, YYYY"
                    )}
                  </div>
                </div>
                <div className="text-[#57606F] xl:ml-[67px] ml-[27px]">
                  <div className="text-sm font-semibold leading-5">
                    Check out
                  </div>
                  <div className="text-base leading-5">
                    {moment(result?.filter_options.checkOut).format(
                      "MMM DD, YYYY"
                    )}
                  </div>
                </div>
              </div>
              <div className="xl:w-[220px] w-[95px] border-l-[1px] border-[#DFE4EA] flex justify-start items-center">
                <FaRegUserCircle className="w-[30px] h-[30px] text-[#FF4757] ml-10 xl:block hidden" />
                <div className="text-[#57606F] ml-5">
                  <div className="text-sm font-semibold leading-5">Guests</div>
                  <div className="text-base leading-5">
                    {parseInt(result?.filter_options.adults) +
                      parseInt(result?.filter_options.children)}{" "}
                    guests
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={airbnbImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    {result?.google_search_result?.Airbnb?.length > 0 &&
                    result?.google_search_result?.Airbnb[0]?.price?.total !== ""
                      ? result?.google_search_result?.Airbnb[0].price?.total
                      : "Not Available"}
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    {result?.google_search_result?.Airbnb?.length > 0 &&
                    result?.google_search_result?.Airbnb[0]?.price?.perNight !==
                      ""
                      ? `${result?.google_search_result?.Airbnb[0].price?.perNight}/night`
                      : "Not Available"}
                  </div>
                </div>
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.google_search_result?.Airbnb?.length > 0 &&
                  result?.google_search_result?.Airbnb[0]?.link !== ""
                    ? result?.google_search_result?.Airbnb[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.google_search_result?.Airbnb?.length > 0 &&
                result?.google_search_result?.Airbnb[0]?.link !== ""
                  ? "Book on Airbnb"
                  : "Not listed"}
              </a>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={bookingImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    {result?.google_search_result?.Booking?.length > 0 &&
                    result?.google_search_result?.Booking[0]?.price?.total !== ""
                      ? result?.google_search_result?.Booking[0].price?.total
                      : "Not Available"}
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    {result?.google_search_result?.Booking?.length > 0 &&
                    result?.google_search_result?.Booking[0]?.price?.perNight !==
                      ""
                      ? `${result?.google_search_result?.Booking[0].price?.perNight}/night`
                      : "Not Available"}
                  </div>
                </div>
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.google_search_result?.Booking?.length > 0 &&
                  result?.google_search_result?.Booking[0]?.link !== ""
                    ? result?.google_search_result?.Booking[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.google_search_result?.Booking?.length > 0 &&
                result?.google_search_result?.Booking[0]?.link !== ""
                  ? "Book on Booking.com"
                  : "Not listed"}
              </a>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={vrboImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    {result?.google_search_result?.Vrbo?.length > 0 &&
                    result?.google_search_result?.Vrbo[0]?.price?.total !== ""
                      ? result?.google_search_result?.Vrbo[0].price?.total
                      : "Not Available"}
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    {result?.google_search_result?.Vrbo?.length > 0 &&
                    result?.google_search_result?.Vrbo[0]?.price?.perNight !== ""
                      ? `${result?.google_search_result?.Vrbo[0].price?.perNight}/night`
                      : "Not Available"}
                  </div>
                </div>
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.google_search_result?.Vrbo?.length > 0 &&
                  result?.google_search_result?.Vrbo[0]?.link !== ""
                    ? result?.google_search_result?.Vrbo[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.google_search_result?.Vrbo?.length > 0 &&
                result?.google_search_result?.Vrbo[0]?.link !== ""
                  ? "Book on Vrbo"
                  : "Not listed"}
              </a>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={agodaImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    {result?.google_search_result?.Agoda?.length > 0 &&
                    result?.google_search_result?.Agoda[0]?.price?.total !== ""
                      ? result?.google_search_result?.Agoda[0].price?.total
                      : "Not Available"}
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    {result?.google_search_result?.Agoda?.length > 0 &&
                    result?.google_search_result?.Agoda[0]?.price?.perNight !==
                      ""
                      ? `${result?.google_search_result?.Agoda[0].price?.perNight}/night`
                      : "Not Available"}
                  </div>
                </div>
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.google_search_result?.Agoda?.length > 0 &&
                  result?.google_search_result?.Agoda[0]?.link !== ""
                    ? result?.google_search_result?.Agoda[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.google_search_result?.Agoda?.length > 0 &&
                result?.google_search_result?.Agoda[0]?.link !== ""
                  ? "Book on Agoda"
                  : "Not listed"}
              </a>
            </div>
            <div className="w-full flex justify-between items-center py-[14px] px-[19px] rounded-[20px] border-[#DFE4EA] border-[1px]">
              <div className="flex-1 flex justify-between items-center xl:pr-5">
                <img src={expediaImageUrl} alt="" className="h-10 w-auto" />
                <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    {result?.google_search_result?.Expedia?.length > 0 &&
                    result?.google_search_result?.Expedia[0]?.price?.total !== ""
                      ? result?.google_search_result?.Expedia[0].price?.total
                      : "Not Available"}
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    {result?.google_search_result?.Expedia?.length > 0 &&
                    result?.google_search_result?.Expedia[0]?.price?.perNight !==
                      ""
                      ? `${result?.google_search_result?.Expedia[0].price?.perNight}/night`
                      : "Not Available"}
                  </div>
                </div>
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.google_search_result?.Expedia?.length > 0 &&
                  result?.google_search_result?.Expedia[0]?.link !== ""
                    ? result?.google_search_result?.Expedia[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.google_search_result?.Expedia?.length > 0 &&
                result?.google_search_result?.Expedia[0]?.link !== ""
                  ? "Book on Expedia"
                  : "Not listed"}
              </a>
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
                    {result?.rest_data?.length > 0 &&
                      result?.rest_data[0]?.source}
                  </div>
                </div>
                {/* <div className="w-fit flex flex-col items-end">
                  <div className="text-base font-semibold text-[#57606F] leading-5">
                    £475
                  </div>
                  <div className="text-sm text-[#57606F] leading-5">
                    £183/night
                  </div>
                </div> */}
              </div>
              <a
                className="w-[220px] cursor-pointer rounded-[10px] bg-[#FF4757] py-[10px] text-center text-white text-base font-semibold leading-5 xl:block hidden"
                href={
                  result?.rest_data?.length > 0 &&
                  result?.rest_data[0]?.link !== ""
                    ? result?.rest_data[0].link
                    : "#"
                }
                target="_blank"
              >
                {result?.rest_data?.length > 0 &&
                result?.rest_data[0]?.link !== ""
                  ? "Book Direct"
                  : "Not listed"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <GotQuestion />
    </Layout>
  );
};

export default SearchResultPage;
