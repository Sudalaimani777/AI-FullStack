import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";
import Link from "next/link";


export default function LandingPage() {
  return (
    <>
      <main className="w-full">
        {/* Section 1 */}
        <section className="flex justify-center w-full h-[70vh] sm:h-[95vh]">
          <div className="flex flex-col justify-center items-center gap-5 text-center">
            {/* Banner Intro */}
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
                Manage your content with ease
              </h1>
              <p className="text-gray-400 max-w-175 mx-auto">
                Streamline your content workflow, publish with confidence
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex gap-3 p">
              <Link
                href="/sign-in"
                className="bg-gray-200 hover:bg-gray-300 transition-all duration-200 delay-100 text-black px-3 py-1 rounded-sm text-center"
              >
                Try it out!
              </Link>
              <Button variant={"outline"}>
                Learn more
              </Button>
            </div>
          </div>

        </section>

        {/* Section 2 - Card */}
        <section className="flex justify-center items-center h-inherit min-h-screen sm:min-h-[50vh] bg-gray-600/10 w-full px-4">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <span className="flex flex-col items-center gap-2">

              <Icons.BlogCustomIcon className="w-7 h-7 text-white" />
              <h3 className="text-xl font-bold text-gray-100">Intuitive Editor</h3>
              <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
            </span>
            <span className="flex flex-col items-center gap-2">
              <Layers width={50} />
              <h3 className="text-xl font-bold text-gray-100">Flexible Tools</h3>
              <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
            </span>
            <span className="flex flex-col items-center gap-2">
              <Zap width={50} />
              <h3 className="text-xl font-bold text-gray-100">Blazing Fast</h3>
              <p className="text-gray-400 w-[70%] text-center">Create and edit content with user friendly interface</p>
            </span>
          </div>
        </section>
        
        {/* Section 3 Form */}
        <section className="h-[60vh] sm:h-[50vh] w-full flex flex-col justify-center items-center">
          <div className="max-w-[50%] mx-auto space-y-3">
            <h4 className="font-bold text-2xl">
              Ready to transform your content journey ?
            </h4>
            <p className="text-sm text-gray-400">
              Join thousands of content creators like you who choose our cms
            </p>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-zinc-800 focus:outline-none rounded px-2 py-1.75 text-sm text-gray-400"
              />
              <Button variant={"outline"}>
                Submit
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
