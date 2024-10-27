export interface Yacht {
    id: string;
    permalink: string;
    name: string;
    coverImage: {
        url: string;
    };
    hidePrice: boolean;
    buyPrice: {
        EUR: number;
        USD: number;
        GBP: number;
    };
    charterSummerPrice?: {
        EUR: number;
        USD: number;
        GBP: number;
    };
    cabinsNumber?: number;
    length?: {
        meters: string;
        feet: string;
    };
    guestsNumber?: number;
}
