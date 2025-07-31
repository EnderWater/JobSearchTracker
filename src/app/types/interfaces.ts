import { ApplicationStatusEnum } from "./enums";
import { ApplicationStatusName, ionicColor } from "./types";

export interface ListItem {
  title?: string;
  subtitle?: string;
  icon?: string; // e.g. ion-icon name or URL
  date?: Date | string;
  route?: string;  // optional navigation link
  isActive: boolean;
  color: ionicColor;
}

export interface Application {
    applicationId: number;
    company: Company;
    applicationStatus: ApplicationStatus;
    submissionDate: string;
    responseDate?: string;
}

export interface ApplicationStatus {
    applicationStatusId: ApplicationStatusEnum;
    name: ApplicationStatusName;
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