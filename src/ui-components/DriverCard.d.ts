/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Driver } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type DriverCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    driver?: Driver;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function DriverCard(props: DriverCardProps): React.ReactElement;
