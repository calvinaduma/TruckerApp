/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Admin } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdminUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone_number?: string;
    image_url?: string;
};
export declare type AdminUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminUpdateFormOverridesProps = {
    AdminUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdminUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    admin?: Admin;
    onSubmit?: (fields: AdminUpdateFormInputValues) => AdminUpdateFormInputValues;
    onSuccess?: (fields: AdminUpdateFormInputValues) => void;
    onError?: (fields: AdminUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AdminUpdateFormInputValues) => AdminUpdateFormInputValues;
    onValidate?: AdminUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdminUpdateForm(props: AdminUpdateFormProps): React.ReactElement;
