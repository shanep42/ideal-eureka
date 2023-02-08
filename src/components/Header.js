import Navigation from "./Navigation";

function Header({ currentPage, setCurrentPage }) {
    return (
        <div id="home">
            <h1 class="lg-heading">
                Shane <span class="text-secondary">Peterson</span>
            </h1>
            <h2 class="sm-heading">
                Web Developer
            </h2>
            {/* <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
        </div>
    )
}

export default Header