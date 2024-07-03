'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { languages } from '@/languages';

import { getCookieLocale, setCookieLocale } from '@/lib/locale';

const SelectLocale = () => {
    const [locale, setLocale] = useState('pt');

    const router = useRouter();

    const handleLocale = async () => {
        const currentLocale = await getCookieLocale()

        if (currentLocale) {
            setLocale(currentLocale.value);
        }
    };

    useEffect(() => {
        handleLocale();
    }, []);

    const handleLocaleChange = (newLocale: string) => {
        setLocale(newLocale);

        setCookieLocale(newLocale)

        router.refresh();
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {languages.find(({ code }) => code === locale)?.name}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {languages.map(({ id, name, code }) => (
                    <DropdownMenuItem key={id} onClick={() => handleLocaleChange(code)}>
                        {name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SelectLocale;