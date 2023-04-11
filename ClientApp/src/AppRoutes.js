import { BarChart } from "./components/Charts/BarChart";
import { Chart } from "./components/Chart";
const AppRoutes = [
    {
        index: true,
        element: <Chart />
    },
    {
        path: '/BarChart',
        element: <BarChart />
    },
    {
        path: '/Chart',
        element: <Chart />
    }
];

export default AppRoutes;
