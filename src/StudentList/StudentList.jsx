import Scores from "../Scores/Scores";

export default function StudentList({studentProp}) {
    const scores = studentProp.scores.map((score, idx) => <Scores score={score}/>)
    return (
        <>
            <h5>Name: {studentProp.name}</h5>
            <p>Bio: {studentProp.bio}</p>
            {scores}
        </>
    );
}