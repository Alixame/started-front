'use server'
 
import { cookies } from 'next/headers'
 
export async function getCookieLocale() {
    const { get } = cookies();

    return get('locale');
}

export async function setCookieLocale(locale: string) {
    const { set } = cookies();

    set('locale', locale)
}