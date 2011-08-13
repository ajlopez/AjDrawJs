
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
	
	function Line(from, to, style) {
		this.from = from;
		this.to = to;
		this.style = style;
	}
	
	Line.prototype.translate = function(move) {
		return new Line(
			this.from.translate(move),
			this.to.translate(move),
			this.style
		);
	}
	
	Line.prototype.resize = function(ratio) {
		return new Line(
			this.from.resize(ratio),
			this.to.resize(ratio),
			this.style
		);
	}
	
	Line.prototype.horizontalResize = function(ratio) {
		return new Line(
			this.from.horizontalResize(ratio),			
			this.to.horizontalResize(ratio),
			this.style
		);
	}
	
	Line.prototype.verticalResize = function(ratio) {
		return new Line(
			this.from.verticalResize(ratio),
			this.to.verticalResize(ratio),
			this.style
		);
	}
	
	Line.prototype.rotate = function(degrees) {
		return new Line(
			this.from.rotate(degrees),
			this.to.rotate(degrees),
			this.style
		);
	}
	
	Line.prototype.draw = function(image) {
		image.drawLine(this.from.x, this.from.y, this.to.x, this.to.y, this.style);
	}
	
	Line.prototype.clone = function() {
		return new Line(this.from, this.to, this.style);
	}
	
	function Composite(elements, style) {
		this.elements = elements;
		this.style = style;
		
		if (this.elements == undefined)
			this.elements = [];
	}
		
	Composite.prototype.line = function (from, to) {
		this.add(new Line(from, to));
		return this;
	}
		
	Composite.prototype.add = function (element) {
		this.elements.push(element);
	}
		
	Composite.prototype.draw = function (image) {
		image.beginDraw(this.style);
		
		for (var n in this.elements)
			this.elements[n].draw(image);
			
		image.endDraw(this.style);
	}
		
	Composite.prototype.rotate = function (degrees) {
		var newelements = [];
			
		for (var n in this.elements)
			newelements.push(this.elements[n].rotate(degrees));
				
		return new Composite(newelements, this.style);
	}
		
	Composite.prototype.translate = function (move) {
		var newelements = [];
			
		for (var n in this.elements)
			newelements.push(this.elements[n].translate(move));
			
		return new Composite(newelements, this.style);
	}
		
	Composite.prototype.translateHorizontal = function (move) {
		var newelements = [];
			
		for (var n in this.elements)
			newelements.push(this.elements[n].translate(move));
			
		return new Composite(newelements, this.style);
	}
		
	Composite.prototype.clone = function () {
		var newelements = [];
			
		for (var n in this.elements)
			newelements.push(this.elements[n].clone());
				
		return new Composite(newelements, this.style);
	}
	
	function Triangle(point1, point2, point3, style) {
		Composite.prototype.constructor.call(
			this, 
			[new Line(point1, point2),
			new Line(point2, point3),
			new Line(point3, point1)],
			style
		);
	}
	
	Triangle.prototype = new Composite();
	Triangle.prototype.constructor = Triangle;
	
	function Image(ctx) {
		var lastx = -1;
		var lasty = -1;
		
		function drawLine(x1, y1, x2, y2, style)
		{				
			beginDraw(style);
			
			if (x1 != lastx || y1 != lasty)
				ctx.moveTo(x1, y1);
				
			ctx.lineTo(x2, y2);
			
			lastx = x2;
			lasty = y2;
			
			endDraw(style);
		}
		
		function beginDraw(style) 
		{
			if (style != null) {
				ctx.save();
				ctx.beginPath();
			}
		}
		
		function endDraw(style) 
		{
			if (style != null) {
				if (style.color != null)
					if (style.fill)
						ctx.fillStyle = style.color;
					else
						ctx.strokeStyle = style.color;
				if (style.fill)
					ctx.fill();
				else
					ctx.stroke();
				ctx.restore();
			}
		}
		
		this.drawLine = drawLine;
		this.beginDraw = beginDraw;
		this.endDraw = endDraw;
	}
	
	return {
		Point: Point,
		Line: Line,
		Image: Image,
		Composite: Composite,
		Triangle: Triangle
	}
}();
