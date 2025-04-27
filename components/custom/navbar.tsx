'use client'
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Outfit } from 'next/font/google'
import { FaLayerGroup } from "react-icons/fa";
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import clsx from "clsx";
import link from "next/link"
import { AiTwotoneEdit } from "react-icons/ai";
import { PiLinkBold } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";




const logoFont = Outfit({
  weight: ['600'],
  subsets: ['latin']
})

export default function Navbar() {
  const param = useParams();
  const pathName = usePathname();

  if (param?.username) {
    console.log("NAvbar Should Be Hiiden")
    return <></>
  }
  return (
    <>
      <nav className="bg-white flex md:flex-row justify-between border-b-2 items-center h-16 px-4">
        <div className="flex items-center space-x-3">
          <FaLayerGroup className=" text-blue-700 text-2xl" />

          <a href="/" className="text-xl font-bold text-slate-800">Portique</a>
        </div>            <div className="space-x-6 mr-3 flex md:flex-row items-center ">
          <Link href="/" className={
            clsx('text-black-500',
              {
                'text-black-900     ': pathName === "/"
              }
            )
          }>Templates</Link>

      





          <SignedOut   >
            <SignInButton forceRedirectUrl="/onboarding"  >
              <Button className="bg-custom-primary  hover:bg-blue-700">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <span> <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link href="/edit" label="Edit Details" labelIcon ={<AiTwotoneEdit />} />
                <UserButton.Link href="/customUrl" label="Custom URL" labelIcon ={<FaLink />} />
                <UserButton.Link href="/embedCode" label="Embed Code" labelIcon ={<ImEmbed2  />} />
              </UserButton.MenuItems>
                  </UserButton>
          </SignedIn>
          </span>
        </div>
      </nav>
    </>
  )

}

