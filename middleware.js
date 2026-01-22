import { NextResponse } from "next/server";

export function middleware(request) { // zarezerwowana nazwa, odpala się zawsze przy każdym przejściu przez ścieżki
    console.log(request)
    return NextResponse.next();
}

export const config = {
    matcher: '/news'
}