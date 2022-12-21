export interface ISummary {
    batchcomplete: string;
    query: {
        pages: {
            [key: string]: {
                pageid: number;
                ns: number;
                title: string;
                extract: string;
            };
        };
    };
}

export interface ISummaryPage {
    pageid: number;
    ns: number;
    title: string;
    extract: string;
}