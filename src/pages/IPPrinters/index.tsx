import { useLocation } from "react-router-dom"
import { HeaderComponent } from "../../components/header"

export const IPPrinters = () => {
    const location = useLocation()

    return <><HeaderComponent location={location} /></>
}