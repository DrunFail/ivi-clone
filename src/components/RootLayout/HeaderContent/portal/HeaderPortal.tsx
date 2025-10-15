import { createPortal } from 'react-dom';

export default function HeaderPortal({ children }: { children: React.ReactNode }) {
    const container = document.querySelector('#header-portal');

    return <>{container && createPortal(children, container)}</>;
}
