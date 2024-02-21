import MyInfoOwner from '@/views/Store/MyInfoOwner';
import MyStores from '@/views/Store/MyStores';
import MyInfoUpdate from '@/views/Store/MyInfoUpdate';
import MyStoreInfo from '@/views/Store/MyStoreInfo';
import StoreCreate from '@/views/Store/StoreCreate';
import StoreUpdate from '@/views/Store/StoreUpdate';

export const storeRoutes = [
    {
        path: '/my-info-owner',
        name: 'MyInfoOwner',
        component: MyInfoOwner,
    },
    {
        path: '/my-stores',
        name: 'MyStores',
        component: MyStores,
    },
    {
        path: '/:id/my-store-info',
        name: 'MyStoreInfo',
        component: MyStoreInfo,
        props: true,
    },
    {
        path: '/my-info-update',
        name: 'MyInfoUpdate',
        component: MyInfoUpdate,
    },
    {
        path: '/store-create',
        name: 'StoreCreate',
        component: StoreCreate,
    },
    {
        path: '/store-update',
        name: 'StoreUpdate',
        component: StoreUpdate,
    },
];