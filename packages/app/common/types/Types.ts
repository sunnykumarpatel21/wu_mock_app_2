export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    partnerId: string,
}
export interface Card {
    id: string,
    name: string,
    link: string,
}
export interface Role{
    id: string,
    name: string,
    permissions: string,
}