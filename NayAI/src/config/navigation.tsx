export type NavLink = {
    name: string;
    href: string;
  };
  
  export const NAV_LINKS: NavLink[] = [
    { name: "Upload", href: "#upload" },
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Hint", href: "#hint" },
    { name: "Contact", href: "#footer" },
  ]