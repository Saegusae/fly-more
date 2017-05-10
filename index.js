module.exports = function FlyMore(dispatch) {
	let enabled = false;

	dispatch.hook('S_CANT_FLY_ANYMORE', 1, () => {
		if (enabled) return false;
	});
	
	dispatch.hook('C_CHAT', 1, (event) => {
		if(event.message.includes("!fly")) {
			enabled = !enabled;
			message(`Fly-More toggled: ${enabled}`);
			return false;
		}
	});
  
	function message(msg) {
		dispatch.toClient('S_CHAT', 1, {
			channel: 24,
			authorID: 0,
			unk1: 0,
			gm: 0,
			unk2: 0,
			authorName: '',
			message: '(FlyMore) ' + msg
		});
	}
}