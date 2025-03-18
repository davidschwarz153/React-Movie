import { useState, useContext, useEffect } from "react";
import { mainContext } from "../../context/MainProvider";
import { IMovie } from "../interfaces/Interface";

export default function SearchFilters() {
    const { allMovies, setFilteredMovies } = useContext(mainContext) as { 
        allMovies: IMovie[]; 
        setFilteredMovies: (movies: IMovie[]) => void;
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        let filtered = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortOption === "date-desc") {
            filtered = [...filtered].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        } else if (sortOption === "date-asc") {
            filtered = [...filtered].sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
        } else if (sortOption === "rating") {
            filtered = [...filtered].sort((a, b) => b.vote_average - a.vote_average);
        } else if (sortOption === "a-z") {
            filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === "z-a") {
            filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredMovies(filtered);
    }, [searchTerm, sortOption, allMovies]);

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-200 rounded-lg shadow text-white">
            <input
                type="text"
                placeholder="Film suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border rounded w-full md:w-3/4"
                />

            <select 
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border rounded w-full md:w-2/4">
                <option value="">Sortieren nach...</option>
                <option value="date-desc">Neueste zuerst</option>
                <option value="date-asc">Älteste zuerst</option>
                <option value="rating">Beste Bewertung</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>
        </div>
    );
}
