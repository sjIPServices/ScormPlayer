(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.fondoB01 = function() {
	this.initialize(img.fondoB01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2136,1332);// helper functions:

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


(lib.transicion01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	mask.setTransform(0,60);

	// Capa_2
	this.instance = new lib.fondoB01();
	this.instance.parent = this;
	this.instance.setTransform(-652,-369,0.6109,0.6109);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.transicion01, new cjs.Rectangle(-632,-265,1264,650), null);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC200").s().p("AnMDGIAAmLIOZAAIAAGLg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-19.8,92.2,39.6);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC200").s().p("AnFC/IAAl9IOLAAIAAF9g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-19,90.69999999999999,38.1);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// No copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBAQgMgHgGgMQgHgMgBgPIAAAAQABgPAHgLQAHgNAMgHQAMgHAQAAQAPAAAMAHQAMAHAHAMQAHALAAAPIAAABQAAAOgHANQgHAMgMAHQgMAHgQABQgQgBgMgHgAA2gQQgIAFgFAJQgFAIAAALIAAABQAAALAFAJQAFAJAJAFQAJAGALAAQALAAAIgGQAJgFAFgJQAEgJABgLIAAAAQgBgMgEgIQgGgJgIgFQgJgGgLAAQgLAAgJAGgAh9BEQgCgCAAgEIAAh9QAAgDACgCQACgCADAAIADAAIAEABIAEADIBVBsIAAhpQAAgDACgCQACgDADAAQAEAAACADQACACAAADIAAB9QAAAEgCACQgCACgDAAIgBAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBIgDgDIhXhuIAABrQAAAEgCACQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(-0.525,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004F79").s().p("AAnDbIlWAAQhjAAhGg9QhFg8gBhVIAAgYQABhVBFg9QBGg9BjAAIFWAAIEKAAQBiAABFA9QBGA9ABBVIAAAYQgBBUhGA9QhFA9hiAAg");
	this.shape_1.setTransform(-1.212,-0.4717,0.8339,0.8339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00283D").s().p("AkoDZQhiAAhGg9QhFg8AAhVIAAgYQAAhVBFg9QBGg8BiAAIJQADQBjAABGA8QBGA9AABVIAAAYQAABVhGA9QhGA8hjAAg");
	this.shape_2.setTransform(-0.1279,2.0091,0.8339,0.8339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-46.4,-18.7,90.9,39.099999999999994), null);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// texto  copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BGQgNgFgMgJIgCgDIAAgEQAAgCABgDQADgCADAAIADAAIABACQALAIAKAFQALADANAAQAOAAAJgHQAHgGAAgKIAAgBQAAgGgDgFQgCgFgIgEQgIgDgPgDQgPgEgLgFQgKgEgFgIQgFgIgBgLIAAgBQABgLAGgIQAFgIALgGQAKgEANAAQAOgBALAEQAKADAJAHIADADIABADQAAAEgDACQgBACgEAAIgCAAIgDgBQgHgGgJgDQgJgEgKAAQgOABgHAGQgJAHAAAJIAAABQAAAGADAFQAEAFAIAEQAJADAOAEQAYAEAKAJQALAKAAAPIAAABQAAAMgGAJQgGAJgKAEQgLAGgOAAQgPgBgNgEgAA1BHQgDgCAAgDIAAhZQAAgEADgCQABgCAEAAQADAAACACQACACAAAEIAABZQAAADgCACQgCADgDAAQgDAAgCgDgAA2guIgBgCIABgBIAAgBIANgSIADgEQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIAHACQAEADAAACIgBACIgCACIgPAOIgFADIgEABIgEgBg");
	this.shape.setTransform(0.55,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004F79").s().p("AAnDbIlWAAQhjAAhGg9QhFg8gBhVIAAgYQABhVBFg9QBGg9BjAAIFWAAIEKAAQBiAABFA9QBGA9ABBVIAAAYQgBBUhGA9QhFA9hiAAg");
	this.shape_1.setTransform(0.3379,-0.2226,0.8339,0.8339);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00283D").s().p("AkoDZQhiAAhGg9QhFg8AAhVIAAgYQAAhVBFg9QBGg8BiAAIJQADQBjAABGA8QBGA9AABVIAAAYQAABVhGA9QhGA8hjAAg");
	this.shape_2.setTransform(1.422,2.2583,0.8339,0.8339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-44.9,-18.4,90.9,39), null);


