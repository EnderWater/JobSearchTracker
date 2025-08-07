import { applicationStatusEnum } from "./enums";
import { applicationStatusName, ionicColor, ionicItemLabelPlacement } from "./types";

export interface FormItem {
    label: string;
    labelPlacement: ionicItemLabelPlacement;
    placeholder?: string;
    value?: any;
    readonly: boolean;
    disabled: boolean;
    clearInput: boolean;
    clearOnEdit: boolean;
}

export interface ListItem {
  title?: string;
  subtitle?: string;
  icon?: string; // e.g. ion-icon name or URL
  date?: string;
  route?: string;  // optional navigation link
  isActive: boolean;
  color: ionicColor;
}

export interface Application {
    applicationId: number;
    company: Company;
    applicationStatus: applicationStatus;
    submissionDate: string;
    responseDate?: string;
}

export interface applicationStatus {
    applicationStatusId: applicationStatusEnum;
    name: applicationStatusName;
    color: string;
    sortOrder: number;
    createDate: Date;
}

export interface State {
    stateId: number;
    name: string;
}

export interface City {
    cityId: number;
    state: State;
    name: string;
}

export interface Company {
    companyId: number;
    name: string;
    phone?: string;
    website?: string;
    address?: Address;
}

export interface Address {
    addressId: number;
    streetAddress?: string;
    state?: State;
    city?: City;
}