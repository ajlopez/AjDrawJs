
AjDraw = function() {
	function Point(x, y) {
		this.x = x;
		this.y = y;
	}
	
	Point.prototype.translate = function(move) 
	{
		return new Point(this.x + move.x, this.y + move.y);
	}
	
	Point.prototype.resize = function(ratio)
	{
		return new Point(this.x * ratio, this.y * ratio);
	}
	
	Point.prototype.horizontalResize = function(ratio)
	{
		return new Point(this.x * ratio, this.y);
	}
	
	Point.prototype.verticalResize = function(ratio)
	{
		return new Point(this.x, this.y * ratio);
	}
	
	Point.prototype.rotate = function(degrees)
	{
		if (degrees == 0)
			return this;
			
		if (degrees == 90)
			return new Point(-this.y, this.x);
			
		if (degrees == 180)
			return new Point(-this.x, -this.y);
			
		if (degrees == 270)
			return new Point(this.y, -this.x);
			
        var newx = this.x * Math.cos(2 * Math.PI / 360 * degrees)
                        - this.y * Math.cos(2 * Math.PI / 360 * degrees);

        var newy = this.x * Math.sin(2 * Math.PI / 360 * degrees)
                        + this.y * Math.cos(2 * Math.PI / 360 * degrees);

        return new Point(newx, newy);
	}
	
	function Line(from, to) {
		this.from = from;
		this.to = to;
	}
	
	Line.prototype.translate = function(move) {
		this.from = this.from.translate(move);
		this.to = this.to.translate(move);
	}
	
	Line.prototype.resize = function(ratio) {
		this.from = this.from.resize(ratio);
		this.to = this.to.resize(ratio);
	}
	
	Line.prototype.horizontalResize = function(ratio) {
		this.from = this.from.horizontalResize(ratio);
		this.to = this.to.horizontalResize(ratio);
	}
	
	Line.prototype.verticalResize = function(ratio) {
		this.from = this.from.verticalResize(ratio);
		this.to = this.to.verticalResize(ratio);
	}
	
	Line.prototype.rotate = function(degrees) {
		this.from = this.from.rotate(degrees);
		this.to = this.to.rotate(degrees);
	}
	
	Line.prototype.draw = function(image) {
		image.drawLine(this.from.x, this.from.y, this.to.x, this.to.y);
	}
	
	Line.prototype.clone = function() {
		return new Line(this.from, this.to);
	}
	
	function Composite() {
		var elements = [];
		
		function line(from, to) {
			add(new Line(from, to));
		}
		
		function add(element)
		{
			elements.push(element);
		}
		
		function draw(image) {
			for (var n in elements)
				elements[n].draw(image);
		}
		
		function translate(move) {
			for (var n in elements)
				elements[n].translate(move);
		}
		
		function translateHorizontal(move) {
			for (var n in elements)
				elements[n].translate(move);
		}
		
		function clone() {
			var newobj = new Composite();
			
			for (var n in elements)
				newobj.add(elements[n].clone());
				
			return newobj;
		}
		
		this.line = line;
		this.add = add;
		this.draw = draw;
		this.translate = translate;
		this.clone = clone;
		
		this.elements = function() { return elements; }
	}
	
	function Image(ctx) {
		var lastx = -1;
		var lasty = -1;
		
		function drawLine(x1, y1, x2, y2)
		{
			if (x1 != lastx || y1 != lasty)
				ctx.moveTo(x1, y1);
				
			ctx.lineTo(x2, y2);
			
			lastx = x2;
			lasty = y2;
			
			ctx.stroke();
		}
		
		this.drawLine = drawLine;
	}
	
	return {
		Point: Point,
		Line: Line,
		Image: Image,
		Composite: Composite
	}
}();
