import Image from "next/image";

const SEO = () => {
    return(
        <>
            <section className="w-full h-screen grid place-items-center">
                {/* <img src="/banner.jpg" alt="banner" /> */}
                <Image 
                    // src={"/banner.jpg"} //Local Image
                    src={"https://images5.alphacoders.com/135/thumbbig-1353801.webp"}
                    width={400} 
                    height={400}
                    alt="banner"
                    sizes="(max-width: 768px) 100w, 50vh"
                    priority
                    placeholder="blur"
                    blurDataURL=""
                    // fill
                />
            </section>
        </>
    )
}

export default SEO;