(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,671,200);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,575);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,507,511);


(lib.C02_3 = function() {
	this.initialize(img.C02_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,841,214);


(lib.C03 = function() {
	this.initialize(img.C03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,114);


(lib.fondoC01 = function() {
	this.initialize(img.fondoC01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2134,1330);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.C03();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,190.6,54.7), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMCYQgIgFgEgJQgCgEAAgGIAAjiIAAgFQgBgBgFAAIhCAAQgPAAgHgKQgKgNAHgNQAHgOAPAAIDMAAQAKAAAGAHQAHAHABAKQAAAKgGAHQgGAIgKAAIhJABQgFAAAAAFIAADjQAAAXgXAEIgEAAQgGAAgGgDg");
	this.shape.setTransform(121.4544,57.9944,0.4028,0.4035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXCaQgVAAgGgUIAAkEQAAgVAUgFIAGgBICxAAQAJAAAHAGQAIAHABALQAAAKgHAHQgHAHgLAAIiQAAQgFAAgBABQgBAAAAAFIAABGQAAAFAGAAIB9AAQANAAAHAKQAIAJgEALQgCAHgHAFQgGAEgHAAIh/AAQgEAAgBABQgBABAAAEIAABIIABAFIAFABICRAAQAVAAAFASQADALgHAJQgHAKgLAAg");
	this.shape_1.setTransform(109.9835,57.9465,0.4028,0.4035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyCUQhXgfgRhYQgKgzAXguQAWguAwgZQAkgSAoABQA4ADApAlIADACIABgEQAEgTATgCQALgCAJAIQAJAIAAAKIgBBGQAAAKgHAIQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgdgbgnAAQgkAAgdAYQgdAYgHAkQgIApAXAkQAYAkAqAHQBIANAvgxQANgMAPAEQAOAEAEAPQAEAOgLALQgXAZgeAOQgcANgoADIgOABQgdAAgXgJg");
	this.shape_2.setTransform(49.9019,58.085,0.4028,0.4035);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBvIgWgaIgDgEIgBAEQgBAKgHAIQgIAHgMAAQgKgBgHgHQgIgIAAgKIABhDQAAgMAIgHQAIgHALAAIBEAAQAJAAAHAFQAHAFACAIQACAJgDAIQgDAIgIAFIgLADIgGABIALAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgXgdQgYgcgkgIQghgHgfAOQggAPgSAeQgGAMgMACQgMACgKgIQgHgGgCgKQgBgJAFgJQAQgcAZgTQAkgcAsgFQA+gHAxAmQAzAlALA+QALA7ggA1QgfA0g6AQQgbAIgaAAQg+AAg0gxg");
	this.shape_3.setTransform(64.4639,57.9641,0.4028,0.4035);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJCYQgLgHgBgOIgBj/QAAgRAMgJQAGgEANgBQASAAAJAPIBcCRIADgEIBbiOQAIgNAQgBQAQgCAKALQAHAHAAAMIAAEAQAAALgHAIQgIAIgMAAQgLAAgHgIQgIgHAAgLIAAi3IgBgBIhKBuIgHAIQgHAIgJAAQgKgBgHgHIgFgHIhKhuIgBABIAAC0QAAAUgQAGQgGACgFAAQgHAAgGgEg");
	this.shape_4.setTransform(80.3323,57.9444,0.4028,0.4035);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB6CcQgKgBgHgIQgHgIgBgKIAAi2IgBgBIhKBvQgKAQgPgCQgKgBgIgMIhIhsIgEgDIAAC1QAAAMgHAIQgIAIgMAAQgLgBgHgHQgHgHgBgLIAAkBQAAgMAIgIQAIgIANAAQAUgBALASIBaCPIBeiSQAKgQAWACQAKABAHAHQAHAHABAKIgBEJQgCAJgIAHQgHAFgIAAIgDAAg");
	this.shape_5.setTransform(95.8579,57.9591,0.4028,0.4035);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9B014").s().p("AAoAxQgLgLAAgRQAAgTAOgOQAPgPAUAAQASAAALAKQALALAAAQQAAAUgPAPQgOAPgUAAQgSAAgLgLgAA4AAQgIAJAAALQAAALAGAGQAGAGAKAAQAMAAAIgKQAJgKAAgMQAAgLgGgFQgGgGgKAAQgMAAgJALgAhrA1QgHgGAAgKQAAgPALgIQAKgIAQAAQAMAAAOAEIABgBIABgHQAAgMgTAAQgIAAgJACIgDABQgDAAgCgDQgDgCAAgDQAAgGAHgCQAMgEANAAQAQAAAJAHQAJAHAAAMIgCAMIgKAmQgDAKgIAAQgJAAABgJIAAgDQgLANgQAAQgLAAgIgHgAhZAXQgFAEAAAHQAAAFADADQAEAEAGAAQAJAAAIgGQAHgGACgJIACgDQgKgEgLAAQgJAAgGAFgAizA7QgIAAgCgJIgOhfQAAgEADgCQACgDAFAAQAKAAABAJIAKBMIA2hPQADgGAHAAQAJAAAAAHQAAADgCADIhABcQgGAIgHAAgAC3A3QgDgDABgEIABgDQACgKALAAQAFAAACADQADADgBAFIAAACQgDALgKAAQgFAAgDgEgACBA3QgCgDACgGIARg/QACgKAJAAQAEAAADAEQACADgBAFIgCAHQALgTAOAAQAIAAAAAJQAAAIgJACQgaAGgIAcIgGAXQgCAKgJAAQgEAAgDgEgAgRA3QgCgDABgGIAZhfQADgKAIAAQAFAAACADQACAEgBAGIgaBfQgCAKgIAAQgFAAgCgEg");
	this.shape_6.setTransform(115.8375,99.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiCFQgNgNAAgSIAAgBQAAgSAMgMQALgNARAAQASAAAKANQAKAMAAARQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIg8AAQABANAJAIQAIAHALAAQANAAALgKIADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgNANgSAAQgSAAgLgMgAhZBNQgIAIgBAMIA1AAQgBgMgGgIQgHgIgMAAQgLAAgHAIgAjMCFQgMgMAAgTIAAgBQAAgTAMgMQALgMAQAAQAUAAAMASIAAgtQAAgGAGAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAIAABqQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgLQgNATgTAAQgQAAgLgMgAjDBOQgJAJAAAOIAAABQAAAOAJAJQAIAIAMAAQAMAAAJgIQAJgKAAgNIAAgBQAAgOgJgJQgJgJgMAAQgMAAgIAJgAmNCFQgNgNAAgSIAAgBQAAgSAMgMQALgNARAAQASAAAKANQAKAMAAARQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIg8AAQABANAJAIQAIAHALAAQANAAALgKIADgBQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAIACAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgNANgSAAQgSAAgLgMgAmEBNQgIAIgBAMIA1AAQgBgMgGgIQgHgIgMAAQgLAAgHAIgAnNCQQgFAAgCgFIgfhGIgBgEQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAEAAACAFIAaBBIAchBQABgFAEAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAIgBADIgfBHQgDAFgEAAgAgJCOQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAQQAFgKAIgGQAIgGAIAAQAGAAAAAGQAAAGgGAAQgMACgIAJQgJAKAAARIAAAcQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAj4COQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgrQAAgLgGgHQgGgHgLAAQgLAAgHAIQgHAHAAALIAAAqQAAAHgGAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAJQAKgQATAAQAOAAAJAJQAIAJAAAPIAAAuQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAFVgkQgMgNAAgSIAAgBQAAgSALgMQAMgNARAAQARAAALANQAKAMAAARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIg8AAQACANAIAIQAIAHALAAQAOAAAKgKIAEgBQAAAAABAAQAAAAABAAQABAAAAABQAAAAABAAIABAEQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgNANgSAAQgRAAgMgMgAFehcQgHAIgCAMIA2AAQgBgMgHgIQgHgIgMAAQgKAAgIAIgAC+glQgMgMAAgSQAAgSAMgNQANgNASAAQASAAANANQAMAMAAASIAAABQAAARgMANQgNANgSAAQgTAAgMgNgADHhaQgIAJAAANIAAABQAAANAIAJQAJAKANAAQANAAAJgKQAJgJAAgNQAAgOgJgJQgJgKgNAAQgNAAgJAKgABVgkQgNgMAAgTIAAgBQAAgTANgMQALgMAQAAQATAAAMASIAAgtQAAgGAHAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAABAAAAIAABqQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgLQgMATgTAAQgQAAgLgMgABdhbQgIAJAAAOIAAABQAAAOAJAJQAIAIAMAAQAMAAAJgIQAJgKAAgNIAAgBQAAgOgJgJQgJgJgMAAQgMAAgJAJgAgLgfQgKgHAAgMIAAgBQAAgMAKgHQAKgHAPAAQANAAAMADIAAgDQAAgWgZAAQgLAAgJAEIgCABIgEgCQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgEAEgBQAMgGAOAAQARAAAJAJQAJAJAAAPIAAAtQAAAHgGAAQgGAAAAgGIAAgIQgLAPgTAAQgLAAgJgHgAgChAQgGAFAAAIIAAAAQAAAIAGAEQAFAFAJAAQALAAAIgHQAIgGAAgKIAAgIQgMgDgMAAQgMAAgFAEgAhiglQgNgNAAgRQAAgSANgNQAMgNASAAQARAAANAMQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgEgBQgLgKgLAAQgNAAgIAJQgJAKAAANIAAABQAAANAJAJQAJAKAMAAQANAAAKgKIAEgCQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgNAOgSAAQgSAAgMgNgAjJglQgNgMAAgSQAAgSANgNQAMgNATAAQASAAAMANQANAMAAASIAAABQAAARgNANQgMANgTAAQgSAAgMgNgAjBhaQgIAJAAANIAAABQAAANAJAJQAJAKANAAQANAAAJgKQAIgJAAgNQAAgOgJgJQgJgKgNAAQgNAAgJAKgAHqgbQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAgrQAAgLgGgHQgHgHgKAAQgLAAgHAIQgHAHAAALIAAAqQAAAHgGAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBIAAhIQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAAJQAKgQASAAQAPAAAIAJQAJAJAAAPIAAAuQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgAkDgbQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhCIgHAAQgFAAAAgGQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAHAAIAAgHQAAgOAHgHQAHgHALAAIAKABQAEABAAAFQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgGgBQgPAAAAASIAAAGIAWAAQAFAAAAAGQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgWAAIAABCQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAkugbQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAgrQAAgLgGgHQgGgHgLAAQgLAAgHAIQgHAHAAALIAAAqQAAAHgGAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhIQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAJQAKgQATAAQAOAAAJAJQAIAJAAAPIAAAuQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAnPgaQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAhjQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIBGAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQABABAAABQAAAAAAABIgCAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIg/AAIAAAmIA4AAQAAAAABAAQABABAAAAQABAAAAAAQAAABABAAIABAEQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIg4AAIAAAnIBAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAABABIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAg");
	this.shape_7.setTransform(84.625,90.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-15.7,0,15.8,0).s().p("AgyCVQhXghgRhXQgKgzAXguQAWguAwgZQAlgSAnACQA3ACAqAlIADACIABgEQAEgTATgCQALgCAJAIQAJAIAAAKIgBBGQAAALgHAHQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgdgbgnAAQgkAAgdAYQgdAYgHAkQgIApAXAkQAYAkAqAIQBIAMAvgxQANgMAPAEQAOAEAEAPQAEAOgLALQgXAZgeAOQgcANgoADIgPABQgdAAgWgIg");
	this.shape_8.setTransform(66.8212,29.4902);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-17.9,0,18,0).s().p("AhkBvIgWgaIgDgEIgBAEQgBAKgHAIQgIAHgMAAQgKgBgHgHQgIgIAAgKIABhCQAAgNAIgHQAIgHALAAIBEAAQAJAAAHAFQAHAFACAIQACAJgDAIQgDAIgIAFIgLADIgGABIALAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgXgcQgYgdgkgIQghgHgfAPQggAOgSAfQgGALgMACQgMADgKgJQgHgGgCgJQgBgKAFgJQAQgcAZgTQAkgcAsgFQA9gHAyAmQAzAlALA+QALA7ggA1QgfA0g6AQQgcAIgZAAQg/AAgzgxg");
	this.shape_9.setTransform(102.977,29.1868);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B6FCE").s().p("AtbJTIAAunQAAhqBLhJQBJhLBqAAIS7AAQBpAABKBLQBLBJAABqIAAOng");
	this.shape_10.setTransform(86,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,172,119), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B014").s().p("ACOAwQgNgMAAgTQAAgRANgNQANgNATAAQAUAAANAMQAMAOAAARIAAAAQAAASgMANQgOANgTAAQgTAAgNgNgACcgBQgHAGAAAMIAAAAQAAALAHAIQAHAIALAAQAMAAAHgIQAHgIAAgLQAAgLgHgHQgIgIgLAAQgLgBgHAJgAAFAwQgLgMAAgTQAAgRALgNQANgNATAAQARAAAMAKQADADAAAEQAAAEgCADQgDACgEAAQgDAAgCgCQgJgHgJAAQgLgBgHAJQgHAGAAAMIAAAAQAAALAHAIQAHAIALAAQAKAAAJgIQADgBADAAQADgBACADQADADAAADQAAAEgDACQgMAMgTAAQgSAAgNgNgAheA0QgIgJAAgPIAAgsQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAnQAAAUASAAQAIAAAGgGQAFgFAAgKIAAgmQAAgEADgDQADgDAEAAQAEAAADADQACADAAAEIAABCQAAAEgCADQgDADgEAAQgEAAgDgDQgDgDAAgEIAAgEQgKAPgQAAQgPAAgIgJgAjzAwQgNgMAAgTQAAgRANgNQANgNATAAQAUAAANAMQAMAOAAARIAAAAQAAASgMANQgOANgTAAQgTAAgNgNgAjlgBQgHAGAAAMIAAAAQAAALAHAIQAHAIALAAQAMAAAHgIQAHgIAAgLQAAgLgHgHQgIgIgLAAQgLgBgHAJgAliAuQgEgCAAgFQAAgEADgCQADgDAEAAQADAAACACQAPALARAAQAJAAAFgEQAGgDAAgHQAAgHgFgDQgGgEgPgEQgTgEgIgHQgKgGAAgPQAAgOALgKQALgJAQAAQAUAAAQALQAEADAAAFQAAADgDADQgCADgEAAIgFgBQgNgJgNAAQgIAAgFADQgFAEAAAGIAAAAQAAAHAFAEQAGAEAPADQATAEAIAHQAJAHAAAOQAAAPgLAKQgLAIgSABQgXgBgTgOgAFTA4QgDgDAAgEIAAgCQAAgFADgDQADgDAFAAQAFAAADADQAEADAAAFIAAACQAAAEgEADQgDAEgFAAQgFAAgDgEgAEqA5QgDgDAAgEIAAgnQAAgUgSAAQgIABgFAFQgGAFAAAJIAAAnQAAAEgDADQgCADgEAAQgFAAgCgDQgDgDAAgEIAAhCQAAgEADgDQACgDAFAAQAEAAACADQADADAAAEIAAAFQAKgPARAAQAOAAAIAIQAIAKAAANIAAAtQAAAEgDADQgDADgEAAQgEAAgDgDgABcA5QgCgDAAgEIAAhCQAAgEACgDQADgDAEAAQAEAAADADQADADAAAEIAABCQAAAEgDADQgDADgEAAQgEAAgDgDgAiOA5QgDgDAAgEIAAhiQAAgEADgDQADgCAEAAQAEAAADACQACADAAAEIAABiQAAAEgCADQgDADgEAAQgEAAgDgDgACpglQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAJgOQADgFAFAAQAEAAAEACQAEACAAACQAAADgDACIgLALQgFADgGAAQgFAAAAgCgABbgnQgDgDAAgEIAAgBQAAgEADgDQADgCAFAAQAFAAADACQADADAAAEIAAABQAAAEgDADQgDADgFAAQgFAAgDgDg");
	this.shape.setTransform(124.725,99.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVD/QgKgIAAgMIAAAAQAAgMAKgIQAKgGAPgBQANAAAMAEIAAgDQAAgXgZABQgKAAgKAEIgCABIgEgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgEAEgCQANgFANAAQARAAAJAJQAJAJAAAPIAAAtQAAAGgGAAQgGAAAAgFIAAgIQgLAOgSAAQgMAAgJgGgAgMDeQgGAFAAAHIAAABQAAAHAGAFQAGAFAIgBQALAAAIgGQAIgGAAgKIAAgIQgMgEgMAAQgLAAgGAFgAkKD5QgNgMAAgSIAAgBQAAgSAMgNQALgMARAAQASAAAKANQAKAMAAARQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAABIg8AAQABANAJAHQAIAIALgBQANAAALgJIADgBQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAIACAEQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgNAMgSAAQgSAAgLgMgAkBDCQgIAHgBAMIA1AAQgBgLgGgIQgHgIgMAAQgLgBgHAJgAl0D6QgMgMAAgTIAAgBQAAgTAMgMQALgMAQAAQAUAAAMASIAAgtQAAgGAGAAQABAAAAAAQABAAABAAQAAABAAAAQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAABIAABqQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgLQgNASgTAAQgQAAgLgLgAlrDDQgJAJAAAOIAAABQAAANAJAJQAIAJAMAAQAMAAAJgJQAJgJAAgNIAAgBQAAgOgJgJQgJgJgMAAQgMAAgIAJgAo1D5QgNgMAAgSIAAgBQAAgSAMgNQALgMARAAQASAAAKANQAKAMAAARQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAABIg8AAQABANAJAHQAIAIALgBQANAAALgJIADgBQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgNAMgSAAQgSAAgLgMgAosDCQgIAHgBAMIA1AAQgBgLgGgIQgHgIgMAAQgLgBgHAJgAp1EFQgFAAgCgFIgfhGIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAEAAACAFIAaBBIAchCQABgEAEAAQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBADIgfBHQgDAFgEAAgAhAECQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhqQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAABqQAAAGgGAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAixECQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAPQAFgKAIgGQAIgFAIAAQAGAAAAAGQAAAFgGABQgMABgIAKQgJAKAAARIAAAcQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAmgECQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgrQAAgLgGgHQgGgHgLAAQgLAAgHAIQgHAGAAAMIAAAqQAAAGgGAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAJQAKgQATAAQAOAAAJAJQAIAJAAAPIAAAuQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAGXBPQgMgMAAgSIAAgBQAAgSALgNQAMgMARAAQARAAALANQAKAMAAARQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIg8AAQACAOAIAHQAIAIALgBQAOAAAKgJIAEgCQAAABABAAQABAAAAAAQABAAAAAAQAAABABAAIABAEQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQgNAMgSAAQgRAAgMgMgAGgAYQgHAHgCAMIA2AAQgBgMgHgHQgHgIgMgBQgKAAgIAJgAEABOQgMgMAAgRQAAgTAMgMQANgNASAAQASAAANAMQAMANAAASIAAABQAAARgMAMQgNANgSAAQgTAAgMgNgAEJAZQgIAKAAANIAAABQAAANAIAJQAJAJANAAQANAAAJgJQAJgJAAgNQAAgOgJgKQgJgJgNAAQgNAAgJAJgACXBQQgNgMAAgTIAAgBQAAgTANgNQALgLAQAAQATAAAMASIAAgsQAAgGAHAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABIAABpQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgLQgMASgTAAQgQABgLgMgACfAYQgIAKAAAOIAAABQAAAOAJAIQAIAJAMAAQAMAAAJgJQAJgJAAgNIAAgBQAAgOgJgJQgJgJgMAAQgMAAgJAIgAA2BVQgKgIAAgLIAAgBQAAgMAKgIQAKgGAQAAQANAAAMADIAAgDQAAgXgZAAQgLABgKAEIgCABIgEgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgDAEgBQANgHAOABQARAAAJAJQAJAJAAAPIAAAtQAAAHgGgBQgGAAAAgFIAAgIQgLAOgTAAQgMAAgJgGgAA/A0QgGAFAAAHIAAABQAAAIAGAEQAGAFAJgBQALABAIgHQAIgGAAgKIAAgIQgMgDgMAAQgMgBgGAFgAggBOQgNgMAAgRQAAgTANgMQAMgNASAAQAQAAANAMQABAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIgEgBQgLgKgKAAQgNAAgIAJQgJAJAAAOIAAABQAAANAJAJQAJAJAMAAQAMABAKgLIAEgBQAAAAABAAQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgNANgRAAQgSAAgMgNgAiHBOQgNgMAAgRQAAgTANgMQAMgNATAAQASAAAMAMQANANAAASIAAABQAAARgNAMQgMANgTAAQgSAAgMgNgAh/AZQgIAKAAANIAAABQAAANAJAJQAJAJANAAQANAAAJgJQAIgJAAgNQAAgOgJgKQgJgJgNAAQgNAAgJAJgAIsBYQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgrQAAgMgGgGQgHgHgKAAQgLAAgHAIQgHAHAAALIAAAqQAAAHgGgBQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhIQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABIAAAJQAKgQASAAQAPAAAIAJQAJAJAAAPIAAAuQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAjBBYQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhDIgHAAQgFABAAgGQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAHAAIAAgHQAAgOAHgGQAHgHALAAIAKABQAEABAAAFQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBIgGAAQgPAAAAAQIAAAHIAWAAQAFAAAAAGQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgWAAIAABDQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAjsBYQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgrQAAgMgGgGQgGgHgLAAQgLAAgHAIQgHAHAAALIAAAqQAAAHgGgBQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhIQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAJQAKgQATAAQAOAAAJAJQAIAJAAAPIAAAuQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAmNBZQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBIAAhiQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAIBGAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAABAAAAQABABAAAAQAAABAAAAIgCAFQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIg/AAIAAAlIA4AAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIABAEQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIg4AAIAAAnIBAAAQAAAAABAAQABAAAAAAQAAABABAAQAAAAABAAIABAFQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAgADgiTQgLgGgIgHQgIgIgFgLQgEgKAAgMIAAgBQAAgMAEgLQAFgKAIgJQAIgHALgFQALgEANgBQAOABALAEQALAFAIAHQAIAJAEAKQAFAKAAANQAAAMgFALQgEALgIAHQgIAIgMAGQgLAEgNAAQgNAAgLgEgADqjrQgGADgEAFQgFAFgCAGQgDAHAAAHQAAAHADAHQACAGAFAGQAEAEAHADQAGADAHAAQAIAAAGgDQAHgCAEgFQAFgGACgGQADgHAAgGIAAgBQAAgHgDgHQgCgGgFgFQgFgFgGgDQgGgDgIABQgHgBgHADgAAxiTQgLgFgIgIQgHgIgFgLQgEgKAAgMIAAgBQAAgMAEgLQAFgKAHgJQAIgHALgFQALgEANgBIAPABIAMAEIAKAFIAIAIIgQASQgHgGgGgDQgHgEgJABQgHgBgGADQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAHACAHQADAGAEAGQAEAEAHADQAGADAHAAQAKAAAHgEQAGgDAHgHIAQAQIgJAJQgFAEgGADIgMADQgHACgIAAQgMAAgLgEgAJLiRIAAhyIAZAAIAABcIA5AAIAAAWgAIgiRIgLgaIgwAAIgKAaIgaAAIAxhzIAXAAIAxBzgAHujAIAeAAIgPglgAGbiRIg3hJIAABJIgZAAIAAhyIAXAAIA1BGIAAhGIAZAAIAABygACMiRIAAhyIAZAAIAABygAghiRIAAhyIAZAAIAABygAiiiRIAAhyIAtAAQANAAALAFQALAEAIAHQAIAIAFAKQAEALAAAMQAAAMgEAKQgFALgIAHQgIAIgLAFQgLAEgNAAgAiJinIAUAAQAHAAAHgDQAGgDAFgEQAEgFADgGQACgGAAgHIAAgBQAAgHgCgHQgDgGgEgFQgFgEgGgDQgHgCgHAAIgUAAgAjNiRIgKgaIgwAAIgLAaIgZAAIAwhzIAXAAIAxBzgAj/jAIAfAAIgPglgAlSiRIgYglIgUAAIAAAlIgZAAIAAhyIA0AAQAVAAALAKQALAKAAASIAAAAQAAAOgGAIQgHAJgLAFIAcAogAl+jLIAaAAQAJAAAFgFQAFgFAAgGIAAgBQAAgIgFgEQgFgEgKAAIgZAAgAnliRIAAhbIgjAAIAAgXIBeAAIAAAXIgiAAIAABbg");
	this.shape_1.setTransform(77.975,79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-19.9,0,20,0).s().p("AAADEIiVg9QgDgBAAgFIAAiRIgpgRQgEgCAAgDQgBgFADgCIAqgmIgsgsQgDgDABgDQABgDADgCICWg4QADgCAEADIAmAkIAngkQADgDAEACICWA4QAEACAAADQABADgDADIgsAsIAsApQACACAAAEQgBADgDACIgpARIAACMQAAAFgEACIiPA6QgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAiLB9ICGA2IAAi6IgjAiIgFACIhegngAAICxICGg3IAAiCIhcAnIgDAAIgEgCIgjgigAANgTIAkAjICEg4IghgdgAiygqICEA4IAkgjIiIgzgAiHhSICKA0IAAAAICJgzIiEg5IAABaQAAAGgHAAQgGAAAAgGIAAhagAANiWICEA5IAkgkIiHgzgAi0iBIAkAkICEg5Igggeg");
	this.shape_2.setTransform(86.75,25.5886);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-0.6,0,0.7,0).s().p("AgGARIAAggQAAgHAGAAQAHAAAAAHIAAAgQAAAGgHAAQgGAAAAgGg");
	this.shape_3.setTransform(95.375,35.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-0.6,0,0.7,0).s().p("AgGAQIAAggQAAgGAGAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAIAAAgQAAAHgHAAQgGAAAAgHg");
	this.shape_4.setTransform(98.1,35.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#861938").s().p("AtbJTIAAunQAAhqBLhJQBJhLBqAAIS6AAQBqAABKBLQBLBJAABqIAAOng");
	this.shape_5.setTransform(86,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,172,119), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(18,3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(15,0,352,109), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.C02_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,403.7,102.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B014").s().p("EhQEAB4IAAjvMCgJAAAIAADvg");
	this.shape.setTransform(512.5,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.fondoC01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1025,638.4), null);


(lib.mc_brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCFC02").ss(2,1,1).p("ACvAAQAABJgzAzQgzAzhJAAQhIAAgzgzQgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_brillo, new cjs.Rectangle(-1,-1,37,37), null);


(lib.envo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B097B2").s().p("EgahAnYMggPhOvMBNfAAAMAoDBOvg");
	this.shape.setTransform(423.6,262.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B1A1B3").s().p("Eg9WAnYQhQAAg4g5Qg5g5AAhQMAAAhIsQAAhQA5g5QA4g4BQAAMB6tAAAQBQAAA4A4QA5A5AABQMAAABIsQAABQg5A5Qg4A5hQAAg");
	this.shape_1.setTransform(422.15,263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#80378E","#A85568","#CC724A","#E2843E","#EB8A3C","#E8873B","#DF7B39","#CF6837","#BA4E35","#9F3035","#861938"],[0,0.157,0.322,0.455,0.537,0.616,0.698,0.776,0.859,0.937,1],-336.6,336.7,336.7,-336.7).s().p("Eg+0ApGQhTAAg7g6Qg6g7AAhTMAAAhL7QAAhTA6g7QA7g6BTAAMB9pAAAQBTAAA7A6QA6A7AABTMAAABL7QAABTg6A7Qg7A6hTAAg");
	this.shape_2.setTransform(422.125,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.envo, new cjs.Rectangle(0,0,844.3,526), null);


(lib.bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E8580E").ss(2,1,1).p("AAAg7IAAB3");
	this.shape.setTransform(0,5.0235,1,0.8333);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E8580E").s().p("Ag4AjIAAhFIByAAIgzBFg");
	this.shape_1.setTransform(6.15,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bullet, new cjs.Rectangle(-1,-1,12.9,12), null);


(lib.btn_sig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9B014").s().p("AvYEYIAAovIexAAIAAIvg");
	this.shape.setTransform(98.475,28);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197,56);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/Ax2MAAAhjrMCf/AAAMAAABjrg");
	this.shape.setTransform(512,319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,1024,638), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-15.7,0,15.8,0).s().p("AgyCVQhXgggRhYQgKgzAXguQAWguAwgZQAkgSAoACQA4ACApAlIADACIABgEQAEgTATgCQAKgCAKAIQAJAIAAAKIgBBGQAAALgHAHQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgegbgmAAQglAAgcAYQgdAYgHAkQgJApAYAkQAYAkAqAIQBHAMAwgxQANgMAPAEQAOAEAEAPQAEAOgLALQgYAZgdAOQgcANgoADIgPABQgdAAgWgIg");
	this.shape.setTransform(132.6712,24.4902);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-17.9,0,18,0).s().p("AhkBvIgageIAAAEQgBAKgHAIQgJAHgLAAQgKgBgIgHQgHgIAAgKIAAhCQAAgNAJgHQAIgHALAAIBDAAQAKAAAHAFQAGAFADAIQACAJgDAIQgEAIgHAFIgLADIgHABIAMAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgYgcQgXgdgkgIQghgHgfAPQggAOgSAfQgGALgMACQgMADgKgJQgHgGgCgJQgBgKAFgJQAQgcAYgTQAlgcAsgFQA9gHAyAmQAyAlAMA+QALA7ggA1QgfA0g6AQQgcAIgZAAQg/AAgzgxg");
	this.shape_1.setTransform(168.8174,24.1868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAxIAFgkIgdAXIgNgWIAigOIgigNIANgVIAdAVIgFgkIAYAAIgFAkIAdgVIAMAVIghANIAhAOIgMAWIgdgXIAFAkg");
	this.shape_2.setTransform(200.725,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_3
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(29.05,310.45,1,1,0,0,0,5.5,5);

	this.instance_1 = new lib.bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.05,253.85,1,1,0,0,0,5.5,5);

	this.instance_2 = new lib.bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(29.05,215.5,1,1,0,0,0,5.5,5);

	this.instance_3 = new lib.bullet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.05,177.95,1,1,0,0,0,5.5,5);

	this.instance_4 = new lib.bullet();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.05,121.3,1,1,0,0,0,5.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// FlashAICB
	this.instance_5 = new lib.Bitmap2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43,52,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B587B8").s().rr(-128.55,-22.5,257.1,45,20);
	this.shape_3.setTransform(151.625,68.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8363CF").s().p("Ar4jAIXxAAIr5GCg");
	this.shape_4.setTransform(152.225,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A3vTsMAAAgnXMAvfAAAMAAAAnXg");
	this.shape_5.setTransform(152.5,225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8363CF").s().p("A3vHvIAAqpQAAiABahaQBahaCAAAMAl3AAAQB/AABbBaQBaBaAACAIAAKpg");
	this.shape_6.setTransform(152,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,304.5,351), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bullet();
	this.instance.parent = this;
	this.instance.setTransform(25,259.5,1,1,0,0,0,5.5,5);

	this.instance_1 = new lib.bullet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25,221.5,1,1,0,0,0,5.5,5);

	this.instance_2 = new lib.bullet();
	this.instance_2.parent = this;
	this.instance_2.setTransform(25,183.5,1,1,0,0,0,5.5,5);

	this.instance_3 = new lib.bullet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25,147,1,1,0,0,0,5.5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_4 = new lib.Bitmap3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(26,53,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3vTsMAAAgnXMAvfAAAMAAAAnXg");
	this.shape.setTransform(152,225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-19.9,0,20,0).s().p("AgBDEIiTg9QgFgBAAgFIAAiRIgogRQgEgCAAgDQgBgFADgCIAqgmIgsgsQgDgDABgDQAAgDAFgCICVg4QADgCAEADIAmAkIAngkQAEgDADACICVA4QAEACABADQABADgDADIgsAsIAsApQACACAAAEQgBADgDACIgoARIAACMQAAAFgFACIiQA6QAAABAAAAQAAABgBAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAgAiLB9ICGA2IAAi6IgjAiIgFACIhegngAAHCxICGg3IAAiCIhbAnIgCAAIgFgCIgkgigAANgTIAkAjICEg4IgggdgAiygqICDA4IAlgjIiIgzgAiIhSICLA0IABAAICIgzIiFg5IAABaQAAAGgGAAQgGAAAAgGIAAhagAANiWICEA5IAkgkIiIgzgAi0iBIAkAkICEg5Ighgeg");
	this.shape_1.setTransform(152.75,25.5886);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-0.6,0,0.7,0).s().p("AgGARIAAggQAAgHAGAAQAHAAAAAHIAAAgQAAAGgHAAQgGAAAAgGg");
	this.shape_2.setTransform(161.375,35.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#D7612C","#EEB242"],[0,0.984],-0.6,0,0.7,0).s().p("AgGAQIAAggQAAgGAGAAQACAAADACQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAIAAAgQAAAHgHAAQgGAAAAgHg");
	this.shape_3.setTransform(164.1,35.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#861938").s().p("A3vHvIAAqpQAAiABahaQBahaCAAAMAl2AAAQCBAABZBaQBbBaAACAIAAKpg");
	this.shape_4.setTransform(152,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,304,351), null);


(lib.brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.mc_brillo();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1.1714,1.1714,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:0.25},15).to({scaleX:1.1714,scaleY:1.1714,alpha:1},15).wait(1));

	// Layer_1
	this.instance_1 = new lib.mc_brillo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.4,regY:17.4,scaleX:1.2283,scaleY:1.2283,x:17.45,y:17.45,alpha:1},15).to({regX:17.5,regY:17.5,scaleX:1,scaleY:1,x:17.5,y:17.5,alpha:0.25},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-5.1,45.4,45.4);


// stage content:
(lib.CMM_C1_VV_05_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{sig:311});

	// timeline functions:
	this.frame_37 = function() {
		playSound("SOL1901_Capsula1_Dipositiva_05_01");
	}
	this.frame_310 = function() {
		this.stop();
		
		this.sig.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("sig");
		}
	}
	this.frame_352 = function() {
		playSound("SOL1901_Capsula1_Diapositiva06_01");
	}
	this.frame_772 = function() {
		this.stop();
		if(this.pagesService){
		     this.pagesService.brilla();
		 }
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(273).call(this.frame_310).wait(42).call(this.frame_352).wait(420).call(this.frame_772).wait(1));

	// btn
	this.sig = new lib.btn_sig();
	this.sig.name = "sig";
	this.sig.parent = this;
	this.sig.setTransform(763.5,540.9,1,1,0,0,0,98.5,28);
	this.sig._off = true;
	new cjs.ButtonHelper(this.sig, 0, 1, 2, false, new lib.btn_sig(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sig).wait(310).to({_off:false},0).to({_off:true},1).wait(462));

	// brillo
	this.instance = new lib.brillo();
	this.instance.parent = this;
	this.instance.setTransform(833,540,1,1,0,0,0,17.5,17.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(310).to({_off:false},0).to({_off:true},1).wait(462));

	// Layer_15
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(690.45,374.45,1,1,0,0,0,152.2,175.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(381).to({_off:false},0).to({alpha:1},17).wait(319).to({regY:175.6,scaleX:1.0513,scaleY:1.0513,y:374.55},10).to({regY:175.5,scaleX:1,scaleY:1,y:374.45},8).wait(38));

	// FlashAICB
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(328.35,374.45,1,1,0,0,0,152,175.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(371).to({_off:false},0).to({alpha:1},17).wait(329).to({regX:152.1,regY:175.6,scaleX:1.0513,scaleY:1.0513,x:328.5,y:374.55},10).to({regX:152,regY:175.5,scaleX:1,scaleY:1,x:328.35,y:374.45},8).wait(38));

	// Layer_12
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.15,288.05,0.9169,0.9168,0,0,0,208.3,64.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(352).to({_off:false},0).to({x:424.15,y:140.05,alpha:1},19).wait(402));

	// FlashAICB
	this.instance_4 = new lib.envo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(823.95,539.05,0.0646,0.0646,0,0,0,422.4,263);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(332).to({_off:false},0).to({regX:422.1,scaleX:1,scaleY:1,x:512,y:319,alpha:1},20).wait(421));

	// Layer_10
	this.instance_5 = new lib.back();
	this.instance_5.parent = this;
	this.instance_5.setTransform(512,319,1,1,0,0,0,512,319);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(311).to({_off:false},0).to({alpha:0.6914},21).wait(441));

	// Layer_8
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(762.2,519.4,1,1,0,0,0,95.2,27.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(283).to({_off:false},0).to({y:541.4,alpha:1},15).wait(475));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_102 = new cjs.Graphics().p("A+kKSIAA0iMA9JAAAIAAUig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_graphics_102,x:755.175,y:383.7}).wait(671));

	// FlashAICB
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(843.65,520.5,1,1,0,0,0,86,59.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(121).to({_off:false},0).to({y:388.95},24,cjs.Ease.get(1)).wait(628));

	// FlashAICB
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(667.45,524.6,1,1,0,0,0,86,63.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).to({y:393.05},23,cjs.Ease.get(1)).wait(648));

	// Layer_3
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(216.35,407,1,1,0,0,0,186.6,52);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(64).to({_off:false},0).to({y:374,alpha:1},19).wait(690));

	// Layer_2
	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(763.05,398.5,0.9879,0.9879,0,0,0,208.3,64.3);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:373.35,alpha:1},21,cjs.Ease.get(1)).wait(27).to({regX:208.4,scaleX:1,scaleY:1,x:238.15,y:233.4},16).wait(709));

	// Layer_1
	this.instance_11 = new lib.Symbol1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(512.1,319.2,1,1,0,0,0,512.1,319.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(773));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,319,513,319.4);
// library properties:
lib.properties = {
	id: '965E6449C0EC4DFAA2282030E2AC0BDA',
	width: 1024,
	height: 638,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/C02_3.png", id:"C02_3"},
		{src:"images/C03.png", id:"C03"},
		{src:"images/fondoC01.png", id:"fondoC01"},
		{src:"sounds/SOL1901_Capsula1_Diapositiva06_01.mp3", id:"SOL1901_Capsula1_Diapositiva06_01"},
		{src:"sounds/SOL1901_Capsula1_Dipositiva_05_01.mp3", id:"SOL1901_Capsula1_Dipositiva_05_01"}
	],
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
an.compositions['965E6449C0EC4DFAA2282030E2AC0BDA'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;