import "antd/dist/antd.css";
import React from "react";
import { Progress } from "antd";
import { ProgressProps } from "@/types/atom/ProgressProps";

const ProgressBar:React.FC<ProgressProps> = ({progress, status}) => {
  return (status ? 
    <Progress percent={progress} status={status} />
    :
    <Progress percent={progress} />
  );
};

export default ProgressBar;
