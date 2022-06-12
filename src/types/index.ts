import { ReactNode } from "react";

export interface ObjectAny {
  [key: string]: any;
}

export interface ConfirmationData {
  text?: string;
  description?: string;
  isOpen: boolean;
  customData?: ObjectAny;
  onConfirm: () => void;
  onCancel: (reason?: string) => void;
  customComponent?: (
    params: Omit<ConfirmationData, "customComponent">
  ) => ReactNode;
}

export interface ConfirmParams
  extends Omit<ConfirmationData, "onConfirm" | "onCancel" | "isOpen"> {}

export interface InputField {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface ITableColumn {
  header: string;
  accessor: string;
  Cell?: any;
  render?: any;
}
