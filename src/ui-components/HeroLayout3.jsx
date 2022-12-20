/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function HeroLayout3(props) {
  const { overrides, ...rest } = props;
  const buttonThreeFiveSevenOneTwoSevenSevenOneOnClick = useNavigateAction({
    type: "url",
    url: "/DriverApplicationPage",
  });
  const buttonThreeFiveSevenEightTwoSevenZeroFourOnClick = useNavigateAction({
    type: "url",
    url: "/CatalogPage",
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="548px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout3")}
    >
      <Flex
        gap="33px"
        direction="column"
        width="unset"
        height="258px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body29766564")}
        >
          <Text
            fontFamily="Inter"
            fontSize="48px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Earn Rewards for Good Driving!"
            {...getOverrideProps(overrides, "Earn Rewards for Good Driving!")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Apply to Join a Sponsor:"
          {...getOverrideProps(overrides, "Apply to Join a Sponsor:")}
        ></Text>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Apply Here"
          onClick={() => {
            buttonThreeFiveSevenOneTwoSevenSevenOneOnClick();
          }}
          {...getOverrideProps(overrides, "Button35712771")}
        ></Button>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Body35782744")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="If You Already Have a Sponsor, View the Catalog:"
            {...getOverrideProps(
              overrides,
              "If You Already Have a Sponsor, View the Catalog:"
            )}
          ></Text>
        </Flex>
        <Button
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="View Catalog"
          onClick={() => {
            buttonThreeFiveSevenEightTwoSevenZeroFourOnClick();
          }}
          {...getOverrideProps(overrides, "Button35782704")}
        ></Button>
      </Flex>
    </Flex>
  );
}
