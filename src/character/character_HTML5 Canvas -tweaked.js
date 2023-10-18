(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.character_fbf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);


	this.head_color = "#FF00FF" // purple
	this.clipboard_color = "#00FFFF" // cyan
	this.hair_color = "#00FF00" // green


	// head
	this.shape = new cjs.Shape();
	this.shape.graphics.f(this.head_color).s().p("AAoDOQghgFgegRQg3gegzhCQgGABgGgDQgXgJgQgXIgDgEIAegLQAngRAlgXQBHgPAvgzQAcgdAQgkQAQglAEgnQANAQARAbQAOAYALAZIgBAAIglAHQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIABAAIAkgIIACAAIAMAhIABADQATBbgVBcQgHAfgPAaQgUAfgXAHQgTAGgVAAQgNAAgPgDgAAnBXQAAABAAAAQAAABAAABQAAAAAAAAQABABAAAAQAaAOAdAAQASAAARgGQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgVAHgXgCQgWgCgUgKIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAgABgg5QgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAXAxAhAqIgTANQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABIACABIACAAIAZgQIgDgDQghgrgXgyQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAgBAAIgBABgAAWgfQgNACABANQACAOANgBQANgCgBgOQgCgMgLAAIgCAAgACXg6QgOACACANQABAOANgCQAOgBgCgOQgBgMgLAAIgCAAgAAPhNIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgCAAQAugyAeg/QgKBJgyA0QgoArg7ARQArgeAigkg");
	this.shape.setTransform(40.8194,32.82);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(this.hair_color).s().p("AjJArQgPidCOg9QCUgzBQCQQAoBHAKBRIgDgKIgMghIgDgFQgLgYgOgYQgQgbgOgQQgDAngRAkQgQAkgbAdQgxAzhFAPQgmAYgnARIgeALIgBAAQgkhDgHhPgAAvA3IgFAGQgjAkgqAeQA5gRAqgrQAxg0ALhIQgfA+guAyg");
	this.shape_1.setTransform(38.1783,18.9314);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvBhQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQAAAAABAAQAAAAABAAQAAAAABAAQATALAWABQAWADAVgIQABAAAAAAQABAAAAAAQABABAAAAQAAABABABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgQAGgTAAQgbAAgbgOgAAtA+IgDgBQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBABAAIATgNQgggrgYgwQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAQABgBAAABQABAAAAAAQABABAAABQAYAxAhArIACADIgZAQgAhMgKQgCgNANgCQAOgBABAOQACANgOABIgCAAQgLAAgBgMgAAzglQgBgNANgCQANgBACAOQABANgNABIgDABQgLAAgBgNgAhChNIACAAQABAAABAAQAAAAABABQAAAAAAAAQABABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBAAIgHABIAFgGgAAkhhQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBgBAAAAQABgBAAgBQAAAAAAAAQABgBAAAAIAmgHIAAAAIADAFIgCABIglAHg");
	this.shape_2.setTransform(49.5997,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(this.head_color).s().p("AAjDNQghgHgegSQg2gfgxhDQgGAAgGgDQgWgKgQgYIgDgEIAfgKQAngPAngWQBHgNAxgxQAcgcARgkQASgkAFgnQANAQAPAcQAOAYAKAaIgBAAIglAFQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAQAAAAAAABQABAAAAAAQABAAABAAIAAAAIAlgGIACAAQAGAQAFARIAAAEQARBbgYBbQgIAfgQAZQgVAfgYAGQgRAEgSAAQgQAAgQgDgAAmBWQgBABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAaAOAdABQASABARgFQABgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgVAGgXgDQgWgCgTgLIgBgBQgBAAAAAAQgBABAAAAQAAAAgBAAQAAABAAAAgABjg5QgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAWAyAfAsIgUAMQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIADABIABAAIAagPIgDgDQgfgsgWgzQgBAAAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgBAAgAANgYQgBADAAADQABAOANgBQAOgBgBgOQgBgHgEgDgACUgxIgGACIgBAGQABAOAOgBQANgBgBgOQAAgGgDgDgAAThPIAIAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgCAAQAvgwAhg+QgNBJgzAyQgqApg7AQQAsgdAjgjg");
	this.shape_3.setTransform(41.1861,33.7883);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(this.hair_color).s().p("AjJAnQgKieCQg4QCVguBMCSQAlBJAIBSIgDgLQgFgRgGgQIgCgFQgKgagOgXQgPgcgNgQQgFAngSAjQgRAkgcAcQgyAxhGANQgnAXgnAPIgfAKIgBABQgihFgEhPgAAvA7IgGAGQgkAjgrAdQA6gQArgpQAzgyANhIQghA9gvAwg");
	this.shape_4.setTransform(38.9675,19.274);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADBuQgcgBgagOQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQATALAWADQAWADAVgGQAAgBABAAQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgOAFgQAAIgFAAgAAqA+IgDgBQAAAAAAgBQgBgBABAAQAAgBAAAAQAAAAABgBIAUgMQgfgsgWgxQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAABABABQAWAyAfAsIADADIgaAPgAhNgNQAAgEABgCIAVgGQAEACABAIQABAOgOABIgCAAQgLAAgBgNgAAzgkIABgHIAGgBIARgDQADADAAAGQABANgNABIgCAAQgMAAgBgMgAhGhLIAGgGIACABQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgIAAgAAmhhQgBAAgBAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAlgGIABAAIACAFIgCABIglAGg");
	this.shape_5.setTransform(50.1951,33.3327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(this.head_color).s().p("AASDHQgegJgegVQgzgjgrhIQgGABgGgEQgVgMgOgZIgDgEIAggIQAogLAogTQBIgHA1gtQAfgZAUgjQAVgiAIgnQALARANAdQALAaAJAZIgBAAIgmADQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAIAAAAIAlgDIACAAQAFARAEARIAAAEQAIBbgfBaQgKAegTAXQgXAegYAEQgLACgLAAQgWAAgYgHgAAfBRQAAABAAAAQgBAAAAABQABAAAAABQAAAAABABQAYAQAdAEQASACARgEQABgBAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAQgVAFgWgGQgWgEgTgMIgBAAIgDABgABog4QAAAAgBAAQAAABAAAAQgBAAAAABQAAABAAAAQARA0AcAuIgVAKQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIACABIACABIAbgOIgDgCQgcgvgRg0QAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgCABgAAPgYQAAAOANAAQANAAAAgPIAAgEIgRAEIgEAAgACRgkQABANAMAAQAOAAAAgOIAAgDgAAbhVIAIAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBAAIgCAAQAzgtAmg7QgTBIg4AtQguAmg7ALQAugZAnggg");
	this.shape_6.setTransform(42.3165,36.1333);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(this.hair_color).s().p("AitC0QgchHAChQQADidCUgsQCZgiA/CYQAgBLAABTIgBgLQgEgSgFgRIgBgFQgJgagLgZQgNgcgLgRQgIAmgVAhQgUAjgfAZQg2AthHAHQgoAUgoAMIggAIgAAvBGIgGAFQgoAggtAZQA7gKAugmQA4guAThGQgmA5gzAtg");
	this.shape_7.setTransform(40.9432,19.9975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKBqQgcgDgZgRQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAABABAAQASAMAWAEQAWAFAVgFQABAAAAAAQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgMADgMAAIgLgBgAAgA+IgDgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAUgLQgbgugRgzQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAABABAAQARA1AcAuIACADIgbANgAhQgWIAGgCIAEAAIAQgDIAAAEQAAAOgNAAQgNAAAAgNgAAxgiIAbgFIAAAEQAAANgNAAQgNAAgBgMgAg8hTIgIgBIAGgFIADAAQAAABABAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAAgAAphhQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAAAABgBQAAAAABAAIAmgDIAAAAIACAFIgCABIglADg");
	this.shape_8.setTransform(51.875,35.9583);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f(this.head_color).s().p("AAMDEQgfgKgdgVQgygmgphJQgGABgFgEQgVgNgNgZIgCgEIAfgHQApgKApgSQBHgFA3grQAfgYAWgiQAVghAKgnQAKASANAdQAKAaAHAaIgmABQAAABgBAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABAAQABAAAAAAIABAAIAlgCIABAAQAFARADASIAAADQAGBcgjBZQgLAegTAWQgYAdgYADIgSACQgYAAgZgJgAAcBOQAAABAAABQgBAAAAABQAAAAABABQAAAAAAABQAYARAcAEQASADASgEQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQgWAEgWgGQgWgFgSgNIgBgBIgDABgABpg4QAAAAgBABQAAAAAAAAQgBABAAABQAAAAAAABQAQAzAaAvIgVAKQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIADABIABAAIAcgMIgDgDQgagvgQg1QAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIgCAAgAAagTIgJABQACAFAIAAQAKAAADgHIgDAAIgIAAgACkgdIgEABIgEABIgIACQADADAIABQALAAACgJgAAdhYIAHABQABABABAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgCgBQA1gqAng6QgVBHg4ArQgwAlg7AIQAvgXAngfg");
	this.shape_9.setTransform(42.8189,37.1533);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f(this.hair_color).s().p("AixCwQgZhIAFhPQAIieCVgmQCagdA6CaQAdBLgCBTIgBgLQgDgRgFgSIgBgFQgHgagLgaQgMgcgLgRQgJAlgWAiQgVAhggAYQg3AshHAEQgpATgpAKIgfAHgAAvBKIgHAFQgoAfguAXQA8gJAvgkQA5gsAVhGQgnA5g1Arg");
	this.shape_10.setTransform(41.6905,20.4019);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBpQgcgFgYgRQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQASANAVAFQAXAGAUgEQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgLACgJAAIgPgBgAAbA+IgCgCQAAAAgBgBQAAgBABAAQAAgBAAAAQABAAAAgBIAVgJQgagvgPg0QAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAPA1AbAwIACADIgbAMgAhFgNQgIAAgDgFIAKAAIACgBIAIAAIAEgBQgDAHgJAAIgBAAgAAzgZIAIgCIADAAIAEgCIAIgBQgCAJgLAAQgHAAgDgEgAg8hWIgIgBIAHgFIACAAQAAAAABABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAgAAqhhQgBAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAmgCIABAFIgCABIglACg");
	this.shape_11.setTransform(52.575,37.1271);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKBsQgcgDgagQQAAAAAAAAQgBgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQATAMAWAEQAUAEAWgFQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQgNADgMAAIgJAAgAAeA+IgCgBQgBgBAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAUgLQgcgugTgyQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABQAUA0AdAtIACADIgbAOgAhChRIgIAAIAHgFIACAAQABAAAAAAQABAAAAABQAAAAABABQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAgAAjhiQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIAmgDIABAAIACAFIgCAAIgmAFg");
	this.shape_12.setTransform(50.4,35.7688);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f(this.head_color).s().p("AAYDJQgfgIgegUQg0gigthGQgHAAgFgDQgVgMgPgYIgDgEIAfgJQAogNAogTQBHgJA0gvQAegaATgjQATgjAHgnQANARAOAcQAMAaAIAZIAAAAIgmAEQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAABAAIAAAAIAlgEIACgBQAGARAEARIAAAEQALBcgdBaQgJAegSAYQgWAegYAFQgNADgOAAQgUAAgVgGgAAiBTQgBAAAAABQAAABAAAAQAAABAAAAQAAAAABABQAZAQAdACQASACARgFQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgWAGgVgFQgXgDgSgMIgCgBIgCACgABng4QgBAAAAAAQgBABAAAAQAAABAAAAQgBABABAAQASAzAdAtIgUALQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIADABIABAAIAbgNIgDgDQgdgugTg0QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBABgAAYhTIAIAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgDAAQAygtAkg8QgRBHg2AwQgtAng6AMQAtgaAlghg");
	this.shape_13.setTransform(40.5383,36.02);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f(this.hair_color).s().p("AjIAgQgBidCTgwQCYgmBDCWQAhBKADBSIgCgLQgEgRgFgRIgCgFQgJgZgMgZQgOgcgMgRQgHAngTAiQgTAjgeAaQg1AvhHAJQgnAUgpANIgeAJIgCAAQgehGAAhQgAAvBCIgGAGQgnAhgsAaQA7gMAtgnQA2gwARhGQgkA7gyAtg");
	this.shape_14.setTransform(38.8992,20.441);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmBnQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAVAJAVAAQAXABAUgIQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQgBABAAAAQAAAAAAABQgBAAAAAAQgQAHgTACIgIAAQgXAAgXgKgAAyA9IgCgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIATgNQgkgpgZgvQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABABQAAAAABAAQAAABAAAAQAcAwAiApIAEADIgZARgAhFhGIADAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgIABIAFgGgAAchiQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAABgBIAkgJIAAAAIADAFIgCAAIgkAKIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_15.setTransform(43.45,32.5643);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f(this.head_color).s().p("AAzDRQghgEgggPQg5gag3g+QgGABgGgCQgXgIgSgWIgDgEIAdgNQAmgTAjgbQBGgSAsg2QAagfANglQAPgmAAgnQAPAPASAaQAPAXANAYIgBAAIgkAJQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIAkgKIABAAQAIAPAHARIABADQAZBagPBdQgFAggOAaQgRAhgXAIQgXAJgbAAIgRgBgAAqBaQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAABQAbAMAdgCQASgCAQgHQABAAABAAQAAgBAAAAQAAAAABgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgUAIgXgBQgXAAgUgJIgBAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAgBABgABZg6QAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAaAwAjAoIgSANQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIADABIABAAIAYgRIgDgDQgjgogbgxQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIgCAAgAAHhJIAIgBQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgCAAQAqg1AbhAQgGBJguA3QgmAug5AVQApghAfgng");
	this.shape_16.setTransform(35.1528,33.4672);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f(this.hair_color).s().p("AjJAzQgZicCKhGQCQg8BZCKQAtBEAPBRIgEgKQgGgRgIgQIgDgFQgMgXgQgXQgRgagPgOQgBAngOAlQgOAlgZAeQguA2hEAUQgkAbglASIgeANIgBABQgphBgMhOgAAwAuIgFAHQghAngoAgQA5gVAmguQAvg2AFhJQgaBAgrA0g");
	this.shape_17.setTransform(31.6077,20.8053);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f(this.head_color).s().p("AA8DSQghgCghgNQg6gWg7g7QgFABgHgCQgXgGgUgVIgDgEIAcgOQAlgWAigcQBEgXApg5QAXggAMgmQAMgmgCgnQAQAOATAYQARAWAOAYIAAAAIgkAMQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAjgMIACAAQAJAOAHARIABADQAfBYgJBeQgDAggMAaQgQAigWAKQgcAMghAAIgGAAgAAsBbQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAbALAdgEQASgCAQgIQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgUAKgXAAQgXACgUgJIAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgABSg7QAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQAdAtAmAmIgSAPQAAAAAAABQgBABAAAAQAAABAAAAQAAABABAAIACABIACAAIAXgUIgDgCQgmgmgegvIgCgBIgCAAgAAQgCIgBABIgCABIgDADQADABAFgBQAKgCABgIIAAgCgACFgpIADACIAGgBIAAAAQALgCAAgJgAAAhFIAIgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABQAog3AWhCQgBBKgrA5QgjAvg4AYQAogiAdgpg");
	this.shape_18.setTransform(33.1525,32.4537);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f(this.hair_color).s().p("AjHA6QgiiaCFhNQCNhGBhCEQAwBCAVBQIgFgKQgHgRgJgNIgDgFQgOgYgRgWQgTgYgQgOQACAngMAmQgMAlgXAgQgqA5hDAYQgiAcglAWIgcAOIgCABQgsg+gRhOgAAxAnIgEAGQgeApgnAjQA3gZAkgvQArg4ABhKQgWBCgoA2g");
	this.shape_19.setTransform(28.6697,20.9764);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AggBrQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAUAIAWgBQAXgBATgJQABgBAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAQgPAIgSADIgPABQgUAAgVgIgAA2A8IgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIASgOQgmgngdgtQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAeAuAmAnIADACIgYATgAhEAOIAEgDIACgBIABgCIANgHIAAADQgBAIgKACIgFABIgEgBgAA6gcIgEgBIAVgLQAAAJgLADIgBAAIgDAAIgCAAgAhJhAIACAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgIACIAFgHgAAWhiQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIAkgMIAAAAIADAFIgCABIgjALIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_20.setTransform(41,31.3188);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f(this.head_color).s().p("AA8DSQghgCghgNQg6gWg7g7QgFABgHgCQgXgGgUgVIgDgEIAcgOQAlgWAigcQBEgXApg5QAXggAMgmQAMgmgCgnQAQAOATAYQARAWAOAYIAAAAIgkAMQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAjgMIACAAQAJAOAHARIABADQAfBYgJBeQgDAggMAaQgQAigWAKQgcAMghAAIgGAAgAAsBbQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAbALAdgEQASgCAQgIQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgUAKgXAAQgXACgUgJIAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgABSg7QAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQAdAtAmAmIgSAPQAAAAAAABQgBABAAAAQAAABAAAAQAAABABAAIACABIACAAIAXgUIgDgCQgmgmgegvIgCgBIgCAAgAAFAAIABABQAEAEAIgCQAKgCABgIIAAgFgACWg2IgUAMQADACADABIAGgBIAAAAQALgCAAgJIgBgFgAAAhFIAIgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABQAog3AWhCQgBBKgrA5QgjAvg4AYQAogiAdgpg");
	this.shape_21.setTransform(33.1525,32.4537);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggBrQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAUAIAWgBQAXgBATgJQABgBAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAQgPAIgSADIgPABQgUAAgVgIgAA2A8IgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIASgOQgmgngdgtQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAeAuAmAnIADACIgYATgAhHAMIgBgCIAYgKIAAAEQgBAIgKACIgFABQgEAAgDgDgAA6gcQgDAAgDgCIAUgNIACgCIABAFQAAAJgLADIgBAAIgDAAIgCAAgAhJhAIACAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgIACIAFgHgAAWhiQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIAkgMIAAAAIADAFIgCABIgjALIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_22.setTransform(41,31.3188);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f(this.head_color).s().p("AA8DSQghgCghgNQg6gWg7g7QgFABgHgCQgXgGgUgVIgDgEIAcgOQAlgWAigcQBEgXApg5QAXggAMgmQAMgmgCgnQAQAOATAYQARAWAOAYIAAAAIgkAMQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAjgMIACAAQAJAOAHARIABADQAfBYgJBeQgDAggMAaQgQAigWAKQgcAMghAAIgGAAgAAsBbQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAbALAdgEQASgCAQgIQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgUAKgXAAQgXACgUgJIAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgABSg7QAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQAdAtAmAmIgSAPQAAAAAAABQgBABAAAAQAAABAAAAQAAABABAAIACABIACAAIAXgUIgDgCQgmgmgegvIgCgBIgCAAgAAIgNIgGAFIAAABQABAGADACQAEAEAIgCQAKgCABgIIgBgGQgBgFgCgDIgBAAgACLg7IgBABIgLAGIgBAAIAAACQADAKAHABIAGgBIAAAAQALgCAAgJIAAgFQgCgFgCgCgAAAhFIAIgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABQAog3AWhCQgBBKgrA5QgjAvg4AYQAogiAdgpg");
	this.shape_23.setTransform(33.1525,32.4537);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AggBrQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAUAIAWgBQAXgBATgJQABgBAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAQgPAIgSADIgPABQgUAAgVgIgAA2A8IgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIASgOQgmgngdgtQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAeAuAmAnIADACIgYATgAhHAMQgDgDgBgFIAAgCIAGgDIAQgIIAAAAQADACABAFIABAGQgBAIgKACIgFABQgEAAgDgDgAA6gcQgIgBgCgJIAAgCIAAgBIAMgGIABAAIAKgFQACACABAGIABAEQAAAJgLADIgBAAIgDAAIgCAAgAhJhAIACAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgIACIAFgHgAAWhiQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIAkgMIAAAAIADAFIgCABIgjALIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_24.setTransform(41,31.3188);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f(this.head_color).s().p("AA8DSQghgCghgNQg6gWg7g7QgFABgHgCQgXgGgUgVIgDgEIAcgOQAlgWAigcQBEgXApg5QAXggAMgmQAMgmgCgnQAQAOATAYQARAWAOAYIAAAAIgkAMQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIAjgMIACAAQAJAPAHAQIABADQAfBYgJBeQgDAggMAaQgQAigWAKQgcAMghAAIgGAAgAAsBbQAAABAAABQAAAAAAABQABAAAAABQAAAAABAAQAbALAdgEQASgCAQgIQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgUAKgXAAQgXACgUgJIAAAAQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgABSg7QAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQAdAtAmAmIgSAPQAAAAAAABQgBABAAAAQAAABAAAAQAAABABAAIACABIACAAIAXgUIgDgCQgmgmgegvIgCgBIgCAAgAAMgXQgMADACANQABAGADACQAEAEAIgCQAKgCABgIIgBgGQgCgLgJAAIgFABgACJhCQgOADADANQADAKAHABIAGgBIAAAAQALgCAAgJIAAgFQgDgLgJAAIgEABgAAAhFIAIgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgDABQAog3AWhCQgBBKgrA5QgjAvg4AYQAogiAdgpg");
	this.shape_25.setTransform(33.1525,32.4537);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f(this.hair_color).s().p("AjHA6QgiiaCFhNQCNhGBhCEQAwBCAVBQIgFgKQgHgQgJgOIgDgFQgOgYgRgWQgTgYgQgOQACAngMAmQgMAlgXAgQgqA5hDAYQgiAcglAWIgcAOIgCABQgsg+gRhOgAAxAnIgEAGQgeApgnAjQA3gZAkgvQArg4ABhKQgWBCgoA2g");
	this.shape_26.setTransform(28.6697,20.9764);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggBrQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAUAIAWgBQAXgBATgJQABgBAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAgBAAQgPAIgSADIgPABQgUAAgVgIgAA2A8IgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBIASgOQgmgngdgtQAAAAAAgBQgBgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAeAuAmAnIADACIgYATgAhHAMQgDgDgBgFQgDgNANgDQANgDADANIABAGQgBAIgKACIgFABQgEAAgDgDgAA6gcQgIgBgCgJQgDgNAOgEQAMgDADAOIABAEQAAAJgLADIgBAAIgDAAIgCAAgAhJhAIACAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgIACIAFgHgAAWhiQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAABgBIAkgMIAAAAIADAFIgCABIgjALIgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_27.setTransform(41,31.3188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_22},{t:this.shape_19},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_19},{t:this.shape_23}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

	// neck
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f(this.head_color).s().p("AhPAEQAFhCgUhYQgNg3gghfQACADAfALIAUAHIAmAPIAkAQIAiATIAEACQAKAGAEAGQAFAGADALIADAMIAKAzIAKArIARBUIA0E1g");
	this.shape_28.setTransform(39.825,66.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(14).to({x:39.725,y:67.075},0).wait(1).to({x:39.525,y:68.375},0).wait(1).to({x:39.425,y:68.925},0).wait(1).to({x:38.175,y:68.575},0).wait(1).to({x:35.075,y:67.675},0).wait(1).to({x:33.825,y:67.325},0).wait(29));

	// pony_tail
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f(this.hair_color).s().p("Ag/D4QALgigFgmIAAAVQgCAggTAWIgCAAIgCAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBQASgTABgfQACgagJgbQgGgRgMgUIgVgjIgQgYQgbgtgMgqQgRg5AKgyQAHglAYggQAaghAigPQAggaAqgKQAigJAtACQAvAIAbA2QAUAoAFA6QASC9hRB+QgkA4g3AmQg4AmhAAIQAcgWALgmgAg8CcQgFgZgMgdQgIgTgXgxQgUgogJgbQgNgngCghQgBgnAOgmQAPgmAbgcQgaAQgTAcQgSAcgGAdQgJAyAQA3QANAqAaArIAQAZIAWAjQALAVAHASIAEAOIAAAAgAgEjTQgOAUgBAdQAAAVAJAVQAJAUAPAOQARAOAQACQAVAEAOgNQASgQgGgqQgJhDgwgUQgIgEgHAAQgQAAgKARg");
	this.shape_29.setTransform(17.5535,42.8568);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f(this.hair_color).s().p("AhCD4QAMgjgFgoQABAMgBAMQgDAggTAVIgCABIgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQASgUACgeQACgagJgbQgGgRgMgUIgVgjIgPgZQgbgtgMgqQgQg5ALgzQAHgkAZggQAaghAjgOQAggaAqgKQAhgIAuACQAvAJAaA2QATApAFA6QAQC9hSB9QglA4g3AlQg5AmhAAHQAcgWAMgmgAg+CfQgFgagLgfQgIgTgWgxQgUgpgJgbQgNgngBghQgBgnAPgmQAPgmAcgbQgbAQgTAcQgSAbgHAdQgKAyAQA3QAMArAaArIAPAYIAWAkQAMAVAFARIAFASIAAAAgAgDjSQgOATAAAdQgBAWAJAUQAIAVAPAOQARAOAQADQAVAEAOgNQASgQgFgqQgIhEgwgUQgIgEgHAAQgQAAgLARg");
	this.shape_30.setTransform(18.3802,42.9466);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f(this.hair_color).s().p("AhLD2QAMgigEgnQABALgBAMQgDAggUAVIgDABIgCgBQAAAAAAgBQgBgBAAAAQABgBAAAAQAAgBABAAQASgUADgeQADgagJgbQgFgRgLgVIgUgjIgOgaQgagsgLgsQgPg6AMgxQAJglAZgeQAbghAjgOQAhgYApgJQAjgHAuADQAuALAYA2QATApADA7QALC9hVB6QgnA3g4AkQg5AkhAAFQAcgVANgmgAhECfQgEgbgMgfQgHgUgVgxQgSgqgJgbQgMgnAAghQAAgnAQgmQAQglAcgbQgaAQgUAbQgTAagHAeQgMAxAPA4QALArAYArIAPAZIAVAlQALAVAFARIAFATIAAAAgAAAjSQgOAUgCAdQgBAVAIAVQAJAUAOAPQAQAOAQADQAVAFAPgMQASgQgEgqQgHhEgugVQgJgFgIAAQgPAAgLAQg");
	this.shape_31.setTransform(20.4413,43.13);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f(this.hair_color).s().p("AhPD2QANgjgEgnQABAMgBALQgEAggUAVIgDABIgBgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQASgTAEgfQADgagIgbQgGgRgKgVIgUgkIgOgZQgZgtgLgrQgOg7AMgxQAJgkAagfQAbggAkgNQAhgZApgIQAjgHAuAEQAuALAYA3QASApACA6QAJC+hXB5QgmA3g5AjQg6AkhAAEQAdgUANgmgAhHCiQgDgdgMghIgchGQgSgogIgcQgLgoAAghQAAgnARglQAQglAdgbQgbAPgUAbQgUAbgHAdQgMAxAOA5QAKArAZArIAOAZIAUAlQALAVAFASIAFAWIAAAAgAAAjSQgNATgCAdQgCAWAIAVQAIAVAPAOQAQAPAQADQAVAFAOgMQATgQgEgpQgGhEgugXQgJgEgIAAQgPAAgMAPg");
	this.shape_32.setTransform(21.2153,43.0656);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f(this.hair_color).s().p("AhLD2QAMgjgEgnQgDgggOgoQgHgTgVgyQgTgpgIgbQgMgoAAghQAAgnAQglQAQglAcgcQgaAQgUAcQgTAagHAeQgMAwAPA4QAKAsAZArIAPAZIAVAkQALAVAFASQAIAcgCAbQgEAhgTAUIgDABIgCAAQAAgBAAAAQgBgBAAgBQABAAAAgBQAAAAABgBQASgTADgfQADgZgJgbQgFgSgLgUIgUgkIgPgZQgZgsgLgsQgPg6AMgyQAJgkAZgfQAbggAjgOQAhgYApgJQAjgIAuAEQAuAKAYA2QATAqADA6QALC9hVB6QgnA4g4AjQg5AlhBAFQAdgVANgmgAAAjSQgOATgCAdQgBAWAIAUQAIAVAPAOQAQAPAQADQAVAFAPgNQASgPgEgqQgHhEgugWQgJgEgIAAQgPAAgLAQg");
	this.shape_33.setTransform(19.141,43.3193);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f(this.hair_color).s().p("AhCD4QAMgjgFgoQgFgggOgnQgIgTgWgxQgUgpgJgbQgNgngBghQgBgnAPgmQAPgmAcgbQgbAQgTAcQgTAbgGAdQgKAyAQA3QAMArAaArIAPAYIAWAkQAMAVAFARQAKAcgCAcQgDAggTAVIgCABIgCAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQASgUACgeQACgagJgbQgGgRgMgUIgVgjIgPgZQgbgtgMgqQgQg5AKgzQAIgkAZggQAaghAjgOQAggaAqgKQAhgIAuACQAvAJAaA2QATApAFA6QAQC9hSB9QglA4g3AlQg5AmhAAHQAcgWAMgmgAgDjSQgOATAAAdQgBAWAIAUQAJAVAPAOQARAOAQADQAVAEAOgNQASgQgFgqQgIhEgwgUQgIgEgHAAQgQAAgLARg");
	this.shape_34.setTransform(13.714,43.4966);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f(this.hair_color).s().p("Ag/D4QALgigFgmQABALgBAKQgCAggTAWIgCAAIgCAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBQASgTABgfQACgagJgbQgGgRgMgUIgVgjIgQgYQgbgtgMgqQgRg5AKgyQAHglAYggQAaghAigPQAggaAqgKQAigJAtACQAvAIAbA2QAUAoAFA6QASC9hRB+QgkA4g3AmQg4AmhAAIQAcgWALgmgAg8CcQgFgZgMgdQgIgTgXgxQgUgogJgbQgNgngCghQgBgnAOgmQAPgmAbgcQgaAQgTAcQgSAcgGAdQgJAyAQA3QANAqAaArIAQAZIAWAjQALAVAHASIAEAOIAAAAgAgEjTQgOAUgBAdQAAAVAJAVQAJAUAPAOQARAOAQACQAVAEAOgNQASgQgGgqQgJhDgwgUQgIgEgHAAQgQAAgKARg");
	this.shape_35.setTransform(11.5535,43.6568);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f(this.hair_color).s().p("AhVD1QANgigDgoQgCgggNgoQgGgUgUgyQgSgpgHgcQgLgoABghQABgnARglQARglAdgaQgbAPgVAbQgUAagHAdQgNAxANA4QAJAsAYAsIAOAZIAUAlQAKAVAFASQAHAcgDAcQgEAggUAUIgDABIgCgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAgBAAAAQATgTAEgfQAEgZgIgcQgFgRgKgVIgTgkIgPgaQgYgsgJgtQgNg6ANgxQAJgkAbgfQAcgfAjgNQAigYApgHQAjgHAtAFQAvAMAWA3QASAqACA6QAFC+hZB4QgoA2g4AiQg7AjhBADQAegUAOgmgAACjRQgOATgDAdQgBAWAHAUQAHAVAPAPQAQAPAQAEQAUAFAPgMQATgPgDgqQgFhEgugYQgIgEgIAAQgPAAgMAPg");
	this.shape_36.setTransform(10.5535,42.8208);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f(this.hair_color).s().p("AibEpQAegSARglQAPgiAAgnQgBghgKgoQgFgUgRgzQgOgrgGgcQgIgoADgiQAEgmATgkQATgjAggZQgdANgWAZQgWAZgJAdQgQAvAJA5QAHAtAUAtIAMAaIASAmQAJAWADASQAGAdgFAbQgGAggWATIgCABIgCgCQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAUgRAGgfQAGgZgGgbQgEgSgJgWIgRglIgMgbQgVgugHgsQgJg7AQgxQAMgjAcgdQAegeAkgKQAkgVApgFQAkgEAtAIQAtAOATA5QAOAqgBA7QgHC9hhByQgrA0g6AeQg9Aeg/AAIgCAAgAAIjNQgPARgFAdQgDAWAHAVQAGAVANAQQAPAQAPAFQAVAGAPgLQAUgNAAgqQAAhFgtgaQgJgGgJAAQgOAAgMAOg");
	this.shape_37.setTransform(9.6703,41.8837);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f(this.hair_color).s().p("AizEiQAfgRATgjQASggACgoQACgggHgpIgShJQgLgsgEgcQgGgpAGghQAGgmAVgjQAWghAggXQgcALgZAYQgXAXgLAcQgTAvAFA6QAEAsASAuIAKAbQALAcAEAMQAHAWADATQAEAcgHAbQgIAfgXASIgDAAIgBgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAWgQAIgeQAGgZgEgcQgDgSgHgWIgOgmIgLgcQgSgvgEgtQgFg8ATgvQAOgiAfgbQAfgcAlgHQAlgUApgCQAkgBAsAKQAtASAPA5QAMAsgGA6QgTC9hoBrQgvAwg7AbQg3AWg2AAIgTAAgAARjJQgRARgGAcQgEAVAEAWQAFAWAMARQAOARAQAFQATAIAQgKQAVgMADgqQAEhEgrgdQgKgIgKAAQgMAAgMAMg");
	this.shape_38.setTransform(8.489,40.6483);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f(this.hair_color).s().p("AirElQAfgSASgjQARghABgoQgBAMgDALQgHAggWASQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAUgRAIgeQAGgZgFgcQgDgSgIgWIgPglIgMgbQgTgvgFgtQgHg7ASgwQANgjAegbQAegdAlgJQAkgUApgDQAkgDAtAKQAtAQARA5QANArgEA7QgOC9hlBuQguAyg7AbQg4Aag6AAIgNAAgAhoCdQAAgdgIgiQgEgVgPgzQgMgrgFgdQgHgoAEghQAFgnAVgjQAVgjAggXQgdAMgXAYQgXAYgKAdQgSAvAHA6QAFAsATAuIALAaIAQAnQAIAWADASQACAMAAALIAAAAgAALjLQgPARgGAdQgEAVAFAVQAGAWAMARQAPAQAPAFQAUAIAQgLQAUgNACgqQAChEgrgcQgKgHgKAAQgMAAgNANg");
	this.shape_39.setTransform(9.2524,41.1794);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f(this.hair_color).s().p("AifEoQAegSARglQAQghAAgnQAAghgJgpIgWhHQgOgrgFgcQgIgpADghQAEgmAUgkQAUgjAfgZQgcANgXAaQgWAYgKAdQgQAvAIA5QAHAsAUAuIAMAaIARAmQAJAXADASQAGAdgGAbQgHAfgVATQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgCgBQAAgBAAgBQgBAAAAgBQAAAAABgBQAAAAABgBQAUgRAGgeQAGgZgGgcQgEgSgIgVQgFgNgMgZIgMgbQgUgugGgtQgJg7ARgwQAMgkAdgcQAegdAkgKQAjgVAqgEQAjgEAuAIQAsAQATA4QAOArgCA6QgJC+hiBxQgsAyg6AeQg8Adg+AAIgEAAgAAJjNQgPASgFAcQgDAWAFAVQAHAVANARQAOAQAQAFQAUAGAQgKQAUgOAAgqQABhEgtgbQgJgGgJAAQgOAAgMANg");
	this.shape_40.setTransform(9.6244,41.7484);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f(this.hair_color).s().p("AhmDzQAOgiAAgnQgBghgLgoQgFgVgSgyQgPgqgGgdQgJgoADghQACgnATgkQATgkAegZQgcAOgWAZQgVAZgJAeQgPAvAKA5QAHAsAWAtIANAaIASAmQAIAWAFASQAGAdgFAbQgFAggVATIgDAAIgCAAQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAABAAQATgSAGgfQAEgZgGgbQgEgSgKgWIgRglIgMgaQgWgugIgtQgKg7AQgwQALgkAcgcQAdgfAkgLQAjgWApgFQAkgFAtAHQAtAOAUA4QAQArgBA6QgEC+hfBzQgqA0g6AfQg9AghAAAQAegSAQglgAAHjOQgPASgEAcQgDAWAHAVQAGAVAOAQQAPAQAQAEQAUAGAQgLQATgOgBgqQgBhEgtgaQgKgFgJAAQgNAAgMAOg");
	this.shape_41.setTransform(10.032,42.183);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f(this.hair_color).s().p("AhcD0QANgigBgoQgCgggMgoQgGgUgTgyQgQgqgHgcQgKgoABghQACgnASglQASgkAegaQgcAPgVAaQgVAZgIAeQgNAwALA5QAJArAWAtIANAZIAUAlQAJAWAFASQAHAdgEAbQgFAggUAUIgDAAIgCAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAUgSAEgfQAEgZgHgbQgFgSgKgVQgFgNgNgYIgNgZQgXgugJgsQgMg7AOgxQALgkAbgdQAcgfAkgNQAigWApgHQAjgGAuAGQAuANAVA3QARAqAAA7QACC9hbB2QgqA2g4AgQg8AihBACQAegUAPglgAAEjQQgOATgDAcQgDAWAIAVQAHAVAOAPQAPAQAQAEQAUAFAQgLQATgPgCgqQgDhEgugYQgJgGgJAAQgOAAgMAPg");
	this.shape_42.setTransform(10.2743,42.5435);
	this.shape_42._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(14).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(27).to({_off:false},0).wait(21));

	// left_hand
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f(this.head_color).s().p("Ag3BPIgYhaIBjgFIgChEIArApIATAzIgNA4IgsAVg");
	this.shape_43.setTransform(82.075,126.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(14).to({x:81.925,y:126.025},0).wait(1).to({x:81.625,y:125.425},0).wait(1).to({x:81.475,y:125.225},0).wait(1).to({x:80.075,y:126.125},0).wait(1).to({x:76.675,y:128.325},0).wait(1).to({x:75.275,y:129.225},0).wait(29));

	// right_hand
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f(this.head_color).s().p("AhJBEIgTg3IAOg0IAmgtIAFBDIBvgwIARBRIhdBFg");
	this.shape_44.setTransform(55.05,132.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f(this.head_color).s().p("AhJBEIgTg3IAPg1IAmgsIAFBDIBvgvIAQBRIhdBEg");
	this.shape_45.setTransform(52.925,132);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f(this.head_color).s().p("AhLBCIgRg4IAPgzIAogsIADBEIBwgtIAPBSIhfBCg");
	this.shape_46.setTransform(49.525,137.475);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f(this.head_color).s().p("AhLBCIgRg4IAQg0IAogrIACBEIBxgsIAOBSIhfBBg");
	this.shape_47.setTransform(48.175,139.475);
	this.shape_47._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_47}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(14).to({x:54.85,y:131.675},0).wait(1).to({x:54.45,y:130.375},0).wait(1).to({x:54.25,y:129.825},0).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(19).to({_off:false},0).wait(29));

	// clipboard
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f(this.clipboard_color).s().p("Aitj5IFLg4IAQIoIlFA7g");
	this.shape_48.setTransform(67.35,125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f(this.clipboard_color).s().p("Aitj5IFMg4IAPIoIlFA7g");
	this.shape_49.setTransform(67.3,124.75);
	this.shape_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(13).to({_off:true},1).wait(2).to({_off:false,x:67.15,y:123.8},0).wait(1).to({x:65.7,y:124.25},0).wait(1).to({x:62,y:125.35},0).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(14).to({_off:false},0).wait(1).to({x:67.2,y:124.05},0).to({_off:true},1).wait(3).to({_off:false,x:60.55,y:125.8},0).wait(29));

	// right_lower_arm
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f(this.head_color).s().p("Aj0BYQgGgHACgJQAZhlAzgcQAagOAVAGIF3gbIAAA1InfCDIgFABQgFAAgFgFg");
	this.shape_50.setTransform(29.7265,139.7097);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f(this.head_color).s().p("AjxBgQgHgGACgJQAVhnAzgdQAagPAUAFIF2gmIACA1InaCSIgFAAQgGAAgEgEg");
	this.shape_51.setTransform(30.4859,139.7868);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f(this.head_color).s().p("AjqB0QgIgGABgJQAPhoAvgiQAYgQAWADIFxhEIAGA0InNC4IgGABQgFAAgEgDg");
	this.shape_52.setTransform(32.2191,140.0931);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f(this.head_color).s().p("AjnB7QgHgFABgJQAKhpAvgjQAXgRAWADIFuhQIAIA0InGDGIgHABQgFAAgEgDg");
	this.shape_53.setTransform(32.7941,140.0431);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f(this.head_color).s().p("AjvBoQgHgHACgJQAShmAyggQAZgQAUAFIF1gyIADA1InVCgIgFABQgFAAgFgDg");
	this.shape_54.setTransform(29.6528,141);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f(this.head_color).s().p("Aj/BDQgFgIADgIQAohhA2gUQAcgLATAJIF3AbIgHAzInsA/IgCAAQgIAAgFgGg");
	this.shape_55.setTransform(21.4569,141.3982);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f(this.head_color).s().p("AkDA9QgFgIAEgIQAvhdA5gQQAcgJATALIFzA5IgLAzInwAXIgBAAQgIAAgFgIg");
	this.shape_56.setTransform(18.0559,140.5162);
	this.shape_56._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_56}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(13).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(19).to({_off:false},0).wait(29));

	// right_upper_arm
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhBAwQgBAAgBgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQANgjAggXQAegXAmgCQgXgFgXAFQgjAIgWAZIgCABIgCgBQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBABAAQAXgbAlgIQAjgHAgAOQABAAAAABQABAAAAABQABAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBgBIgPgFIABABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQgkABgeAXQgeAVgMAiQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
	this.shape_57.setTransform(11.325,136.6192);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0000FF").s().p("AhtF/QgQgMAAgUQAChqArkCQAjjYARhHQAIgeAvgiQAYgRAXgKIgDCeIA3CXIhREqIgtB7QgLAcgbALIgkANIgLABQgNAAgLgJgAAMDVQgkACggAXQggAYgNAjQAAABAAAAQAAABAAABQABAAAAAAQABABAAAAIABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAMgiAfgWQAegXAjgBQABAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBIAAgBIAOAFQABABABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgggOgkAHQglAIgXAbQAAAAAAABQgBABAAAAQAAABABAAQAAAAAAABIADABIACgBQAVgZAjgIQANgDAMAAQAKAAALADg");
	this.shape_58.setTransform(14.6742,111.3214);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhAAxQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAMgkAfgXQAegXAjgEQgVgEgWAGQgjAIgVAZIgCABIgCAAQgBgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAXgbAlgJQAkgIAgAOQAAAAABAAQAAABAAAAQABABAAAAQgBABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgPgFIABABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgkADgdAXQgeAWgMAiQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_59.setTransform(11.9268,137.3394);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000FF").s().p("AhqGBQgQgNAAgUQABhqAmkCQAgjZAQhHQAIgfAvghQAXgSAXgKIAACeIA5CWIhOEsIgrB7QgJAcgcALIgkAOQgGABgFAAQgNAAgLgIgAAKDUQgiADgfAXQgfAYgMAlQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAAABQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAMgjAegXQAegXAjgCQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAIgBgCIAPAFQABABAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBABAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgggOgkAJQglAIgXAbQAAABAAAAQgBABAAAAQAAABABAAQAAABABAAIACABIACgCQAVgYAjgIQAOgEANAAQAIAAAIACg");
	this.shape_60.setTransform(15.125,111.984);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag/AyQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAKglAfgYQAfgYAkgEQgWgEgYAHQgiAJgVAaIgCABIgCgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAXgbAkgKQAjgKAhANQABAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgIgDgIgCIABACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQgkAEgcAYQgdAXgLAjQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_61.setTransform(13.4518,138.9326);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0000FF").s().p("AhhGEQgQgMgBgUQgDhpAdkEQAYjaAOhIQAGgeAugkQAXgSAWgMIAGCeIA+CUIhCEuIgoB9QgJAdgaAMIgkAPQgGACgGAAQgMAAgLgIgAAQDTQgkAEgfAZQgfAZgKAlQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQALgiAdgYQAdgYAjgEQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIgBgCQAIACAIADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBQghgNgjAKQgkAKgXAcQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIACAAIACAAQAVgbAigJQAQgEAOAAIAQABg");
	this.shape_62.setTransform(16.1609,113.4779);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag+AzQgBAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABgBQAKgkAfgZQAdgZAlgEQgXgEgXAHQgiAKgUAaIgCABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgBABAAQAVgcAlgLQAjgKAhAMQAAABABAAQAAABAAAAQABABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgQgEIABABQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgjADgcAZQgeAXgJAjQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAg");
	this.shape_63.setTransform(14.0458,139.5727);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0000FF").s().p("AhdGFQgQgMgBgTQgFhqAZkEQAVjbANhHQAFgfAvgkQAWgTAVgMIAJCeIBACTIg+EvIgmB+QgIAcgbANIgiAPQgHADgHAAQgLAAgLgIgAARDTQgkAEgeAZQgeAagLAkQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAIABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAKgjAdgYQAdgZAjgDQAAgBABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgBIAPAEQABAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAgBgBQghgMgjAKQgkALgWAcQAAAAAAABQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAgBQABAAAAAAIACgBQAUgaAjgKQAQgEAOAAIAPABg");
	this.shape_64.setTransform(16.5651,114.0674);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhAAxQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAMgkAfgYQAdgYAlgDQgWgEgXAGQgiAJgVAZIgCABIgDgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAWgbAlgJQAjgJAhAOQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgQgFIABACQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAgBABQgjACgdAYQgeAWgLAjQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_65.setTransform(11.025,138.945);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0000FF").s().p("AhnGCQgPgMgBgUQAAhqAjkDQAdjZAPhHQAHgfAugjQAYgRAWgLIACCeIA7CWIhJEsIgqB8QgJAdgcALIgjAOQgGABgGAAQgMAAgMgIgAANDUQgkADgeAYQgfAZgMAkQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIABABQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBABAAQALgjAegXQAegYAigCQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAIgBgCIAQAFQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBAAQghgOgjAJQglAJgWAbQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAIADABIACgBQAVgZAigJQAPgEAOAAQAIAAAIACg");
	this.shape_66.setTransform(14.0246,113.5364);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhEAtQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAPgjAigUQAggVAlAAQgWgGgZAEQgiAFgXAXIgCABIgDgBQAAAAAAAAQgBgBABAAQAAgBAAAAQAAgBABgBQAYgZAlgFQAlgGAfARQABABAAAAQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBgBgBAAIgOgGIAAABQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAQgkgBgfAVQggATgOAhQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_67.setTransform(3.5107,136.9578);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0000FF").s().p("Ah+F3QgPgNACgUQAJhpA8j/QAxjVAVhGQAKgeAygeQAagPAWgJIgMCeIAsCaIhlEkIg0B4QgNAbgdAJIgkAKIgIABQgPAAgMgLgAg/DqQghAVgPAjQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIABAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAOghAggUQAggVAkABQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIgBgBIAPAGQAAAAABABQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQgBAAgBgBQgegRglAGQglAFgZAZQAAABgBABQAAAAAAABQAAAAAAABQAAAAABAAIACABIACgBQAYgXAjgFQAYgEAVAGIgCAAQgjAAggAVg");
	this.shape_68.setTransform(7.6682,112.061);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhFAsQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAQgiAjgTQAggUAlACQgVgHgZADQgiAEgZAWIgCABIgCgBQAAgBAAAAQgBAAAAgBQAAAAABgBQAAgBAAAAQAbgYAkgEQAlgEAfARQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgPgHIABABQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQgjgCggATQghASgQAhQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_69.setTransform(0.4656,136.0701);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0000FF").s().p("AiHFyQgOgOACgUQANhpBGj8QA5jTAYhFQAKgdA0gdQAagOAXgIIgSCdIAmCcIhwEgIg5B1QgOAbgdAIIglAJIgGABQgQAAgMgMgAhCDnQgjAUgQAiQAAABAAAAQAAABAAABQAAAAABABQAAAAABABIAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQAQghAhgTQAhgTAiACQABAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBIgBgBIAPAHQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBgBgBQAAAAAAgBQAAAAgBgBQgegRglAEQglAEgbAYQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABIACABIACgBQAZgWAjgEQAZgDAUAHIgGAAQghAAgeASg");
	this.shape_70.setTransform(5.0566,111.4757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57}]}).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).wait(1));

	// torso
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F1F2F2").s().p("ACRCxgAhDg7IgBgBIgXgDIgHgBIhOgOIgCAAIBnhYIANAWIDPFBgABbiDIAAgDIgHgqIBfBFIgXALIgTAIIABAZIAAAGIABAkIAGDGg");
	this.shape_71.setTransform(40.075,79.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAICpAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAABABAAQAAAAAAABQABAAgBABQAAAAAAABIgCAFIhiDuQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_72.setTransform(46.581,118.9375);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E6E7E8").s().p("AiJilIDVDsIgGjGIBECaIgeDogABMBHgAiDj6IANgIIB2AEIASAGIACAHIACAEIA2E0g");
	this.shape_73.setTransform(47,89.875);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBOANIhQCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAICpAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIipAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAlhAIA5BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIAAAEg");
	this.shape_74.setTransform(47.875,129.3402);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F1F2F2").s().p("ACRCxgAhDg7IgBgBIgXgDIgHgBIhOgOIgCAAIBnhYIANAWIDPFBgABbiDIAAgDIgHgqIBfBFIgXAKIgTAJIABAZIAAAHIABAkIAGDFg");
	this.shape_75.setTransform(39.975,79.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAICpAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAABAAAAIgDABIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAAAABABQAAAAAAABQABAAgBABQAAAAAAABIgCAFIhiDuQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_76.setTransform(46.481,119.4875);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E6E7E8").s().p("AiJilIDVDsIgGjFIBECZIgeDogABMBHgAiDj6IANgIIB2AEIASAGIADAHIABAEIA2E0g");
	this.shape_77.setTransform(46.9,90.425);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBOANIhQCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAIADgBQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAICpAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAIipAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAkhAIA6BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIAAAEg");
	this.shape_78.setTransform(47.775,129.8902);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F1F2F2").s().p("ACRCxgAhDg6IgBgCIgXgEIgHgBIhOgMIgCgBIBnhYIANAVIDPFCgABbiCIAAgEIgHgqIBfBFIgXALIgTAIIABAYIAAAHIABAkIAGDGg");
	this.shape_79.setTransform(39.775,81.125);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAICpAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAABAAAAIgDABIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAAAABABQAAAAAAABQABAAgBABQAAABAAAAIgCAFIhiDuQAAABAAAAQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_80.setTransform(46.281,120.7875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E6E7E8").s().p("AiJikIDVDrIgGjGIBECaIgeDogABMBHgAiDj7IANgHIB2AEIARAGIAEAHIABAFIA2Ezg");
	this.shape_81.setTransform(46.7,91.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBOANIhQCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAIADgBQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAICpAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIipAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAkhAIA6BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIAAAEg");
	this.shape_82.setTransform(47.575,131.1902);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F1F2F2").s().p("ACRCxgAhDg6IgBgCIgXgEIgGgBIhPgMIgCgBIBnhYIAOAVIDOFCgABciCIgBgEIgHgqIBfBFIgXALIgTAIIABAYIAAAHIABAkIAGDGg");
	this.shape_83.setTransform(39.675,81.675);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAICpAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgDABIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAABABAAQAAAAAAABQABAAgBABQAAABAAAAIgCAFIhiDuQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_84.setTransform(46.181,121.3375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E6E7E8").s().p("AiJikIDVDrIgGjGIBECaIgeDogABMBHgAiDj7IANgHIB2AEIARAGIAEAHIACAFIA1Ezg");
	this.shape_85.setTransform(46.6,92.275);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBPANIhRCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAIADgBQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAICpAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIipAAQAAAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAkhAIA6BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIABAEg");
	this.shape_86.setTransform(47.475,131.7402);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F1F2F2").s().p("ACRCxgAhDg7IgBgBIgXgEIgHgBIhOgMIgCgBIBnhYIANAVIDPFCgABciCIgBgEIgHgqIBfBFIgXALIgTAIIABAYIAAAHIABAkIAGDGg");
	this.shape_87.setTransform(38.425,81.325);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAICpAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgDABIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAABABAAQAAAAAAABQABAAgBABQAAAAAAABIgCAFIhiDuQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_88.setTransform(44.931,120.9875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBOANIhQCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAIADgBQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABABAAQAAABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAICpAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIipAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAkhAIA6BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIABAEg");
	this.shape_89.setTransform(46.225,131.3902);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F1F2F2").s().p("ACRCxgAhDg7IgBgBIgXgEIgGgBIhPgMIgCgBIBnhYIAOAVIDOFCgABciCIgBgEIgHgqIBfBFIgXALIgTAIIABAYIAAAHIABAkIAGDGg");
	this.shape_90.setTransform(35.325,80.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E6E7E8").s().p("AiIilIDUDsIgGjGIBDCaIgdDogABMBHgAiDj7IANgHIB2AEIASAGIACAHIACAFIA2Ezg");
	this.shape_91.setTransform(42.25,91.025);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0000FF").s().p("AjtJhQgugOgkgVIgbgRIB5kKIhprUQgGgpAQglQARglAigVIAPgJIBPANIhRCBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAICNAtIhfA9IgBACIABADIEiDZIABAAIADgBQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBgBAAIkejXIBhg9QAAgBAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIiQguIBQh/IAXAEIABABID0GpIAejoIhEibIgBgkIBmA/IACAEIgnBGIgBADIACABIBjAxIhkDxQAAAAAAABQAAABAAAAQABABAAAAQABAAAAABIABAAQABAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAIBijuIABJwIB1ENQgsAghQAbQgOAEgiijIggilIgSCyQgUCygLACQhMAMhEAAQhkAAhXgbgAiQFjQAAABAAAAQABABAAAAQAAABABAAQABAAAAAAICpAAQAAAAABAAQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBAAAAAAIipAAQAAAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABgACDmkIAlhAIA5BvgAA8o0IgBgZIATgIIArAZIAkBEgAAMp7IABAAIABAEg");
	this.shape_92.setTransform(43.125,130.4902);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F1F2F2").s().p("ACRCxgAhDg7IgBgBIgXgDIgGgCIhPgMIgCgBIBnhYIAOAWIDOFBgABciCIgBgEIgHgqIBfBFIgXALIgTAIIABAZIAAAGIABAkIAGDGg");
	this.shape_93.setTransform(34.075,80.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AiAHOQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAICpAAQAAAAABAAQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgBAAAAAAgABfAAIkijZIgBgDIABgCIBfg9IiNgtQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIBQiBIAHABIhQB/ICQAuQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIhhA9IEeDXQABAAAAABQABAAAAABQAAAAgBABQAAAAAAABIgDABIgBAAgACMgSQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIBkjxIhjgxIgCgBIABgDIAnhGIABgCIgDgCIhmg/IAAgHIBhA8IANAJQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABIgFAHIgkBAIBeAvIAFACQAAABABAAQAAAAAAABQABAAgBABQAAAAAAABIgCAFIhiDuQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_94.setTransform(40.581,119.7375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E6E7E8").s().p("AiIilIDUDsIgGjGIBDCaIgdDogABMBHgAiDj6IANgIIB2AEIASAGIACAHIADAFIA1Ezg");
	this.shape_95.setTransform(41,90.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_86},{t:this.shape_85,p:{x:46.6,y:92.275}},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_89},{t:this.shape_85,p:{x:45.35,y:91.925}},{t:this.shape_88,p:{x:44.931,y:120.9875}},{t:this.shape_87}]},1).to({state:[{t:this.shape_92,p:{x:43.125,y:130.4902}},{t:this.shape_91},{t:this.shape_88,p:{x:41.831,y:120.0875}},{t:this.shape_90}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{x:41.875,y:130.1402}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).wait(1));

	// shirt
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E6E7E8").s().p("AidiXIDwgVIBLEiIkNA3g");
	this.shape_96.setTransform(58.95,171.325);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E6E7E8").s().p("AidiXIDvgVIBNEiIkOA3g");
	this.shape_97.setTransform(58.65,173.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E6E7E8").s().p("AieiXIDwgVIBNEiIkOA3g");
	this.shape_98.setTransform(58.55,173.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96}]}).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(14).to({x:58.85,y:171.875},0).to({_off:true},1).wait(3).to({_off:false},0).wait(1).to({x:58.95,y:171.325},0).wait(29));

	// left_upper_arm
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0000FF").s().p("AgHFAQgtgdgNg2Ig6j9QgiiTgJgeQgOguAVgpQAVgqAsgLIATgGIAaAOQASARAmBLQAUAlAPAiIB+FLQAOAzgZAzQgZA0guAMQgQAFgPAAQghAAgdgUg");
	this.shape_99.setTransform(66.5963,105.4644);

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(14).to({x:66.4963,y:106.0144},0).wait(1).to({x:66.2963,y:107.3144},0).wait(1).to({x:66.1963,y:107.8644},0).wait(1).to({x:64.9463,y:107.5144},0).wait(1).to({x:61.8463,y:106.6144},0).wait(1).to({x:60.5963,y:106.2644},0).wait(29));

	// legs
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgQAIQgegGgYgKQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAeANAnAGQAnAFAcgFQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAABQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgNACgSAAQgbAAgcgGg");
	this.shape_100.setTransform(30.5643,296.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AEdSYQgCg7gUiJQgpkRhamBQgDgyAFiWQADhGgYhAQguh0gbhXQgxicggjIIhwKuIhvQsIhugEIACxCIgUuEIAJhuIABAAIAFgfIAchpIAOgjIABAAIADgHIAAgCIA7hVIF4AIIApBXQArBoANBVIABABIBxOHIBOSLQgOAKgVAHQgRAFgPAAQgWAAgTgLgAlQB+QgBABAAAAQAAABABAAQAAABAAAAQABAAAAABQAYALAeAGQAdAGAbAAQASAAANgDQAAAAABAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgcAGgngGQgogFgegOIgCgBQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAg");
	this.shape_101.setTransform(57.075,282.7311);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgQAIQgegGgYgKQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAeANAnAGQAnAFAcgFQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgNACgSAAQgbAAgcgGg");
	this.shape_102.setTransform(30.5643,296.9625);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AEdSUQgCg7gUiIQgpkQhamAQgDgyAFiWQADhFgYhAQguhzgbhXQgxicggjHIhwKsIhvQnIhugDIACw/IgUuBIAJhtIABAAIAFgfIAchpIAOgjIABAAIADgIIA7hVIF4AIIApBXQArBnANBVIABABIBxOEIBOSHQgOAKgVAHQgRAFgPAAQgWAAgTgLgAlQB+QgBAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAYALAeAGQAdAGAbAAQASAAANgCQAAAAABgBQABAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgcAFgngFQgogGgegOIgBgBQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABg");
	this.shape_103.setTransform(57.075,283.177);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgQAJQgegHgYgJQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAeANAnAGQAnAFAcgFQAAAAABAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgNACgSAAQgbAAgcgFg");
	this.shape_104.setTransform(30.6643,297.9357);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AEdSKQgCg7gUiHQgpkNhal9QgDgyAFiUQADhFgYg/QguhygbhWQgxibggjFIhwKmIhvQfIhugEIACw2IgUt5IAJhsIABgBIAFgeIAchoIAOgiIABgBIACgFIAAgBIABAAIAAgCIA7hUIF4AIIApBWQArBmANBVIABAAIBxN9IBOR9QgOAKgVAHQgRAFgPAAQgWAAgTgLgAlQB8QAAABgBAAQAAABABAAQAAABAAAAQABABAAAAQAYALAeAGQAdAGAbAAQASAAANgCQAAgBABAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgcAFgngGQgogFgegOIgCgBQAAAAAAABQgBAAAAAAQAAAAgBAAQAAABAAAAg");
	this.shape_105.setTransform(57.175,284.2811);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgQAJQgegHgYgJQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAeANAnAGQAnAFAcgFQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgNACgSAAQgbAAgcgFg");
	this.shape_106.setTransform(30.5643,298.1857);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AEdSGQgCg7gUiGQgpkNhal7QgDgyAFiTQADhFgYg/QguhygbhWQgxiaggjFIhwKkIhvQbIhugDIACwyIgUt2IAJhsIABgBIAFgdIAchoIAOgjIABAAIADgHIAAgBIA7hUIF4AIIApBVQArBnANBUIABAAIBxN5IBOR6QgOAKgVAHQgRAFgPAAQgWAAgTgLgAlQB8QgBAAAAABQAAAAABABQAAAAAAABQABAAAAABQAYAKAeAHQAdAFAbAAQASAAANgCQAAAAABgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBAAAAAAQgcAFgngFQgogGgegOIgCAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABg");
	this.shape_107.setTransform(57.075,284.577);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgQAIQgegGgXgKQgBAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAfANAmAFQAnAGAcgFQABAAAAAAQABAAAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgMACgTAAQgbAAgcgGg");
	this.shape_108.setTransform(29.9482,297.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AEiSKQgCg7gViGQgqkOhcl9QgDgxAEiUQAChFgYhAQgvhygchWQgxibgijFIhsKmIhoQfIhvgEIgDw1Igat6IAJhsIABgBIAEgdIAchpQAIgVAGgNIABgBIADgGIAAgCIA6hUIF4AIIAqBWQArBmAOBVIABAAIB2N9IBVR9QgPALgVAGQgRAFgPAAQgWAAgTgLgAlRB9QAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAXALAeAGQAdAGAbAAQATAAAMgCQABgBABAAQAAAAAAgBQABAAAAgBQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgcAFgngGQgngFgfgOIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBABg");
	this.shape_109.setTransform(56.525,284.1811);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgQAIQgegGgYgKQAAAAgBAAQAAgBAAAAQgBgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAQAeANAnAGQAnAFAcgFQABAAAAAAQABAAAAAAQABAAAAABQAAABAAAAQABABAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgMACgTAAQgbAAgcgGg");
	this.shape_110.setTransform(28.4232,296.875);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AEwSUQgDg7gXiIQgtkQhimAQgEgyACiVQABhGgZhAQgwhzgdhXQg0icgkjHIhjKsIhZQoIhvgEIgTw/IgmuBIAIhsIAAgBIAFgfIAahoQAHgXAGgNIABAAIACgFIAAgBIABgCIA5hVIF4AIIArBXQAtBnAPBVIABABICCOEIBmSHQgPAKgVAHQgRAFgPAAQgWAAgTgLgAlRB+QAAAAgBABQAAAAABABQAAAAAAABQABAAAAAAQAYALAeAGQAdAGAbAAQATAAAMgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgcAFgngFQgogGgegOIgCAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAABg");
	this.shape_111.setTransform(55.025,283.0811);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgQAIQgegGgYgKQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAfANAmAGQAnAFAcgFQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgMACgSAAQgbAAgdgGg");
	this.shape_112.setTransform(27.9393,296.575);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AE2SYQgEg7gXiJQgvkRhkmBQgEgyABiWQAAhGgZhAQgxh0gdhXQg1icgljIIhfKuIhTQsIhvgEIgZxCIgruEIAGhuIABAAIAEgfIAZhpQAIgWAGgNIABAAIACgGIAAgBIABgCIA4hVIF4AIIAsBXQAtBoAQBVIAAABICIOHIBsSLQgOAKgVAHQgRAFgPAAQgWAAgTgLgAlSB+QAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQAYALAeAGQAdAGAcAAQASAAAMgDQAAAAABAAQABgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgcAGgngGQgogFgfgOIgBgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAg");
	this.shape_113.setTransform(54.575,282.7311);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100}]}).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).wait(1));

	// right_foot
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhoBXIgYgBQgKgUAqggIBRg0QATgNAOgQIALgNIgCgaIBlAEIADBnQhIAyhkAMQgcAEgcAAIgHAAg");
	this.shape_114.setTransform(17.3615,406.7528);

	this.timeline.addTween(cjs.Tween.get(this.shape_114).wait(48));

	// left_foot
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AiAAoIgKhmIBkgRIABAaIANAMQAQAOAUAKQBNAjAKAGQAtAbgGAUQgkAJgyAAIgFAAQhjAAhMgog");
	this.shape_115.setTransform(99.766,405.0512);

	this.timeline.addTween(cjs.Tween.get(this.shape_115).wait(48));

	// shadow
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F2F2F2").s().p("Am7BNQi3ggAAgtQAAgsC3ggQC4ggEDAAQEEAAC4AgQC3AgAAAsQAAAti3AgQi4AgkEAAQkDAAi4ggg");
	this.shape_116.setTransform(62.875,412.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_116).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,0,135.29999999999998,423.6);


// stage content:
(lib.character_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Broken
	this.instance = new lib.character_fbf("synched",0);
	this.instance.setTransform(266.05,260.95,1,1,0,0,0,62.8,211.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(443.5,299.2,-114.60000000000002,173.60000000000002);
// library properties:
lib.properties = {
	id: 'A5AC977353C2E84DB8A2DF89C5A89945',
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A5AC977353C2E84DB8A2DF89C5A89945'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;