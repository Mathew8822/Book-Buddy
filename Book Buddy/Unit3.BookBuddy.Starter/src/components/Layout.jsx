import { PropTypes } from 'prop-types'
import ResponsiveAppBar from "./Navigations"



const Layout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <ResponsiveAppBar/>
            <div className="books">
                {children}
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout
