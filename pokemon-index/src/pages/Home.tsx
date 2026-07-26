import CardContainer from "../components/custom-ui/CardContainer"
import Footer from "../components/custom-ui/Footer"

function Home() {
    return (
        <div className="h-full flex flex-col">

            {/* Pokemon Container */}
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="px-20 py-10">
                    <CardContainer />
                </div>
            </div>

            {/* Pagination */}
            <div className="border-t py-3">
                <Footer />
                <p>hello</p>
            </div>
        </div>
    )
}

export default Home