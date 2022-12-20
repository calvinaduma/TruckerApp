/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function CustomNavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="81px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CustomNavBar")}
    >
      <View
        width="1440px"
        height="81px"
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
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="126px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.75%"
        bottom="19.75%"
        left="80.14%"
        right="11.11%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account"
        {...getOverrideProps(overrides, "Account")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="15px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="19.994998931884766px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="36px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="67.9%"
        bottom="7.41%"
        left="94.38%"
        right="3.13%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Cart"
        {...getOverrideProps(overrides, "Cart")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="107px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.75%"
        bottom="19.75%"
        left="68.82%"
        right="23.75%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Profile"
        {...getOverrideProps(overrides, "Profile")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="117px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.75%"
        bottom="19.75%"
        left="56.81%"
        right="35.07%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Catalog"
        {...getOverrideProps(overrides, "Catalog")}
      ></Text>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="42.65599822998047px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="103px"
        height="49px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.75%"
        bottom="19.75%"
        left="1.11%"
        right="91.74%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="LOGO"
        {...getOverrideProps(overrides, "LOGO")}
      ></Text>
      <Image
        width="3.54%"
        height="60.49%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7.41%"
        bottom="32.1%"
        left="93.33%"
        right="3.13%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "cartIcon 1")}
      ></Image>
    </View>
  );
}
