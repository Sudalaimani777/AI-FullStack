import { IoArchive } from "react-icons/io5"
import { MdDeleteSweep, MdPushPin } from "react-icons/md"


const NotesCard = ({notes}) => {
  return (
    <>
        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {notes?.length > 0 ? (
                  notes.map((note, index) => (
                    <article
                      key={note.id}
                      className="group relative overflow-hidden rounded-4xl border border-amber-200/70 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(120,53,15,0.55)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-32px_rgba(120,53,15,0.65)]"
                    >
                      <div className="absolute inset-x-5 top-0 h-1 rounded-full bg-linear-to-r from-amber-400 via-orange-400 to-yellow-300 opacity-80" />
        
                      <div className="flex items-start justify-between gap-4 pt-3">
                        <div className="space-y-3">
                          <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700">
                            Note {index + 1}
                          </span>
                          <h2 className="text-xl font-semibold capitalize tracking-tight text-slate-900">
                            {note.title || "Untitled note"}
                          </h2>
                        </div>
        
                        <button
                          type="button"
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-amber-700 transition hover:border-amber-300 hover:bg-amber-100 hover:text-amber-900"
                          aria-label="Pin note"
                        >
                          <MdPushPin className="text-xl" />
                        </button>
                      </div>
        
                      <p className="mt-5 line-clamp-6 text-sm leading-7 text-slate-600">
                        {note.text}
                      </p>
        
                      <div className="mt-6 flex items-center justify-between border-t border-amber-100 pt-4">
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                          Saved in workspace
                        </p>
        
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-700"
                            aria-label="Archive note"
                          >
                            <IoArchive className="text-xl" />
                          </button>
                          <button
                            type="button"
                            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50/70 text-red-500 transition hover:border-red-200 hover:bg-red-100 hover:text-red-700"
                            aria-label="Delete note"
                          >
                            <MdDeleteSweep className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="sm:col-span-2 xl:col-span-3">
                    <div className="rounded-4xl border border-dashed border-amber-300 bg-white/60 px-6 py-12 text-center shadow-sm backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
                        No notes yet
                      </p>
                      <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                        Your note cards will appear here
                      </h2>
                      <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
                        Add your first title and message above to start building a tidy,
                        colorful notes board.
                      </p>
                    </div>
                  </div>
                )}
              </div>
    </>
  )
}

export default NotesCard