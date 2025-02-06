import Link from "next/link"

type NavMenuType = {
    name: string,
    link: string
}

const navMenu: NavMenuType[] = [{
    name: "Home",
    link: "/"
}, {
    name: "About",
    link: "/about"
}, {
    name: "Catalog",
    link: "/catalog"
}, {
    name: "Contact",
    link: "/contact"
}]

export default function MainLayout({children}:{children: React.ReactNode}){
    return (
        <>
            <div className="h-[81px] border-b-[3px] border-b-white grid grid-cols-3 items-center">
                <div className="text-[20px] font-semibold ml-6 relative select-none">
                    <div>FaultyTwo's</div>
                    <div>Den of Things</div>
                    <picture>
                        <img className="absolute top-1 left-[140px] rotate-[20deg]" draggable={false}
                            src="/deco/star.svg" width={25} height={25}/>
                    </picture>
                    <picture>
                        <img className="absolute top-0 left-[165px] -rotate-[15deg]" draggable={false}
                            src="/deco/star.svg" width={15} height={15}/>
                    </picture>
                </div>
                <div className="justify-self-center flex items-center">
                    {
                        navMenu.map((nav: NavMenuType, idx: number) => (
                            <Link key={"navbar" + nav.name} href={nav.link} 
                                className="py-2 px-5 border-r-2 last:border-r-0 hover:text-slate-300 transition-colors">
                                {nav.name}
                            </Link>
                        ))
                    }
                </div>
                <div></div>
            </div>
            <div className="mx-auto my-3 w-[95vw] h-[85vh] border-2 p-3 overflow-y-auto">
                {children}
            </div>
        </>
    )
}