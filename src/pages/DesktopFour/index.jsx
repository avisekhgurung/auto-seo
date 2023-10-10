import React from "react";

import { Button, Img, List, Text } from "components";

const DesktopFourPage = () => {
  return (
    <>
      <div className="bg-gray-200_04 flex flex-col font-dmsans items-center justify-start mx-auto p-3 w-full">
        <div className="flex flex-col md:gap-10 gap-[137px] items-center justify-start max-w-[1241px] mb-[23px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-[99%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <Img
                className="h-14 md:h-auto sm:mt-0 mt-[35px] object-cover"
                src="images/img_image67.png"
                alt="imageSixtySeven"
              />
              <Img
                className="h-[97px] md:h-auto object-cover"
                src="images/img_screenshot202.png"
                alt="screenshot202"
              />
            </div>
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-2">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                <>About &lt;BeTimeful&gt;</>
              </Text>
            </div>
            <div className="border border-gray-500_02 border-solid flex md:flex-col flex-row gap-[7px] h-[105px] md:h-auto items-end justify-end max-w-[1208px] ml-1 md:ml-[0] mt-[41px] p-6 sm:px-5 rounded-lg w-full">
              <Text
                className="leading-[30.00px] max-w-[1057px] md:max-w-full text-blue_gray-500 text-lg"
                size="txtDMSansRegular18"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <div className="flex flex-col font-helvetica h-11 md:h-auto items-center justify-center sm:px-5 px-6 py-3 w-[78px]">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="bg-clip-text bg-gradient  text-center text-sm text-transparent w-auto"
                    size="txtHelveticaBold14Purple800"
                  >
                    Update
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-[17px]">
              <Text
                className="text-[22px] text-blue_gray-900_04 sm:text-lg md:text-xl"
                size="txtDMSansMedium22"
              >
                BeTimeful’s Blogspace
              </Text>
            </div>
          </div>
          <div className="font-worksans h-[2158px] md:h-[3240px] sm:h-[4988px] relative w-full">
            <div className="absolute flex flex-col gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
              <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] relative w-full">
                <div className="h-[1419px] md:h-[2224px] sm:h-[3464px] m-auto w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <List
                      className="flex flex-col gap-5 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-1 flex-col h-[696px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[147px] items-start justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38.png"
                                  alt="rectangleThirtyEight"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <div className="flex flex-row gap-3 items-center justify-start w-[85%] md:w-full">
                                      <Button
                                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                        shape="round"
                                        color="indigo_A200_0c"
                                      >
                                        Technology
                                      </Button>
                                      <Button
                                        className="cursor-pointer font-medium min-w-[182px] rounded-md text-center text-sm"
                                        shape="round"
                                        color="indigo_A200_0c"
                                      >
                                        Environmental Changes
                                      </Button>
                                    </div>
                                    <Text
                                      className="leading-[28.00px] text-2xl md:text-[22px] text-gray-900_03 sm:text-xl w-full"
                                      size="txtWorkSansSemiBold24"
                                    >
                                      The Impact of Technology on the Workplace:
                                      How Technology is Changing
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_240x360.png"
                                  alt="rectangleThirtyEight_One"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_One"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                                    <div className="bg-amber-100 border border-amber-A700 border-solid flex flex-row gap-1 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        10000
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_trash.svg"
                                        alt="trash_One"
                                      />
                                      <Text
                                        className="text-[11px] text-amber-A700 w-auto"
                                        size="txtPoppinsRegular11AmberA700"
                                      >
                                        Medium
                                      </Text>
                                    </div>
                                    <div className="bg-deep_orange-50 border border-deep_orange-A700 border-solid flex flex-row gap-0.5 items-center justify-start px-2 py-[3px] rounded-md w-auto">
                                      <Text
                                        className="text-gray-900_04 text-xs w-auto"
                                        size="txtDMSansRegular12"
                                      >
                                        Competition
                                      </Text>
                                      <Img
                                        className="h-2.5 w-[11px]"
                                        src="images/img_skill.svg"
                                        alt="skill"
                                      />
                                      <Text
                                        className="text-[11px] text-deep_orange-A700 w-auto"
                                        size="txtPoppinsRegular11DeeporangeA700"
                                      >
                                        High
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_1.png"
                                  alt="rectangleThirtyEight_Two"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_Two"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                        alt="signal_One"
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
                                        alt="trash_Two"
                                      />
                                      <Text
                                        className="text-[11px] text-amber-A700 w-auto"
                                        size="txtPoppinsRegular11AmberA700"
                                      >
                                        Medium
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtDMSansBold15"
                          >
                            November
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col h-[703px] md:h-auto items-start justify-start my-0 w-auto md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[111px] justify-start w-full">
                          <div className="font-worksans gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_2.png"
                                  alt="rectangleThirtyEight"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                              </div>
                            </div>
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_3.png"
                                  alt="rectangleThirtyEight_One"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_One"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                      alt="signal_One"
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
                                      alt="trash_One"
                                    />
                                    <Text
                                      className="text-[11px] text-amber-A700 w-auto"
                                      size="txtPoppinsRegular11AmberA700"
                                    >
                                      Medium
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-1 flex-col gap-4 items-start justify-center p-4 rounded-[12px] w-full">
                              <div className="h-60 relative w-full">
                                <Img
                                  className="h-60 m-auto object-cover rounded-md w-full"
                                  src="images/img_rectangle38_4.png"
                                  alt="rectangleThirtyEight_Two"
                                />
                                <div className="absolute bg-white-A700 flex flex-col h-[89px] items-center justify-start p-1.5 right-[3%] rounded-md top-[5%] w-[89px]">
                                  <div className="flex flex-col font-dmsans gap-1.5 h-[50px] md:h-auto items-center justify-start w-auto">
                                    <Img
                                      className="h-8 md:h-auto object-cover w-16 sm:w-full"
                                      src="images/img_graph.png"
                                      alt="graph_Two"
                                    />
                                    <div className="flex flex-col items-center justify-between w-[72px]">
                                      <Text
                                        className="text-[10px] text-center text-green-A700"
                                        size="txtDMSansBold10"
                                      >
                                        60
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="text-[9px] text-center text-gray-900_03"
                                    size="txtWorkSansRomanRegular9"
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
                              </div>
                              <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                                <div className="flex flex-col gap-4 items-start justify-start w-full">
                                  <Button
                                    className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                                    shape="round"
                                    color="indigo_A200_0c"
                                  >
                                    Technology
                                  </Button>
                                  <Text
                                    className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                                    size="txtWorkSansSemiBold24"
                                  >
                                    The Impact of Technology on the Workplace:
                                    How Technology is Changing
                                  </Text>
                                </div>
                                <div className="flex flex-col items-center justify-start w-auto">
                                  <Text
                                    className="text-base text-gray-500_03 w-auto"
                                    size="txtWorkSansRomanRegular16"
                                  >
                                    August 20, 2022
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start w-auto">
                                <div className="flex flex-row gap-5 items-start justify-start w-auto">
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
                                      alt="signal_Two"
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
                                      alt="trash_Two"
                                    />
                                    <Text
                                      className="text-[11px] text-amber-A700 w-auto"
                                      size="txtPoppinsRegular11AmberA700"
                                    >
                                      Medium
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="ml-2 md:ml-[0] text-[15px] text-black-900"
                            size="txtDMSansBold15"
                          >
                            December Blogs
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  {/* <div className="absolute md:h-[198px] h-[234px] left-[16%] top-[35%] w-[36%] sm:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                      style={{
                        backgroundImage: "url('images/img_group2.svg')",
                      }}
                    >
                      <Img
                        className="h-10 w-10"
                        src="images/img_music.svg"
                        alt="music"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-5 left-[0]"
                      src="images/img_fragmentsarrow.svg"
                      alt="fragmentsarrow"
                    />
                    <div className="absolute flex flex-col h-10 items-center justify-start right-[0] rounded-[50%] top-[0] w-10">
                      <Img
                        className="h-10 rounded-[50%] w-10"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div> */}
                </div>
                {/* <div className="absolute md:h-[198px] h-[234px] right-[16%] rotate-[180deg] top-[35%] w-[36%] sm:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[79px] md:px-10 sm:px-5 w-[92%]"
                    style={{ backgroundImage: "url('images/img_group3.svg')" }}
                  >
                    <Img
                      className="h-10 w-10"
                      src="images/img_music_purple_a400_01.svg"
                      alt="music_One"
                    />
                  </div>
                  <Img
                    className="absolute h-5 right-[0] top-[0]"
                    src="images/img_sort.svg"
                    alt="sort"
                  />
                  <div className="absolute bottom-[0] flex flex-col h-10 items-center justify-start left-[0] rounded-[50%] w-10">
                    <Img
                      className="h-10 rounded-[50%] w-10"
                      src="images/img_location_white_a700.svg"
                      alt="location_One"
                    />
                  </div>
                </div> */}
              </div>
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_5.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Jason Francisco
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_6.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image_36x36.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Elizabeth Slavin
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-gray-200_05 border-solid flex flex-col gap-4 items-center justify-center p-4 rounded-[12px] w-[392px] sm:w-full">
                  <Img
                    className="h-60 sm:h-auto object-cover rounded-md w-[360px] md:w-full"
                    src="images/img_rectangle38_7.png"
                    alt="rectangleThirtyEight"
                  />
                  <div className="flex flex-col gap-5 items-start justify-start p-2 w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[97px] rounded-md text-center text-sm"
                        shape="round"
                        color="indigo_A200_0c"
                      >
                        Technology
                      </Button>
                      <Text
                        className="leading-[28.00px] max-w-[344px] md:max-w-full text-2xl md:text-[22px] text-gray-900_03 sm:text-xl"
                        size="txtWorkSansSemiBold24"
                      >
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-auto">
                      <div className="flex flex-row gap-3 items-center justify-start w-auto">
                        <Img
                          className="h-9 md:h-auto rounded-[50%] w-9"
                          src="images/img_image_1.png"
                          alt="image_One"
                        />
                        <Text
                          className="text-base text-gray-500_03 w-auto"
                          size="txtWorkSansRomanMedium16"
                        >
                          Ernie Smith
                        </Text>
                      </div>
                      <Text
                        className="text-base text-gray-500_03 w-auto"
                        size="txtWorkSansRomanRegular16"
                      >
                        August 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div style={{backdropFilter: 'blur(5px)'}} className="absolute bg-white-A700_6d bottom-[0] flex flex-col font-inter h-[918px] md:h-auto inset-x-[0] items-center justify-start max-w-[1233px] mx-auto sm:px-5 px-6 py-8 rounded-[30px] w-full">
              <div className="flex flex-col items-start justify-start pt-[0.07px] w-[300px]">
                <Button
                  className="cursor-pointer font-semibold rounded-[14px] shadow-bs5 text-center text-lg w-[300px]"
                  size="lg"
                  variant="gradient"
                  color="purple_800_indigo_800"
                >
                  Get Started
                </Button>
              </div>
              <div>
              <Text
                className="text-center mt-[100px] md:ml-[0] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtHelveticaBold42"
              >
                What Busy Founders & Marketers Say...
              </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[100px] w-full">
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
                  <div className="bg-gradient4  flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[12px] shadow-bs4 w-full">
                    <div className="flex flex-col justify-start mb-[22px] mt-4 w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
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
                            Leo
                          </Text>
                          <Text
                            className="text-center text-lg text-white-A700"
                            size="txtHelvetica18"
                          >
                            Lead Designer
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between md:ml-[0] ml-[53px] mt-7 w-[67%] md:w-full">
                        <Img
                          className="h-10"
                          src="images/img_formkitpeople_white_a700.svg"
                          alt="formkitpeople_One"
                        />
                        <div className="h-10 w-10"></div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;