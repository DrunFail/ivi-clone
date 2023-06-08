import { useState } from "react";

export default function useHeaderDropdownWindow(){
    const [visible, setVisible] = useState(false);

    

    const handleVisible = (status:boolean) => {
        setVisible(status);
    }

    return {visible,handleVisible};
}