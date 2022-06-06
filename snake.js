class Snake {

	constructor() {
		this.xspeed = 0
		this.yspeed = 1
		this.x = Math.floor(width/2)
		this.y = Math.floor(height/2)
		this.tail = []
		this.toGrow = false
	}

	update() {
		// Move
		this.tail.unshift([this.x, this.y])
		this.tail.pop()
		this.x = this.x + this.xspeed * scale
		this.y = this.y + this.yspeed * scale

		// Check if dead
		for (let i = 0; i < this.tail.length; i += 1) {
			// Tail collision
			if (JSON.stringify(this.tail[i]) === JSON.stringify([this.x, this.y])) {
				this.tail = []
			// Outside map	
			} else if (this.x > 1600 || this.x < 0 || this.y > 900 || this.y < 0) {
				this.tail = []
				this.x = Math.floor(width/2)
				this.y = Math.floor(height/2)
			}
		}
	}

	show() {
		// Draw head
		fill(255)
		rect(this.x, this.y, 20, 20)

		// Draw tail
		for (let i = 0; i < this.tail.length; i += 1) {
			fill(255)
			rect(this.tail[i][0], this.tail[i][1], 20, 20)
		}
	}

	direction(x, y) {
		if (Math.abs(this.xspeed - x) != 2 && Math.abs(this.yspeed - y) != 2) {
			this.xspeed = x
			this.yspeed = y
		}
	}

	grow() {
		this.tail.unshift([this.x, this.y])
	}

	getPos() {
		return [this.x, this.y]
	}
}