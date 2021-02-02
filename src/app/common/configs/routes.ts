import HomeView from 'app/presentations/features/home/views/HomeView';

interface AppRoute {
  path: string;
  component: any;
}

const routes: AppRoute[] = [
  {
    path: '/home',
    component: HomeView,
  },
];

export type {AppRoute};
export default routes;
