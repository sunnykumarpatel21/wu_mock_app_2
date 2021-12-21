export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    partnerId: string;
}
export interface Card {
    id: number;
    name: string;
    link: string;
}
export interface Role {
    id: string;
    name: string;
    permissions: string;
}
export interface Permissions {
    id: string;
    name: string;
}
export interface Address {
    address1: string;
    address2: string;
    city: string;
    zip: string;
    country: string;
}
export interface Partner {
    id: string;
    name: string;
    managerName: string;
    email: string;
    address: Address;
}
export interface ReportType {
    id: string;
    name: string;
}

export interface Report {
    id: string;
    name: string;
    description: string;
    reportType: string;
    date: string;
}

export interface UserResposne {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    partner: Partner;
}
