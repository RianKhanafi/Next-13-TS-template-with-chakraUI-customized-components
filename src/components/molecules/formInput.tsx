"use client";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputProps,
} from "@chakra-ui/react";
import { Input, Switch } from "components/atoms";
import { optionsSelect } from "components/atoms/select";

interface IFormInput extends InputProps {
  label?: string;
  error?: boolean;
  optionsSelect?: optionsSelect[];
  errorMessage?: string;
  inputType?: "input" | "switch" | "select";
  children?: React.ReactNode;
}

export default function FormInput({
  label = "Label",
  placeholder = "Placeholder",
  error,
  onChange,
  onSelect,
  value,
  errorMessage = "Error Message",
  inputType = "input",
  optionsSelect,
  children,
  isInvalid,
  ...rest
}: IFormInput) {
  const renderInput = () => {
    switch (inputType) {
      case "input":
        return (
          <Input
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...rest}
          />
        );
      case "switch":
        return <Switch placeholder={placeholder} onChange={onChange} />;

      default:
        return null;
    }
  };

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      {children ? children : renderInput()}
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}
