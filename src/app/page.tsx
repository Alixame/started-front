import SelectLocale from "@/components/SelectLocale";
import { SelectTheme } from "@/components/SelectTheme";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations('Index');

    return (
        <main className="flex flex-col min-h-screen items-center justify-center">
            <h1>
                {t('title')}
            </h1>

            <div className="mt-4 flex space-x-3">
                <SelectTheme />

                <SelectLocale />
            </div>
        </main>
    );
}
