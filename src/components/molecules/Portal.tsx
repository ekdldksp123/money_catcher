import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    elementId: string,
    child: ReactNode,
}

export const Portal:React.FC<PortalProps> = ({ elementId, child }:PortalProps) =>
{
	// const element = typeof window !== 'undefined' && useMemo(() => document.getElementById(elementId), [ elementId ]) as ReactNode;
	// // const rootElement = useMemo(() => document.getElementById(elementId), [ elementId ]) as HTMLElement;
	// return element && child ? createPortal(element, element) : null;

	const element = typeof window !== 'undefined' && document.querySelector(elementId);
	return element && child ? createPortal(child, element) : null;
};