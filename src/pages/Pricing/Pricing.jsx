import React from "react";

import { Button, Img, List, Radio, Text } from "components";

const Pricing = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[182px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-4xl mb-[177px] mx-auto w-full">
          <div className="flex flex-col font-helvetica gap-6 h-[82px] md:h-auto items-center justify-start max-w-[661px] w-full">
            <Text
              className="text-base text-center text-gray-900_04 w-auto"
              size="txtHelveticaLight16"
            >
              Your Last Step to SEO Freedom!
            </Text>
            <Text
              className="text-center text-gray-900_04 text-xl w-auto"
              size="txtHelveticaBold20"
            >
              How Fast Do Your Organic Traffic to Grow? 🤔
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-helvetica md:gap-5 items-start justify-center mt-[47px] w-[73%] md:w-full">
            <Img
              className="h-[43px] md:mt-0 mt-[33px]"
              src="images/img_clippathgroup.svg"
              alt="clippathgroup"
            />
            <div className="flex flex-col gap-1.5 items-center justify-start md:ml-[0] ml-[19px] w-[79%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[41px] items-center justify-start p-[3px] rounded-[10px]"
                style={{ backgroundImage: "url('images/img_group39496.svg')" }}
              >
                <Text
                  className="mb-3.5 mt-[5px] text-center text-white-A700 text-xs tracking-[-0.48px]"
                  size="txtHelvetica12WhiteA700"
                >
                  Recommended Monthly Blogs
                </Text>
              </div>
              <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                <Img
                  className="h-4 md:h-auto object-cover"
                  src="images/img_group3.png"
                  alt="groupThree"
                />
                <div className="flex flex-row items-center justify-between w-[512px] sm:w-full">
                  <Text
                    className="capitalize text-gray-600_01 text-sm w-auto"
                    size="txtHelvetica14"
                  >
                    8
                  </Text>
                  <Text
                    className="capitalize text-blue_gray-900_03 text-sm"
                    size="txtHelveticaBold14Bluegray90003"
                  >
                    16
                  </Text>
                  <Text
                    className="capitalize text-gray-600_01 text-right text-sm"
                    size="txtHelvetica14"
                  >
                    24
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-12 md:ml-[0] ml-[27px] md:mt-0 mt-[31px] w-12"
              src="images/img_airplane_black_900.svg"
              alt="airplane"
            />
          </div>
          <Button
            className="border border-orange-200 border-solid cursor-pointer font-light font-poppins mt-11 text-center text-xs w-[624px]"
            shape="round"
            color="orange_A100_4c"
            size="sm"
            variant="fill"
          >
            Slow Organic Traffic & Timeline
          </Button>
          <div className="flex flex-col items-center justify-start mt-20 w-[43%] md:w-full">
            <div className="bg-gradient2  border-2 border-blue_gray-900_04 border-solid flex flex-col items-start justify-end p-6 sm:px-5 rounded-[15px] shadow-bs5 w-full">
              <div className="flex flex-col font-helvetica gap-[37px] items-start justify-start mt-[22px] w-[43%] md:w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl tracking-[-0.88px]"
                  size="txtHelvetica22"
                >
                  GOD MODE
                </Text>
                <div className="flex flex-row font-inter gap-1.5 items-start justify-between md:ml-[0] ml-[3px] w-[96%] md:w-full">
                  <Text
                    className="sm:text-[32px] md:text-[38px] text-[42px] text-right text-white-A700"
                    size="txtInterSemiBold42"
                  >
                    $14
                  </Text>
                  <Text
                    className="mt-[23px] text-center text-sm text-white-A700"
                    size="txtInterRegular14"
                  >
                    / Month
                  </Text>
                </div>
                <div className="flex flex-col font-dmsans items-center justify-start w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtDMSansBold18"
                  >
                    What’s included
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-helvetica gap-4 items-start justify-start mt-[22px] w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="8SEOOptimziedBlogsPerMonth"
                      className="text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200One"
                      label="8 SEO Optimzied Blogs Per Month"
                      id="8SEOOptimziedBlogsPerMonth"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="AutomatedTechnicalSEO"
                      className="sm:pr-5 text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Two"
                      label="Automated Technical SEO "
                      id="AutomatedTechnicalSEO"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="AutomatedInternalBacklinking"
                      className="sm:pr-5 text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Three"
                      label="Automated Internal Back linking"
                      id="AutomatedInternalBacklinking"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="HumanQualityBlogVoiceOver"
                      className="text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Four"
                      label="Human Quality Blog Voice Over"
                      id="HumanQualityBlogVoiceOver"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="Supports35Languages"
                      className="text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Five"
                      label="Supports 35 Languages"
                      id="Supports35Languages"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="AutomatedPosting"
                      className="text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Six"
                      label="Automated Posting"
                      id="AutomatedPosting"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Radio
                      value="LiveChat247Support"
                      className="text-left text-lg text-white-A700"
                      inputClassName="bg-white-A700 h-[26px] mr-[5px] rounded-[13px] w-[26px]"
                      checked={true}
                      name="text200Seven"
                      label="Live Chat 247 Support"
                      id="LiveChat247Support"
                    ></Radio>
                  </div>
                </div>
              </div>
              <Button
                className="!text-purple-800 cursor-pointer font-inter font-semibold mb-0.5 min-w-[213px] md:ml-[0] ml-[59px] mt-[150px] rounded-[5px] text-base text-center"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-10 gap-[92px] justify-start mt-[86px] w-[81%] md:w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-8 items-center justify-start max-w-[719px] md:px-10 px-16 sm:px-5 py-8 rounded-[14px] shadow-bs6 w-full">
              <div className="flex flex-row gap-[22.5px] items-center justify-start w-auto">
                <div className="flex flex-col h-[26px] items-center justify-start w-[26px]">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_star1.svg"
                    alt="starOne"
                  />
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtManropeSemiBold24"
                >
                  Trustpilot
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtManropeBold24"
                >
                  Rated 4.8/5.0
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-400_01 sm:text-xl w-auto"
                  size="txtManropeMedium24"
                >
                  More than 10,000 Happy Entrepreneurs
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-helvetica h-[30px] md:h-auto items-center justify-start max-w-[661px] ml-3.5 md:ml-[0] w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900_04 sm:text-xl w-auto"
                size="txtHelveticaBold24Gray90004"
              >
                FAQ
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-dmsans items-center justify-start mt-[45px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <div className="bg-white-A700 border-2 border-solid flex flex-col items-center justify-start p-[35px] purple_800_indigo_800_border sm:px-5 rounded-[14px] shadow-bs7 w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start mb-[41px] w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                        size="txtDMSansMedium22Bluegray90002"
                      >
                        How does the automated internal back linking work?
                      </Text>
                      <Button
                        className="flex h-[50px] items-center justify-center w-[50px]"
                        shape="circle"
                        size="xl"
                        variant="gradient"
                        color="purple_800_indigo_800"
                      >
                        <Img src="images/img_arrowdown.png" alt="arrowdown" />
                      </Button>
                    </div>
                    <Text
                      className="leading-[30.00px] text-blue_gray-500 text-lg w-[88%] sm:w-full"
                      size="txtDMSansRegular18"
                    >
                      AutoSEO internally backlinks your related blogs to each
                      other automatically to boost your ranking as it’s one of
                      Google’s main SEO factors in 2023.
                    </Text>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-3.5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[38px] sm:px-5 rounded-[18px] shadow-bs w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-[22px] text-blue_gray-900_02 sm:text-lg md:text-xl"
                        size="txtDMSansMedium22Bluegray90002"
                      >
                        How’s autoSEO much better than chatGPT?
                      </Text>
                      <Button
                        className="border border-solid flex h-[50px] items-center justify-center purple_800_indigo_800_border2 w-[50px]"
                        shape="circle"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_group35539.png" alt="group35539" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[38px] sm:px-5 rounded-[18px] shadow-bs w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="bg-clip-text bg-gradient1  text-[22px] sm:text-lg text-transparent md:text-xl"
                        size="txtDMSansMedium22Purple800"
                      >
                        How promotional or non-promotional will autoSEO blogs
                        be?
                      </Text>
                      <Button
                        className="border border-solid flex h-[50px] items-center justify-center purple_800_indigo_800_border3 w-[50px]"
                        shape="circle"
                        color="white_A700"
                        size="xl"
                        variant="fill"
                      >
                        <Img src="images/img_group35539.png" alt="group35539" />
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
