import Link from "next/link";

const Header: React.FC = () =>{
    return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0'}}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    </header>
    )
}
export default Header;