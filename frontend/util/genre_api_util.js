import { $CombinedState } from "redux"

export const fetchGenres = ()=>{
    return $.ajax({
        url: 'api/genres'
    })
}