export interface ICategoryPages {
    batchcomplete: string
    continue: {
        cmcontinue: string
        continue: string
    }
    limits: {
        categorymembers: number
    }
    query: {
        categorymembers: Array<ICategoryMember>
    }
}

export interface ICategoryMember {
    pageid: number
    ns: number
    title: string
}