
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SearchFilters from "../components/searchfilters/Searchfilters";
  
  export default function Layout() {
    return (
      <div className="flex flex-col items-center m-10 ">
        <Header/>
        <SearchFilters/>
        <Outlet/>
      </div>
    );
  }
