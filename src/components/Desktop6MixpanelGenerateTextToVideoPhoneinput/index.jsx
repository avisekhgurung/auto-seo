import React from "react";

import { Img, Text } from "components";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Box, Button, Typography } from "@mui/material";

const PInput = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-12 md:h-auto items-start justify-start  py-3 rounded-lg shadow-bs1 w-full">
          <div className="flex flex-col h-6 md:h-auto items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-2 h-6 md:h-auto items-center justify-start w-full">
              <div className="flex flex-row items-center justify-start w-auto">
                {/* <Img
                  className="h-6 w-6"
                  src="images/img_iconflagamerica.svg"
                  alt="iconflagamerica"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_iconcaretdown.svg"
                  alt="iconcaretdown"
                />
                <Text
                  className="text-base text-black-900_01 tracking-[0.15px] w-auto"
                  size="txtOpenSansRegular16"
                >
                  {props?.phonenumber}
                </Text> */}
                <PhoneInput
                  placeholder="Phone Number"
                  specialLabel="Phone number"
                  inputStyle={{
                    width: "473px",
                    borderRadius: "15px",
                    height: "50px",
                  }}
                  country={"us"}
                />
                <Box sx={{ position: "relative" }}>
                  <Button
                    variant="contained"
                    // onClick={}
                    style={{
                      position: "absolute",
                      left: "-157px",
                      top: "-18px",
                      width: "150px",
                      height: "35px",
                      background:
                        "linear-gradient(180deg, rgb(105.08, 50, 131) 0%, rgb(50.16, 50.16, 130.74) 100%)",
                      padding: "8px 15px", // Adjust padding as needed
                      borderRadius: "8px", // Adjust border radius as needed
                    }}
                  >
                    <Typography
                      fontSize="15px !important"
                      style={{ fontFamily: "Inter, sans-serif " }}
                    >
                      Go!
                    </Typography>
                  </Button>
                </Box>
              </div>

              {/* <div className="h-[22px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[23%] flex-1 h-[11px] inset-x-[0] mx-auto w-full"></div>
                <Text
                  className="absolute h-full inset-y-[0] left-[0] my-auto text-base text-blue_gray-400 tracking-[0.15px] w-auto"
                  size="txtOpenSansRegular16Bluegray400"
                >
                  {props?.labeltext}
                </Text>
              </div> */}
            </div>
            <p
              style={{
                marginTop: "14px",
                marginLeft: "1rem",
                color: "#595959",
                fontSize: "12px"
              }}
            >
              We will use this number to validate your website.
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col items-start justify-end pl-4 py-1 w-full">
          <Text
            className="text-gray-700_01 text-xs w-auto"
            size="txtOpenSansRegular12"
          >
            {props?.texthelper}
          </Text>
        </div> */}
      </div>
    </>
  );
};

PInput.defaultProps = {
  phonenumber: "+1",
  labeltext: "Phone Number",
  texthelper: "We will use this number to validate your website.",
};

export default PInput;
