export default () => {
    return {
        
        getFavoritesMovies() {
            const local = localStorage.getItem("favorites");
            if(local !== null){
                return JSON.parse(local);
            } else {
                return null;
            }
        },
        setFavoritesMovies(list: []){
            localStorage.setItem("favorites", JSON.stringify(list))
        },
        clearFavoritesMovies(){
            localStorage.removeItem("favorites");
        }
    }
}