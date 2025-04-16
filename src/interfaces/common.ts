/**
 * Logo interface
 */
export interface Logo {
    img: string;
    name: string;
}

/**
 * Menu interface
 */
export interface Menu {
    href: string;
    name: string;
    style?: string;
    click?: (name: string) => void;
}

/**
 * 
 */
export interface Major {
    icon: string;
    title: string; 
    subjects: string;
}

