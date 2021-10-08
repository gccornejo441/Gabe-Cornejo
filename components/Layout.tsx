
export default function Layout({ children }) {
  return (
    <>
    <main className="h-screen flex bg-camp-green ">
        <div className="container mx-auto border-2 border-red-300">
          <div className=" border-2 border-blue-200 mt-20">
            <ul className="font-sans text-white text-lg md:text-xl font-semibold grid grid-cols-4 justify-items-center">
              <li>
              <a href="/">GABE CORNEJO</a>
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