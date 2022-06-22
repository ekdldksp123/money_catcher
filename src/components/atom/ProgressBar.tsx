import "antd/dist/antd.css";
import React from "react";
import { Progress } from "antd";
import { ProgressProps } from "@/types/atom/ProgressProps";

const ProgressBar:React.FC<ProgressProps> = ({percent, status, type}) => {

  const renderProgress = (status?:any, type?:any) => {
    if(status && type) {
      return  <Progress strokeColor={strokeColor} percent={percent} status={status} type={type} />
    } else if(status) {
      return  <Progress strokeColor={strokeColor} percent={percent} status={status} type='line'/>
    } else if(type) {
      return <Progress strokeColor={strokeColor} percent={percent} type={type} />
    } else return <></>
  }

  return (
    renderProgress(status, type)
  );
};

export default ProgressBar;

const strokeColor = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
