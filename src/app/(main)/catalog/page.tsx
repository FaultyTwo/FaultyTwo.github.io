import { Metadata } from "next";
import Catalog from "./_components/Catalog";

export const metadata: Metadata = {
    title: "Catalog"
}

export default function CatalogPage(){
    return <Catalog />
}