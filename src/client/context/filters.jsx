import { createContext, useState } from "react";

//Este es el contexto que tenemos que consumir
export const FiltersContext = createContext();

//Este es el que provee los datos
export function FiltersProvider ({children}){

    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0,
        maxPrice: 500
      })

    return (
        <FiltersContext.Provider value = {{
           filters,
           setFilters
        }}>
        {children}
        </FiltersContext.Provider>
    )
}