/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import PurchaseHistoryPage from "./PurchaseHistoryPage";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function PurchaseHistoryPageComp(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "PurchaseHistoryPageComp")}
    >
      {(item, index) => (
        <PurchaseHistoryPage
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PurchaseHistoryPage>
      )}
    </Collection>
  );
}
