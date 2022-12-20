/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SponsorCreateFormInputValues = {
    name?: string;
    image_url?: string;
    drivers?: string[];
    username?: string;
    email?: string;
    phone_number?: string;
    company?: string;
    password?: string;
};
export declare type SponsorCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    drivers?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    company?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SponsorCreateFormOverridesProps = {
    SponsorCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
    drivers?: FormProps<TextFieldProps>;
    username?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
    company?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SponsorCreateFormProps = React.PropsWithChildren<{
    overrides?: SponsorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onSuccess?: (fields: SponsorCreateFormInputValues) => void;
    onError?: (fields: SponsorCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SponsorCreateFormInputValues) => SponsorCreateFormInputValues;
    onValidate?: SponsorCreateFormValidationValues;
} & React.CSSProperties>;
export default function SponsorCreateForm(props: SponsorCreateFormProps): React.ReactElement;
