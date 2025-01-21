import { Button } from "@/components/ui/button"
import { Outfit } from 'next/font/google'


const logoFont = Outfit({ 
    weight: ['600'],
    subsets: ['latin'] })

export default function navbar() {
    return (
        <nav className="bg-white w-screen flex md:flex-row justify-between border-b-2 items-center h-16">
            <a href="/" className={ `${logoFont.className}` }>Craft Fol!o</a>
            <div className="space-x-6 mr-3 items-center">
                <a href="/Community" className="">Community</a>
                <Button asChild className="bg-custom-primary">
                    <a href="/login">Get Started</a>
                </Button>
            </div>
        </nav>
    )

}
