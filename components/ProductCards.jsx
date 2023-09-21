
export function ProductCards({dot, heading, description }) {
    return(
        <div className="pt-4 md:pt-16 w-full md:w-4/12 px-0 sm:px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-zinc-100 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-2 sm:px-4 py-5 flex-auto">
                    <div className={`p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${dot}`}>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800"> {heading} </h3>
                    <p className="text-slate-700"> {description} </p>
                </div>
            </div>
        </div>
    )
}