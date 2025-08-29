import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";

const isLoading = false

//const session = undefined

const session = {
    user: {
        role: "manager"
    }
}


export function Routes() {

    function Route() {
        switch (session?.user.role) {
            case "employee":
                return <EmployeeRoutes />

                break;
            case "manager":
                return <ManagerRoutes />

                break;


            default:
                return <AuthRoutes />

                break;
        }
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>)


}