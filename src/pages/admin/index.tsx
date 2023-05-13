import { AppProps } from "next/dist/shared/lib/router/router";
import React, { ReactElement } from "react";
import AdminDashboard from "../../components/AdminDashboard";
import AdminLayout from "../../components/AdminDashboard/AdminLayout/AdminLayout";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageSectionWrapper from "../../components/PageContainers/PageSectionContainer/PageSectionContainer";

export default function Admin({ children }: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
             
                    
                
        
    );
};

Admin.Layout = AdminLayout;
    


