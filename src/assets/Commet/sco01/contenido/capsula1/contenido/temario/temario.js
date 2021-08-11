(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back01 = function() {
	this.initialize(img.back01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,638);


(lib.menu2 = function() {
	this.initialize(img.menu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1724,518);// helper functions:

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


(lib.titulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AG8BfQgagWAAgrQAAgqAagWQAWgSAiAAQAiAAAWASQAaAWAAAqQAAArgaAWQgWATgiAAQghAAgXgTgAHTAfQAAAxAhAAQAiAAgBgxQABgvgiAAQghAAAAAvgAmMBfQgZgWAAgrQAAgpAcgWQAWgTAeAAQAfAAATARQAYAXAAAwIAAAHIhqAAQADAlAjAAQAbAAAVgSIARAcQgcAYgpAAQgkAAgVgTgAk2APQgEghgbAAQgaAAgFAhIA+AAIAAAAgAArBlQgOgMAAgUQAAg2BlgJIAAgDQAAgTgXAAQgYAAgXASIgagZQAfgdAwAAQBBAAAAA+IAABkIgsAAIgEgXQgXAaghAAQgTAAgMgMgABMA9QAAAPARAAQAYAAANgOIAAgdQg2AFAAAXgAFVBuIAAifIAvAAIAACfgADVBuIAAifIAsAAIADAbIABAAQATgeAhAAIABAAIAEArIgLgBQgeAAgRAVIAABjgAgsBuIAAhlQAAgLgCgFQgFgFgKAAQgOAAgSAPIAABrIgwAAIAAhlQAAgLgDgFQgEgFgLAAQgNAAgTAPIAABrIgwAAIAAifIAsAAIAEAZQAWgcAfAAQAkAAAHAcQAXgcAeAAQAYAAALAOQALANAAAWIAABxgAoCBuIAAi0IhDAAIAAgpICyAAIAHApIhGAAIAAC0gAFYhHQgHgHABgLQgBgKAHgHQAHgHAOAAQANAAAHAHQAHAHAAAKQAAALgHAHQgHAHgNAAQgOAAgHgHg");
	this.shape.setTransform(60.8,19.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(0,0,154,37.5), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339966").s().p("AipCtQhGhHAAhmQAAhkBGhJQBHhHBiAAQBjAABGBHQBHBJAABkQAABmhHBHQhGBIhjAAQhiAAhHhIg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24.5,48,49);


(lib.paloma_tache = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bien:0,mal:2,NA:3});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBRIhChDQgFgFAAgHQAAgGAFgGQAFgFAHAAQAIAAAFAFIA0AzIBbh3QAEgGAIgBQAHgBAGAFQAGAEABAIQABAHgFAGIhnCHQgGAHgHAAIgCAAQgHAAgFgFg");
	this.shape.setTransform(17.1591,17.6409);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#64AB6B").s().p("Ah7B8Qgzg0AAhIQAAhHAzg0QA0gzBHAAQBJAAAzAzQAzA0AABHQAABIgzA0QgzAzhJAAQhHAAg0gzg");
	this.shape_1.setTransform(17.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBTQgFgFgBgIQAAgHAFgFIB/iLQAFgFAHgBQAIAAAFAFQAGAFAAAHQAAAIgFAFIh/CLQgFAGgIAAQgHAAgFgFg");
	this.shape_2.setTransform(17.4773,17.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBSIh/iLQgFgFAAgIQABgHAFgFQAGgFAHAAQAHABAFAFIB/CLQAFAFAAAHQAAAIgGAFQgFAFgHAAQgIAAgFgGg");
	this.shape_3.setTransform(17.4773,17.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C94655").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QAzgzBIAAQBJAAAzAzQAzA0AABHQAABIgzA0QgzAzhJAAQhIAAgzgzg");
	this.shape_4.setTransform(17.5,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAyIgIgXIgoAAIgIAXIgVAAIAnhjIAUAAIAoBjgAgNAKIAaAAIgNgkg");
	this.shape_5.setTransform(24.825,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSA0IAXhnIAOAAIgYBng");
	this.shape_6.setTransform(17.85,17.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAyIgnhBIAABBIgTAAIAAhjIAUAAIAoBCIAAhCIATAAIAABjg");
	this.shape_7.setTransform(10.825,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8CD51").s().p("Ah7B8QgzgzAAhJQAAhHAzg0QAzgzBIAAQBJAAAzAzQAzA0AABHQAABIgzA0QgzAzhJAAQhIAAgzgzg");
	this.shape_8.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,0,47.3,35);


(lib.Clip_oscuro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.498)").s().p("AlUFUQiMiMAAjIQAAjHCMiMQCOiODGAAQDHAACNCOQCNCMAADHQAADIiNCMQiNCOjHgBQjGABiOiOg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_oscuro, new cjs.Rectangle(-48.1,-48.1,96.30000000000001,96.30000000000001), null);


(lib.Btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmOGPQikilAAjqQAAjpCkilQClikDpAAQDqAAClCkQCkClAADpQAADqikClQilCkjqAAQjpAAilikg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-56.3,112.69999999999999,112.69999999999999);


(lib.brillo_temas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD90A").ss(2,1,1).p("AG1AAQAAC1iACAQiACAi1AAQi0AAiAiAQiAiAAAi1QAAi0CAiAQCAiAC0AAQC1AACACAQCACAAAC0g");
	this.shape.setTransform(43.65,43.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.brillo_temas, new cjs.Rectangle(-1,-1,89.3,89.3), null);


(lib.mc_brillo_temas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.brillo_temas();
	this.instance.parent = this;
	this.instance.setTransform(43.6,43.6,1,1,0,0,0,43.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8857,scaleY:0.8857,x:43.65,y:43.65,alpha:0},15).to({scaleX:1,scaleY:1,x:43.6,y:43.6,alpha:1},14).wait(1));

	// Layer_1
	this.instance_1 = new lib.brillo_temas();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.6,43.6,1,1,0,0,0,43.6,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2062,scaleY:1.2062,alpha:0},15).to({scaleX:1,scaleY:1,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-10.2,107.7,107.7);


(lib.btn_cerrar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(26,26);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Símbolo1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("ABThSIilCl");
	this.shape.setTransform(25.75,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8,1,1).p("AhShSIClCl");
	this.shape_1.setTransform(25.75,26.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2DCCCD").s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBNhMBqAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMg");
	this.shape_2.setTransform(26,26);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn_cerrar, new cjs.Rectangle(0,0,52,52), null);


// stage content:
(lib.temario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.brillo1.visible = false;
		this.brillo2.visible = false;
		this.brillo3.visible = false;
		this.brillo4.visible = false;
		this.brillo5.visible = false;
		
		this.palomita1.visible = false;
		this.palomita2.visible = false;
		this.palomita3.visible = false;
		this.palomita4.visible = false;
		this.palomita5.visible = false;
	}
	this.frame_24 = function() {
		this.stop();
		
		
		this.cerrar_btn.addEventListener("click",hazC.bind(this));
		function hazC(){
			window.parent.HazCerrar();
		}
		
		
		var totales_ = [];
		var correctas_ = [];
		
		if(window.parent){
			totales1_ = String(window.parent.getCalifTotales(32)); // la lamina de la evaluación es la 32
			correctas1_ = String(window.parent.getCalifCorrectas(32)); // la lamina de la evaluación es la 32
			console.log("totales1_::: " + totales1_);
			console.log("correctas1_::: " + correctas1_);
			if(totales1_!=null && totales1_!="" && totales1_!="undefined" && totales1_!=undefined){
				totales_ = totales1_.split(",");
			}
			if(correctas1_!=null && correctas1_!="" && correctas1_!="undefined"  && correctas1_!=undefined){
				correctas_ = correctas1_.split(",");
			}
		}
		console.log("totales_::: " + totales_.length);
		console.log("correctas_::: " + correctas_.length);
		if(totales_.length>0 && correctas_.length>0){
			for(var i=1;i<=5;i++){
				var total_ = parseInt(totales_[i-1]);
				var maximo_ = parseInt(correctas_[i-1]);
				var valor_ = 0;
				if(total_>0){
					valor_ = maximo_/total_;
				}
				console.log("TEMA"+i+" :: " + valor_);
				this["palomita"+i].visible = valor_>=0.7 || totales_[i-1]==0;
				this["b"+i].visible = true; //valor_<0.8 && totales_[i-1]>0;
				this["oscuro"+i].visible = false;
				this["brillo"+i].visible = valor_<0.7 && totales_[i-1]>0;
				
				this["b"+i].id = i;
				if(this["b"+i].hasEventListener("click")== false){
					this["b"+i].addEventListener("click",hazClick1.bind(this));
				}
				
			}
			this["b6"].id = 6;
			this["b6"].visible = window.parent.getStatusByTitle("t6");
			this["oscuro6"].visible = !window.parent.getStatusByTitle("t6");	
			if(this["b6"].hasEventListener("click")== false){
				this["b6"].addEventListener("click",hazClick1.bind(this));
			}
		}else{
			for(var i=1;i<=5;i++){
				this["palomita"+i].visible = false;
				this["b"+i].visible = window.parent.getStatusByTitle("t"+i);
				this["oscuro"+i].visible = !window.parent.getStatusByTitle("t"+i);
				this["brillo"+i].visible = false;		
				this["b"+i].id = i;
				if(this["b"+i].hasEventListener("click")== false){
					this["b"+i].addEventListener("click",hazClick1.bind(this));
				}
				
			}
			this["b6"].id = 6;
			this["b6"].visible = window.parent.getStatusByTitle("t6");
			this["oscuro6"].visible = !window.parent.getStatusByTitle("t6");	
			if(this["b6"].hasEventListener("click")== false){
				this["b6"].addEventListener("click",hazClick1.bind(this));
			}
		}
		
		
		
		function hazClick1(e){
			if(window.parent){
				window.parent.irATitle("t"+e.currentTarget.id);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1).call(this.frame_24).wait(2));

	// botones
	this.b6 = new lib.Btn_1();
	this.b6.name = "b6";
	this.b6.parent = this;
	this.b6.setTransform(855.5,363.3);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.b5 = new lib.Btn_1();
	this.b5.name = "b5";
	this.b5.parent = this;
	this.b5.setTransform(718.5,363.3);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.b4 = new lib.Btn_1();
	this.b4.name = "b4";
	this.b4.parent = this;
	this.b4.setTransform(578.15,360.3);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.b3 = new lib.Btn_1();
	this.b3.name = "b3";
	this.b3.parent = this;
	this.b3.setTransform(441.15,363.3);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.b2 = new lib.Btn_1();
	this.b2.name = "b2";
	this.b2.parent = this;
	this.b2.setTransform(303.7,363.3);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.b1 = new lib.Btn_1();
	this.b1.name = "b1";
	this.b1.parent = this;
	this.b1.setTransform(167.2,362.3);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Btn_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b5},{t:this.b6}]},23).wait(3));

	// brillo
	this.brillo5 = new lib.mc_brillo_temas();
	this.brillo5.name = "brillo5";
	this.brillo5.parent = this;
	this.brillo5.setTransform(717.6,361.5,1,1,0,0,0,43.6,43.6);

	this.brillo4 = new lib.mc_brillo_temas();
	this.brillo4.name = "brillo4";
	this.brillo4.parent = this;
	this.brillo4.setTransform(579.1,361.5,1,1,0,0,0,43.6,43.6);

	this.brillo3 = new lib.mc_brillo_temas();
	this.brillo3.name = "brillo3";
	this.brillo3.parent = this;
	this.brillo3.setTransform(443.1,361.5,1,1,0,0,0,43.6,43.6);

	this.brillo2 = new lib.mc_brillo_temas();
	this.brillo2.name = "brillo2";
	this.brillo2.parent = this;
	this.brillo2.setTransform(304.65,361.5,1,1,0,0,0,43.6,43.6);

	this.brillo1 = new lib.mc_brillo_temas();
	this.brillo1.name = "brillo1";
	this.brillo1.parent = this;
	this.brillo1.setTransform(167.15,361.5,1,1,0,0,0,43.6,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.brillo1},{t:this.brillo2},{t:this.brillo3},{t:this.brillo4},{t:this.brillo5}]},23).wait(3));

	// bienMAL
	this.palomita5 = new lib.paloma_tache();
	this.palomita5.name = "palomita5";
	this.palomita5.parent = this;
	this.palomita5.setTransform(747.9,394.85,1,1,0,0,0,17.5,17.5);

	this.palomita4 = new lib.paloma_tache();
	this.palomita4.name = "palomita4";
	this.palomita4.parent = this;
	this.palomita4.setTransform(610.9,394.85,1,1,0,0,0,17.5,17.5);

	this.palomita3 = new lib.paloma_tache();
	this.palomita3.name = "palomita3";
	this.palomita3.parent = this;
	this.palomita3.setTransform(477.4,394.85,1,1,0,0,0,17.5,17.5);

	this.palomita2 = new lib.paloma_tache();
	this.palomita2.name = "palomita2";
	this.palomita2.parent = this;
	this.palomita2.setTransform(335.45,394.85,1,1,0,0,0,17.5,17.5);

	this.palomita1 = new lib.paloma_tache();
	this.palomita1.name = "palomita1";
	this.palomita1.parent = this;
	this.palomita1.setTransform(190.5,394.85,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.palomita1},{t:this.palomita2},{t:this.palomita3},{t:this.palomita4},{t:this.palomita5}]},23).wait(3));

	// CERRAr
	this.cerrar_btn = new lib.btn_cerrar();
	this.cerrar_btn.name = "cerrar_btn";
	this.cerrar_btn.parent = this;
	this.cerrar_btn.setTransform(968.05,38.9,1,1,0,0,0,20.6,20.6);

	this.timeline.addTween(cjs.Tween.get(this.cerrar_btn).wait(26));

	// sombras
	this.oscuro6 = new lib.Clip_oscuro();
	this.oscuro6.name = "oscuro6";
	this.oscuro6.parent = this;
	this.oscuro6.setTransform(855.4,363.3);

	this.oscuro5 = new lib.Clip_oscuro();
	this.oscuro5.name = "oscuro5";
	this.oscuro5.parent = this;
	this.oscuro5.setTransform(717.6,363.3);

	this.oscuro4 = new lib.Clip_oscuro();
	this.oscuro4.name = "oscuro4";
	this.oscuro4.parent = this;
	this.oscuro4.setTransform(578.5,363.3);

	this.oscuro3 = new lib.Clip_oscuro();
	this.oscuro3.name = "oscuro3";
	this.oscuro3.parent = this;
	this.oscuro3.setTransform(442.65,363.3);

	this.oscuro2 = new lib.Clip_oscuro();
	this.oscuro2.name = "oscuro2";
	this.oscuro2.parent = this;
	this.oscuro2.setTransform(304.2,363.3);

	this.oscuro1 = new lib.Clip_oscuro();
	this.oscuro1.name = "oscuro1";
	this.oscuro1.parent = this;
	this.oscuro1.setTransform(166.4,363.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.oscuro1},{t:this.oscuro2},{t:this.oscuro3},{t:this.oscuro4},{t:this.oscuro5},{t:this.oscuro6}]}).wait(26));

	// Layer_4
	this.instance = new lib.menu2();
	this.instance.parent = this;
	this.instance.setTransform(78,232,0.5032,0.5032);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

	// Layer_12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/FFtIAArZMA+LAAAIAALZg");
	mask.setTransform(249.775,71.55);

	// FlashAICB
	this.instance_1 = new lib.titulo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-194.7,55.75,1,1,0,0,0,108.3,20);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:201.3},10).to({x:162.75},10).wait(6));

	// Layer_1
	this.instance_2 = new lib.back01();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,319,512,319);
// library properties:
lib.properties = {
	id: 'F66B6B75B65349AB80F55BCBB9D3C02C',
	width: 1024,
	height: 638,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back01.jpg?1570244496637", id:"back01"},
		{src:"images/menu2.png?1570244496637", id:"menu2"}
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
an.compositions['F66B6B75B65349AB80F55BCBB9D3C02C'] = {
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