(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.glosario_lupa = function() {
	this.initialize(img.glosario_lupa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,345,261);


(lib.glosario_texto = function() {
	this.initialize(img.glosario_texto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,638);


(lib.libro = function() {
	this.initialize(img.libro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,638);// helper functions:

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


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5BBEFF").ss(2,1,1).p("AFtAAQAACXhrBrQhrBriXAAQiWAAhshrQhqhrAAiXQAAiWBqhsQBshqCWAAQCXAABrBqQBrBsAACWg");
	this.shape.setTransform(36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-1,-1,75,75), null);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5BBEFF").ss(4,1,1).p("AFtAAQAACXhrBrQhrBriXAAQiWAAhshrQhqhrAAiXQAAiWBqhsQBshqCWAAQCXAABrBqQBrBsAACWg");
	this.shape.setTransform(36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-2,-2,77,77), null);


(lib.lupa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.glosario_lupa();
	this.instance.parent = this;
	this.instance.setTransform(-172.5,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lupa, new cjs.Rectangle(-172.5,-130.5,345,261), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F8F8F8","#000000"],[0,0.431,1],0,0,0,0,0,793.6).s().p("EhKrAr6MAAAhXzMCVXAAAMAAABXzg");
	this.shape.setTransform(478,281);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,956,562), null);


(lib.pantalla_osucra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.4)").s().p("EhQTAyFMAAAhkJMCgnAAAMAAABkJg");
	this.shape.setTransform(514,320.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pantalla_osucra, new cjs.Rectangle(0,0,1028,641), null);


(lib.btn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF00").s().p("AqPDzIAAnlIUfAAIAAHlg");
	this.shape.setTransform(0.025,0.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.6,-24.2,131.3,48.5);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.instance = new lib.Símbolo13();
	this.instance.parent = this;
	this.instance.setTransform(36.5,36.5,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:36.4,regY:36.4,scaleX:1.3288,scaleY:1.3288,x:36.4,y:36.4},15).to({alpha:0},14).wait(1));

	// Capa_1
	this.instance_1 = new lib.Símbolo12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36.5,36.5,1,1,0,0,0,36.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.1644,scaleY:1.1644,x:36.55,y:36.55},15).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.3,99.7,99.7);


(lib.fondo_glosario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.0105,1.0356,0,0,0,478.1,281.1);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CD51").s().p("EhKrAr6MAAAhXzMCVXAAAMAAABXzg");
	this.shape.setTransform(0.0594,0.0579,1.0105,1.0356);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo_glosario, new cjs.Rectangle(-483,-291,966.1,582.1), null);


// stage content:
(lib.glosario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_78 = function() {
		this.stop();
		
		this.cerrar_btn.addEventListener("click",hazC.bind(this));
		function hazC(){
			window.parent.HazCerrar();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

	// brillo
	this.instance = new lib.Símbolo11();
	this.instance.parent = this;
	this.instance.setTransform(958.05,54.1,0.4387,0.4387,0,0,0,36.5,36.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).wait(5));

	// boton_activo
	this.cerrar_btn = new lib.btn_cerrar();
	this.cerrar_btn.name = "cerrar_btn";
	this.cerrar_btn.parent = this;
	this.cerrar_btn.setTransform(959.7,58,0.4579,1.2583,0,0,0,0.1,0.1);
	this.cerrar_btn._off = true;
	new cjs.ButtonHelper(this.cerrar_btn, 0, 1, 2, false, new lib.btn_cerrar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cerrar_btn).wait(74).to({_off:false},0).wait(5));

	// cerrar
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1064A5").s().p("AhmBnQgrgqAAg9QAAgRAFgSQAMgwAngfQAogeAxAAQA8AAArAqQArArAAA7QAAANgEARQgKAygoAgQgoAig0gBQg7AAgrgqgAAXBDQAJAKANgBQANABAJgKQAKgJAAgNQAAgNgKgJIgXgXIAXgWQAKgKAAgMQAAgNgKgKQgJgIgNgBQgNABgJAIIgXAXIgWgXQgJgIgNgBQgNABgJAIQgKAKAAANQAAAMAKAKIAXAWIgXAXQgKAJAAANQAAANAKAJQAJAKANgBQANABAJgKIAWgWg");
	this.shape.setTransform(957.975,54.05);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(74).to({_off:false},0).wait(5));

	// lupa
	this.instance_1 = new lib.lupa();
	this.instance_1.parent = this;
	this.instance_1.setTransform(791.5,494.5,0.1594,0.1594,180);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({scaleX:1.1101,scaleY:1.1101,rotation:0},11,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(15));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("EhjXAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_28 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_29 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_30 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_31 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_32 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_33 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_34 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_35 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_36 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_37 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_38 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_39 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_40 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_41 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_42 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");
	var mask_graphics_43 = new cjs.Graphics().p("EhivAyyMAAAhljMDFfAAAMgg0Bljg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:-635.975,y:325}).wait(1).to({graphics:mask_graphics_28,x:-485.9248,y:325}).wait(1).to({graphics:mask_graphics_29,x:-341.8367,y:325}).wait(1).to({graphics:mask_graphics_30,x:-207.6857,y:325}).wait(1).to({graphics:mask_graphics_31,x:-83.4719,y:325}).wait(1).to({graphics:mask_graphics_32,x:30.8049,y:325}).wait(1).to({graphics:mask_graphics_33,x:135.1445,y:325}).wait(1).to({graphics:mask_graphics_34,x:229.5471,y:325}).wait(1).to({graphics:mask_graphics_35,x:314.0125,y:325}).wait(1).to({graphics:mask_graphics_36,x:388.5408,y:325}).wait(1).to({graphics:mask_graphics_37,x:453.132,y:325}).wait(1).to({graphics:mask_graphics_38,x:507.7861,y:325}).wait(1).to({graphics:mask_graphics_39,x:552.5031,y:325}).wait(1).to({graphics:mask_graphics_40,x:587.283,y:325}).wait(1).to({graphics:mask_graphics_41,x:612.1258,y:325}).wait(1).to({graphics:mask_graphics_42,x:627.0314,y:325}).wait(1).to({graphics:mask_graphics_43,x:632,y:325}).wait(36));

	// texto
	this.instance_2 = new lib.glosario_texto();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4,-4);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(27).to({_off:false},0).wait(52));

	// libro
	this.instance_3 = new lib.libro();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(52));

	// Capa_1
	this.instance_4 = new lib.fondo_glosario();
	this.instance_4.parent = this;
	this.instance_4.setTransform(508,591,0.0137,0.0137);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.0344,scaleY:1.0344,x:511.95,y:318.05},15).to({scaleX:0.9885,scaleY:0.9885,x:512.95,y:315},7).wait(57));

	// pantalla_oscura
	this.instance_5 = new lib.pantalla_osucra();
	this.instance_5.parent = this;
	this.instance_5.setTransform(513,319.5,1,1,0,0,0,514,320.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},22).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(508,318,519,366.4);
// library properties:
lib.properties = {
	id: '0FB3E76B40DEE849AF9E98745479D99C',
	width: 1024,
	height: 638,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/glosario_lupa.png?1558731434080", id:"glosario_lupa"},
		{src:"images/glosario_texto.png?1558731434080", id:"glosario_texto"},
		{src:"images/libro.png?1558731434080", id:"libro"}
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
an.compositions['0FB3E76B40DEE849AF9E98745479D99C'] = {
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