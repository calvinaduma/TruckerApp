/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function DriverCard(props) {
  const { driver, overrides, ...rest } = props;
  return (
    <View
      width="300px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "DriverCard")}
    >
      <Icon
        width="300px"
        height="100px"
        viewBox={{ minX: 0, minY: 0, width: 300, height: 100 }}
        paths={[
          {
            d: "M0 20C0 8.9543 8.95431 0 20 0L280 0C291.046 0 300 8.95431 300 20L300 80C300 91.0457 291.046 100 280 100L20 100C8.9543 100 0 91.0457 0 80L0 20Z",
            fill: "rgba(217,217,217,1)",
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
        {...getOverrideProps(overrides, "Rectangle 1164")}
      ></Icon>
      <Image
        width="26.67%"
        height="71%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6%"
        bottom="23%"
        left="1.67%"
        right="71.67%"
        borderRadius="35.5px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={driver?.image_url}
        {...getOverrideProps(overrides, "Rectangle 1165")}
      ></Image>
      <Button
        width="76px"
        height="37px"
        position="absolute"
        top="31%"
        bottom="32%"
        left="32%"
        right="42.67%"
        backgroundColor="rgba(10,207,131,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Approve"
        {...getOverrideProps(overrides, "Button36242724")}
      ></Button>
      <Button
        width="76px"
        height="37px"
        position="absolute"
        top="31%"
        bottom="32%"
        left="61.67%"
        right="13%"
        backgroundColor="rgba(242,78,30,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Reject"
        {...getOverrideProps(overrides, "Button36242728")}
      ></Button>
      <Text
        fontFamily="Georama"
        fontSize="10px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="15px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="78%"
        bottom="0%"
        left="1.67%"
        right="71.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={driver?.nam}
        {...getOverrideProps(overrides, "DriverName")}
      ></Text>
    </View>
  );
}
