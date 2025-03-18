import { useContext } from "react";
import { mainContext } from "../../context/MainProvider";
import { IMovie } from "../interfaces/Interface";


export default function AllMovies() {
    const { filteredMovies } = useContext(mainContext) as { filteredMovies: IMovie[] }; 

    return (
        <div className="flex flex-col item-center justify-center text-white">

            <section className="grid gap-4 content-center sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <article key={movie.id} className="w-full p-10">
                            <div className="text-center">
                                <div>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={movie.title} 
                                        className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-102 duration-300 mb-4"
                                        />
                                </div>
                                <p className="mt-2 text-lg font-semibold">{movie.title} (<span className="font-mono text-gray-400">{movie.release_date.split('-')[0]}</span>)</p>
                                
                                <p>{movie.vote_average.toFixed(1)} ⭐️</p>
                                
                            </div>
                        </article>
                    ))
                ) : (
                    <p>Lade Filme...</p>
                )}
                
            </section>
            
        </div>

    );
}
