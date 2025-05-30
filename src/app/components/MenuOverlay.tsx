import NavLink from "./NavLink";

interface NavLinks {
  title: string;
  path: string;
}
type MenuOverlayProps = {
  links: NavLinks[];
};
export default function MenuOverlay({ links }: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
}
