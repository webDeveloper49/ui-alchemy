import { lazy, Suspense, type ComponentType } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout
const MainLayout = lazy(() => import('./layout/MainLayout'));

// Pages
const LoginPage        = lazy(() => import('./pages/Login'));
const Dashboard        = lazy(() => import('./pages/Dashboard'));
const NotFound         = lazy(() => import('./pages/NotFound'));
const UnauthorizedPage = lazy(() => import('./pages/UnauthorizedPage'));

const CustomisedLoader = lazy(
  () => import('./pages/customisedStyles/CustomisedLoader')
);
const CustomisedSVG = lazy(
  () => import('./pages/customisedStyles/CustomisedSVG')
);

const AdvancedSVG  = lazy(() => import('./pages/svg/AdvancedSVG'));
const SVGFilters   = lazy(() => import('./pages/svg/SvgFilters'));
const SVGExercises = lazy(() => import('./pages/svg/SVGExercises'));
const ThreeJSGuide = lazy(() => import ('./pages/threejs/Guide'));

// Projects
const Counter           = lazy(() => import('./pages/projects/counter/Counter'));
const Todolist          = lazy(() => import('./pages/projects/todolist/Todolist'));
const CricketScore      = lazy(() => import('./pages/projects/cricketscore/CricketScore'));
const Countries         = lazy(() => import('./pages/projects/countries/Countries'));
const BillGeneration    = lazy(() => import('./pages/projects/billGeneration/BillGeneration'));
const DailyPlanner      = lazy(() => import('./pages/projects/dailyPlanner/DailyPlanner'));
const FoodBilling       = lazy(() => import('./pages/projects/foodBilling/FoodBilling'));
const InfoAsyncActivity = lazy(
  () => import('./pages/projects/infoAsyncActivity/InfoAsyncActivity')
);
const Registration = lazy(
  () => import('./pages/projects/registration/Registration')
);
const StudentInfo = lazy(
  () => import('./pages/projects/studentInfo/StudentInfo')
);
const BooksCRUD = lazy(
  () => import('./pages/projects/booksCRUD/BooksCRUD')
);

const Loader = () => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '18px',
      fontWeight: 600,
    }}
  >
    Loading...
  </div>
);

const withSuspense = (Component: React.LazyExoticComponent<ComponentType>) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter(
  [
    // Public
    {
      path: '/login',
      element: withSuspense(LoginPage),
    },

    // Main Layout wrapper
    {
      path: '/',
      element: withSuspense(MainLayout),
      children: [
        // Default
        {
          index: true,
          element: withSuspense(Dashboard),
        },

        // Existing routes
        {
          path: 'dashboard',
          element: withSuspense(Dashboard),
        },
        {
          path: 'customized',
          children:[
            {
              path: 'loader',
              element: withSuspense(CustomisedLoader),
            },
            {
              path: 'svg',
              element: withSuspense(CustomisedSVG),
            },
          ]
        },
        {
          path: 'tutorials',
          children: [
            {
              path: 'svg-filters',
              element: withSuspense(SVGFilters),
            },
            {
              path: 'advanced-svg',
              element: withSuspense(AdvancedSVG),
            },
            {
              path: 'svg-exercises',
              element: withSuspense(SVGExercises),
            },
            {
              path: 'threejs-guide',
              element: withSuspense(ThreeJSGuide),
            },
          ]
        },
        {
          path: 'projects',
          children: [
            {
              path: 'counter',
              element: withSuspense(Counter),
            },
            {
              path: 'booksCRUD',
              element: withSuspense(BooksCRUD),
            },
            {
              path: 'todolist',
              element: withSuspense(Todolist),
            },
            {
              path: 'cricketscore',
              element: withSuspense(CricketScore),
            },
            {
              path: 'countries',
              element: withSuspense(Countries),
            },
            {
              path: 'billGeneration',
              element: withSuspense(BillGeneration),
            },
            {
              path: 'dailyPlanner',
              element: withSuspense(DailyPlanner),
            },
            {
              path: 'foodBilling',
              element: withSuspense(FoodBilling),
            },
            {
              path: 'infoAsyncActivity',
              element: withSuspense(InfoAsyncActivity),
            },
            {
              path: 'registration',
              element: withSuspense(Registration),
            },
            {
              path: 'studentInfo',
              element: withSuspense(StudentInfo),
            },
          ],
        },

        // Others
        {
          path: 'unauthorized',
          element: withSuspense(UnauthorizedPage),
        },
        {
          path: '*',
          element: withSuspense(NotFound),
        },
      ],
    },
  ],
  { basename: '/ui-alchemy' }
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}