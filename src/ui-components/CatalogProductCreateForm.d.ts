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
export declare type CatalogProductCreateFormInputValues = {
    name?: string;
    image_url?: string;
    price?: number;
    number_of_items?: string;
};
export declare type CatalogProductCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    number_of_items?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatalogProductCreateFormOverridesProps = {
    CatalogProductCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    number_of_items?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatalogProductCreateFormProps = React.PropsWithChildren<{
    overrides?: CatalogProductCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CatalogProductCreateFormInputValues) => CatalogProductCreateFormInputValues;
    onSuccess?: (fields: CatalogProductCreateFormInputValues) => void;
    onError?: (fields: CatalogProductCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatalogProductCreateFormInputValues) => CatalogProductCreateFormInputValues;
    onValidate?: CatalogProductCreateFormValidationValues;
} & React.CSSProperties>;
export default function CatalogProductCreateForm(props: CatalogProductCreateFormProps): React.ReactElement;