(lib.ventana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cuadro no
	this.instance = new lib.Símbolo9();
	this.instance.parent = this;
	this.instance.setTransform(62.05,44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// cuadro si
	this.instance_1 = new lib.Símbolo8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-67.1,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// texto copia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#103867").s().p("AodDIIAAiNIAmAAIAAAPIAGgHIAHgFIAJgEIALgBQAKAAAJAEQAIAEAHAHQAGAHAEALQAEAKAAANIAAAAQAAAOgEAKQgEALgGAHQgHAHgIAEQgJAEgKAAQgGAAgFgCIgJgDIgHgFIgGgFIAAAtgAnqBbQgEACgDACIgFAIQgBAEAAAGIAAAAQAAAGABAEQACAFADADQADAEAEACQAEABAFAAQAJAAAGgHQAHgGAAgMIAAAAQAAgKgHgIQgGgGgJgBQgFABgEACgAQYCnQgHgCgFgDQgFgFgDgGQgCgHAAgHIAAgBQAAgIADgHQADgGAFgEQAGgFAIgCQAHgCAKAAQAIAAAGABIAMADIAAgCQAAgIgFgEQgGgFgLAAQgIAAgHABIgOAFIgIgbIATgGQALgCAOgBQAOABAKADQAKAEAHAGQAGAGADAIQACAJAAALIAAA+IglAAIAAgLQgGAGgHAEQgIAEgLAAQgIAAgGgDgAQrB8QgFAEAAAGIAAABQAAAFAEADQAEADAGAAQAIAAAFgFQAFgFAAgHIAAgGIgGgCIgIgBQgJABgEADgAOZCmQgIgEgHgHQgGgHgEgKQgEgLAAgNIAAgBQAAgNAEgKQAEgKAGgIQAHgHAIgEQAJgEAKAAQAMAAAIAEQAHAFAGAHIAAg0IAmAAIAACSIgmAAIAAgOQgGAHgHAFQgIAFgMAAQgKAAgJgEgAOvBbIgHAEQgDADgCAFQgCAEAAAGIAAAAQAAAGACAEQACAFADADQADAEAEACQAEABAEAAQAFAAAEgBQAEgCADgEQADgDACgFQABgEAAgGIAAAAQAAgGgBgEIgFgIIgHgEQgEgCgFgBQgEABgEACgAMZCnQgHgCgFgDQgFgFgDgGQgCgHAAgHIAAgBQAAgIADgHQADgGAFgEQAGgFAIgCQAHgCAKAAQAIAAAGABIAMADIAAgCQAAgIgFgEQgGgFgLAAQgIAAgHABIgOAFIgIgbIATgGQALgCAOgBQAOABAKADQAKAEAHAGQAGAGADAIQACAJAAALIAAA+IglAAIAAgLQgGAGgHAEQgIAEgLAAQgIAAgGgDgAMsB8QgFAEAAAGIAAABQAAAFAEADQAEADAGAAQAIAAAFgFQAFgFAAgHIAAgGIgGgCIgIgBQgJABgEADgAIfCmQgNgEgLgIIAOgXQAJAGAKADQAKADAIABQAKgBAAgFIAAgBQAAgDgFgCIgNgEIgPgFQgHgDgFgDQgFgFgDgFQgDgFAAgJIAAAAQAAgIADgIQAEgGAFgFQAGgEAIgDQAIgCAJAAQAMAAAMADQAMAEAJAFIgNAYQgIgEgJgDQgJgCgGAAQgEgBgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADAFACIANAFIAPAEQAHAEAFAEQAFADADAGQADAGAAAHQAAAKgDAGQgDAHgGAFQgGAEgIACQgIADgKAAQgOAAgNgEgAC3CnQgHgCgEgDQgFgFgDgGQgDgHAAgHIAAgBQAAgIADgHQADgGAGgEQAFgFAIgCQAIgCAKAAQAHAAAHABIALADIAAgCQAAgIgFgEQgFgFgLAAQgJAAgHABIgOAFIgIgbIAUgGQAKgCAOgBQAPABAKADQAKAEAGAGQAHAGACAIQADAJAAALIAAA+IgmAAIAAgLQgFAGgIAEQgIAEgLAAQgHAAgHgDgADKB8QgEAEAAAGIAAABQAAAFADADQAEADAGAAQAIAAAGgFQAFgFAAgHIAAgGIgHgCIgIgBQgIABgFADgAg4CnQgHgCgEgDQgFgFgDgGQgDgHAAgHIAAgBQAAgIADgHQADgGAGgEQAFgFAIgCQAIgCAKAAQAHAAAHABIALADIAAgCQAAgIgFgEQgFgFgLAAQgJAAgHABIgOAFIgIgbIAUgGQAKgCAOgBQAPABAKADQAJAEAGAGQAHAGACAIQADAJAAALIAAA+IglAAIAAgLQgFAGgIAEQgIAEgLAAQgHAAgHgDgAglB8QgEAEAAAGIAAABQAAAFADADQAEADAGAAQAIAAAGgFQAFgFAAgHIAAgGIgHgCIgIgBQgIABgFADgAmFCnQgHgCgEgDQgFgFgDgGQgDgHAAgHIAAgBQAAgIADgHQADgGAGgEQAFgFAIgCQAIgCAKAAQAHAAAHABIALADIAAgCQAAgIgFgEQgFgFgLAAQgJAAgHABIgOAFIgIgbIAUgGQAKgCAOgBQAPABAKADQAKAEAGAGQAHAGACAIQADAJAAALIAAA+IgmAAIAAgLQgFAGgIAEQgIAEgLAAQgHAAgHgDgAlyB8QgEAEAAAGIAAABQAAAFADADQAEADAGAAQAIAAAGgFQAFgFAAgHIAAgGIgHgCIgIgBQgIABgFADgAq7CnQgHgCgFgDQ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FAEAAAGIAAAAQAAAGAEADQAEADAGAAQAIAAAFgEQAFgGAAgIIAAgEIgGgCIgIgCQgJAAgEAEgAHkg0QgHgCgFgFQgFgEgDgGQgCgGAAgJIAAAAQAAgIADgGQADgHAFgEQAGgEAIgCQAHgDAKAAQAIAAAGACIAMADIAAgCQAAgJgFgFQgGgEgLAAQgIAAgHACIgOAEIgIgbIATgGQALgDAOAAQAOAAAKAEQAKAEAHAGQAGAGADAJQACAIAAAMIAAA+IglAAIAAgMQgGAHgHADQgIAEgLAAQgIAAgGgCgAH3hgQgFAEAAAGIAAAAQAAAGAEADQAEADAGAAQAIAAAFgEQAFgGAAgIIAAgEIgGgCIgIgCQgJAAgEAEgAF8g2QgNgEgLgIIAOgXQAJAGAKAEQAKACAIAAQAKABAAgHIAAAAQAAgDgFgCIgNgEIgPgEQgHgDgFgFQgFgDgDgGQgDgFAAgJIAAAAQAAgJADgGQAEgHAFgFQAGgEAIgCQAIgDAJAAQAMAAAMAEQAMACAJAHIgNAXQgIgEgJgCQgJgEgGAAQgEAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAADAFADIANAEIAPAFQAHADAFADQAFAEADAGQADAFAAAJQAAAJgDAHQgDAGgGAFQgGAFgIACQgIACgKAAQgOAAgNgEgAERg2QgKgEgIgIQgIgGgEgLQgEgLAAgMIAAAAQAAgMAEgLQAEgKAHgIQAHgHAKgEQAKgFAMAAQAOAAAKAFQALAFAGAHQAHAJADAKQAEALAAAMIAAAEIAAAEIhJAAQACAJAGAEQAHAFAJAAQAGgBAGgCQAGgCAGgGIAVARQgIAKgMAGQgLAGgQAAQgNAAgLgEgAEZiCQgFAFgBAKIAlAAQgBgKgFgFQgFgFgIAAQgHAAgFAFgAhDg2QgLgEgIgIQgHgGgFgLQgEgLAAgMIAAAAQAAgMAEgLQAEgKAHgIQAIgHAKgEQAKgFAMAAQAOAAAKAFQAKAFAHAHQAGAJADAKQADALAAAMIAAAEIAAAEIhHAAQACAJAGAEQAGAFAJAAQAHgBAGgCQAFgCAGgGIAUARQgHAKgLAGQgMAGgQAAQgNAAgKgEgAg8iCQgEAFgCAKIAmAAQgBgKgFgFQgFgFgIAAQgIAAgFAFgAlFg2QgNgEgMgIIAOgXQAKAGAKAEQAJACAJAAQAJABAAgHIAAAAQAAgDgEgCIgNgEIgPgEQgHgDgFgFQgGgDgDgGQgDgFAAgJIAAAAQAAgJAEgGQADgHAGgFQAGgEAIgCQAHgDAKAAQAMAAALAEQAMACAJAHIgNAXQgIgEgJgCQgIgEgHAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADAEADIANAEIAPAFQAHADAFADQAGAEADAGQADAFAAAJQAAAJgEAHQgDAGgGAFQgFAFgJACQgIACgKAAQgNAAgNgEgAm9g0QgHgCgEgFQgFgEgDgGQgDgGAAgJIAAAAQAAgIADgGQADgHAGgEQAFgEAIgCQAIgDAKAAQAHAAAHACIALADIAAgCQAAgJgFgFQgFgEgLAAQgJAAgHACIgOAEIgIgbIAUgGQAKgDAOAAQAPAAAKAEQAKAEAGAGQAHAGACAJQADAIAAAMIAAA+IgmAAIAAgMQgFAHgIADQgIAEgLAAQgHAAgHgCgAmqhgQgEAEAAAGIAAAAQAAAGADADQAEADAGAAQAIAAAGgEQAFgGAAgIIAAgEIgHgCIgIgCQgIAAgFAEgAoog2QgLgEgIgIQgHgGgFgLQgEgLAAgMIAAAAQAAgMAEgLQAEgKAHgIQAIgHAKgEQAKgFAMAAQAOAAAKAFQAKAFAHAHQAHAJADAKQADALAAAMIAAAEIAAAEIhIAAQACAJAGAEQAGAFAJAAQAHgBAGgCQAFgCAGgGIAVARQgIAKgLAGQgMAGgQAAQgNAAgKgEgAohiCQgEAFgCAKIAmAAQgBgKgFgFQgFgFgIAAQgIAAgFAFgAqdg2QgNgEgMgIIAOgXQAKAGAKAEQAJACAJAAQAJABAAgHIAAAAQAAgDgEgCIgNgEIgPgEQgHgDgFgFQgGgDgDgGQgDgFAAgJIAAAAQAAgJAEgGQADgHAGgFQAGgEAIgCQAHgDAKAAQAMAAALAEQAMACAJAHIgNAXQgIgEgJgCQgIgEgHAAQgEAAgCACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAADAEADIANAEIAPAFQAHADAFADQAGAEADAGQADAFAAAJQAAAJgEAHQgDAGgGAFQgFAFgJACQgIACgKAAQgNAAgNgEgAsIg2QgLgEgIgIQgHgGgFgLQgEgLAAgMIAAAAQAAgMAEgLQAEgKAHgIQAIgHAKgEQAKgFAMAAQAOAAAKAFQAKAFAHAHQAHAJADAKQADALAAAMIAAAEIAAAEIhIAAQACAJAGAEQAGAFAJAAQAHgBAGgCQAFgCAGgGIAVARQgIAKgLAGQgMAGgQAAQgNAAgKgEgAsBiCQgEAFgCAKIAmAAQgBgKgFgFQgFgFgIAAQgIAAgFAFgAwUg1QgJgDgGgFQgHgGgEgIQgDgIAAgJIAAgBQAAgJADgHQACgHAGgFQAFgFAHgDIAQgFIACgNIAYAAIAFAiIgCABQgRACgHAEQgHAEAAAHQAAAFAEADQAEACAHAAQAHAAAIgDQAHgEAHgFIAUAaQgJAJgMAGQgNAFgSABQgLgBgJgCgAOIg0IAAiTIAmAAIAACTgAJLg0IAAhsIAmAAIAAAVQAFgLAIgHQAIgGANAAIAAApIgDAAQgPgBgIAKQgIAIAAATIAAAigACeg0IAAhsIAlAAIAAAVQAFgLAIgHQAIgGAOAAIAAApIgEAAQgOgBgIAKQgJAIAAATIAAAigAi3g0IAAhsIAmAAIAAAVQAFgLAIgHQAIgGANAAIAAApIgDAAQgPgBgIAKQgIAIAAATIAAAigAu9g0IAAiNIA2AAQATAAAOAGQAPAEAKAKQAKAJAFANQAGANAAAPIAAAAQAAAQgGAMQgFANgKAJQgKAKgPAFQgPAGgTAAgAuXhXIAQAAQASAAAKgJQALgJAAgRQAAgRgLgKQgKgJgSAAIgQAAgAwPieIAAgjIAnAAIAAAjg");
	this.shape.setTransform(0.275,-41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(35.2,1,1).p("A9Ev7MA6JAAAIAAf3Mg6JAAAg");
	this.shape_1.setTransform(-0.025,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A9EP8IAA/3MA6JAAAIAAf3g");
	this.shape_2.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ventana, new cjs.Rectangle(-203.7,-119.6,407.4,239.2), null);


(lib.Ventana_pop_up_salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		this.stop();
		
		this.si.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler(){
			var pagina_ = window.parent.dameActual();
			console.log("dameActual :: " + pagina_);
			//var pagina_ = window.parent.angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPage();
			window.parent.HazCerrar();	
			window.parent.irA(pagina_);
			
			//window.parent.angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPage(pagina_);
		}
		
		this.no.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2(){
			window.parent.HazCerrar();
			window.parent.irA(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Capa_4
	this.no = new lib.Símbolo11();
	this.no.name = "no";
	this.no.parent = this;
	this.no.setTransform(92.25,16.45,1.5195,1.5195);
	this.no._off = true;
	new cjs.ButtonHelper(this.no, 0, 1, 2, false, new lib.Símbolo11(), 3);

	this.timeline.addTween(cjs.Tween.get(this.no).wait(30).to({_off:false},0).wait(1));

	// btn:si
	this.si = new lib.Símbolo10();
	this.si.name = "si";
	this.si.parent = this;
	this.si.setTransform(-103,16.05,1.5195,1.5195);
	this.si._off = true;
	new cjs.ButtonHelper(this.si, 0, 1, 2, false, new lib.Símbolo10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.si).wait(30).to({_off:false},0).wait(1));

	// Pop up ventana
	this.instance = new lib.ventana();
	this.instance.parent = this;
	this.instance.setTransform(-2.05,-50.05,0.3064,0.3064);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleX:1.5195,scaleY:1.5195,x:-1.95,y:-50,alpha:1},14).wait(6));

	// Capa_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiZDuIAAnTIAoAAIAAAvIABAAQAOgTATgMQATgNAUgFQAVgGAUAAQAsAAAkAUQAiAUAUAiQATAiABAsQgBAtgTAiQgUAhgiAUQgkAUgsAAQgUAAgVgGQgUgFgTgNQgTgNgOgSIgBAAIAADigAg7i4QgaAOgOAbQgQAaABAgQgBAhAQAaQAOAaAaAOQAaAPAiABQAhgBAYgPQAZgOANgaQAOgaAAghQAAgggOgaQgNgbgZgOQgYgPghgBQgiABgaAPg");
	this.shape.setTransform(-594.25,-293.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhiB3QgbgdAAg3IAAi3IApAAIAACgQAAAgAHAWQAHAXARALQASAMAeAAIAQgDQAOgDAQgKQAQgLAMgXQAMgXABgnIAAiUIApAAIAADhIABAeIACAiIgqAAQgCgLAAgMIAAgXIgBAAQgKAQgPAMQgQAMgTAHQgSAHgTAAQg3AAgbgeg");
	this.shape_1.setTransform(-631.575,-301.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiaDuIAAnTIApAAIAAAvIACAAQANgTATgMQATgNAVgFQAUgGATAAQAuAAAiAUQAjAUATAiQAUAiAAAsQAAAtgUAiQgTAhgjAUQgiAUguAAQgTAAgUgGQgVgFgTgNQgTgNgNgSIgCAAIAADigAg6i4QgaAOgQAbQgPAaAAAgQAAAhAPAaQAQAaAaAOQAaAPAgABQAigBAZgPQAZgOANgaQANgaAAghQAAgggNgaQgNgbgZgOQgZgPgigBQggABgaAPg");
	this.shape_2.setTransform(-683.85,-293.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhPCEQgjgTgTgjQgUgiAAgsQAAgrAUgiQATgjAjgTQAigVAtABQAtgBAiAVQAkATATAjQATAiABArQgBAsgTAiQgTAjgkATQgiAVgtgBQgtABgigVgAg5hjQgZAPgNAaQgOAaAAAgQAAAhAOAZQANAbAZAPQAYAPAhAAQAiAAAYgPQAYgPAOgbQANgZAAghQAAgggNgaQgOgagYgPQgYgPgiAAQghAAgYAPg");
	this.shape_3.setTransform(-722.1,-301.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiaDuIAAnTIApAAIAAAvIACAAQANgTATgMQATgNAVgFQAUgGATAAQAuAAAiAUQAjAUATAiQAUAiAAAsQAAAtgUAiQgTAhgjAUQgiAUguAAQgTAAgUgGQgVgFgTgNQgTgNgNgSIgCAAIAADigAg6i4QgbAOgPAbQgPAaAAAgQAAAhAPAaQAPAaAbAOQAaAPAgABQAigBAZgPQAZgOAMgaQAOgaAAghQAAgggOgaQgMgbgZgOQgZgPgigBQggABgaAPg");
	this.shape_4.setTransform(-758.45,-293.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgXCYQgaAAgWgJQgXgKgOgTQgOgTAAgcQAAgjASgUQASgUAcgJQAcgKAegDQAegDAbABIAUAAIAAgIQAAglgSgTQgSgTgmAAQgYAAgXAJQgWAJgTARIgYgeQAUgUAfgLQAegLAoAAQAdAAAYALQAYALAOAXQAPAXAAAjIAACBIACAjIADAeIgoAAIgCgXIgBgYIgBAAQgSAcgZANQgYAOggAAIgDgBgAASACQgWABgWAGQgWAGgPANQgOAMgBAWQABATAKAMQAKALAPAGQAQAFAQAAQAdAAAUgNQATgMAKgWQAJgUAAgbIAAgVIgVAAIgmACg");
	this.shape_5.setTransform(-812.525,-301.9491);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ABVCVIAAigQAAgggHgWQgHgXgRgLQgSgMgeAAIgRADQgNADgQAKQgRALgMAXQgLAXgBAmIAACVIgpAAIAAjhIgBgeIgCgiIAqAAIACAXIAAAXIABAAQAKgQAPgMQAPgMATgHQATgHATAAQA3AAAbAeQAbAdAAA3IAAC3g");
	this.shape_6.setTransform(-845.525,-302.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgXCYQgaAAgWgJQgXgKgOgTQgOgTAAgcQAAgjASgUQASgUAcgJQAcgKAegDQAegDAbABIAUAAIAAgIQAAglgSgTQgSgTgmAAQgYAAgXAJQgWAJgTARIgYgeQAUgUAfgLQAegLAoAAQAdAAAYALQAYALAOAXQAPAXAAAjIAACBIACAjIADAeIgoAAIgCgXIgBgYIgBAAQgSAcgZANQgYAOggAAIgDgBgAASACQgWABgWAGQgWAGgPANQgOAMgBAWQABATAKAMQAKALAPAGQAQAFAQAAQAdAAAUgNQATgMAKgWQAJgUAAgbIAAgVIgVAAIgmACg");
	this.shape_7.setTransform(-879.175,-301.9491);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAGC4QgPgGgLgRQgLgRgBggIAAi2Ig9AAIAAglIA9AAIAAhSIAoAAIAABSIBTAAIAAAlIhTAAIAACrQAAAVAFALQAFAMAKAEQAJAEANAAQALAAALgDQALgDAJgGIACAmQgLAFgPADQgOADgPAAIgDAAQgOAAgQgGg");
	this.shape_8.setTransform(-904.775,-305.6732);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ABVCVIAAigQAAgggHgWQgHgXgRgLQgSgMgeAAIgRADQgNADgQAKQgRALgMAXQgLAXgBAmIAACVIgpAAIAAjhIgBgeIgCgiIAqAAIACAXIAAAXIABAAQAKgQAPgMQAPgMATgHQATgHATAAQA3AAAbAeQAbAdAAA3IAAC3g");
	this.shape_9.setTransform(-932.775,-302.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAICYQgsAAghgUQgigUgTgiQgTgigBgsQABgrATgjQATgiAhgUQAhgUAoAAQAtABAfATQAeAUARAhQARAgAAAoIAAASIjxAAQADAdAOAYQAOAXAYAOQAXAOAcAAQAggBAYgOQAYgPAMgUIAfAaQgYAgggAPQgeAOgjABIgCgBgABigWQAAgqgZgZQgZgZgtgBQgaABgWANQgXANgOAVQgOAVgBAYIDDAAIAAAAg");
	this.shape_10.setTransform(-966.75,-301.9492);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgXDbIiom2IAzAAICLF0IABAAICPl0IAxAAIirG2g");
	this.shape_11.setTransform(-1002.95,-309.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1024,-346.5,1331.6,478.2);


// stage content:
(lib.bookmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(1));

	// Capa 1
	this.instance = new lib.Ventana_pop_up_salir();
	this.instance.parent = this;
	this.instance.setTransform(512,344);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(2));

	// transicion
	this.instance_1 = new lib.transicion01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-639.95,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:632},24,cjs.Ease.get(1)).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-779.9,240,2064.9,469.79999999999995);
// library properties:
lib.properties = {
	id: '85DE83A84ED577408E4B6C8F7B3707BC',
	width: 1024,
	height: 688,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/fondoB01.png?1571955411727", id:"fondoB01"}
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
an.compositions['85DE83A84ED577408E4B6C8F7B3707BC'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;