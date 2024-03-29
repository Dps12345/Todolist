import React,{Component,Fragment} from 'react';

//Simple componnets
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component{
    render(){
        const { characterData,removeCharacter } = this.props;

        return(
            <Fragment>
                <table>
                    <TableHeader />
                    <TableBody 
                        characterData = {characterData} 
                        removeCharacter = {removeCharacter}
                    />
                </table>
            </Fragment>
        );
    }
}

export default Table;