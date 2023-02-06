import {useState} from 'react'

function RobotForm (props) {
let {item} = props

const {onAdd} = props;

const [name, setName] = useState('');
const [type, setType] = useState('');
const [mass, setMass] = useState('');

    const addRobot = (event) =>{
        event.preventDefault();
        onAdd({
            name,
            type,
            mass
        })

        setName('');
        setType('');
        setMass('');
    }



return (
    <form>
        <p>Robot Form</p>

        <label>name</label>
        <input type="text" name = "name" id="name" onChange = {(e) => setName(e.target.value)} value = {name} ></input>
        <br/>

        <label>type</label>
        <input type="text" name = "type" id="type" onChange = {(e) => setType(e.target.value)} value = {type}></input>
        <br/>

        <label>mass</label>
        <input type="text" name = "mass" id="mass" onChange = {(e) => setMass(e.target.value)} value = {mass}></input>
        <br/>

        <input type="submit" value = "add" onClick = {addRobot}></input>
    </form>
)
}

export default RobotForm