'use client'

import React from 'react';
import { CommandMenu } from './CommandMenu';
import { Command, Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchMenu: React.FC = () => {
    const onOpenCommand = (e: any) => {
        e.preventDefault();

        const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true });

        document.dispatchEvent(event);
    }

    return (
        <form onSubmit={onOpenCommand} className="ml-auto flex-1 sm:flex-initial relative">
            <button type='submit' className='absolute left-2.5 top-1/2 -translate-y-1/2 '>
                <Search className="h-4 w-4" />
            </button>
            
            <Input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-16 w-full"
            />

            <div className='absolute right-2.5 top-1/2 -translate-y-1/2 flex justify-center items-center px-2 py-1 border rounded-md space-x-1 bg-[#FAFAFA] dark:dark:bg-slate-950 border-slate-200 dark:border-slate-800'>
                <Command size={16} />

                <span className='text-sm'>
                    K
                </span>
            </div>

            <CommandMenu />
        </form>
    );
};

export default SearchMenu;