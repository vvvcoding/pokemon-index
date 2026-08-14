import { Progress, ProgressLabel, ProgressValue } from "../../ui/progress"

function StatsContainer() {
    return (
        <div className="border relative px-10 pt-3 pb-5 rounded-lg">
            <Progress value={56} className="w-full max-w-sm">
                <ProgressLabel>Collection Progress</ProgressLabel>
                <ProgressValue />
            </Progress>
        </div>
    )
}

export default StatsContainer