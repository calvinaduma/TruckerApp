/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SponsorCardT24Props } from "./SponsorCardT24";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type SponsorCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SponsorCardT24Props;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function SponsorCollection(props: SponsorCollectionProps): React.ReactElement;
