'use client'

import * as React from "react"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export function BaseModal({
    trigger,
    children,
    title,
    description,
}: {
    trigger: React.ReactNode,
    children?: React.ReactNode,
    title?: string,
    description?: string,
}) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {trigger}
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>

                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>

                    {children}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {trigger}
            </DrawerTrigger>

            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>
                        {title}
                    </DrawerTitle>

                    <DrawerDescription>
                        {description}
                    </DrawerDescription>
                </DrawerHeader>

                <div className="px-4">
                    {children}
                </div>

                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}