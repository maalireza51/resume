import { motion } from "framer-motion";
import Profile from "./Profile";

const Content = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="basis-1/3">
                <div className="card h-full border md:scale-y-105 md:border-gray-100">
                    <Profile/>
                </div>
            </div>
            <div className="basis-2/3 border-left border-gray-500">
                {children}
            </div>
        </div>
    );
}

export default Content;