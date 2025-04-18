export interface Page {
    navbar: NavbarProps;
}

export interface NavbarProps {
    logoSrc: string;
    links: Array<{ label: string; href: string }>;
    sticky?: boolean;
}


