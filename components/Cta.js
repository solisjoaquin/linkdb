import Link from 'next/link'

export default function Cta() {
    return (
        <section className=" text-gray-700 body-font static">
            <div className=" container px-8 pt-12 pb-24 mx-auto lg:px-4">
                <div className=" flex flex-col w-full mb-12 text-center">
                    <div className=" px-4 sm:px-8 xl:pr-16 md:max-w-3xl md:m-auto">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-6 mb-8 sm:mt-10 sm:mb-10 dark:text-white">Welcome to LinkDB</h1>
                        <div className="font-light text-gray-800 sm:text-xl sm:leading-7 dark:text-gray-100">
                            <p className="">LinkDB is a website to save your favorite links, you can create public and private lists, group them and order them by priority.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">

                    <Link href="/about">
                        <a className=" sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base leading-6 font-semibold rounded-full shadow-sm xl:text-lg xl:py-2 xl:px-8 text-white transition ease-in-out duration-150 bg-gradient-to-r from-blue-600 to-pink-600  hover:bg-blue-800 active:bg-pink-800" >
                            Read more
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}