// Import components
import { Button } from '../../ui/button'

function ScrollButton() {
    return (
        <div>
            <Button
                className="h-15 w-70 text-xl"
                onClick={() => console.log("clicked")}
            >
                Scroll Down
            </Button>
        </div>
    )
}

export default ScrollButton