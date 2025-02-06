
/* 
interface DialogueBoxProps {
    title: string
    desc: React.ReactNode
    img: string
}
*/

export default function DialogueBox(){
    return (
        <>
            <div className="gap-4 grid grid-cols-[20%_60%] justify-center">
                <picture>
                    <img className="object-scale-down w-[75%] place-self-end
                        rounded-lg h-max-[10%] border-2 border-red-500" draggable={false} 
                        alt="beloved staffs" src="/char/placeholder.png" />
                </picture>
                <div className="border-2 rounded-lg p-4 flex flex-col gap-4">
                    <div className="text-[40px] font-semibold">
                        &quot;Uh. Can I help you?&quot;
                    </div>
                    <div>
                        Oh. You are visiting? That&apos;s nice to hear. But ...
                    </div>
                    <div>
                        As you can see. This entire site is still under renovation.
                        So many things to do, so many goods to take in and junks to take out.
                    </div>
                    <div>
                        The best I could offer you now is a nice 
                        <span className="text-green-highlight">&nbsp;&quot;About&quot;&nbsp;</span> 
                        section.
                    </div>
                </div>
            </div>
        </>
    )
}