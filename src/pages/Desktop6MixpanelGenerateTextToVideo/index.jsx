import React, { useState } from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import PInput from "components/Desktop6MixpanelGenerateTextToVideoPhoneinput";
import Desktop6MixpanelGenerateTextToVideoRowcreateainstareeOne from "components/Desktop6MixpanelGenerateTextToVideoRowcreateainstareeOne";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";

const Desktop6MixpanelGenerateTextToVideoPage = () => {
  const [successUrl, setSuccessUrl] = useState(false);
  const [checkUrlStatus, setCheckUrlStatus] = useState(true);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [confirmClick, setConfirmClick] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const enteredValue = e.target.value;
    setInput(enteredValue);
    setConfirmClick(false);
  };

  const handleConfirm = () => {}

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-helvetica gap-5 items-center justify-start mx-auto w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 w-[1400px] m-auto pt-3">
          <Img
            className="h-[70px] md:h-auto object-cover w-[70px]"
            src="/logo.png"
            alt="youtubeOne"
          />
          {/* <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between mb-[9px] ml-8 md:ml-[0] md:mt-0 mt-5 pl-3 w-[87%] md:w-full">
            <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-start pr-[13px] py-[13px] w-[48%] md:w-full common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[8.69px] items-center justify-start my-4 px-[11px] py-2.5">
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtHelveticaBold14"
                    >
                      Product
                    </Text>
                    <Img
                      className="h-[7px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[8.31px] items-center justify-start ml-4 my-4 p-2.5">
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtHelveticaBold14"
                    >
                      Solutions
                    </Text>
                    <Img
                      className="h-[7px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[8.73px] items-center justify-start ml-4 my-4 p-2.5">
                    <Text
                      className="text-blue_gray-900 text-center text-sm w-auto"
                      size="txtHelveticaBold14"
                    >
                      Learn
                    </Text>
                    <Img
                      className="h-[7px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_Two"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[26px] text-blue_gray-900 text-sm"
                >
                  <Text size="txtHelveticaBold14">Pricing</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[37px] text-blue_gray-900 text-sm"
                >
                  <Text size="txtHelveticaBold14">Enterprise</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-[9px] items-center justify-end sm:pl-5 pl-[29px] py-[29px] w-[34%] md:w-full">
              <div className="flex flex-col items-start justify-start pb-[10.59px] pl-6 pr-[24.72px] pt-[11px] sm:px-5 rounded-[9px] shadow-bs2 w-auto">
                <a
                  href="javascript:"
                  className="bg-clip-text bg-gradient1  text-center text-sm text-transparent w-auto"
                >
                  <Text size="txtHelveticaBold14Pink500">Sign Up</Text>
                </a>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(80deg, #FF335B 0%, #FFB3B3 100%)",
                }}
                className="flex flex-col items-start justify-start pb-[10.59px] pl-6 pr-[24.44px] pt-[11px] sm:px-5 rounded-[9px] shadow-bs2 w-auto"
              >
                <a
                  href="javascript:"
                  className="text-sm text-white-A700 w-auto"
                >
                  <Text size="txtHelveticaBold14WhiteA700">Log in</Text>
                </a>
              </div>
            </div>
          </div> */}
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-11 h-[621px] md:h-auto items-center justify-between max-w-[1440px] md:px-[10px] sm:px-5  mt-[-45px] w-full">
            <div className="md:h-80 h-[540px] relative w-[53%] md:w-full">
              <div className="md:h-80 h-[540px] m-auto w-full">
                <div className="absolute flex flex-col md:h-auto h-full inset-[0] items-center justify-start m-auto max-w-[627px] pt-8 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="h-36 relative w-full">
                        <div className="backdrop-opacity-[0.5] blur-[1.00px] h-36 m-auto w-[99%]"></div>
                        <Text
                          className="absolute h-full inset-[0] justify-center leading-[72.00px] m-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-2.00px] w-full"
                          size="txtHelveticaBold40"
                        >
                          Let AI Drive Your Organic Traffic, While You Drive
                          Your Business!
                        </Text>
                      </div>
                      <Text
                        className="leading-[40.00px] max-w-[613px] md:max-w-full text-[22px] text-gray-700 sm:text-lg md:text-xl"
                        size="txtHelveticaLight22"
                      >
                        <span className="text-gray-700 font-helvetica text-left font-light">
                          No Time for SEO? No Problem. Automate Your Entire SEO
                          in{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-gray-700 font-helvetica text-left font-light underline"
                        >
                          1 Click
                        </a>
                        <span className="text-gray-700 font-helvetica text-left font-light">
                          {" "}
                          run on{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-gray-700 font-helvetica text-left font-light underline"
                        >
                          Auto Pilot
                        </a>
                        <span className="text-gray-700 font-helvetica text-left font-light">
                          . Built by SEO Gurus.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <PInput className="absolute left-[1.5rem] bottom-[6%] flex flex-col font-opensans gap-1 items-center justify-start  w-[425px] sm:w-full" />
              </div>
               <Box style={{ display: "flex", marginTop: '-200px', width: "679px" }}>
                  <Box className="ml-[1.5rem]" width="70%">
                    <p className="url-text">Your website URL</p>
                    <TextField
                      variant="outlined"
                      type="text"
                      fullWidth
                      InputProps={{ style: { borderRadius: "15px" } }}
                      disabled={successUrl}
                      value={input}
                      onChange={handleChange}
                      placeholder="example.com"
                      error={confirmClick && !isValidUrl}
                      sx={{
                        borderRadius: "15px !important",
                        "&.MuiTextField-root.Mui-error": {
                          borderColor: "red",
                        },
                      }}
                    />
                  </Box>
                  <Box width="30%" style={{ position: "relative" }}>
                    {!successUrl && !checkUrlStatus && (
                      <CircularProgress
                        style={{
                          color: "purple",
                          position: "absolute",
                          top: "56px",
                          left: "10px",
                        }}
                      />
                    )}
                  </Box>
                </Box>
                {confirmClick && !isValidUrl && (
                  <Typography
                    variant="h6"
                    style={{
                      color: "red",
                      marginTop: "2px",
                      fontSize: "12px",
                    }}
                  >
                    Entered URL is not valid.
                  </Typography>
                )}
            </div>
            <img style={{width: '100%', marginLeft: '3em'}} src="/landing.png" alt=""/>
            <div className="">
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-3 items-center justify-start mt-[40px] pt-2.5 w-full">
            <Text
              className="text-base text-blue_gray-900_01 text-center tracking-[1.00px]"
              size="txtMontserratRomanBold16"
            >
              Easily integrates with
            </Text>
            <div className="flex flex-col font-avenirnext items-center justify-end pt-6 sm:px-5 px-6 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[72.82px] items-center justify-start max-w-[1230px] mx-auto md:px-5 w-full">
                <Img
                  className="h-[34px] w-[121px]"
                  src="images/img_shopifylogo.svg"
                  alt="shopifylogo"
                />
                <Img
                  className="h-[38px] w-12"
                  src="images/img_wixlogo.svg"
                  alt="wixlogo"
                />
                <Img
                  className="h-[30px] w-[121px]"
                  src="images/img_webflowlogo.svg"
                  alt="webflowlogo"
                />
                <Img
                  className="h-[34px] w-[154px]"
                  src="images/img_wordpresslockup.svg"
                  alt="wordpresslockup"
                />
                <Img
                  className="h-[34px] w-[242px]"
                  src="images/img_squarespacelogo.svg"
                  alt="squarespacelogo"
                />
                <div className="flex md:flex-1 flex-col items-center justify-end p-[3px] rounded-[13px] w-[15%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-2 w-[99%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <Text
                      className="text-[19.9px] text-blue_gray-200 text-center"
                      size="txtAvenirNextBold199"
                    >
                      Your Website
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10rem]">
            <div className="flex gap-[2rem]">
              <img src="/10.png"/>
              <img src="/11.png"/>
            </div>
            <div className="flex mt-[3rem] gap-[2rem]">
            <img src="/12.png"/>
              <img src="/13.png"/>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-helvetica items-center justify-start max-w-6xl mt-[151px] mx-auto pt-[37px] md:px-5 px-[37px] rounded-[25px] w-full">
            <div className="flex flex-col justify-start mt-2 w-full">
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
                      <div className="flex flex-row gap-2 items-center justify-start w-[86%] md:w-full">
                        <Img
                          className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                          src="images/img_ellipse5.png"
                          alt="ellipseFive"
                        />
                        <div className="flex flex-col gap-[9px] items-start justify-start">
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
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[31px] mt-1.5 w-[74%] md:w-full">
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Subscriber
                        </Text>
                        <Text
                          className="text-center text-lg text-white-A700"
                          size="txtHelveticaLight18"
                        >
                          Views
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[41px] mt-[15px] w-[77%] md:w-full">
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
              <div className="flex flex-row items-start justify-center md:ml-[0] ml-[378px] mt-[35px] w-[30%] md:w-full">
                <Img
                  className="h-[31px] md:h-auto object-cover"
                  src="/arrow-left.svg"
                  alt="chevrondown"
                />
                <PagerIndicator
                  className="flex h-[17px] ml-9 mt-2.5 w-[177px]"
                  count={6}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[17px] w-[17px] bg-[#060640]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[17px] bg-gray-400_01 w-[17px]"
                  selectedWrapperCss="inline-block mx-[7.50px]"
                  unselectedWrapperCss="inline-block mx-[7.50px]"
                />
                <Img
                  className="h-[31px] md:h-auto ml-[37px] object-cover"
                  src="/arrow-right.svg"
                  alt="chevrondown_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-900_03 flex flex-col font-dmsans items-center justify-end mt-[151px] p-[58px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-0.5 w-[26%] md:w-full">
              <Text
                className="text-[17px] text-center text-white-A700_87 tracking-[-0.23px]"
                size="txtDMSansRegular17"
              >
                Are you ready?
              </Text>
              <Text
                className="mt-5 md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 tracking-[-0.44px]"
                size="txtDMSansRegular32"
              >
                Let’s get started
              </Text>
              <div className="flex flex-col gap-[58px] items-center justify-start mt-[26px] w-[59%] md:w-full">
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[175px] ml-0.5 md:ml-[0] text-[17px] text-center tracking-[-0.23px]"
                  shape="round"
                  size="md"
                  variant="gradient"
                  color="purple_800_indigo_800"
                >
                  Get started
                </Button>
                <div className="flex flex-row items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-white-A700 tracking-[-0.20px]"
                    size="txtDMSansRegular15"
                  >
                    Affliate
                  </Text>
                  <Img
                    className="h-[18px] ml-[3px] mt-[3px] w-[18px]"
                    src="images/img_settings_white_a700.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-[39px] text-[15px] text-white-A700 tracking-[-0.20px]"
                    size="txtDMSansRegular15"
                  >
                    Discord
                  </Text>
                  <Img
                    className="h-[25px] ml-2"
                    src="images/img_logo.svg"
                    alt="logo"
                  />
                </div>
              </div>
              <Text
                className="mt-[27px] text-[15px] text-white-A700_87 tracking-[-0.20px]"
                size="txtDMSansRegular15WhiteA70087"
              >
                Copyright © 2020. LogoIpsum. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop6MixpanelGenerateTextToVideoPage;
