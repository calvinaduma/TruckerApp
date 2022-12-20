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
export declare type TestProfileEditInputValues = {
    Field0?: string;
};
export declare type TestProfileEditValidationValues = {
    Field0?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestProfileEditOverridesProps = {
    TestProfileEditGrid?: FormProps<GridProps>;
    Field0?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestProfileEditProps = React.PropsWithChildren<{
    overrides?: TestProfileEditOverridesProps | undefined | null;
} & {
    initialData?: TestProfileEditInputValues;
    onSubmit: (fields: TestProfileEditInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: TestProfileEditInputValues) => TestProfileEditInputValues;
    onValidate?: TestProfileEditValidationValues;
} & React.CSSProperties>;
export default function TestProfileEdit(props: TestProfileEditProps): React.ReactElement;
