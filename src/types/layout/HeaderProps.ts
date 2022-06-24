import { IconType } from 'react-icons';

export interface Props {
    items: Item[];
}

export interface Item {
	name: string
	path: string
	icon: IconType
}