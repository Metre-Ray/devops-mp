export interface IQuote {
    id?: string; // Unique identifier of quote.
    author: string; // Author of a quote.
    text: string; // Quote text.
    source?: string; // optional link/source of quote.
    tags?: string[]; // optional list of tags related to quote.
    createdBy?: string; // app’s user who initiate creation of quote.
    createdAt?: string | Date; // timestamp of quote creation.
    updatedAt?: string | Date; // timestamp of quote update.
    isDeleted: boolean; // status of deletion (soft delete).
}
