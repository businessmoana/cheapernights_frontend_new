import React from "react";
import Layout from "../components/Layout";
import blogPosts from "../constant/blogs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoShareSocialOutline } from "react-icons/io5";

const BlogPostPage = () => {
  // Dummy data for the blog post
  const blogPost = blogPosts[0];
  return (
    <Layout>
      <div className="w-full text-[#57606F] lg:text-4xl text-2xl font-semibold md:pt-[50px] pt-[40px]">
        {blogPost.title}
      </div>
      <div className="text-[#FF4757] w-full md:text-base text-sm font-semibold md:mt-[25px] mt-[10px] mb-[5px]">
        {blogPost.date}
      </div>
      <div className="w-full pt-5 pb-[150px] flex gap-[30px] md:justify-start justify-center">
        <div className="w-full flex flex-col gap-[30px] text-[#57606F] md:w-[890px]">
          <div className="w-full aspect-[890/500]">
            <img src={blogPost.image} alt="" className="w-full h-full" />
          </div>
          <div className="pt-[10px] text-lg">
            Booking a vacation rental can be exciting, but overpaying for the
            same property on different platforms? Not so much. Prices for
            vacation rentals often vary across sites like Airbnb, Booking.com,
            and Vrbo due to different service fees, host pricing strategies, and
            platform markups. Fortunately, finding the best price doesn’t have
            to be a hassle. In this guide, we’ll show you how to quickly compare
            prices and ensure you get the best deal on your next stay.
          </div>
          <div>
            <div className="text-xl font-semibold">
              Why Do Vacation Rental Prices Vary?
            </div>
            <div className="text-lg mt-[10px]">
              <span>
                Before diving into how to find the cheapest price, it's
                important to understand why prices fluctuate across platforms:
              </span>
              <ul className="list-disc ps-8">
                <li>
                  Platform Fees: Different booking websites charge different
                  service fees, which can affect the final price you pay.
                </li>
                <li>
                  Host Pricing Strategies: Some property owners list their
                  rentals on multiple sites and adjust their pricing based on
                  platform-specific demand and fees.
                </li>
                <li>
                  Exclusive Discounts: Certain platforms offer deals, discounts,
                  or loyalty programs that can make one option cheaper than
                  another.
                </li>
                <li>
                  Currency Conversion & Taxes: Prices may differ due to currency
                  exchange rates or region-specific taxes that vary by platform.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold">
              The Easiest Way to Compare Prices
            </div>
            <div className="text-lg mt-[10px]">
              <span>
                Instead of manually searching multiple platforms for the same
                rental, you can use Cheapernights.com, a powerful vacation
                rental price comparison tool that does the work for you. Here's
                how it works:
              </span>
              <div className="text-lg mt-3">
                <div className="font-semibold">
                  1. Copy the Rental Listing URL
                </div>
                <span>
                  Find the vacation rental you’re interested in on Airbnb,
                  Booking.com, Vrbo, or another booking site. Copy the URL of
                  the listing.
                </span>
              </div>
              <div className="text-lg mt-3">
                <div className="font-semibold">
                  2. Paste It Into Cheapernights.com
                </div>
                <span>
                  Go to Cheapernights.com and paste the rental URL into the
                  search bar. Our tool will instantly scan multiple booking
                  platforms to find where the same property is listed at a lower
                  price.
                </span>
              </div>
              <div className="text-lg mt-3">
                <div className="font-semibold">
                  3. Compare Prices & Book for Less
                </div>
                <span>
                  Within seconds, you’ll see a comparison of rental prices
                  across different platforms. Choose the best deal and book
                  directly through the platform offering the lowest price—saving
                  you money effortlessly!
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold">
              Tips for Saving Even More on Vacation Rentals
            </div>
            <div className="text-lg mt-[10px]">
              <ul className="list-disc ps-8">
                <li>
                  Book in Advance: Prices tend to rise as availability
                  decreases, so securing your stay early can help you save.
                </li>
                <li>
                  Be Flexible with Dates: Shifting your trip by a day or two can
                  sometimes lead to significant price differences.
                </li>
                <li>
                  Check for Discounts & Offers: Some platforms offer special
                  promotions, so always look for coupons or deals before
                  booking.
                </li>
                <li>
                  Avoid Extra Fees: Carefully review the total cost, including
                  cleaning fees and service charges, to ensure you’re truly
                  getting the best price.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold">
              Start Saving on Your Next Trip
            </div>
            <div className="text-lg mt-[10px]">
              <span>
                Finding the cheapest price for your vacation rental doesn’t have
                to be complicated. With Cheapernights.com, you can compare
                prices in seconds and make sure you never overpay again. Try it
                today and book your dream vacation for less!
              </span>
            </div>
          </div>
          <div className="flex gap-[10px] text-[#FF4757] text-sm flex-wrap">
            <div className="px-[10px] py-[5px] border-[#FF4757] rounded-[7px] border-[1px]">
              #Money Saving Tips
            </div>
            <div className="px-[10px] py-[5px] border-[#FF4757] rounded-[7px] border-[1px]">
              #Cheapernights.com
            </div>
            <div className="px-[10px] py-[5px] border-[#FF4757] rounded-[7px] border-[1px]">
              #Booking
            </div>
            <div className="px-[10px] py-[5px] border-[#FF4757] rounded-[7px] border-[1px]">
              #Tips
            </div>
          </div>
          <div className="flex gap-[10px] mt-[60px] mb-[90px]">
            <div className="py-[5px] px-5 md:flex gap-[10px] justify-center items-center text-white bg-[#3B5998] rounded-[10px] hidden">
              <FaFacebookF className="w-4 h-4" />
              <div className="text-base font-semibold">SHARE</div>
            </div>
            <div className="py-[5px] px-5 md:flex gap-[10px] justify-center items-center text-white bg-[#000000] rounded-[10px] hidden">
              <BsTwitterX className="w-4 h-4" />
              <div className="text-base font-semibold">TWEET</div>
            </div>
            <div className="py-[5px] px-5 md:flex gap-[10px] justify-center items-center text-white bg-[#25D366] rounded-[10px] hidden">
              <FaWhatsapp className="w-4 h-4" />
              <div className="text-base font-semibold">SHARE</div>
            </div>
            <div className="py-[5px] px-5 md:flex gap-[10px] justify-center items-center text-white bg-[#FF4757] rounded-[10px] hidden">
              <TfiEmail className="w-4 h-4" />
              <div className="text-base font-semibold">EMAIL</div>
            </div>
            <div className="py-[5px] px-5 flex gap-[10px] justify-center items-center text-white bg-[#57606F] rounded-[10px]">
              <IoShareSocialOutline className="w-4 h-4" />
              <div className="text-base font-semibold">SHARE</div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center border-[#DFE4EA] border-t-[1px] border-b-[1px] py-[19px]">
            <div className="w-[45%] cursor-pointer">
              <div className="text-[#FF4757] text-sm font-semibold">
                PREVIOUS
              </div>
              <div className="text-[#57606F] text-lg font-semibold mt-[10px]">
                The Ultimate Guide to Booking a Vacation Rental for Less
              </div>
            </div>
            <div className="w-[45%] text-right cursor-pointer">
              <div className="text-[#FF4757] text-sm font-semibold">NEXT</div>
              <div className="text-[#57606F] text-lg font-semibold mt-[10px]">
                Airbnb vs. Vrbo vs. Booking.com: Which One Offers the Best
                Deals?
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#57606F] lg:block hidden">
          <div>
            <div className="text-[30px] font-semibold mb-5">All Categories</div>
            <div className="text-[20px] font-semibold flex flex-col gap-[10px]">
              <div>News</div>
              <div>Money Saving Tips</div>
              <div>Booking</div>
              <div>Tips</div>
              <div>Travel Inspiration</div>
            </div>
          </div>
          <div className="mt-[60px]">
            <div className="text-[30px] font-semibold mb-5">
              Popular Articles
            </div>
            <div className="flex flex-col gap-[30px]">
              <div className="text-[20px] font-semibold ">
                The Ultimate Guide to Booking a Vacation Rental for Less
                <div className="text-sm font-semibold text-[#FF4757]">
                  25 Jan 2025
                </div>
              </div>
              <div className="text-[20px] font-semibold ">
                Airbnb vs. Vrbo vs. Booking.com: Which One Offers the Best
                Deals?
                <div className="text-sm font-semibold text-[#FF4757]">
                  25 Jan 2025
                </div>
              </div>
              <div className="text-[20px] font-semibold ">
                The Best Times to Book a Vacation Rental for Maximum Savings
                <div className="text-sm font-semibold text-[#FF4757]">
                  25 Jan 2025
                </div>
              </div>
              <div className="text-[20px] font-semibold ">
                Avoid Overpaying: How to Compare Rental Prices Like a Pro
                <div className="text-sm font-semibold text-[#FF4757]">
                  07 Feb 2025
                </div>
              </div>
              <div className="text-[20px] font-semibold ">
                Top 5 Money-Saving Hacks for Booking Vacation Rentals
                <div className="text-sm font-semibold text-[#FF4757]">
                  01 Feb 2025{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
