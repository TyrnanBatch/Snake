class Food {
	constructor() {
		this.x = Math.floor(Math.random() * 80) * scale
		this.y = Math.floor(Math.random() * 45) * scale
	}

	update() {
		// Move food
		this.x = Math.floor(Math.random() * 80) * scale
		this.y = Math.floor(Math.random() * 45) * scale
	}

	show() {
		// Draw food
		fill(color(250, 20, 20))
		rect(this.x, this.y, 20, 20)
	}

	getPos() {
		return [this.x, this.y]
	}
}