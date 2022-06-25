export interface InAndOutData {
    spendingMap: Json[];
    spendingCount: number;
    incomeMap: Json[];
    incomeCount: number;
}

export interface AssetData {
    month: number;
    type: 'income' | 'spend'
    data: Data[]
}

export interface AssetProps {
    asset: AssetData[];
}

export interface Data {
    key: string;
    value: unknown;
}

export interface Json {
    [key:string]: number;
}