import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const apiKey = "e9bbaad245141982f4d056f2b70aa5ac"
    const lat = "4,570868"; // Latitude 
    const lon = "-74,297333"; // Longitude 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}