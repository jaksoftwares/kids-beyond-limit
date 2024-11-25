type T_Partner = {
    name: string,
    logoSize: number,
    logoUrl: string,
    externalLink: string,
}

type T_NavLink = {
    name: string,
    link: string,
}

type T_Statistic = {
    name: string,
    value: number,
}

type T_Social = {
    text: string,
    logoUrl: string,
}

type T_Person = {
    fullName: string,
    profilePictureUrl: string,
    role: string,
    linkedInUrl: string,
}

type T_Action = {
    imageUrl: string,
    title: string,
    description: string,
}

type T_Pillar = {
    imageUrl: string,
    title: string,
    description: string,
}

export type {
    T_Partner,
    T_NavLink,
    T_Statistic,
    T_Social,
    T_Person,
    T_Action,
    T_Pillar
}
