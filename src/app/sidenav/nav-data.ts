import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';


export const navbarData: Array<any> = [
    {
        routerLink: 'dashboard',
        icon: faHome,
        label: 'Dashboard'
    },
    {
        routerLink: 'transactions',
        icon: faChartBar,
        label: 'Transactions'
    },
]