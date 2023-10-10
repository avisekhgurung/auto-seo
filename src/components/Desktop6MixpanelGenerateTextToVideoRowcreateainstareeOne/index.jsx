import React from "react";

import { Line, Text } from "components";

const Desktop6MixpanelGenerateTextToVideoRowcreateainstareeOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <Text className="text-gray-900 text-sm" size="txtHelvetica14">
            {props?.userimage}
          </Text>
        </div>
        <Line className="bg-gray-500_01 h-[17px] w-px" />
      </div>
    </>
  );
};

Desktop6MixpanelGenerateTextToVideoRowcreateainstareeOne.defaultProps = {
  userimage: "Create a insta reel of a Siberian Husky",
};

export default Desktop6MixpanelGenerateTextToVideoRowcreateainstareeOne;
