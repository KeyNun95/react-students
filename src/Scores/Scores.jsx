export default function Scores({score}) {

    return (
        <li>
            {score.date}: {score.score}%
        </li>
    )
}