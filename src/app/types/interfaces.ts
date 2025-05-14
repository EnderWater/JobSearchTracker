export interface Application {
    applicationId: number,
    company: Company,
    applicationStatus: ApplicationStatus,
    submissionDate: string,
    responseDate?: string
}

export interface State {
    stateId: number,
    name: string
}

export interface ApplicationStatus {
    applicationStatusId: number,
    name: string
}

export interface City {
    cityId: number,
    state: State,
    name: string
}

export interface Company {
    companyId: number,
    name: string,
    phone?: string,
    website?: string,
    address?: Address
}

export interface Address {
    addressId: number,
    streetAddress?: string,
    state?: State,
    city?: City
}