export const fetchGenres = () => {
    return $.ajax({
        url: `api/genres`
    })
}