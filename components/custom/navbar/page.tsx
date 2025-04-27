'use client'
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Outfit } from 'next/font/google'
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import clsx from "clsx";
import link from "next/link"

const logoFont = Outfit({ 
    weight: ['600'],
    subsets: ['latin'] })

export default  function Navbar() {
  const param = useParams();
  const pathName = usePathname();

    if(param?.username){
      console.log("NAvbar Should Be Hiiden")
      return <></>
    }
    return (
        <>
        <nav className="bg-white flex md:flex-row justify-between border-b-2 items-center h-16 px-4 mb-8">
            <a href="/" className={ `${logoFont.className} text-2xl text-custom-primary` }>Craft Fol!o</a>
            <div className="space-x-6 mr-3 flex md:flex-row items-center ">
              <Link href="/" className={
               clsx('text-black-500',
                 {
                   'text-black-900     ':pathName==="/"
                 }
               )
              }>Templates</Link>
           
               
                 

               


                <SignedOut   >
                <Button asChild className="bg-custom-primary">
            <SignInButton  />
            </Button>
            </SignedOut>
           <span> <SignedIn> 
              <UserButton />
            </SignedIn>
            </span>
            </div>
        </nav>
        </>
    )

}

