import AdminLayout from "../../components/AdminDashboard/AdminLayout/AdminLayout";

export default function Admin({ children }: {children: React.ReactNode}) {

    return (
        <div>
            {children}
        </div>
             
                    
                
        
    );
};

Admin.Layout = AdminLayout;
    


