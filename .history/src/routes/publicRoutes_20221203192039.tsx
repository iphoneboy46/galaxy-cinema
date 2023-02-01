import Home from "../components/pages/Home/Home";
import MovieShowing from "../components/pages/MovieShowing/MovieShowing";
import MuaVe from "../components/pages/MuaVe/MuaVe";


export const publicRoutes = [
    {
        path: '/', component:Home
    },
    {
        path: '/muave' , component:MuaVe
    },
    {
        path: '/phimdangchieu' , component:MovieShowing
    },
]