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

const SelectLocale = () => {
    const [locale, setLocale] = useState('pt');
    const router = useRouter();

    useEffect(() => {
        const currentLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('locale='))
            ?.split('=')[1];

        if (currentLocale) {
            setLocale(currentLocale);
        }
    }, []);

    const handleLocaleChange = (newLocale: string) => {
        setLocale(newLocale);

        document.cookie = `locale=${newLocale}; path=/`;

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