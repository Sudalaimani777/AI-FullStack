import logo from "../assets/images/logo.webp"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-amber-100 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-amber-100 via-orange-100 to-yellow-50 shadow-sm ring-1 ring-amber-200 md:h-14 md:w-14">
            <img src={logo} alt="NoteIt logo" className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Notes Workspace
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              NoteIt
            </h1>
          </div>
        </div>

        <div className="hidden rounded-full border border-amber-100 bg-amber-50/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm sm:block">
          Organize faster, remember better
        </div>
      </div>
    </header>
  )
}

export default Navbar
