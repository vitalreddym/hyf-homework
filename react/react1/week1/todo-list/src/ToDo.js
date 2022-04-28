export default function ToDo(props) {
    return (
        <li className="TODO">
            <h2>{props.description}</h2>, <h2>{props.deadline}</h2>
        </li>

    );
}
