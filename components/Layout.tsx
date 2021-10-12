import Image from "next/image"
import gabeIcon from "../public/images/gC.svg"
import Link from 'next/link'


export default function Layout({ children }) {
  return (
    <>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#cab4ff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <main className="h-screen flex bg-purple-background bg-cover bg-center">
        <div className="container mx-auto">
          <div className="mt-12 md:mt-20">
            <ul className="font-sans text-mac-purple text-lg md:text-xl font-semibold grid md:grid-cols-2 justify-items-center">
              <li className="flex">
                <Link href="/">
                  <a className="text-2xl flex px-3">
                    <Image src={gabeIcon} alt="gabe logo" height={50} width={50} />
                    <div className="pl-5 mt-2 md:pl-5 md:mt-2 flex md:flex-col flex-row">
                      <span className="pr-3 md:pr-3">GABE</span><span>CORNEJO</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="font-normal text-2xl">
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {children}
          </div>
          <div className="text-center">
            <span className="text-sm text-mac-purple font-bold pb-10"><span className="pr-2">&#169;</span>2021 Gabe Cornejo</span>
          </div>
        </div>
      </main>
    </>
  )
}