/*
 * @Description:
 * @Date: 2024-12-05 15:32:28
 * @LastEditTime: 2024-12-26 12:09:29
 */

import { Box, useToast } from "@chakra-ui/react";
import React, { forwardRef, useImperativeHandle } from "react";
// import copy from "copy-to-clipboard";

const ShowToast = forwardRef((props, ref) => {
  const toast = useToast();

  const Error = (msg) => {
    toast({
      title: "error",
      description: msg,
      status: "error",
      position: "top",
      duration: 5000,
    });
  };
  const Success = (msg) => {
    toast({
      title: "success",
      description: msg,
      status: "success",
      position: "top",
      duration: 5000,
    });
  };
  const Warning = () => {
    toast({
      title: "warning",
      description: msg,
      status: "warning",
      position: "top",
      duration: 5000,
    });
  };

  // const CopyData = (data) => {
  //   copy(data);
  //   Success("Copy success");
  // };

  useImperativeHandle(ref, () => ({
    Error,
    Success,
    Warning,
    // CopyData,
  }));

  return <></>;
});

export default ShowToast;
