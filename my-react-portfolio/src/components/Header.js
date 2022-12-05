import Navigation from "./Navigation";

function Header({ currentPage, setCurrentPage }) {
    return (
        <div>
            <h1>Shane Peterson</h1>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default Header