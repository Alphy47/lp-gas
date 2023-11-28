import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'
import {
    FaThLarge,
    FaIdBadge,

} from 'react-icons/fa'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <FaThLarge />
    },
    {
        key: 'sellers',
        label: 'Sellers',
        path: '/sellers',
        icon: <FaIdBadge />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/sellers',
        icon: <HiOutlineShoppingCart />
    },
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '',
        icon: <HiOutlineCog />
    }
]