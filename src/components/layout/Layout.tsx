import React from "react";
import { useRecoilState } from "recoil";
import { siteConfig } from "../../store";

interface ILayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    const [settings, setSettings] = useRecoilState(siteConfig);

    const handleLeftDrawerToggle = () => {
        alert("Do something here!!");
    };

    return (
        <div>
            <main>
                <div>{children}</div>
            </main>
        </div>
    );
};
export default Layout;
