import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-end space-x-8 mr-8">
            <Link href="/">
                <a>首頁</a>
            </Link>
            <Link href="/about">
                <a>關於</a>
            </Link>
            <Link href="/list">
                <a>列表</a>
            </Link>
        </nav>
    );
};

export default Navbar;
