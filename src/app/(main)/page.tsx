import { Metadata } from "next"
import DialogueBox from "./_components/DialogueBox"

export const metadata: Metadata = {
    title: "Home"
}

export default function HomePage(){
    return (
        <>
        {/* <div className="flex flex-col gap-y-4">
            <DialogueBox />
            <Newest />
        </div> */}
        <DialogueBox />
        </>
    )
}