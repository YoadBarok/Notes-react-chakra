import { FormControl, FormErrorMessage, FormLabel, Textarea } from "@chakra-ui/react";
import { FieldHookConfig } from "formik"
import { useField } from "formik";

type TextAreaFieldProps = FieldHookConfig<string> & {
    label: string;
    placeholder?: string;
}

export const TextAreaField = ({
    label,
    placeholder,
    ...props
}: TextAreaFieldProps) => {
    const [field, meta] = useField(props);

    const hasError = Boolean(meta.touched && meta.error);
    return (
        <FormControl isInvalid={hasError}>
            <FormLabel
                htmlFor={field.name}
                fontWeight="bold"
                fontSize="xs"
                textTransform="uppercase"
            >
                {label}
            </FormLabel>
            <Textarea id={field.name} placeholder={placeholder} {...field} />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};