/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1349px"
      height="76px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SearchBar")}
    >
      <Icon
        width="1349px"
        height="76px"
        viewBox={{ minX: 0, minY: 0, width: 1349, height: 76 }}
        paths={[
          {
            d: "M0 38C0 17.0132 17.0132 0 38 0L1311 0C1331.99 0 1349 17.0132 1349 38L1349 38C1349 58.9868 1331.99 76 1311 76L38 76C17.0132 76 0 58.9868 0 38L0 38Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></Icon>
      <Image
        width="3.56%"
        height="60.53%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="19.74%"
        bottom="19.74%"
        left="2.3%"
        right="94.14%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "searchBarIcon 1")}
      ></Image>
      <Text
        fontFamily="Playfair Display"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="42.65599822998047px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="659px"
        height="43px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="19.74%"
        bottom="23.68%"
        left="6.6%"
        right="44.55%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="What are you looking for?"
        {...getOverrideProps(overrides, "What are you looking for?")}
      ></Text>
    </View>
  );
}
