export interface IAuthor {
    path: string
    name: string
    link: string
}

export function useCategoryAuthors(path: string, name: string, link: string) {
    return { path, name, link }
}