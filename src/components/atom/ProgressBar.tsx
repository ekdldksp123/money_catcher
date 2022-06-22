import "antd/dist/antd.css";
import React from "react";
import { Progress } from "antd";
import { ProgressProps } from "@/types/atom/ProgressProps";

const ProgressBar:React.FC<ProgressProps> = ({percent, status}) => {

  return (status ? 
    <Progress strokeColor={strokeColor} percent={percent} status={status} />
    :
    <Progress strokeColor={strokeColor} percent={percent} />
  );
};

export default ProgressBar;

const strokeColor = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
