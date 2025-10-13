import { CurrencyData, CurrencyResponse } from "@/app/types/currency";


export async function fetchCurrencyData(amountToConvert: number, currencyFrom: string, currencyTo: string): Promise<CurrencyData> 
{
    const get_todays_value = await fetch(
        `https://api.frankfurter.app/latest?amount=${amountToConvert}&from=${currencyFrom}&to=${currencyTo}`
    ); 

    if (!get_todays_value.ok) 
        {
            throw new Error("Response has an error");
        };


    const data: CurrencyResponse = await get_todays_value.json();

    return{
        base:data.base,
        amount:data.amount,
        date:data.date, 
        rates: data.rates
    };

};