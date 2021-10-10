import Image from "next/image"
import gabeIcon from "../public/images/gC.svg"

export default function Layout({ children }) {
  return (
    <>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#cab4ff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <main className="h-screen flex bg-purple-background bg-cover bg-center">
        <div className="container mx-auto">
          <div className=" mt-20">
            <ul className="font-sans text-mac-purple text-lg md:text-xl font-semibold grid grid-cols-4 justify-items-center">
              <li className="flex">
                <Image src={gabeIcon} alt="gabe logo" height={50} width={50} />
                <a className="text-2xl flex flex-col px-3" href="/"><span>GABE</span><span>CORNEJO</span></a>
              </li>
              <li className="font-light">
                Work
              </li>
              <li className="font-light">
                <a href="/projects">Projects</a>
              </li>
              <li className="font-light">
                Contact
              </li>
            </ul>
          </div>
          <div>
            {children}
          </div>
        </div>
      </main>
    </>
  )
}