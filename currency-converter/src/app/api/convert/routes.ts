import { NextRequest, NextResponse } from "next/server";
import {fetchCurrencyData} from '@/app/lib/currency';



export async function GET(request: NextRequest) 
{
    const searchParams = request.nextUrl.searchParams;

    const amount = searchParams.get('amount');
    const currencyFrom = searchParams.get('currencyFrom');
    const currencyTo = searchParams.get('currencyTo');


try
{
    let currencyData; 

    if(amount && currencyFrom && currencyTo)
    {
        currencyData = fetchCurrencyData(parseInt(amount), currencyFrom, currencyTo);
    }
    else 
    {
        return NextResponse.json(
        { error: "Please provide the amount, currency you currently have and the currency you're looking to exchange to" },
        { status: 400 });
    }

    return NextResponse.json(currencyData);
}catch (error) 
    {
        console.error("Weather API Error:", error);
        return NextResponse.json(
        { error: "Failed to fetch weather data" },
        { status: 500 }
        );
    }
}