/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CatalogProduct } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CatalogProductUpdateFormInputValues = {
    name?: string;
    image_url?: string;
    price?: number;
    number_of_items?: string;
};
export declare type CatalogProductUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    number_of_items?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CatalogProductUpdateFormOverridesProps = {
    CatalogProductUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    image_url?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    number_of_items?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CatalogProductUpdateFormProps = React.PropsWithChildren<{
    overrides?: CatalogProductUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    catalogProduct?: CatalogProduct;
    onSubmit?: (fields: CatalogProductUpdateFormInputValues) => CatalogProductUpdateFormInputValues;
    onSuccess?: (fields: CatalogProductUpdateFormInputValues) => void;
    onError?: (fields: CatalogProductUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CatalogProductUpdateFormInputValues) => CatalogProductUpdateFormInputValues;
    onValidate?: CatalogProductUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CatalogProductUpdateForm(props: CatalogProductUpdateFormProps): React.ReactElement;
