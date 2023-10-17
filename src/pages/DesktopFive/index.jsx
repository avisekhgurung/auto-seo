import React from "react";

import { Button, Img, Input, List, PagerIndicator, Text } from "components";
import DesktopFiveOconclusion from "components/DesktopFiveOconclusion";
import LoaderBar from "components/LoaderBar";
import Typewriter from "typewriter-effect";

const DesktopFivePage = () => {
  return (
    <>
      <div className="bg-gray-200_04 flex flex-col font-inter gap-[51px] items-center justify-start mx-auto w-full">
        <div className="bg-gray-200_04 flex flex-col items-center justify-start max-w-[1440px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1253px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start px-[0px] w-auto">
                <div
                  style={{
                    backdropFilter: "blur(5px)",
                    position: "fixed",
                    top: 0,
                    zIndex: 2,
                  }}
                  className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[1200px] py-[25px] "
                >
                  <div className="flex flex-col items-start justify-center pr-4 w-auto">
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Img
                          className="h-[34px] md:h-auto object-cover w-[150px]"
                          src="images/img_btlogopng.png"
                          alt="btlogopng"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200_04 border border-solid border-white-A700_14 flex md:flex-1 flex-col items-end justify-start p-[5px] rounded-[24px] md:w-full">
                    <div className="flex flex-col items-center justify-start mr-2  md:w-full">
                      <Button
                        className="cursor-pointer font-semibold min-w-[112px] rounded-[19px] text-[13px] text-center tracking-[0.20px]"
                        color="indigo_900"
                        size="md"
                      >
                        Try For Free{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Img
            className="h-1 sm:h-auto object-cover w-[1440px] md:w-full"
            src="images/img_group42311.png"
            alt="group42311"
          /> */}
          <LoaderBar />
        </div>
        <div className="mt-[3rem] font-worksans md:h-[3747px] h-[3811px] max-w-[1241px] mx-auto md:px-5 relative w-full">
          <div className="absolute md:h-[3630px] h-[3630px] inset-y-[0]  right-[13%] w-[66%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex flex-col gap-8 items-center justify-start max-w-[800px] w-full">
                <div className="flex flex-col gap-8 items-center justify-start max-w-[695px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[101px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_01"
                        size="sm"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[40.00px] max-w-[695px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900_03"
                        size="txtWorkSansSemiBold36"
                      >
                        <Typewriter
                          options={{
                            strings: [" The Impact of Technology on the Workplace: How Technology is Changing"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                       
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtWorkSansRomanRegular14"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[462px] md:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_image_462x695.png"
                    alt="image_One"
                  />
                  <div className="flex flex-col font-sourceserifpro items-start justify-start w-full">
                    <Text
                      className="leading-[32.00px] text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      <>
                      <Typewriter
                          options={{
                            strings: [`Traveling is an enriching experience that opens up new
                            horizons, exposes us to different cultures, and creates
                            memories that last a lifetime. However, traveling can
                            also be stressful and overwhelming, especially if you
                            don&#39;t plan and prepare adequately. In this blog
                            article, we&#39;ll explore tips and tricks for a
                            memorable journey and how to make the most of your
                            travels.`,   `
                            One of the most rewarding aspects of traveling is
                    immersing yourself in the local culture and customs.
                    This includes trying local cuisine, attending cultural
                    events and festivals, and interacting with locals.
                    Learning a few phrases in the local language can also go
                    a long way in making connections and showing respect.
                            `],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                       
                        <br />
                        <br />
                       
                        
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Research Your Destination
                    </Text>
                    <Text
                      className="leading-[32.00px] text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      <>
                        Before embarking on your journey, take the time to
                        research your destination. This includes understanding
                        the local culture, customs, and laws, as well as
                        identifying top attractions, restaurants, and
                        accommodations. Doing so will help you navigate your
                        destination with confidence and avoid any cultural faux
                        pas.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. In hendrerit gravida rutrum quisque non
                        tellus orci ac auctor. Mi ipsum faucibus vitae aliquet
                        nec ullamcorper sit amet. Aenean euismod elementum nisi
                        quis eleifend quam adipiscing vitae. Viverra adipiscing
                        at in tellus.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Plan Your Itinerary
                    </Text>
                    <Text
                      className="leading-[32.00px] text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      <>
                        While it&#39;s essential to leave room for spontaneity
                        and unexpected adventures, having a rough itinerary can
                        help you make the most of your time and budget. Identify
                        the must-see sights and experiences and prioritize them
                        according to your interests and preferences. This will
                        help you avoid overscheduling and ensure that you have
                        time to relax and enjoy your journey.
                        <br />
                        <br />
                        Vitae sapien pellentesque habitant morbi tristique.
                        Luctus venenatis lectus magna fringilla. Nec ullamcorper
                        sit amet risus nullam eget felis. Tincidunt arcu non
                        sodales neque sodales ut etiam sit amet.
                      </>
                    </Text>
                  </div>
                  <div className="bg-gray-100 border-gray-200_05 border-l-4 border-solid flex flex-col font-sourceserifpro items-center justify-start p-8 sm:px-5 rounded-[12px] w-full">
                    <Text
                      className="leading-[32.00px] max-w-[631px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                      size="txtSourceSerifProIt24"
                    >
                      <>
                        “ Traveling can expose you to new environments and
                        potential health risks, so it&#39;s crucial to take
                        precautions to stay safe and healthy. ”
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[462px] md:h-auto object-cover rounded-[12px] w-full"
                    src="images/img_image_2.png"
                    alt="image_Two"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Pack Lightly and Smartly
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[695px] md:max-w-full text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      Packing can be a daunting task, but with some careful
                      planning and smart choices, you can pack light and
                      efficiently. Start by making a packing list and sticking
                      to it, focusing on versatile and comfortable clothing that
                      can be mixed and matched. Invest in quality luggage and
                      packing organizers to maximize space and minimize
                      wrinkles.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Stay Safe and Healthy
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[695px] md:max-w-full text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      <>
                        Traveling can expose you to new environments and
                        potential health risks, so it&#39;s crucial to take
                        precautions to stay safe and healthy. This includes
                        researching any required vaccinations or medications,
                        staying hydrated, washing your hands frequently, and
                        using sunscreen and insect repellent. It&#39;s also
                        essential to keep your valuables safe and secure and to
                        be aware of your surroundings at all times.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Immerse Yourself in the Local Culture
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[695px] md:max-w-full text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      One of the most rewarding aspects of traveling is
                      immersing yourself in the local culture and customs. This
                      includes trying local cuisine, attending cultural events
                      and festivals, and interacting with locals. Learning a few
                      phrases in the local language can also go a long way in
                      making connections and showing respect.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                      size="txtWorkSansSemiBold24"
                    >
                      Capture Memories
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[695px] md:max-w-full text-gray-800 text-xl"
                      size="txtSourceSerifProRegular20"
                    >
                      <>
                        Finally, don&#39;t forget to capture memories of your
                        journey. Whether it&#39;s through photographs,
                        journaling, or souvenirs, preserving the moments and
                        experiences of your travels can bring joy and nostalgia
                        for years to come. However, it&#39;s also essential to
                        be present in the moment and not let technology distract
                        you from the beauty of your surroundings.
                      </>
                    </Text>
                  </div>
                </div>
                <DesktopFiveOconclusion className="flex flex-col gap-12 items-start justify-start max-w-[800px] w-full" />
              </div>
            </div>
            <div
              style={{ backdropFilter: "blur(10px)" }}
              className="absolute bg-white-A700_6d bottom-[0] flex flex-col font-inter h-[1950px] md:h-auto inset-x-[0] items-center justify-start max-w-[804px] mx-auto sm:px-5 px-6 py-8 rounded-[16px] w-full"
            >
              <div className="flex flex-col items-start justify-start pt-[80px] w-[300px]">
                <button className="cursor-pointer font-semibold rounded-[14px] shadow-bs5 sm:text-[21px] md:text-[23px] text-[25px] text-center w-[300px] bg-[#060640] text-[#fff] p-[1rem] ml-[-1rem]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute  bottom-1/4 flex flex-col font-helvetica inset-x-[0] items-start justify-end mx-auto p-[25px] sm:px-5 rounded-[25px] w-[99%]">
            <div className="flex flex-col justify-start ml-3 md:ml-[0] mt-5 w-[93%] md:w-full">
              <Text
                className="md:ml-[0] ml-[182px] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtHelveticaBold42"
              >
                What Busy Founders & Marketers Say...
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[116px] w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[41px] md:mt-0 mt-[76px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                  <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-black-900 text-center text-lg"
                          size="txtHelveticaBold18"
                        >
                          Leo
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtHelvetica12"
                        >
                          Lead Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                      <Img
                        className="h-5"
                        src="images/img_formkitpeople.svg"
                        alt="formkitpeople"
                      />
                      <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                        <Img
                          className="h-[13px] m-auto"
                          src="images/img_contrast.svg"
                          alt="contrast"
                        />
                        <Img
                          className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                          src="images/img_contrast_black_900.svg"
                          alt="contrast_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[85px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Subscriber
                      </Text>
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Views
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        340k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        17.7 M+
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                      size="txtHelvetica12"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu.
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[37%] md:w-full">
                  <div className="bg-[#060640]  flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full">
                    <div className="flex flex-col justify-start mb-[22px] mt-4 w-full">
                      <div className="flex flex-row gap-[9px] items-center justify-start w-[42%] md:w-full">
                        <Img
                          className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_ellipse5.png"
                          alt="ellipseFive"
                        />
                        <div className="flex flex-col gap-[7px] items-start justify-start">
                          <Text
                            className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtHelveticaBold24"
                          >
                            Daniyal
                          </Text>
                          <Text
                            className="text-center text-lg text-white-A700"
                            size="txtHelvetica18"
                          >
                            Founder @BeTimeful
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Img
                          className="h-10"
                          src="images/img_formkitpeople_white_a700.svg"
                          alt="formkitpeople_One"
                        />
                        <div className="h-10 w-10">
                          <Img
                            className="h-10"
                            src="/view.svg"
                            alt="formkitpeople_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between ml-4 md:ml-[0] mt-[7px] w-[88%] md:w-full">
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Organic Traffic
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Blogs Ranking
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[13px] w-[77%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          340k+
                        </Text>
                        <Text
                          className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtHelveticaBold24"
                        >
                          17.7 M+
                        </Text>
                      </div>
                      <Text
                        className="mt-[18px] text-center text-lg text-white-A700 w-full"
                        size="txtHelvetica18"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cursus nibh mauris, nec turpis orci lectus maecenas.
                        Suspendisse sed magna eget nibh in turpis. Consequat
                        duis diam lacus arcu.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-9 md:mt-0 mt-[81px] p-[17px] rounded-[12px] shadow-bs4 w-[26%] md:w-full">
                  <div className="flex flex-col justify-start mb-[3px] mt-3 w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-[62%] md:w-full">
                      <Img
                        className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                        src="images/img_ellipse6.png"
                        alt="ellipseSix_One"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-black-900 text-center text-lg"
                          size="txtHelveticaBold18"
                        >
                          Leo
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xs"
                          size="txtHelvetica12"
                        >
                          Lead Designer
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[27px] w-[66%] md:w-full">
                      <Img
                        className="h-5"
                        src="images/img_formkitpeople.svg"
                        alt="formkitpeople_Two"
                      />
                      <div className="h-5 md:h-[13px] py-[3px] relative w-5">
                        <Img
                          className="h-[13px] m-auto"
                          src="images/img_contrast.svg"
                          alt="contrast_Two"
                        />
                        <Img
                          className="absolute h-[7px] inset-[0] justify-center m-auto w-[7px]"
                          src="images/img_contrast_black_900.svg"
                          alt="contrast_Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[85px] items-center justify-start ml-5 md:ml-[0] mt-[9px] w-[79%] md:w-full">
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Subscriber
                      </Text>
                      <Text
                        className="text-black-900 text-center text-sm"
                        size="txtHelveticaLight14"
                      >
                        Views
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[81px] items-center justify-end ml-8 md:ml-[0] mt-1.5 w-[82%] md:w-full">
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        340k+
                      </Text>
                      <Text
                        className="text-blue_gray-700 text-center text-lg"
                        size="txtHelveticaBold18Bluegray700"
                      >
                        17.7 M+
                      </Text>
                    </div>
                    <Text
                      className="ml-1 md:ml-[0] mt-[22px] text-black-900 text-center text-xs w-[99%] sm:w-full"
                      size="txtHelvetica12"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cursus nibh mauris, nec turpis orci lectus maecenas.
                      Suspendisse sed magna eget nibh in turpis. Consequat duis
                      diam lacus arcu.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center md:ml-[0] ml-[378px] mt-[35px] w-[30%] md:w-full">
                <Img
                  className="h-9 md:h-auto object-cover w-9"
                  src="/arrow-left.svg"
                  alt="chevrondown"
                />
                <PagerIndicator
                  className="flex h-[17px] ml-9 w-[177px]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[17px]  bg-[#060640]  w-[17px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[17px] bg-gray-400_01 w-[17px]"
                  selectedWrapperCss="inline-block mx-[7.50px]"
                  unselectedWrapperCss="inline-block mx-[7.50px]"
                />
                <Img
                  className="h-9 md:h-auto ml-[37px] object-cover w-9"
                  src="/arrow-right.svg"
                  alt="chevrondown_One"
                />
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-worksans gap-2.5 items-center justify-start p-4 right-[0] rounded-[12px] top-[0] w-auto">
            <div className="flex flex-col gap-4 items-center justify-start w-auto">
              <div className="bg-white-A700 flex flex-col gap-[7.5px] items-center justify-start px-3 py-[9px] rounded-[9px] w-[132px]">
                <div className="flex flex-col font-dmsans gap-[9px] h-[75px] md:h-auto items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-24 sm:w-full"
                    src="images/img_graph.png"
                    alt="graph"
                  />
                  <div className="flex flex-col items-center justify-between w-[108px]">
                    <Text
                      className="text-[15px] text-center text-green-A700 w-auto"
                      size="txtDMSansBold15GreenA700"
                    >
                      60
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-[13.5px] text-center text-gray-900_03"
                  size="txtWorkSansRomanRegular135"
                >
                  <span className="text-gray-900_03 font-worksans font-normal">
                    <>
                      Overall score
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900_03 font-worksans font-bold">
                    High
                  </span>
                </Text>
              </div>
              <div className="bg-green-A100 border border-green-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                <Text
                  className="text-gray-900_04 text-xs w-auto"
                  size="txtDMSansRegular12"
                >
                  16500
                </Text>
                <Img
                  className="h-2.5 w-[11px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Text
                  className="text-[11px] text-green-A700 w-auto"
                  size="txtPoppinsRegular11"
                >
                  High
                </Text>
              </div>
              <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                <Text
                  className="text-gray-900_04 text-xs w-auto"
                  size="txtDMSansRegular12"
                >
                  Competition
                </Text>
                <Img
                  className="h-2.5 w-[11px]"
                  src="images/img_trash.svg"
                  alt="trash"
                />
                <Text
                  className="text-[11px] text-amber-A700 w-auto"
                  size="txtPoppinsRegular11AmberA700"
                >
                  Medium
                </Text>
              </div>
            </div>
            <Img
              className="h-[26px] w-full"
              src="images/img_frame1000002924.svg"
              alt="frame1000002924"
            />
            <div className="flex flex-col items-start justify-start w-auto">
              <List
                className="flex flex-col gap-[23px] items-center w-full"
                orientation="vertical"
              >
                <Text
                  className="text-[13.5px] text-center text-gray-900_03 w-auto"
                  size="txtWorkSansRomanRegular135"
                >
                  Share this blog:
                </Text>
                <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                  <Button
                    className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                    color="white_A700"
                    size="sm"
                  >
                    <Img
                      className="h-[34px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </Button>
                  <Button
                    className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                    color="white_A700"
                    size="sm"
                  >
                    <Img
                      className="h-[34px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </Button>
                </div>
                <div className="flex flex-row gap-[17.29px] items-start justify-start w-auto">
                  <Button
                    className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                    color="white_A700"
                    size="sm"
                  >
                    <Img
                      className="h-[34px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </Button>
                  <Button
                    className="flex h-[51px] items-center justify-center rounded-[25px] w-[51px]"
                    color="white_A700"
                    size="sm"
                  >
                    <Img
                      className="h-[34px]"
                      src="images/img_reddit.svg"
                      alt="reddit"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid flex flex-col font-worksans gap-6 items-start justify-start left-[0] px-4 py-6 rounded-[12px] top-[0] w-[303px]">
            <Text
              className="text-gray-900_03 text-lg w-auto"
              size="txtWorkSansSemiBold18"
            >
              Table of Content
            </Text>
            <div className="flex flex-col gap-4 items-start justify-start px-4 w-full">
              <Text
                className="text-gray-900_03 text-sm w-auto"
                size="txtWorkSansRomanRegular14Gray90003"
              >
                {" "}
                Travelling is an enriching
              </Text>
              <Input
                name="frame1000002923"
                placeholder="Research your destination"
                className="font-medium p-0 placeholder:text-indigo-900 text-left text-sm w-full"
                wrapClassName="rounded-md w-full"
                color="deep_purple_50"
              ></Input>
              <div className="flex flex-col gap-[27px] items-start justify-start">
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Plan your Itienarary
                </Text>
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Pack Lightly and smartly
                </Text>
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Stay safe and healthy
                </Text>
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Immerse yourself in local culture
                </Text>
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Capture Memories
                </Text>
                <Text
                  className="text-gray-900_03 text-sm w-auto"
                  size="txtWorkSansRomanRegular14Gray90003"
                >
                  {" "}
                  Conclusion
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
