import CommentMovie from "../components/pages/CommentMovie/CommentMovie";
import DaoDien from "../components/pages/DaoDien/DaoDien";
import DienAnh from "../components/pages/DienAnh/DienAnh";
import DienVien from "../components/pages/DienVien/DienVien";
import Home from "../components/pages/Home/Home";
import MovieShowing from "../components/pages/MovieShowing/MovieShowing";
import MovieWaiting from "../components/pages/MovieWaiting/MovieWaiting";
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
    {
        path: '/phimsapchieu' , component: MovieWaiting
    },
    {
        path: '/dienanh' , component: DienAnh
    },
    {
        path: '/dienvien' , component: DienVien
    },
    {
        path: '/daodien' , component: DaoDien
    },
    {
        path: '/binhluanphim' , component: CommentMovie
    },
]