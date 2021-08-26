import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="max-w-5xl m-auto">
            <Header />
            {children}

        </div>
    )
}