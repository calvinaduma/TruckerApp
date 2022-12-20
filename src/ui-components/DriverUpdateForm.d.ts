/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Driver } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DriverUpdateFormInputValues = {
    nam?: string;
    username?: string;
    email?: string;
    phone_number?: string;
    sponsor?: string[];
    image_url?: string;
    points?: string;
    password?: string;
};
export declare type DriverUpdateFormValidationValues = {
    nam?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    sponsor?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    points?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverUpdateFormOverridesProps = {
    DriverUpdateFormGrid?: FormProps<GridProps>;
    nam?: FormProps<TextFieldProps>;
    username?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
    sponsor?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
    points?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriverUpdateFormProps = React.PropsWithChildren<{
    overrides?: DriverUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    driver?: Driver;
    onSubmit?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onSuccess?: (fields: DriverUpdateFormInputValues) => void;
    onError?: (fields: DriverUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: DriverUpdateFormInputValues) => DriverUpdateFormInputValues;
    onValidate?: DriverUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DriverUpdateForm(props: DriverUpdateFormProps): React.ReactElement;
