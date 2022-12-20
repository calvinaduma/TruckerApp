/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomePageBox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="391px"
      height="571px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomePageBox")}
    >
      <View
        width="391px"
        height="571px"
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
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Text
        fontFamily="Playfair Display"
        fontSize="48px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="63.9839973449707px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="391px"
        height="72px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.63%"
        bottom="84.76%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Browse Catalog"
        {...getOverrideProps(overrides, "Browse Catalog")}
      ></Text>
      <Image
        width="61.13%"
        height="36.95%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.52%"
        bottom="31.52%"
        left="19.44%"
        right="19.44%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "imageIcon 1")}
      ></Image>
    </View>
  );
}
