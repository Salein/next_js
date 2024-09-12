import Link from "next/link"

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href='about'>About</Link>
            </nav>
        </header>
    )
}

export default Header
