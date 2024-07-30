import SelectLocale from '@/components/SelectLocale'
import { SelectTheme } from '@/components/SelectTheme'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, Menu, Package2, Search } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function AppPage() {
    const t = useTranslations('Index')

    return (
        <main className="flex min-h-screen">
            <section className="bg-[#FAFBFD] dark:bg-[#161618] w-full h-screen flex flex-col overflow-hidden">
                <header className="sticky top-0 flex h-16 items-center gap-4 border-b border-slate-200 dark:border-slate-800 bg-[#FFFFFF] dark:bg-[#0A0A0B]">
                    <div className='container flex justify-between items-center'>
                        <div className='flex space-x-3'>
                            <SelectLocale />

                            <SelectTheme />
                        </div>

                        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                            <form className="ml-auto flex-1 sm:flex-initial relative">
                                <button className='absolute left-2.5 top-1/2 -translate-y-1/2'>
                                    <Search className=" h-4 w-4" />
                                </button>
                                
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                />
                            </form>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <Image
                                            src="https://avatars.githubusercontent.com/u/70243265?v=4"
                                            alt="Avatar"
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />

                                        <span className="sr-only">Toggle user menu</span>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Support</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                <div className="container flex-1 py-6">
                    <h1 className='flex text-3xl font-semibold'>
                        Titulo
                    </h1>
                </div>

                <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-[#FFFFFF] dark:bg-[#0A0A0B] py-3">
                    <div className='container flex justify-between items-center'>
                        <div className="w-1/3 flex justify-start items-center space-x-3">
                            <a href="" className="text-sm hover:underline">
                                Help
                            </a>

                            <a href="" className="text-sm hover:underline">
                                Docs
                            </a>
                        </div>

                        <div className="w-1/3 flex justify-center items-center">
                            <svg
                                className="w-8 h-8 fill-slate-200 dark:fill-slate-800"
                                viewBox="0 0 540 540"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M245.763 8.61157C284.375 -11.492 331.335 4.7999 350.648 45.0229L531.727 422.141C551.044 462.371 535.379 511.281 496.761 531.388C462.624 549.162 421.962 538.488 399.649 507.978C352.814 477.34 306.203 465.25 261.137 466.55C207.065 468.109 150.811 489.133 95.6803 528.754C72.6802 545.283 41.8464 543.425 20.8269 524.243C-0.194052 505.059 -6.03067 473.448 6.66184 447.504L118.963 217.957C134.273 186.662 171.026 174.231 201.051 190.182C231.08 206.134 243.017 244.438 227.705 275.736L192.656 347.378C214.031 342.759 235.764 340.028 257.761 339.394C278.214 338.804 298.647 340.036 318.971 343.145L210.797 117.859C191.48 77.6289 207.145 28.7185 245.763 8.61157ZM329.158 364.36C305.668 359.785 281.992 357.885 258.27 358.569C231.016 359.355 204.124 363.533 177.781 370.704C174.275 371.658 170.559 370.379 168.288 367.435C166.018 364.491 165.616 360.431 167.263 357.066L211.316 267.019C222.007 245.167 213.676 218.417 192.699 207.274C171.719 196.128 146.044 204.819 135.352 226.674L23.0514 456.221C14.1888 474.336 18.2626 496.409 32.9445 509.808C47.628 523.208 69.1704 524.507 85.2387 512.959C142.633 471.712 202.272 449.057 260.628 447.375C300.761 446.218 341.819 454.918 382.844 476.167L329.158 364.36ZM334.196 53.6104C319.434 22.8664 283.522 10.3935 253.983 25.7734C224.45 41.1499 212.49 78.5349 227.249 109.272L408.328 486.39C423.09 517.134 459.001 529.606 488.541 514.226C518.074 498.85 530.034 461.466 515.275 430.729L334.196 53.6104Z"
                                />
                            </svg>
                        </div>

                        <div className="w-1/3 flex justify-end items-center space-x-3">
                            <a href="" className="text-sm hover:underline">
                                Service Status
                            </a>

                            <a href="" className="text-sm hover:underline">
                                API
                            </a>

                            <a href="" className="text-sm hover:underline">
                                Contribute
                            </a>
                        </div>
                    </div>
                </footer>
            </section>
        </main>
    )
}
