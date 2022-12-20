/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function FilterOptions(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="351px"
      height="79px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FilterOptions")}
    >
      <View
        width="351px"
        height="79px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="36px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="47.987998962402344px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="266px"
        height="52px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="16.46%"
        bottom="17.72%"
        left="5.98%"
        right="18.23%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categories"
        {...getOverrideProps(overrides, "Categories")}
      ></Text>
      <Image
        width="9.4%"
        height="40.51%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29.11%"
        bottom="30.38%"
        left="86.89%"
        right="3.7%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "downArrowIcon 1")}
      ></Image>
    </View>
  );
}
