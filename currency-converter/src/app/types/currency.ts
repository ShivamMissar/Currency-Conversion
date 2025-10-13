
//How we will clean the data
export interface CurrencyData 
{
    base : string;
    amount: number;
    date: string; 
    rates: {[key: string]: number}; 
}; 


// How the data comes in
export interface CurrencyResponse
{
    base : string;
    amount: number;
    date: string; 
    rates: {[key: string]: number};
};