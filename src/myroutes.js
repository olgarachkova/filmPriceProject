import { StartPageFilmsContainer } from 'containers/StartPageFilmsContainer'
import { AboutFilmPageContainer } from 'containers/aboutFilmPageContainer'
import { SearchPageContainer } from 'containers/searchPageContainer'
import { AboutUs } from 'components/aboutUs'
import { AboutProject } from 'components/aboutProject'

export const myroutes = [
    {
        path: '/',
        exact: true,
        component: StartPageFilmsContainer
    },
    {
        path: '/film/:filmid',
        exact: true,
        component: AboutFilmPageContainer
    },
    {
        path: '/search',
        exact: true,
        component: SearchPageContainer
    },
    {
        path: '/aboutus',
        exact: true,
        component: AboutUs
    },
    {
        path: '/aboutproject',
        exact: true,
        component: AboutProject
    }
]