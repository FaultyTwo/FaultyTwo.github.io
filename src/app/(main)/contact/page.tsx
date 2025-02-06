import { Metadata } from "next";
import Contact from "./_components/Contact";

export const metadata: Metadata = {
    title: "Contact"
}

export default function ContactPage(){
    return <Contact />
}