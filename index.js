module.exports = function FlyMore(dispatch) {
	let outOfEnergy = false

	dispatch.hook('S_CANT_FLY_ANYMORE', 1, () => false)

	dispatch.hook('S_PLAYER_CHANGE_FLIGHT_ENERGY', 1, event => { outOfEnergy = event.energy === 0 })

	dispatch.hook('C_PLAYER_FLYING_LOCATION', 3, event => {
		if(outOfEnergy && event.type !== 7 && event.type !== 8) {
			event.type = 7
			return true
		}
	})
}