import Link from 'next/link';

export default () => (
    <section>
        <nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
        <style jsx>{`
            nav {
                display:flex;
            }
            nav a {
                background-color:#ededed;
                padding: .5em 1rem;
                text-decoration: none;
            }
            nav a:hover {
                background-color:#ddd;
            }
        `}</style>
    </section>
);