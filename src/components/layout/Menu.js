import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <ul className="main-menu__list">
        <li>
          <Link className={pathname == "/" ? "active" : ""} href="/">
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className={pathname == "/about" ? "active" : ""} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={pathname == "/teams" ? "active" : ""} href="/teams">
            Teams
          </Link>
        </li>
        <li>
          <Link
            className={pathname == "/insurance" ? "active" : ""}
            href="/insurance"
          >
            Insurance
          </Link>
        </li>
        <li>
          <Link className={pathname == "/faq" ? "active" : ""} href="/faq">
            FAQ
          </Link>
        </li>
        <li>
          <Link
            className={pathname == "/testimonials" ? "active" : ""}
            href="/testimonials"
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link className={pathname == "/news" ? "active" : ""} href="/news">
            Latest News
          </Link>
        </li>
        <li>
          <Link
            className={pathname == "/contact" ? "active" : ""}
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}
