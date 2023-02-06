import { useEffect, useState } from 'react'
import store from '../stores/RobotStore'
import Robot from './Robot'
import RobotForm from './RobotForm'

function RobotList () {
	const [robots, setRobots] = useState([])

	useEffect(() => {
		setRobots(store.getRobots())
		store.emitter.addListener('UPDATE', () => {
			setRobots(store.getRobots())
		})
	}, [])

	const addRobot = (r) => {
		store.addRobot();
	}

	return (
		<div>
			<RobotForm onAdd={addRobot}/>				 
			{
				robots.map((e, i) => 
					<Robot item={e} key={i} />
				)
			}
		</div>
	)
}

export default RobotList
