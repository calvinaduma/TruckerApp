/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Admi } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdmiUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone_number?: string;
};
export declare type AdmiUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdmiUpdateFormOverridesProps = {
    AdmiUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdmiUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdmiUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    admi?: Admi;
    onSubmit?: (fields: AdmiUpdateFormInputValues) => AdmiUpdateFormInputValues;
    onSuccess?: (fields: AdmiUpdateFormInputValues) => void;
    onError?: (fields: AdmiUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdmiUpdateFormInputValues) => AdmiUpdateFormInputValues;
    onValidate?: AdmiUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdmiUpdateForm(props: AdmiUpdateFormProps): React.ReactElement;
