import { CommandMenu } from '@/components/CommandMenu'
import SearchMenu from '@/components/SearchMenu'
import SelectLocale from '@/components/SelectLocale'
import { SelectTheme } from '@/components/SelectTheme'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, Command, FileInput, FilePlus, Menu, Package2, Plus, Search } from 'lucide-react'
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
                            <SearchMenu />

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

                <div className="container flex-1 py-6 space-y-6">
                    <div className='grid grid-cols-3 gap-4'>
                        <Card className='flex items-center p-4 gap-4'>
                            <svg width="30" height="36" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.724638 3.78967C0.724638 2.09409 2.10888 0.719557 3.81643 0.719557H11.8111C12.6311 0.719557 13.4175 1.04301 13.9974 1.61877L18.3698 5.96057C18.9496 6.53632 19.2754 7.31722 19.2754 8.13146V22.2103C19.2754 23.9059 17.8911 25.2804 16.1836 25.2804H3.81643C2.10888 25.2804 0.724638 23.9059 0.724638 22.2103V3.78967Z" fill="#EEF7FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81643 1.43911C2.50908 1.43911 1.44928 2.49149 1.44928 3.78967V22.2103C1.44928 23.5085 2.50909 24.5609 3.81643 24.5609H16.1836C17.4909 24.5609 18.5507 23.5085 18.5507 22.2103V9.11439H13.0918C11.8378 9.11439 10.8213 8.10497 10.8213 6.85978V1.43911H3.81643ZM12.2705 1.4838V6.85978C12.2705 7.31017 12.6382 7.67528 13.0918 7.67528H18.5057C18.4154 7.22173 18.1915 6.80108 17.8574 6.46937L13.485 2.12758C13.1509 1.79586 12.7273 1.57353 12.2705 1.4838ZM0 3.78967C0 1.69669 1.70867 0 3.81643 0H11.8111C12.8233 0 13.794 0.399268 14.5097 1.10997L18.8822 5.45176C19.5979 6.16246 20 7.12638 20 8.13146V22.2103C20 24.3033 18.2913 26 16.1836 26H3.81643C1.70867 26 0 24.3033 0 22.2103V3.78967Z" fill="#1E6BF2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59775 11C9.80303 11 9.96944 11.1689 9.96944 11.3774V11.5489C10.5339 11.7127 10.947 12.2404 10.947 12.8661C10.947 13.2461 10.7946 13.59 10.5485 13.8381L11.8502 16.3287C11.9828 16.1771 12.108 16.0116 12.2247 15.8333C12.3383 15.6597 12.5689 15.6124 12.7399 15.7277C12.9109 15.8431 12.9575 16.0773 12.8439 16.2509C12.6572 16.5363 12.4474 16.7987 12.2179 17.0323L12.9566 18.4457C13.0528 18.6298 12.9838 18.8582 12.8025 18.9559C12.6211 19.0536 12.3961 18.9835 12.2999 18.7994L11.6366 17.5303C11.0371 17.9572 10.3445 18.2059 9.59784 18.2059C8.80838 18.2059 8.07941 17.9279 7.45691 17.4551L6.69446 18.8098C6.59261 18.9907 6.36557 19.0536 6.18734 18.9502C6.00911 18.8468 5.94719 18.6163 6.04904 18.4353L6.89027 16.9407C6.6947 16.7308 6.51451 16.4996 6.35178 16.2509C6.23821 16.0773 6.28475 15.8431 6.45575 15.7277C6.62674 15.6124 6.85743 15.6597 6.971 15.8333C7.0679 15.9814 7.1707 16.1207 7.27876 16.2505L8.64036 13.8313C8.39814 13.5837 8.24849 13.2427 8.24849 12.8661C8.24849 12.2404 8.66164 11.7127 9.22607 11.5489V11.3774C9.22607 11.1689 9.39248 11 9.59775 11ZM9.28907 14.1999L7.82895 16.7941C8.35746 17.2176 8.96407 17.4512 9.59784 17.4512C10.1992 17.4512 10.7761 17.2409 11.285 16.8576L9.89717 14.2021C9.80087 14.2243 9.70066 14.2359 9.59775 14.2359C9.49154 14.2359 9.3882 14.2235 9.28907 14.1999ZM9.59775 12.251C9.26313 12.251 8.99186 12.5264 8.99186 12.8661C8.99186 13.2058 9.26313 13.4812 9.59775 13.4812C9.93238 13.4812 10.2036 13.2058 10.2036 12.8661C10.2036 12.5264 9.93238 12.251 9.59775 12.251Z" fill="#1E6BF2"/>
                            </svg>

                            <div>
                                <CardTitle className='text-base'>
                                   Novo documento
                                </CardTitle>

                                <CardDescription className='text-xs'>
                                    Crie um novo documento para seus projetos
                                </CardDescription>
                            </div>
                        </Card>

                        <Card className='flex items-center p-4 gap-4'>
                            <svg width="30" height="36" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.724638 3.78967C0.724638 2.09409 2.10888 0.719557 3.81643 0.719557H11.8111C12.6311 0.719557 13.4175 1.04301 13.9974 1.61877L18.3698 5.96057C18.9496 6.53632 19.2754 7.31722 19.2754 8.13146V22.2103C19.2754 23.9059 17.8911 25.2804 16.1836 25.2804H3.81643C2.10888 25.2804 0.724638 23.9059 0.724638 22.2103V3.78967Z" fill="#F7EEFF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.81643 1.43911C2.50908 1.43911 1.44928 2.49149 1.44928 3.78967V22.2103C1.44928 23.5085 2.50909 24.5609 3.81643 24.5609H16.1836C17.4909 24.5609 18.5507 23.5085 18.5507 22.2103V9.11439H13.0918C11.8378 9.11439 10.8213 8.10497 10.8213 6.85978V1.43911H3.81643ZM12.2705 1.4838V6.85978C12.2705 7.31017 12.6382 7.67528 13.0918 7.67528H18.5057C18.4154 7.22173 18.1915 6.80108 17.8574 6.46937L13.485 2.12758C13.1509 1.79586 12.7273 1.57353 12.2705 1.4838ZM0 3.78967C0 1.69669 1.70867 0 3.81643 0H11.8111C12.8233 0 13.794 0.399268 14.5097 1.10997L18.8822 5.45176C19.5979 6.16246 20 7.12638 20 8.13146V22.2103C20 24.3033 18.2913 26 16.1836 26H3.81643C1.70867 26 0 24.3033 0 22.2103V3.78967Z" fill="#881EF2"/>
                                <path d="M5.5 12.6154C5.5 12.2755 5.77134 12 6.10606 12H9.74242C10.0771 12 10.3485 12.2755 10.3485 12.6154V13.8462C10.3485 14.186 10.0771 14.4615 9.74242 14.4615H6.10606C5.77134 14.4615 5.5 14.186 5.5 13.8462V12.6154Z" fill="#D9B7FF"/>
                                <path d="M5.5 18.1538C5.5 17.814 5.77134 17.5385 6.10606 17.5385H9.74242C10.0771 17.5385 10.3485 17.814 10.3485 18.1538V19.3846C10.3485 19.7245 10.0771 20 9.74242 20H6.10606C5.77134 20 5.5 19.7245 5.5 19.3846V18.1538Z" fill="#D9B7FF"/>
                                <path d="M10.6515 15.3846C10.6515 15.0447 10.9229 14.7692 11.2576 14.7692H14.8939C15.2287 14.7692 15.5 15.0447 15.5 15.3846V16.6154C15.5 16.9553 15.2287 17.2308 14.8939 17.2308H11.2576C10.9229 17.2308 10.6515 16.9553 10.6515 16.6154V15.3846Z" fill="#D9B7FF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1367 13.2307C10.1367 13.1118 10.2317 13.0153 10.3489 13.0153H13.0761C13.1933 13.0153 13.2882 13.1118 13.2882 13.2307V14.7692C13.2882 14.8881 13.1933 14.9846 13.0761 14.9846C12.959 14.9846 12.864 14.8881 12.864 14.7692V13.4461H10.3489C10.2317 13.4461 10.1367 13.3497 10.1367 13.2307ZM7.92461 14.2461C8.04176 14.2461 8.13673 14.3425 8.13673 14.4615V17.5384C8.13673 17.6574 8.04176 17.7538 7.92461 17.7538C7.80746 17.7538 7.71249 17.6574 7.71249 17.5384V14.4615C7.71249 14.3425 7.80746 14.2461 7.92461 14.2461ZM13.0761 17.0153C13.1933 17.0153 13.2882 17.1118 13.2882 17.2307V18.7692C13.2882 18.8881 13.1933 18.9846 13.0761 18.9846H10.3489C10.2317 18.9846 10.1367 18.8881 10.1367 18.7692C10.1367 18.6502 10.2317 18.5538 10.3489 18.5538H12.864V17.2307C12.864 17.1118 12.959 17.0153 13.0761 17.0153Z" fill="#881EF2"/>
                            </svg>

                            <div>
                                <CardTitle className='text-base'>
                                   Novo diagrama
                                </CardTitle>

                                <CardDescription className='text-xs'>
                                    Crie um novo diagrama para seus projetos
                                </CardDescription>
                            </div>
                        </Card>

                        <Card className='flex items-center p-4 gap-4'>
                            <FileInput size={32} />

                            <div>
                                <CardTitle className='text-base'>
                                   Importar documento
                                </CardTitle>

                                <CardDescription className='text-xs'>
                                    Importe um documento para seus projetos
                                </CardDescription>
                            </div>
                        </Card>
                    </div>

                    <h2>
                        Recentes
                    </h2>
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
