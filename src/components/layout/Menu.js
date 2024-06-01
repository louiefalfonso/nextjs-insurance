import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

       
            <ul className="main-menu__list">
                <li className="dropdown current">
                    <Link href="/">Home </Link>
                    <ul>
                        <li className="current"><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                        <li><Link href="index-4">Home Four</Link></li>
                        <li><Link href="index-5">Home Five</Link></li>
                        <li className="dropdown">
                            <Link href="#">Header Styles</Link>
                            <ul>
                                <li className="current"><Link href="/">Header One</Link></li>
                                <li><Link href="index-2">Header Two</Link></li>
                                <li><Link href="index-3">Home Three</Link></li>
                                <li><Link href="index-4">Home Four</Link></li>
                                <li><Link href="index-5">Home Five</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="about">About</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="portfolio">Portfolio</Link></li>
                        <li><Link href="portfolio-details">Portfolio Details</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="/error">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Insurance</Link>
                    <ul>
                        <li><Link href="insurance">Insurance</Link></li>
                        <li><Link href="life-insurance">Life Insurance</Link></li>
                        <li><Link href="health-insurance">Health Insurance</Link></li>
                        <li><Link href="car-insurance">Car Insurance</Link></li>
                        <li><Link href="home-insurance">Home Insurance</Link></li>
                        <li><Link href="family-insurance">Family Insurance</Link></li>
                        <li><Link href="business-insurance">Buisness Insurance</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-sidebar">Blog Sidebar</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="products">Products</Link></li>
                        <li><Link href="product-details">Product Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
