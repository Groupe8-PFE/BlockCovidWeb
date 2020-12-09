const LieuxList = (props) => {
    const lieux = props.lieux
    return (
        <div>
            <h2>Lieux </h2>
            <ul>
                {lieux.map(lieu => (
                    <li key={lieu.id}>
                        {lieu.nom} : {lieu.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default LieuxList