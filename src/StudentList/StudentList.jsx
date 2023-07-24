import Scores from "../Scores/Scores";

export default function StudentList({studentProp}) {
    const scores = studentProp.scores.map((score, idx) => <Scores score={score} key={idx}/>)
    return (
        <>
            <h2>Name: {studentProp.name}</h2>
            <p>Bio: {studentProp.bio}</p>
            <p>Scores:
                <ul>
                    {scores}
                </ul>
            </p>
        </>
    );
}