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
export declare type AdmiCreateFormInputValues = {
    name?: string;
    email?: string;
    phone_number?: string;
};
export declare type AdmiCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdmiCreateFormOverridesProps = {
    AdmiCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdmiCreateFormProps = React.PropsWithChildren<{
    overrides?: AdmiCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdmiCreateFormInputValues) => AdmiCreateFormInputValues;
    onSuccess?: (fields: AdmiCreateFormInputValues) => void;
    onError?: (fields: AdmiCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdmiCreateFormInputValues) => AdmiCreateFormInputValues;
    onValidate?: AdmiCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdmiCreateForm(props: AdmiCreateFormProps): React.ReactElement;
