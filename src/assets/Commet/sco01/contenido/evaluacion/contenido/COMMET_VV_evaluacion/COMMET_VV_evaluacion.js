(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.an_el2 = function() {
	this.initialize(img.an_el2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,597);


(lib.an_ella2 = function() {
	this.initialize(img.an_ella2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,568);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,754,236);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1037,781);


(lib.candado = function() {
	this.initialize(img.candado);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,130);


(lib.estrella_vacia = function() {
	this.initialize(img.estrella_vacia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,61);


(lib.fondo1 = function() {
	this.initialize(img.fondo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2136,1332);


(lib.fondo2 = function() {
	this.initialize(img.fondo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2136,1332);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,840,837);


(lib.insignia = function() {
	this.initialize(img.insignia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,405);


(lib.laberinto2 = function() {
	this.initialize(img.laberinto2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1325,1013);


(lib.oportunidades = function() {
	this.initialize(img.oportunidades);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,210);


(lib.oportunidades_no = function() {
	this.initialize(img.oportunidades_no);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,223);


(lib.perfil1 = function() {
	this.initialize(img.perfil1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,364,363);


(lib.perfil2 = function() {
	this.initialize(img.perfil2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,361);


(lib.pin1 = function() {
	this.initialize(img.pin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,225);


(lib.pin2 = function() {
	this.initialize(img.pin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,225);


(lib.pin3 = function() {
	this.initialize(img.pin3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,225);


(lib.pin4 = function() {
	this.initialize(img.pin4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,224);


(lib.pin5 = function() {
	this.initialize(img.pin5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,225);


(lib.puntaje = function() {
	this.initialize(img.puntaje);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,214);


(lib.titulo2_1 = function() {
	this.initialize(img.titulo2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1114,518);// helper functions:

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

	// Layer_3
	this.instance = new lib.titulo2_1();
	this.instance.parent = this;
	this.instance.setTransform(-19,-7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulo, new cjs.Rectangle(-19,-7,557,259), null);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		
		var displaySeconds = '00';
		var displayMinutes = '00';
		
		var seconds = 0;
		var MAX_SECONDS = 60;
		
		var intervalId = 0;
		
		
		function init() {
			reset();
			renderTimer();
		}
		
		function tick() {
			if(seconds > 0) seconds--;
			else {
				stopTimer();
				that.parent.questionTimeout();
			}
			renderTimer();
		}
		
		function timer() {
			intervalId = setInterval(tick, 1000);
		}
		
		function stopTimer() {
			clearInterval(intervalId)
		}
		
		function reset() {
			seconds = MAX_SECONDS;
		}
		
		function renderTimer() {
			that.sec_txt.text = formatNumber(seconds % 60);;
			that.min_txt.text = formatNumber(Math.floor(seconds / 60));
		}
		
		function formatNumber(number) {
			return (number < 10) ? '0' + number : number;
		}
		
		this.init = function() {
			init();
		}
		
		this.start = function() {
			timer();
		}
		
		this.stop = function() {
			stopTimer()
		}
		
		this.reset = function() {
			reset();
		}
		
		this.isFinished = function() {
			return seconds == 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// points
	this.text = new cjs.Text(":", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 6;
	this.text.parent = this;
	this.text.setTransform(45.4,1.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// texts
	this.sec_txt = new cjs.Text("00", "20px 'Arial'", "#FFFFFF");
	this.sec_txt.name = "sec_txt";
	this.sec_txt.lineHeight = 22;
	this.sec_txt.lineWidth = 36;
	this.sec_txt.parent = this;
	this.sec_txt.setTransform(52.35,2);

	this.min_txt = new cjs.Text("00", "20px 'Arial'", "#FFFFFF");
	this.min_txt.name = "min_txt";
	this.min_txt.textAlign = "right";
	this.min_txt.lineHeight = 22;
	this.min_txt.lineWidth = 36;
	this.min_txt.parent = this;
	this.min_txt.setTransform(38.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.min_txt},{t:this.sec_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timer, new cjs.Rectangle(0,0,90.8,26.4), null);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBhIAAgdIAZAAIAAAdgAgFAqIgHiKIAYAAIgGCKg");
	this.shape.setTransform(250.4755,54.8299,1.0636,1.0631);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBcQgRgIgOgOQgNgOgHgRQgHgUAAgTQAAgSAHgTQAIgTANgNQANgOASgIQASgIAVAAQAVAAATAIQATAJAMANQANANAHASQAIASAAAUQAAAUgIASQgGARgOAPQgNAOgSAIQgTAIgVAAQgVAAgTgIgAgehJQgNAGgLALQgKAKgFAQQgGAOAAAQQAAARAGAOQAFAOAKALQALALAOAGQANAHAQAAQARAAAOgGQAOgHAKgKQAJgLAGgPQAGgPAAgQQAAgPgGgPQgGgQgKgJQgJgLgPgHQgOgGgQAAQgQAAgOAGg");
	this.shape_1.setTransform(233.9902,54.8299,1.0636,1.0631);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBhIAAitIhBAAIAAgUICXAAIAAAUIhBAAIAACtg");
	this.shape_2.setTransform(213.357,54.8299,1.0636,1.0631);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKBhIAAjBIAVAAIAADBg");
	this.shape_3.setTransform(199.5572,54.8299,1.0636,1.0631);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA9BhIg9hUIg9BUIgZAAIBKhiIhIhfIAaAAIA6BPIA7hPIAaAAIhHBfIBJBig");
	this.shape_4.setTransform(184.614,54.8299,1.0636,1.0631);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGB9IAAjAICLAAIAAAUIh1AAIAABBIBpAAIAAAUIhpAAIAABDIB3AAIAAAUgAgPhUIAZgoIAXAKIggAeg");
	this.shape_5.setTransform(164.6987,51.8001,1.0636,1.0631);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBcQgRgIgOgOQgNgNgGgSQgIgSABgVQgBgUAIgRQAHgTAMgNQAPgPARgHQASgIAVAAQAWAAASAIQAUAJAMANQANAOAGARQAIARAAAVQAAATgIATQgHATgMANQgNANgTAJQgSAIgWAAQgVAAgTgIgAgehJQgNAGgLALQgJAKgHAQQgFAPAAAPQAAAQAFAPQAHAQAKAJQAKALAOAGQANAHAQAAQARAAAOgGQAOgHAJgKQAKgLAHgPQAFgPAAgQQAAgPgFgPQgHgOgKgLQgKgLgOgHQgOgGgQAAQgPAAgPAGg");
	this.shape_6.setTransform(132.9778,54.8299,1.0636,1.0631);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA4BhIAAhXIhvAAIAABXIgWAAIAAjBIAWAAIAABWIBvAAIAAhWIAVAAIAADBg");
	this.shape_7.setTransform(109.3134,54.8299,1.0636,1.0631);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcBcQgSgIgMgNQgOgOgHgSQgHgRAAgWQAAgVAHgRQAHgSAOgOQALgNATgIQATgIATAAQANAAAMACQAJACAKAEQAJAEAIAGQAJAGAGAHIgPAQQgLgLgQgIQgNgIgVAAQgOAAgPAGQgNAHgKAKQgJAKgHAPQgFAPgBAQQABAQAFAPQAHAPAJALQAJAKAOAHQAPAGAOAAQAUAAAOgHQAPgIAOgNIAOAOQgIAIgIAGQgHAGgKAFQgGADgOAEQgMACgMAAQgTAAgTgIg");
	this.shape_8.setTransform(87.723,54.8299,1.0636,1.0631);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBdQgOgFgLgLQgLgLgGgQQgFgPAAgVIAAhvIAVAAIAABuQAAAfAQARQAQARAbAAQAaAAAQgQQAQgQAAggIAAhvIAWAAIAABuQAAAUgGARQgGAPgLAMQgLALgOAFQgPAFgSAAQgQAAgQgFg");
	this.shape_9.setTransform(65.2817,54.9894,1.0636,1.0631);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABHBhIAAicIhHBnIAAAAIhGhnIAACcIgWAAIAAjBIAXAAIBFBpIBHhpIAWAAIAADBg");
	this.shape_10.setTransform(41.378,54.8299,1.0636,1.0631);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBhIAGiKIALAAIAHCKgAgLhDIAAgdIAYAAIAAAdg");
	this.shape_11.setTransform(24.6534,54.8299,1.0636,1.0631);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZBeIAAgqIApAAIAAAqgAgQAfIgGgqIAAgCQAYAAALgGQALgHAAgLQAAgKgGgEQgGgFgMAAQgKAAgKAEQgKAFgJAJIgZgaQAMgOAQgHQAPgIAWAAQAPAAALAEQAKADAKAHQAJAIAEAKQAEAKABANQAAANgFAJQgEAKgHAGQgFAEgLAFIgVAGIgCAQg");
	this.shape_12.setTransform(267.1469,28.0661,1.0636,1.0631);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhFBdIAAi5ICKAAIAAAkIhjAAIAAAmIBXAAIAAAkIhXAAIAAAnIBkAAIAAAkg");
	this.shape_13.setTransform(250.6616,28.199,1.0636,1.0631);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmBWQgOgIgKgMIAZgcQAJAIAIAFQAIAFAJAAQALAAAHgHQAGgHAAgRIAAh2IAqAAIAAB4QAAARgEANQgGAMgIAIQgIAJgNAEQgMAEgNAAQgWAAgPgIg");
	this.shape_14.setTransform(231.9694,28.3585,1.0636,1.0631);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA3BeIgQgqIhOAAIgRAqIgqAAIBQi6IAkAAIBQC6gAgZAQIAxAAIgYg8g");
	this.shape_15.setTransform(213.7026,28.1193,1.0636,1.0631);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhMBdIAAgfIBlh2IhiAAIAAgkICXAAIAAAfIhmB2IBmAAIAAAkg");
	this.shape_16.setTransform(192.5376,28.199,1.0636,1.0631);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBdIAAi5IApAAIAAC5g");
	this.shape_17.setTransform(177.8072,28.199,1.0636,1.0631);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhVBdIAAi5IBJAAQAWAAARAHQASAHANANQAOAMAGARQAIAQgBAUIAAAAQABAVgIAQQgGAQgOANQgNAMgSAIQgRAHgWAAgAgrA4IAfAAQAMAAAKgEQALgFAHgGQAGgHAFgLQAEgLAAgLIAAgBQAAgLgEgLQgFgLgGgGQgIgIgKgEQgKgEgMAAIgfAAg");
	this.shape_18.setTransform(162.4386,28.199,1.0636,1.0631);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAwBdIhZh1IAAB1IgpAAIAAi5IAmAAIBWBxIAAhxIApAAIAAC5g");
	this.shape_19.setTransform(139.8112,28.199,1.0636,1.0631);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFBdIAAi5ICKAAIAAAkIhjAAIAAAmIBYAAIAAAkIhYAAIAAAnIBkAAIAAAkg");
	this.shape_20.setTransform(119.63,28.199,1.0636,1.0631);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBdIgmg8IggAAIAAA8IgpAAIAAi5IBUAAQAhAAASAQQATARAAAcIAAABQAAAXgLANQgMAOgRAHIAtBCgAgmgCIAoAAQAPAAAIgHQAIgHAAgMIAAAAQAAgNgIgHQgJgHgPAAIgnAAg");
	this.shape_21.setTransform(100.2465,28.199,1.0636,1.0631);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhJBdIAAi5IBMAAQAQAAAOAFQAMAEAJAJQAKAJAFALQAEAMAAAOIAAABQABAQgGALQgGANgLAIQgJAHgOAFQgPAEgOAAIgeAAIAAA4gAgfABIAfAAQAPAAAJgHQAIgIAAgMIAAgBQAAgOgIgHQgKgHgOAAIgfAAg");
	this.shape_22.setTransform(80.6502,28.199,1.0636,1.0631);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA4BeIgRgqIhOAAIgRAqIgpAAIBPi6IAlAAIBPC6gAgYAQIAwAAIgYg8g");
	this.shape_23.setTransform(59.3257,28.1193,1.0636,1.0631);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag7BKQgVgVAAgpIAAhpIApAAIAABoQAAAWALAMQAKAMASAAQATAAAKgMQALgKAAgXIAAhpIApAAIAABnQAAAVgGAQQgFAQgLAKQgLALgPAFQgPAFgSAAQgkAAgXgUg");
	this.shape_24.setTransform(29.014,28.3585,1.0636,1.0631);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUBdIAAiTIg4AAIAAgmICZAAIAAAmIg4AAIAACTg");
	this.shape_25.setTransform(9.1785,28.199,1.0636,1.0631);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#222C4F").s().p("AASAzIgVghIgSAAIAAAhIgWAAIAAhlIAuAAQASAAAKAJQAKAJAAAPIAAABQAAANgGAGQgGAIgKADIAZAlgAgVgBIAWAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgEgDgJAAIgWAAg");
	this.shape_26.setTransform(270.3642,8.9833,1.0636,1.0631);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#222C4F").s().p("AAeAzIgJgXIgqAAIgJAXIgXAAIAshlIATAAIAsBlgAgNAJIAaAAIgNggg");
	this.shape_27.setTransform(258.2661,8.9567,1.0636,1.0631);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#222C4F").s().p("AgqAzIAAhlIAuAAQAPAAAKAHQAJAIAAAMIgBAIIgDAFIgFAFIgFADQAJADAFAGQAFAFAAALIAAAAQAAAHgCAFQgDAFgFAEQgEADgIACQgGACgKAAgAgUAgIAZAAQAIAAAEgDQAEgDAAgFIAAgBQAAgFgEgDQgDgDgJAAIgZAAgAgUgJIAUAAQAHAAAEgDQAFgBAAgHIAAAAQAAgFgEgDQgEgCgHAAIgVAAg");
	this.shape_28.setTransform(246.8594,8.9833,1.0636,1.0631);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#222C4F").s().p("AgVAxQgJgDgIgIQgHgIgEgJQgEgIAAgNIAAAAQAAgLAEgJQAEgJAHgHQAIgIAJgEQAJgDAMAAQANAAAJADQAJAEAIAHQAIAIADAJQAEAIAAAMIAAAAQAAAMgEAJQgDAIgIAIQgIAIgJAEQgJADgNAAQgMAAgJgDgAgMgdQgFADgEAFQgEADgDAGQgCAGABAGIAAAAQgBAHACAGQACAFAFAFQAEAEAFADQAHACAFAAQAGAAAHgCQAFgCAEgFQAEgEADgGQACgFAAgIIAAAAQAAgGgCgGQgDgFgEgEQgEgFgGgDQgGgCgGAAQgGAAgGACg");
	this.shape_29.setTransform(234.389,8.9833,1.0636,1.0631);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#222C4F").s().p("AASAzIgVghIgRAAIAAAhIgXAAIAAhlIAtAAQATAAAKAJQAKAJAAAPIAAABQAAANgGAGQgFAIgLADIAZAlgAgUgBIAVAAQAIAAAFgDQAEgEAAgHQAAgHgEgEQgFgDgIAAIgVAAg");
	this.shape_30.setTransform(222.5834,8.9833,1.0636,1.0631);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#222C4F").s().p("AgnAzIAAhlIAoAAQAIAAAJACQAIAEAEAEQAFAFADAGQACAHAAAIQAAAIgDAGQgEAHgFAFQgGAEgHACQgIADgHAAIgRAAIAAAegAgRAAIARAAQAIABAFgEQAFgFAAgGIAAAAQAAgHgFgFQgFgDgIAAIgRAAg");
	this.shape_31.setTransform(211.868,8.9833,1.0636,1.0631);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#222C4F").s().p("AAdAzIAAhBIgdAqIAAAAIgcgqIAABBIgWAAIAAhlIAYAAIAaArIAagrIAZAAIAABlg");
	this.shape_32.setTransform(199.5572,8.9833,1.0636,1.0631);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#222C4F").s().p("AgVAxQgJgEgIgHQgGgHgFgKQgEgLAAgKIAAAAQAAgJAEgLQAFgKAGgGQAIgIAJgEQAKgDALAAQANAAAJADQAJAEAIAHQAIAJADAIQAEAKAAAKIAAAAQAAAKgEALQgFAKgGAGQgHAHgKAFQgJADgNAAQgMAAgJgDgAgMgdQgEADgFAFQgEADgCAGQgDAHAAAFIAAAAQAAAGADAHQACAFAEAFQAEAEAGADQAGACAFAAQAGAAAHgCQAFgDAEgEQAFgFACgFQACgFAAgIIAAAAQAAgGgCgGQgCgEgFgFQgFgFgFgDQgGgCgGAAQgFAAgHACg");
	this.shape_33.setTransform(186.236,8.9833,1.0636,1.0631);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#222C4F").s().p("AgPAxQgJgFgHgGQgGgGgFgLQgEgLAAgKIAAAAQAAgJAEgLQAEgKAHgGQAHgIAKgEQAIgDAMAAIANABIALACIAJAGIAHAGIgOAQQgGgEgGgEQgGgDgIAAQgGAAgFACQgFADgEAFQgEADgCAGQgDAHAAAFIAAAAQAAAGADAHQACAFAEAFQAEAFAFACQAFACAGAAQAJAAAGgDQAIgFAEgEIAOAOIgIAIIgJAGIgLADIgOABQgLAAgJgDg");
	this.shape_34.setTransform(174.0581,8.9833,1.0636,1.0631);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#222C4F").s().p("AAeAzIgJgXIgqAAIgJAXIgXAAIAshlIATAAIAsBlgAgNAJIAaAAIgNggg");
	this.shape_35.setTransform(157.493,8.9567,1.0636,1.0631);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#222C4F").s().p("AASAzIgVghIgSAAIAAAhIgWAAIAAhlIAtAAQATAAAJAJQALAJAAAPIAAABQAAANgGAGQgGAIgKADIAZAlgAgVgBIAWAAQAIAAAEgDQAFgEAAgHQAAgHgFgEQgEgDgIAAIgWAAg");
	this.shape_36.setTransform(146.166,8.9833,1.0636,1.0631);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#222C4F").s().p("AAeAzIgJgXIgqAAIgJAXIgXAAIAshlIATAAIAsBlgAgNAJIAbAAIgOggg");
	this.shape_37.setTransform(134.0414,8.9567,1.0636,1.0631);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#222C4F").s().p("AgnAzIAAhlIAoAAQAIAAAJACQAIAEAEAEQAFAFADAGQACAFAAAKQAAAIgDAGQgDAHgGAFQgEAEgJACQgIADgHAAIgRAAIAAAegAgRAAIARAAQAIABAFgEQAFgEAAgHIAAAAQAAgIgFgEQgEgDgJAAIgRAAg");
	this.shape_38.setTransform(123.1664,8.9833,1.0636,1.0631);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#222C4F").s().p("AgVAxQgJgEgIgHQgIgJgDgIQgEgLAAgKIAAAAQAAgJAEgLQAFgKAGgGQAHgIAKgEQAJgDAMAAQANAAAJADQAKAFAHAGQAHAHAEAKQAEAKAAAKIAAAAQAAAKgEALQgFAKgGAGQgIAIgJAEQgKADgMAAQgMAAgJgDgAgMgdQgFADgEAFQgFAEgCAFQgCAGAAAGIAAAAQAAAHACAGQACADAFAHQAFAFAFACQAGACAFAAQAGAAAGgCQAFgCAFgFQAEgEACgGQADgHAAgGIAAAAQAAgFgDgHIgGgJQgEgFgGgDQgGgCgGAAQgFAAgHACg");
	this.shape_39.setTransform(106.362,8.9833,1.0636,1.0631);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#222C4F").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgfAAIAABQg");
	this.shape_40.setTransform(94.7691,8.9833,1.0636,1.0631);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#222C4F").s().p("AgTAxQgJgDgLgKIANgPQAHAEAIAFQAHACAIAAQAHAAADgCQAEgCAAgFIAAAAIAAgEIgEgEIgGgCIgXgHQgHgDgEgDQgEgDgDgFQgCgFAAgIQAAgGACgGQADgFAFgFQAFgFAGgBQAHgCAHAAQALAAAJADQAJADAIAHIgLARIgOgIQgHgDgFABQgGgBgEADQgDACAAAFIABAEIADADIAHADIAYAIIAKAEQAEAEACAFQACAEAAAIIAAAAQAAAJgCAEQgEAHgEADQgFAEgHADQgJABgGAAQgKAAgMgDg");
	this.shape_41.setTransform(84.6652,8.9833,1.0636,1.0631);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#222C4F").s().p("AgKAzIAAhlIAVAAIAABlg");
	this.shape_42.setTransform(77.2202,8.9833,1.0636,1.0631);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#222C4F").s().p("AgkAzIAAhlIAXAAIAABRIAxAAIAAAUg");
	this.shape_43.setTransform(70.2273,8.9833,1.0636,1.0631);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#222C4F").s().p("AgTAxQgKgEgKgJIANgPQAGAEAIAFQAIACAHAAQAIAAADgCQAEgCAAgFIAAAAIgBgEIgDgEIgegJIgKgGQgFgDgCgFQgDgFAAgIQAAgHADgFQACgFAFgFQAHgFAFgBQAGgCAIAAQALAAAJADQAJADAIAHIgMARIgNgIQgIgDgEABQgGgBgEADQgDACAAAFIABAEIADADIAHADIAXAIIALAEQAFAGABADQACAFAAAHIAAAAQAAAIgDAFQgDAHgEADQgFAEgHADQgJABgGAAQgKAAgMgDg");
	this.shape_44.setTransform(55.3639,8.9833,1.0636,1.0631);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#222C4F").s().p("AAfBEIgKgXIgqAAIgJAXIgXAAIArhmIAUAAIAsBmgAgNAZIAaAAIgNgggAgJgpIAQgaIATAIIgTASg");
	this.shape_45.setTransform(44.3826,7.2026,1.0636,1.0631);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#222C4F").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgfAAIAABQg");
	this.shape_46.setTransform(33.2417,8.9833,1.0636,1.0631);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#222C4F").s().p("AgTAxQgJgDgLgKIANgPQAHAEAIAFQAHACAIAAQAHAAAEgCQADgCAAgFIAAAAIAAgEIgEgEIgGgCIgXgHIgLgGQgEgDgDgFQgCgFAAgIQAAgHADgFQACgFAFgFQAFgFAGgBQAHgCAHAAQALAAAJADQAJADAIAHIgLARIgOgIQgHgDgFABQgGgBgEADQgDACAAAFIABAEIADADIAHADIAYAIIAKAEQAEAEACAFQACAEAAAIIAAAAQAAAJgCAEQgEAHgEADQgFAEgHADQgJABgGAAQgKAAgMgDg");
	this.shape_47.setTransform(23.1378,8.9833,1.0636,1.0631);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#222C4F").s().p("AgmAzIAAhlIBMAAIAAAUIg2AAIAAAUIAvAAIAAATIgvAAIAAAWIA3AAIAAAUg");
	this.shape_48.setTransform(13.353,8.9833,1.0636,1.0631);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#222C4F").s().p("AgOAyQgHgDgEgDQgFgEgCgGQgCgGAAgHQAAgHACgFQACgFAEgDQADgCAGgDIALgDIACgJIAOAAIADAXIgBAAQgMABgGADQgGAEAAAGQAAAEADAEQAEACAFAAQAGAAAGgCQAFgCAFgGIANAPQgFAGgKAFQgIAFgMAAQgFAAgJgCgAgIgbIAAgYIAXAAIAAAYg");
	this.shape_49.setTransform(3.834,9.063,1.0636,1.0631);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text2, new cjs.Rectangle(0.1,0,275,65.5), null);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(310.675,53.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvBNQgUgMgMgUQgLgUgBgZIAAAAQABgYALgUQAMgUAVgMQAUgMAaAAQAbAAAVAMQAUAMAMAUQAMATgBAZIAAAAQAAAZgMAUQgLAUgVAMQgVALgaABQgagBgVgLgAgaguQgMAHgHANQgGAMAAAOIAAAAQAAAPAHAMQAGANAMAGQAMAIAOAAQAPAAAMgIQAMgGAGgMQAHgNAAgPIAAAAQAAgOgHgMQgHgNgLgGQgMgIgPAAQgOAAgMAHg");
	this.shape_1.setTransform(297.7,46.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBzIAAirIAkAAIAACrgAgchGIAcgsIAfAPIgfAdg");
	this.shape_2.setTransform(284.4,43.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBWIAAirICDAAIAAAiIhdAAIAAAlIBRAAIAAAhIhRAAIAABDg");
	this.shape_3.setTransform(271.475,46.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0BXIgQgnIhIAAIgQAnIgmAAIBKitIAhAAIBKCtgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_4.setTransform(253.125,46.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBRQgUgHgPgNIAWgbQAMAKANAFQAMAGAOAAQALAAAHgEQAGgFABgHIAAgBQgBgEgCgEQgDgDgIgEIgUgGQgRgFgNgFQgNgHgHgIQgHgLAAgQIAAgBQAAgQAHgLQAIgMAOgGQANgGASgBQASABAQAFQAQAGANAKIgUAdQgLgIgLgFQgLgEgLAAQgLAAgFAEQgGAFABAGQgBAGADAEQAEADAHADIAXAHQARAEAMAHQANAFAFAKQAHAJAAAQIAAAAQAAARgIAMQgIAMgOAGQgOAHgTAAQgTAAgSgIg");
	this.shape_5.setTransform(235.7,46.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBWIAAirICBAAIAAAhIhbAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_6.setTransform(220.125,46.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOBWIAAirIBDAAQAaAAAVAMQAUAKALATQAMAUABAYIAAAAQgBAYgMAUQgLATgUALQgVAMgaAAgAgpA0IAeAAQAOgBAMgGQALgGAHgLQAGgNAAgPIAAAAQAAgPgGgLQgHgMgLgGQgMgHgOAAIgeAAg");
	this.shape_7.setTransform(202.25,46.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBOQgRgIgJgRQgJgRAAgZIAAhhIAmAAIAABgQAAAVAKAKQAJALARAAQARABAKgLQAKgKAAgVIAAhhIAmAAIAABgQAAAagKARQgIARgSAIQgQAJgXAAQgXAAgQgJg");
	this.shape_8.setTransform(175.55,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBWIAAiJIg0AAIAAgiICNAAIAAAiIg0AAIAACJg");
	this.shape_9.setTransform(158.275,46.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0BXIgQgnIhIAAIgQAnIgmAAIBKitIAhAAIBKCtgAAWAPIgWg3IgWA3IAsAAg");
	this.shape_10.setTransform(133.175,46.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhHBWIAAgdIBehtIhbAAIAAghICMAAIAAAdIheBtIBeAAIAAAhg");
	this.shape_11.setTransform(114.775,46.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBBWIAAirICBAAIAAAhIhbAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_12.setTransform(98.175,46.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSBWIAAirIAlAAIAACrg");
	this.shape_13.setTransform(85.45,46.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhDBWIAAirIBFAAQAVAAAPAHQAOAIAIANQAIAOAAARIAAABQAAAUgJAMQgJANgQAIQgQAHgSAAIgdAAIAAAzgAgdAAIAdAAQAOAAAIgGQAIgHAAgMIAAAAQAAgNgIgGQgJgHgNAAIgdAAg");
	this.shape_14.setTransform(73.725,46.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAwBWIAAhwIgwBJIAAAAIgwhIIAABvIglAAIAAirIApAAIAsBIIAthIIApAAIAACrg");
	this.shape_15.setTransform(54.175,46.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhBBWIAAirICBAAIAAAhIhbAAIAAAjIBQAAIAAAhIhQAAIAAAkIBdAAIAAAig");
	this.shape_16.setTransform(35.625,46.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBWIAAhEIhChnIAsAAIApBFIAphFIArAAIhCBnIAABEg");
	this.shape_17.setTransform(10.8,46.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhBBYIAAivIB/AAIAAAVIhnAAIAAA2IBgAAIAAATIhgAAIAAA8IBrAAIAAAVg");
	this.shape_18.setTransform(275.275,15.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjBMQgNgNABgaIAVgDQABAUAGAIQAHAGAMAAQAIAAAGgDQAHgFACgGQACgHAAgQIAAh3IAYAAIAAB2QAAAXgGALQgFANgMAGQgLAGgPABQgXAAgMgOg");
	this.shape_19.setTransform(259.999,15.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4BYIgUg2IhKAAIgTA2IgZAAIBFivIAYAAIBICvgAgLgjIgUAzIA7AAIgSgwIgMglQgDARgGARg");
	this.shape_20.setTransform(246.25,15.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAtBYIhbiJIAACJIgXAAIAAivIAZAAIBbCJIAAiJIAXAAIAACvg");
	this.shape_21.setTransform(229.1,15.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsBPQgTgMgKgVQgKgVAAgXQAAgqAXgZQAYgZAkAAQAYAAAUALQAUAMAKAVQAKAVAAAZQAAAbgLAVQgLAWgTAKQgUALgXAAQgYAAgUgMgAgpg1QgSARAAAmQAAAhARASQARASAZAAQAaAAARgTQARgSAAgiQAAgVgHgQQgIgPgNgKQgOgIgSAAQgYAAgRARg");
	this.shape_22.setTransform(210.775,15.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBUQgQgHgJgOQgKgOAAgRIAWgDQACAOAGAIQAFAIAMAGQAMAFAOAAQAOAAAJgEQALgEAFgHQAFgGAAgJQAAgIgFgGQgFgHgLgDQgHgDgXgGQgYgGgKgEQgNgHgGgJQgGgLAAgMQAAgNAHgLQAIgMAPgGQAOgGASAAQASAAAPAHQAPAFAJANQAHAMABAQIgXABQgBgRgKgIQgLgJgUAAQgUABgKAHQgKAIAAALQAAAJAHAGQAHAGAbAHQAdAGAKAGQAPAFAIAMQAHAKAAAOQAAAOgIANQgIAMgPAHQgPAHgTAAQgXAAgQgHg");
	this.shape_23.setTransform(192.85,15.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAwBYIgXgkIgRgZQgGgJgFgCQgFgEgGgCIgMAAIgbAAIAABOIgYAAIAAivIBOAAQAXAAAMAFQAMAEAIANQAHAMAAAOQAAATgMAMQgMAMgaAEQAKAFAFAEQAKAJAJAOIAeAwgAg1gKIAxAAQAQABAIgDQAJgEAGgHQAEgIAAgIQAAgNgJgIQgJgHgUAAIg2AAg");
	this.shape_24.setTransform(176.7,15.45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhBBYIAAivIB/AAIAAAVIhnAAIAAA2IBgAAIAAATIhgAAIAAA8IBrAAIAAAVg");
	this.shape_25.setTransform(159.125,15.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhCBYIAAivIBCAAQARAAAJACQANACAJAGQAIAGAGALQAFALAAANQAAAWgOAPQgOAPgmABIgsAAIAABHgAgrgDIAtAAQAWAAAKgJQAJgIAAgQQAAgKgFgJQgGgHgJgCQgGgCgQAAIgsAAg");
	this.shape_26.setTransform(142.825,15.45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnBRQgQgIgHgRQgGgQAAgcIAAhkIAXAAIAABkQAAAXAEALQAEAKALAHQAKAFAPAAQAZABALgMQALgMAAghIAAhkIAXAAIAABkQAAAbgGAQQgGAPgQAKQgPAKgaAAQgXAAgQgJg");
	this.shape_27.setTransform(118.475,15.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLBYIAAiaIg6AAIAAgVICLAAIAAAVIg7AAIAACag");
	this.shape_28.setTransform(102.125,15.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AA4BYIgVg2IhJAAIgTA2IgZAAIBFivIAYAAIBICvgAgLgjIgTAzIA6AAIgSgwQgJgXgDgOQgDARgGARg");
	this.shape_29.setTransform(81.35,15.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhBBYIAAivIB/AAIAAAVIhnAAIAAA2IBgAAIAAATIhgAAIAAA8IBrAAIAAAVg");
	this.shape_30.setTransform(59.775,15.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgjBMQgNgNABgaIAVgDQABAUAGAIQAHAGAMAAQAIAAAGgDQAHgFACgGQACgHAAgQIAAh3IAYAAIAAB2QAAAXgGALQgFANgMAGQgLAGgPABQgXAAgMgOg");
	this.shape_31.setTransform(44.499,15.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLBYIAAivIAXAAIAACvg");
	this.shape_32.setTransform(35.55,15.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag2BYIAAivIAYAAIAACaIBVAAIAAAVg");
	this.shape_33.setTransform(25.7,15.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhBBYIAAivIB/AAIAAAVIhnAAIAAA2IBgAAIAAATIhgAAIAAA8IBrAAIAAAVg");
	this.shape_34.setTransform(10.525,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1, new cjs.Rectangle(0,0,316.4,61.7), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8580E").s().p("AwFD/IAAn9MAgLAAAIAAH9g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-25.5,206,51);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.insignia();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,212.2,194.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AT6BQQgHgCAAgHQAAgEADgDQADgDAEAAIAEABQAPAIASAAQAhAAAAggIAAgJQgPAUgWAAQgUAAgNgNQgPgOAAgWQAAgWAPgOQAOgOATAAQAWAAAPASIAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQADAEAAAFIAABIQAAAagNANQgOAPgeAAQgVAAgTgKgAUPgVQgJAIAAANIAAAAQAAAMAJAIQAJAIAMAAQANAAAJgIQAJgIAAgMIAAAAQAAgNgJgIQgJgIgNAAQgMAAgJAIgAWEAsQgQgQAAgXIAAAAQAAgWAQgQQAQgRAYAAQAYAAAQARQAQAPAAAWIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAWUgSQgIAJAAANIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgJQgJgKgOAAQgPAAgJAKgAN0AsQgQgQAAgXIAAAAQAAgWAQgQQAQgRAYAAQAYAAAQARQAQAPAAAWIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAOEgSQgIAJAAANIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgJQgJgKgOAAQgPAAgJAKgAMEAsQgPgQAAgXIAAAAQAAgWAPgQQAQgRAYAAQAVAAAQAOQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAANIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQAEAAADAEQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAHiAsQgQgQAAgXIAAAAQAAgWAQgQQAQgRAYAAQAYAAAQARQAQAPAAAWIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAHygSQgIAJAAANIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgJQgJgKgOAAQgPAAgJAKgAihAsQgQgQAAgXIAAAAQAAgWAQgQQAQgRAYAAQAYAAAQARQAQAPAAAWIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAiRgSQgIAJAAANIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgJQgJgKgOAAQgPAAgJAKgAkRAsQgPgQAAgXIAAAAQAAgWAPgQQAQgRAYAAQAVAAAQAOQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAANIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQAEAAADAEQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAo0AsQgPgQAAgXIAAAAQAAgWAPgQQAQgRAYAAQAVAAAQAOQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAANIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQAEAAADAEQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAwVAsQgQgQAAgXIAAAAQAAgWAQgQQAQgRAYAAQAYAAAQARQAQAPAAAWIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAwFgSQgIAJAAANIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgJQgJgKgOAAQgPAAgJAKgARtAcIAAg3IgEAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAEAAIAAgSQAAgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFIAAASIATAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAIgTAAIAAAzQAAANANAAIAGAAQAEAAADADQADADAAAEQAAAHgHACQgIADgIAAQgfAAAAgfgAJWAvQgEgDAAgGQAAgEADgDQACgDAFAAIAFACQAPAKAPAAQARAAAAgLIAAgBQAAgFgIgEIgQgGQgPgEgHgFQgLgHAAgOQAAgPALgJQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDACgEAAIgFgBQgOgHgLAAQgPAAAAAKIAAABQAAAFAHAEIARAGQAPAEAHAFQALAIAAANIAAAAQAAAQgLAJQgLAIgRAAQgWAAgTgMgACpAzQgMgJAAgPIAAgBQAAgQANgJQALgIAUAAQAPAAANAFIAAgDQAAgXgaAAQgMAAgLAEIgEABQgEAAgDgDQgDgDAAgEQAAgHAGgDQARgGARAAQAYAAALAMQAMALAAAWIAAAzQAAAFgEADQgDADgFAAQgFAAgDgDQgEgDAAgEIAAgEQgNAPgVAAQgQAAgKgIgAC8ANQgHAEA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EgEAAgFIAAgwQAAgagXAAQgKAAgHAHQgGAIAAAMIAAAvQAAAFgEAEQgDADgGAAQgFAAgDgDQgEgEAAgFIAAhSQAAgFAEgEQADgEAFAAQAGAAADAEQAEAEAAAFIAAAFQAMgTAVAAQARAAAKALQAKALAAATIAAA3QAAAFgDAEQgEADgFAAQgFAAgDgDgA4SA6QgDAAgCgDQgCgCAAgEIAHhQQABgIAGAAQAHAAABAIIAHBQQAAAEgCACQgCADgDAAgA3OA5QgGAAgDgDQgEgEAAgFIAAhyQAAgGAEgDQADgEAGAAIBRAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAIhFAAIAAAlIA8AAQAFAAADADQADADAAAFQAAAEgDADQgDAEgFAAIg8AAIAAAkIBGAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFAAgAYEAHIgHhRQAAgDACgDQACgCADAAIAPAAQADAAACACQACADAAADIgHBRQgBAHgHAAQgGAAgBgHgA4Vg5QgEgEAAgGIAAgCQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAACQAAAGgEAEQgEAEgHAAQgGAAgEgEgAS+hCQgEgDAAgGIAAgBQAAgFAEgDQAEgEAGAAQAGAAAEAEQAEADAAAFIAAABQAAAGgEADQgEADgGAAQgGAAgEgDgApzhCQgEgDAAgGIAAgBQAAgFAEgDQAEgEAGAAQAGAAAEAEQAEADAAAFIAAABQAAAGgEADQgEADgGAAQgGAAgEgDgAtghCQgEgDAAgGIAAgBQAAgFAEgDQAEgEAGAAQAGAAAEAEQAEADAAAFIAAABQAAAGgEADQgEADgGAAQgGAAgEgDg");
	this.shape.setTransform(258.075,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,516.2,28), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(6,3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,387.1,148), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#861938").s().p("AgpC0IAAhSIBSAAIAABSgAgVA5IgYjiIAAgKIBbAAIAAAKIgZDig");
	this.shape.setTransform(381.875,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#861938").s().p("AhFCrQgogOgggeIAug4QAYAUAbANQAbALAdAAQAZAAAOgJQANgJAAgQIAAgBQAAgHgDgHQgCgEgIgHQgJgFgOgFQgQgFgUgFQgbgHgWgJQgXgIgPgLQgQgNgHgRQgJgRAAgbIAAgBQAAgZAJgUQAJgTARgPQARgPAWgHQAXgIAcAAQAnAAAhAMQAjANAaAVIgqA7QgXgPgXgLQgXgJgXAAQgXAAgLAJQgMAJAAAOIAAABQAAAIAEAHQACAGAJAFQAJAFAQAFIAkAKQAbAIAXAJQAVAJAPALQANAMAIASQAIAQAAAYIAAABQAAAbgJAVQgKAVgRAOQgRANgZAJQgYAHgeAAQgoAAgngOg");
	this.shape_1.setTransform(356.75,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#861938").s().p("AiIC0IAAlnIEOAAIAABHIi/AAIAABIICoAAIAABGIioAAIAABLIDCAAIAABHg");
	this.shape_2.setTransform(324.2,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#861938").s().p("AilC0IAAlnICNAAQAoAAAkAOQAjANAaAZQAZAYAOAgQAOAgAAAnIAAAAQAAAmgOAhQgOAhgZAYQgZAYgkAOQgkAOgoAAgAhVBsIA9AAQAYABATgJQAUgHAOgOQAPgQAHgTQAIgVAAgWIAAgBQAAgVgIgWQgIgTgOgPQgOgOgUgIQgVgJgWAAIg9AAg");
	this.shape_3.setTransform(286.925,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#861938").s().p("ABsC1IghhRIiXAAIghBRIhQAAICalpIBIAAICaFpgAgwAfIBfAAIgvh0g");
	this.shape_4.setTransform(245.75,18.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#861938").s().p("AilC0IAAlnICNAAQAnAAAlAOQAkAOAYAYQAbAZANAfQAOAgAAAnIAAAAQAAAmgOAhQgNAhgbAYQgYAXgkAPQglAOgnAAgAhWBsIA+AAQAYABATgJQATgGAPgPQAPgQAHgTQAIgTAAgYIAAgBQAAgXgIgUQgIgTgOgPQgPgPgTgHQgVgJgWAAIg+AAg");
	this.shape_5.setTransform(206.175,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#861938").s().p("AgmC0IAAlnIBNAAIAAFng");
	this.shape_6.setTransform(176.65,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#861938").s().p("Ag2CrQgigNgZgZQgYgagOgiQgOghAAgnIAAgBQAAglAOgiQAOgiAYgZQAZgaAjgOQAigPApAAQAXAAAXAEQAYAGANAFQATAJANAJQAPALALAMIgyA5QgXgTgUgKQgVgLgcAAQgVAAgUAIQgUAKgNAPQgNAOgJAVQgHAVAAAXIAAAAQAAAXAHAVQAJAVANAPQANAPAUAJQATAJAWAAQAfAAAVgLQAYgNATgSIAyAzQgPAPgOAMQgMAKgUAKQgUAJgTADQgVAFgbAAQglAAgjgPg");
	this.shape_7.setTransform(149.425,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#861938").s().p("AgnC0IAAlnIBPAAIAAFng");
	this.shape_8.setTransform(121.475,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#861938").s().p("AiAC0IAAlnIBPAAIAAEfICyAAIAABIg");
	this.shape_9.setTransform(98.275,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#861938").s().p("AiHC0IAAlnIENAAIAABHIjAAAIAABIICpAAIAABGIipAAIAABLIDCAAIAABHg");
	this.shape_10.setTransform(64.6,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#861938").s().p("AiIC0IAAlnIERAAIAABHIjCAAIAABOICrAAIAABHIirAAIAACLg");
	this.shape_11.setTransform(30.925,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#861938").s().p("AgtC0IAAgKIAZjiIAqAAIAYDiIAAAKgAgohhIAAhSIBRAAIAABSg");
	this.shape_12.setTransform(4.575,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,386.5,37.2), null);


(lib.r_mal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy 2
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(3,8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_mal2, new cjs.Rectangle(0,0,531.2,447.9), null);


(lib.r_mal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("AgMCYQgIgFgEgJQgCgEAAgGIAAjiIAAgFQgBgBgFAAIhCAAQgPAAgHgKQgKgNAHgNQAHgOAPAAIDMAAQAKAAAGAHQAHAHABAKQAAAKgGAHQgGAIgKAAIhJABQgFAAAAAFIAADjQAAAXgXAEIgEAAQgGAAgGgDg");
	this.shape.setTransform(379.8224,335.0742,0.4512,0.4489);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#930037").s().p("AhXCaQgVAAgGgUIAAkEQAAgVAUgFIAGgBICxAAQAJAAAHAGQAIAHABALQAAAKgHAHQgHAHgLAAIiQAAQgFAAgBABQgBAAAAAFIAABGQAAAFAGAAIB9AAQANAAAHAKQAIAJgEALQgCAHgHAFQgGAEgHAAIh/AAQgEAAgBABQgBABAAAEIAABIIABAFIAFABICRAAQAVAAAFASQADALgHAJQgHAKgLAAg");
	this.shape_1.setTransform(366.9721,335.0209,0.4512,0.4489);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#930037").s().p("AgyCUQhXgfgRhYQgKgzAXguQAWguAwgZQAkgSAoABQA4ADApAlIADACIABgEQAEgTATgCQALgCAJAIQAJAIAAAKIgBBGQAAAKgHAIQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgdgbgnAAQgkAAgdAYQgdAYgHAkQgIApAXAkQAYAkAqAHQBIANAvgxQANgMAPAEQAOAEAEAPQAEAOgLALQgXAZgeAOQgcANgoADIgOABQgdAAgXgJg");
	this.shape_2.setTransform(299.6657,335.1748,0.4512,0.4489);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#930037").s().p("AhkBvIgWgaIgDgEIgBAEQgBAKgHAIQgIAHgMAAQgKgBgHgHQgIgIAAgKIABhDQAAgMAIgHQAIgHALAAIBEAAQAJAAAHAFQAHAFACAIQACAJgDAIQgDAIgIAFIgLADIgGABIALAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgXgdQgYgcgkgIQghgHgfAOQggAPgSAeQgGAMgMACQgMACgKgIQgHgGgCgKQgBgJAFgJQAQgcAZgTQAkgcAsgFQA+gHAxAmQAzAlALA+QALA7ggA1QgfA0g6AQQgbAIgaAAQg+AAg0gxg");
	this.shape_3.setTransform(315.9788,335.0403,0.4512,0.4489);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#930037").s().p("AiJCYQgLgHgBgOIgBj/QAAgRAMgJQAGgEANgBQASAAAJAPIBcCRIADgEIBbiOQAIgNAQgBQAQgCAKALQAHAHAAAMIAAEAQAAALgHAIQgIAIgMAAQgLAAgHgIQgIgHAAgLIAAi3IgBgBIhKBuIgHAIQgHAIgJAAQgKgBgHgHIgFgHIhKhuIgBABIAAC0QAAAUgQAGQgGACgFAAQgHAAgGgEg");
	this.shape_4.setTransform(333.7554,335.0186,0.4512,0.4489);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#930037").s().p("AB6CcQgKgBgHgIQgHgIgBgKIAAi2IgBgBIhKBvQgKAQgPgCQgKgBgIgMIhIhsIgEgDIAAC1QAAAMgHAIQgIAIgMAAQgLgBgHgHQgHgHgBgLIAAkBQAAgMAIgIQAIgIANAAQAUgBALASIBaCPIBeiSQAKgQAWACQAKABAHAHQAHAHABAKIgBEJQgCAJgIAHQgHAFgIAAIgDAAg");
	this.shape_5.setTransform(351.1479,335.035,0.4512,0.4489);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1 copy 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202C52").s().p("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AAACgDACQgCACgCABQgEgBgCgCQgCgCAAgCIAAgyQABgMgHgIQgGgHgLAAQgMAAgHAIQgHAJAAANIAAAvQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAJQAMgRASAAQAVAAAJASQAMgSAVAAQAQgBAJALQAJAJAAASIAAA0QAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABgBAAQgCgBgDgCgAgVF9IABgCIALgRQADgDADAAQADgBACACQAEACAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgMAMQgEAEgFAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAgBgAVQFSQgCgCAAgDIAAhtQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAMQAOgVAVABQATAAAMAMQAOAOAAAVIAAABQAAAWgOANQgMAOgTAAQgVAAgOgVIAAApQAAAHgHAAQgDAAgCgCgAVmDuQgLALAAAOIAAABQAAAPALALQAJAKAOAAQAOAAAJgKQAKgJAAgRIAAAAQAAgQgKgLQgJgJgOAAQgOAAgJAKgAKRFSQgCgCAAgDIAAgpQgOAUgVABQgSAAgNgNQgOgOAAgWIAAAAQAAgWAOgOQANgMASAAQAWAAANATIAAgLQAAgDACgDQACgCADABQADgBACACQACADAAADIAABtQAAADgCACQgCACgDAAQgDAAgCgCgAJXDtQgKALABAPIAAABQgBAQAKAKQAKAKANAAQAOAAAKgKQAKgLAAgPIAAgBQAAgPgKgLQgKgJgOAAQgOAAgJAJgAvfFUQgIgBAAgGQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIACAAQAKAAAAgMIAAhcQAAgDACgDQACgCADABQADgBACACQACADAAADIAABcQAAAYgWAAgA7bFSQgBgCAAgDIAAhtQAAgDABgDQACgCAEABQADgBABACQACADAAADIAAAMQAOgVAWABQASAAANAMQAOAOgBAVIAAABQABAWgOANQgNAOgSAAQgWAAgOgVIAAApQAAAHgGAAQgEAAgCgCgA7FDuQgKALAAAOIAAABQAAAPAKALQAKAKANAAQAOAAAKgKQAJgJAAgRIAAAAQAAgQgJgLQgKgJgOAAQgNAAgKAKgAfqExQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAAOAEIAAgDQAAgagdAAQgMABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKAKQAJAKAAARIAAA0QAAAGgGABQgHAAABgHIAAgIQgNAQgVAAQgPAAgJgIgAf0ENQgHAFAAAIIAAABQAAAJAHAFQAGAEAKAAQANAAAKgGQAIgIABgKIAAgJQgOgFgOAAQgNAAgHAGgAawErQgNgNAAgWIAAAAQAAgVAMgOQANgOATABQAUAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgCACQgPAPgUAAQgUAAgNgOgAa6DsQgJAJgBAOIA8AAQgBgOgIgJQgIgJgMAAQgMAAgJAJgAXNEqQgNgNAAgVIAAAAQAAgUANgOQAOgOAWAAQAUgBAOAOQANAOAAAUIAAABQAAAUgNAOQgOAPgVAAQgUAAgPgPgAXXDuQgJAKAAAPIAAABQAAAPAKAKQAJALAQAAQAOAAAKgLQAKgKAAgPIAAAAQgBgPgJgLQgKgKgPgBQgPABgKAKgAQ3EqQgOgNAAgVIAAAAQAAgUAOgOQAOgOAVAAQAVgBAOAOQANAOAAAUIAAABQAAAUgNAOQgPAPgUAAQgVAAgOgPgARBDuQgJAKAAAPIAAABQgBAPAKAKQAKALAPAAQAOAAALgLQAJgKAAgPIAAAAQAAgPgKgLQgKgKgOgBQgQABgJAKgAPTEqQgOgOAAgUIAAAAQAAgUAOgOQAOgOAUAAQAUAAAOANQADACAAADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgCADgCAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgMgMgNAAQgOAAgKALQgJALAAAOIAAABQgBAPAKAKQAKALAPAAQAOAAAMgLQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQABABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPAPgUAAQgUAAgOgPgAMyErQgNgNAAgWIAAAAQAAgVANgOQAMgOATABQAUAAAMAOQAMANgBATQAAAEgBACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBACgCACQgOAPgVAAQgTAAgOgOgAM8DsQgIAJgCAOIA9AAQgBgOgIgJQgIgJgNAAQgMAAgJAJgALEEuQgJgKAAgQIAAg0QAAgIAGABQADgBADACQABADAAADIAAAwQABANAGAHQAHAIAMAAQAMAAAIgIQAIgJAAgMIAAgvQAAgIAHABQADgBACACQACADAAADIAABRIgCAEQgCACgDABQgDgBgCgCQgCgCAAgCIAAgKQgLASgVAAQgQAAgKgLgAGwEsQgDgBABgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAEABQAOAKAPAAQAJAAAGgDQAFgEAAgHIAAAAQAAgHgIgEQgEgCgLgEQgPgEgHgEQgJgHgBgLIAAAAQABgMAIgIQAKgHAOAAQAOAAAPAIQADACAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBQgNgHgLAAQgIAAgFAFQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgPAAQgSAAgRgNgAFTErQgOgNAAgWIAAAAQAAgVANgOQAMgOATABQAUAAANAOQAKANABATQAAAEgCACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAIAMAAQAPAAAMgKQABAAAAgBQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAPgUAAQgUAAgMgOgAFdDsQgJAJgBAOIA7AAQgBgOgHgJQgIgJgNAAQgMAAgIAJgADsEsQgCgBgBgDQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIADABQAPAKAOAAQAJAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgGgEQgLgHAAgLIAAAAQABgMAIgIQAKgHANAAQAQAAAOAIQAEACAAADQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCgBQgNgHgMAAQgIAAgFAFQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgPAAQgSAAgRgNgACNExQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAANAEIAAgDQAAgagbAAQgNABgMAFIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKAKQAKAKAAARIAAA0QAAAGgHABQgGAAgBgHIAAgIQgMAQgWAAQgOAAgJgIgACXENQgHAFAAAIIAAABQAAAJAHAFQAHAEAKAAQAMAAAJgGQAKgIgBgKIAAgJQgNgFgOAAQgNAAgHAGgAhJEsQgDgBAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEABQAOAKAPAAQAIAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgGgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgNgHgMAAQgIAAgEAFQgFADgBAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAKAHgBALIAAABQABANgKAH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AIQgJAIABANIAAAwQAAAGgIABQgCgBgDgCQgCgCAAgCIAAhRQAAgDACgDQADgCACABQADgBADACQACADAAADIAAAKQAKgSAVAAQARAAAJAKQAKAKAAARIAAA0QAAACgCACQgCACgDABQgDgBgCgCgAZ/E1QgCgCAAgCIAAgxQAAgNgGgIQgIgHgMAAQgMAAgHAIQgIAIAAANIAAAwQgBAGgGABQgEgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCAEABQACgBACACQADADAAADIAAAKQAKgSAVAAQARAAAJAKQAKAKAAARIAAA0QAAACgCACQgCACgDABQgDgBgCgCgAUkE1QgCgCAAgCIAAgxQAAgNgGgIQgHgHgLAAQgLAAgHAHQgIAJABANIAAAwQgBACgCACQgCACgCABQgDgBgDgCQgCgCABgCIAAgyQAAgMgHgIQgGgHgLAAQgMAAgHAIQgHAJAAANIAAAvQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAJQAMgRASAAQAVAAAJASQAMgSAVAAQAPgBAKALQAJAJAAASIAAA0QAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgEgBgCgCgABRE1QgCgCAAgCIAAhMIgIAAQgFAAgBgFQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAIAAIAAgIQAAgQAJgHQAGgIANABIALABQAGAAAAAGQAAAAgBABQAAAAAAABQAAAAgBABQAAABAAAAQgDACgDgBIgHgBQgQAAAAAUIAAAIIAYAAQAGAAAAAGIgBAEQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgYAAIAABMQAAACgCACQgCACgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAjYE1QgCgCAAgCIAAh3QAAgEACgBQABgDADAAQAEAAACADQABABAAAEIAAB3QABAGgIABQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBgAm/E1QgCgCAAgCIAAhRQAAgDACgDQACgCAEABQACgBACACQADADAAADIAAARQAFgLAIgHQAKgHAIAAQAHAAAAAHQAAAGgGACQgOABgJAKQgJAMAAASIAAAhQAAACgDACQgCACgCABQgEgBgCgCgAzNE1QgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgA1xE1QgCgCAAgCIAAgxQAAgNgGgIQgHgHgNAAQgMAAgHAIQgIAIAAANIAAAwQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAKQALgSAVAAQAQAAAKAKQAKAKAAARIAAA0QgBACgCACQgCACgCABQgDgBgDgCgA5jE1QgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAABAHQAAAGgHACQgOABgIAKQgKAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgAygE2QgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIAAAAQAAgDACgEIA8hFIg3AAQgGAAAAgFQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIBDAAQAGABAAAFIAAABQAAACgDADIg6BGIA4AAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAvTDEQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgAzODEQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgAafCdQgEgBAAgFQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBABAAIADABQAEABAGAAQALAAAHgQIABgCIgnhSIAAgDQAAgDABgDQACgCAEABQAEAAACAFIAhBJIAchJQADgGAEABQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQACADAAADIAAADIglBXQgGAOgHAGQgIAGgKAAQgIAAgIgDgAQ+CeQgCgCgBgDIAAhtQABgDACgDQACgCACABQADgBADACQABADAAADIAAAMQAPgVAVABQASAAAMAMQAOAOABAVIAAABQgBAWgOANQgMAOgSAAQgWAAgOgVIAAApQABAHgIAAQgCAAgCgCgARTA6QgKALAAAOIAAABQAAAPAKALQAKAKAOAAQAOAAAIgKQAKgJAAgRIAAAAQAAgQgKgLQgJgJgNAAQgOAAgKAKgEAlTAB9QgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgagcAAQgNABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKAKQAJAKAAARIAAA0QAAAGgGABQgHAAABgHIAAgIQgNAQgVAAQgPAAgJgIgEAldABZQgHAFAAAIIAAABQAAAJAHAFQAGAEAKAAQANAAAKgGQAIgIABgKIAAgJQgOgFgOAAQgNAAgHAGgEAg4AB2QgOgNAAgVIAAAAQAAgUAOgOQAOgOAVAAQAVgBAOAOQANAOAAAUIAAABQAAAUgNAOQgOAPgVAAQgVAAgOgPgEAhCAA6QgJAKAAAPIAAABQgBAPALAKQAJALAPAAQAPAAAJgLQAKgKAAgPIAAAAQAAgPgKgLQgKgKgOgBQgPABgKAKgAeOB3QgOgNAAgWIAAAAQAAgVANgOQAMgOATABQAUAAANAOQALANgBATQAAAEgBACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAJAIQAKAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgAeXA4QgIAJgBAOIA8AAQgCgOgHgJQgIgJgNAAQgMAAgJAJgAYNB4QgDgBABgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIADABQAPAKAOAAQAJAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgHgEQgJgHgBgLIAAAAQABgMAIgIQAKgHAOAAQAPAAAOAIQAEACAAADQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDgBQgNgHgMAAQgIAAgFAFQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgPAAQgSAAgRgNgAWuB9QgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAOAEIAAgDQAAgagbAAQgNABgMAFIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgBQAOgHAQAAQAUAAAKAKQAKAKgBARIAAA0QABAGgHABQgGAAgBgHIAAgIQgMAQgWAAQgNAAgKgIgAW4BZQgHAFAAAIIAAABQAAAJAHAFQAHAEAKAAQANAAAIgGQAKgIgBgKIAAgJQgNgFgOAAQgNAAgHAGgAUVB6QgKgKAAgQIAAg0QAAgIAHABQACgBADACQACADAAADIAAAwQAAANAHAHQAGAIANAAQAMAAAHgIQAJgJgBgMIAAgvQAAgIAIABQACgBACACQACADAAADIAABRIgCAEQgCACgCABQgDgBgDgCQgCgCAAgCIAAgKQgLASgVAAQgQAAgJgLgASuB4QgDgBABgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIADABQAPAKAOAAQAJAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgHgEQgJgHgBgLIAAAAQABgMAIgIQAKgHAOAAQAPAAAOAIQAEACAAADQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDgBQgNgHgMAAQgIAAgFAFQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgPAAQgSAAgRgNgAPXB9QgLgIAAgOIAAAAQAAgOALgIQALgIATAAQAOAAAOAEIAAgDQAAgagcAAQgNABgLAFIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQATAAAKAKQAKAKAAARIAAA0QAAAGgHABQgGAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgAPhBZQgGAFAAAIIAAABQAAAJAGAFQAHAEAKAAQANAAAJgGQAJgIAAgKIAAgJQgNgFgOAAQgNAAgIAGgAN1B2QgNgOAAgUIAAAAQAAgUANgOQAOgOAUAAQATAAAPANQADACgBADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBADgEAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgMgMgOAAQgNAAgKALQgKALAAAOIAAABQAAAPALAKQAJALAOAAQAOAAAMgLQABAAAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQgPAPgUAAQgUAAgOgPgALYB4QgCgBAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEABQAOAKAPAAQAIAAAGgDQAGgEgBgHIAAAAQAAgHgHgEQgEgCgMgEQgPgEgGgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAOAIQAEACAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgNgHgLAAQgIAAgGAFQgEADAAAGIAAABQgBAGAIAEIAQAGQAPAEAGAEQAKAHAAALIAAABQAAANgKAHQgKAIgOAAQgTAAgRgNgAJ5B9QgKgIgBgOIAAAAQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgagcAAQgNABgLAFIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgEADgBQAPgHAQAAQATAAAKAKQAKAKAAARIAAA0QAAAGgGABQgHAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgAKEBZQgIAFABAIIAAABQgBAJAIAFQAGAEAKAAQANAAAJgGQAJgIAAgKIAAgJQgOgFgNAAQgOAAgGAGgAGuB3QgOgNAAgWIAAAAQAAgVANgOQAMgOAUABQATAAANAOQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgAG4A4QgJAJgBAOIA8AAQgBgOgHgJQgJgJgNAAQgMAAgIAJgACPB3QgOgNAAgWIAAAAQAAgVANgOQAMgOAUABQAUAAAMAOQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAIQAJAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgDACQgOAPgUAAQgUAAgNgOgACZA4QgIAJgCAOIA8AAQgBgOgHgJQgJgJgNAAQgMAAgIAJgAiHB9QgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAQgHAPAAQAUAAAKAKQAKAKAAARIAAA0QgBAGgGABQgHAAAAgHIAAgIQgMAQgVAAQgOAAgKgIgAh9BZQgHAFAAAIIAAABQAAAJAHAFQAGAEALAAQANAAAIgGQAJgIAAgKIAAgJQgNgFgOAAQgNAAgHAGgAlOB3QgOgNAAgWIAAAAQAAgVANgOQAMgOAUABQATAAANAOQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgAlEA4QgIAJgCAOIA8AAQgBgOgHgJQgJgJgNAAQgMAAgIAJgAm8B6QgKgKAAgQIAAg0QAAgIAHABQACgBADACQACADAAADIAAAwQAAANAHAHQAGAIANAAQAMAAAHgIQAJgJAAgMIAAgvQgBgIAIABQACgBACACQACADAAADIAABRIgCAEQgCACgCABQgDgBgDgCQgCgCABgCIAAgKQgMASgVAAQgQAAgJgLgAsWB9QgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgagcAAQgNABgLAFIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQATAAAKAKQAKAKAAARIAAA0QAAAGgHABQgGAAAAgHIAAgIQgMAQgWAAQgOAAgKgIgAsMBZQgGAFAAAIIAAABQAAAJAGAFQAHAEAKAAQANAAAJgGQAJgIAAgKIAAgJQgNgFgOAAQgNAAgIAGgAt4B4QgCgBgBgDQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIADABQAPAKAOAAQAJAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgGgEQgLgHAAgLIAAAAQABgMAIgIQAKgHANAAQAQAAAOAIQAEACAAADQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCgBQgNgHgMAAQgIAAgFAFQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgPAAQgSAAgRgNgAxpB3QgOgNAAgWIAAAAQAAgVANgOQANgOATABQAUAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQABAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgCACQgPAPgVAAQgTAAgNgOgAxfA4QgJAJgBAOIA8AAQgBgOgIgJQgHgJgNAAQgMAAgJAJgA1PB9QgLgIAAgOIAAAAQAAgOALgIQAKgIASAAQAPAAAOAEIAAgDQAAgagcAAQgMABgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAPAAQAVAAAKAKQAJAKAAARIAAA0QAAAGgHABQgGAAAAgHIAAgIQgMAQgWAAQgOAAgJgIgA1GBZQgHAFAAAIIAAABQAAAJAHAFQAHAEAKAAQANAAAJgGQAJgIAAgKIAAgJQgOgFgOAAQgMAAgIAGgA3oB4QgCgBAAgDQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAEABQAOAKAQAAQAIAAAGgDQAFgEAAgHIAAAAQAAgHgIgEQgEgCgLgEQgPgEgHgEQgKgHAAgLIAAAAQAAgMAJgIQAKgHAOAAQAOAAAPAIQAEACgBADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBQgNgHgLAAQgIAAgFAFQgFADAAAGIAAABQAAAGAHAEIARAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgOAAQgUAAgQgNgA5PB2QgOgNAAgVIAAAAQAAgUAOgOQAOgOAVAAQAUgBAOAOQAOAOAAAUIAAABQAAAUgOAOQgNAPgWAAQgUAAgOgPgA5FA6QgKAKABAPIAAABQAAAPAKAKQAJALAPAAQAOAAAKgLQAKgKAAgPIAAAAQAAgPgKgLQgKgKgPgBQgOABgKAKgA9mB9QgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAPAEIAAgDQAAgagcAAQgNABgMAFIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKAKQAJAKAAARIAAA0QABAGgHABQgGAAAAgHIAAgIQgNAQgWAAQgNAAgKgIgA9cBZQgHAFAAAIIAAABQAAAJAHAFQAHAEAJAAQANAAAKgGQAJgIAAgKIAAgJQgOgFgOAAQgNAAgHAGgEgl+AB3QgNgNAAgWIAAAAQAAgVANgOQAMgOATABQAUAAAMAOQAMANgBATQAAAEgBACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBACgCACQgOAPgVAAQgTAAgOgOgEgl0AA4QgIAJgCAOIA9AAQgBgOgIgJQgIgJgNAAQgMAAgJAJgAFlBqIAAg5IgIAAIgEgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCIAIAAIAAgVQAAgEACgCQACgBACAAQAEAAABABQACACAAAEIAAAVIAZAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgZAAIAAA3QABAPAPAAIAJgBIAEACIACAEQAAAEgEABQgGADgIAAQgaAAAAgagAjMCEQgFAAgCgGIgjhPIgBgDQAAgDACgDQACgCADABQAFAAACAFIAeBJIAfhJQACgGAEABQADgBACACQACADAAADIgBADIgjBPQgCAGgGAAgAvnCEQgEAAgDgGIgjhPIgBgDQAAgDACgDQACgCADABQAFAAACAFIAeBJIAehJQADgGAEABQADgBACACQACADAAADIAAADIgkBPQgDAGgFAAgA+tBqIAAg5IgIAAIgFgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAFgCIAIAAIAAgVQAAgEABgCQACgBADAAQADAAACABQACACAAAEIAAAVIAZAAQAAAAABABQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgZAAIAAA3QAAAPAQAAIAJgBIADACIACAEQAAAEgDABQgHADgIAAQgZAAAAgagEggmACEQgFAAgDgGIgjhPIgBgDQAAgDADgDQACgCACABQAFAAADAFIAdBJIAfhJQACgGAEABQAEgBACACQABADAAADIAAADIgkBPQgCAGgFAAgEAm5ACBQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQAAAGgFACQgPABgJAKQgJAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgEAimACBQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAHAAAAAHQgBAGgGACQgOABgJAKQgJAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgAf4CBQgDgCAAgCIAAhMIgHAAQgHAAABgFQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIAHAAIAAgIQAAgQAIgHQAIgHANABIALAAQAEAAAAAGQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQgBACgDgBIgIgBQgQAAAAAUIAAAIIAYAAQAGAAAAAGIgCAEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgYAAIAABMQAAACgCACQgCACgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAdDCBQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQAAAGgFACQgPABgIAKQgKAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgAV+CBQgCgCAAgCIAAh3QAAgEACgBQACgCADAAQADAAACACQACABAAAEIAAB3QAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAJKCBQgDgCABgCIAAh3QAAgEABgBQACgCAEAAQACAAACACQACABAAAEIAAB3QAAAGgGABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBgAE3CBQgCgCAAgCIAAgxQAAgNgGgIQgIgHgMAAQgMAAgIAIQgHAIgBANIAAAwQAAAGgGABQgEgBgCgCQgBgCAAgCIAAhRQAAgDABgDQACgCAEABQADgBABACQACADAAADIAAAKQAMgSAUAAQARAAAKAKQAJAKAAARIAAA0QAAACgCACQgCACgDABQgDgBgCgCgABdCBQgCgCAAgCIAAgxQAAgNgGgIQgGgHgMAAQgLAAgHAHQgIAJABANIAAAwQAAACgDACQgCACgCABQgEgBgCgCQgCgCAAgCIAAgyQABgMgHgIQgGgHgLAAQgLAAgHAIQgHAJAAANIAAAvQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAJQAMgRARAAQAVAAAJASQAMgSAVAAQAQgBAJALQAJAJAAASIAAA0QAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABgBAAQgCgBgDgCgAnuCBQgBgCAAgCIAAgxQgBgNgGgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAKQALgSAUAAQASAAAJAKQAKAKgBARIAAA0QAAACgCACQgCACgCABQgEgBgCgCgAqvCBQgDgCAAgCIAAhRQAAgDADgDQACgCACABQAEgBACACQACADAAADIAAARQAFgLAIgHQAKgHAIAAQAHAAAAAHQAAAGgGACQgOABgJAKQgJAMAAASIAAAhQAAACgCACQgCACgEABQgCgBgCgCgAueCBQgDgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgAy0CBQgCgCAAgCIAAhRQAAgDACgDQADgCADABQACgBACACQACADABADIAAARQAEgLAJgHQAJgHAJAAQAHAAAAAHQAAAGgGACQgOABgJAKQgKAMABASIAAAhQgBACgCACQgCACgCABQgDgBgDgCgA6BCBQgCgCAAgCIAAgxQAAgNgGgIQgHgHgLAAQgLAAgHAHQgIAJAAANIAAAwQAAACgCACQgBACgEABQgDgBgBgCQgCgCAAgCIAAgyQgBgMgGgIQgGgHgLAAQgLAAgIAIQgHAJAAANIAAAvQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAJQAMgRASAAQAVAAAJASQAMgSAUAAQARgBAJALQAJAJAAASIAAA0QAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgEgBgCgCgA/eCBQgDgCABgCIAAhRQAAgDABgDQACgCAEABQACgBACACQACADAAADIAABRQAAAGgGABQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBgEghwACBQgCgCAAgCIAAgxQAAgNgHgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAKQALgSAUAAQARAAAKAKQAJAKAAARIAAA0QAAACgCACQgBACgEABQgDgBgBgCgEgjiACBQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgEgm9ACBQgCgCAAgDIAAhqIglAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIBXAAQABAAABABQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABgBAAIgkAAIAABqQAAADgCACQgCACgDABQgDgBgCgCgEAjsACCQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAIAAAAQAAgDADgEIA8hFIg3AAQgGAAAAgFQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIBCAAQAHABAAAFIAAABQAAACgDADIg7BGIA5AAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAgAP1AVIAAgCIALgRQADgCAEAAIAGAAQADACAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgNAMQgEAEgEAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBgAufAQQgDgCAAgEIAAgCQAAgHAIAAQAJAAgBAHIAAACQAAAEgCACQgDACgDAAQgDAAgCgCgA/fAQQgDgCABgEIAAgCQgBgHAJAAQAIAAAAAHIAAACQAAAEgDACQgCACgDAAQgEAAgCgCgEgjjAAQQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgAVyjxQgOgNAAgVIAAAAQAAgUAOgOQAOgOAVAAQAVgBAOAOQANAOAAAUIAAABQAAAUgNAOQgPAPgUAAQgVAAgOgPgAV8ktQgJAKAAAPIAAABQgBAPAKAKQAKALAPAAQAOAAALgLQAJgKAAgPIAAAAQAAgPgKgLQgKgKgOgBQgQABgJAKgARTjwQgNgNAAgWIAAAAQAAgVAMgOQANgOATABQATAAANAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgCACQgPAPgUAAQgUAAgNgOgARdkvQgIAJgCAOIA8AAQgBgOgHgJQgJgJgNAAQgLAAgJAJgALjjxQgNgOAAgUIAAAAQAAgUANgOQAPgOATAAQAUAAAPANQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgNgMgNAAQgOAAgKALQgJALAAAOIAAABQAAAPAKAKQAJALAPAAQAOAAAMgLQAAAAABgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgQAPgUAAQgUAAgOgPgAJvjxQgNgNAAgVIAAAAQAAgUANgOQAPgOAUAAQAVgBAOAOQAOAOAAAUIAAABQAAAUgOAOQgOAPgVAAQgVAAgOgPgAJ5ktQgJAKAAAPIAAABQAAAPAKAKQAKALAOAAQAPAAAKgLQAJgKAAgPIAAAAQABgPgKgLQgLgKgOgBQgPABgKAKgAGNjxQgNgNAAgVIAAAAQAAgUANgOQAOgOAVAAQAUgBAPAOQANAOAAAUIAAABQAAAUgNAOQgOAPgWAAQgUAAgOgPgAGXktQgKAKAAAPIAAABQABAPAJAKQAKALAPAAQAPAAAKgLQAJgKAAgPIAAAAQAAgPgKgLQgKgKgPgBQgPABgJAKgAEpjxQgNgOAAgUIAAAAQAAgUANgOQAOgOAUAAQAUAAAOANQACACABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgCADgEAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgMgMgNAAQgPAAgJALQgKALAAAOIAAABQAAAPAKAKQAKALAPAAQAOAAAMgLQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPAPgUAAQgUAAgOgPgACFjtQgKgKAAgQIAAg0QAAgIAHABQACgBADACQACADAAADIAAAwQAAANAGAHQAIAIALAAQANAAAHgIQAJgJgBgMIAAgvQAAgIAHABQADgBADACQABADAAADIAABRIgBAEQgDACgDABQgCgBgDgCQgCgCAAgCIAAgKQgLASgUAAQgRAAgJgLgAitjqQgMgIAAgOIAAAAQAAgOAMgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMABgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgB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QABAAAAABQAAAAAAABQABAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgA1gkvQgJAJgBAOIA8AAQgCgOgHgJQgIgJgNAAQgMAAgIAJgA3hjvQgOgOgBgWIAAAAQABgWAOgOQAMgMASAAQAWAAANATIAAgxQAAgIAIAAQACAAACACQACADABADIAAB3QgBACgCACQgCACgCABQgDgBgDgCQgCgCAAgCIAAgNQgOAUgVABQgSAAgMgNgA3XkuQgKALAAAPIAAABQAAAQAKAKQAJAKANAAQAOAAAKgKQAKgLAAgPIAAgBQAAgPgKgLQgKgJgOAAQgOAAgIAJgAUpj9IAAg5IgIAAIgEgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCIAIAAIAAgVQAAgEABgCQADgBADAAQADAAABABQACACAAAEIAAAVIAZAAQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgZAAIAAA3QAAAPAQAAIAJgBIAEACIACAEQAAAEgEABQgHADgHAAQgaAAAAgagAA5j9IAAg5IgIAAIgEgBQAAAAgBgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAgBIAEgCIAIAAIAAgVQAAgEACgCQACgBACAAQAEAAACABQACACAAAEIAAAVIAYAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgYAAIAAA3QgBAPARAAIAIgBIAEACIABAEQABAEgEABQgHADgHAAQgaAAAAgagAk5j9IAAg5IgIAAIgEgBQgBAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAEgCIAIAAIAAgVQAAgEABgCQADgBADAAQACAAACABQADACAAAEIAAAVIAYAAQABAAAAABQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgYAAIAAA3QAAAPAPAAIAJgBIAEACIABAEQAAAEgDABQgGADgIAAQgaAAAAgagAXbjmQgDgDAAgDIAAgEQAAgEADgCQADgCADgBQAEABACACQADACgBAEIAAAEQABADgDADQgCADgEAAQgEAAgCgDgAT7jmQgCgCAAgCIAAgxQAAgNgGgIQgIgHgMAAQgMAAgIAIQgHAIAAANIAAAwQgBAGgGABQgDgBgDgCQgCgCABgCIAAhRQgBgDACgDQADgCADABQACgBACACQACADABADIAAAKQAKgSAVAAQARAAAJAKQAKAKAAARIAAA0QAAACgCACQgCACgDABQgDgBgCgCgAQfjmQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAPyjmQgCgCAAgCIAAgxQAAgNgGgIQgHgHgLAAQgLAAgHAHQgIAJABANIAAAwQgBACgCACQgCACgCABQgDgBgDgCQgCgCAAgCIAAgyQABgMgHgIQgGgHgLAAQgMAAgHAIQgHAJAAANIAAAvQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAJQAMgRASAAQAVAAAJASQAMgSAVAAQAPgBAKALQAJAJAAASIAAA0QAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgEgBgCgCgANFjmQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAI/jmQgCgCAAgCIAAgxQAAgNgHgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAGgHABQgDgBgCgCQgCgCAAgCIAAhRQAAgDACgDQACgCADABQADgBACACQACADAAADIAAAKQALgSAUAAQARAAAKAKQAJAKAAARIAAA0QAAACgCACQgBACgEABQgDgBgBgCgAhIjmQgBgCAAgCIAAhRQAAgDABgDQACgCAEABQADgBABACQACADAAADIAAARQAGgLAJgHQAJgHAJAAQAGAAAAAHQAAAGgGACQgOABgJAKQgKAMAAASIAAAhQAAACgCACQgBACgDABQgEgBgCgCgAjzjmQgCgCAAgCIAAhRQAAgDACgDQABgCADABQAEgBABACQACADAAADIAAARQAGgLAJgHQAIgHAKAAQAGAAAAAHQAAAGgGACQgPABgIAKQgKAMAAASIAAAhQAAACgCACQgBACgEABQgDgBgBgCgAozjmQgCgCgBgCIAAgxQABgNgHgIQgGgHgMAAQgKAAgIAHQgHAJAAANIAAAwQAAACgCACQgCACgDABQgDgBgCgCQgCgCAAgCIAAgyQAAgMgGgIQgHgHgLAAQgLAAgIAIQgGAJAAANIAAAvQgBAGgGABQgDgBgDgCQgBgCgBgCIAAhRQABgDABgDQADgCADABQACgBACACQACADABADIAAAJQALgRATAAQAVAAAIASQANgSAUAAQAQgBAKALQAIAJABASIAAA0QAAACgDACQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgCgCgAQelXQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgANElXQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQAAAEgDACQgDACgDAAQgDAAgDgCgAxVl9QgCgCgBgDIAAhtQABgDACgDQACgCACAAQADAAADACQABADAAADIAAAMQAPgVAVABQASAAAMAMQAOAOABAVIAAABQgBAWgOANQgMAOgSAAQgWAAgOgVIAAApQABAHgIAAQgCAAgCgCgAxAnhQgKALAAAOIAAABQAAAPAKALQAKAKAOAAQAOAAAIgKQAKgJAAgRIAAAAQAAgQgKgLQgJgJgNAAQgOAAgKAKgA2Rl9QgDgCAAgDIAAgpQgOAUgVABQgSAAgNgNQgOgOAAgWIAAAAQAAgWAOgOQANgMASAAQAWAAANATIAAgLQAAgDADgDQACgCACAAQAEAAACACQACADAAADIAABtQAAADgCACQgCACgEAAQgCAAgCgCgA3MniQgJALAAAPIAAABQAAAQAJAKQAKAKAOAAQANAAAKgKQAKgLAAgPIAAgBQAAgPgKgLQgKgJgNAAQgOAAgKAJgEAlLgGHQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAKgEAAgLQgHgBAAgHIAAgDQAAgEACgCQACgCAEgBQAJABAAAJIAAAEQAAAPgHAGQgGAHgFAAQgEAAgBgEgEAj1gGjQgDgBAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAIAEABQAOAKAPAAQAIAAAGgDQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgGgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgNgHgMAAQgIAAgFAFQgEADgBAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAKAHgBALIAAABQABANgKAHQgKAIgOAAQgTAAgQgNgEAiXgGkQgNgNAAgWIAAAAQAAgVAMgOQANgOATABQAUAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAIANAAQAPAAAMgKQABAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAACgCACQgPAPgVAAQgTAAgNgOgEAihgHjQgJAJgBAOIA8AAQgBgOgIgJQgHgJgNAAQgMAAgJAJgAe0mlQgNgNAAgVIAAAAQAAgUANgOQAPgOAUAAQAVgBAOAOQANAPAAATIAAABQAAAUgNAOQgOAPgVAAQgVAAgOgPgAe+nhQgJAKAAAPIAAABQAAAPAKAKQAKALAOAAQAPAAAKgLQAKgKAAgPIAAAAQAAgPgKgLQgKgKgPgBQgPABgKAKgAcfmjQgDgBAAgDQAAgBABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAEABQAPAKAPAAQAIAAAFgDQAGgEAAgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgGgEQgLgHABgLIAAAAQgBgMAKgIQAIgHAOAAQAPAAAPAIQADACABADQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgCgBQgNgHgMAAQgIAAgFAFQgFADAAAGIAAABQAAAGAHAEIARAGQAOAEAGAEQAKAHAAALIAAABQAAANgKAHQgJAIgOAAQgUAAgQgNgAaWmlQgNgOAAgUIAAAAQAAgUANgOQAPgOATAAQAUAAAPANQACACAAADQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgCADgDAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgMgMgOAAQgOAAgJALQgKALAAAOIAAABQAAAPAKAKQAKALAOAAQAOAAAMgLQABAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAABgBAAQgOAPgVAAQgTAAgPgPgAYsmkQgOgNAAgWIAAAAQAAgVANgOQAMgOAUABQATAAANAOQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAIQAJAIANAAQAPAAAMgKQABAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgAY2njQgIAJgCAOIA8AAQgBgOgIgJQgHgJgNAAQgMAAgJAJgAT/mkQgNgNAAgWIAAAAQAAgVAMgOQAMgOAUABQAUAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgCACQgPAPgUAAQgUAAgNgOgAUJnjQgJAJgBAOIA8AAQgBgOgHgJQgIgJgNAAQgNAAgIAJg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QAAAAgBAAQAAAAgBAAQgBgBAAAAQgMgMgNAAQgPAAgJALQgJALgBAOIAAABQAAAPAKAKQAKALAPAAQAOAAAMgLQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPAPgUAAQgUAAgOgPgAommlQgOgOAAgUIAAAAQAAgUAOgOQAOgOAUAAQAUAAAOANQADACAAADQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgCADgCAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgMgMgNAAQgOAAgKALQgJALAAAOIAAABQgBAPAKAKQAKALAPAAQAOAAAMgLQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABABAAQABABAAAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPAPgUAAQgUAAgOgPgAqSmeQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAANAEIAAgDQAAgagcAAQgMABgMAFIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKAKQAKAKAAARIAAA0QAAAGgHABQgGAAgBgHIAAgIQgMAQgWAAQgOAAgJgIgAqInCQgHAFAAAIIAAABQAAAJAHAFQAHAEAKAAQANAAAIgGQAKgIgBgKIAAgJQgNgFgOAAQgNAAgHAGgAswmeQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgagcAAQgNABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKAKQAJAKAAARIAAA0QAAAGgGABQgHAAABgHIAAgIQgNAQgVAAQgPAAgJgIgAsmnCQgHAFAAAIIAAABQAAAJAHAFQAGAEAKAAQANAAAKgGQAIgIABgKIAAgJQgOgFgOAAQgNAAgHAGgAvcmeQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAAOAEIAAgDQAAgagdAAQgMABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKAKQAJAKAAARIAAA0QAAAGgGABQgHAAABgHIAAgIQgNAQgVAAQgPAAgJgIgAvSnCQgHAFAAAIIAAABQAAAJAHAFQAGAEAKAAQANAAAKgGQAIgIABgKIAAgJQgOgFgOAAQgNAAgHAGgAzwmkQgOgNAAgWIAAAAQABgVAMgOQANgOATABQAUAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQABAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgCACQgPAPgVAAQgTAAgNgOgAzmnjQgJAJgBAOIA8AAQgBgOgIgJQgHgJgNAAQgMAAgJAJgA1fmhQgJgKAAgQIAAg0QAAgIAHAAQADAAACACQACADAAADIAAAwQAAANAGAHQAIAIAMAAQALAAAJgIQAHgJABgMIAAgvQAAgIAGAAQADAAACACQACADAAADIAABRIgCAEQgBACgEABQgDgBgBgCQgCgCAAgCIAAgKQgMASgVAAQgQAAgKgLgA54meQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMABgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKAKQAKAKAAARIAAA0QgBAGgGABQgHAAAAgHIAAgIQgMAQgVAAQgOAAgKgIgA5unCQgHAFAAAIIAAABQAAAJAHAFQAGAEALAAQANAAAIgGQAJgIAAgKIAAgJQgNgFgOAAQgNAAgHAGgA7rmjQgOgOAAgWIAAAAQAAgWAOgOQAMgMATAAQAVAAAOATIAAgxQAAgIAHAAQADAAACACQACADAAADIAAB3QAAACgCACQgCACgDABQgDgBgCgCQgCgCAAgCIAAgNQgOAUgVABQgTAAgMgNgA7hniQgKALAAAPIAAABQAAAQAKAKQAJAKAOAAQAOAAAJgKQALgLAAgPIAAgBQAAgPgLgLQgJgJgOAAQgOAAgJAJgA+bmkQgOgNAAgWIAAAAQAAgVANgOQAMgOAUABQATAAANAOQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAIQAJAIANAAQAPAAAMgKQABAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgDACQgOAPgVAAQgTAAgNgOgA+RnjQgIAJgCAOIA8AAQgBgOgIgJQgHgJgOAAQgLAAgJAJgEggKgGhQgJgKAAgQIAAg0QAAgIAHAAQADAAACACQACADAAADIAAAwQAAANAHAHQAGAIANAAQALAAAJgIQAHgJABgMIAAgvQgBgIAIAAQACAAACACQACADAAADIAABRIgCAEQgBACgDABQgEgBgCgCQgBgCAAgCIAAgKQgMASgVAAQgQAAgKgLgEghwgGlQgOgOAAgUIAAAAQAAgUAOgOQAOgOAUAAQAUAAAOANQACACABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgDADgDAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgBgBAAAAQgMgMgNAAQgPAAgJALQgKALAAAOIAAABQAAAPAKAKQAKALAPAAQAOAAAMgLQAAAAABgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBABAAAAQgPAPgUAAQgUAAgOgPgEgjbgGkQgNgNAAgWIAAAAQAAgVANgOQAMgOAUABQATAAAMAOQALANAAATQAAAEgCACQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAIANAAQAPAAAMgKQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBACgCACQgOAPgVAAQgTAAgOgOgEgjRgHjQgIAJgCAOIA9AAQgBgOgIgJQgIgJgNAAQgMAAgJAJgEAhmgGaQgCgCAAgCIAAgxQAAgNgHgIQgHgHgMAAQgMAAgHAIQgJAIABANIAAAwQAAAGgIABQgCgBgDgCQgCgCAAgCIAAhRQAAgDACgDQADgCACAAQADAAADACQACADAAADIAAAKQALgSAUAAQARAAAJAKQAKAKAAARIAAA0QAAACgCACQgCACgDABQgDgBgCgCgAeBmaQgCgCgBgCIAAhRQAAgDACgDQADgCADAAQACAAADACQACADAAADIAABRQAAAGgHABQgBAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBgAb4maQgCgCAAgCIAAhRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAABRQAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAQDmaQgCgCAAgCIAAhRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAABAHQAAAGgHACQgOABgIAKQgKAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgAKEmaQgDgCAAgCIAAgxQAAgNgFgIQgHgHgLAAQgMAAgGAHQgIAJAAANIAAAwQAAACgCACQgCACgDABQgDgBgCgCQgCgCAAgCIAAgyQAAgMgGgIQgHgHgKAAQgMAAgHAIQgIAJABANIAAAvQgBAGgHABQgCgBgDgCQgCgCAAgCIAAhRQAAgDACgDQADgCACAAQADAAADACQACADAAADIAAAJQALgRASAAQAWAAAIASQAMgSAVAAQAQgBAKALQAJAJAAASIAAA0QAAACgCACQgBABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQgDgBgCgCgAFXmaQgDgCABgDIAAhqIglAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIBYAAQAAAAABABQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBABAAAAIglAAIAABqQAAADgCACQgCACgDABQgDgBgCgCgADPmaQgCgCAAgCIAAh3QAAgEACgBQACgDADAAQADAAACADQACABAAAEIAAB3QAAAGgHABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBgAgYmaQgCgCAAgCIAAhRQAAgDACgDQACgCAEAAQACAAACACQADADAAADIAAARQAFgLAHgHQAKgHAIAAQAHAAAAAHQAAAGgGACQgOABgIAKQgJAMAAASIAAAhQAAACgDACQgCACgCABQgEgBgCgCgAt2maQgCgCAAgCIAAhRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQABAGgHACQgOABgIAKQgKAMAAASIAAAhQAAACgCACQgCACgDABQgDgBgCgCgA82maQgCgCAAgCIAAhRQAAgDACgDQABgCADAAQAEAAACACQABADAAADIAAARQAFgLAKgHQAIgHAKAAQAGAAAAAHQAAAGgGACQgPABgIAKQgKAMAAASIAAAhQAAACgBACQgCACgEABQgDgBgBgCgEgkKgGcIgkguIgkAAIAAArQAAADgCACQgCACgDABQgDgBgCgCQgCgCAAgDIAAhxQAAgCACgCQACgCADgBIAvAAQAXAAANANQAJAKAAAPIAAABQAAAOgJAKQgJAJgPADIAfAoQACADAAADQAAACgCACQgCACgCABQgFgBgCgEgEglSgHWIAnAAQAOAAAJgHQAJgHAAgMIAAAAQAAgMgIgHQgJgGgPAAIgnAAgAWhmZQgDAAgCgCQgCgCAAgCIAAhxQAAgCACgCQACgCADgBIAkAAQAeAAATASQASASABAbIAAAAQgBAbgSASQgTATgegBgAWommIAdAAQAYABAOgPQAOgOABgVIAAgBQgBgVgOgOQgOgOgYAAIgdAAgAeAoLQgCgCgBgEIAAgCQAAgHAJAAQAIAAAAAHIAAACQAAAEgCACQgDACgDAAQgEAAgCgCgAb3oLQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgAF+tFQgUgUAAgbIAAgBQAAgcAUgUQAUgTAeAAQAdAAAVATQATAUABAbIAAABQgBAcgTATQgVAUgeAAQgdAAgUgTgAGXuOQgJAJAAAPIAAABQAAAOAJAKQAKALAPAAQAPABAKgLQAIgKABgOIAAgBQAAgOgKgLQgKgLgPABQgPgBgJALgAk6tEQgTgTAAgdIAAgBQAAgcASgUQASgTAbAAQAeAAARAVQAPASABAXQAAAIgGAEQgEAGgIAAIhHAAQAFAZAaAAQAOAAALgJQAFgDAEAAQAHAAADAFQAFAEAAAFQgBAHgEAEQgSAQgbAAQgdAAgTgSgAkpuAIA3AAQgCgMgHgHQgHgIgMAAQgWAAgFAbgAqYtFQgUgUAAgbIAAgBQAAgcAUgUQAUgTAeAAQAdAAAUATQAVAUgBAbIAAABQABAcgVATQgUAUgdAAQgeAAgUgTgAp/uOQgJAJAAAPIAAABQAAAOAJAKQAKALAPAAQAPABAJgLQAJgKAAgOIAAgBQABgOgKgLQgKgLgOABQgQgBgJALgAIMtBQgHgFAAgHQAAgHAEgEQAFgEAFAAQAEAAAEACQASAMARAAQAPgBAAgJQAAgGgIgDIgTgHQgRgFgJgGQgMgLAAgQIAAgBQAAgSAOgMQAMgLAVAAQAUAAAUAKQAJAFAAAJQgBAGgEAEQgEAFgHgBQgDAAgDgCQgRgHgLgBQgNABAAAIIAAABQgBAEAJAEIASAHQASAGAIAGQAMALAAAPIAAABQABAUgOAMQgOAKgVAAQgbAAgWgPgAnCtBQgHgFAAgHQAAgHAEgEQAEgEAHAAQADAAAEACQASAMAQAAQAQgBAAgJQAAgGgJgDIgSgHQgRgFgJgGQgMgLAAgQIAAgBQAAgSANgMQANgLAVAAQAUAAAUAKQAIAFABAJQAAAGgFAEQgFAFgFgBQgEAAgDgCQgRgHgLgBQgNABAAAIIAAABQAAAEAHAEIASAHQATAGAIAGQANALAAAPIAAABQgBAUgOAMQgNAKgWAAQgaAAgWgPgAgYtZIAAg9IgCAAQgGgBgEgEQgFgFAAgGQAAgGAFgFQAEgFAGAAIACAAIAAgPQAAgIAFgGQAGgFAHAAQAGAAAGAFQAGAGgBAIIAAAPIAQAAQAHAAAEAFQAFAFAAAGQAAAGgFAFQgEAEgHABIgQAAIAAA3QAAAMAMAAIAEAAQAGAAAFAEQAEAFABAGQAAAKgKADQgJAEgMAAQgkAAAAgmgAMUs6QgHgFABgJIAAgBQgBgIAHgGQAGgGAIAAQAJAAAGAGQAGAGAAAIIAAABQAAAJgGAFQgGAHgJAAQgIAAgGgHgALPs6QgGgFAAgJIAAgBQAAgIAGgGQAGgGAJAAQAJAAAFAGQAHAGAAAIIAAABQAAAJgHAFQgFAHgJAAQgJAAgGgHgAKKs6QgFgFAAgJIAAgBQAAgIAFgGQAGgGAKAAQAIAAAGAGQAGAGAAAIIAAABQAAAJgGAFQgGAHgIAAQgKAAgGgHgAEys5QgGgGAAgHIAAg2QAAgbgVAAQgWAAAAAbIAAA2QAAAHgGAGQgFAFgHABQgIgBgGgFQgFgGAAgHIAAg2QAAgbgVAAQgWAAAAAbIAAA2QAAAHgGAGQgFAFgHABQgIgBgGgFQgEgGAAgHIAAhfQAAgIAEgEQAGgGAIAAQAHAAAFAGQAGAEAAAIIAAABQAQgUAWAAQAaAAAKAUQASgUAYAAQAVAAALAMQALAMAAAXIAABDQAAAHgEAGQgGAFgIABQgHgBgFgFgABLs5QgFgGAAgHIAAhfQAAgIAFgEQAGgGAHAAQAIAAAFAGQAFAEABAIIAABfQgBAHgFAGQgFAFgIABQgHgBgGgFgAhds5QgFgGAAgHIAAg2QgBgbgVAAQgXAAAAAbIAAA2QAAAHgGAGQgFAFgIABQgHgBgFgFQgGgGAAgHIAAhfQAAgIAGgEQAFgGAHAAQAIAAAFAGQAGAEAAAIIAAABQAQgUAVAAQAVAAAMANQALANAAAVIAABDQAAAHgFAGQgFAFgIABQgHgBgGgFgAshs1QgIAAgGgGQgFgFAAgHIAAiFQAAgIAFgFQAGgGAIABQAHgBAGAGQAFAFAAAIIAAB2IBFAAQAHAAAFAEQAEAFAAAHQAAAHgEAFQgFAFgHAAgABJvHQgFgFAAgIIAAAAQAAgIAFgFQAHgEAIgBQAJABAFAEQAHAFgBAIIAAAAQABAIgHAFQgFAEgJABQgIgBgHgEg");
	this.shape_6.setTransform(272.3,292.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#930037").s().p("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");
	this.shape_7.setTransform(164.725,33.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_mal, new cjs.Rectangle(0,0,531.2,426.3), null);


(lib.r_bien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("AgMCYQgIgFgEgJQgCgEAAgGIAAjiIAAgFQgBgBgFAAIhCAAQgPAAgHgKQgKgNAHgNQAHgOAPAAIDMAAQAKAAAGAHQAHAHABAKQAAAKgGAHQgGAIgKAAIhJABQgFAAAAAFIAADjQAAAXgXAEIgEAAQgGAAgGgDg");
	this.shape.setTransform(214.9773,279.6201,0.4367,0.4362);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#930037").s().p("AhXCaQgVAAgGgUIAAkEQAAgVAUgFIAGgBICxAAQAJAAAHAGQAIAHABALQAAAKgHAHQgHAHgLAAIiQAAQgFAAgBABQgBAAAAAFIAABGQAAAFAGAAIB9AAQANAAAHAKQAIAJgEALQgCAHgHAFQgGAEgHAAIh/AAQgEAAgBABQgBABAAAEIAABIIABAFIAFABICRAAQAVAAAFASQADALgHAJQgHAKgLAAg");
	this.shape_1.setTransform(202.5386,279.5683,0.4367,0.4362);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#930037").s().p("AgyCUQhXgfgRhYQgKgzAXguQAWguAwgZQAkgSAoABQA4ADApAlIADACIABgEQAEgTATgCQALgCAJAIQAJAIAAAKIgBBGQAAAKgHAIQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgdgbgnAAQgkAAgdAYQgdAYgHAkQgIApAXAkQAYAkAqAHQBIANAvgxQANgMAPAEQAOAEAEAPQAEAOgLALQgXAZgeAOQgcANgoADIgOABQgdAAgXgJg");
	this.shape_2.setTransform(137.3878,279.7181,0.4367,0.4362);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#930037").s().p("AhkBvIgWgaIgDgEIgBAEQgBAKgHAIQgIAHgMAAQgKgBgHgHQgIgIAAgKIABhDQAAgMAIgHQAIgHALAAIBEAAQAJAAAHAFQAHAFACAIQACAJgDAIQgDAIgIAFIgLADIgGABIALAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgXgdQgYgcgkgIQghgHgfAOQggAPgSAeQgGAMgMACQgMACgKgIQgHgGgCgKQgBgJAFgJQAQgcAZgTQAkgcAsgFQA+gHAxAmQAzAlALA+QALA7ggA1QgfA0g6AQQgbAIgaAAQg+AAg0gxg");
	this.shape_3.setTransform(153.1785,279.5875,0.4367,0.4362);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#930037").s().p("AiJCYQgLgHgBgOIgBj/QAAgRAMgJQAGgEANgBQASAAAJAPIBcCRIADgEIBbiOQAIgNAQgBQAQgCAKALQAHAHAAAMIAAEAQAAALgHAIQgIAIgMAAQgLAAgHgIQgIgHAAgLIAAi3IgBgBIhKBuIgHAIQgHAIgJAAQgKgBgHgHIgFgHIhKhuIgBABIAAC0QAAAUgQAGQgGACgFAAQgHAAgGgEg");
	this.shape_4.setTransform(170.3857,279.5661,0.4367,0.4362);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#930037").s().p("AB6CcQgKgBgHgIQgHgIgBgKIAAi2IgBgBIhKBvQgKAQgPgCQgKgBgIgMIhIhsIgEgDIAAC1QAAAMgHAIQgIAIgMAAQgLgBgHgHQgHgHgBgLIAAkBQAAgMAIgIQAIgIANAAQAUgBALASIBaCPIBeiSQAKgQAWACQAKABAHAHQAHAHABAKIgBEJQgCAJgIAHQgHAFgIAAIgDAAg");
	this.shape_5.setTransform(187.2212,279.5821,0.4367,0.4362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202C52").s().p("AHkBQQgVgVAAghIAAgBQAAgeAUgWQAUgWAfAAQAhAAAUAXQARAVAAAYQAAAKgGAFQgFAGgIAAIhSAAQAHAcAdAAQAQAAANgKQAEgDAGAAQAHAAAEAFQAFAEAAAHQAAAIgGAEQgUASgeAAQghAAgVgVgAI1AOQgCgOgIgIQgIgIgNAAQgaAAgFAeIA+AAIAAAAgAjFBQQgWgVAAghIAAgBQAAgeAUgWQAVgWAfAAQAhAAAUAXQAQAVAAAYQAAAKgFAFQgGAGgIAAIhRAAQAGAcAdAAQAQAAANgKQAFgDAFAAQAHAAAFAFQAEAEAAAHQAAAIgFAEQgVASgdAAQghAAgVgVgAh1AOQgCgOgHgIQgJgIgMAAQgaAAgGAeIA+AAIAAAAgAFwA4IAAhDIgBAAQgHAAgFgFQgGgGAAgGQAAgIAGgFQAFgFAHAAIABAAIAAgSQAAgJAGgGQAGgGAJAAQAIAAAGAGQAGAGAAAJIAAASIASAAQAIAAAFAFQAFAFAAAIQAAAGgFAGQgFAFgIAAIgSAAIAAA9QAAAOAOAAIAEgBQAHAAAFAGQAGAFAAAGQAAAMgLAEQgKAEgOAAQgqAAAAgsgAAoBZQgOgNAAgUIAAgBQAAgWAQgNQAPgLAbAAQASAAARAGIAAgCQAAgagfAAQgPAAgNAEIgGABQgHAAgFgEQgFgGAAgHQAAgLALgEQAUgIAaAAQAhAAAQARQAQAPAAAeIAABBQAAAJgGAGQgGAFgIAAQgJAAgGgFQgFgFAAgHQgRASgbAAQgVAAgOgLgABBA1IAAABQAAAJAGAEQAGAFALAAQAOAAAJgIQAJgGAAgMIAAgHQgMgFgOAAQgdAAAAATgAl8BRQgUgVAAgjIAAAAQAAgiAUgUQASgUAcAAQAbAAASAWIAAg1QAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIIAACfQAAAIgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgIIAAgCQgSAXgbAAQgbAAgTgTgAldgDQgKAKAAASIAAAAQAAASAKALQAKALAPAAQAPAAAKgLQAKgLAAgSIAAAAQAAgSgKgKQgKgLgPAAQgPAAgKALgAKEBcQgHgGAAgKIAAAAQAAgKAHgGQAGgIALAAQAKAAAGAIQAHAGAAAKIAAAAQAAAKgHAGQgGAHgKAAQgLAAgGgHgAEjBdQgGgGAAgIIAAg+QAAgdgZABQgZgBAAAdIAAA+QAAAIgGAGQgGAGgJAAQgIAAgGgGQgGgGAAgIIAAhqQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJIAAABQASgXAYAAQAXAAANAOQANAOAAAZIAABLQAAAIgGAGQgGAGgIAAQgJAAgGgGgAgnBdQgFgGAAgIIAAifQAAgIAFgGQAHgGAIAAQAJAAAFAGQAHAGAAAIIAACfQAAAIgHAGQgFAGgJAAQgIAAgHgGgAnLBVIgNgeIhTAAIgNAfQgGANgNAAQgIAAgGgFQgFgGAAgJQAAgDACgGIBCiTQAHgQARAAIADAAQAQAAAIAQIBBCTQADAFAAAEQAAAIgGAHQgGAFgIAAQgOAAgGgOgAnnASIgag9IgbA9IA1AAgAqhBiQgFAAgDgDQgDgFABgFIALhlQABgMAMAAQALAAABAMIAMBlQAAAFgDAFQgDADgFAAgAKIAXIgLhlQgBgFADgFQADgDAFAAIAbAAQAFAAADADQADAFAAAFIgMBlQgBAMgLAAQgMAAgBgMgAqkg1QgHgGAAgKIAAAAQAAgKAHgGQAGgHALAAQAKAAAGAHQAHAGAAAKIAAAAQAAAKgHAGQgGAIgKgBQgLABgGgIg");
	this.shape_6.setTransform(272.6351,376.5187,1.2416,1.24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C52").s().p("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");
	this.shape_7.setTransform(265.0661,202.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202C52").s().p("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QgFAAgDgDQgDgEAAgDQAAgIAHgCQAQgHASABQAXgBAMAMQALAMAAAVIAAA0QAAAFgDADQgDADgFAAQgGAAgDgCQgDgEAAgDIAAgFQgNAQgWgBQgPABgLgJgASxHLQgGAFAAAHIAAABQAAAHAGAFQAFAEAJAAQAMAAAIgGQAIgHAAgJIAAgHQgLgFgNAAQgLAAgHAFgARTH5QgJAAgFgKIgjhRIgCgGQAAgEAEgEQADgEAFABQAJgBADAJIAcBHIAbhHQAEgIAIAAQAEAAAEADQADADAAAFQAAAEgBACIgjBRQgFAKgJAAgAMpHxQgMgIAAgQIAAgBQAAgQANgJQALgJAUABQAPgBANAFIAAgCQAAgYgaAAQgMAAgLAFIgEABQgEAAgDgDQgDgEAAgDQAAgIAGgCQARgHARABQAYgBALAMQAMAMAAAVIAAA0QAAAFgEADQgDADgFAAQgFAAgDgCQgEgEAAgDIAAgFQgNAQgVgBQgQABgKgJgAM8HLQgHAFAAAHIAAABQAAAHAGAFQAGAEAJAAQAMAAAIgGQAIgHAAgJIAAgHQgLgFgNAAQgMAAgGAFgAE+HxQgLgIAAgQIAAgBQAAgQAMgJQAMgJAUABQAOgBAOAFIAAgCQAAgYgaAAQgNAAgLAFIgDABQgFAAgDgDQgDgEAAgDQAAgIAHgCQAQgHASABQAXgBAMAMQALAMAAAVIAAA0QAAAFgDADQgDADgFAAQgGAAgDgCQgDgEAAgDIAAgFQgNAQgWgBQgPABgLgJgAFRHLQgGAFAAAHIAAABQAAAHAGAFQAFAEAJAAQAMAAAIgGQAIgHAAgJIAAgHQgLgFgNAAQgLAAgHAFgAA7HxQgMgIAAgQIAAgBQAAgQANgJQALgJAUABQAPgBANAFIAAgCQAAgYgaAAQgMAAgLAFIgEABQgEAAgDgDQgDgEAAgDQAAgIAGgCQARgHARABQAYgBALAMQAMAMAAAVIAAA0QAAAFgEADQgDADgFAAQgFAAgDgCQgEgEAAgDIAAgFQgNAQgVgBQgQABgKgJgABOHLQgHAFAAAHIAAABQAAAHAGAFQAGAEAJAAQAMAAAIgGQAIgHAAgJIAAgHQgLgFgNAAQgMAAgGAFgEAjCAH1QgEgFAAgGIAAgCQAAgFAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAFIAAACQAAAGgEAFQgEADgGAAQgGAAgEgDgAdZH1QgEgDAAgFIAAgyQAAgagXAAQgKABgHAGQgGAIAAAMIAAAxQAAAFgEADQgDADgGAAQgFAAgDgDQgEgDAAgFIAAhUQAAgFAEgEQADgEAFABQAGgBADAEQAEAEAAAFIAAAFQAMgSAVAAQARgBAKALQAKAMAAASIAAA5QAAAFgDADQgEADgFAAQgFAAgDgDgAXPH1QgEgDAAgFIAAhUQAAgFADgEQAEgEAFABQAFgBAEAEQADAEAAAFIAAALQAFgKAHgHQAHgGAIAAQAMgBAAAMQAAALgKABQgdAFAAAkIAAAgQAAAFgDADQgEADgFAAQgFAAgDgDgAUUH1QgEgDAAgFIAAh8QAAgFAEgEQADgDAFAAQAFAAAEADQAEAEAAAFIAAB8QAAAFgEADQgEADgFAAQgFAAgDgDgAOdH1QgEgDAAgFIAAhUQAAgFAEgEQADgEAFABQAGgBADAEQAEAEAAAFIAAALQAEgKAHgHQAHgGAIAAQAMgBAAAMQAAALgJABQgdAFAAAkIAAAgQAAAFgEADQgDADgGAAQgFAAgDgDgAJhH1QgEgDAAgFIAAhUQAAgFADgEQAEgEAFABQAFgBAEAEQADAEAAAFIAAALQAFgKAHgHQAHgGAIAAQAMgBAAAMQAAALgKABQgdAFAAAkIAAAgQAAAFgDADQgEADgFAAQgFAAgDgDgACvH1QgEgDAAgFIAAhUQAAgFAEgEQADgEAFABQAGgBADAEQAEAEAAAFIAAALQAEgKAHgHQAHgGAIAAQAMgBAAAMQAAALgJABQgdAFAAAkIAAAgQAAAFgEADQgDADgGAAQgFAAgDgDgAlmH1QgEgDAAgFIAAgyQAAgagVAAQgKABgGAGQgHAIAAAMIAAAxQAAAFgDADQgEADgFAAQgFAAgDgDQgEgDAAgFIAAgyQAAgMgGgHQgFgGgKgBQgKABgHAGQgGAIAAAMIAAAxQAAAFgDADQgEADgFAAQgFAAgDgDQgEgDAAgFIAAhUQAAgFADgEQAEgEAFABQAFgBAEAEQADAEAAAFIAAAFQANgSATAAQAXAAAJASQAOgSAWAAQARAAAKAKQAKALAAATIAAA5QAAAFgEADQgDADgFAAQgGAAgDgDgAgyH4QgFAAgEgDQgDgDAAgEQAAgHAFgGIA5hAIgyAAQgEAAgDgCQgDgDAAgEQAAgFADgCQADgDAEAAIBEAAQAFAAAEACQADAEAAADIAAABQAAAGgFAGIg4BAIAzAAQAFAAADADQACACAAAFQAAADgCAEQgDADgFAAgAZdF7QgEgDAAgGIAAgBQAAgFAEgDQAEgEAGABQAGgBAEAEQAEADAAAFIAAABQAAAGgEADQgEADgGAAQgGAAgEgDgAFDFGQgHgCAAgHQAAgEADgDQADgDAEAAIAEABQAPAIASAAQAhAAAAggIAAgIQgPATgWAAQgUAAgNgNQgPgOAAgXQAAgWAPgOQAOgNATAAQAWgBAPATIAAgGQAAgEAEgEQADgEAFABQAFAAAEADQADAEAAAFIAABJQAAAbgNANQgOAOgeAAQgVAAgTgKgAFYDgQgJAIAAANIAAAAQAAANAJAJQAJAHAMAAQANAAAJgHQAJgJAAgNIAAAAQAAgMgJgJQgJgIgNAAQgMAAgJAIgAVjEiQgPgPAAgYIAAAAQAAgYAOgPQAPgQAWAAQAYgBAOASQAMAPAAATQAAAGgDADQgDADgFABIhCAAQACAMAIAHQAIAHAMAAQAOAAALgJQADgDADAAQAEABADADQADACAAAFQAAAEgDADQgQAOgWAAQgXAAgQgQgAV1DfQgIAIgBAMIA2AAQgBgMgHgHQgHgJgMABQgLAAgHAHgAQpEiQgQgQAAgWIAAgBQAAgXAQgQQAQgQAYAAQAYAAAQAQQAQAPAAAYIAAAAQAAAXgQAPQgQARgYAAQgYAAgQgQgAQ5DjQgIAJAAAPIAAAAQAAAOAJAJQAJALAOAAQAOAAAJgKQAJgKAAgNIAAgBQAAgPgJgJQgJgKgOAAQgPAAgJAKgAO5EiQgPgQAAgWIAAgBQAAgXAPgQQAQgQAYAAQAVAAAQANQADADAAAFQAAAFgDADQgDAEgFgBQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAAPIAAAAQAAAOAJAKQAJAKANAAQANgBALgIQADgEAEAAQAEABADADQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAL7EiQgQgQAAgWIAAgBQAAgXAQgQQAQgQAYAAQAYAAAQAQQAQAPAAAYIAAAAQAAAXgQAPQgQARgYAAQgYAAgQgQgAMLDjQgIAJAAAPIAAAAQAAAOAJAJQAJALAOAAQAOAAAJgKQAJgKAAgNIAAgBQAAgPgJgJQgJgKgOAAQgPAAgJAKgAJPEiQgPgQAAgWIAAgBQAAgXAPgQQAQgQAYAAQAVAAAQANQADADAAAFQAAAFgDADQgDAEgFgBQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAAPIAAAAQAAAOAJAKQAJAKANAAQANgBALgIQADgEAEAAQAEABADADQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAHNEiQgQgQAAgWIAAgBQAAgXAQgQQAQgQAYAAQAYAAAQAQQAQAPAAAYIAAAAQAAAXgQAPQgQARgYAAQgYAAgQgQgAHdDjQgIAJAAAPIAAAAQAAAOAJAJQAJALAOAAQAOAAAJgKQAJgKAAgNIAAgBQAAgPgJgJQgJgKgOAAQgPAAgJAKgADOEiQgQgPAAgYIAAAAQAAgYAPgPQAOgQAXAAQAXgBAOASQANAPAAATQAAAGgDADQgEADgEABIhDAAQACAMAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEABADADQADACAAAFQAAAEgEADQgPAOgXAAQgXAAgPgQgADfDfQgHAIgCAMIA2AAQgBgMgHgHQgHgJgLABQgLAAgIAHgArTEiQgQgPAAgYIAAAAQAAgYAPgPQAOgQAXAAQAXgBAOASQANAPAAATQAAAGgDADQgEADgEABIhDAAQACAMAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEABADADQADACAAAFQAAAEgEADQgPAOgXAAQgXAAgPgQgArCDfQgHAIgCAMIA2AAQgBgMgHgHQgHgJgLABQgLAAgIAHgAtCEiQgQgQAAgWIAAgBQAAgXAQgQQAQgQAXAAQAWAAAPANQAEADAAAFQAAAFgDADQgEAEgEgBQgEAAgDgCQgLgJgMAAQgNAAgJAKQgJAJAAAPIAAAAQAAAOAJAKQAJAKAOAAQAMgBAMgIQADgEADAAQAEABADADQAEADAAAEQAAAFgEADQgQAPgWAAQgYAAgPgQgAv3EiQgPgPAAgYIAAAAQAAgYAOgPQAPgQAWAAQAYgBAOASQAMAPAAATQAAAGgDADQgDADgFABIhCAAQACAMAIAHQAIAHAMAAQAOAAALgJQADgDADAAQAEABADADQADACAAAFQAAAEgDADQgQAOgWAAQgXAAgQgQgAvlDfQgIAIgBAMIA2AAQgBgMgHgHQgHgJgM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AAhTQAAgFADgEQAEgDAFAAQAFAAAEADQADAEAAAFIAAAFQANgSAUAAQASAAAKALQAKAKAAATIAAA4QAAAGgEADQgDADgFABQgFgBgEgDgAlMEtQgEgDAAgGIAAhTQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFIAAAKQAEgJAHgHQAHgGAIAAQAMgBAAAMQAAALgJABQgdAFAAAlIAAAeQAAAGgEADQgDADgGABQgFgBgDgDgAoOEtQgEgDAAgGIAAhTQAAgFADgEQAEgDAFAAQAFAAAEADQADAEAAAFIAAAKQAFgJAHgHQAHgGAIAAQAMgBAAAMQAAALgKABQgdAFAAAlIAAAeQAAAGgDADQgEADgFABQgFgBgDgDgAphEtQgEgDAAgGIAAhTQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFIAAAKQAEgJAHgHQAHgGAIAAQAMgBAAAMQAAALgJABQgdAFAAAlIAAAeQAAAGgEADQgDADgGABQgFgBgDgDgA3GEtQgEgDAAgGIAAgxQAAgagXAAQgKAAgHAIQgGAHAAAMIAAAwQAAAGgEADQgDADgGABQgFgBgDgDQgEgDAAgGIAAhTQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFIAAAFQAMgSAVAAQARAAAKALQAKAKAAATIAAA4QAAAGgDADQgEADgFABQgFgBgDgDgA67EtQgEgDAAgGIAAgxQAAgagVAAQgKAAgGAIQgHAGAAANIAAAwQAAAGgDADQgEADgFABQgFgBgDgDQgEgDAAgGIAAgxQAAgMgGgGQgFgIgKAAQgKAAgHAIQgGAHAAAMIAAAwQAAAGgDADQgEADgFABQgFgBgDgDQgEgDAAgGIAAhTQAAgFADgEQAEgDAFAAQAFAAAEADQADAEAAAFIAAAFQANgSATAAQAXgBAJAUQAOgUAWABQARAAAKAKQAKALAAATIAAA4QAAAGgEADQgDADgFABQgGgBgDgDgA/8EtQgEgDAAgGIAAgxQAAgagVAAQgKAAgGAIQgHAGAAANIAAAwQAAAGgDADQgEADgFABQgFgBgDgDQgEgDAAgGIAAgxQAAgMgGgGQgFgIgKAAQgKAAgHAIQgGAHAAAMIAAAwQAAAGgDADQgEADgFABQgFgBgDgDQgEgDAAgGIAAhTQAAgFADgEQAEgDAFAAQAFAAAEADQADAEAAAFIAAAFQANgSATAAQAXgBAJAUQAOgUAWABQARAAAKAKQAKALAAATIAAA4QAAAGgEADQgDADgFABQgGgBgDgDgEgmfAEwQgFAAgEgEQgDgDAAgGIAAhzQAAgFADgEQAEgDAFgBIBSAAQAEABADADQAEADAAAEQAAAFgEADQgDADgEABIhGAAIAAAkIA9AAQAEAAADADQAEAEAAAEQAAAEgEAEQgDADgEAAIg9AAIAAAlIBHAAQAEABADADQAEADAAAEQAAAFgEADQgDAEgEAAgAK7C0QgEgEAAgFIAAgBQAAgGAEgDQAEgEAGAAQAGAAAEAEQAEADAAAGIAAABQAAAFgEAEQgEACgGAAQgGAAgEgCgAI+ArQgEgEAAgEIAAhzQAAgFADgEQAEgDAFAAQAFAAAEADQADAEAAAFIAAAHQAOgVAWAAQAUAAAOAPQAPAQAAAZIAAAAQAAAZgPAOQgOAPgUAAQgWgBgOgRIAAAlQAAAEgDAEQgEADgFAAQgFAAgDgDgAJbg/QgJAJAAAQIAAAAQAAAPAJAJQAJAJAMAAQANAAAJgJQAJgJAAgPIAAAAQAAgQgJgJQgJgJgNAAQgMAAgJAJgAlYArQgHgCAAgIQAAgEADgDQADgDAEAAIAEABIAIACQAKAAAFgMIABgCIgnhWIgBgGQAAgFADgEQADgDAGAAQAIgBADAKIAdBGIAahGQAEgKAIABQAFAAADADQADAEAAAEIgBAGIgmBcQgHAQgIAGQgIAHgNAAQgJAAgIgDgAM8AAQgQgPAAgWIAAgBQAAgXAQgQQAQgQAXgBQAWAAAPAOQAEADAAAGQAAAEgDADQgEADgEAAQgEABgDgDQgLgJgMAAQgNAAgJAKQgJAKAAAOIAAAAQAAAOAJAKQAJAJAOAAQAMAAAMgJQADgDADAAQAEABADADQAEADAAAEQAAAFgEACQgQAPgWAAQgYAAgPgQgAEQAAQgQgPAAgWIAAgBQAAgXAQgQQARgQAYgBQAYABAQAQQAQAPAAAYIAAAAQAAAXgQAPQgRAQgYAAQgYAAgQgQgAEhg+QgJAKAAAOIAAAAQAAAOAJAJQAKAKAOAAQAOAAAJgJQAJgJAAgOIAAgBQAAgPgJgJQgKgKgOAAQgOAAgJAKgAgwAAQgQgPAAgWIAAgBQAAgXAQgQQARgQAYgBQAXABAQAQQAQAPAAAYIAAAAQAAAXgQAPQgRAQgXAAQgYAAgQgQgAgfg+QgJAKAAAOIAAAAQAAAOAJAJQAKAKAOAAQANAAAJgJQAJgJAAgOIAAgBQAAgPgJgJQgKgKgNAAQgOAAgJAKgAifAAQgQgPAAgWIAAgBQAAgXAQgQQAQgQAXgBQAWAAAPAOQAEADAAAGQAAAEgDADQgEADgEAAQgEABgDgDQgLgJgMAAQgNAAgJAKQgJAKAAAOIAAAAQAAAOAJAKQAJAJAOAAQAMAAAMgJQADgDADAAQAEABADADQAEADAAAEQAAAFgEACQgQAPgWAAQgYAAgPgQgASpAIQgMgJAAgPIAAgBQAAgQANgJQALgJAUAAQAPABANAEIAAgDQAAgWgaAAQgMAAgLADIgEABQgEAAgDgDQgDgCAAgFQAAgHAGgDQARgFARAAQAYAAALAMQAMAKAAAWIAAAzQAAAFgEADQgDAEgFAAQgFgBgDgDQgEgCAAgFIAAgEQgNAQgVAAQgQgBgKgHgAS8geQgHAEAAAJIAAAAQAAAHAGAFQAGAEAJAAQAMAAAIgGQAIgHAAgKIAAgHQgLgEgNAAQgMAAgGAFgAOoAIQgLgJAAgPIAAgBQAAgQAMgJQAMgJAUAAQAOABAOAEIAAgDQAAgWgaAAQgNAAgLADIgDABQgFAAgDgDQgDgCAAgFQAAgHAHgDQAQgFASAAQAXAAAMAMQALAKAAAWIAAAzQAAAFgDADQgDAEgFAAQgGgBgDgDQgDgCAAgFIAAgEQgNAQgWAAQgPgBgLgHgAO7geQgGAEAAAJIAAAAQAAAHAGAFQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgHQgLgEgNAAQgLAAgHAFgAHJAIQgLgJAAgPIAAgBQAAgQAMgJQAMgJAUAAQAOABAOAEIAAgDQAAgWgaAAQgNAAgLADIgDABQgFAAgDgDQgDgCAAgFQAAgHAHgDQAQgFASAAQAXAAAMAMQALAKAAAWIAAAzQAAAFgDADQgDAEgFAAQgGgBgDgDQgDgCAAgFIAAgEQgNAQgWAAQgPgBgLgHgAHcgeQgGAEAAAJIAAAAQAAAHAGAFQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgHQgLgEgNAAQgLAAgHAFgAUbAKQgEgEAAgGIAAAAQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAA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ANAJAHQAIAHAMAAQAOAAALgJQADgCADgBQAEAAADADQADAEAAADQAAAEgEAEQgPAOgXAAQgXAAgPgPgANpkKQgHAIgCANIA2AAQgBgNgHgIQgHgHgLgBQgLAAgIAIgALpjHQgQgQAAgXIAAAAQAAgXAQgQQAQgRAXAAQAWAAAPAOQAEADAAAGQAAAEgDADQgEADgEABQgEgBgDgCQgLgJgMAAQgNAAgJAKQgJAJAAAOIAAABQAAAOAJAKQAJAJAOAAQAMABAMgKQADgCADAAQAEgBADAEQAEADAAAEQAAAFgEADQgQAPgWAAQgYAAgPgQgAJmjHQgQgQAAgXIAAAAQAAgXAQgQQARgRAYAAQAYAAAQARQAQAQAAAWIAAABQAAAWgQARQgRAQgYAAQgYAAgQgQgAJ3kGQgJAJAAAOIAAABQAAAOAJAJQAKALAOgBQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgKQgKgKgOAAQgOAAgJAKgAFnjHQgQgQAAgXIAAAAQAAgXAQgQQARgRAYAAQAYAAAQARQAQAQAAAWIAAABQAAAWgQARQgRAQgYAAQgYAAgQgQgAF4kGQgJAJAAAOIAAABQAAAOAJAJQAKALAOgBQAOAAAJgJQAJgKAAgOIAAAAQAAgOgJgKQgKgKgOAAQgOAAgJAKgAD4jHQgQgQAAgXIAAAAQAAgXAQgQQAQgRAXAAQAWAAAPAOQAEADAAAGQAAAEgDADQgEADgEABQgEgBgDgCQgLgJgMAAQgNAAgJAKQgJAJAAAOIAAABQAAAOAJAKQAJAJAOAAQAMABAMgKQADgCADAAQAEgBADAEQAEADAAAEQAAAFgEADQgQAPgWAAQgYAAgPgQgABDjGQgPgPAAgZIAAgBQAAgWAOgQQAPgRAWAAQAYABAOAQQAMAQAAATQAAAFgDAEQgDAEgFgBIhCAAQACANAIAHQAIAHAMAAQAOAAALgJQADgCADgBQAEAAADADQADAEAAADQAAAEgDAEQgQAOgWAAQgXAAgQgPgABVkKQgIAIgBANIA2AAQgBgNgHgIQgHgHgMgBQgLAAgHAIgAl8jHQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAQAAAWIAAABQAAAWgQARQgQAQgYAAQgYAAgQgQgAlskGQgIAJAAAOIAAABQAAAOAJAJQAJALAO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QARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgANNnOQgIAKAAANIAAABQAAAOAJAKQAJAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgJgKgOAAQgPAAgJAKgAIamPQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAIqnOQgIAKAAANIAAABQAAAOAJAKQAJAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgJgKgOAAQgPAAgJAKgAC+mPQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgADOnOQgIAKAAANIAAABQAAAOAJAKQAJAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgJgKgOAAQgPAAgJAKgAhKmPQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAPARQAQAPAAAXIAAABQAAAWgQAQQgPARgYAAQgYAAgQgQgAg6nOQgIAKAAANIAAABQAAAOAJAKQAJAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgJgKgOAAQgPAAgJAKgApjmOQgQgQAAgYIAAgBQAAgXAPgPQAOgRAXAAQAXABAOARQANAOAAAVQAAAEgDAEQgEADgEAAIhDAAQACANAJAHQAIAHAMAAQAOAAALgJQADgDADABQAEAAADACQADAEAAAEQAAADgEAEQgPAOgXAAQgXAAgPgPgApSnSQgHAIgCAMIA2AAQgBgMgHgIQgHgHgLgBQgLAAgIAIgAyImPQgQgQAAgXIAAAAQAAgXAQgQQARgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgRARgYAAQgYAAgQgQgAx3nOQgJAKAAANIAAABQAAAOAJAKQAKAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgKgKgOAAQgOAAgJAKgA7ZmPQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgA7JnOQgIAKAAANIAAABQAAAOAJAKQAJAKAOAAQAOAAAJgKQAJgJAAgPIAAAAQAAgOgJgKQgJgKgOAAQgPAAgJAKgAe4mNQgPgQAAgZIAAgBQAAgZAPgPQAOgPAUAAQAWABAOASIAAgtQAAgFAEgEQADgEAFABQAFgBAEAEQADAEAAAFIAAB8QAAAEgDAEQgEADgFAAQgFAAgDgDQgEgEAAgEIAAgHQgOATgWAAQgUABgOgOgAfKnPQgJAJAAAPIAAABQAAAPAKAKQAIAJANAAQAMAAAJgJQAJgLAAgOIAAgBQAAgOgJgKQgJgKgMAAQgNAAgJAKgAcKmMQgEgDAAgFQAAgEADgEQACgCAFAAIAFABQAPAKAPAAQARAAAAgLIAAAAQAAgGgIgDIgQgHQgPgDgHgGQgLgHAAgOQAAgPALgKQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDADgEgBIgFgBQgOgHgLAAQgPABAAAJIAAABQAAAFAHAEIARAGQAPAFAHAFQALAIAAANIAAABQAAAQgLAIQgLAJgRgBQgWAAgTgMgAXfmLQgKgKAAgTIAAg4QAAgFAEgDQADgFAFAAQAFAAAEAFQADADAAAFIAAAxQAAAZAXABQALAAAGgIQAHgHAAgLIAAgxQAAgFADgDQAEgFAFAAQAFAAAEAFQADADAAAFIAABUQAAAEgDAEQgEADgFAAQgFAAgEgDQgDgEAAgEIAAgGQgNASgUAAQgSABgKgMgAT0mIQgMgIAAgQIAAAAQAAgRANgJQALgIAUAAQAPgBANAFIAAgDQAAgXgaAAQgMABgLAEIgEAAQgEAAgDgCQgDgEAAgDQAAgIAGgCQARgHARAAQAYABALALQAMALAAAWIAAA0QAAAFgEADQgDADgFAAQgFAAgDgCQgEgDAAgFIAAgDQgNAPgVgBQgQABgKgJgAUHmuQgHAFAAAHIAAABQAAAIAGAEQAGAEAJAAQAMAAAIgGQAIgGAAgKIAAgHQgLgFgNAAQgMAAgGAFgASimeIAAg4IgEAAQgEgBgDgDQgDgCAAgFQAAgEADgDQADgDAEAAIAEAAIAAgSQAAgFAEgEQAEgDAFAAQAFAAADADQAEAEAAAFIAAASIATAAQAEAAADADQADADAAAEQAAAFgDACQgDADgEABIgTAAIAAAzQAAANANABIAGgBQAEAAADADQADADAAAEQAAAHgHADQgIACgIAAQgfAAAAgegAQ3mMQgEgDAAgFQAAgEADgEQACgCAFAAIAFABQAPAKAPAAQARAAAAgLIAAAAQAAgGgIgDIgQgHQgPgDgHgGQgLgHAAgOQAAgPALgKQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDADgEgBIgFgBQgOgHgLAAQgPABAAAJIAAABQAAAFAHAEIARAGQAPAFAHAFQALAIAAANIAAABQAAAQgLAIQgLAJgRgBQgWAAgTgMgAPOmSIAAAGQAAAEgEAEQgDADgGAAQgEAAgEgDQgEgEAAgEIAAh8QAAgFAEgEQADgEAFABQAGgBADAEQAEAEAAAFIAAAuQAOgTAWgBQATAAAOAPQAQAPAAAZIAAABQAAAZgPAQQgOAOgUgBQgWAAgOgSgAPWnPQgJAKAAAOIAAABQAAAOAJALQAJAJANAAQANAAAIgJQAJgKAAgPIAAgBQAAgOgJgKQgJgKgMAAQgNAAgJAKgAKOmMQgEgDAAgFQAAgEADgEQACgCAFAAIAFABQAPAKAPAAQARAAAAgLIAAAAQAAgGgIgDIgQgHQgPgDgHgGQgLgHAAgOQAAgPALgKQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDADgEgBIgFgBQgOgHgLAAQgPABAAAJIAAABQAAAFAHAEIARAGQAPAFAHAFQALAIAAANIAAABQAAAQgLAIQgLAJgRgBQgWAAgTgMgAEymMQgEgDAAgFQAAgEADgEQACgCAFAAIAFABQAPAKAPAAQARAAAAgLIAAAAQAAgGgIgDIgQgHQgPgDgHgGQgLgHAAgOQAAgPALgKQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDADgEgBIgFgBQgOgHgLAAQgPABAAAJIAAABQAAAFAHAEIARAGQAPAFAHAFQALAIAAANIAAABQAAAQgLAIQgLAJgRgBQgWAAgTgMgAA3mNQgPgQAAgZIAAgBQAAgZAPgPQAOgPAUAAQAWABAOASIAAgtQAAgFAEgEQADgEAFABQAFgBAEAEQADAEAAAFIAAB8QAAAEgDAEQgEADgFAAQgFAAgDgDQgEgEAAgEIAAgHQgOATgWAAQgUABgOgOgABJnPQgJAJAAAPIAAABQAAAPAKAKQAIAJANAAQAMAAAJgJQAJgLAAgOIAAgBQAAgOgJgKQgJgKgMAAQgNAAgJAKgAifmeIAAg4IgEAAQgEgBgDgDQg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");
	this.shape_8.setTransform(265.175,285.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#930037").s().p("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");
	this.shape_9.setTransform(258.425,172.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.r_bien, new cjs.Rectangle(0,0,530.1,404.5), null);


(lib.oportinidad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:1,off:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.oportunidades();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1715,0.1715);

	this.instance_1 = new lib.oportunidades_no();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.1621,0.1621);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,36.2);


(lib.numero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{n1:0,n2:1,n3:2,n4:3,n5:4});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer_1
	this.instance = new lib.pin1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3942,0.3942);

	this.instance_1 = new lib.pin2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3942,0.3942);

	this.instance_2 = new lib.pin3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.3942,0.3942);

	this.instance_3 = new lib.pin4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.3942,0.3942);

	this.instance_4 = new lib.pin5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.3942,0.3942);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,88.7);


(lib.mc_brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCFC02").ss(2,1,1).p("ACvAAQAABJgzAzQgzAzhJAAQhIAAgzgzQgzgzAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_brillo, new cjs.Rectangle(-1,-1,37,37), null);


(lib.marcador2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.perfil2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2853,0.2853);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.marcador2, new cjs.Rectangle(0,0,103,103), null);


(lib.marcador1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.perfil1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.marcador1, new cjs.Rectangle(0,0,103,102.8), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#861938").ss(2).p("EBFeAD1InqnpMhwVAAAIjcHpIvoAA");
	this.shape.setTransform(445.3534,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.line, new cjs.Rectangle(-1,-1,892,51.1), null);


(lib.letrero05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF/EDQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAGPDEQgIAJAAAOIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgPgJgJQgJgKgOAAQgPAAgJAKgADTEDQgPgQAAgXIAAAAQAAgXAPgQQAQgRAYAAQAVAAAQAOQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAAOIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQAEAAADAEQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAhSEDQgQgPAAgYIAAgBQAAgXAPgPQAOgRAXAAQAXAAAOARQAMAPAAAUQAAAFgDAEQgDADgEAAIhDAAQACANAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgPAOgXAAQgXAAgPgQgAgUDUQgBgMgHgIQgHgIgLAAQgLAAgIAIQgHAIgCAMIA2AAIAAAAgABZEKQgMgJAAgPIAAgBQAAgQANgJQALgJAUAAQAPAAANAFIAAgDQAAgXgaAAQgMAAgLAEIgEABQgEAAgDgDQgDgDAAgEQAAgHAGgDQARgGARAAQAYAAALAMQAMALAAAWIAAA0QAAAFgEADQgDADgFAAQgFAAgDgDQgEgDAAgEIAAgEQgNAPgVAAQgQAAgKgIgABsDkQgHAEAAAIIAAABQAAAHAGAFQAGAEAJAAQAMAAAIgGQAIgHAAgKIAAgHQgLgEgNAAQgMAAgGAFgAlYEKQgLgJAAgPIAAgBQAAgQAMgJQAMgJAUAAQAOAAAOAFIAAgDQAAgXgaAAQgNAAgLAEIgDABQgFAAgDgDQgDgDAAgEQAAgHAHgDQAQgGASAAQAXAAAMAMQALALAAAWIAAA0QAAAFgDADQgDADgFAAQgGAAgDgDQgDgDAAgEIAAgEQgNAPgWAAQgPAAgLgIgAlFDkQgGAEAAAIIAAABQAAAHAGAFQAFAEAJAAQAMAAAIgGQAIgHAAgKIAAgHQgLgEgNAAQgLAAgHAFgApLEHQgKgKAAgTIAAg4QAAgFADgEQAEgEAFAAQAFAAADAEQAEAEAAAFIAAAxQAAAZAXAAQAK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");
	this.shape.setTransform(98.025,41.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("AsLGaQjIAAAAjIIAAmjQAAjIDIAAIYXAAQDIAAAADIIAAGjQAADIjIAAg");
	this.shape_1.setTransform(98.0209,41,0.9184,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrero05, new cjs.Rectangle(8,0,180,82), null);


(lib.letrero04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArKC0QgHgCAAgHQAAgEADgDQADgDAEAAIAEABQAPAIASAAQAhAAAAggIAAgJQgPAUgWAAQgUAAgNgNQgPgOAAgXQAAgWAPgOQAOgOATAAQAWAAAPASIAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQADAEAAAFIAABJQAAAagNANQgOAPgeAAQgVAAgTgKgAq1BOQgJAIAAANIAAAAQAAANAJAIQAJAIAMAAQANAAAJgIQAJgIAAgNIAAAAQAAgNgJgIQgJgIgNAAQgMAAgJAIgAHCCQQgPgQAAgXIAAAAQAAgXAPgQQAQgRAYAAQAVAAAQAOQADADAAAFQAAAFgDADQgDADgFAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAAOIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQAEAAADAEQADADAAAEQAAAFgDADQgQAPgXAAQgXAAgQgQgAFKCQQgQgPAAgYIAAgBQAAgXAPgPQAOgRAXAAQAXAAAOARQANAPAAAUQAAAFgDAEQgEADgEAAIhDAAQACANAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgPAOgXAAQgXAAgPgQgAGIBhQgBgMgHgIQgHgIgLAAQgLAAgIAIQgHAIgCAMIA2AAIAAAAgAAmCQQgQgQAAgXIAAAAQAAgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgQgQgAA2BRQgIAJAAAOIAAABQAAAOAJAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgPgJgJQgJgKgOAAQgPAAgJAKgAhJCQQgPgQAAgXIAAAAQAAgXAPgQQAQgRAYAAQAVAAAPAOQADADAAAFQAAAFgDADQgDADgEAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgJAJAAAOIAAABQAAAOAJAKQAJAJANAAQANAAALgJQADgDAEAAQADAAADAEQADADAAAEQAAAFgDADQgPAPgXAAQgXAAgQgQgAj9CQQgQgPAAgYIAAgBQAAgXAPgPQAOgRAXAAQAXAAAOARQANAPAAAUQAAAFgDAEQgEADgEAAIhDAAQACANAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgP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");
	this.shape.setTransform(98.025,31.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("AsLE2QjIAAAAjIIAAjbQAAjIDIAAIYXAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(98,31);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrero04, new cjs.Rectangle(0,0,196,62), null);


(lib.letrero03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVC0QgIgCAAgHQAAgEAEgDQADgDAEAAIAEABQAOAIARAAQAiAAAAggIAAgJQgPAUgWAAQgTAAgOgNQgOgOAAgXQAAgWAOgOQAOgOATAAQAWAAAPASIAAgFQAAgEAEgEQADgEAFAAQAFAAADAEQAEAEAAAFIAABJQAAAagOANQgOAPgdAAQgUAAgTgKgAAABOQgJAIAAANIAAAAQAAANAJAIQAIAIAMAAQANAAAJgIQAJgIAAgNIAAAAQAAgNgJgIQgJgIgNAAQgMAAgIAIgAGiCQQgQgQgBgXIAAAAQABgXAQgQQAQgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgZAAQgXAAgQgQgAGyBRQgIAJAAAOIAAABQgBAOAKAJQAJAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgPgJgJQgJgKgPAAQgOAAgJAKgAD2CQQgQgQAAgXIAAAAQAAgXAQgQQAQgRAXAAQAWAAAPAOQAEADAAAFQAAAFgDADQgEADgEAAQgEAAgDgCQgLgJgMAAQgNAAgIAKQgKAJABAOIAAABQgBAOAKAKQAIAJAOAAQANAAALgJQADgDAEAAQADAAADAEQAEADAAAEQAAAFgEADQgQAPgWAAQgYAAgPgQgABzCQQgPgQAAgXIAAAAQAAgXAPgQQARgRAYAAQAYAAAQARQAQAPAAAXIAAABQAAAWgQAQQgQARgYAAQgYAAgRgQgACEBRQgJAJAAAOIAAABQABAOAIAJQAKAKAOAAQAOAAAJgJQAJgKAAgOIAAAAQAAgPgJgJQgKgKgNAAQgPAAgJAKgAiLCQQgPgPAAgYIAAgBQAAgXAPgPQAOgRAWAAQAYAAAOARQANAPAAAUQgBAFgDAEQgDADgFAAIhCAAQACANAIAHQAIAHAMAAQAOAAALgJQAEgDADAAQADAAAEADQADADAAAEQgBAEgDAEQgQAOgWAAQgXAAgQgQgAhMBhQgBgMgHgIQgHgIgMAAQgLAAgHAIQgHAIgCAMIA2AAIAAAAgAn0CQQgQgPAAgYIAAgBQAAgXAPgPQAPgRAWAAQAYAAANARQANAPAAAUQAAAFgDAEQgEADgEAAIhCAAQACANAIAHQAIAHAMAAQAOAAALgJQADgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgPAOgXAAQgXAAgPgQgAm1B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");
	this.shape.setTransform(79.5,31.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("ApSE2QjIAAAAjIIAAjbQAAjIDIAAISlAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(79.5,31);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrero03, new cjs.Rectangle(0,0,159,62), null);


(lib.letrero02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKCgQgMgMAAgWQAAgYAQgTQASgVAbAAQAUAAALAMQALALAAASIgBAMQgDALgJAAIhEAAIAAACQAAALAHAGQAHAIANAAQAMgBAJgGQAFgCADAAQAEAAACACQADADAAAEQAAAGgFADQgPALgUAAQgWgBgNgMgAAjBaQgJAIgEAMIA3AAIABgIQAAgIgFgGQgGgGgKAAQgMAAgKAIgAD1CgQgMgMAAgVQAAgcASgSQASgTAXAAQAYAAALAVIANgwQADgMALAAQAGAAADAEQACAFgCAGIggB5QgDAMgLAAQgLAAABgKIABgFQgQAQgSAAQgSAAgLgMgAENBfQgLANAAASQAAALAHAIQAHAGALABQAPAAAMgNQALgNAAgQQAAgMgHgHQgIgIgLAAQgPAAgLAMgAB3CkQgJgIAAgMQAAgTANgKQANgKAUAAQAQAAARAFIABgBIABgJQAAgQgXAAQgLAAgKADIgEABQgFgBgCgDQgDgCAAgFQAAgGAIgDQAPgFAQAAQAVAAALAJQALAIAAAPQAAAHgDAJIgMAwQgEAMgKAAQgMAAACgLIABgEQgPAQgUAAQgOAAgJgIgACOB+QgIAGAAAIQAAAHAFAEQAFAEAIAAQAKAAAKgIQAJgGADgMIACgEQgNgEgNAAQgLAAgHAFgAlTCkQgMgJAAgQIAAAAQAAgQANgKQALgIAUAAQAPAAANAFIAAgDQAAgXgaAAQgMAAgLAEIgEABQgEAAgDgDQgDgDAAgEQAAgHAGgDQARgGARAAQAYAAALAMQAMALAAAWIAAA0QAAAEgEADQgDAEgFAAQgFAAgDgDQgEgDAAgEIAAgEQgNAPgVAAQgQAAgKgIgAlAB+QgHAEAAAIIAAAAQAAAIAGAFQAGADAJABQAMAAAIgHQAIgGAAgKIAAgHQgLgEgNgBQgMAAgGAGgAjeCnQgDgDAAgFIAAh8QAAgFADgDQAEgEAFAAQAFAAADAEQAEADAAAFIAAB8QAAAFgEADQgDAEgFAAQgFAAgEgEgAhrCqQgGAAgDgEQgDgFACgGIAfhyQADgMAKAAQAHAAACAEQADAEgCAIIgbBmIA8AAQAFABADADQADADAAAFQAAAEgDAEQgDADgFAAgAEdgqQgQgPAAgYIAAgBQAAgXAPgQQAOgQAXAAQAXAAAOARQANAPAAAUQAAAFgDADQgEAEgEAAIhDAAQACAMAJAIQAIAGAMABQAOgBALgIQADgDADAAQAEAAADADQADADAAAEQAAAEgEADQgPAOgXABQgXAAgPgQgAFbhZQgBgMgHgIQgHgIgLAAQgLAAgIAIQgHAHgCANIA2AAIAAAAgACugrQgQgPAAgXIAAAAQAAgXAQgRQAQgQAXAAQAWAAAPANQAEADAAAGQAAAFgDADQgEADgEAAQgEAAgDgCQgLgKgMABQgNgBgJALQgJAJAAAOIAAABQAAAOAJAJQAJAKAOAAQAMAAAMgJQADgDADAAQAEAAADADQAEADAAAFQAAAEgEADQgQAPgWABQgYgBgPgQgAArgrQgQgPAAgXIAAAAQAAgXAQgRQARgQAYAAQAYAAAQAQQAQAQAAAXIAAABQAAAWgQAQQgRARgYAAQgYgBgQgQgAA8hpQgJAJAAAOIAAABQAAAOAJAJQAKAKAOAAQAOAAAJgKQAJgJAAgOIAAAAQAAgPgJgJQgKgLgOABQgOgBgJALgAjTgrQgQgPAAgXIAAAAQAAgXAQgRQARgQAYAAQAYAAAQAQQAQAQAAAXIAAABQAAAWgQAQQgRARgYAAQgYgBgQgQgAjChpQgJAJAAAOIAAABQAAAOAJAJQAKAKAOAAQAOAAAJgKQAJgJAAgOIAAAAQAAgPgJgJQgKgLgOABQgOgBgJALgAlegwQgUgUAAgeIAAgBQAAgfAUgUQAVgVAfAAQAcAAAUAPQAFAEAAAGQAAAFgEAEQgDADgFAAQgEAAgEgCQgPgNgSAAQgUAAgNAPQgNAOAAAVIAAAAQAAAVANAOQANAOAUAAQATAAAQgNQADgDAEAAQAFAAAEAEQADADAAAFQAAAFgEAEQgVASgeABQgeAAgVgWgAgQggQgDgDAAgFIAAgxQAAgagXAAQgLAAgGAHQgHAIAAAMIAAAwQAAAFgDADQgEAEgFAAQgFAAgDgEQgEgDAAgFIAAhUQAAgEADgEQAEgEAFAAQAFAAAEAEQADAEAAAEIAAAGQANgTAUAAQASAAAKALQAJALAAASIAAA5QAAAFgEADQgCAEgFAAQgFAAgEgEg");
	this.shape.setTransform(64.575,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("Al2E2QjIAAAAjIIAAjbQAAjIDIAAILtAAQDIAAAADIIAADbQAADIjIAAg");
	this.shape_1.setTransform(64.572,31,1.1226,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrero02, new cjs.Rectangle(0,0,129.1,62), null);


(lib.letrero01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIBkQgGgDgCgGIgBgHIAAiUIAAgEIgEAAIgrAAQgKAAgFgHQgGgHAEgKQAFgJAKAAICFAAQAHAAAEAFQAFAFAAAGQABAGgFAFQgEAFgGABIgwAAIgDAAIgBAEIAACUQAAAPgPADIgCAAQgDAAgFgCg");
	this.shape.setTransform(111.0823,44.6991,0.6934,0.6929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLBYIAAgGIAAilQAAgNANgEIAEAAIB1AAQAGAAAEAEQAFAEABAIQAAAGgFAFQgFAEgHAAIheAAIgEABIAAADIAAAuQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAIBSAAQAJAAAEAHQAFAGgCAHQgEALgLAAIhSAAIgEAAIAAAEIAAAvIAAADIADABIBgAAQANAAADALQADAIgFAGQgEAGgIAAIh2AAQgOAAgEgNg");
	this.shape_1.setTransform(98.091,44.6558,0.6934,0.6929);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBiQg6gVgLg6QgGghAPgeQAPgfAfgQQAWgMAcABQAjACAcAYIABABIABAAIABgEQACgGAFgDQAGgEAHABQAGABAEAFQAEAFAAAGIgBAtQAAAHgFAFQgEAEgHAAIguABQgHAAgFgFQgFgFAAgHQAAgHAEgFQAFgFAHgBIAGAAIAAgBIgFgEQgSgPgYAAQgXAAgTAQQgTAPgFAYQgFAaAQAYQAPAYAcAFQAuAIAgggQAHgIALADQAJACADAKQACAJgHAIQgPAQgUAJQgTAJgZACIgLAAQgTAAgNgFg");
	this.shape_2.setTransform(30.0758,44.8071,0.6934,0.6929);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhBBIIgSgTIAAADQAAAGgFAFQgGAFgHAAQgHgBgFgFQgEgEAAgHIAAgsQAAgIAFgEQAGgFAHAAIAsAAQANAAAEAMQADANgLAGIgHACIgEABIAHAKQAQAVAUAGQAVAIAVgFQAWgFAPgRQATgVgBgbQgBgYgQgSQgPgTgYgFQgWgFgUAJQgVAKgLAUQgEAIgIABQgIACgHgGQgKgJAHgNQAKgSARgNQAXgTAdgDQApgEAhAYQAgAZAIApQAHAmgUAjQgVAigmALQgSAFgRAAQgpAAghghg");
	this.shape_3.setTransform(46.5694,44.6768,0.6934,0.6929);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBBcIgBgHIAAh4IgBAAIgwBIIgFAFQgEAFgGAAQgGAAgFgFIgDgEIgvhGIgDgCIAAB2QAAAOgLAEQgJACgHgEQgGgFgBgIIAAioQAAgMAHgFQAFgDAIAAQAMgBAGALIA8BeIACgDIA8hdQAFgIALAAQAMgBAEAGQAFAHAAAGIAACoQAAAOgOADIgEABQgLAAgFgLg");
	this.shape_4.setTransform(64.5354,44.6651,0.6934,0.6929);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABQBnQgHgBgEgFQgFgFAAgHIAAh4IgBAAIgCADIgvBGQgHAKgJgBQgHgBgFgIIgvhGIgDgCIAAB2QAAAIgFAFQgFAGgHAAQgHAAgFgFQgFgFAAgHIAAipQAAgIAFgFQAFgFAIAAQANgBAIAMIA7BdIA+hfQAGgLAPACQAGAAAFAFQAEAEABAHIAAAGIAAChIAAAHQgCAGgFAEQgFAEgGAAIgBAAg");
	this.shape_5.setTransform(82.1124,44.6685,0.6934,0.6929);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AGfCqQgEgEAAgGIAAgCQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIAAACQAAAGgEAEQgEAEgGAAQgGAAgEgEgAGpCCQgHAAgBgIIgCgSQgCgJAJgBQAegCAAgTIAAgBQAAgIgGgFQgHgGgKAAQgPAAgNALQgDADgEAAQgFAAgDgDQgDgDAAgFQAAgFAEgDQARgRAZAAQAVAAANALQANALAAATQAAAhgoAHIgBAKQgBAIgIAAgAB7gkQgQgPAAgYIAAgBQAAgXAPgPQAOgRAXAAQAXAAAOARQANAPAAAUQAAAFgDAEQgEADgEAAIhDAAQACANAJAHQAIAHAMAAQAOAAALgJQADgDADAAQAEAAADADQADADAAAEQAAAEgEAEQgPAOgXAAQgXAAgPgQgAC5hTQgBgMgHgIQgHgIgLAAQgLAAgIAIQgHAIgCAMIA2AAIAAAAgAg5gkQgPgPAAgYIAAgBQAAgXAOgPQAPgRAWAAQAXAAAOARQAMAPAAAUQAAAFgDAEQgDADgFAAIhBAAQACANAIAHQAIAHAMAAQAOAAAKgJQADgDADAAQAEAAADADQADADAAAEQAAAEgDAEQgQAOgVAAQgXAAgQgQgAAFhTQgBgMgGgIQgHgIgMAAQgLAAgHAIQgIAIgBAMIA1AAIAAAAgAlYgqQgUgUAAgeIAAgBQAAgeAVgVQAVgVAfAAQAgAAAVAVQAUAVAAAeIAAAAQAAAYgOATIAJAIQAFAEAAAFQAAAFgEAEQgDADgFAAQgFAAgDgEIgKgJQgTAOgYAAQggAAgVgWgAlFiAQgNAOAAAVIAAAAQAAAVANAOQAOAPAUAAQAOAAALgHIgSgOQgEgEAAgGQAAgFADgDQADgEAFAAQAFAAAEAEIASAQQAHgMAAgOIAAgBQAAgUgOgPQgNgPgVAAQgUAAgOAPgADlghQgEgDAAgGQAAgEADgDQACgDAFAAIAFACQAPAKAPAAQARAAAAgLIAAgBQAAgFgIgEIgQgGQgPgEgHgFQgLgIAAgOQAAgPALgJQAKgIARAAQARAAAQAIQAGAEAAAGQAAAEgDADQgDACgEAAIgFgBQgOgHgLAAQgPAAAAAKIAAABQAAAFAHAEIARAGQAPAFAHAFQALAIAAANIAAAAQAAAQgLAJQgLAIgRAAQgWAAgTgMgAi2ggQgKgKAAgTIAAg4QAAgFAEgEQADgEAFAAQAFAAAEAEQADAEAAAFIAAAxQAAAZAXAAQALAAAGgHQAHgHAAgMIAAgwQAAgFADgEQAEgEAFAAQAFAAAEAEQADAEAAAFIAABTQAAAFgDAEQgEADgFAAQgFAAgEgDQgDgEAAgFIAAgFQgNASgUAAQgSAAgKgLgAnOggQgNgLAAgTQAAgiAogGIABgKQABgIAHAAIABAAQAIAAABAIIACASQABAIgJACQgdACAAATIAAABQAAAIAGAFQAHAGAKAAQAPAAAMgLQAEgDAEAAQAEAAAEADQADADAAAFQAAAFgEADQgSARgZAAQgVAAgMgLgAmziKQgEgEAAgGIAAgCQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGIAAACQAAAGgEAEQgEAEgHAAQgGAAgEgEgAgciRIACgEIALgSQAEgGAGAAQAFAAADADQAFACAAADQAAADgDADIgNANQgFAFgJAAQgGAAAAgEg");
	this.shape_6.setTransform(78.575,33.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C52").s().p("AogF8QjIAAAAjIIAAlnQAAjIDIAAIRBAAQDIAAAADIIAAFnQAADIjIAAg");
	this.shape_7.setTransform(74.5,33.9777,1,0.8947);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.letrero01, new cjs.Rectangle(0,0,149,68), null);


(lib.laberinto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.laberinto2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.laberinto, new cjs.Rectangle(0,0,636,486.2), null);


(lib.instrucciones_generales = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMCYQgIgFgEgJQgCgEAAgGIAAjiIAAgFQgBgBgFAAIhCAAQgPAAgHgKQgKgNAHgNQAHgOAPAAIDMAAQAKAAAGAHQAHAHABAKQAAAKgGAHQgGAIgKAAIhJABQgFAAAAAFIAADjQAAAXgXAEIgEAAQgGAAgGgDg");
	this.shape.setTransform(299.6729,433.5691,0.4171,0.4175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXCaQgVAAgGgUIAAkEQAAgVAUgFIAGgBICxAAQAJAAAHAGQAIAHABALQAAAKgHAHQgHAHgLAAIiQAAQgFAAgBABQgBAAAAAFIAABGQAAAFAGAAIB9AAQANAAAHAKQAIAJgEALQgCAHgHAFQgGAEgHAAIh/AAQgEAAgBABQgBABAAAEIAABIIABAFIAFABICRAAQAVAAAFASQADALgHAJQgHAKgLAAg");
	this.shape_1.setTransform(287.7944,433.5195,0.4171,0.4175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyCUQhXgfgRhYQgKgzAXguQAWguAwgZQAkgSAoABQA4ADApAlIADACIABgEQAEgTATgCQALgCAJAIQAJAIAAAKIgBBGQAAAKgHAIQgIAHgKAAIhGAAQgLAAgHgHQgHgHgBgLQAAgLAHgHQAHgIAKgBIAKAAIABgCIgEgCQgdgbgnAAQgkAAgdAYQgdAYgHAkQgIApAXAkQAYAkAqAHQBIANAvgxQANgMAPAEQAOAEAEAPQAEAOgLALQgXAZgeAOQgcANgoADIgOABQgdAAgXgJg");
	this.shape_2.setTransform(225.5765,433.6616,0.417,0.4174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBvIgWgaIgDgEIgBAEQgBAKgHAIQgIAHgMAAQgKgBgHgHQgIgIAAgKIABhDQAAgMAIgHQAIgHALAAIBEAAQAJAAAHAFQAHAFACAIQACAJgDAIQgDAIgIAFIgLADIgGABIALAPQAZAgAeAKQAgALAggHQAhgHAXgaQAdgggCgrQgBgjgXgdQgYgcgkgIQghgHgfAOQggAPgSAeQgGAMgMACQgMACgKgIQgHgGgCgKQgBgJAFgJQAQgcAZgTQAkgcAsgFQA+gHAxAmQAzAlALA+QALA7ggA1QgfA0g6AQQgbAIgaAAQg+AAg0gxg");
	this.shape_3.setTransform(240.6532,433.5366,0.417,0.4174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJCYQgLgHgBgOIgBj/QAAgRAMgJQAGgEANgBQASAAAJAPIBcCRIADgEIBbiOQAIgNAQgBQAQgCAKALQAHAHAAAMIAAEAQAAALgHAIQgIAIgMAAQgLAAgHgIQgIgHAAgLIAAi3IgBgBIhKBuIgHAIQgHAIgJAAQgKgBgHgHIgFgHIhKhuIgBABIAAC0QAAAUgQAGQgGACgFAAQgHAAgGgEg");
	this.shape_4.setTransform(257.0894,433.5173,0.4171,0.4175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AB6CcQgKgBgHgIQgHgIgBgKIAAi2IgBgBIhKBvQgKAQgPgCQgKgBgIgMIhIhsIgEgDIAAC1QAAAMgHAIQgIAIgMAAQgLgBgHgHQgHgHgBgLIAAkBQAAgMAIgIQAIgIANAAQAUgBALASIBaCPIBeiSQAKgQAWACQAKABAHAHQAHAHABAKIgBEJQgCAJgIAHQgHAFgIAAIgDAAg");
	this.shape_5.setTransform(273.1668,433.5326,0.4171,0.4175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuA8QgEgEgBgGIAAgBQABgHAEgEQAFgEAGgBQAHABAEAEQAFAEAAAHIAAABQAAAGgFAEQgEAFgHgBQgGABgFgFgAg5A/QgHABgEgEQgEgEAAgFQAAgJAHgGIAkgdQAMgJAFgGQAFgHAAgHQAAgIgFgFQgEgDgIAAQgKgBgKALQgEAEgFABQgGAAgDgEQgFgEAAgFQABgFADgEQAQgSAZgBQAUABALAKQALALABARIAAABQAAAPgJAJQgGAKgSAOIgUAQIArAAQAEgBAEAEQADAEAAAEQAAAFgDAEQgEAEgEgBg");
	this.shape_6.setTransform(6.4,163.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhCA0QgFgDAAgIQAAgFAEgEQAEgDAFAAQAEgBAEADQALAIANAAQAJAAAFgEQAGgGAAgIIAAAAQAAgIgGgEQgGgFgKAAQgGAAgHABIgHACQgEAAgIgFQgGgDABgHIADgrQAAgFADgDQAEgEAFAAIA1AAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFgBIgpAAIgCAWQAJgCAIAAQAUAAALAKQAMAJAAAVQAAATgNANQgMALgUAAQgXAAgSgMgAAtA6QgFgEAAgGIAAgBQAAgGAFgEQAFgFAGAAQAHAAAEAFQAFAEAAAGIAAABQAAAGgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(6.6,398.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA1A8QgFgEAAgGIAAgBQAAgHAFgEQAEgEAHgBQAGABAFAEQAFAEAAAHIAAABQAAAGgFAEQgFAFgGAAQgHAAgEgFgAgJA9QgFgEAAgGIAAgPIgzAAQgGAAgEgEQgDgDAAgFQgBgIAHgIIA3g+QAHgKAKAAQAFAAADAFQAEADAAAGIAABAIAHAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAIgHAAIAAAPQAAAGgEAEQgDAEgFAAQgFAAgEgEgAgvAOIAhAAIAAgmg");
	this.shape_8.setTransform(6.95,325.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhCAyQgFgEAAgGQAAgFAEgEQAEgFAGAAQAEAAAEAEQALAKAOAAQAIgBAFgEQAFgEAAgHIAAgBQAAgPgZgBIgEAAQgFABgDgEQgEgEAAgDQAAgFAGgGIAYgZIgmAAQgFAAgEgDQgDgEAAgFQAAgFADgDQAEgEAFAAIA8AAQAGAAAEAEQAEACAAAHQAAAHgIAHIgYAYQAhAGAAAdIAAAAQAAASgMALQgMAMgUAAQgZAAgRgOgAAtA7QgFgEAAgHIAAAAQAAgHAFgFQAEgEAHAAQAHAAAEAEQAFAFAAAHIAAAAQAAAHgFAEQgEAEgHAAQgHAAgEgEg");
	this.shape_9.setTransform(6.475,236.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdA8QgFgEAAgHIAAAAQAAgHAFgEQAEgFAHABQAHgBAEAFQAFAEAAAHIAAAAQAAAHgFAEQgEAEgHAAQgHAAgEgEgAgYA9QgEgEAAgGIAAhWIgKACIgFABQgFAAgDgDQgEgEAAgFQAAgJAJgCIASgGQAJgDAEABQAGgBAEAFQAEAEAAAFIAABlQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_10.setTransform(4.475,111.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// Layer_1 copy 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ARGD6QgEgCAAgEQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAIAEABQAPAKARAAQAQAAAJgIQAJgJAAgQIAAgLQgPAUgVAAQgSAAgMgMQgOgNAAgTQAAgUAOgMQAMgMASAAQAWAAAOASIAAgKQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABHQAAAVgMALQgNANgXAAQgUAAgSgLgARWCdQgJAJAAAOIAAABQAAANAJAJQAJAJANAAQAOAAAKgIQAKgKAAgNIAAgBQAAgNgKgJQgKgJgOAAQgNAAgJAIgATuDiQgLgIAAgNIAAgBQAAgOALgIQAKgIATAAQAPAAANAEIAAgDQAAgZgcAAQgMAAgMAFIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKALQAKAJAAASIAAAzQAAAHgHAAQgGAAgBgHIAAgIQgMAQgWAAQgOAAgJgIgAT4C+QgHAFAAAJIAAAAQAAAJAHAFQAHAFAKAAQANAAAIgHQAKgIgBgKIAAgJQgNgEgOAAQgNAAgHAFgAPYDcQgOgOAAgUIAAgBQAAgUAOgOQANgOAWAAQAUAAAOAOQANAOAAAUIAAAAQAAAUgNAOQgOAPgVAAQgUAAgOgOgAPiCgQgKAKAAAPIAAAAQAAAPAKALQAJAKAQAAQAOAAAKgKQAKgKAAgPIAAgBQAAgPgLgKQgJgLgPAAQgPAAgJALgAM1DcQgOgOAAgUIAAgBQAAgUAOgOQANgOAWAAQAUAAAOAOQANAOABAUIAAAAQgBAUgNAOQgOAPgVAAQgUAAgOgOgAM/CgQgKAKAAAPIAAAAQAAAPAKALQAKAKAPAAQAOAAAKgKQAKgKgBgPIAAgBQAAgPgKgKQgJgLgPAAQgPAAgJALgAK+DdQgOgOgBgVIAAgBQABgWAOgOQAMgMASAAQAWAAAOAUIAAgyQgBgIAIAAQACAAACACQACADAAADIAAB3QAAADgCACQgCACgCAAQgEAAgCgCQgBgCAAgDIAAgNQgOAVgWAAQgSAAgMgNgALICfQgKAKAAAQIAAAAQAAAQAKALQAJAJANAAQAOAAAKgKQAKgKAAgQIAAAAQAAgQgKgKQgKgKgOAAQgOAAgIAKgAJJDcQgOgOAAgUIAAgBQAAgUAOgOQAOgOAVAAQAVAAANAOQAOAOAAAUIAAAAQAAAUgOAOQgOAPgVAAQgUAAgOgOgAJTCgQgJAKAAAPIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgLgPAAQgPAAgJALgAGYDdQgNgOAAgVIAAgBQAAgUANgOQAMgOATAAQAUAAANAOQALANgBAUQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAJQAKAIANAAQAPAAAMgLQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQABABAAAAQgBADgCACQgOAOgVAAQgTAAgOgNgAHVC0QgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgABLDiQgLgIABgNIAAgBQgBgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBgEAEgBQAPgHAPAAQAVAAAKALQAJAJAAASIAAAzQAAAHgHAAQgGAAAAgHIAAgIQgMAQgWAAQgOAAgKgIgABVC+QgGAFgBAJIAAAAQABAJAGAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgMAAgIAFgAjuDdQgNgOAAgVIAAgBQAAgUAMgOQANgOAUAAQATAAAMAOQALANAAAUQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAJQAKAIANAAQAPAAAMgLQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQABABAAAAQgBADgCACQgOAOgVAAQgTAAgOgNgAixC0QgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgAmYDcQgNgOAAgUIAAgBQAAgUANgOQAPgOAUAAQAVAAAOAOQANAOAAAUIAAAAQAAAUgNAOQgOAPgVAAQgVAAgOgOgAmOCgQgJAKAAAPIAAAAQAAAPAKALQAKAKAOAAQAPAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgLgPAAQgPAAgKALgAq3DdQgNgOAAgVIAAgBQAAgUAMgOQANgOAUAAQATAAAMAOQAMANAAAUQgBADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhEAAQACAPAKAJQAIAIAOAAQAOAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQABADgDACQgOAOgVAAQgUAAgNgNgAp7C0QgBgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAwmDcQgOgPAAgTIAAgBQAAgUAOgOQAOgOAUAAQATAAAPANQACACAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgBACgDAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgMgLgOAAQgNAAgKAKQgKALABAPIAAAAQAAAPAKALQAJAKAOAAQAOAAAMgLQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgPAPgUAAQgUAAgOgOgAyaDcQgOgOAAgUIAAgBQAAgUAOgOQAOgOAVAAQAVAAANAOQAOAOAAAUIAAAAQAAAUgOAOQgOAPgVAAQgUAAgOgOgAyQCgQgJAKAAAPIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgLgPAAQgPAAgJALgA19DcQgNgOAAgUIAAgBQAAgUANgOQAOgOAVAAQAVAAAOAOQAOAOAAAUIAAAAQAAAUgOAOQgOAPgVAAQgVAAgOgOgA1yCgQgKAKAAAPIAAAAQAAAPAKALQAKAKAOAAQAPAAAKgKQAJgKAAgPIAAgBQABgPgLgKQgKgLgOAAQgPAAgJALgA3hDcQgNgPAAgTIAAgBQAAgUANgOQAPgOATAAQAUAAAPANQACACAAADQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgMgLgOAAQgOAAgKAKQgJALAAAPIAAAAQAAAPAKALQAKAKAOAAQAOAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgOAPgVAAQgTAAgPgOgAIADPIAAg4IgIAAIgEgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAEgBIAIAAIAAgWQAAgDACgCQACgCACAAQADAAADACQABACAAADIAAAWIAZAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgZAAIAAA2QABAQAQAAIAIgBIAEABIABAEQABAEgEACQgHACgHAAQgaAAAAgagAnhDPIAAg4IgIAAIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIADgBIAIAAIAAgWQABgDABgCQACgCADAAQADAAACACQACACAAADIAAAWIAYAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgYAAIAAA2QAAAQAQAAIAIgBIAFABIABAEQAAAEgDACQgHACgIAAQgaAAAAgagAVSDmQgCgCAAgEIAAgEQAAgDACgDQADgCAEAAQADAAACACQADADAAADIAAAEQAAAEgDACQgCADgDAAQgEAAgDgDgAS/DnQgDgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAOkDnQgDgCABgDIAAh3QAAgDABgCQACgDAEAAQACAAACADQACACAAADIAAB3QAAAHgGAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAFnDnQgCgCgBgDIAAgxQAAgNgFgHQgHgIgLAAQgMAAgGAIQgIAIAAANIAAAwQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgxQAAgNgGgHQgHgIgKAAQgMAAgIAJQgGAIAAANIAAAvQgBAHgGAAQgEAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCAEAAQACAAACACQADACAAADIAAAJQALgRASAAQAWAAAIASQANgSAUAAQAQAAAKAKQAIAKABARIAAA0QAAADgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCgAAcDnQgDgCAAgDIAAh3QABgDACgCQACgDACAAQADAAADADQABACAAADIAAB3QABAHgIAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAhFDnQgCgCAAgDIAAgxQAAgNgHgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQARAAAKAKQAJAKAAARIAAA0QAAADgBACQgCACgEAAQgCAAgCgCgAoODnQgCgCAAgDIAAgxQgBgNgGgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQASAAAJAKQAJAKAAARIAAA0QAAADgCACQgBACgDAAQgEAAgBgCgArqDnQgDgCAAgDIAAhRQAAgDADgCQACgCACAAQAEAAACACQACACAAADIAABRQAAAHgIAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAsXDnQgDgCAAgDIAAgxQAAgNgFgHQgHgIgLAAQgMAAgGAIQgIAIAAANIAAAwQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgxQAAgNgGgHQgHgIgKAAQgMAAgHAJQgIAIABANIAAAvQAAAHgIAAQgCAAgDgCQgCgCAAgDIAAhRQAAgDACgCQADgCACAAQADAAADACQACACAAADIAAAJQALgRASAAQAWAAAIASQAMgSAVAAQAQAAAKAKQAJAKAAARIAAA0QAAADgCACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCgAvEDnQgCgCgBgDIAAhRQAAgDACgCQACgCAEAAQACAAACACQADACAAADIAABRQgBAHgGAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAzLDnQgCgCAAgDIAAgxQAAgNgHgHQgHgIgMAAQgMAAgHAIQgJAIAAANIAAAwQABAHgIAAQgCAAgCgCQgCgCgBgDIAAhRQABgDACgCQACgCACAAQADAAADACQABACAAADIAAAKQALgSAVAAQARAAAJAKQAKAKAAARIAAA0QAAADgCACQgCACgDAAQgDAAgCgCgATAB7IABgDIAKgQQADgEAEAAQADAAADABQADACABACQAAABgBAAQAAAAAAABQAAAAgBABQAAABgBAAIgOANQgDADgFAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAgArrB1QgCgCgBgDIAAgDQABgHAHAAQAJAAAAAHIAAADQAAADgCACQgDACgEAAQgDAAgCgCgAvFB1QgCgCgBgDIAAgDQAAgHAJAAQAIAAAAAHIAAADQAAADgCACQgDACgDAAQgEAAgCgCgAhrBOQgEgBAAgFQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIADAAQAFACAFAAQALAAAIgRIABgBIgnhSIgBgDQAAgDACgCQACgCADAAQAFAAACAFIAgBIIAdhIQACgFAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQACACAAADIgBADIgkBWQgHAOgHAGQgHAGgLAAQgHAAgIgDgAwiBPQgCgCAAgDIAAhsQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAMQAOgUAVAAQATAAAMAMQAOAOAAAVIAAAAQAAAWgOAOQgMANgTAAQgVAAgOgUIAAAoQAAAHgHAAQgDAAgCgCgAwNgUQgJALgBAOIAAAAQABAQAJAKQAKAKAOAAQAOAAAJgJQAKgKAAgQIAAgBQAAgPgKgKQgKgKgNAAQgOAAgKAKgAr7BGQgEgCAAgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAIADABQAPAKASAAQAQAAAJgIQAKgJAAgQIAAgLQgPAUgWAAQgSAAgNgMQgNgNAAgTQAAgTANgMQANgMASAAQAWAAAOASIAAgKQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABGQAAAVgMALQgMANgYAAQgUAAgSgLgArrgWQgKAJAAANIAAABQAAANAKAJQAJAJANAAQAOAAAKgIQALgKAAgNIAAgBQAAgMgLgJQgKgJgOAAQgNAAgJAIgASrArQgKgKAAgQIAAgzQABgHAGAAQADAAADACQACACAAADIAAAvQAAANAGAIQAHAHAMAAQAMAAAIgIQAIgIAAgNIAAguQAAgHAHAAQACAAADACQABACAAADIAABQIgBAFQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgKQgMASgUAAQgQAAgKgLgAN4AuQgLgIAAgNIAAgBQAAgOALgIQALgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgNAAgLAFIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKALQAJAJAAASIAAAyQAAAHgGAAQgHAAABgHIAAgIQgNAQgVAAQgPAAgJgIgAOCAKQgHAFAAAJIAAAAQAAAJAHAFQAGAFAKAAQANAAAKgHQAIgIABgKIAAgJQgOgEgOAAQgNAAgHAFgAKLAqQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAIAEABQAOAKAPAAQAJAAAGgEQAFgEAAgHIAAAAQAAgHgIgEQgEgCgLgEQgPgEgHgEQgKgGAAgLIAAAAQAAgMAJgIQAKgHAOAAQAOAAAPAIQAEACgBAEQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgEgBQgNgHgLAAQgIAAgFAEQgFADAAAGIAAABQAAAGAHAEIARAGQAOADAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgOAAQgUAAgQgMgAIkAoQgOgOAAgUIAAgBQAAgTAOgOQAOgOAVAAQAUAAAOAOQAOAOAAATIAAAAQAAAUgOAOQgNAPgWAAQgUAAgOgOgAIugTQgKAKABAOIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgKAAgPIAAgBQAAgOgKgKQgKgLgPAAQgOAAgKALgAESAqQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAOAKAPAAQAIAAAGgEQAGgEgBgHIAAAAQABgHgIgEQgEgCgMgEQgPgEgGgEQgKgGAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAOAIQAEACAAAEQAAAAAAABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBQgNgHgLAAQgIAAgGAEQgEADAAAGIAAABQAAAGAHAEIAQAGQAOADAHAEQAKAHAAALIAAABQAAANgKAHQgJAIgPAAQgTAAgRgMgAC1ApQgOgOAAgVIAAgBQAAgTANgOQAMgOAUAAQATAAANAOQALANAAATQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgDACQgOAOgVAAQgTAAgNgNgADxAAQgBgNgIgIQgHgKgOAAQgMAAgIAJQgIAJgCANIA8AAIAAAAgAA+ApQgOgOAAgVIAAgBQAAgVAOgOQANgMASAAQAWAAANAUIAAgyQAAgIAHAAQADAAACACQACADAAADIAAB2QAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgNQgOAVgVAAQgSAAgNgNgABIgUQgKAKABAPIAAAAQgBAQAKALQAKAJANAAQAOAAAKgKQAKgKAAgQIAAAAQAAgPgKgKQgKgKgOAAQgOAAgJAKgAj+AqQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIADABQAPAKAPAAQAJAAAFgEQAGgEAAgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgHgEQgKgGAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAOAIQAEACAAAEQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBQgNgHgMAAQgIAAgEAEQgGADAAAGIAAABQABAGAHAEIARAGQAOADAGAEQAJAHAAALIAAABQAAANgJAHQgJAIgPAAQgTAAgRgMgAlcAuQgLgIAAgNIAAgBQAAgOALgIQAKgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAgEAEgBQAPgHAPAAQAVAAAKALQAJAJAAASIAAAyQAAAHgGAAQgHAAAAgHIAAgIQgNAQgVAAQgOAAgJgIgAlSAKQgIAFAAAJIAAAAQAAAJAIAFQAGAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgNgEgPAAQgNAAgGAFgAp+ArQgKgKABgQIAAgzQAAgHAGAAQADAAADACQABACAAADIAAAvQABANAGAIQAHAHAMAAQAMAAAIgIQAIgIAAgNIAAguQAAgHAHAAQADAAACACQACACAAADIAABQIgCAFQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgKQgLASgVAAQgQAAgKgLgAtgApQgOgOAAgVIAAgBQAAgTANgOQANgOATAAQAUAAAMAOQALANAAATQAAADgCACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgVAAQgTAAgNgNgAskAAQgBgNgIgIQgHgKgNAAQgMAAgJAJQgJAJgBANIA8AAIAAAAgAy5AqQgCgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIADABQAPAKAPAAQAIAAAGgEQAGgEgBgHIAAAAQABgHgIgEQgEgCgMgEQgPgEgGgEQgKgGAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAOAIQAEACAAAEQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBQgNgHgLAAQgIAAgGAEQgEADAAAGIAAABQAAAGAHAEIARAGQAOADAGAEQAKAHAAALIAAABQAAANgKAHQgJAIgPAAQgTAAgRgMgA0XAuQgMgIAAgNIAAgBQAAgOAMgIQAKgHATAAQAOAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAgEAEgBQAPgHAPAAQAVAAAJALQAKAJAAASIAAAyQAAAHgGAAQgHAAAAgHIAAgIQgNAQgVAAQgOAAgJgIgA0NAKQgIAFAAAJIAAAAQAAAJAIAFQAGAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgNgEgOAAQgOAAgGAFgA3kAuQgLgIAAgNIAAgBQAAgOALgIQAKgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgEADgBQAPgHAPAAQAVAAAKALQAJAJAAASIAAAyQAAAHgGAAQgHAAAAgHIAAgIQgMAQgWAAQgOAAgJgIgA3bAKQgHAFAAAJIAAAAQAAAJAHAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgMAAgIAFgARgAbIAAg3IgJAAIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBIADgBIAJAAIAAgWQAAgDABgCQADgCACAAQADAAACACQACACAAADIAAAWIAYAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgYAAIAAA1QAAAQAQAAIAIgBIAFABIABAEQAAAEgEACQgGACgHAAQgaAAAAgagALtAbIAAg3IgIAAIgFgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBIAFgBIAIAAIAAgWQgBgDACgCQADgCACAAQADAAACACQACACAAADIAAAWIAZAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgZAAIAAA1QAAAQAQAAIAJgBIADABIACAEQAAAEgEACQgGACgHAAQgaAAAAgagAmkAbIAAg3IgIAAIgEgCQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBIAEgBIAIAAIAAgWQAAgDABgCQADgCADAAQADAAABACQACACAAADIAAAWIAZAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABAAAAQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgZAAIAAA1QAAAQAQAAIAJgBIAEABIACAEQAAAEgEACQgHACgHAAQgaAAAAgagAPeAzQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQAAAHgFABQgPABgJAKQgJAMAAASIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAMyAzQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQABAHgHABQgOABgIAKQgKAMAAASIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAHyAzQgCgCAAgDIAAgwQAAgNgGgHQgHgIgLAAQgLAAgHAIQgIAIAAANIAAAvQAAADgCACQgBACgEAAQgDAAgBgCQgCgCAAgDIAAgwQgBgNgFgHQgHgIgLAAQgLAAgIAJQgHAIAAANIAAAuQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAJQAMgRASAAQAVAAAJASQAMgSAUAAQARAAAJAKQAJAKAAARIAAAzQAAADgCACQAAAAgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEAAgCgCgAnSAzQgCgCAAgDIAAgwQAAgNgGgHQgIgIgMAAQgMAAgIAIQgHAIAAANIAAAvQgBAHgGAAQgDAAgDgCQgCgCAAgDIAAhQQAAgDACgCQADgCADAAQACAAACACQACACABADIAAAKQAKgSAVAAQARAAAJAKQAKAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAurAzQgCgCAAgDIAAhQQAAgDACgCQADgCADAAQACAAACACQACACABADIAAARQAEgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgOABgJAKQgKAMABASIAAAgQgBACgCADQgCACgCAAQgDAAgDgCgA1HAzQgCgCgBgDIAAh2QAAgDACgCQACgDAEAAQACAAACADQADACAAADIAAB2QgBAHgGAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAnJhkQgCgCgBgDIAAhtQABgDACgCQACgCACAAQADAAADACQABACAAADIAAAMQAPgUAVAAQASAAAMAMQAOAOABAWIAAAAQgBAWgOAOQgMANgSAAQgWAAgOgUIAAAoQABAHgIAAQgCAAgCgCgAm0jIQgKALAAAPIAAAAQAAAQAKAKQAKAKAOAAQAOAAAIgJQAKgKAAgQIAAgBQAAgQgKgKQgJgKgNAAQgOAAgKAKgAWmiKQgNgOAAgVIAAgBQAAgUAMgOQANgOAUAAQATAAAMAOQAMANAAAUQgBADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhEAAQACAPAKAJQAIAIAOAAQAOAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQABADgDACQgOAOgVAAQgUAAgNgNgAXiizQgBgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgASHiKQgNgOAAgVIAAgBQAAgUAMgOQANgOAUAAQATAAAMAOQAMANAAAUQAAADgDACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhEAAQACAPAKAJQAIAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQABADgDACQgPAOgUAAQgUAAgNgNgATDizQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgCAOIA8AAIAAAAgANwiFQgKgIgBgNIAAgBQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgZgcAAQgNAAgLAFIgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQABgEADgBQAPgHAQAAQATAAAKALQAKAJAAASIAAAzQAAAHgGAAQgHAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgAN7ipQgIAFABAJIAAAAQgBAJAIAFQAGAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgNAAQgOAAgGAFgALFiLQgNgPAAgTIAAgBQAAgUANgOQAPgOATAAQAUAAAOANQADACAAADQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgCACgDAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgMgLgOAAQgOAAgJAKQgKALAAAPIAAAAQAAAPAKALQAKAKAOAAQAOAAAMgLQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgOAPgVAAQgTAAgPgOgAJbiKQgOgOAAgVIAAgBQAAgUANgOQAMgOAUAAQATAAANAOQALANAAAUQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgDACQgOAOgVAAQgTAAgNgNgAKXizQgBgOgIgIQgHgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAFaiLQgNgOAAgUIAAgBQAAgUANgOQAOgOAVAAQAVAAAOAOQANAOAAAUIAAAAQAAAUgNAOQgPAPgUAAQgVAAgOgOgAFkjHQgKAKAAAPIAAAAQAAAPAKALQAKAKAPAAQAPAAAKgKQAJgKAAgPIAAgBQAAgPgKgKQgKgLgOAAQgQAAgJALgAD2iLQgOgPAAgTIAAgBQAAgUAOgOQAOgOAUAAQAUAAAOANQACACABADQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgDACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgMgLgNAAQgPAAgJAKQgKALABAPIAAAAQgBAPAKALQAKAKAPAAQAOAAAMgLQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgPAPgUAAQgUAAgOgOgAANiKQgNgOAAgVIAAgBQAAgUAMgOQANgOATAAQATAAANAOQALANAAAUQAAADgCACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgABJizQgBgOgHgIQgJgKgNAAQgLAAgJAJQgIAJgCAOIA8AAIAAAAgAhpiKQgOgOAAgVIAAgBQAAgWAOgOQANgMARAAQAXAAANAUIAAgyQAAgIAHAAQADAAACACQACADAAADIAAB3QAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgNQgOAVgWAAQgRAAgNgNgAhfjIQgJAKAAAQIAAAAQAAAQAJALQAJAJAOAAQANAAAKgKQALgKgBgQIAAAAQABgQgLgKQgKgKgNAAQgOAAgJAKgAlMiLQgOgOAAgUIAAgBQAAgUAOgOQAOgOAVAAQAVAAANAOQAOAOAAAUIAAAAQAAAUgOAOQgOAPgVAAQgUAAgOgOgAlCjHQgJAKAAAPIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgKAAgPIAAgBQAAgPgKgKQgKgLgPAAQgPAAgJALgAoqiJQgCgCAAgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAIAEABQAOAKAPAAQAJAAAGgEQAFgEAAgHIAAAAQAAgHgIgEQgEgCgLgEQgPgEgHgEQgKgHAAgLIAAAAQAAgMAJgIQAKgHAOAAQAOAAAPAIQAEACgBAEQAAAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgEgBQgNgHgLAAQgIAAgFAEQgFADAAAGIAAABQAAAGAHAEIARAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgOAAQgUAAgQgMgAqHiKQgOgOAAgVIAAgBQAAgUAMgOQANgOAUAAQATAAANAOQAKANABAUQAAADgCACQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAJQAIAIANAAQAPAAAMgLQABAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgTAAgNgNgApMizQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAtoiJQgDgCAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIADABQAPAKAPAAQAIAAAGgEQAFgEABgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgHgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAPAIQADACAAAEQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgDgBQgNgHgMAAQgHAAgFAEQgGADAAAGIAAABQAAAGAIAEIARAGQANAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgOAAQgTAAgQgMgAvIiFQgLgIABgNIAAgBQgBgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBgEAEgBQAPgHAPAAQAVAAAKALQAJAJAAASIAAAzQAAAHgHAAQgGAAAAgHIAAgIQgMAQgWAAQgOAAgKgIgAu+ipQgGAFgBAJIAAAAQABAJAGAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgMAAgIAFgAxyiKQgNgOAAgVIAAgBQAAgUAMgOQANgOATAAQATAAANAOQALANAAAUQAAADgCACQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgAw2izQgBgOgHgIQgJgKgNAAQgLAAgJAJQgIAJgCAOIA8AAIAAAAgAzkiRIAAAMQAAACgCADQgBACgDAAQgEAAgCgCQgBgDAAgCIAAh3QAAgDABgDQACgCAEAAQADAAABACQACADAAADIAAAyQAOgUAWAAQASAAANAMQANAOAAAWIAAAAQAAAWgNAOQgNANgSAAQgWAAgOgUgAzajIQgKALAAAPIAAAAQAAAQAKAKQAKAKANAAQAOAAAKgJQAJgKAAgQIAAgBQAAgQgJgKQgKgKgOAAQgNAAgKAKgA1UiKQgOgOAAgVIAAgBQAAgUANgOQAMgOAUAAQAUAAAMAOQALANAAAUQAAADgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAIANAAQAPAAAMgLQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAADgDACQgOAOgUAAQgUAAgNgNgA0YizQgBgOgHgIQgJgKgNAAQgMAAgIAJQgIAJgCAOIA8AAIAAAAgAVdiYIAAg4IgIAAIgDgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIADgBIAIAAIAAgWQABgDABgCQACgCADAAQADAAACACQACACAAADIAAAWIAYAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgYAAIAAA2QAAAQAQAAIAIgBIAFABIABAEQAAAEgDACQgHACgIAAQgaAAAAgagAMpiYIAAg4IgIAAIgEgCQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBIAEgBIAIAAIAAgWQAAgDACgCQACgCACAAQADAAADACQACACgBADIAAAWIAZAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgZAAIAAA2QABAQAQAAIAIgBIAEABIABAEQABAEgEACQgHACgHAAQgaAAAAgagAUviAQgBgCAAgDIAAgxQgBgNgGgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQASAAAJAKQAKAKgBARIAAA0QAAADgCACQgBACgDAAQgEAAgCgCgARWiAQgCgCAAgDIAAgxQgBgNgGgHQgGgIgLAAQgMAAgHAIQgHAIAAANIAAAwQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgxQAAgNgGgHQgGgIgMAAQgLAAgHAJQgIAIAAANIAAAvQABAHgIAAQgDAAgBgCQgCgCAAgDIAAhRQAAgDACgCQABgCADAAQAEAAACACQABACAAADIAAAJQAMgRASAAQAVAAAKASQALgSAVAAQAQAAAJAKQAKAKgBARIAAA0QAAADgBACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgCgCgAIQiAQgCgCAAgDIAAhRQAAgDACgCQACgCAEAAQACAAACACQADACAAADIAAARQAFgLAIgHQAKgHAIAAQAHAAAAAHQAAAHgGABQgOABgJAKQgJAMAAATIAAAgQAAACgDADQgCACgCAAQgEAAgCgCgAHIiAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAABAHQAAAHgHABQgOABgIAKQgKAMAAATIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgABxiAQgCgCABgDIAAhRQgBgDACgCQADgCADAAQACAAACACQACACABADIAAARQAEgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgOABgJAKQgKAMABATIAAAgQgBACgCADQgCACgCAAQgDAAgDgCgAibiAQgCgCAAgDIAAgxQAAgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQAQAAAKAKQAKAKAAARIAAA0QAAADgDACQgCACgCAAQgEAAgCgCgArSiAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAABAHQAAAHgHABQgOABgIAKQgKAMAAATIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAwOiAQgCgCAAgDIAAhRQAAgDACgCQADgCADAAQACAAACACQACACABADIAAARQAEgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgOABgJAKQgKAMABATIAAAgQgBACgCADQgCACgCAAQgDAAgDgCgA3fh/QgDAAgCgCQgCgCAAgDIAAhwQAAgDACgCQACgCADAAIAlAAQAdAAATASQATARgBAbIAAABQABAbgTASQgTASgdAAgA3YiMIAeAAQAXAAAPgPQANgOAAgVIAAAAQAAgWgNgOQgPgOgXAAIgeAAg");
	this.shape_11.setTransform(172.9,344.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("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QgCgDAAgCIAAgxQAAgNgGgIQgIgHgMAAQgMAAgIAIQgHAIgBANIAAAwQAAAHgGAAQgEAAgCgCQgBgDAAgCIAAhSQAAgCABgDQACgCAEAAQACAAACACQACADAAACIAAAKQAMgRAUgBQARAAAKALQAJAKAAARIAAA0QAAACgCADQgCACgDAAQgDAAgCgCgAxTDnQgDgDAAgCIAAgxQABgNgHgIQgHgHgNAAQgLAAgIAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgDAAgCIAAh3QAAgDACgDQACgCADAAQACAAADACQACADAAADIAAAvQALgRAVgBQARAAAJALQAKAKAAARIAAA0QAAACgCADQgCACgEAAQgCAAgCgCgAgQBOQgFgFAAgGIAAhjQAAgFAFgEQADgEAGAAQAGAAADAEQADAEAAAFIAAACQAMgQATAAQASAAAMANQAOAOAAAWIAAAAQAAAXgOAOQgMANgSABQgTAAgMgPIAAAcQAAAGgDAFQgDADgGAAQgGAAgDgDgAAMgQQgHAJAAAKIAAAAQAAAMAHAIQAHAHAKAAQAKAAAGgHQAHgIAAgMIAAAAQAAgKgHgJQgGgGgKgBQgKABgHAGgAl9BOQgEgBAAgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAgBABAAIADABQAFACAFAAQAMgBAHgQIABgBIgnhSIgBgEQAAgCACgDQACgCADAAQAFABACAFIAhBIIAchIQACgGAFAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQACADABACIgBAEIglBVQgFAPgHAGQgIAGgLAAQgHAAgIgDgAXdArQgFgEAAgGQAAgEACgDQADgEAFAAQADAAADACQAOAIAMABQAMAAAAgIIAAAAQAAgEgHgDIgNgFQgOgDgGgGQgKgGAAgNIAAAAQAAgOALgIQAKgJAPABQAPAAAPAHQAGADAAAIQAAAEgDADQgDADgFAAIgFgBQgMgHgJAAQgKAAAAAIQAAADAGADIAOAFQANAFAHADQAJAIAAAMQAAAPgLAJQgJAHgRABQgTgBgRgKgAVyAnQgPgOAAgVIAAgBQAAgTAPgPQAPgPAXAAQAVAAAQAOQAPAPAAAUIAAAAQAAAWgPAOQgPAPgXAAQgWAAgPgPgAWFgPQgHAIAAAKIAAAAQAAALAHAIQAIAIALAAQALAAAHgIQAHgHAAgLIAAgBQgBgJgGgIQgIgIgLAAQgMAAgGAHgASHAuQgKgJAAgNIAAAAQAAgQALgIQAKgGASgBQAMAAALAFIAAgCQAAgRgUgBQgKAAgJADIgEABQgFAAgDgEQgDgDgBgEQAAgIAIgDQAOgFAQAAQAWAAALALQALAKgBAUIAAArQABAGgEAEQgEADgFABQgHgBgDgDQgEgDAAgFQgLANgSAAQgOAAgJgIgASXAWQAAAGAFADQADAEAHAAQAKAAAGgGQAGgEAAgHIAAgGQgIgDgKAAQgTAAAAANgAQnArQgGgEAAgGQAAgEADgDQADgEAFAAQADAAACACQAOAIANABQALAAAAgIIAAAAQAAgEgGgDIgOgFQgNgDgGgGQgKgGAAgNIAAAAQAAgOALgIQAJgJAQABQAOAAAPAHQAHADAAAIQAAAEgEADQgCADgGAAIgEgBQgNgHgIAAQgLAAAAAIQABADAFADIAPAFQANAFAGADQAKAIAAAMQAAAPgLAJQgKAHgQABQgUgBgQgKgAPFAoQgPgOAAgWIAAgBQAAgTAOgPQANgPAVAAQAWAAANAQQALAOAAAQQAAAFgEAEQgDAEgGAAIg2AAQAEASAUAAQAKABAJgHQADgCAEAAQAEAAAEADQACAEAAAEQAAAFgDADQgOAMgTAAQgXAAgNgOgAP6gEQgBgIgGgGQgFgGgIAAQgRAAgEAUIApAAIAAAAgANKAoQgNgOAAgXIAAAAQAAgWANgOQANgNASAAQASAAAMAOIAAgjQAAgFAEgEQAEgEAGAAQAFAAAFAEQADAEAAAFIAABqQAAAFgDAEQgFAFgFAAQgGAAgEgFQgEgEAAgFIAAgCQgLAQgTABQgSgBgNgNgANggQQgIAIAAALIAAAAQAAAMAIAIQAGAHAKAAQAKAAAGgHQAIgIgBgMIAAAAQABgKgIgJQgGgGgKgBQgKABgGAGgAKvArQgGgEAAgGQABgEADgDQACgEAGAAQADAAABACQAOAIANABQAMAAgBgIIAAAAQAAgEgFgDIgPgFQgNgDgGgGQgJgGAAgNIAAAAQAAgOAKgIQAJgJAQABQAPAAAOAHQAHADAAAIQAAAEgDADQgDADgFAAIgFgBQgNgHgHAAQgLAAAAAIQAAADAGADIAOAFQANAFAGADQAKAIAAAMQAAAPgKAJQgLAHgQABQgUgBgQgKgAJEAnQgPgOAAgVIAAgBQAAgTAPgPQAPgPAWAAQAWAAAPAOQAQAPgBAUIAAAAQABAWgQAOQgPAPgWAAQgWAAgPgPgAJWgPQgGAIAAAKIAAAAQAAALAHAIQAIAIAKAAQAMAAAHgIQAGgHAAgLIAAgBQABgJgIgIQgHgIgLAAQgLAAgIAHgAEcAuQgJgJgBgNIAAAAQABgQAKgIQAKgGATgBQALAAAMAFIAAgCQAAgRgUgBQgLAAgIADIgFABQgEAAgEgEQgDgDAAgEQAAgIAIgDQANgFARAAQAWAAALALQAKAKAAAUIAAArQAAAGgDAEQgEADgGABQgGgBgDgDQgFgDAAgFQgLANgRAAQgOAAgKgIgAEtAWQAAAGAEADQAEAEAHAAQAJAAAHgGQAFgEAAgHIAAgGQgIgDgJAAQgTAAAAANgABuAoQgPgOAAgWIAAgBQAAgTAOgPQANgPAVAAQAWAAANAQQALAOAAAQQAAAFgEAEQgDAEgGAAIg2AAQAEASAUAAQAKABAJgHQADgCAEAAQAEAAAEADQACAEAAAEQAAAFgDADQgOAMgTAAQgXAAgNgOgACjgEQgBgIgGgGQgFgGgIAAQgRAAgEAUIApAAIAAAAgAh9AsQgIgKAAgQIAAgyQAAgFADgEQAFgEAFAAQAGAAAEAEQAEAEAAAFIAAApQAAAUARgBQARABAAgUIAAgpQAAgFADgEQAEgEAGAAQAGAAAEAEQAEAEAAAFIAABHQAAAFgEAEQgEAFgGAAQgGAAgEgFQgDgEAAgFIAAgBQgMAQgRAAQgPAAgJgKgAjhArQgFgEgBgGQAAgEADgDQAEgEAEAAQADAAADACQANAIANABQALAAAAgIIAAAAQABgEgHgDIgNgFQgNgDgHgGQgKgGABgNIAAAAQgBgOALgIQAKgJAPABQAPAAAPAHQAGADAAAIQAAAEgDADQgDADgFAAIgFgBQgNgHgIAAQgKAAAAAIQAAADAGADIAOAFQANAFAHADQAJAIAAAMQAAAPgKAJQgLAHgQABQgTgBgRgKgAoQArQgGgEAAgGQAAgEADgDQADgEAFAAQADAAACACQAOAIAMABQAMAAAAgIIAAAAQAAgEgGgDIgOgFQgNgDgGgGQgKgGAAgNIAAAAQAAgOAKgIQAKgJAQABQAOAAAPAHQAGADABAIQAAAEgEADQgDADgEAAIgGgBQgMgHgIAAQgLAAABAIQAAADAFADIAPAFQANAFAGADQAJAIAAAMQABAPgLAJQgKAHgQABQgUgBgQgKgApyAoQgPgOAAgWIAAgBQAAgTAOgPQANgPAVAAQAWAAANAQQALAOAAAQQAAAFgEAEQgDAEgGAAIg2AAQAEASAUAAQALABAIgHQADgCAEAAQAFAAADADQACAEAAAEQAAAFgDADQgOAMgUAAQgWAAgNgOgAo9gEQgBgIgGgGQgFgGgIAAQgSAAgDAUIApAAIAAAAgAtaAnQgOgOAAgVIAAgBQAAgTAOgPQAPgPAXAAQAWAAAPAOQAPAPAAAUIAAAAQAAAWgPAOQgPAPgXAAQgVAAgQgPgAtHgPQgHAIABAKIAAAAQAAALAGAIQAIAIALAAQALAAAIgIQAGgHAAgLIAAgBQAAgJgHgIQgIgIgLAAQgLAAgHAHgAv2AnQgPgPAAgUIAAgBQAAgTAPgPQAOgPAWAAQAUAAANALQAEAEAAAGQAAAEgDAEQgFAEgEgBQgFAAgDgCQgIgGgJAAQgKAAgIAHQgGAIAAAKIAAAAQAAAMAGAHQAIAIAKAAQAKAAAIgGQAEgDAEAAQAFAAADAEQADACAAAGQAAAFgDADQgOANgVAAQgVAAgOgPgAxnAuQgJgJgBgNIAAAAQAAgQAMgIQAJgGATgBQAMAAALAFIAAgCQAAgRgVgBQgKAAgIADIgFABQgEAAgDgEQgEgDAAgEQAAgIAIgDQANgFARAAQAWAAALALQAKAKAAAUIAAArQAAAGgDAEQgFADgFABQgGgBgDgDQgFgDAAgFQgLANgSAAQgNAAgKgIgAxWAWQAAAGAEADQAEAEAHAAQAJAAAHgGQAFgEAAgHIAAgGQgHgDgKAAQgTAAAAANgA0QArQgFgEgBgGQAAgEADgDQAEgEAEAAQADAAADACQANAIANABQALAAAAgIIAAAAQABgEgHgDIgNgFQgNgDgHgGQgKgGABgNIAAAAQgBgOALgIQAKgJAPABQAPAAAPAHQAGADAAAIQAAAEgDADQgDADgFAAIgFgBQgNgHgIAAQgKAAAAAIQAAADAGADIAOAFQANAFAHADQAJAIAAAMQAAAPgKAJQgLAHgQABQgTgBgRgKgA1yAoQgPg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QAKAKAAARIAAA0QAAAHgGAAQgHgBAAgGIAAgJQgNAQgVABQgOgBgJgHgAPEipQgIAEAAAKIAAAAQAAAJAIAEQAGAFAKABQANgBAJgGQAJgIAAgKIAAgJQgNgEgOgBQgOABgGAFgALTiFQgLgIAAgNIAAgBQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgZgcAAQgMAAgLAEIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKAKQAKAKAAARIAAA0QgBAHgGAAQgHgBAAgGIAAgJQgMAQgVABQgPgBgJgHgALdipQgHAEAAAKIAAAAQAAAJAHAEQAGAFALABQANgBAIgGQAJgIAAgKIAAgJQgNgEgOgBQgNABgHAFgAH1iLQgNgOAAgUIAAgBQAAgVAMgNQANgOATgBQAUAAAMAPQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQABAPAKAJQAJAHANABQAPAAAMgLQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCABQgPAOgUABQgUgBgNgNgAIxizQgBgOgIgJQgHgJgNAAQgMAAgJAJQgJAJgBAOIA8AAIAAAAgAD7iJQgDgCAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIADABQAPALAPAAQAIgBAGgEQAFgDABgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgHgEQgKgHAAgLIAAgBQAAgMAJgHQAJgHAOAAQAPAAAPAIQADACAAAEQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgDgBQgNgGgMgBQgHABgFAEQgGADAAAGIAAAAQAAAGAIAEIARAHQANAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAHgOABQgTgBgQgLgACbiFQgLgIABgNIAAgBQgBgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgZgcAAQgMAAgMAEIgDABQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgEAEgBQAPgHAPAAQAVAAAKAKQAJAKAAARIAAA0QAAAHgHAAQgGgBAAgGIAAgJQgMAQgWABQgOgBgKgHgAClipQgGAEgBAKIAAAAQABAJAGAEQAHAFAKABQANgBAJgGQAJgIAAgKIAAgJQgOgEgOgBQgMABgIAFgAgOiLQgNgOAAgUIAAgBQAAgVAMgNQANgOASgBQATAAANAPQALANAAATQAAAEgCACQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhDAAQACAPAJAJQAIAHANABQAPAAAMgLQAAAAABgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCABQgPAOgUABQgTgBgNgNgAAtizQgBgOgHgJQgJgJgNAAQgLAAgIAJQgIAJgCAOIA7AAIAAAAgAiAiRIAAAMQAAACgCADQgCACgCAAQgEAAgCgCQgBgDAAgCIAAh3QAAgDABgDQACgCAEAAQACAAACACQACADAAADIAAAyQAOgVAWAAQASAAANANQANAOAAAVIAAABQAAAWgNANQgNANgSABQgWgBgOgTgAh2jIQgKAKAAAPIAAABQAAAPAKALQAKAKANAAQAOAAAKgKQAJgJAAgQIAAgBQAAgQgJgKQgKgKgOAAQgNAAgKAKgAjwiLQgOgOAAgUIAAgBQAAgVANgNQAMgOAUgBQAUAAAMAPQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAHANABQAPAAAMgLQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDABQgOAOgUABQgUgBgNgNgAi0izQgBgOgHgJQgJgJgNAAQgMAAgIAJQgIAJgCAOIA8AAIAAAAgAlniKQgOgOAAgVIAAgBQAAgWAOgOQANgNARAAQAXABANATIAAgxQAAgIAHAAQADAAACACQACADAAADIAAB3QAAACgCADQgCACgDAAQgDAAgCgCQgCgDAAgCIAAgNQgOAVgWAAQgRAAgNgNgAldjIQgJAJAAAQIAAABQAAAQAJAKQAKAKANAAQANAAALgKQAKgLgBgPIAAgBQABgPgKgKQgLgKgNAAQgOAAgJAKgApjiLQgOgOAAgUIAAgBQAAgVANgNQAMgOAUgBQATAAANAPQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAHANABQAPAAAMgLQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAADgDABQgOAOgVABQgTgBgNgNgAonizQgBgOgIgJQgHgJgOAAQgMAAgIAJQgIAJgCAOIA8AAIAAAAgAsDiLQgOgOAAgUIAAgBQAAgVANgNQAMgOATgBQAUAAANAPQALANgBATQAAAEgBACQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAJAJQAKAHANABQAPAAAMgLQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAADgDABQgOAOgVABQgTgBgNgNgArHizQgCgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA8AAIAAAAgAt6iKQgOgOgBgVIAAgBQABgWAOgOQAMgNASAAQAWABANATIAAgxQAAgIAIAAQACAAACACQACADABADIAAB3QgBACgCADQgCACgCAAQgDAAgDgCQgCgDAAgCIAAgNQgOAVgVAAQgSAAgMgNgAtwjIQgKAJAAAQIAAABQAAAQAKAKQAJAKANAAQAOAAAKgKQAKgLAAgPIAAgBQAAgPgKgKQgKgKgOAAQgOAAgIAKgAwliMQgOgOAAgTIAAgBQAAgUAOgOQAOgPAVAAQAVABANAOQAOAOAAATIAAABQAAAUgOAOQgOAPgUAAQgVgBgOgOgAwbjHQgJAJAAAPIAAABQgBAPALAKQAJALAPAAQAPAAAJgLQAKgJAAgPIAAgBQAAgPgKgKQgKgMgOAAQgQAAgJAMgA2LiLQgOgOAAgUIAAgBQAAgVANgNQAMgOAUgBQAUAAAMAPQALANAAATQAAAEgCACQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQACAPAJAJQAJAHANABQAPAAAMgLQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDABQgOAOgUABQgUgBgNgNgA1PizQgBgOgHgJQgJgJgNAAQgMAAgIAJQgIAJgCAOIA8AAIAAAAgAy1iYIAAg4IgIAAIgEgCQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIAEgCIAIAAIAAgVQAAgEACgCQACgCACAAQAEAAACACQABACAAAEIAAAVIAZAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgZAAIAAA2QABAPAPAAIAJgBIAEACIACAEQAAAEgEACQgGACgIAAQgaAAAAgagAM5iAQgCgDAAgCIAAhRQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQABAHgHABQgOABgIAKQgKALAAATIAAAhQAAACgCADQgCACgDAAQgDAAgCgCgAHCiAQgDgDAAgCIAAh3QAAgDACgDQACgCADAAQADAAACACQACADAAADIAAB3QAAAHgHAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAgAGSiAQgCgDAAgCIAAh3QAAgDACgDQACgCADAAQADAAACACQACADAAADIAAB3QAAAHgHAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAgABViAQgCgDAAgCIAAhRQAAgDACgDQADgCADAAQACAAACACQACADABADIAAARQAEgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgOABgJAKQgKALABATIAAAhQgBACgCADQgCACgCAAQgDAAgDgCgAn9iAQgDgDABgCIAAh3QAAgDABgDQACgCAEAAQADAAABACQACADAAADIAAB3QAAAHgGAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAgAxwiAQgCgDAAgCIAAhRQAAgDACgDQADgCACAAQADAAADACQACADAAADIAAARQAFgLAIgHQAKgHAIAAQAHAAAAAHQAAAHgGABQgOABgJAKQgJALAAATIAAAhQAAACgCADQgDACgDAAQgCAAgDgCgAzjiAQgCgDAAgCIAAgxQAAgNgGgIQgIgHgMAAQgMAAgIAIQgHAIgBANIAAAwQAAAHgGAAQgEAAgCgCQgBgDAAgCIAAhRQAAgDABgDQACgCAEAAQADAAABACQACADAAADIAAAJQAMgRAUgBQARAAAKALQAJAKAAARIAAA0QAAACgCADQgCACgDAAQgDAAgCgCgA4Wh/QgDAAgCgDQgCgCAAgCIAAhxQAAgCACgCQACgCADAAIAlAAQAdgBATATQATARgBAbIAAABQABAagTATQgTASgdAAgA4PiNIAeAAQAXAAAPgOQANgOAAgVIAAAAQAAgWgNgOQgPgPgXAAIgeAAgAC4jsIABgDIALgRQACgEAEABIAHABQADACAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgNAMQgDAEgFAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAgApIjsIABgDIAKgRQADgEAEABQADAAADABQAEACAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgOAMQgEAEgFAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_12.setTransform(178.4,183.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhhCPQgOgOAAgUIAAAAQAAgUAOgOQAOgPAVAAQAUAAAOAOQAOAOAAAUIAAABQAAAUgOAOQgOAOgVAAQgUAAgOgOgAhXBTQgKAKAAAPIAAABQAAAPAKAKQAKALAPAAQAOAAAKgLQAKgKAAgPIAAAAQAAgPgKgLQgKgLgPAAQgPAAgJALgAn4CQQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgAm8BoQgBgOgHgJQgIgJgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAppCJIAAAMQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAzQAOgVAVAAQASAAANANQAOAOAAAVIAAABQAAAWgOANQgNANgSAAQgWAAgNgUgApgBTQgKAKAAAPIAAABQAAAPAKALQAKAKAOAAQAOAAAJgKQAJgKAAgQIAAAAQAAgQgJgLQgKgJgNAAQgOAAgKAKgArbCWQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMAAgMAFIgCABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgEADgCQAPgGAQAAQAUAAAKAKQAJAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgMAQgWAAQgOAAgJgHgArRBxQgHAFAAAJIAAABQAAAIAHAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgNgEgOAAQgNAAgHAFgAvXCWQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMAAgMAFIgCABQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgEADgCQAPgGAQAAQAUAAAKAKQAJAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgMAQgWAAQgOAAgJgHgAvNBxQgHAFAAAJIAAABQAAAIAHAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgNgEgOAAQgNAAgHAFgAy+CWQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgagcAAQgNAAgLAFIgDABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgEAEgCQAPgGAPAAQAUAAAKAKQAKAKAAARIAAAzQAAAHgHAAQgGAAAAgGIAAgJQgNAQgVAAQgOAAgKgHgAy0BxQgHAFAAAJIAAABQAAAIAHAFQAHAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgOgEgOAAQgNAAgHAFgA4fCQQgOgOAAgVIAAAAQAAgVANgOQAMgOAUAAQATAAANAPQALANAAATQAAADgCACQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABQAAAAABABQAAAAAAAAQAAABABABQAAAAAAABQAAACgDACQgOAOgVAAQgTAAgNgNgA3jBoQgBgOgIgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA8AAIAAAAgAiqCDIAAg5IgIAAIgEgBQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIAEgCIAIAAIAAgWQAAgDABgCQADgCACAAQADAAACACQACACAAADIAAAWIAZAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgZAAIAAA3QAAAPAQAAIAJgBIAEACIABAEQAAAEgDABQgHADgHAAQgaAAAAgagA1JCDIAAg5IgIAAIgEgBQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAEgCIAIAAIAAgWQAAgDABgCQADgCACAAQADAAACACQACACAAADIAAAWIAZAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgZAAIAAA3QAAAPAQAAIAJgBIAEACIABAEQAAAEgDABQgHADgHAAQgaAAAAgagAAHCaQgDgDAAgDIAAgEQAAgEADgCQACgDAEAAQAEAAACADQACACAAAEIAAAEQAAADgCADQgCACgEAAQgEAAgCgCgAjYCaQgCgCAAgDIAAgwQAAgNgHgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQARAAAJALQAKAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAlJCaQgDgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAmTCaQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAGAAAAAHQAAAGgGABQgOACgJAKQgJALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgAsLCaQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAB3QAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAtwCaQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAB3QAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAxYCaQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQAAAGgGABQgPACgIAKQgKALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgA0ECaQgCg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QgKgLgOAAQgPAAgKALgAlPgqIAAAMQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAzQAOgVAVAAQASAAANANQAOAOAAAVIAAABQAAAWgOANQgNANgSAAQgWAAgNgUgAlGhgQgKAKAAAPIAAABQAAAPAKALQAKAKAOAAQAOAAAJgKQAJgKAAgQIAAAAQAAgQgJgLQgKgJgNAAQgOAAgKAKgAolgjQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgAnphLQgBgOgHgJQgIgJgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAs0gjQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgAr4hLQgBgOgHgJQgIgJgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAvQgkQgOgOAAgUIAAAAQAAgUAOgOQAOgPAUAAQATAAAPAOQACACAAADQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgMgMgOAAQgOAAgJALQgKAKAAAPIAAABQAAAPAKAKQAKALAOAAQAOAAAMgLQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgPAOgUAAQgUAAgOgOgAyVgkQgNgOAAgUIAAAAQAAgUANgOQAOgPAUAAQAUAAAOAOQADACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQgMgMgNAAQgOAAgKALQgJAKAAAPIAAABQAAAPAKAKQAJALAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgPAOgUAAQgUAAgOgOgA2bgdQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAPAAAOAEIAAgDQAAgagcAAQgNAAgLAFIgDABQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgEAEgCQAPgGAPAAQAUAAAKAKQAKAKAAARIAAAzQAAAHgHAAQgGAAAAgGIAAgJQgNAQgVAAQgOAAgKgHgA2RhCQgHAFAAAJIAAABQAAAIAHAFQAHAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgOgEgOAAQgNAAgHAFgAhtgwIAAg5IgIAAIgEgBQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAIAAIAAgWQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAWIAYAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgYAAIAAA3QAAAPAQAAIAIgBIAEACIACAEQAAAEgEABQgGADgIAAQgaAAAAgagAWhgZQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQAAAGgGABQgPACgIAKQgKALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgARAgbQgFgEAAgFIAAhIQAAgFAFgEQADgEAGAAQAGAAAEAEQAEAEAAAFIAAAFQAHgSALAAQAHAAADADQAEAEAAAGQAAALgLACQgVAFAAAcIAAAaQAAAFgEAEQgEAEgGAAQgGAAgDgEgAM9gbQgEgEAAgFIAAgqQAAgTgRAAQgRAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgFIAAhIQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAABQAMgPARAAQAPAAAJAKQAIAJAAARIAAAyQAAAFgEAEQgEAEgFAAQgGAAgEgEgAJfgbQgEgEAAgFIAAgqQAAgTgQAAQgRAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgFIAAgqQAAgTgQAAQgRAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgGAAgEgEQgEgEAAgFIAAhIQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAABQAMgPARAAQATAAAIAPQANgPATAAQAPAAAJAJQAIAJAAARIAAAzQAAAFgEAEQgEAEgFAAQgGAAgEgEgACNgZQgCgCAAgDIAAgwQAAgNgHgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQARAAAJALQAKAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAm/gZQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAB3QAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAqMgZQgCgCAAgDIAAgwQAAgNgGgIQgHgHgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQARAAAKALQAJAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAwEgZQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgAwzgZQgCgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAB3QAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgA3MgZQgCgCAAgDIAAgyIhJAAIAAAyQAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAhxQAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAxIBJAAIAAgxQAAgDACgDQACgCADAAQADAAACACQACADAAADIAABxQAAADgCACQgCACgDAAQgDAAgCgCgAN1gYQgGAAgEgDQgDgDAAgFIAAAAQAAgHAGgHIAtgxIgnAAQgEAAgDgDQgEgEAAgEQAAgFAEgDQADgDAEAAIA8AAQAGAAAEADQAEADAAAFIAAAAQAAAHgGAHIgtAxIAoAAQAEAAADADQAEAEAAAEQAAAFgEADQgDADgEAAgA02gYQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgBQAAgDADgDIA7hFIg3AAQgGAAAAgGQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIBDAAQAGAAAAAGIAAAAQAAADgDADIg6BGIA4AAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAgAgFiFIABgCIAKgRQADgEADAAQAEAAADACQADACAAACQAAABgDADIgNAMQgDAEgFAAQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgAwFiKQgCgCAAgEIAAgCQAAgHAIAAQAIAAAAAHIAAACQAAAEgCACQgDACgDAAQgEAAgCgCg");
	this.shape_13.setTransform(179.175,119.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AEqBDQgNgGgKgJQgKgLgGgNQgFgNAAgPIAAAAQAAgOAFgNQAGgNAKgKQAKgKAOgFQANgHAQAAQARAAANAHQAOAFAKAJQAKAKAFANQAGAOAAAOIAAAAQAAAPgGANQgGANgJAKQgKAKgOAGQgOAFgQAAQgQAAgOgFgAE3gnQgIADgFAGQgGAGgDAHQgDAIAAAJIAAAAQAAAJADAIQADAIAGAGQAGAGAHAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgHAAgKIAAAAQAAgIgDgIQgDgIgFgGQgGgGgIgDQgIgEgJAAQgJAAgIAEgABTBDQgOgGgJgJQgKgKgFgOQgGgNAAgPIAAAAQAAgOAGgNQAFgNAKgKQAJgKAOgFQANgHAQAAQAKABAIABIAPAFQAHACAFAFIALAIIgUAXQgIgHgJgFQgIgEgLAAQgJAAgHAEQgIADgFAGQgFAGgDAHQgDAIAAAJIAAAAQAAAJADAIQADAIAFAGQAFAGAIAEQAHADAJAAQAMAAAIgEQAJgFAIgIIAUAUIgMALQgFAEgHADQgHAEgIABQgJACgKAAQgPABgNgGgAhABDQgNgGgKgJQgJgKgGgOQgFgNAAgPIAAAAQAAgOAFgNQAGgNAJgKQAKgKANgFQAOgHAQAAQAKABAIABIAOAFQAGACAGAFIAKAIIgUAXQgHgHgIgFQgJgEgKAAQgJAAgIAEQgHADgGAGQgFAGgDAHQgDAIAAAJIAAAAQAAAJADAIQADAIAFAGQAGAGAHAEQAIADAJAAQAMAAAIgEQAIgFAHgIIAUAUIgLALQgGAEgGADQgHAEgIABQgIACgKAAQgQABgNgGgALlBDQgQgGgMgLIASgWQAJAHALAFQAKAFAMAAQAJAAAGgDQAFgEAAgGIAAgBIgBgFQgBgDgDgBIgJgFIgigKQgIgDgGgEQgGgEgEgHQgDgHAAgKIAAgBQAAgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAQAPAAANAFQANAEALAJIgQAXQgKgHgJgDQgJgEgJAAQgJAAgEAEQgFADAAAGIAAAAQAAADACACQABADADACIAKAEIAPAEIATAGQAIAEAGAEQAFAFADAHQADAGAAAJIAAAAQAAALgDAIQgEAIgHAGQgHAFgJADQgKADgLAAQgQAAgPgFgAjuA4QgQgPAAgfIAAhPIAfAAIAABOQAAARAIAJQAIAJAOAAQAOAAAIgJQAIgIAAgRIAAhPIAfAAIAABOQAAAQgEAMQgFAMgIAHQgIAIgLAFQgMADgOAAQgcAAgQgQgAp7BDQgQgGgMgLIASgWQAJAHALAFQAKAFAMAAQAJAAAGgDQAFgEAAgGIAAgBIgBgFQgBgDgDgBIgJgFIgigKQgIgDgGgEQgGgEgEgHQgDgHAAgKIAAgBQAAgJAEgIQADgIAHgGQAGgFAJgDQAJgDALAAQAPAAANAFQANAEALAJIgQAXQgKgHgJgDQgJgEgJAAQgJAAgEAEQgFADAAAGIAAAAQAAADACACQABADADACIAKAEIAPAEIATAGQAIAEAGAEQAFAFADAHQADAGAAAJIAAAAQAAALgDAIQgEAIgHAGQgHAFgJADQgKADgLAAQgQAAgPgFgANPBGIAAggIAgAAIAAAggAJMBGIAAiLIBpAAIAAAbIhLAAIAAAdIBCAAIAAAaIhCAAIAAAeIBMAAIAAAbgAIQBGIhEhYIAABYIgeAAIAAiLIAcAAIBCBVIAAhVIAeAAIAACLgADCBGIAAiLIAfAAIAACLgAk3BGIgegtIgZAAIAAAtIgeAAIAAiLIBAAAQAZAAANAMQAOAMAAAWIAAABQAAARgIAKQgIAKgOAFIAjAygAlugBIAgAAQALAAAGgGQAGgFAAgJQAAgKgGgFQgHgFgLAAIgfAAgAntBGIAAhuIgrAAIAAgdIB0AAIAAAdIgrAAIAABugArKBGIhEhYIAABYIgeAAIAAiLIAcAAIBCBVIAAhVIAeAAIAACLgAtuBGIAAiLIAfAAIAACLgANPgEIAAggIAgAAIAAAgg");
	this.shape_14.setTransform(91.675,56.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer_3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AxXD6QgEgCAAgEQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIADABQAPAKASAAQAPAAAJgIQAKgJAAgQIAAgLQgPAUgWAAQgSAAgMgMQgOgNAAgTQAAgUAOgMQANgMARAAQAWAAAOASIAAgKQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABHQAAAVgMALQgMANgXAAQgVAAgSgLgAxHCdQgJAJAAAOIAAABQAAANAJAJQAJAJAOAAQANAAAKgIQALgKAAgNIAAgBQAAgNgLgJQgJgJgOAAQgOAAgJAIgAElDcQgNgOAAgUIAAgBQAAgUANgOQAOgOAVAAQAVAAAOAOQANAOAAAUIAAAAQAAAUgNAOQgOAPgVAAQgVAAgOgOgAEvCgQgJAKAAAPIAAAAQAAAPAKALQAJAKAPAAQAPAAAKgKQAJgKAAgPIAAgBQAAgPgKgKQgKgLgOAAQgPAAgKALgACuDdQgOgOAAgVIAAgBQAAgWAOgOQANgMASAAQAWAAANAUIAAgyQAAgIAHAAQADAAACACQACADAAADIAAB3QAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgNQgOAVgVAAQgSAAgNgNgAC4CfQgJAKAAAQIAAAAQAAAQAJALQAKAJANAAQAOAAAKgKQAKgKAAgQIAAAAQAAgQgKgKQgKgKgOAAQgOAAgJAKgABDDdQgNgOAAgVIAAgBQAAgUAMgOQANgOATAAQAUAAAMAOQALANAAAUQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgAB/C0QgBgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAgzDdQgOgOAAgVIAAgBQAAgWAOgOQANgMASAAQAVAAANAUIAAgyQAAgIAHAAQADAAACACQACADAAADIAAB3QAAADgCACQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgNQgOAVgUAAQ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gCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQARAAAJAKQAKAKAAARIAAA0QAAADgCACQgCACgDAAQgDAAgCgCgAyFDnQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgA0LDnQgCgCAAgDIAAgxQAAgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAwQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQARAAAKAKQAJAKAAARIAAA0QAAADgCACQgCACgDAAQgDAAgCgCgA18DnQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgAtxB1QgCgCAAgDIAAgDQAAgHAIAAQAIAAAAAHIAAADQAAADgCACQgDACgDAAQgEAAgCgCgAyGB1QgCgCAAgDIAAgDQAAgHAIAAQAIAAAAAHIAAADQAAADgCACQgDACgDAAQgEAAgCgCgA19B1QgCgCAAgDIAAgDQAAgHAIAAQAIAAAAAHIAAADQAAADgCACQgDACgDAAQgEAAgCgCgApPBPQgCgCAAgDIAAhsQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAMQAOgUAVAAQASAAANAMQAOAOAAAVIAAAAQAAAWgOAOQgNANgSAAQgWAAgNgUIAAAoQAAAHgHAAQgDAAgCgCgAo6gUQgKALAAAOIAAAAQAAAQAKAKQAKAKAOAAQAOAAAJgJQAJgKAAgQIAAgBQAAgPgJgKQgKgKgNAAQgOAAgKAKgAF8BGQgEgCAAgEQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIADABQAPAKASAAQAPAAAJgIQAKgJAAgQIAAgLQgPAUgWAAQgSAAgMgMQgOgNAAgTQAAgTAOgMQANgMARAAQAWAAAOASIAAgKQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABGQAAAVgMALQgMANgXAAQgVAAgSgLgAGMgWQgJAJAAANIAAABQAAANAJAJQAJAJAOAAQANAAAKgIQALgKAAgNIAAgBQAAgMgLgJQgJgJgOAAQgOAAgJAIgANAAuQgLgIAAgNIAAgBQAAgOALgIQALgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgNAAgLAFIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKALQAKAJAAASIAAAyQAAAHgHAAQgGAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgANKAKQgHAFAAAJIAAAAQAAAJAHAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgNAAgHAFgAH5ArQgJgKAAgQIAAgzQAAgHAHAAQACAAADACQACACAAADIAAAvQAAANAGAIQAHAHAMAAQAMAAAIgIQAIgIAAgNIAAguQAAgHAHAAQADAAACACQACACAAADIAABQIgCAFQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgKQgLASgVAAQgQAAgKgLgAEXApQgNgOAAgVIAAgBQAAgTAMgOQANgOATAAQAUAAAMAOQALANAAATQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgAFTAAQgBgNgHgIQgIgKgNAAQgMAAgJAJQgIAJgCANIA8AAIAAAAgACxAqQgDgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEABQAOAKAPAAQAJAAAFgEQAGgEAAgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgHgEQgKgGAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAPAIQADACAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBQgNgHgLAAQgIAAgFAEQgFADAAAGIAAABQAAAGAHAEIARAGQAOADAGAEQAKAHAAALIAAABQAAANgKAHQgJAIgPAAQgTAAgQgMgAgkAoQgNgOAAgUIAAgBQAAgTANgOQAOgOAVAAQAUAAAOAOQANAOAAATIAAAAQAAAUgNAOQgOAPgUAAQgVAAgOgOgAgagTQgJAKAAAOIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAJgKAAgPIAAgBQAAgOgKgKQgKgLgNAAQgPAAgKALgAiIAoQgNgPAAgTIAAgBQAAgTANgOQAOgOAUAAQAUAAAOANQADACAAADQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQgMgLgNAAQgOAAgKAKQgJALAAAOIAAAAQAAAPAKALQAJAKAPAAQAOAAAMgLQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgPAPgUAAQgUAAgOgOgAkqAuQgLgIAAgNIAAgBQAAgOALgIQALgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgNAAgLAFIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKALQAKAJAAASIAAAyQAAAHgHAAQgGAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgAkgAKQgHAFAAAJIAAAAQAAAJAHAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgNAAgHAFgAnWAuQgLgIAAgNIAAgBQAAgOALgIQALgHASAAQAPAAAOAEIAAgDQAAgZgcAAQgNAAgLAFIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgEAEgBQAPgHAPAAQAUAAAKALQAKAJAAASIAAAyQAAAHgHAAQgGAAAAgHIAAgIQgNAQgVAAQgOAAgKgIgAnMAKQgHAFAAAJIAAAAQAAAJAHAFQAHAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgOgEgOAAQgNAAgHAFgArnArQgFgEAAgGQAAgEADgDQADgEAFAAQADAAACACQAOAJAMAAQAMAAAAgIIAAAAQAAgEgGgDIgOgEQgNgEgHgFQgJgHAAgMIAAgBQAAgOAKgIQAKgIAPAAQAPAAAPAHQAGADAAAIQAAAEgDADQgDADgFAAIgFgBQgMgGgIAAQgLAAAAAHQAAADAGADIAOAFQANAFAHAEQAJAHAAAMQAAAQgKAIQgKAIgRAAQgTAAgRgLgAtSAnQgPgOAAgVIAAAAQAAgUAPgPQAPgPAXAAQAWAAAPAPQAPAOAAAUIAAABQAAAVgPAOQgPAPgXAAQgWAAgPgPgAs/gOQgHAHAAAKIAAABQAAALAHAHQAIAIALAAQALAAAHgIQAHgHAAgLIAAAAQAAgKgHgIQgIgIgLAAQgLAAgHAIgAw9AuQgKgIAAgOIAAAAQAAgQALgIQAKgGASAAQAMAAAMAEIAAgCQAAgRgVAAQgKAAgJACIgEABQgFAAgDgDQgDgDAAgFQAAgIAHgDQAOgFARAAQAWAAALALQAKAKAAAVIAAArQAAAFgEAEQgEAEgFAAQgGAAgEgEQgEgDAAgFQgLANgSAAQgOAAgJgIgAwsAXQAAAFAEAEQAEADAHAAQAJAAAGgFQAGgFAAgHIAAgFQgIgEgJAAQgTAAAAAOgAydArQgGgEAAgGQAAgEADgDQADgEAFAAQADAAACACQAOAJANAAQALAAAAgIIAAAAQAAgEgGgDIgOgEQgNgEgGgFQgKgHAAgMIAAgBQAAgOALgIQAJgIAQAAQAPAAAOAHQAHADAAAIQAAAEgDADQgDADgFAAIgFgBQgNgGgIAAQgKAAAAAHQAAADAGADIAOAFQANAFAGAEQAKAHAAAMQAAAQgLAIQgKAIgQAAQgUAAgQgLgAz/AoQgPgOAAgWIAAAAQAAgUAOgPQANgPAVAAQAWAAANAQQALAOAAAQQAAAGgDADQgEAEgFAAIg3AAQAFATATAAQALAAAJgHQADgCADAAQAFAAADADQADAEAAAEQAAAFgEADQgOAMgTAAQgWAAgOgOgAzKgDQgBgJgFgGQgGgGgIAAQgRAAgEAVIApAAIAAAAgA15ApQgOgOAAgXIAAgBQAAgWAOgOQAMgNASAAQASAAAMAPIAAgjQAAgGAEgEQAEgEAGAAQAGAAAEAEQADAEAAAGIAABpQAAAGgDAEQgEAEgGAAQgGAAgEgEQgEgEAAgGIAAgBQgLAQgTAAQgSAAgMgNgA1kgPQgIAHAAALIAAABQAAALAIAIQAGAHAKAAQAKAAAHgHQAHgIAAgLIAAgBQAAgKgHgIQgHgHgKAAQgKAAgGAHgAMRAzQgDgCAAgDIAAh2QAAgDACgCQACgDADAAQADAAACADQACACAAADIAAB2QAAAHgHAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgAKRAzQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQAAAHgGABQgOABgJAKQgJAMAAASIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAJjAzQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABQQAAAHgHAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAgACNAzQgCgCAAgDIAAgwQAAgNgHgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQARAAAJAKQAKAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAlwAzQgCgCAAgDIAAhQQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgPABgIAKQgKAMAAASIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAuNAxQgEgEAAgGIAAhGQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIAABGQAAAGgEAEQgEAEgGAAQgGAAgEgEgAvOAxQgEgEAAgGIAAg7IgBAAQgFAAgDgEQgDgDAAgEQAAgFADgEQADgDAFAAIABAAIAAgGQAAgQAIgHQAIgIAOAAIALABQAEAAADADQADADAAAFQAAAEgEAEQgDADgFAAIgCAAQgKAAAAALIAAADIAMAAQAFAAADAEQADADAAAFQAAAEgDADQgDAEgFAAIgLAAIAAA7QAAAGgEAEQgEAEgGAAQgGAAgEgEgAuLg6IACgFIAKgPQAE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gNIAAgvQAAgHAHAAQACAAADACQABACAAADIAABRIgBAFQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgKQgMASgUAAQgRAAgJgLgApwiJQgCgCAAgDQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIADABQAPAKAPAAQAIAAAGgEQAFgEAAgHIAAAAQAAgHgHgEQgFgCgLgEQgPgEgGgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAOAIQAEACAAAEQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgDgBQgNgHgMAAQgIAAgFAEQgFADAAAGIAAABQAAAGAIAEIAQAGQAOAEAHAEQAJAHAAALIAAABQAAANgJAHQgKAIgOAAQgTAAgRgMgAr/iJQgDgCAAgDQAAgBAAAAQAAgBABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIAEABQAOAKAPAAQAJAAAFgEQAGgEAAgHIAAAAQAAgHgIgEQgEgCgMgEQgOgEgHgEQgKgHAAgLIAAAAQAAgMAJgIQAJgHAOAAQAPAAAPAIQADACAAAEQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBQgNgHgLAAQgIAAgFAEQgFADAAAGIAAABQAAAGAHAEIARAGQAOAEAGAEQAKAHAAALIAAABQAAANgKAHQgJAIgPAAQgTAAgQgMgAteiFQgLgIAAgNIAAgBQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgZgcAAQgMAAgMAFIgCAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgEADgBQAPgHAQAAQAUAAAKALQAJAJAAASIAAAzQAAAHgGAAQgHAAAAgHIAAgIQgMAQgWAAQgOAAgJgIgAtUipQgHAFAAAJIAAAAQAAAJAHAFQAGAFAKAAQANAAAJgHQAJgIAAgKIAAgJQgNgEgOAAQgNAAgHAFgAwJiKQgNgOAAgVIAAgBQAAgUAMgOQANgOATAAQAUAAAMAOQALANAAAUQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgAvNizQgBgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAx6iRIAAAMQAAACgCADQgCACgDAAQgDAAgCgCQgCgDAAgCIAAh3QAAgDACgDQACgCADAAQADAAACACQACADAAADIAAAyQAOgUAVAAQASAAANAMQAOAOAAAWIAAAAQAAAWgOAOQgNANgSAAQgWAAgNgUgAxxjIQgKALAAAPIAAAAQAAAQAKAKQAKAKAOAAQAOAAAJgJQAJgKAAgQIAAgBQAAgQgJgKQgKgKgNAAQgOAAgKAKgAzriKQgNgOAAgVIAAgBQAAgUAMgOQANgOATAAQAUAAAMAOQALANAAAUQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIhEAAQACAPAJAJQAJAIANAAQAPAAAMgLQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAQAAADgCACQgPAOgUAAQgUAAgNgNgAyvizQgBgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA8AAIAAAAgAN/iCQgEgEAAgGIAAhXIgJADIgFAAQgFAAgEgDQgDgEAAgFQAAgJAJgCIASgGQAIgCAFAAQAGAAAEAEQAEAEAAAGIAABlQAAAGgEAEQgEAEgGAAQgGAAgEgEgAIviCQgEgEAAgGIAAhqQAAgGAEgEQAEgEAGAAQAGAAAEAEQAEAEAAAGIAABqQAAAGgEAEQgEAEgGAAQgGAAgEgEgAgTiAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAIgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgPABgIAKQgJAMAAATIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAi/iAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAHAAAAAHQAAAHgGABQgPABgIAKQgKAMAAATIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgAukiAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAARQAFgLAJgHQAJgHAJAAQAGAAAAAHQAAAHgGABQgOABgJAKQgJAMAAATIAAAgQAAACgCADQgCACgDAAQgDAAgCgCgA12h/QgDAAgCgCQgCgCAAgDIAAhwQAAgDACgCQACgCADAAIAlAAQAdAAATASQATARAAAbIAAABQAAAbgTASQgTASgdAAgA1viMIAeAAQAXAAAPgPQAOgOAAgVIAAAAQAAgWgOgOQgPgOgXAAIgeAAgAtBjsIAAgDIALgQQADgEAEAAIAGABQABABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgOANQgDADgFAAQgBAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_15.setTransform(165.375,416.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	// Layer_1 copy 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AxaFbQgFgEABgGIAAhkQgBgFAFgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAACQAMgQASAAQASAAAMANQAOAOAAAXIAAAAQAAAXgOAOQgMANgSAAQgSAAgMgOIAAAcQAAAGgEAEQgEAEgGAAQgFAAgEgEgAw9D9QgGAIAAAMIAAAAQAAAMAGAIQAIAHAJAAQAKAAAGgHQAIgIAAgMIAAAAQAAgMgIgIQgGgHgKAAQgJAAgIAHgALAFdQgCgCAAgDIAAhuQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAANQAOgVAVAAQATAAAMANQAOAOAAAVIAAABQAAAWgOANQgMANgTAAQgVAAgOgUIAAApQAAAHgHAAQgDAAgCgCgALWD5QgLAKAAAPIAAABQAAAPALALQAJAKAOAAQAOAAAJgKQAKgKAAgQIAAAAQAAgQgKgLQgJgJgOAAQgOAAgJAKgAgJFdQgCgCAAgDIAAhuQAAgDACgCQACgCADAAQADAAABACQACACAAADIAAANQAOgVAVAAQASAAANANQAOAOAAAVIAAABQAAAWgOANQgNANgSAAQgWAAgNgUIAAApQAAAHgGAAQgDAAgCgCgAALD5QgKAKAAAPIAAABQAAAPAKALQAKAKAOAAQAOAAAJgKQAKgKgBgQIAAAAQABgQgKgLQgKgJgNAAQgOAAgKAKgASYE2QgOgOAAgVIAAAAQAAgVAMgOQANgOAUAAQATAAANAPQAKANABATQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhDAAQABAPAKAIQAIAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgMgNgATTEOQgBgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAQgE3QgOgOABgWIAAAAQgBgWAOgOQANgNASAAQAWAAAOAUIAAgyQAAgHAGAAQAEAAABACQACACAAADIAAB3QAAADgCACQgBACgEAAQgDAAgBgCQgCgCAAgDIAAgMQgOAUgWAAQgSAAgNgMgAQqD4QgJAKAAAQIAAABQAAAQAJAKQAKAKANAAQAOAAAKgKQAKgLAAgPIAAgBQAAgPgKgLQgKgJgOAAQgNAAgKAJgAM9E1QgNgOAAgUIAAAAQAAgUANgOQAOgPAVAAQAVAAAOAOQANAOAAAUIAAABQAAAUgNAOQgOAOgVAAQgUAAgPgOgANHD5QgJAKAAAPIAAABQAAAPAKAKQAJALAPAAQAPAAAKgLQAKgKAAgPIAAAAQgBgPgJgLQgKgLgPAAQgPAAgKALgAJfE3QgCgBAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABQAPAKAPAAQAJAAAFgEQAGgEAAgGIAAgBQAAgGgIgEQgFgDgLgDQgPgEgGgEQgKgHAAgLIAAgBQAAgMAJgHQAJgHAOAAQAPAAAOAIQAEACAAADQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBQgNgHgMAAQgHAAgFAEQgGAEAAAGIAAAAQABAGAHAEIARAGQANAEAHAFQAJAHAAALIAAAAQAAANgJAIQgKAHgOAAQgTAAgRgMgAICE2QgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQATAAANAPQALANAAATQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIhEAAQACAPAJAIQAJAIANAAQAPAAAMgKQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgAI+EOQgBgOgHgJQgJgJgNAAQgLAAgJAJQgIAJgCAOIA8AAIAAAAgAEbE8QgKgIgBgOIAAAAQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgagcAAQgNAAgLAFIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgEADgCQAPgGAQAAQATAAAKAKQAKAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgNAQgVAAQgOAAgKgHgAEmEXQgIAFABAJIAAABQgBAIAIAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgOgEgNAAQgOAAgGAFgABvE8QgKgIgBgOIAAAAQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgagcAAQgNAAgLAFIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQABgEADgCQAPgGAQAAQATAAAKAKQAKAKAAARIAAAzQAAAHgHAAQgGAAAAgGIAAgJQgNAQgVAAQgOAAgKgHgAB5EXQgGAFAAAJIAAABQAAAIAGAFQAHAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgNgEgOAAQgNAAgIAFgAiyE1QgPgOAAgVIAAgBQAAgVAPgOQAPgPAXAAQAWAAAPAOQAPAPAAAVIAAAAQAAAVgPAPQgPAOgXAAQgVAAgQgOgAifD+QgHAIAAALIAAAAQABALAGAIQAIAIALAAQAMAAAGgIQAHgHAAgLIAAgBQAAgLgHgHQgIgIgLAAQgLAAgHAHgAksE2QgOgOAAgXIAAAAQAAgXAOgOQAMgNATAAQARAAAMAOIAAgjQAAgFAFgEQAEgEAFAAQAGAAAEAEQAEAEgBAFIAABrQABAFgEAEQgEAEgGAAQgFAAgEgEQgFgEAAgFIAAgCQgLAQgSAAQgSAAgNgNgAkXD9QgHAIgBAMIAAAAQABAMAHAIQAHAHAKAAQAJAAAHgHQAHgIAAgMIAAAAQAAgMgHgIQgHgHgJAAQgKAAgHAHgAmcE7QgKgIAAgNIAAgBQAAgPALgIQALgIARAAQANAAALAEIAAgBQAAgSgUAAQgLAAgIADIgFAAQgFAAgDgDQgDgDAAgFQAAgHAIgDQANgFARAAQAWAAALALQAKAKAAAUIAAAsQAAAGgEAEQgEADgFAAQgGAAgEgDQgDgDAAgFQgMAMgRAAQgOAAgKgIgAmLEkQAAAGAEADQAEADAHAAQAKAAAFgFQAHgEgBgIIAAgFQgIgDgJAAQgTAAAAANgAvbE1QgOgOAAgVIAAgBQAAgVAOgOQAPgPAXAAQAWAAAPAOQAPAPAAAVIAAAAQAAAVgPAPQgPAOgXAAQgVAAgQgOgAvID+QgHAIABALIAAAAQAAALAGAIQAIAIALAAQAMAAAGgIQAHgHAAgLIAAgBQAAgLgHgHQgIgIgLAAQgLAAgHAHgA1uE2QgOgOAAgWIAAgBQAAgVANgOQAOgPAVAAQAWAAANAQQALANAAARQAAAGgDAEQgEAEgFAAIg3AAQAFASATAAQALAAAJgGQADgCADAAQAEAAADADQADADABAFQAAAEgEAEQgOALgUAAQgWAAgOgNgA04EJQgBgJgFgFQgGgGgIAAQgRAAgEAUIApAAIAAAAgAnmEmIAAguIAAAAQgFAAgEgDQgEgEAAgFQAAgEAEgEQAEgDAFAAIAAAAIAAgMQAAgGAEgEQAEgEAGAAQAFAAAEAEQAFAEAAAGIAAAMIALAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAIgLAAIAAApQgBAKAKAAIACAAQAGAAACADQAEADAAAFQAAAHgHADQgHADgIAAQgdAAAAgdgA3zEmIAAguIgBAAQgFAAgDgDQgEgEAAgFQAAgEAEgEQADgDAFAAIABAAIAAgMQAAgGADgEQAFgEAFAAQAGAAAEAEQAEAEAAAGIAAAMIAMAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAIgMAAIAAApQAAAKAJAAIADAAQAFAAADADQAEADgBAFQABAHgIADQgGADgJAAQgcAAAAgdgAUzFAQgCgDAAgDIAAgEQAAgEACgCQADgDADAAQAEAAACADQACACAAAEIAAAEQAAADgCADQgCACgEAAQgDAAgDgCgAT8FAQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAgBAHQAAAGgFABQgPACgJAKQgJALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgAPvFAQgCgCAAgDIAAgwQAAgNgGgIQgIgHgMAAQgMAAgHAIQgIAIAAANIAAAvQgBAHgGAAQgEAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCAEAAQACAAACACQADACAAADIAAAKQAKgSAVAAQARAAAJALQAKAKAAARIAAAzQAAADgCACQgCACgDAAQgDAAgCgCgAG4FAQgCgCAAgDIAAhRQAAgDACgCQABgCADAAQAEAAACACQABACAAADIAAASQAFgMAKgGQAIgHAKAAQAGAAAAAHQAAAGgGABQgPACgIAKQgKALAAATIAAAgQAAADgBACQgCACgEAAQgDAAgBgCgADWFAQgCgCgBgDIAAhRQABgDACgCQACgCACAAQADAAADACQACACgBADIAAASQAFgMAKgGQAIgHAKAAQAGAAAAAHQAAAGgGABQgPACgIAKQgKALAAATIAAAgQABADgCACQgDACgDAAQgCAAgCgCgAobE+QgEgEAAgFIAAhIQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEABAFIAABIQgBAFgEAEQgEAEgGAAQgFAAgEgEgApQE+QgDgEAAgFIAAgqQAAgTgQAAQgRAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgGAAgFgEQgEgEAAgFIAAgqQAAgTgQAAQgQAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgGAAgEgEQgFgEAAgFIAAhIQAAgFAFgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAABQAMgPARAAQATAAAIAPQANgPASAAQAQAAAJAJQAIAJAAARIAAAzQAAAFgEAEQgEAEgGAAQgGAAgEgEgAr8E+QgEgEAAgFIAAhIQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEABAFIAABIQgBAFgEAEQgEAEgGAAQgFAAgEgEgAsyE+QgEgEAAgFIAAhrQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEABAFIAABrQgBAFgEAEQgEAEgFAAQgGAAgEgEgAyOE+QgDgEAAgFIAAgqQgBgTgQAAQgQAAAAATIAAAqQAAAFgEAEQgEAEgFAAQgHAAgDgEQgFgEAAgFIAAgqQABgTgRAAQgQAAAAATIAAAqQAAAFgEAEQgEAEgGAAQgFAAgEgEQgFgEABgFIAAhIQgBgFAFgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAABQAMgPARAAQATAAAIAPQANgPASAAQAQAAAJAJQAIAJAAARIAAAzQAAAFgEAEQgEAEgGAAQgFAAgFgEgA2oE+QgEgEAAgFIAAhIQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEABAFIAABIQgBAFgEAEQgEAEgGAAQgFAAgEgEgAocDUQgFgEAAgGIAAAAQAAgGAFgEQAEgDAGAAQAIAAADADQAFAEAAAGIAAAAQAAAGgFAEQgDADgIAAQgGAAgEgDgAr9DUQgFgEAAgGIAAAAQAAgGAFgEQAEgDAGAAQAIAAADADQAFAEAAAGIAAAAQAAAGgFAEQgDADgIAAQgGAAgEgDgA2pDUQgFgEAAgGIAAAAQAAgGAFgEQAEgDAGAAQAIAAADADQAFAEAAAGIAAAAQAAAGgFAEQgDADgIAAQgGAAgEgDgAn0CpQgCgCAAgDIAAhuQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAANQAOgVAWAAQASAAAMANQAOAOAAAVIAAABQAAAWgOANQgMANgSAAQgXAAgNgUIAAApQAAAHgHAAQgDAAgCgCgAneBFQgKAKAAAPIAAABQAAAPAKALQAJAKAOAAQAOAAAJgKQAKgKAAgQIAAAAQAAgQgKgLQgJgJgOAAQgOAAgJAKgAzuCfQgEgBAAgEQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIACAAQAQALASAAQAPAAAJgJQAKgJAAgQIAAgLQgPAUgWAAQgSAAgNgMQgNgMAAgUQAAgTANgNQAOgMARAAQAWAAAOATIAAgLQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABHQAAAVgMAMQgMAMgXAAQgWAAgRgLgAzeBDQgKAJAAAOIAAAAQAAAOAKAJQAJAJAOAAQANAAAKgJQALgJAAgOIAAAAQAAgOgLgJQgKgJgNAAQgOAAgJAJgAW8CDQgDgBABgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQABgBAAAAQABAAAAAAIAEABQAOAKAPAAQAJAAAGgEQAFgEAAgGIAAgBQAAgGgIgEQgEgDgLgDQgPgEgHgEQgJgHgBgLIAAgBQABgMAIgHQAKgHAOAAQAOAAAPAIQADACAAADQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgBQgNgHgLAAQgIAAgFAEQgFAEAAAGIAAAAQAAAGAIAEIAQAGQAOAEAHAFQAJAHAAALIAAAAQAAANgJAIQgKAHgPAAQgSAAgRgMgAVfCCQgOgOAAgVIAAAAQAAgVANgOQAMgOATAAQAUAAANAPQAKANABATQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAIAMAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgMgNgAWaBaQgBgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgASGCCQgOgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAANAPQAKANABATQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhDAAQABAPAKAIQAIAIANAAQAPAAAMgKQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgTAAgNgNgATBBaQgBgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAMaCIQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAAOAEIAAgDQAAgagdAAQgMAAgLAFIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEADgCQAPgGAQAAQAUAAAKAKQAJAKAAARIAAAzQAAAHgGAAQgHAAABgGIAAgJQgNAQgVAAQgPAAgJgHgAMkBjQgHAFAAAJIAAABQAAAIAHAFQAGAFAKAAQANAAAKgHQAIgHABgLIAAgJQgOgEgOAAQgNAAgHAFgAJvCBQgNgOAAgUIAAAAQAAgUANgOQAOgPAUAAQAUAAAOAOQACACAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgMgMgNAAQgPAAgJALQgKAKAAAPIAAABQABAPAJAKQAKALAOAAQAOAAANgLQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgPAOgUAAQgUAAgOgOgAIECCQgNgOAAgVIAAAAQAAgVAMgOQANgOAUAAQATAAAMAPQAMANAAATQgBADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhEAAQACAPAKAIQAIAIAOAAQAOAAANgKQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABACgDACQgOAOgVAAQgUAAgNgNgAJBBaQgCgOgHgJQgIgJgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgAEECBQgOgOAAgUIAAAAQAAgUAOgOQANgPAWAAQAUAAAOAOQANAOAAAUIAAABQAAAUgNAOQgOAOgVAAQgUAAgOgOgAEOBFQgKAKAAAPIAAABQAAAPAKAKQAKALAPAAQAOAAAKgLQAKgKgBgPIAAAAQAAgPgKgLQgJgLgPAAQgPAAgJALgACgCBQgOgOAAgUIAAAAQAAgUAOgOQAOgPATAAQAUAAAOAOQADACAAADQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgMgMgNAAQgOAAgJALQgKAKAAAPIAAABQAAAPAKAKQAKALAOAAQAOAAAMgLQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAgBABQgOAOgVAAQgTAAgOgOgAgBCIQgMgIAAgOIAAAAQAAgOAMgIQAJgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMAAgMAFIgDABQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgEAEgCQAOgGAPAAQAVAAAJAKQAKAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgNAQgVAAQgOAAgIgHgAAIBjQgIAFAAAJIAAABQAAAIAIAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgNgEgPAAQgNAAgGAFgAiqCDQgDgBAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEABQAOAKAPAAQAJAAAFgEQAFgEAAgGIAAgBQAAgGgHgEQgFgDgLgDQgPgEgGgEQgKgHAAgLIAAgBQAAgMAJgHQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBQgNgHgLAAQgJAAgFAEQgEAEAAAGIAAAAQgBAGAIAEIAQAGQAPAEAGAFQAKAHAAALIAAAAQAAANgKAIQgKAHgOAAQgTAAgQgMgAkICCQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAgBAAIhDAAQACAPAJAIQAJAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAACgDACQgOAOgVAAQgTAAgNgNgAjMBaQgBgOgIgJQgHgJgNAAQgMAAgJAJQgJAJgBAOIA8AAIAAAAgAl3CFQgJgKAAgRIAAg0QAAgHAHAAQADAAACACQACACAAADIAAAxQAAANAGAHQAIAIAMAAQALAAAJgIQAHgJABgNIAAgvQAAgHAGAAQADAAADACQABACAAADIAABRIgBAFQgCACgEAAQgDAAgBgCQgCgCAAgDIAAgKQgMASgVAAQgQAAgKgKgApUCDQgDgBAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIADABQAPAKAPAAQAIAAAGgEQAFgEABgGIAAgBQAAgGgIgEQgEgDgMgDQgOgEgHgEQgKgHAAgLIAAgBQAAgMAJgHQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBQgNgHgMAAQgHAAgFAEQgGAEAAAGIAAAAQAAAGAIAEIARAGQANAEAHAFQAJAHAAALIAAAAQAAANgJAIQgKAHgOAAQgTAAgQgMgAqyCCQgNgOAAgVIAAAAQAAgVAMgOQAMgOAUAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAIANAAQAPAAAMgKQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgAp2BaQgBgOgHgJQgIgJgNAAQgNAAgIAJQgJAJgBAOIA8AAIAAAAgAuYCIQgMgIAAgOIAAAAQAAgOAMgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMAAgMAFIgCABQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQABgEADgCQAPgGAPAAQAVAAAJAKQAKAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgMAQgWAAQgOAAgJgHgAuOBjQgIAFABAJIAAABQgBAIAIAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgOgEgNAAQgOAAgGAFgA1TCCQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQAUAAAMAPQALANAAATQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgNgNgA0XBaQgBgOgIgJQgHgJgNAAQgMAAgJAJQgJAJgBAOIA8AAIAAAAgA3tCCQgNgOAAgVIAAAAQAAgVAMgOQANgOAUAAQATAAAMAPQAMANAAATQgBADgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhEAAQACAPAKAIQAIAIANAAQAPAAANgKQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABACgDACQgOAOgVAAQgUAAgNgNgA2wBaQgCgOgHgJQgIgJgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgALSB1IAAg5IgIAAIgDgBQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIADgCIAIAAIAAgWQABgDABgCQACgCADAAQADAAACACQACACAAADIAAAWIAYAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgYAAIAAA3QAAAPAQAAIAIgBIAFACIABAEQAAAEgDABQgHADgIAAQgaAAAAgagAhJB1IAAg5IgIAAIgEgBQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAIAAIAAgWQAAgDACgCQACgCACAAQAEAAABACQACACAAADIAAAWIAZAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgZAAIAAA3QABAPAPAAIAJgBIAEACIACAEQAAAEgEABQgGADgIAAQgaAAAAgagAUtCMQgCgCAAgDIAAgwQAAgNgGgIQgHgHgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAVAAQAQAAAKALQAKAKAAARIAAAzQgBADgCACQgCACgCAAQgDAAgDgCgARSCMQgCgCAAgDIAAhRQAAgDACgCQABgCADAAQAEAAACACQABACAAADIAABRQABAHgIAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBgAQGCMQgCgCgBgDIAAhrIgkAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIBYAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIglAAIAABrQAAADgCACQgCACgDAAQgDAAgCgCgAN+CMQgCgDAAgDIAAgEQAAgEACgCQADgDADAAQAFAAACADQACACAAAEIAAAEQAAADgCADQgCACgFAAQgDAAgDgCgAG6CMQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQgBAGgFABQgPACgJAKQgJALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgAFyCMQgCgCAAgDIAAhRQAAgDACgCQABgCAEAAQADAAABACQACACAAADIAAASQAGgMAJgGQAJgHAJAAQAGAAAAAHQAAAGgGABQgOACgJAKQgKALAAATIAAAgQAAADgCACQgBACgDAAQgEAAgBgCgAr8CMQgCgCAAgDIAAhRQAAgDACgCQABgCADAAQAEAAABACQACACAAADIAAASQAGgMAJgGQAIgHAKAAQAGAAAAAHQAAAGgGABQgPACgIAKQgKALAAATIAAAgQAAADgCACQgBACgEAAQgDAAgBgCgAvICMQgCgCgBgDIAAh3QABgDABgCQADgCADAAQACAAACACQACACABADIAAB3QgBAHgGAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAxICMQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQgBAGgGABQgOACgJAKQgJALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgAx2CMQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABRQAAAHgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgA2GCMQgDgCAAgDIAAh3QAAgDACgCQACgCADAAQADAAACACQACACAAADIAAB3QAAAHgHAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgARRAbQgDgCAAgEIAAgCQABgHAHAAQAJAAAAAHIAAACQAAAEgCACQgDACgEAAQgDAAgCgCgAx2AbQgDgCAAgEIAAgCQAAgHAIAAQAJAAgBAHIAAACQAAAEgCACQgDACgDAAQgDAAgCgCgATBgLQgDgCAAgEQAAgBAAAAQAAgBAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAIAEABQAEABAGAAQALAAAIgQIAAgCIgmhSIgBgEQAAgDACgCQABgCADAAQAGAAABAGIAhBJIAdhKQABgFAGAAQAAAAABAAQAAAAABABQAAAAABAAQABABAAAAQACACAAADIgBAEIgkBWQgGAPgHAGQgHAGgLAAQgHAAgJgDgA2ogKQgCgCAAgDIAAgpQgOAUgVAAQgTAAgMgMQgOgOAAgWIAAAAQAAgWAOgOQAMgNATAAQAVAAAOAUIAAgMQAAgDACgCQACgCADAAQADAAACACQACACAAADIAABuQAAADgCACQgCACgDAAQgDAAgCgCgA3ihvQgKAKAAAQIAAABQAAAQAKAKQAKAKANAAQAOAAAKgKQAJgLABgPIAAgBQgBgPgJgLQgKgJgOAAQgOAAgJAJgAOzgyQgNgOAAgUIAAAAQAAgUANgOQAOgPAVAAQAUAAAPAOQANAOAAAUIAAABQAAAUgNAOQgOAOgVAAQgVAAgOgOgAO9huQgKAKAAAPIAAABQABAPAJAKQAKALAPAAQAPAAAKgLQAJgKAAgPIAAAAQAAgPgKgLQgKgLgOAAQgQAAgJALgAMegyQgOgOAAgUIAAAAQAAgUAOgOQAOgPATAAQAUAAAOAOQADACAAADQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgMgMgNAAQgOAAgJALQgKAKAAAPIAAABQAAAPAKAKQAKALAOAAQAOAAAMgLQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABQgOAOgVAAQgTAAgOgOgAJEgxQgNgOAAgVIAAAAQAAgVAMgOQANgOAUAAQATAAAMAPQAMANAAATQAAADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhEAAQACAPAKAIQAIAIANAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABACgDACQgPAOgUAAQgUAAgNgNgAKAhZQgBgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgCAOIA8AAIAAAAgAGUgrQgLgIAAgOIAAAAQAAgOALgIQAKgIASAAQAPAAAOAEIAAgDQAAgagcAAQgMAAgMAFIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgEAEgCQAPgGAPAAQAVAAAKAKQAJAKAAARIAAAzQAAAHgGAAQgHAAAAgGIAAgJQgNAQgVAAQgOAAgJgHgAGehQQgIAFAAAJIAAABQAAAIAIAFQAGAFAKAAQANAAAJgHQAJgHAAgLIAAgJQgNgEgPAAQgNAAgGAFgAB/gyQgNgOAAgUIAAAAQAAgUANgOQAOgPAVAAQAVAAAOAOQANAOAAAUIAAABQAAAUgNAOQgPAOgUAAQgVAAgOgOgACJhuQgKAKAAAPIAAABQAAAPAKAKQAKALAPAAQAPAAAKgLQAJgKAAgPIAAAAQAAgPgKgLQgKgLgOAAQgQAAgJALgAAbgyQgOgOAAgUIAAAAQAAgUAOgOQAOgPAUAAQAUAAAOAOQACACABADQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgMgMgNAAQgPAAgJALQgKAKAAAPIAAABQAAAPAKAKQAKALAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgPAOgUAAQgUAAgOgOgAjNgxQgNgOAAgVIAAAAQAAgVAMgOQANgOATAAQATAAANAPQALANAAATQAAADgCACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIhE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DAAACACQACACAAADIAAAKQALgSAUAAQASAAAJALQAKAKgBARIAAAzQAAADgCACQgBACgDAAQgEAAgCgCgAExgnQgCgCAAgDIAAgwQAAgNgHgIQgHgHgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAHgHAAQgDAAgCgCQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAAKQALgSAUAAQARAAAKALQAJAKAAARIAAAzQAAADgBACQgCACgEAAQgDAAgBgCgAhpgnQgCgCAAgDIAAhRQAAgDACgCQADgCADAAQACAAACACQACACABADIAAASQAEgMAJgGQAJgHAJAAQAHAAAAAHQAAAGgGABQgOACgJAKQgKALABATIAAAgQgBADgCACQgCACgCAAQgDAAgDgCgAlrgnQgCgCgBgDIAAh3QAAgDACgCQADgCACAAQADAAADACQACACAAADIAAB3QAAAHgIAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBgAqognQgCgCAAgDIAAhRQAAgDACgCQACgCADAAQADAAACACQACACAAADIAAASQAFgMAJgGQAJgHAJAAQAGAAABAHQAAAGgHABQgOACgIAKQgKALAAATIAAAgQAAADgCACQgCACgDAAQgDAAgCgCgAPSiTIABgCIALgRQADgEADAAQADAAADACQAEACAAACQAAAAAAABQAAAAgBAAQAAABgBABQAAAAgBABIgNAMQgDAEgGAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgApFiTIAAgCIAMgRQACgEAEAAIAGACQABAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBABQAAAAgBABIgNAMQgEAEgFAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgAN+iYQgCgCAAgEIAAgCQAAgHAIAAQAJAAAAAHIAAACQgBAEgCACQgCACgEAAQgEAAgCgCgAHVi+QgBgCAAgDIAAhuQAAgDABgCQACgCAEAAQACAAACACQACACAAADIAAANQAOgVAWAAQASAAANANQANAOAAAVIAAABQAAAWgNANQgNANgSAAQgWAAgOgUIAAApQAAAHgGAAQgEAAgCgCgAHrkiQgKAKAAAPIAAABQAAAPAKALQAKAKANAAQAOAAAKgKQAJgKAAgQIAAAAQAAgQgJgLQgKgJgOAAQgNAAgKAKgADNi/QgFgCAAgEQAAgBABAAQAAgBAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAIACABQAFABAGAAQALAAAHgQIACgCIgohSIgBgEQAAgDACgCQACgCAEAAQAFAAACAGIAgBJIAchKQADgFAEAAQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQACACAAADIAAAEIglBWQgGAPgHAGQgIAGgKAAQgIAAgHgDgAL9jIQgEgBgBgEQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIADAAQAPALASAAQAPAAAKgJQAJgJAAgQIAAgLQgPAUgVAAQgSAAgNgMQgOgMABgUQgBgTAOgNQANgMASAAQAWAAAOATIAAgLQAAgDABgCQACgCAEAAQACAAACACQACACAAADIAABHQAAAVgMAMQgMAMgXAAQgVAAgRgLgAMNkkQgKAJAAAOIAAAAQAAAOAKAJQAIAJAOAAQAOAAAKgJQAKgJAAgOIAAAAQAAgOgKgJQgKgJgOAAQgOAAgIAJgAT6jkQgCgBgBgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIADABQAOAKAQAAQAIAAAFgEQAGgEAAgGIAAgBQAAgGgHgEQgFgDgMgDQgOgEgGgEQgKgHAAgLIAAgBQAAgMAJgHQAIgHAOAAQAPAAAPAIQADACABADQAAABgBAAQAAABAAABQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgCgBQgOgHgLAAQgIAAgFAEQgFAEAAAGIAAAAQAAAGAIAEIAQAGQAOAEAGAFQAKAHAAALIAAAAQAAANgKAIQgJAHgPAAQgTAAgQgMgASbjfQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcAAQgMAAgLAFIgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEADgCQAQgGAPAAQAUAAAKAKQAKAKAAARIAAAzQgBAHgGAAQgHAAAAgGIAAgJQgMAQgVAAQgPAAgJgHgASlkEQgHAFAAAJIAAABQAAAIAHAFQAGAFALAAQANAAAIgHQAJgHAAgLIAAgJQgNgEgOAAQgNAAgHAFgAN6jiQgKgKAAgRIAAg0QAAgHAHAAQACAAADACQACACAAADIAAAxQAAANAGAHQAIAIALAAQANAAAHgIQAJgJgBgNIAAgvQAAgHAHAAQADAAADACQABACAAADIAABRIgBAFQgDACgDAAQgCAAgDgCQgCgCAAgDIAAgKQgLASgUAAQgRAAgJgKgAKYjlQgOgOAAgVIAAAAQAAgVANgOQAMgOATAAQAUAAANAPQAKANABATQAAADgCACQgBABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAIAMAAQAPAAAMgKQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAACgCACQgPAOgUAAQgUAAgMgNgALTkNQgBgOgHgJQgIgJgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAE7jlQgOgOAAgVIAAAAQAAgVANgOQAMgOAUAAQAUAAAMAPQALANAAATQAAADgCACQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIhDAAQACAPAJAIQAJAIANAAQAPAAAMgKQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAACgDACQgOAOgUAAQgUAAgNgNgAF3kNQgBgOgHgJQgJgJgNAAQgMAAgIAJQgIAJgCAOIA8AAIAAAAgABojiQgKgKAAgRIAAg0QABgHAGAAQADAAADACQABACAAADIAAAxQABANAGAHQAHAIAMAAQAMAAAIgIQAIgJAAgNIAAgvQAAgHAHAAQACAAADACQABACAAADIAABRIgBAFQgCACgDAAQgDAAgCgCQgCgCAAgDIAAgKQgLASgVAAQgQAAgKgKgAgsjmQgOgOAAgUIAAAAQAAgUAOgOQANgPAVAAQASAAAOAOQADACAAADQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgLgMgNAAQgOAAgJALQgKAKAAAPIAAABQAAAPAKAKQAJALAPAAQANAAAMgLQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAABQgQAOgSAAQgVAAgNgOgAnjjmQgNgOAAgUIAAAAQAAgUANgOQAPgPAUAAQAVAAAOAOQANAOAAAUIAAABQAAAUgNAOQgOAOgVAAQgVAAgOgOgAnZkiQgJAKAAAPIAAABQAAAPAKAKQAKALAOAAQAPAAAKgLQAKgKAAgPIAAAAQAAgPgKgLQgKgLgPAAQgPAAgKALgAp4jmQgOgOAAgUIAAAAQAAgUAOgOQAOgPAUAAQATAAAPAOQACACAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAABgBAAQgBACgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgMgMgOAAQgOAAgJALQgJAKAAAPIAAABQAAAPAKAKQAJALAOAAQAOAAAMgLQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBABQgPAOgUAAQgUAAgOgOgArkjfQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAOAEIAAgDQAAgagbAAQgNAAgMAFIgCABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgEAEgCQAOgGAQAAQAUAAAKAKQAKAKgBARIAAAzQABAHgHAAQgGAAgBgGIAAgJQgMAQgWAAQgNAAgKgHgArakEQgHAFAAAJIAAABQAAAIAHAFQAHAFAKAAQANAAAIgHQAKgHgBgLIAAgJQgNgEgOAAQgNAAgHAFgAuNjkQgCgBAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQABAAAAAAQA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");
	this.shape_16.setTransform(174.1,264.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.instrucciones_generales, new cjs.Rectangle(-1.1,0,345.1,533.2), null);


(lib.INSTRUCCIONES = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALmBDQgQgGgNgLIATgWQAJAIALAEQAKAFALAAQAKAAAFgEQAGgDAAgGIAAgBIgBgFIgFgEIgIgEIgigKQgIgDgGgFQgHgEgDgIQgDgGAAgLIAAAAQAAgJAEgJQADgHAGgFQAHgHAJgCQAJgEALAAQAPABANAFQANAEALAIIgQAYQgJgGgJgEQgKgEgJAAQgJAAgEAEQgFADAAAFIAAABQAAADACADQABACAEADIAIADIAQAEIASAGQAJAEAGAEQAFAFADAGQADAHAAAKQAAAKgDAJQgEAHgHAFQgHAGgJADQgJADgMAAQgQABgPgGgAEqBDQgNgGgKgKQgKgJgGgNQgFgNAAgQIAAAAQAAgOAFgOQAGgMAKgKQAKgKANgGQAOgGAQAAQARAAANAGQAOAGAKAKQAKAJAFANQAGANAAAPIAAAAQAAAPgGAOQgFAMgKAKQgKAKgOAGQgNAGgRgBQgQABgOgGgAE3gnQgIADgFAGQgGAGgDAHQgDAJAAAIIAAAAQAAAJADAIQADAIAGAGQAGAHAIADQAHADAJAAQAKAAAIgDQAHgDAGgHQAGgGACgIQAEgIAAgJIAAAAQAAgIgEgJQgCgHgGgGQgGgGgIgDQgIgEgJAAQgJAAgIAEgABTBDQgOgGgJgJQgKgKgFgNQgGgNAAgQIAAAAQAAgOAGgOQAFgMAKgKQAJgKAOgGQANgGAQAAQAKAAAJACIAOAEIAMAIIALAJIgUAVQgIgGgIgFQgJgEgLAAQgJAAgHAEQgIADgFAGQgFAGgEAHQgCAJAAAIIAAAAQAAAJACAIQAEAIAFAGQAFAHAIADQAHADAJAAQANAAAIgEQAIgFAIgHIAUAUIgLAKQgGAEgHAEQgHADgIABQgIACgLAAQgPABgNgGgAhABDQgNgGgKgJQgKgKgFgNQgFgNAAgQIAAAAQAAgOAFgOQAFgMAKgKQAKgKANgGQAOgGAQAAQAKAAAIACIAPAEIALAIIAKAJIgTAVQgHgGgJgFQgJgEgKAAQgJAAgHAEQgIADgFAGQgGAGgDAHQgDAJAAAIIAAAAQAAAJADAIQADAIAFAGQAGAHAHADQAIADAJAAQAMAAAIgEQAJgFAGgHIAUAUIgLAKQgGAEgFAEQgIADgIABQgIACgKAAQgPABgOgGgAjvA5QgQgQAAgfIAAhPIAfAAIAABOQAAARAIAJQAIAJAOAAQAPAAAIgJQAHgHAAgSIAAhPIAgAAIAABOQAAAQgFALQgEANgIAIQgIAIgMAEQgLADgOAAQgcAAgRgPgAp8BDQgQgGgNgLIATgWQAJAIALAEQAKAFALAAQAKAAAFgEQAGgDAAgGIAAgBIgBgFIgFgEIgIgEIgigKQgIgDgGgFQgHgEgDgIQgDgGAAgLIAAAAQAAgJAEgJQADgHAGgFQAHgHAJgCQAJgEALAAQAPABANAFQANAEALAIIgQAYQgJgGgJgEQgKgEgJAAQgJAAgEAEQgFADAAAFIAAABQAAADACADQABACAEADIAIADIAPAEIATAGQAJAEAGAEQAFAFADAGQADAHAAAKQAAAKgDAJQgEAHgHAFQgHAGgJADQgKADgLAAQgQABgPgGgANPBGIAAggIAhAAIAAAggAJMBGIAAiLIBqAAIAAAbIhLAAIAAAdIBCAAIAAAbIhCAAIAAAdIBMAAIAAAbgAIRBGIhEhYIAABYIgfAAIAAiLIAdAAIBCBVIAAhVIAeAAIAACLgADDBGIAAiLIAeAAIAACLgAk4BGIgegtIgYAAIAAAtIgfAAIAAiLIBAAAQAZAAAOAMQANANAAAVIAAABQAAARgHAKQgJAKgNAFIAiAygAlugBIAfAAQALAAAGgFQAGgGAAgIIAAgBQAAgKgGgGQgHgEgLAAIgeAAgAnuBGIAAhvIgrAAIAAgcIB0AAIAAAcIgrAAIAABvgArLBGIhEhYIAABYIgfAAIAAiLIAdAAIBCBVIAAhVIAeAAIAACLgAtvBGIAAiLIAfAAIAACLgANPgEIAAghIAhAAIAAAhg");
	this.shape.setTransform(512.225,21.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ASQCpQgCgCAAgDIAAhuQAAgDACgBQABgCADAAQAEAAACACQABABAAADIAAANQAOgUAWAAQASAAANAMQAOAOgBAWIAAAAQABAWgOAOQgNAMgSAAQgWABgOgVIAAApQAAAHgHAAQgDAAgBgCgASlBFQgKAKAAAQIAAAAQAAAQAKAKQAKAKAOAAQAOAAAIgJQAKgLAAgQIAAAAQAAgQgKgLQgJgJgNAAQgOAAgKAKgAEICpQgCgCAAgDIAAhuQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAANQAOgUAWAAQARAAANAMQAOAOAAAWIAAAAQAAAWgOAOQgNAMgRAAQgXABgNgVIAAApQAAAHgHAAQgDAAgCgCgAEeBFQgLAKABAQIAAAAQgBAQALAKQAKAKANAAQAOAAAJgJQAJgLAAgQIAAAAQAAgQgJgLQgKgJgNAAQgNAAgKAKgAnBCpQgCgCAAgDIAAhuQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAANQAOgUAVAAQATAAAMAMQAOAOAAAWIAAAAQAAAWgOAOQgMAMgTAAQgVABgOgVIAAApQAAAHgHAAQgDAAgCgCgAmrBFQgLAKAAAQIAAAAQAAAQALAKQAJAKAOAAQAOAAAJgJQAKgLAAgQIAAAAQAAgQgKgLQgKgJgNAAQgOAAgJAKgAW3CfQgFgBAAgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABQAPAKASAAQAQAAAJgJQAJgIAAgRIAAgLQgPAVgVgBQgTAAgMgLQgNgNAAgUQAAgTANgMQANgMASAAQAVAAAPASIAAgLQAAgDACgBQABgCADAAQAEAAABACQACABAAADIAABHQABAWgMALQgNAMgXAAQgVAAgRgLgAXGBDQgJAJAAAOIAAAAQAAAOAJAJQAJAJAOAAQANAAALgJQAKgJAAgOIAAAAQAAgNgKgJQgKgKgOABQgOAAgJAIgAdVCIQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAOAEIAAgDQAAgagcABQgMgBgMAGIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgCQAOgGAQAAQAUAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAgBgGIAAgIQgMAPgWAAQgOABgJgIgAdfBjQgHAFAAAJIAAABQAAAIAHAGQAHAEAKAAQAMABAJgIQAKgHgBgLIAAgJQgNgDgOAAQgNAAgHAEgAY0CFQgKgKAAgRIAAg0QAAgGAHAAQACAAADACQACABAAADIAAAxQAAANAHAHQAGAIANAAQAMAAAHgIQAJgIgBgNIAAgwQAAgGAIAAQACAAACACQACABAAADIAABRIgCAFQgCACgCAAQgDAAgDgCQgCgBAAgEIAAgKQgLATgVgBQgQAAgJgKgAVRCDQgNgOAAgWIAAAAQAAgUAMgPQANgNAUAAQATAAAMAOQAMANAAAUQAAACgDACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAKAIQAIAJANAAQAPgBAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABADgDACQgPANgUAAQgUAAgNgMgAWNBaQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgCAOIA8AAIAAAAgAP0CIQgMgIAAgOIAAAAQAAgOAMgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcABQgMgBgMAGIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgEADgCQAPgGAQAAQAUAAAJALQAKAJAAASIAAAyQAAAIgGgBQgHAAAAgGIAAgIQgNAPgVAAQgOABgJgIgAP+BjQgIAFABAJIAAABQgBAIAIAGQAGAEAKAAQANABAJgIQAJgHAAgLIAAgJQgOgDgNAAQgOAAgGAEgALgCDQgOgOAAgWIAAAAQAAgUANgPQAMgNATAAQAUAAANAOQALANgBAUQAAACgBACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAJAIQAKAJANAAQAPgBAMgKQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAADgDACQgOANgVAAQgTAAgNgMgAMcBaQgCgOgHgIQgIgKgNAAQgMAAgJAJQgIAJgBAOIA8AAIAAAAgAJpCDQgOgOgBgWIAAAAQABgWAOgOQAMgMASAAQAWgBAOAVIAAgzQgBgHAIAAQACAAACACQACACABADIAAB3QgBAEgCABQgCACgCAAQgDAAgDgCQgBgBAAgEIAAgMQgPAUgVAAQgSAAgMgMgAJzBEQgKALAAAQIAAAAQAAAQAKALQAJAJANAAQAOAAAKgKQAKgKAAgQIAAAAQAAgQgKgLQgKgJgOAAQgOAAgIAJgAGFCCQgNgPAAgUIAAAAQAAgUANgOQAOgOAVAAQAVAAAOANQAOAOAAAVIAAAAQAAAUgOAOQgOAOgVAAQgVAAgOgNgAGQBFQgKALAAAPIAAAAQAAAPAKALQAKAKAOAAQAPAAAKgKQAJgLAAgPIAAAAQABgPgLgLQgKgLgOABQgPgBgJALgACoCEQgDgCAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAOAKAPAAQAIAAAGgEQAFgFAAgGIAAgBQAAgGgHgEQgFgDgLgDQgPgEgGgEQgKgHAAgLIAAAAQAAgNAJgHQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBQgNgIgMABQgIAAgEADQgFAEgBAGIAAAAQAAAGAIAFIAQAFQAOAFAHAEQAKAHgBALIAAAAQABANgKAIQgKAIgOgBQgTAAgQgLgABKCDQgNgOAAgWIAAAAQAAgUAMgPQANgNATAAQAUAAAMAOQALANAAAUQAAACgCACQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIhEAAQABAPAKAIQAJAJANAAQAPgBAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAADgCACQgPANgVAAQgTAAgNgMgACGBaQgBgOgIgIQgIgKgMAAQgMAAgJAJQgJAJgBAOIA8AAIAAAAgAibCIQgLgIAAgOIAAAAQAAgOALgIQAKgIASAAQAPAAAOAEIAAgDQAAgagcABQgMgBgMAGIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgEAEgCQAPgGAPAAQAVAAAKALQAJAJAAASIAAAyQAAAIgGgBQgHAAAAgGIAAgIQgNAPgVAAQgOABgJgIgAiRBjQgIAFAAAJIAAABQAAAIAIAGQAGAEAKAAQANABAJgIQAJgHAAgLIAAgJQgNgDgPAAQgNAAgGAEgAlHCIQgMgIAAgOIAAAAQAAgOAMgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcABQgMgBgMAGIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgEAEgCQAPgGAPAAQAVAAAJALQAKAJAAASIAAAyQAAAIgGgBQgHAAAAgGIAAgIQgNAPgVAAQgOABgJgIgAk9BjQgIAFAAAJIAAABQAAAIAIAGQAGAEAKAAQANABAJgIQAJgHAAgLIAAgJQgNgDgPAAQgNAAgGAEgAplCCQgOgPAAgUIAAAAQAAgUAOgOQAOgOAVAAQAVAAAOANQANAOAAAVIAAAAQAAAUgNAOQgPAOgUAAQgVAAgOgNgApbBFQgKALAAAPIAAAAQAAAPAKALQAKAKAPAAQAOAAALgKQAJgLAAgPIAAAAQAAgPgKgLQgKgLgOABQgQgBgJALgAsZCFQgKgKAAgRIAAg0QAAgGAHAAQACAAADACQACABAAADIAAAxQAAANAGAHQAIAIALAAQANAAAHgIQAIgIAAgNIAAgwQABgGAGAAQADAAADACQABABAAADIAABRIgBAFQgDACgDAAQgCAAgCgCQgDgBAAgEIAAgKQgLATgUgBQgRAAgJgKgA10CEQgDgCAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAOAKAPAAQAJAAAFgEQAFgFAAgGIAAgBQAAgGgHgEQgFgDgLgDQgPgEgGgEQgKgHAAgLIAAAAQAAgNAJgHQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBQgNgIgLABQgJAAgFADQgEAEAAAGIAAAAQgBAGAIAFIAQAFQAPAFAGAEQAKAHAAALIAAAAQAAANgKAIQgKAIgOgBQgTAAgQgLgA3UCIQgKgIgBgOIAAAAQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgagcABQgNgBgLAGIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgEADgCQAPgGAQAAQATAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAAAgGIAAgIQgNAPgVAAQgOABgKgIgA3KBjQgGAFAAAJIAAABQAAAIAGAGQAHAEAKAAQANABAJgIQAJgHAAgLIAAgJQgNgDgOAAQgNAAgIAEgA6LCDQgOgOAAgWIAAAAQAAgWAOgOQANgMASAAQAWgBANAVIAAgzQABgHAGAAQAEAAACACQACACAAADIAAB3QAAAEgCABQgCACgEAAQgCAAgCgCQgDgBAAgEIAAgMQgOAUgVAAQgSAAgNgMgA6BBEQgJALAAAQIAAAAQAAAQAJALQAKAJAOAAQANAAAKgKQAKgKAAgQIAAAAQAAgQgKgLQgKgJgNAAQgOAAgKAJgA9kCDQgOgOAAgWIAAAAQAAgUANgPQAMgNAUAAQATAAANAOQALANAAAUQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQABAPAKAIQAJAJANAAQAPgBAMgKQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDACQgOANgVAAQgTAAgNgMgA8oBaQgBgOgHgIQgJgKgNAAQgMAAgIAJQgJAJgBAOIA8AAIAAAAgAcOB1IAAg5IgIAAIgFgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIAFgBIAIAAIAAgXQgBgDACgBQADgCACAAQADAAACACQACABAAADIAAAXIAYAAQABAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgYAAIAAA3QAAAQAQAAIAIgBIAEABIACAEQAAAEgEABQgGADgHAAQgaAAAAgagAquB1IAAg5IgIAAIgEgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAIAEgBIAIAAIAAgXQAAgDABgBQADgCADAAQADAAABACQACABAAADIAAAXIAZAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgZAAIAAA3QAAAQAQAAIAJgBIAEABIACAEQAAAEgEABQgHADgHAAQgaAAAAgagAe6CMQgDgDAAgDIAAgEQAAgDADgDQACgDAEABQADgBACADQADADAAADIAAAEQAAADgDADQgCADgDgBQgEABgCgDgAbgCMQgDgBAAgEIAAgwQABgNgHgHQgHgIgMAAQgNAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAUABQASgBAJALQAJAKAAARIAAAzQAAAEgBABQgDACgDAAQgCAAgCgCgAUHCMQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAGAAABAHQAAAGgHABQgOACgIAKQgKALAAAUIAAAfQAAADgCACQgCACgDAAQgDAAgCgCgAPECMQgCgBgBgEIAAh3QAAgCACgCQACgDAEAAQACAAACADQACACABACIAAB3QgBAIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgANECMQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQgBAGgGABQgOACgJAKQgJALAAAUIAAAfQAAADgCACQgCACgDAAQgDAAgCgCgAI3CMQgCgBAAgEIAAgwQAAgNgHgHQgHgIgMAAQgMAAgHAIQgJAIAAANIAAAvQABAIgIgBQgCAAgCgCQgDgBAAgEIAAhRQAAgDADgBQACgCACAAQADAAADACQABABAAADIAAALQALgTAVABQARgBAJALQAKAKAAARIAAAzQAAAEgCABQgCACgDAAQgDAAgCgCgAAACMQgBgBAAgEIAAhRQAAgDABgBQABgCAEAAQADAAABACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQAAAGgGABQgPACgIAKQgKALAAAUIAAAfQAAADgCACQgBACgDAAQgEAAgBgCgAjhCMQgCgBAAgEIAAhRQAAgDACgBQABgCAEAAQADAAABACQACABAAADIAAASQAGgMAJgGQAJgHAJAAQAGAAAAAHQAAAGgGABQgOACgJAKQgKALAAAUIAAAfQAAADgCACQgBACgDAAQgEAAgBgCgAtLCMQgCgBAAgEIAAgwQAAgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAVABQARgBAJALQAKAKAAARIAAAzQAAAEgCABQgDACgDAAQgCAAgDgCgAu7CMQgDgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABRQAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAvoCMQgDgBAAgEIAAgwQAAgOgGgGQgGgIgMAAQgLAAgHAIQgHAHgBAOIAAAvQAAAEgBABQgCACgEAAQgCAAgCgCQgCgBAAgEIAAgwQgBgOgFgGQgHgIgLAAQgLAAgIAJQgHAHAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAAKQALgRATAAQAVAAAJASQAMgSAUAAQARAAAJAKQAJAJAAASIAAAzQAAAEgCABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgDAAgBgCgAzNCMQgCgCAAgDIAAhqIgSAFIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAFgCIAUgIIAIgBQAEAAACACQABACABADIAAByQAAADgCACQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAgBgA4ZCMQgDgBAAgEIAAhRQAAgDADgBQACgCACAAQAEAAACACQACABAAADIAAASQAFgMAIgGQAKgHAIAAQAHAAAAAHQAAAGgGABQgOACgJAKQgJALAAAUIAAAfQAAADgCACQgCACgEAAQgCAAgCgCgA68CMQgCgBAAgEIAAgwQAAgNgGgHQgIgIgMAAQgMAAgIAIQgHAIgBANIAAAvQAAAIgGgBQgEAAgCgCQgBgBAAgEIAAhRQAAgDABgBQACgCAEAAQADAAABACQACABAAADIAAALQAMgTAUABQARgBAKALQAJAKAAARIAAAzQAAAEgCABQgCACgDAAQgDAAgCgCgA+jCMQgDgCAAgDIAAhqIglAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIBYAAQABAAAAABQABAAABAAQAAAAABABQAAAAABAAQAAABAAABQABAAAAABQAAAAAAABQABAAAAABQAAABgBAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIglAAIAABqQAAADgBACQgCACgEAAQgCAAgCgCgA22AhIAAgDIALgQQADgEAEgBIAGACQADACAAACQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABIgNANQgEADgEAAQgBAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAgAu8AbQgDgCAAgDIAAgDQAAgHAIAAQAJAAgBAHIAAADQAAADgCACQgDACgDAAQgDAAgCgCgATAgKQgCgCAAgDIAAgpQgOAUgWAAQgRAAgNgMQgOgOAAgWIAAAAQAAgWAOgOQANgMARAAQAXgBANAVIAAgNQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABuQAAADgCACQgCACgDAAQgDAAgCgCgASGhvQgJALAAAQIAAAAQAAAQAJALQAKAJANAAQANAAALgKQAKgKgBgQIAAAAQABgQgKgLQgLgJgNAAQgOAAgJAJgAJQgKQgCgCAAgDIAAhuQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAANQAOgUAVAAQATAAAMAMQAOAOAAAWIAAAAQAAAWgOAOQgMAMgTAAQgVABgOgVIAAApQAAAHgHAAQgDAAgCgCgAJlhuQgJAKgBAQIAAAAQABAQAJAKQAKAKAOAAQAOAAAJgJQAKgLAAgQIAAAAQAAgQgKgLQgKgJgNAAQgOAAgKAKgAl0gLQgEgCAAgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIADAAQAFABAFAAQALAAAIgQIABgCIgnhSIgBgEQAAgDACgBQACgCADAAQAFgBACAGIAgBJIAdhKQACgEAFAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABQABABAAADIAAAEIgkBWQgHAPgHAGQgHAGgLAAQgHAAgIgDgAzSgKQgBgCAAgDIAAhuQAAgDABgBQACgCAEAAQADAAABACQACABAAADIAAANQAOgUAWAAQASAAANAMQAOAOgBAWIAAAAQABAWgOAOQgNAMgSAAQgWABgOgVIAAApQAAAHgGAAQgEAAgCgCgAy8huQgKAKAAAQIAAAAQAAAQAKAKQAKAKANAAQAOAAAKgJQAJgLAAgQIAAAAQAAgQgJgLQgKgJgOAAQgNAAgKAKgAgIgUQgDgBAAgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABQAOAKASAAQAQAAAIgJQAKgIAAgRIAAgLQgPAVgWgBQgRAAgMgMQgOgMAAgUQAAgTAOgMQAMgMARAAQAXAAANASIAAgLQAAgDACgBQADgCACAAQADAAADACQACABAAADIAABHQgBAWgMALQgMAMgXAAQgVAAgRgLgAAIhwQgJAJAAAOIAAAAQAAAOAJAJQAJAJANAAQANAAAKgJQALgJAAgOIAAAAQAAgNgLgJQgJgKgOABQgNAAgJAIgAuqgUQgFgBAAgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABQAPAKASAAQAPAAAKgJQAJgIAAgRIAAgLQgPAVgVgBQgTAAgMgMQgNgMAAgUQAAgTANgMQANgMASAAQAVAAAPASIAAgLQAAgDABgBQACgCAEAAQADAAABACQACABAAADIAABHQAAAWgMALQgMAMgXAAQgVAAgRgLgAuahwQgKAJAAAOIAAAAQAAAOAKAJQAIAJAOAAQAOAAAKgJQAKgJAAgOIAAAAQAAgNgKgJQgKgKgOABQgOAAgIAIgEAxsgArQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAPAEIAAgDQAAgagcABQgNgBgMAGIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgCQAPgGAPAAQAUAAAKALQAJAJAAASIAAAyQABAIgHgBQgGAAAAgGIAAgIQgNAPgWAAQgNABgKgIgEAx2gBQQgHAFAAAJIAAABQAAAIAHAGQAHAEAJAAQANABAKgIQAJgHAAgLIAAgJQgOgDgOAAQgNAAgHAEgEAvBgAxQgNgPgBgUIAAAAQABgUANgOQAOgOAUAAQATAAAPANQACACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBACgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgMgLgOAAQgNAAgKAKQgKAKABAQIAAAAQAAAPAKALQAJAKAOAAQAOAAAMgLQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgPAOgUAAQgUAAgOgNgEAtXgAwQgOgOAAgWIAAAAQAAgUANgPQAMgNATAAQAUAAANAOQAKANABAUQAAACgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAJAMgBQAPAAAMgKQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgPANgUAAQgUAAgMgMgEAuSgBZQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgEApVgAxQgNgPAAgUIAAAAQAAgUANgOQAOgOAVAAQAVAAAOANQANAOAAAVIAAAAQAAAUgNAOQgOAOgVAAQgUAAgPgNgEApfgBuQgJALAAAPIAAAAQAAAPAKALQAJAKAPAAQAPAAAKgKQAKgLAAgPIAAAAQgBgPgJgLQgKgLgPABQgPgBgKALgEAnxgAxQgNgPAAgUIAAAAQAAgUANgOQAOgOAVAAQATAAAPANQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgMgLgOAAQgOAAgKAKQgJAKAAAQIAAAAQAAAPAKALQAJAKAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgQAOgTAAQgVAAgOgNgEAlVgAwQgDgBAAgEQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQABgBAAAAQABAAAAAAQABAAABAAIADABQAPAKAPgBQAIAAAFgDQAGgFAAgGIAAgBQAAgGgHgEQgFgDgMgDQgOgEgGgEQgLgHABgLIAAAAQgBgNAKgHQAIgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABgBAAIgDgBQgMgIgMABQgIAAgFADQgFAEAAAGIAAAAQAAAGAHAFIARAFQAOAFAGAEQAKAHAAALIAAAAQAAANgKAIQgJAIgOgBQgUAAgQgMgEAj3gAwQgNgOAAgWIAAAAQAAgUAMgPQANgNAUAAQATAAAMAOQALANAAAUQAAACgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAJANgBQAOAAANgKQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgOANgVAAQgTAAgOgMgEAk0gBZQgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgEAhJgAwQgOgOAAgWIAAAAQAAgUANgPQAMgNATAAQAUAAANAOQALANAAAUQgBACgBACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAJAIQAKAJAMgBQAQAAALgKQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAADgDACQgPANgUAAQgUAAgMgMgEAiEgBZQAAgOgIgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAfSgwQgOgOAAgWIAAAAQAAgWAOgOQAMgMASAAQAWgBAOAVIAAgzQgBgHAIAAQACAAACACQACACAAADIAAB3QAAAEgCABQgCACgCAAQgEAAgCgCQgBgBAAgEIAAgMQgOAUgWAAQgSAAgMgMgAfchvQgKALAAAQIAAAAQAAAQAKALQAJAJANAAQAOAAAKgKQAKgKAAgQIAAAAQAAgQgKgLQgKgJgOAAQgOAAgIAJgAc8gwQgDgBAAgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAOAKAPgBQAJAAAFgDQAFgFAAgGIAAgBQAAgGgHgEQgFgDgLgDQgPgEgGgEQgKgHAAgLIAAAAQAAgNAJgHQAJgHAOAAQAPAAAPAIQADACAAADQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgBQgNgIgLABQgJAAgFADQgEAEAAAGIAAAAQgBAGAIAFIAQAFQAPAFAGAEQAKAHAAALIAAAAQAAANgKAIQgKAIgOgBQgTAAgQgMgAZmgxQgNgPAAgUIAAAAQAAgUANgOQAOgOAVAAQAUAAAPANQANAOAAAVIAAAAQAAAUgNAOQgOAOgVAAQgVAAgOgNgAZwhuQgKALAAAPIAAAAQABAPAJALQAKAKAPAAQAPAAAKgKQAJgLAAgPIAAAAQAAgPgKgLQgKgLgOABQgQgBgJALgAYCgxQgNgPAAgUIAAAAQAAgUANgOQAOgOAUAAQAUAAAOANQACACABADQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgDACgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgBAAAAQgMgLgNAAQgPAAgJAKQgKAKAAAQIAAAAQAAAPAKALQAKAKAPAAQAOAAAMgLQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABQgPAOgUAAQgUAAgOgNgAVhgwQgNgOAAgWIAAAAQAAgUAMgPQANgNAUAAQATAAAMAOQALANAAAUQAAACgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAJANgBQAOAAANgKQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBADgCACQgOANgVAAQgTAAgOgMgAWehZQgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgATzguQgJgKAAgRIAAg0QgBgGAIAAQACAAACACQACABAAADIAAAxQAAANAHAHQAHAIAMAAQAMAAAIgIQAIgIAAgNIAAgwQAAgGAHAAQADAAACACQABABABADIAABRIgCAFQgCACgDAAQgDAAgCgCQgCgBAAgEIAAgKQgLATgVgBQgRAAgJgKgANjgxQgOgPAAgUIAAAAQAAgUAOgOQAOgOAVAAQAUAAAOANQAOAOAAAVIAAAAQAAAUgOAOQgNAOgWAAQgUAAgOgNgANthuQgKALABAPIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgLAAgPIAAAAQAAgPgKgLQgKgLgPABQgOgBgKALgALOgxQgOgPAAgUIAAAAQAAgUAOgOQANgOAVAAQATAAAOANQADACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgLgLgOAAQgOAAgJAKQgKAKAAAQIAAAAQAAAPAKALQAJAKAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgQAOgTAAQgVAAgNgNgAHigxQgOgPAAgUIAAAAQAAgUAOgOQAOgOAVAAQAVAAANANQAOAOAAAVIAAAAQAAAUgOAOQgOAOgUAAQgVAAgOgNgAHshuQgJALAAAPIAAAAQgBAPALALQAJAKAPAAQAPAAAJgKQAKgLAAgPIAAAAQAAgPgKgLQgKgLgOABQgQgBgJALgAFAgrQgLgIAAgOIAAAAQAAgOALgIQALgIASAAQAOAAAOAEIAAgDQAAgagbABQgNgBgMAGIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgCQAOgGAQAAQAUAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAgBgGIAAgIQgMAPgWAAQgOABgJgIgAFKhQQgHAFAAAJIAAABQAAAIAHAGQAHAEAKAAQAMABAJgIQAKgHgBgLIAAgJQgNgDgOAAQgNAAgHAEgAB0gwQgNgOAAgWIAAAAQAAgUAMgPQANgNAUAAQATAAAMAOQALANAAAUQAAACgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAJANgBQAPAAAMgKQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBADgCACQgOANgVAAQgTAAgOgMgACxhZQgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgAjKgwQgOgOAAgWIAAAAQAAgUAMgPQANgNATAAQAUAAANAOQAKANABAUQAAACgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAIQAIAJANgBQAPAAAMgKQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgPANgUAAQgUAAgMgMgAiPhZQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgAoMgrQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAANAEIAAgDQAAgagcABQgMgBgMAGIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgCQAPgGAPAAQAUAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAgBgGIAAgIQgMAPgWAAQgOABgJgIgAoChQQgHAFAAAJIAAABQAAAIAHAGQAHAEAKAAQANABAIgIQAKgHgBgLIAAgJQgNgDgOAAQgNAAgHAEgAstguQgKgKAAgRIAAg0QAAgGAHAAQACAAADACQACABAAADIAAAxQAAANAHAHQAGAIAMAAQANAAAHgIQAJgIgBgNIAAgwQAAgGAIAAQACAAACACQACABAAADIAABRIgCAFQgCACgCAAQgEAAgCgCQgCgBAAgEIAAgKQgLATgUgBQgRAAgJgKgAwPgwQgOgOAAgWIAAAAQAAgUAMgPQANgNATAAQAUAAANAOQAKANABAUQAAACgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAIQAIAJANgBQAPAAAMgKQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgPANgUAAQgUAAgMgMgAvUhZQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgA1tgrQgMgIAAgOIAAAAQAAgOAMgIQAKgIATAAQAOAAAOAEIAAgDQAAgagcABQgMgBgMAGIgDAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgEAEgCQAPgGAPAAQAVAAAJALQAKAJAAASIAAAyQAAAIgGgBQgHAAAAgGIAAgIQgNAPgVAAQgOABgJgIgA1jhQQgIAFAAAJIAAABQAAAIAIAGQAGAEAKAAQANABAJgIQAJgHAAgLIAAgJQgNgDgPAAQgNAAgGAEgA3ggwQgPgOAAgWIAAAAQAAgWAPgOQAMgMASAAQAWgBANAVIAAgzQAAgHAHAAQADAAADACQACACAAADIAAB3QAAAEgCABQgDACgDAAQgCAAgDgCQgCgBAAgEIAAgMQgOAUgVAAQgSAAgMgMgA3XhvQgJALAAAQIAAAAQAAAQAJALQAKAJAOAAQANAAAKgKQAKgKAAgQIAAAAQAAgQgKgLQgKgJgNAAQgOAAgKAJgA5NgrQgLgIAAgOIAAAAQAAgOALgIQAKgIATAAQAPAAANAEIAAgDQAAgagcABQgMgBgMAGIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEgCQAPgGAPAAQAUAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAgBgGIAAgIQgMAPgWAAQgOABgJgIgA5DhQQgHAFAAAJIAAABQAAAIAHAGQAHAEAKAAQANABAIgIQAKgHgBgLIAAgJQgNgDgOAAQgNAAgHAEgA6vgxQgOgPAAgUIAAAAQAAgUAOgOQANgOAVAAQATAAAOANQADACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBgBAAQgLgLgOAAQgOAAgKAKQgJAKAAAQIAAAAQAAAPAKALQAJAKAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgQAOgTAAQgVAAgNgNgA/IgxQgOgPAAgUIAAAAQAAgUAOgOQAOgOAVAAQAVAAANANQAOAOAAAVIAAAAQAAAUgOAOQgOAOgUAAQgVAAgOgNgA++huQgJALAAAPIAAAAQgBAPALALQAJAKAPAAQAPAAAJgKQAKgLAAgPIAAAAQAAgPgKgLQgKgLgOABQgQgBgJALgEghegAxQgNgPAAgUIAAAAQAAgUANgOQAOgOAVAAQATAAAPANQACACAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgNgLgNAAQgOAAgKAKQgJAKAAAQIAAAAQAAAPAKALQAJAKAPAAQAOAAAMgLQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgQAOgTAAQgVAAgOgNgEgk3gAwQgNgOAAgWIAAAAQAAgUANgPQAMgNATAAQAUAAANAOQALANgBAUQAAACgCACQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhEAAQACAPAJAIQAKAJANgBQAPAAAMgKQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABQgBADgCACQgOANgVAAQgTAAgOgMgEgj6gBZQgBgOgIgIQgIgKgNAAQgMAAgJAJQgIAJgCAOIA9AAIAAAAgEgnogArQgKgIgBgOIAAAAQABgOAKgIQALgIATAAQAOAAAOAEIAAgDQAAgagcABQgNgBgLAGIgCAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgEADgCQAPgGAQAAQATAAAKALQAKAJAAASIAAAyQAAAIgHgBQgGAAAAgGIAAgIQgNAPgVAAQgOABgKgIgEgnegBQQgGAFAAAJIAAABQAAAIAGAGQAHAEAKAAQANABAJgIQAJgHAAgLIAAgJQgNgDgOAAQgNAAgIAEgEgr8gAxQgOgPAAgUIAAAAQAAgUAOgOQAOgOAVAAQAVAAANANQAOAOAAAVIAAAAQAAAUgOAOQgOAOgVAAQgUAAgOgNgEgrygBuQgJALAAAPIAAAAQAAAPAKALQAJAKAPAAQAOAAAKgKQAKgLAAgPIAAAAQAAgPgKgLQgKgLgPABQgPgBgJALgEgtggAxQgOgPAAgUIAAAAQAAgUAOgOQAOgOAUAAQATAAAPANQACACAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgBACgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgMgLgOAAQgNAAgKAKQgKAKABAQIAAAAQAAAPAKALQAJAKAOAAQAOAAAMgLQABgBAAAAQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQgPAOgUAAQgUAAgOgNgEgwAgAwQgOgOAAgWIAAAAQAAgUANgPQAMgNATAAQAUAAANAOQAKANABAUQAAACgCACQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIhDAAQABAPAKAIQAJAJAMgBQAPAAAMgKQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgCACQgPANgUAAQgUAAgMgMgEgvFgBZQgBgOgHgIQgIgKgNAAQgMAAgIAJQgJAJgBAOIA7AAIAAAAgEgxrgAwQgOgOAAgWIAAAAQAAgUANgPQAMgNAUAAQATAAANAOQALANAAAUQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIhDAAQABAPAKAIQAJAJANgBQAPAAAMgKQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDACQgOANgVAAQgTAAgNgMgEgwvgBZQgBgOgHgIQgJgKgNAAQgMAAgIAJQgJAJgBAOIA8AAIAAAAgEAwlgA+IAAg5IgIAAIgFgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAIAFgBIAIAAIAAgXQAAgDABgBQACgCADAAQADAAACACQACABAAADIAAAXIAZAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgZAAIAAA3QAAAQAQAAIAJgBIADABIACAEQAAAEgEABQgGADgIAAQgZAAAAgagApTg+IAAg5IgJAAIgDgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAIADgBIAJAAIAAgXQgBgDACgBQADgCACAAQADAAACACQACABAAADIAAAXIAYAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgYAAIAAA3QAAAQAQAAIAIgBIAFABIABAEQAAAEgEABQgGADgHAAQgaAAAAgagEgl/gA+IAAg5IgJAAIgDgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBABAAIADgBIAJAAIAAgXQgBgDACgBQADgCACAAQADAAACACQACABAAADIAAAXIAYAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgYAAIAAA3QAAAQAQAAIAIgBIAFABIABAEQAAAEgEABQgGADgHAAQgaAAAAgagEAzRgAnQgDgDAAgDIAAgEQAAgDADgDQACgDADABQAFgBACADQACADAAADIAAAEQAAADgCADQgCADgFgBQgDABgCgDgEAsMgAnQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAGAAAAAHQABAGgHABQgOACgIAKQgKALAAAUIAAAfQAAADgCACQgCACgDAAQgDAAgCgCgEArDgAnQgCgBAAgEIAAhRQAAgDACgBQACgCAEAAQACAAACACQADABAAADIAAASQAFgMAIgGQAKgHAIAAQAHAAAAAHQAAAGgGABQgOACgJAKQgKALABAUIAAAfQAAADgDACQgCACgCAAQgEAAgCgCgEAitgAnQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAHAAAAAHQgBAGgFABQgPACgJAKQgJALAAAUIAAAfQAAADgCACQgCACgDAAQgDAAgCgCgAeegnQgDgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABRQAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAcYgnQgCgBAAgEIAAgwQAAgNgHgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAUABQARgBAKALQAJAKAAARIAAAzQAAAEgCABQgBACgEAAQgDAAgBgCgAQUgnQgBgBAAgEIAAgwQgBgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAVABQAQgBAKALQAKAKAAARIAAAzQgBAEgCABQgCACgCAAQgDAAgDgCgAMwgnQgDgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABRQAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAEQgnQgCgBAAgEIAAh3QAAgCACgCQACgDADAAQADAAACADQACACAAACIAAB3QAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgAg2gnQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABRQAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgAhkgnQgDgBAAgEIAAh3QAAgCACgCQACgDADAAQADAAACADQACACAAACIAAB3QAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgAqBgnQgCgBAAgEIAAgwQAAgNgHgHQgHgIgMAAQgMAAgIAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAUABQARgBAKALQAJAKAAARIAAAzQAAAEgBABQgCACgEAAQgDAAgBgCgAxagnQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAASQAFgMAJgGQAJgHAJAAQAGAAABAHQAAAGgHABQgOACgIAKQgKALAAAUIAAAfQAAADgCACQgCACgDAAQgDAAgCgCgA8XgnQgCgBAAgEIAAgwQAAgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAVABQARgBAJALQAKAKAAARIAAAzQAAAEgCABQgDACgDAAQgCAAgDgCgA/8gnQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAABRQAAAIgHgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgEgiOgAnQgCgBgBgEIAAgwQABgNgHgHQgHgIgMAAQgNAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAUABQASgBAJALQAJAKAAARIAAAzQAAAEgBABQgDACgDAAQgCAAgCgCgEgpLgAnQgCgBAAgEIAAgwQAAgNgGgHQgHgIgNAAQgMAAgHAIQgIAIAAANIAAAvQAAAIgHgBQgDAAgCgCQgCgBAAgEIAAhRQAAgDACgBQACgCADAAQADAAACACQACABAAADIAAALQALgTAVABQAQgBAKALQAKAKAAARIAAAzQAAAEgDABQgCACgCAAQgEAAgCgCgEgzXgAmQgDAAgCgBQgCgCAAgEIAAhwQAAgDACgDQACgCADABQADgBACACQACADAAADIAABrIBCAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAgAOCiTIABgCIAKgQQADgEAEgBQADAAAEACQADACAAACQAAACgDACIgNANQgEADgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBgA+piTIABgCIAKgQQADgEAEgBQAEAAADACQADACAAACQAAACgDACIgNANQgEADgFAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBgAediYQgDgCAAgDIAAgDQAAgHAIAAQAIAAAAAHIAAADQABADgDACQgDACgDAAQgDAAgCgCgAMviYQgDgCAAgDIAAgDQAAgHAIAAQAIAAAAAHIAAADQABADgDACQgDACgDAAQgEAAgBgCgAg2iYQgDgCAAgDIAAgDQAAgHAIAAQAJAAAAAHIAAADQAAADgDACQgDACgDAAQgDAAgCgCgA/8iYQgDgCAAgDIAAgDQAAgHAIAAQAJAAgBAHIAAADQAAADgCACQgDACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(512.25,56.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.INSTRUCCIONES, new cjs.Rectangle(0,0,1024,97.4), null);


(lib.ico4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAsQgegbgOgPQgJgIAAgMQAAgMAIgKQAIgJANgCQANgBAJAIQAQANAfAeQAIAIgBAJQAAAXgSAIQgIAFgHAAQgKAAgJgIg");
	this.shape.setTransform(19.2803,16.1503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyAfQgKgVAPgMQAdgaAVgQQAKgIANADQAMACAIAKQAHAKgBANQAAAMgKAHQgPAOgfAZQgGAFgMACQgWgDgIgRg");
	this.shape_1.setTransform(48.2559,16.1188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA5QgKgJgBgNQgBgmABggQABgNAKgIQAKgJAMABQANABAIAJQAJAJAAANIAABAQAAAOgJAJQgJAJgNABIgBAAQgLAAgJgIg");
	this.shape_2.setTransform(33.355,6.4747);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBCKQgYAAgRgRQgRgRgBgXIAAigQABgYARgRQARgQAYgBQAWgBASAQQASAPACAYQADAygCBjIgBATQgDAXgSAQQgQAOgWAAIgBAAg");
	this.shape_3.setTransform(70.3364,57.4272);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoCFQgSgRgBgZQgBhbABhaQABgaASgRQASgQAaAAQAYABARASQAQASAAAaIAACtQAAAagRASQgRASgZABIgCAAQgXAAgRgRg");
	this.shape_4.setTransform(51.5375,54.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5EcQgVgNgGgXQgGgXAMgVQAvhOgChiIgBhvIAAiTQAAgaARgSQARgSAYgBQAZAAATARQASARAAAaQABDHgBBjQgCBkg3BfQgPAZgYAHQgIACgIAAQgQAAgPgKg");
	this.shape_5.setTransform(84.57,78.0382);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAFQQgZAAgSgSQgRgSAAgbIAAolQAAgVAOgRQAOgQAVgEQAUgFASAKQAUAKAIAUQAFALABAOIAAIkQAAAagSASQgSASgYAAIgBAAg");
	this.shape_6.setTransform(33.8,50.0058);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ACUF6QgRgRAAgYQgBgZARgSIAFgGQgygEgTgEQiwgrhKinQgTgsghg/Ig2hrIhUijQgLgXAIgXQAIgXAWgMQAWgLAYAHQAXAHAMAXIBZCtQA1BnAjBHIAVAuQAMAaANARQAiAtAzAZQA0AZA1gDIgUgUQgSgSgBgZQAAgZASgSQARgRAZgBQAZAAASASIB3B2QARARAAAYQABAYgRASIhyB1QgSASgZAAQgZAAgSgSg");
	this.shape_7.setTransform(36.4237,95.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico4, new cjs.Rectangle(0,0,93.3,135.2), null);


(lib.ico3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjwF4QhZg5g4hdQgKgTAEgTQAFgUARgKQASgKATAFQATAFAMATQBXCPCjAaQCaAYB7hnQBmhWASiBQAXichmh5QhWhmiAgSQiogYh9B0QhVBQgUB4QgBAGAFAAIDdgBIAEAAIgLgKQgLgLgCgOQgDgPAGgNQAGgOAMgIQANgIAPAAQATABAMAMIBfBhQAEAEAJAQIAAiKQAAgSAKgNQAKgNARgFQAWgFATAOQASAOAAAXQABCYgBCZQAAASgMAOQgNANgSACQgTABgPgLQgPgLgDgSIgBgNIAAiGQgDAKgIAJIgQAPIhMBPQgVAUgbgHQgbgIgHgbQgGgZARgUIALgLIgHgBIkQAAQgYABgOgQQgOgPAAgUQADilBph7QBoh5CagbQDKgkCgCBQB9BlAfCcQAmDBh0CfQhmCMiqAiQgvAJgsAAQh8AAhxhHg");
	this.shape.setTransform(44.6945,44.7213);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico3, new cjs.Rectangle(0,0,89.4,89.5), null);


(lib.ico2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBGQgcgdAAgpQAAgoAdgdQAcgdApAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgpAAgdgdgAgfgfQgNAOAAARQAAATANANQANANASAAQASAAANgNQAOgNAAgSQAAgSgNgOQgOgNgSAAQgSAAgNANg");
	this.shape.setTransform(116.625,31.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AChDmQgjgigYgwQgKgVAGgUQAGgUAUgKQATgKAUAIQAUAHAKATQA1BlBtASQBYAQBLgzQBKgyAShYQAUhbgzhNQgzhOhbgTQhJgPhEAgQhEAhgiBCQgQAfgkAAIq2AAQgKAAgFAIQgOAZgXAlQgCAEACAFIAmA7QADAFAGAAIGJAAIACgDIgNgLQgPgPAAgVQAAgVAPgOQAPgPAVAAQAVAAAQAPIBhBhQAOAPAAAVQAAAVgOAPIhjBlQgQAPgVAAQgVABgPgQQgPgOAAgWQAAgVAPgPIAKgIIgCgDIgJAAImWAAQgkAAgSgdIhHhwQgSgcASgcIBIh5QARgdAhAAIK5AAQAGAAAEgFQBRh3CLgXQCBgWBsBLQBsBKAaCBQAbCChJBxQhKBxiDAaQglAIgkAAQh+AAhkhgg");
	this.shape_1.setTransform(71.8563,32.6133);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico2, new cjs.Rectangle(0,0,143.8,65.2), null);


(lib.ico1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWAmQgSAAgLgKQgLgLAAgQQAAgQALgKQAKgMASAAICuAAQASAAALALQALAKAAARQAAAQgLALQgLAKgSAAg");
	this.shape.setTransform(45.8239,132.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiXAlQgRAAgKgKQgLgKAAgRQAAgPALgLQALgKARgBIEuAAQANABAJAHQAKAGAEALQAEAMgEAKQgDAMgJAHQgMAIgMAAIiYABIiXgBg");
	this.shape_1.setTransform(46.3306,118.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiMIjQggAAgVgVQgVgUAAghIAAiTQAAgLgJgFQjIhvgkjbQgYiPBAiCQBBiCCChFQCEhHCUAWQCUAWBrBqIAKAKIAHgjQAIgYAXgNQAXgNAaAFQAYAEARATQARAUAAAZIgBDIQgBAfgUAUQgUAUgfABIi+ABQgegBgUgRQgUgSgEgdQgDgZAQgWQAQgWAagHIAagCIATAAIACgDIgWgYQhnhkiPAKQhnAIhQBJQhPBIgSBoQgTBvA3BgQA3BhBpApQAxATAAA1IABCDICFAAIAAiLQABgwArgTQB3gyA1h4QAJgWAUgLQAUgMAXACQAXADARAOQASAPAFAWQAFAYgKAXQg9CMiDBNQgMAHAAAMIABCYQAAAggVAVQgVAVggAAIiHAAIiIAAg");
	this.shape_2.setTransform(46.6594,54.7293);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ico1, new cjs.Rectangle(0,0,93.3,136.1), null);


(lib.fondo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fondo2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4794,0.4794);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo2_1, new cjs.Rectangle(0,0,1024,638.5), null);


(lib.fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fondo1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fondo, new cjs.Rectangle(0,0,1025.2,639.3), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmBnQgqgrgBg8QABg8AqgqQAqgqA8gBQA8ABArAqQAqAqAAA8QAAA8gqArQgrAqg8AAQg8AAgqgqg");
	this.shape.setTransform(14.55,14.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,29.1,29.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#040404","#484848","#7D7D7D","#A4A4A4","#BCBCBC","#C4C4C4"],[0,0.016,0.282,0.525,0.733,0.898,1],17.5,-0.7,-17.5,0).s().p("Ajdm3QC2gBCBCAQCCCAABC2QABC1iACCQh+CCi3ABg");
	this.shape_1.setTransform(22.1504,43.9991);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,44.3,88), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhnBoQgrgrAAg9QAAg8ArgrQArgrA8AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg8AAgrgrg");
	this.shape_2.setTransform(14.7,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,29.4,29.4), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglg");
	this.shape_3.setTransform(12.575,12.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,25.2,25.2), null);


(lib.estrella_vacia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.estrella_vacia();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5629,0.5627);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.estrella_vacia_1, new cjs.Rectangle(0,0,36,34.4), null);


(lib.estrella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.puntaje();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.16,0.16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.estrella, new cjs.Rectangle(0,0,36,34.3), null);


(lib.envo_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCD6DC").s().p("Egk2AnYMgV7hOvMBYRAAAMAdRBOvg");
	this.shape.setTransform(421,263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3C2CB").s().p("Eg9WAnYQhQAAg4g5Qg5g4AAhRMAAAhIsQAAhQA5g5QA4g4BQAAMB6sAAAQBRAAA4A4QA5A5AABQMAAABIsQAABRg5A4Qg4A5hRAAg");
	this.shape_1.setTransform(422.15,263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#80378E","#A85568","#CC724A","#E2843E","#EB8A3C","#E8873B","#DF7B39","#CF6837","#BA4E35","#9F3035","#861938"],[0,0.157,0.322,0.455,0.537,0.616,0.698,0.776,0.859,0.937,1],-336.6,336.7,336.7,-336.7).s().p("Eg+0ApGQhTAAg7g7Qg6g7AAhSMAAAhL7QAAhTA6g7QA7g6BTAAMB9pAAAQBTAAA7A6QA6A7AABTMAAABL7QAABSg6A7Qg7A7hTAAg");
	this.shape_2.setTransform(422.125,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.envo_g, new cjs.Rectangle(0,0,844.3,526), null);


(lib.envo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("EggBAx2MAAAhjrMBADAAAMAAABjrg");
	this.shape.setTransform(205,319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.envo, new cjs.Rectangle(0,0,410,638), null);


(lib.mc_brillo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().rr(-70,-22.5,140,45,21.7);
	this.shape_1.setTransform(70,21.9121,1,1.0013);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_brillo_1, new cjs.Rectangle(0,-0.6,140,45), null);


(lib.Clip_TextoBien2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.texto = new cjs.Text("", "16px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 232;
	this.texto.parent = this;
	this.texto.setTransform(44.8,187.75);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_TextoBien2, new cjs.Rectangle(42.8,185.8,235.89999999999998,189), null);


(lib.Clip_TextoBien = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.texto = new cjs.Text("", "16px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 235;
	this.texto.parent = this;
	this.texto.setTransform(3.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_TextoBien, new cjs.Rectangle(1.1,6.2,239.4,228.70000000000002), null);


(lib.Clip_Texto_mal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.texto = new cjs.Text("", "16px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 233;
	this.texto.parent = this;
	this.texto.setTransform(72.1,164.25);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Texto_mal2, new cjs.Rectangle(70.1,162.3,236.70000000000002,189), null);


(lib.Clip_Texto_mal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.texto = new cjs.Text("", "16px 'Arial'", "#FFFFFF");
	this.texto.name = "texto";
	this.texto.lineHeight = 18;
	this.texto.lineWidth = 233;
	this.texto.parent = this;
	this.texto.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.texto).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Texto_mal1, new cjs.Rectangle(0,0,237.2,218.8), null);


(lib.Clip_blanco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4801E").s().p("AnwHxQjNjOgBkjQABkiDNjOQDOjNEigBQEjABDODNQDODOAAEiQAAEjjODOQjODOkjAAQkiAAjOjOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_blanco, new cjs.Rectangle(-70.2,-70.2,140.5,140.5), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AqQKQQkQkPAAmAQAAmBEQkPQEQkRGAAAQGBAAEQERQEQEPAAGBQAAGAkQEPQkQERmBAAQmAAAkQkRg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-92.9,-92.9,185.9,185.8), null);


(lib.preg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.text = new cjs.Text("Pregunta", "bold 20px 'Arial'", "#FFFFFF");
	this.text.name = "text";
	this.text.lineHeight = 22;
	this.text.lineWidth = 802;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.preg, new cjs.Rectangle(0,0,805.8,121.4), null);


(lib.pagination = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(10));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("Ag0BlQgWgQgMgZQgMgagBgiIAAAAQABggAMgaQANgaAWgQQAWgPAdAAQAeAAAWAPQAXAPAMAbQANAaAAAgIAAAAQAAAhgNAaQgMAagXAQQgWAPgeAAQgdAAgXgPgAgZg9QgLAJgGAQQgGAQAAAUIAAAAQAAAUAGAQQAGARALAJQALAJAOAAQAPAAALgJQALgJAGgQQAGgQAAgVIAAAAQAAgTgGgRQgGgPgLgKQgLgKgPAAQgOAAgLAKg");
	this.shape.setTransform(27.325,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("AAGBrQgGgGAAgLIAAiaIgRAFIgEABIgFAAQgIAAgGgGQgHgGAAgJQAAgIAEgFQAFgGAIgCIAegJIANgDIAKgCIABAAQAKABAHAHQAHAGAAALIAACzQAAALgHAGQgHAHgKABQgKgBgIgHg");
	this.shape_1.setTransform(26.35,22.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202C52").s().p("Ag5ByQgMAAgHgGQgIgGAAgMQAAgHADgGQAEgGAGgFIA/g0IAWgTQAIgJAEgIQAEgIAAgJQAAgPgIgHQgIgHgOAAQgJAAgJAEQgIAFgJAKIgHAFQgEACgGAAQgKAAgGgGQgGgHAAgJIABgIIAEgIQANgPASgJQARgIAYgBQAYABARAIQARAJAKAPQAJAQAAAVIAAAAQAAATgGAOQgGANgNAMQgOANgTAPIgkAcIBNAAQAJABAGAGQAGAGABAJQgBAJgGAGQgGAGgJAAg");
	this.shape_2.setTransform(27.225,22.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202C52").s().p("AgoBrQgSgHgOgMQgEgDgCgEQgCgFgBgGQABgJAGgHQAIgHAJAAQAGAAADACIAHAEQAKAJAKAEQAKADAMAAQAPAAAIgGQAJgIABgNIAAAAQgBgOgLgHQgLgHgVgBIgHAAQgJAAgGgGQgGgGAAgIQgBgFADgEQADgGAFgFIArgsIhEAAQgJAAgGgGQgGgGAAgJQAAgJAGgGQAGgGAJAAIBsAAQALAAAHAGQAHAGAAAJQAAAKgEAFQgEAHgGAGIgsAqQAPADAOAGQANAIAJALQAJANgBAVIAAAAQAAAWgJAQQgKARgSAJQgSAKgZAAQgXAAgSgHg");
	this.shape_3.setTransform(27.25,22.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202C52").s().p("AAZBsQgGgHAAgKIAAgbIhcAAQgKAAgGgGQgIgGABgKQgBgIADgGQADgHAFgGIBhhwQAHgIAGgFQAHgEAKAAQALAAAGAHQAHAGAAALIAAByIAMAAQAJABAGAFQAFAGABAJQgBAIgFAGQgGAFgJAAIgMAAIAAAbQAAAKgHAHQgGAGgLABQgJgBgHgGgAgoAYIA7AAIAAhEg");
	this.shape_4.setTransform(27.2,22.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202C52").s().p("AgpBsQgRgFgNgKQgEgEgDgEQgDgFAAgGQAAgKAHgHQAHgGAKgBQAEAAADABIAGAEQAKAHALAEQAKADAMAAQAOAAAKgIQAKgIABgPIAAAAQgBgPgKgIQgLgIgRAAQgOAAgHADQgIACgFABQgFgBgFgBIgMgIQgFgDgCgFQgDgFABgGIAEhMQABgJAGgGQAGgGAJAAIBgAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAIhKAAIgDAnIAOgDIAPgBQAWAAARAHQASAIAKAPQALAPAAAaIAAABQAAAXgLARQgKASgTAJQgTAKgYAAQgXAAgRgGg");
	this.shape_5.setTransform(27.325,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202C52").s().p("AghBuQgQgGgMgMQgIgIgGgMQgGgLgDgQQgDgQgBgWIAAgBQAAghALgcQALgbAWgRQAWgQAgAAQARAAANAEQAOAEAKAFQAGAEADAFQAEAFAAAHQAAAKgHAHQgGAGgKABIgHgBIgGgDQgHgEgIgDQgHgCgKAAQgOAAgJAHQgKAGgFAMQgFAMgBAPQAHgGAMgEQALgFAPABQAWAAASAIQARAHALAQQALAPAAAYIAAABQgBAWgLASQgLARgTAKQgUAKgYAAQgVAAgPgGgAgbAQQgKAKAAAOIAAABQAAAOALAJQAKAKARAAQATgBAJgIQALgJgBgPIAAgBQAAgOgKgKQgKgIgSgBQgSABgKAIg");
	this.shape_6.setTransform(27.3,22.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C52").s().p("Ag3BrQgHgGAAgKIABgIIADgHIBSiRIhUAAQgKgBgGgGQgGgFAAgKQAAgIAGgHQAGgGAKAAIB4AAQALAAAFAGQAGAFABALQAAAFgCAHIgFAMIhZCiQgFAJgGAEQgGAEgHAAQgKAAgIgGg");
	this.shape_7.setTransform(27.725,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202C52").s().p("AgrBrQgUgIgLgOQgLgPAAgUIAAAAQAAgUAJgOQAJgMASgHQgNgIgIgLQgIgNAAgRIAAgBQAAgRAKgOQAKgOASgIQARgIAXAAQAYAAARAIQASAIAKAOQAKAOAAARIAAABQAAARgIANQgIALgNAIQASAHAJAMQAJANAAAUIAAABQAAAUgLAPQgLAPgTAHQgUAJgZgBQgYAAgTgIgAgbAaQgKAHgBANIAAABQAAALALAJQAKAHARABQASgBAKgHQALgIAAgMIAAgBQgBgNgKgHQgLgIgRAAQgQAAgLAIgAgXhCQgIAIAAAKIAAABQAAAMAJAHQAIAIAOAAQAPAAAIgHQAJgIAAgMIAAgBQAAgKgIgIQgJgIgPAAQgOABgJAHg");
	this.shape_8.setTransform(27.325,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202C52").s().p("AgpBwQgPgFgMgHQgFgDgDgFQgDgGAAgHQAAgJAHgHQAGgFAKAAIAHABIAGACQAIAFAJADQAIACALAAQATAAALgOQAMgOACgXQgIAHgLAEQgMAFgNgBQgZABgSgJQgSgJgJgQQgKgPAAgXIAAgBQAAgWALgSQAKgSAUgJQATgLAZAAQAVAAAPAGQAPAGANAMQAMAMAHAUQAHAUAAAhIAAABQAAAjgLAcQgLAbgWAQQgWAPgfAAQgSAAgOgEgAgdg/QgJAJAAAPIAAABQAAAPAKAJQAKAKASAAQASgBAKgJQAKgJAAgPIAAgBQAAgPgKgJQgLgJgRgBQgTABgKAJg");
	this.shape_9.setTransform(27.375,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202C52").s().p("AASBlQgUgQgNgZQgMgagBgiIAAAAQABggANgaQAMgaAVgQQAXgPAdAAQAfAAAVAPQAXAPANAbQAMAaAAAgIAAAAQAAAhgMAaQgNAagXAQQgWAPgeAAQgeAAgXgPgAAtg9QgKAJgGAQQgHAQABAUIAAAAQgBAUAHAQQAGARAKAJQALAJAPAAQAPAAALgJQAMgJAFgQQAHgQAAgVIAAAAQgBgTgGgRQgGgPgLgKQgLgKgPAAQgPAAgLAKgAh0BqQgGgGAAgLIAAiaIgSAFIgEABIgEABQgJgBgHgGQgFgGgBgJQABgIAEgFQAEgFAHgDIAggJIAMgDIALgBIABAAQAKAAAHAHQAHAGAAALIAACzQAAALgHAGQgHAIgKAAQgKAAgIgIg");
	this.shape_10.setTransform(29.15,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0.9,53.9,42.4);


(lib.letras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(5));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AByCzIgqhtIiVAAIgnBtIgyAAICJllIAyAAICSFlgAA5AgIglhiQgRgtgIgeQgGAjgNAiIgnBoIB4AAg");
	this.shape.setTransform(0.125,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiGCzIAAllICGAAQAoAAAZALQAZALAOAWQAOAXAAAYQAAAXgNAVQgMAUgZANQAgAJASAWQARAXAAAfQAAAagKAVQgLAWgQALQgPAMgYAGQgXAGgjAAgAhXCJIB5gCQAQgDALgHQALgGAHgNQAHgOAAgRQAAgUgKgOQgKgQgTgFQgSgHghABIhTAAgAhXgcIBOAAQAeAAAOgDQASgGAJgMQAJgNAAgTQAAgRgIgOQgJgOgQgEQgQgGglAAIhIAAg");
	this.shape_1.setTransform(0.625,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTChQglgXgSgsQgTguAAgxQAAg4AVgqQAVgqAogWQAngVAvAAQA1AAAlAcQAlAbAOAxIgvALQgMgngYgSQgXgRgkgBQgpABgbATQgcAUgLAhQgMAiAAAjQAAAtAOAiQANAiAcAQQAcASAggBQAoAAAbgWQAcgYAKgtIAvAMQgPA7gmAeQgnAfg4AAQg5AAgkgYg");
	this.shape_2.setTransform(1.775,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiTCzIAAllIB7AAQApAAAWAFQAfAIAWASQAcAYAOAlQAOAlAAAwQAAAogKAfQgJAggPAVQgPAUgRAMQgTAMgYAGQgZAGggAAgAhjCJIBMAAQAiAAAUgHQAVgHAMgLQARgRAJgcQAJgdAAgnQAAg5gSgeQgTgegagKQgTgIgqAAIhKAAg");
	this.shape_3.setTransform(2.1,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiFCzIAAllIEDAAIAAAqIjTAAIAABuIDFAAIAAApIjFAAIAAB6IDbAAIAAAqg");
	this.shape_4.setTransform(0.75,-1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah4CzIAAllIDxAAIAAAqIjBAAIAABvICnAAIAAApIinAAIAACjg");
	this.shape_5.setTransform(-0.375,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-30.5,40.1,59.8);


(lib.hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5DC39").s().p("Eg65AFpIAArRMB1zAAAIAALRg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(-377,-36.1,754,72.30000000000001), null);


(lib.copiaCopiadeSymbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ALZLYQkvEumqAAQmqAAkukuQkuktAAmrQAAmpEukuQEukuGqAAQGqAAEvEuQEuEuAAGpQAAGrkuEtg");
	this.shape.setTransform(103.05,103.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaCopiadeSymbol11, new cjs.Rectangle(-1,-1,208.1,208.1), null);


(lib.copiaCopiadeSymbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1464A5").ss(8,1,1).p("AJ5p5QEHEHAAFyQAAFzkHEGQkGEHlzAAQlyAAkHkHQkGkGAAlzQAAlyEGkHQEHkGFyAAQFzAAEGEGg");
	this.shape.setTransform(89.55,89.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaCopiadeSymbol9, new cjs.Rectangle(-4,-4,187.1,187.1), null);


(lib.copiaCopiadeSymbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(8,1,1).p("AJ5p5QEHEHAAFyQAAFzkHEGQkGEHlzAAQlyAAkHkHQkGkGAAlzQAAlyEGkHQEHkGFyAAQFzAAEGEGg");
	this.shape.setTransform(89.55,89.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaCopiadeSymbol8, new cjs.Rectangle(-4,-4,187.1,187.1), null);


(lib.back_btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9CC53").s().p("AETCiQgQgIgIgOQgKgPAAgUQAAgpAlgYQAlgXBOgHIAAgFQAAgNgIgHQgJgIgTAAQgUAAgSAIQgRAIgPALIgngmQAMgLAQgKQARgKAWgGQAXgGAdgBQAzABAXAXQAXAYgBAuIAACWIhBAAIgFgjQgRATgUAKQgVAKgaAAQgTAAgPgIgAFLBBQgUALABAQQAAAMAGAGQAIAFAMAAQASAAAOgFQANgGAKgJIAAgtQgrAFgTAKgAIECmIAAjvIBDAAIAFApIABAAQAGgLAKgKQAKgKAPgHQAPgHAVgBIACAAIAHBBIgJgBIgIAAQgaAAgRAJQgQAIgLAOIAACVgAB/CmIAAjvIBHAAIAADvgAg9CmIhTjqIBHgKIAzCkIACAAIAxifIBEAAIhWDvgAjyCmIAAiYQAAgPgIgIQgGgJgPAAQgOAAgNAHQgNAGgMAKIAAChIhIAAIAAjvIBCAAIAGAmQAHgKAMgJQALgKAQgHQAQgGAUgBQAVAAAQAIQAPAHAKAPQAIAQABAYIAACugAqiCmIAAlMIDiAAIAAA9IiZAAIAABIIB3AAIALA5IiCAAIAABTICiAAIAAA7gACEhrQgKgKAAgPQAAgQAKgKQALgKATgBQAVABAKAKQALAKAAAQQAAAPgLAKQgKALgVAAQgTAAgLgLg");
	this.shape.setTransform(94,92.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A2745").s().p("AqMKOQkPkPAAl/QAAl9EPkQQEOkPF+AAQF+AAEQEPQEPEQgBF9QABF/kPEPQkQEPl+AAQl+AAkOkPg");
	this.shape_1.setTransform(92.5,93.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.back_btn1, new cjs.Rectangle(0.1,1.1,184.9,185), null);


(lib.candado_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.candado();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3331,0.3336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candado_1, new cjs.Rectangle(0,0,31,43.4), null);


(lib.btn_siguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape.setTransform(81,22);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,44);


(lib.btn_seleccionar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4E76").s().p("AqIDyQhkAAhHhHQhHhHAAhkQAAhjBHhHQBHhHBkAAIURAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAg");
	this.shape.setTransform(89.075,24.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.2,48.4);


(lib.btn_salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape.setTransform(81,22);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,44);


(lib.btn_enviar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape.setTransform(81,22);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,44);


(lib.btn_ella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnmHmQjJjJAAkdQAAkcDJjKQDKjJEcAAQEdAADJDJQDKDKAAEcQAAEdjKDJQjJDKkdAAQkcAAjKjKg");
	this.shape.setTransform(68.75,68.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,137.5);


(lib.btn_el = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnmHmQjJjJAAkdQAAkcDJjKQDKjJEcAAQEdAADJDJQDKDKAAEcQAAEdjKDJQjJDKkdAAQkcAAjKjKg");
	this.shape.setTransform(68.75,68.75);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.5,137.5);


(lib.btn_comenzar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsLDeIAAm8IYXAAIAAG8g");
	this.shape.setTransform(78,22.25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156,44.5);


(lib.btn_b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBmhmCRAAQCRAABmBmQBnBnAACQQAACRhnBnQhmBmiRAAQiRAAhmhmg");
	this.shape.setTransform(35.025,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.btn_b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBmhmCRAAQCRAABmBmQBnBnAACQQAACRhnBnQhmBmiRAAQiRAAhmhmg");
	this.shape.setTransform(35.025,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.btn_b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBmhmCRAAQCRAABmBmQBnBnAACQQAACRhnBnQhmBmiRAAQiRAAhmhmg");
	this.shape.setTransform(35.025,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.btn_b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBmhmCRAAQCRAABmBmQBnBnAACQQAACRhnBnQhmBmiRAAQiRAAhmhmg");
	this.shape.setTransform(35.025,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.btn_b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBmhmCRAAQCRAABmBmQBnBnAACQQAACRhnBnQhmBmiRAAQiRAAhmhmg");
	this.shape.setTransform(35.025,35.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,70.1);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/Ax2MAAAhjrMCf/AAAMAAABjrg");
	this.shape.setTransform(512,319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.back, new cjs.Rectangle(0,0,1024,638), null);


(lib.an_ella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.an_ella2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2059,0.2059);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.an_ella, new cjs.Rectangle(0,0,42,117), null);


(lib.an_el = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.an_el2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1997,0.1997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.an_el, new cjs.Rectangle(0,0,39.4,119.3), null);


(lib.titulos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.t1.visible = false;
		this.t2.visible = false;
		this.t3.visible = false;
		this.t4.visible = false;
		this.t5.visible = false;
		
		this.show = function(num){
			this["t"+num].alpha = 0;
			this["t"+num].visible = true;
			createjs.Tween.get(this["t"+num])
		    .to({alpha:1}, 1000)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// letreros
	this.t1 = new lib.letrero01();
	this.t1.name = "t1";
	this.t1.parent = this;
	this.t1.setTransform(74.5,227.05,1,1,0,0,0,74.5,34);

	this.t5 = new lib.letrero05();
	this.t5.name = "t5";
	this.t5.parent = this;
	this.t5.setTransform(795.7,315.05,1,1,0,0,0,98,41);

	this.t4 = new lib.letrero04();
	this.t4.name = "t4";
	this.t4.parent = this;
	this.t4.setTransform(744.75,176.3,1,1,0,0,0,98,31);

	this.t3 = new lib.letrero03();
	this.t3.name = "t3";
	this.t3.parent = this;
	this.t3.setTransform(468.5,31,1,1,0,0,0,79.5,31);

	this.t2 = new lib.letrero02();
	this.t2.name = "t2";
	this.t2.parent = this;
	this.t2.setTransform(324.4,108.95,1,1,0,0,0,64.5,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t2},{t:this.t3},{t:this.t4},{t:this.t5},{t:this.t1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.titulos, new cjs.Rectangle(0,0,885.7,359.1), null);


(lib.tacha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AC0D6ImtmtQgQgQABgUQACgTAOgOQAOgOATgCQAUgBAQAQIGtGtQAQAQgBAUQgCATgOAOQgOAOgTACIgDAAQgTAAgOgPg");
	this.shape.setTransform(15.2051,15.9551,0.2829,0.2829);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjXEJQgTgCgOgOQgOgOgCgTQgBgUAQgQIGtmtQAQgQAUABQATACAOAOQAOAOACATQABAUgQAQImtGtQgOAPgTAAIgDAAg");
	this.shape_1.setTransform(15.2051,15.9551,0.2829,0.2829);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADkihChQiiChjjAAQjjAAihihgAlalZQiPCPAADKQAADLCPCPQCQCQDKAAQDKAACQiQQCQiPAAjLQAAjKiQiPQiQiQjKAAQjKAAiQCQg");
	this.shape_2.setTransform(15.4872,15.4872,0.2816,0.2816);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(22,15.55,0.2816,0.2816,0,0,0,24.9,44.4);
	this.instance.alpha = 0.2891;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ak2E3QiBiAAAi3QAAi1CBiBQCBiBC1AAQC3AACACBQCBCBAAC1QAAC3iBCAQiACBi3AAQi1AAiBiBg");
	this.shape_3.setTransform(15.4872,15.4872,0.2816,0.2816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tacha, new cjs.Rectangle(0,0,31,31), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		
		var NUM_STARS = 5;
		
		this.show = function(number) {
			for(var i= 1; i <= Math.floor(number / 2); i++) {
				that['es' + i].visible = true;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.es5 = new lib.estrella();
	this.es5.name = "es5";
	this.es5.parent = this;
	this.es5.setTransform(181,17.1,1,1,0,0,0,18,17.1);
	this.es5.visible = false;

	this.es4 = new lib.estrella();
	this.es4.name = "es4";
	this.es4.parent = this;
	this.es4.setTransform(140.25,17.1,1,1,0,0,0,18,17.1);
	this.es4.visible = false;

	this.es3 = new lib.estrella();
	this.es3.name = "es3";
	this.es3.parent = this;
	this.es3.setTransform(99.5,17.1,1,1,0,0,0,18,17.1);
	this.es3.visible = false;

	this.es2 = new lib.estrella();
	this.es2.name = "es2";
	this.es2.parent = this;
	this.es2.setTransform(58.75,17.1,1,1,0,0,0,18,17.1);
	this.es2.visible = false;

	this.es1 = new lib.estrella();
	this.es1.name = "es1";
	this.es1.parent = this;
	this.es1.setTransform(18,17.1,1,1,0,0,0,18,17.1);
	this.es1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.es1},{t:this.es2},{t:this.es3},{t:this.es4},{t:this.es5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,199,34.3), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		
		var TOTAL = 3;
		
		var counter = TOTAL;
		
		function substract() {
			counter--;
		}
		
		function resetBulbs() {
			for(var i = 1; i <= TOTAL; i++ ) {
				if(i <= counter) {
					that['op' + i].gotoAndStop('on');
				} else {
					that['op' + i].gotoAndStop('off');
				}
			}
		}
		
		this.takeOption = function() {
			substract();
			resetBulbs()
		}
		
		this.isFinished = function() {
			return counter <= 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.op1 = new lib.oportinidad();
	this.op1.name = "op1";
	this.op1.parent = this;
	this.op1.setTransform(103,18,1,1,0,0,0,18,18);

	this.op2 = new lib.oportinidad();
	this.op2.name = "op2";
	this.op2.parent = this;
	this.op2.setTransform(62,18,1,1,0,0,0,18,18);

	this.op3 = new lib.oportinidad();
	this.op3.name = "op3";
	this.op3.parent = this;
	this.op3.setTransform(18,18,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.op3},{t:this.op2},{t:this.op1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,121,36), null);


(lib.siguiente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.btn_siguiente();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_siguiente(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AknBAQgMgGgKgJQgJgJgFgMQgFgNAAgOIAAgBQAAgNAFgMQAFgNAKgKQAJgJANgGQAMgFAQAAQAIAAAIACQAHABAGACIAMAFIALAJIgTAVIgHgFIgRgHIgKgBQgIAAgHADQgHAEgFAFQgGAGgDAIQgDAHAAAIIAAAAQAAAJADAIQADAHAGAHQAFAFAHADQAIAEAJgBQAQABALgJIAAgTIgdAAIAAgYIA6AAIAAA5QgLAIgOAGQgOAHgSAAQgQAAgNgFgAipA2QgPgPAAgdIAAhMIAdAAIAABKQAAARAIAIQAIAJANgBQAOABAHgJQAIgHAAgQIAAhMIAdAAIAABKQAAAQgEALQgEALgIAHQgHAIgLAEQgLADgNAAQgbAAgQgOgAnyA/QgOgFgMgLIARgVQAJAIAKAEQAJAFAMgBQAJABAFgEQAFgDAAgGIAAAAIgBgGIgEgDIgIgFIgggJQgIgDgGgEQgGgDgDgIQgDgGAAgKIAAgBQAAgIADgHQAEgIAGgGQAGgFAIgDQAJgCAKAAQAPAAAMAEQAMAEALAJIgQAVQgIgFgJgEQgJgEgIABQgJAAgEACQgEAEAAAFIAAAAQAAADABADQABACAEACIAIAEIAPAEQAKADAIADQAHADAGAEQAFAEADAHQADAGAAAJQAAAKgEAIQgDAIgHAFQgGAFgJADQgJACgLAAQgPAAgPgFgAGoBDIAAiFIBkAAIAAAaIhHAAIAAAbIA/AAIAAAaIg/AAIAAAcIBIAAIAAAagAFMBDIAAhqIgoAAIAAgbIBuAAIAAAbIgpAAIAABqgAD1BDIhBhUIAABUIgdAAIAAiFIAbAAIA/BRIAAhRIAcAAIAACFgAAYBDIAAiFIBkAAIAAAaIhHAAIAAAbIA/AAIAAAaIg/AAIAAAcIBIAAIAAAagAglBDIAAiFIAdAAIAACFgAmIBDIAAiFIAdAAIAACFg");
	this.shape.setTransform(79.925,22.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_1.setTransform(81,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C283B").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_2.setTransform(81,24.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.siguiente, new cjs.Rectangle(0,0,162,46.6), null);


(lib.salir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.btn_salir();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.15,1.1111,1.1102);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_salir(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEuCPQgJgDgHgIQgIgGgDgJQgFgKAAgKIAAAAQAAgKAFgKQADgJAIgHQAHgHAJgEQAKgDALAAQALAAAJADQAKAEAHAHQAHAHAEAJQAEAJAAAKIAAABQAAALgEAIQgEAKgHAGQgHAHgKAEQgJAEgLAAQgMAAgJgEgAE4BJQgEABgEAEQgDAEgCAEQgCAFAAAFIAAABQAAAGACAEQACAFADADIAJAHQAEABAGAAQAGAAAEgBQAFgDADgDQADgEACgFQACgEAAgGIAAAAQAAgGgCgFQgBgEgEgEQgEgDgEgCQgFgDgFAAQgGAAgFADgACQCPQgJgDgHgIQgGgGgEgKQgEgIAAgLIAAAAQAAgKAEgKQAEgJAGgHQAHgHAJgEQAKgDAKAAQAOgBAKAFQAJAEAGAIIgQASIgKgIQgFgDgIAAQgFAAgEADQgEABgDAEQgEAEgBAEQgCAFAAAFIAAABQAAAFACAFQABAFAEAEQADADAEADQAFABAGAAQAHABAFgDIAKgIIAQARQgIAHgIAFQgKAFgOAAQgLAAgJgEgAAaCRQgFgCgFgEQgEgDgDgGQgDgGABgGIAAgBQAAgIACgFQADgGAFgEQAFgEAHgCQAIgCAIAAQAIAAAGABIAKADIAAgCQAAgIgGgEQgFgFgJAAIgPABIgMAEIgHgVQAIgDAJgDQAIgBAMAAQAWgBALALQAKALAAAUIAAA4IgaAAIAAgLQgGAGgHADQgHAEgJAAQgHAAgHgCgAAmBqQgFADAAAHQAAAGAEADQAEADAHAAQAKAAAFgFQAHgFAAgHIAAgFIgIgCIgKgBQgJAAgFADgAhbCKQgIgKgBgRIAAg+IAcAAIAAA1QAAAKAEAFQAEAFAJAAQAHAAAFgFQAEgFABgKIAAg1IAbAAIAABgIgbAAIAAgOIgGAGIgGAFQgDADgEABQgFABgEAAQgRAAgIgJgAj1CRQgGgCgEgEQgFgDgCgGQgDgGAAgGIAAgBQAAgIADgFQADgGAFgEQAFgEAHgCQAHgCAJAAQAHAAAGABIALADIAAgCQAAgIgGgEQgFgFgKAAIgOABIgNAEIgGgVQAHgDAJgDQAJgBAMAAQAWgBAKALQAKALAAAUIAAA4IgaAAIAAgLQgFAGgHADQgHAEgKAAQgHAAgGgCgAjqBqQgEADAAAHQAAAGAEADQAEADAGAAQAKAAAG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");
	this.shape.setTransform(78,23.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfBGIgfgwIgfAwIgjAAIAxhGIgvhFIAkAAIAdAtIAdgtIAjAAIguBFIAwBGg");
	this.shape_1.setTransform(158.05,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(158.05,24.5,1,1,0,0,0,14.7,14.7);
	this.instance_1.alpha = 0.5;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F4E76").s().p("AqQD0QhkAAhIhHQhIhHAAhmQAAhkBIhIQBIhHBkAAIUgAAQBlAABIBHQBHBIAABkQAABlhHBIQhIBHhlAAg");
	this.shape_2.setTransform(90.05,24.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C283B").s().p("AqQD0QhkAAhIhHQhIhIAAhlQAAhkBIhIQBIhHBkAAIUgAAQBlAABIBHQBHBIAABkQAABlhHBIQhIBHhlAAg");
	this.shape_3.setTransform(90.05,27.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.salir, new cjs.Rectangle(0,-0.1,180.1,51.800000000000004), null);


(lib.palomita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJDrQgTgBgNgMIiPiQQgfgeAgggQAggfAeAeIBsBsIEKlWQAMgQASABQAPAAANANQAgAggbAiIklF5QgLANgTAAIgCAAg");
	this.shape.setTransform(15.1853,15.9316,0.2816,0.2816);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60B258").s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADkihChQiiChjjAAQjjAAihihgAlalZQiPCPAADKQAADLCPCPQCQCQDKAAQDKAACQiQQCQiPAAjLQAAjKiQiPQiQiQjKAAQjKAAiQCQg");
	this.shape_1.setTransform(15.4822,15.4822,0.2815,0.2815);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(22,15.55,0.2815,0.2815,0,0,0,25.9,45.5);
	this.instance.alpha = 0.2891;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60B258").s().p("Ak2E3QiBiAAAi3QAAi1CBiBQCBiBC1AAQC3AACACBQCBCBAAC1QAAC3iBCAQiACBi3AAQi1AAiBiBg");
	this.shape_2.setTransform(15.4822,15.4822,0.2815,0.2815);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.palomita, new cjs.Rectangle(0,0,31,31), null);


(lib.medalla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(106,97.2,1,1,0,0,0,106,97.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:117.2},59).to({y:97.2},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,212.2,214.4);


(lib.marcadoresElla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{t11:1,t12:2,t13:3,t14:4,t15:5,t21:6,t22:7,t23:8,t24:9,t25:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// ella
	this.instance = new lib.marcador1();
	this.instance.parent = this;
	this.instance.setTransform(51.5,51.4,1,1,0,0,0,51.5,51.4);
	this.instance._off = true;

	this.instance_1 = new lib.marcador2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.5,51.5,1,1,0,0,0,51.5,51.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({x:170.5,y:7.4},0).wait(1).to({x:314.5,y:-68.6},0).wait(1).to({x:431.5,y:-3.6},0).wait(1).to({x:481.5,y:124.4},0).to({_off:true},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({x:170.5,y:7.5},0).wait(1).to({x:314.5,y:-68.75},0).wait(1).to({x:431.5,y:-3.75},0).wait(1).to({x:481.5,y:124.25},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-120.2,533,296);


(lib.juego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// numero
	this.pin = new lib.numero();
	this.pin.name = "pin";
	this.pin.parent = this;
	this.pin.setTransform(115.5,196.4,1,1,0,0,0,33.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.pin).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("EhA/AJEIAAyHMCB/AAAIAASHg");
	this.shape.setTransform(575.025,196.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// INSTRUCCIONES
	this.instance = new lib.INSTRUCCIONES();
	this.instance.parent = this;
	this.instance.setTransform(512.4,86.4,1,1,0,0,0,512.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/AuaMAAAhczMCf/AAAMAAABczg");
	mask.setTransform(512.9,340.9);

	// Layer_1
	this.instance_1 = new lib.fondo2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(512,319.3,1,1,0,0,0,512,319.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AizC0IAAlnIFnAAIAAFng");
	this.shape_1.setTransform(18.05,671.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.juego, new cjs.Rectangle(0.1,-0.9,1140.3000000000002,690.1), null);


(lib.estrellas_vacias = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.estrella_vacia_1();
	this.instance.parent = this;
	this.instance.setTransform(180.55,17.2,1,1,0,0,0,18,17.2);

	this.instance_1 = new lib.estrella_vacia_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139.6,17.2,1,1,0,0,0,18,17.2);

	this.instance_2 = new lib.estrella_vacia_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.1,17.2,1,1,0,0,0,18,17.2);

	this.instance_3 = new lib.estrella_vacia_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.6,17.2,1,1,0,0,0,18,17.2);

	this.instance_4 = new lib.estrella_vacia_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(18,17.2,1,1,0,0,0,18,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.estrellas_vacias, new cjs.Rectangle(0,0,198.6,34.4), null);


(lib.enviar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.btn_enviar();
	this.instance.parent = this;
	this.instance.setTransform(81,21.55,1,1,0,0,0,81,22);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_enviar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BHIg5iMIAiAAIAkBhIAlhhIAgAAIg3CMgAFmBGIgegtIgYAAIAAAtIgfAAIAAiLIBAAAQAZAAAOAMQANAMAAAWIAAAAQAAASgIAJQgIALgOAFIAjAygAEwgBIAfAAQALAAAGgGQAHgFAAgJQgBgKgGgFQgGgFgMAAIgeAAgADbBGIgNggIg7AAIgNAgIgfAAIA8iMIAcAAIA8CMgACeALIAlAAIgSgsgAAxBGIAAiLIAfAAIAACLgAihBGIhEhYIAABYIgeAAIAAiLIAcAAIBCBVIAAhVIAeAAIAACLgAmJBGIAAiLIBpAAIAAAbIhLAAIAAAdIBCAAIAAAaIhCAAIAAAeIBMAAIAAAbg");
	this.shape.setTransform(80.6,22.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_1.setTransform(81,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C283B").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_2.setTransform(81,24.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.enviar, new cjs.Rectangle(0,-0.4,162,47), null);


(lib.ella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.Clip_blanco();
	this.instance.parent = this;
	this.instance.setTransform(84.95,84.8);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.btn_ella();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.85,84.35,1,1,0,0,0,68.8,68.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_ella(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_1
	this.instance_2 = new lib.perfil1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,174.7,174.3);


(lib.el = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_4
	this.instance = new lib.Clip_blanco();
	this.instance.parent = this;
	this.instance.setTransform(84.95,84.8);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.btn_el();
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.75,15.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn_el(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// Layer_1
	this.instance_2 = new lib.perfil2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173.3,173.3);


(lib.brillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mc_brillo_1();
	this.instance.parent = this;
	this.instance.setTransform(17.5,17.5,1,1,0,0,0,17.5,17.5);
	this.instance.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.6484},15).to({alpha:0.1484},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,140,45);


(lib.check = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJDrQgTgBgNgMIiPiQQgfgeAgggQAggfAeAeIBsBsIEKlWQAMgQASABQAPAAANANQAgAggbAiIklF5QgLANgTAAIgCAAg");
	this.shape.setTransform(15.1878,15.9342,0.2816,0.2816);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60B258").s().p("AmEGFQihihAAjkQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADkihChQiiChjjAAQjjAAihihgAlalZQiPCPAADKQAADLCPCPQCQCQDKAAQDKAACQiQQCQiPAAjLQAAjKiQiPQiQiQjKAAQjKAAiQCQg");
	this.shape_1.setTransform(15.4855,15.4855,0.2816,0.2816);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(22,15.55,0.2816,0.2816,0,0,0,25.2,44.8);
	this.instance.alpha = 0.2891;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60B258").s().p("Ak2E3QiBiAAAi3QAAi1CBiBQCBiBC1AAQC3AACACBQCBCBAAC1QAAC3iBCAQiACBi3AAQi1AAiBiBg");
	this.shape_2.setTransform(15.4855,15.4855,0.2816,0.2816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.check, new cjs.Rectangle(0,0,31,31), null);


(lib.copiaSímbolo82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		this.setOff = function() {
			this.gotoAndStop('off');
		}
		
		this.setOn = function() {
			this.gotoAndStop('on');
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 2
	this.letter = new lib.letras();
	this.letter.name = "letter";
	this.letter.parent = this;
	this.letter.setTransform(32.25,32.05);

	this.timeline.addTween(cjs.Tween.get(this.letter).wait(2));

	// a
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAheheg");
	this.shape.setTransform(32.075,32.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("AjiDjQheheAAiFQAAiEBeheQBeheCEAAQCFAABeBeQBeBeAACEQAACFheBeQheBeiFAAQiEAAheheg");
	this.shape_1.setTransform(32.075,32.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,64.2);


(lib.copiaretro_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{good:1,bad:35});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		//this.retro_bien.texto.text = this.parent.getQuestion().retro_bien
		// escribe el texto sin mostrar el texto: ¡Bien hecho!
		this.retro_bien1.visible = false;
		this.retro_bien2.visible = false;
		/*
		if (this.parent.getQuestion().retro_bien.length < 250) {
			this.retro_bien1.texto.text = this.parent.getQuestion().retro_bien.slice(11);
			this.retro_bien1.visible = true;
		} else {
			this.retro_bien2.texto.text = this.parent.getQuestion().retro_bien.slice(11);
			this.retro_bien2.visible = true;
		}
		*/
		
		this.retro_bien1.texto.text = this.parent.getQuestion().retro_bien.slice(11);
			this.retro_bien1.visible = true;
	}
	this.frame_34 = function() {
		this.stop();
		this.parent.next_mc.visible = true;
	}
	this.frame_57 = function() {
		//console.log("this.parent.getQuestion().retro_mal:: " , this.parent.getQuestion().retro_mal.length);
		// escribe el texto sin mostrar el texto: ¡oh no!
		this.retro_mala1.visible = false;
		this.retro_mala2.visible = false;
		/*
		if (this.parent.getQuestion().retro_mal.length < 250) {
			this.retro_mala1.texto.text = this.parent.getQuestion().retro_mal.slice(8);
			this.retro_mala1.visible = true;
		} else {
			this.retro_mala2.texto.text = this.parent.getQuestion().retro_mal.slice(8);
			this.retro_mala2.visible = true;
		}*/
		
		this.retro_mala1.texto.text = this.parent.getQuestion().retro_mal.slice(13);
			this.retro_mala1.visible = true;
	}
	this.frame_76 = function() {
		this.stop();
		this.parent.next_mc.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(16).call(this.frame_34).wait(23).call(this.frame_57).wait(19).call(this.frame_76).wait(15));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_17 = new cjs.Graphics().p("Eg5hABeIAAi7MBzDAAAIAAC7g");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eg5hAFyIAArjMBzDAAAIAALjg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Eg5hAKHIAA0NMBzDAAAIAAUNg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eg5hAObIAA81MBzDAAAIAAc1g");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eg5hASwMAAAglfMBzDAAAMAAAAlfg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eg5hAXFMAAAguJMBzDAAAMAAAAuJg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg5hAbZMAAAg2xMBzDAAAMAAAA2xg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg5hAfuMAAAg/bMBzDAAAMAAAA/bg");
	var mask_1_graphics_56 = new cjs.Graphics().p("Eg5hABeIAAi7MBzDAAAIAAC7g");
	var mask_1_graphics_57 = new cjs.Graphics().p("Eg5hAE1IAAppMBzDAAAIAAJpg");
	var mask_1_graphics_58 = new cjs.Graphics().p("Eg5hAIMIAAwXMBzDAAAIAAQXg");
	var mask_1_graphics_59 = new cjs.Graphics().p("Eg5hALjIAA3FMBzDAAAIAAXFg");
	var mask_1_graphics_60 = new cjs.Graphics().p("Eg5hAO6IAA9zMBzDAAAIAAdzg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Eg5hASRMAAAgkhMBzDAAAMAAAAkhg");
	var mask_1_graphics_62 = new cjs.Graphics().p("Eg5hAVoMAAAgrPMBzDAAAMAAAArPg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Eg5hAZAMAAAgx/MBzDAAAMAAAAx/g");
	var mask_1_graphics_64 = new cjs.Graphics().p("Eg5hAcXMAAAg4tMBzDAAAMAAAA4tg");
	var mask_1_graphics_65 = new cjs.Graphics().p("Eg5hAfuMAAAg/bMBzDAAAMAAAA/bg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_1_graphics_17,x:773.325,y:151.225}).wait(1).to({graphics:mask_1_graphics_18,x:773.1679,y:178.975}).wait(1).to({graphics:mask_1_graphics_19,x:773.0107,y:206.725}).wait(1).to({graphics:mask_1_graphics_20,x:772.8536,y:234.475}).wait(1).to({graphics:mask_1_graphics_21,x:772.6964,y:262.225}).wait(1).to({graphics:mask_1_graphics_22,x:772.5393,y:289.975}).wait(1).to({graphics:mask_1_graphics_23,x:772.3821,y:317.725}).wait(1).to({graphics:mask_1_graphics_24,x:772.225,y:345.475}).wait(11).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_1_graphics_56,x:774.425,y:151.225}).wait(1).to({graphics:mask_1_graphics_57,x:774.425,y:172.8083}).wait(1).to({graphics:mask_1_graphics_58,x:774.425,y:194.3917}).wait(1).to({graphics:mask_1_graphics_59,x:774.425,y:215.975}).wait(1).to({graphics:mask_1_graphics_60,x:774.425,y:237.5583}).wait(1).to({graphics:mask_1_graphics_61,x:774.425,y:259.1417}).wait(1).to({graphics:mask_1_graphics_62,x:774.425,y:280.725}).wait(1).to({graphics:mask_1_graphics_63,x:774.425,y:302.3083}).wait(1).to({graphics:mask_1_graphics_64,x:774.425,y:323.8917}).wait(1).to({graphics:mask_1_graphics_65,x:774.425,y:345.475}).wait(26));

	// Layer_11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF3A+QgSgSAAgaIAAAAQAAgZASgRQATgSAbAAQAbAAASARQATASAAAZQAAAagTARQgSASgbAAQgcAAgSgRgAGOgDQgIAHAAAOQAAAOAJAJQAIAKAOAAQAOAAAIgKQAJgJAAgOIAAAAQAAgNgJgIQgJgKgNAAQgOAAgJAKgACeA9QgSgRAAgaIAAAAQAAgZASgRQASgSAaAAQAZAAAQANQAFAFAAAGQAAAGgFAFQgEAEgGABQgGgBgEgDQgKgIgLABQgMAAgIAKQgJAHAAAOQAAAOAJAKQAIAJANAAQAMAAAKgIQAFgDAEAAQAGgBAEAFQAFAEAAAGQAAAGgFAEQgRAPgZAAQgaAAgSgSgAAXA+QgRgQAAgcIAAAAQAAgZAQgRQARgSAZAAQAbAAAQATQAOAQAAAVQAAAHgEAEQgFAEgHAAIhCAAQAFAYAYAAQANAAALgIQADgDAFAAQAGAAADAEQAEAEAAAFQAAAHgFADQgQAOgYAAQgbAAgSgRgABZAJQgBgKgHgIQgGgGgLAAQgVAAgEAYIAyAAIAAAAgAkwA+QgSgSAAgaIAAAAQAAgZASgRQATgSAbAAQAbAAASARQATASAAAZQAAAagTARQgSASgbAAQgcAAgSgRgAkZgDQgIAHAAAOQAAAOAJAJQAIAKAOAAQAOAAAIgKQAJgJAAgOIAAAAQAAgNgJgIQgJgKgNAAQgOAAgJAKgAnLA4QgXgWAAgiIAAAAQAAghAXgWQAXgXAjgBQAeAAAVAQQAHAFAAAJQAAAGgFAFQgFAFgHAAQgFAAgFgEQgPgLgRABQgTgBgNAOQgMAPAAATIAAAAQAAAUAMAOQANAPATAAQATAAAPgNQAEgDAGAAQAHgBAEAFQAFAFAAAGQAAAIgGAEQgWAUghgBQghAAgXgXgAEVAsIAAg3IgBAAQgGAAgEgFQgEgDAAgHQAAgFAEgFQAEgEAGAAIABAAIAAgPQAAgHAFgEQAFgGAHAAQAHAAAFAGQAFAEAAAHIAAAPIAOAAQAGAAAEAEQAFAFAAAFQAAAHgFADQgEAFgGAAIgOAAIAAAxQAAAMAKAAIAEAAQAGAAAEADQAEAEAAAGQAAAJgIAEQgJADgKAAQgjAAAAgjgAIEBJQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIABQAJgBAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAFgJABQgIgBgFgFgAhKBJQgFgEAAgIIAAhWQAAgHAFgFQAFgEAHAAQAHAAAFAEQAFAFAAAHIAAAGQAJgWANAAQAIAAAEAEQAFAFAAAHQAAANgNACQgaAHAAAiIAAAeQAAAIgFAEQgFAGgHAAQgHAAgFgGgAilBJQgFgEAAgIIAAhWQAAgHAFgFQAEgEAHAAQAHAAAFAEQAFAFAAAHIAAAGQAJgWAOAAQAHAAAFAEQAEAFAAAHQAAANgMACQgbAHAAAiIAAAeQAAAIgFAEQgFAGgHAAQgHAAgEgGgAobBOQgFAAgCgEQgDgDABgEIAJhSQABgKAJAAQAJAAACAKIAJBSQABAEgDADQgCAEgFAAgAIHAQIgJhRQgBgFADgDQACgDAFAAIAVAAQAFAAACADQADADgBAFIgJBRQgCAKgJAAQgJAAgBgKgAoegtQgGgFAAgIIAAAAQAAgJAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAJIAAAAQAAAIgGAFQgFAGgJAAQgIAAgFgGg");
	this.shape.setTransform(875.9601,294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHOA+QgSgSAAgaIAAAAQAAgZASgRQATgSAbAAQAbAAASARQATASAAAZQAAAagTARQgSASgbAAQgcAAgSgRgAHlgEQgIAIAAAOQAAANAJAJQAIAKAOAAQAOAAAIgKQAJgIAAgOIAAAAQAAgOgJgIQgJgKgNAAQgOAAgJAKgAD1A9QgSgRAAgaIAAAAQAAgZASgRQASgSAaAAQAZgBAQANQAFAFAAAHQAAAGgFAFQgEAEgGAAQgGAAgEgDQgKgIgLAAQgMAAgIAKQgJAIAAAOQAAAOAJAJQAIAJANAAQAMABAKgJQAFgDAEAAQAGAAAEAFQAFADAAAHQAAAFgFAFQgRAPgZAAQgaAAgSgSgABuA+QgRgRAAgbIAAAAQAAgZAQgRQARgSAZAAQAbAAAQATQAOAQAAAUQAAAIgEAEQgFAEgHAAIhCAAQAFAYAYAAQANgBALgHQADgEAFAAQAGAAADAFQAEAEAAAFQAAAGgFAEQgQAOgYAAQgbAAgSgRgACwAJQgBgLgHgHQgGgGgLAAQgVAAgEAYIAyAAIAAAAgAjZA+QgSgSAAgaIAAAAQAAgZASgRQATgSAbAAQAbAAASARQATASAAAZQAAAagTARQgSASgbAAQgcAAgSgRgAjCgEQgIAIAAAOQAAANAJAJQAIAKAOAAQAOAAAIgKQAJgIAAgOIAAAAQAAgOgJgIQgJgKgNAAQgOAAgJAKgAlXA9QgSgRAAgaIAAAAQAAgZASgRQASgSAaAAQAZgBAQANQAFAFAAAHQAAAGgFAFQgEAEgGAAQgGAAgEgDQgKgIgLAAQgMAAgIAKQgJAIAAAOQAAAOAJAJQAIAJANAAQAMABAKgJQAFgDAEAAQAGAAAEAFQAFADAAAHQAAAFgFAFQgRAPgZAAQgaAAgSgSgAFsArIAAg3IgBAAQgGAAgEgEQgEgEAAgGQAAgGAEgEQAEgFAGAAIABAAIAAgOQAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAAOIAOAAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAEgGAAIgOAAIAAAyQAAALAKAAIAEAAQAGAAAEAEQAEAEAAAGQAAAJgIADQgJADgKAAQgjABAAgkgAJbBJQgGgGAAgIIAAgBQAAgHAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAHIAAABQAAAIgGAGQgFAFgJAAQgIAAgFgFgAAMBJQgFgFAAgHIAAhWQAAgHAFgFQAFgEAHgBQAHABAFAEQAFAFAAAHIAAAFQAJgVANgBQAIABAEAEQAFAEAAAIQAAANgNACQgaAGAAAiIAAAfQAAAHgFAFQgFAFgHAAQgHAAgFgFgAhOBJQgFgFAAgHIAAhWQAAgHAFgFQAEgEAHgBQAHABAFAEQAFAFAAAHIAAAFQAJgVAOgBQAHABAFAEQAEAEAAAIQAAANgMACQgbAGAAAiIAAAfQAAAHgFAFQgFAFgHAAQgHAAgEgFgAmcBJQgFgFAAgHIAAgyQAAgXgUgBQgVABAAAXIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFQgFgFAAgHIAAhWQAAgHAFgFQAFgEAHgBQAHABAFAEQAFAFAAAHIAAACQAOgTAUAAQATAAALALQAKAMAAATIAAA9QAAAHgFAFQgFAFgHAAQgGAAgFgFgAorBJQgFgFAAgHIAAh6QAAgHAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAHIAAB6QAAAHgFAFQgFAFgHAAQgHAAgFgFgApyBNQgFAAgCgDQgDgDABgFIAJhRQABgLAJABQAJgBACALIAJBRQABAFgDADQgCADgFAAgAJeAQIgJhSQgBgFADgDQACgDAFAAIAVAAQAFAAACADQADADgBAFIgJBSQgCAKgJAAQgJAAgBgKgAp1gtQgGgGAAgIIAAAAQAAgIAGgFQAFgGAIAAQAJAAAFAGQAGAFAAAIIAAAAQAAAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_1.setTransform(873.9601,294.05);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[]},18).to({state:[{t:this.shape_1}]},21).to({state:[]},21).wait(14));

	// TEXTOS1
	this.retro_bien1 = new lib.Clip_TextoBien();
	this.retro_bien1.name = "retro_bien1";
	this.retro_bien1.parent = this;
	this.retro_bien1.setTransform(956.1,393.25,1,1,0,0,0,201.5,89.4);

	this.retro_mala1 = new lib.Clip_Texto_mal1();
	this.retro_mala1.name = "retro_mala1";
	this.retro_mala1.parent = this;
	this.retro_mala1.setTransform(915.7,403.85,1,1,0,0,0,159.1,94.5);

	var maskedShapeInstanceList = [this.retro_bien1,this.retro_mala1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.retro_bien1}]},17).to({state:[]},18).to({state:[{t:this.retro_mala1}]},21).to({state:[]},21).wait(14));

	// TEXTOS2
	this.retro_bien2 = new lib.Clip_TextoBien2();
	this.retro_bien2.name = "retro_bien2";
	this.retro_bien2.parent = this;
	this.retro_bien2.setTransform(964.6,369.05,1,1,0,0,0,250.5,244.5);

	this.retro_mala2 = new lib.Clip_Texto_mal2();
	this.retro_mala2.name = "retro_mala2";
	this.retro_mala2.parent = this;
	this.retro_mala2.setTransform(911.1,318.65,1,1,0,0,0,224.5,171.5);

	var maskedShapeInstanceList = [this.retro_bien2,this.retro_mala2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.retro_bien2}]},17).to({state:[]},18).to({state:[{t:this.retro_mala2}]},21).to({state:[]},21).wait(14));

	// FlashAICB
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202C52").s().p("Aw1DVQhHAAgxgxQgzgyAAhHIAAhVQAAhHAzgyQAxgxBHAAMAhrAAAQBGAAAyAxQAzAyAABHIAABVQAABGgzAzQgxAxhHAAg");
	this.shape_2.setTransform(874.85,284.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202C52").s().p("Aw1F0QhHAAgxgyQgzgyAAhHIAAmRQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHIAAGRQAABHgzAyQgxAyhHAAg");
	this.shape_3.setTransform(874.85,300.1125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202C52").s().p("Aw1ISQhHAAgxgyQgzgyAAhHIAArNQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHIAALNQAABHgzAyQgxAyhHAAg");
	this.shape_4.setTransform(874.85,315.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202C52").s().p("Aw1KwQhHAAgxgyQgzgyAAhHIAAwJQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHIAAQJQAABHgzAyQgxAyhHAAg");
	this.shape_5.setTransform(874.85,331.7375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202C52").s().p("Aw1NOQhHAAgxgyQgzgyAAhHIAA1GQAAhGAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABGIAAVGQAABHgzAyQgxAyhHAAg");
	this.shape_6.setTransform(874.85,347.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C52").s().p("Aw1PsQhHAAgxgyQgzgxAAhHIAA6DQAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHIAAaDQAABGgzAyQgxAyhHAAg");
	this.shape_7.setTransform(874.85,363.3625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202C52").s().p("Aw1SKQhHAAgxgyQgzgxAAhHIAA+/QAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHIAAe/QAABGgzAyQgxAyhHAAg");
	this.shape_8.setTransform(874.85,379.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202C52").s().p("Aw1UoQhHAAgxgyQgzgxAAhHMAAAgj7QAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHMAAAAj7QAABGgzAyQgxAyhHAAg");
	this.shape_9.setTransform(874.85,394.9875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202C52").s().p("Aw1XGQhHAAgxgxQgzgyAAhHMAAAgo3QAAhHAzgyQAxgxBHAAMAhrAAAQBGAAAyAxQAzAyAABHMAAAAo3QAABGgzAzQgxAxhHAAg");
	this.shape_10.setTransform(874.85,410.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202C52").s().p("Aw1W6QhHAAgxgyQgzgxAAhHMAAAgofQAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHMAAAAofQAABGgzAyQgxAyhHAAg");
	this.shape_11.setTransform(874.85,409.5778);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202C52").s().p("Aw1WuQhHAAgxgyQgzgxAAhHMAAAgoHQAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHMAAAAoHQAABGgzAyQgxAyhHAAg");
	this.shape_12.setTransform(874.85,408.3556);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202C52").s().p("Aw1WiQhHAAgxgyQgzgyAAhHMAAAgntQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHMAAAAntQAABHgzAyQgxAyhHAAg");
	this.shape_13.setTransform(874.85,407.1333);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202C52").s().p("Aw1WWQhHAAgxgyQgzgyAAhHMAAAgnVQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHMAAAAnVQAABHgzAyQgxAyhHAAg");
	this.shape_14.setTransform(874.85,405.9111);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202C52").s().p("Aw1WJQhHAAgxgyQgzgxAAhHMAAAgm9QAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHMAAAAm9QAABGgzAyQgxAyhHAAg");
	this.shape_15.setTransform(874.85,404.6889);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202C52").s().p("Aw1V9QhHAAgxgyQgzgxAAhHMAAAgmlQAAhHAzgxQAxgyBHAAMAhrAAAQBGAAAyAyQAzAxAABHMAAAAmlQAABGgzAyQgxAyhHAAg");
	this.shape_16.setTransform(874.85,403.4667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202C52").s().p("Aw1VxQhHAAgxgyQgzgyAAhHMAAAgmLQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHMAAAAmLQAABHgzAyQgxAyhHAAg");
	this.shape_17.setTransform(874.85,402.2444);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202C52").s().p("Aw1VlQhHAAgxgyQgzgyAAhHMAAAglzQAAhHAzgyQAxgyBHAAMAhrAAAQBGAAAyAyQAzAyAABHMAAAAlzQAABHgzAyQgxAyhHAAg");
	this.shape_18.setTransform(874.85,401.0222);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#202C52").s().p("Aw1VZQhHAAgxgzQgzgxAAhHMAAAglbQAAhHAzgyQAxgxBHAAMAhrAAAQBGAAAyAxQAzAyAABHMAAAAlbQAABHgzAxQgxAzhHAAg");
	this.shape_19.setTransform(874.85,399.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AwUFFQjIAAAAjqIAAi1QAAjqDIAAMAgpAAAQDIAAAADqIAAC1QAADqjIAAg");
	this.shape_20.setTransform(875.175,295.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AwUG5QjIAAAAjqIAAmdQAAjqDIAAMAgpAAAQDIAAAADqIAAGdQAADqjIAAg");
	this.shape_21.setTransform(875.175,307.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AwUIsQjIAAAAjqIAAqDQAAjqDIAAMAgpAAAQDIAAAADqIAAKDQAADqjIAAg");
	this.shape_22.setTransform(875.175,318.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AwUKgQjIAAAAjqIAAtrQAAjqDIAAMAgpAAAQDIAAAADqIAANrQAADqjIAAg");
	this.shape_23.setTransform(875.175,330.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AwUMTQjIAAAAjqIAAxRQAAjqDIAAMAgpAAAQDIAAAADqIAARRQAADqjIAAg");
	this.shape_24.setTransform(875.175,341.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AwUOHQjIAAAAjqIAA05QAAjqDIAAMAgpAAAQDIAAAADqIAAU5QAADqjIAAg");
	this.shape_25.setTransform(875.175,353.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AwUP6QjIAAAAjqIAA4fQAAjqDIAAMAgpAAAQDIAAAADqIAAYfQAADqjIAAg");
	this.shape_26.setTransform(875.175,364.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AwURuQjIAAAAjqIAA8HQAAjqDIAAMAgpAAAQDIAAAADqIAAcHQAADqjIAAg");
	this.shape_27.setTransform(875.175,376.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AwUThQjIAAAAjqIAA/tQAAjqDIAAMAgpAAAQDIAAAADqIAAftQAADqjIAAg");
	this.shape_28.setTransform(875.175,387.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AwUVVQjIAAAAjqMAAAgjVQAAjqDIAAMAgpAAAQDIAAAADqMAAAAjVQAADqjIAAg");
	this.shape_29.setTransform(875.175,399.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AwUXIQjIAAAAjqMAAAgm7QAAjqDIAAMAgpAAAQDIAAAADqMAAAAm7QAADqjIAAg");
	this.shape_30.setTransform(875.175,410.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AwUW8QjIAAAAjqMAAAgmjQAAjqDIAAMAgpAAAQDIAAAADqMAAAAmjQAADqjIAAg");
	this.shape_31.setTransform(875.175,409.7528);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AwUWwQjIAAAAjqMAAAgmLQAAjqDIAAMAgpAAAQDIAAAADqMAAAAmLQAADqjIAAg");
	this.shape_32.setTransform(875.175,408.5306);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AwUWkQjIAAAAjqMAAAglzQAAjqDIAAMAgpAAAQDIAAAADqMAAAAlzQAADqjIAAg");
	this.shape_33.setTransform(875.175,407.3083);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AwUWXQjIAAAAjqMAAAglZQAAjqDIAAMAgpAAAQDIAAAADqMAAAAlZQAADqjIAAg");
	this.shape_34.setTransform(875.175,406.0861);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AwUWLQjIAAAAjqMAAAglBQAAjqDIAAMAgpAAAQDIAAAADqMAAAAlBQAADqjIAAg");
	this.shape_35.setTransform(875.175,404.8639);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AwUV/QjIAAAAjqMAAAgkpQAAjqDIAAMAgpAAAQDIAAAADqMAAAAkpQAADqjIAAg");
	this.shape_36.setTransform(875.175,403.6417);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AwUVzQjIAAAAjqMAAAgkRQAAjqDIAAMAgpAAAQDIAAAADqMAAAAkRQAADqjIAAg");
	this.shape_37.setTransform(875.175,402.4194);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AwUVmQjIAAAAjqMAAAgj3QAAjqDIAAMAgpAAAQDIAAAADqMAAAAj3QAADqjIAAg");
	this.shape_38.setTransform(875.175,401.1972);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AwUSTQjIAAAAjJIAA+TQAAjJDIAAMAgpAAAQDIAAAADJIAAeTQAADJjIAAg");
	this.shape_39.setTransform(875.175,399.9799,1,1.1707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},12).to({state:[{t:this.shape_20}]},11).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},12).wait(14));

	// Layer_3
	this.text = new cjs.Text("RETROS\npreg", "bold 15px 'Myriad Pro'");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 61;
	this.text.parent = this;
	this.text.setTransform(-55.5,-21);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CC0000").ss(1,1,1).p("AoWkZIQtAAIAAIzIwtAAg");
	this.shape_40.setTransform(-53.275,-13.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(249,149,20,0.349)").s().p("AoWEaIAAozIQtAAIAAIzg");
	this.shape_41.setTransform(-53.275,-13.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.text}]}).to({state:[]},1).to({state:[]},76).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-293,1133.8,946.1);


(lib.copiaCopiadeSymbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.copiaCopiadeSymbol11();
	this.instance.parent = this;
	this.instance.setTransform(112.7,112.7,1.0943,1.0943,0,0,0,103,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaCopiadeSymbol12, new cjs.Rectangle(-0.5,-0.5,226.6,226.6), null);


(lib.Btn_iniciar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(2,-1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmcBDQgOgGgKgKQgKgKgFgMQgFgNAAgQIAAAAQAAgOAFgNQAGgNAJgKQALgKAOgGQANgFAQgBQAQABAOAFQANAGAKAKQALAJAFANQAGANgBAPIAAAAQABAPgGANQgGANgKAKQgKAKgOAGQgNAFgQAAQgRAAgNgFgAmQgnQgHADgFAGQgGAGgDAHQgDAJAAAIIAAAAQAAAJADAIQADAIAGAGQAFAGAIAEQAIADAJAAQAJAAAIgDQAIgEAGgGQAFgGADgIQADgHAAgKIAAAAQAAgIgDgIQgDgIgFgGQgHgGgHgDQgIgEgJAAQgJAAgJAEgAoxBDQgNgGgJgKQgKgJgGgNQgFgNAAgQIAAAAQAAgOAFgNQAGgNAKgKQAJgKANgGQAOgFAQgBQAKAAAIACIAOAEQAIADAFAFIALAIIgUAXQgIgHgJgFQgIgEgLAAQgJAAgHAEQgIADgGAGQgEAGgEAHQgDAJAAAIIAAAAQAAAJADAIQAEAIAEAGQAGAGAIAEQAHADAJAAQAMAAAIgEQAIgFAJgIIAUAVIgMAKQgFAEgIAEQgGADgIABQgJACgKAAQgQABgNgGgAI5BGIgegtIgYAAIAAAtIgfAAIAAiLIBAAAQAZAAAOAMQANANAAAVIAAABQAAAQgHALQgJAKgOAFIAjAygAIDgBIAfAAQALAAAGgFQAHgGgBgJQAAgKgGgFQgHgFgLAAIgeAAgAGuBGIgNgfIg7AAIgNAfIgfAAIA8iMIAcAAIA8CMgAFxAMIAlAAIgSgtgAC0BGIAAgXIBNhZIhLAAIAAgbIBzAAIAAAXIhOBZIBOAAIAAAbgAB9BGIhFhYIAABYIgdAAIAAiLIAcAAIBBBVIAAhVIAeAAIAACLgAhqBGIAAiLIBoAAIAAAcIhLAAIAAAcIBCAAIAAAaIhCAAIAAAdIBNAAIAAAcgAiqBGIAAhbIgoA8IgBAAIgng7IAABaIgeAAIAAiLIAhAAIAlA7IAkg7IAiAAIAACLg");
	this.shape.setTransform(0.2,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F4E76").s().p("AqIDyQhkAAhHhHQhHhHAAhkQAAhjBHhHQBHhHBkAAIURAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAg");
	this.shape_1.setTransform(1.5385,-2.0901,1.1571,1.1571);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C283B").s().p("AqIDyQhkAAhHhHQhHhHAAhkQAAhjBHhHQBHhHBkAAIURAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAg");
	this.shape_2.setTransform(1.5385,1.1788,1.1571,1.1571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Btn_iniciar, new cjs.Rectangle(-101.5,-30,206.5,59.2), null);


(lib.brillo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance_1 = new lib.mc_brillo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.55,17.55,1.1714,1.1714,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:0.25},15).to({scaleX:1.1714,scaleY:1.1714,alpha:1},15).wait(1));

	// Layer_1
	this.instance_2 = new lib.mc_brillo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17.55,17.55,1,1,0,0,0,17.5,17.5);
	this.instance_2.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:17.4,regY:17.4,scaleX:1.3455,scaleY:1.3455,x:17.4,y:17.4,alpha:1},15).to({regX:17.5,regY:17.5,scaleX:1,scaleY:1,x:17.55,y:17.55,alpha:0.25},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,49.8,49.8);


(lib.bloque5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{candado:1,check:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.brillo.visible = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_6
	this.instance = new lib.btn_b5();
	this.instance.parent = this;
	this.instance.setTransform(5.85,6.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_b5(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// brillo
	this.brillo = new lib.brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(41.1,41.6,1.5512,1.5512,0,0,0,17.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(3));

	// Layer_3
	this.instance_1 = new lib.candado_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38,80.05,1,1,0,0,0,15.5,21.7);

	this.instance_2 = new lib.check();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41,74,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("AhQBoQgLgIAAgNQAAgLAHgIQAIgIALAAQAJAAAGAGQAWAQAaAAQARAAALgJQAMgKAAgQIAAgBQAAgQgNgJQgMgJgTAAQgMAAgMADIgOADQgJAAgQgLQgLgHABgOIAEhVQABgLAHgGQAHgHAKAAIBsAAQAKAAAIAHQAHAHAAAKQAAAKgHAHQgIAHgKAAIhTAAIgEAsQASgEAPAAQAnAAAXATQAaAUAAAoIAAABQAAAogaAXQgaAYgpAAQguAAghgYg");
	this.shape.setTransform(39.35,41.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhQBoQgLgIAAgNQAAgLAHgIQAIgIALAAQAJAAAGAGQAWAQAaAAQARAAALgJQAMgKAAgQIAAgBQAAgQgNgJQgMgJgTAAQgMAAgMADIgOADQgJAAgQgLQgLgHABgOIAEhVQABgLAHgGQAHgHAKAAIBsAAQAKAAAIAHQAHAHAAAKQAAAKgHAHQgIAHgKAAIhTAAIgEAsQASgEAPAAQAnAAAXATQAaAUAAAoIAAABQAAAogaAXQgaAYgpAAQguAAghgYg");
	this.shape_1.setTransform(39.35,41.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(2));

	// Layer_1
	this.instance_3 = new lib.pin5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.6,108);


(lib.bloque4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"candado":1,"check":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.brillo.visible = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_6
	this.instance = new lib.btn_b4();
	this.instance.parent = this;
	this.instance.setTransform(5.3,6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_b4(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// brillo
	this.brillo = new lib.brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(40.45,40.35,1.5512,1.5512,0,0,0,17.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(3));

	// Layer_3
	this.instance_1 = new lib.candado_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.75,80.15,1,1,0,0,0,15.5,21.7);

	this.instance_2 = new lib.check();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.75,75.05,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("AAdB5QgIgHAAgLIAAgeIhnAAQgLAAgIgIQgIgHAAgLQAAgPANgPIBth+QAQgTASAAQALAAAIAHQAIAJAAAKIAACCIANAAQAKAAAGAGQAHAHAAAJQAAAJgHAHQgGAGgKABIgNAAIAAAeQAAALgIAHQgIAIgLAAQgLAAgHgIgAgtAcIBCAAIAAhOg");
	this.shape.setTransform(38.225,40.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAdB5QgIgHAAgLIAAgeIhnAAQgLAAgIgIQgIgHAAgLQAAgPANgPIBth+QAQgTASAAQALAAAIAHQAIAJAAAKIAACCIANAAQAKAAAGAGQAHAHAAAJQAAAJgHAHQgGAGgKABIgNAAIAAAeQAAALgIAHQgIAIgLAAQgLAAgHgIgAgtAcIBCAAIAAhOg");
	this.shape_1.setTransform(38.225,40.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(2));

	// Layer_1
	this.instance_3 = new lib.pin4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,107.5);


(lib.bloque3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"candado":1,"check":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.brillo.visible = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_6
	this.instance = new lib.btn_b3();
	this.instance.parent = this;
	this.instance.setTransform(4.85,5.35);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_b3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// brillo
	this.brillo = new lib.brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(40.5,40.5,1.5732,1.5732,0,0,0,17.6,17.6);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(3));

	// Layer_3
	this.instance_1 = new lib.candado_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.05,78.2,1,1,0,0,0,15.5,21.7);

	this.instance_2 = new lib.check();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.05,74.05,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("AhRBjQgKgIAAgMQAAgKAIgIQAIgIALAAQAJAAAJAHQAWASAaAAQAQAAAKgIQAKgIAAgOIAAgBQAAgggxAAIgIAAQgKAAgHgHQgHgHAAgJQAAgLAMgLIAwgyIhNAAQgJAAgIgHQgGgHAAgJQAAgKAGgHQAIgHAJAAIB6AAQAMAAAIAGQAIAHAAALQAAAPgQAQIgyAvQBEAMAAA6IAAABQAAAkgYAXQgZAXgqAAQgxAAghgdg");
	this.shape.setTransform(40.125,41.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhRBjQgKgIAAgMQAAgKAIgIQAIgIALAAQAJAAAJAHQAWASAaAAQAQAAAKgIQAKgIAAgOIAAgBQAAgggxAAIgIAAQgKAAgHgHQgHgHAAgJQAAgLAMgLIAwgyIhNAAQgJAAgIgHQgGgHAAgJQAAgKAGgHQAIgHAJAAIB6AAQAMAAAIAGQAIAHAAALQAAAPgQAQIgyAvQBEAMAAA6IAAABQAAAkgYAXQgZAXgqAAQgxAAghgdg");
	this.shape_1.setTransform(40.125,41.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(2));

	// Layer_1
	this.instance_3 = new lib.pin3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,108);


(lib.bloque2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"candado":1,"check":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.brillo.visible = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_6
	this.instance = new lib.btn_b2();
	this.instance.parent = this;
	this.instance.setTransform(5.3,5.65);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_b2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// brillo
	this.brillo = new lib.brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(40.8,40.65,1.5122,1.5122,0,0,0,17.5,17.6);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(3));

	// Layer_3
	this.instance_1 = new lib.candado_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.05,75.75,1,1,0,0,0,15.5,21.7);

	this.instance_2 = new lib.check();
	this.instance_2.parent = this;
	this.instance_2.setTransform(42.05,73.05,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("AhACAQgOAAgIgHQgIgHAAgNQAAgQAOgLIBIg7QAXgTAJgMQAKgNAAgPQAAgQgJgJQgJgIgPAAQgUAAgVAWQgHAIgLAAQgLAAgHgIQgHgHAAgLQAAgJAGgIQAgglAxAAQAnAAAYAVQAYAWAAAjIAAABQAAAdgQAVQgNARglAdIgoAgIBWAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAg");
	this.shape.setTransform(40.125,39.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhACAQgOAAgIgHQgIgHAAgNQAAgQAOgLIBIg7QAXgTAJgMQAKgNAAgPQAAgQgJgJQgJgIgPAAQgUAAgVAWQgHAIgLAAQgLAAgHgIQgHgHAAgLQAAgJAGgIQAgglAxAAQAnAAAYAVQAYAWAAAjIAAABQAAAdgQAVQgNARglAdIgoAgIBWAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAg");
	this.shape_1.setTransform(40.125,39.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_1
	this.instance_3 = new lib.pin2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.1,108);


(lib.bloque1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"candado":1,"check":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.brillo.visible = false;
		this.mouseEnabled = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_5
	this.instance = new lib.btn_b1();
	this.instance.parent = this;
	this.instance.setTransform(40.9,39.65,1,1,0,0,0,35,35);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_b1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// brillo
	this.brillo = new lib.brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(41.15,39.6,1.5122,1.5122,0,0,0,17.6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(3));

	// FlashAICB
	this.instance_1 = new lib.candado_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.9,77.95,1.0014,1,0,0,0,15.8,21.8);

	this.instance_2 = new lib.check();
	this.instance_2.parent = this;
	this.instance_2.setTransform(41.55,74.6,1,1,0,0,0,15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202C52").s().p("AAHB5QgHgIAAgLIAAiuIgTAFIgKACQgKAAgHgHQgHgHAAgKQAAgSASgGIAjgKQARgFAJAAIABAAQALAAAIAIQAIAIAAAMIAADKQAAALgIAIQgIAIgLAAQgMAAgIgIg");
	this.shape.setTransform(39.025,43.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAHB5QgHgIAAgLIAAiuIgTAFIgKACQgKAAgHgHQgHgHAAgKQAAgSASgGIAjgKQARgFAJAAIABAAQALAAAIAIQAIAIAAAMIAADKQAAALgIAIQgIAIgLAAQgMAAgIgIg");
	this.shape_1.setTransform(39.025,43.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_1
	this.instance_3 = new lib.pin1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.48,0.48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.6,108);


(lib.bien_mal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.palomita();
	this.instance.parent = this;
	this.instance.setTransform(20,20.15,1.2903,1.2903,0,0,0,15.5,15.6);

	this.instance_1 = new lib.tacha();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,20.15,1.2903,1.2903,0,0,0,15.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.barra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		this.es1.visible = false;
		this.es2.visible = false;
		this.es3.visible = false;
		this.es4.visible = false;
		this.es5.visible = false;
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tiempo
	this.tiempo_txt = new cjs.Text("", "16px 'Gotham Rounded Bold'", "#FFFFFF");
	this.tiempo_txt.name = "tiempo_txt";
	this.tiempo_txt.lineHeight = 18;
	this.tiempo_txt.lineWidth = 107;
	this.tiempo_txt.parent = this;
	this.tiempo_txt.setTransform(830,8.05);

	this.timeline.addTween(cjs.Tween.get(this.tiempo_txt).wait(1));

	// oportunidades
	this.op1 = new lib.oportinidad();
	this.op1.name = "op1";
	this.op1.parent = this;
	this.op1.setTransform(272.55,15,1,1,0,0,0,18,18);

	this.op2 = new lib.oportinidad();
	this.op2.name = "op2";
	this.op2.parent = this;
	this.op2.setTransform(231.55,15,1,1,0,0,0,18,18);

	this.op3 = new lib.oportinidad();
	this.op3.name = "op3";
	this.op3.parent = this;
	this.op3.setTransform(187.55,15,1,1,0,0,0,18,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.op3},{t:this.op2},{t:this.op1}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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TAAQgTAAAAAWIAAAtQAAAHgEAEQgFAEgGAAQgGAAgFgEQgEgEAAgHIAAhOQAAgHAEgEQAFgEAGgBQAGABAFAEQAEAEAAAHIAAABQAOgRASAAQARAAAJAKQAKALAAASIAAA3QAAAHgEAEQgFAEgGAAQgGAAgFgEgEg4IAA2QgEgEAAgHIAAhOQAAgHAEgEQAFgEAGgBQAGABAFAEQAEAEAAAHIAAAEQAJgTAMgBQAHABAEAEQAEAEAAAHQAAALgMACQgYAGAAAeIAAAdQAAAHgEAEQgFAEgGAAQgGAAgFgEgEA+ogAVQgFgFAAgHIAAgBQAAgHAFgEQAFgGAHAAQAIAAAFAGQAFAEAAAHIAAABQAAAHgFAFQgFAFgIAAQgHAAgFgFgEgnLgAVQgFgFAAgHIAAgBQAAgHAFgEQAFgGAIAAQAHAAAFAGQAFAEAAAHIAAABQAAAHgFAFQgFAFgHAAQgIAAgFgFgEA0pgBAQgFgEAAgHIAAAAQAAgHAFgDQAFgEAHAAQAHAAAFAEQAFADAAAHIAAAAQAAAHgFAEQgFAEgHAAQgHAAgFgEgEgxogBAQgFgEAAgHIAAAAQAAgHAFgDQAFgEAHAAQAHAAAFAEQAFADAAAHIAAAAQAAAHgFAEQgFAEgHAAQgHAAgFgEg");
	this.shape.setTransform(406.825,18.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.barra, new cjs.Rectangle(0,-3,939,37.3), null);


(lib.animacion_ella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(79).call(this.frame_80).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApuqiITdiMIAAEEIhVA9IAJDHIgjBQQgGADhNhOQhMhOgZASIknDcIgUOmIp7AKg");
	mask.setTransform(56.25,49.525);

	// Layer_1
	this.instance = new lib.an_ella();
	this.instance.parent = this;
	this.instance.setTransform(21,58.2,1,1,0,0,0,21,58.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regY:58.1,scaleX:0.4286,scaleY:0.4286,x:107.5,y:-4.3},64).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-29.2,116.5,146.2);


(lib.animacion_el = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(79).call(this.frame_80).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApuqZITdidIAAEVIhVA8IAJDIIgjBQQgGADhNhOQhMhPgZATIknDcIgUOmIp7AKg");
	mask.setTransform(56.25,48.65);

	// Layer_3
	this.instance = new lib.an_el();
	this.instance.parent = this;
	this.instance.setTransform(19.7,56.6,1,1,0,0,0,19.7,59.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4962,scaleY:0.4962,x:102.75,y:-1.35},64).to({alpha:0},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30.9,112.5,147.2);


(lib.seleccionar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.btn_seleccionar();
	this.instance.parent = this;
	this.instance.setTransform(89,24.2,1,1,0,0,0,89,24.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_seleccionar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.brillo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.5,24.85,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACOA1QgLgFgHgHQgIgIgFgLQgEgKAAgMIAAAAQAAgLAFgKQAEgLAIgHQAIgIAKgFQALgEANAAQANAAALAEQAKAFAIAHQAIAIAEAKQAFALAAALQAAAMgFAKQgEAKgIAIQgIAIgLAFQgKAEgNAAQgNAAgLgEgACYgfQgGADgEAEQgFAFgCAGQgCAHAAAGQAAAHACAGQACAHAFAEQAFAFAGADQAGADAHAAQAHAAAHgDQAGgDAEgEQAEgFADgGQACgHAAgHIAAAAQAAgGgCgGQgDgHgEgFQgFgEgGgDQgGgDgHAAQgIAAgGADgAgbA1QgLgFgHgHQgIgIgEgKQgEgLAAgMIAAAAQAAgLAEgKQAEgLAIgHQAHgIALgFQAKgEANAAQAHAAAGABIAMADIAKAGIAIAHIgQASQgGgGgHgDQgGgEgIAAQgHAAgGADQgGADgEAEQgEAFgDAGQgCAHAAAGQAAAHACAGQADAHAEAEQAEAFAGADQAGADAHAAQAJAAAGgEQAHgDAGgGIAQAPIgJAJIgKAGIgMAEQgHABgHAAQgMAAgKgEgAiQA1QgKgFgIgHQgHgIgFgKQgEgLAAgMIAAAAQAAgLAEgKQAFgLAHgHQAIgIAKgFQALgEANAAQAIAAAGABIAMADIAJAGIAIAHIgPASQgHgGgGgDQgHgEgIAAQgHAAgGADQgGADgEAEQgFAFgCAGQgCAHAAAGQAAAHACAGQACAHAEAEQAFAFAGADQAGADAHAAQAJAAAHgEQAGgDAHgGIAPAPIgJAJIgKAGIgMAEQgGABgIAAQgMAAgLgEgAo4A0QgMgEgKgJIAOgRQAIAGAIAEQAIADAJAAQAIAAAEgCQAEgDAAgFIAAgFIgEgDIgHgDIgagIQgHgDgFgDQgEgDgDgGQgDgFAAgIIAAgBQAAgHADgGQADgGAFgFQAFgEAHgDQAHgCAJAAQAMAAAKAEQAKADAJAHIgNASQgHgFgHgDQgHgCgHAAQgHAAgEACQgEADAAAEIABAFQABACADACIAHADIAMADIAPAFQAHADAEADQAFAEACAFQACAFAAAHIAAABQAAAIgCAGQgDAHgGAEQgFAEgIADQgHACgJAAQgNAAgMgFgAIyA3IgYgjIgTAAIAAAjIgYAAIAAhtIAzAAQATAAALAJQALAKAAARQAAAOgGAHQgHAJgKAEIAbAngAIHgBIAZAAQAJAAAFgEQAFgEAAgHIAAgBQAAgIgFgDQgGgEgIAAIgZAAgAHFA3IgKgZIgvAAIgKAZIgZAAIAvhuIAXAAIAvBugAGVAJIAdAAIgPgjgAFEA3Ig2hFIAABFIgYAAIAAhtIAWAAIA0BDIAAhDIAYAAIAABtgAA8A3IAAhtIAYAAIAABtgAkWA3IAAhtIBTAAIAAAVIg7AAIAAAXIA0AAIAAAUIg0AAIAAAYIA8AAIAAAVgAl4A3IAAhtIAYAAIAABXIA3AAIAAAWgAnhA3IAAhtIBTAAIAAAVIg7AAIAAAXIA0AAIAAAUIg0AAIAAAYIA8AAIAAAVg");
	this.shape.setTransform(75.425,24.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBEIBDhEIhDhEIAMgLIBPBPIhPBRg");
	this.shape_1.setTransform(160.425,24.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBEIBEhEIhEhEIAMgLIBPBPIhPBRg");
	this.shape_2.setTransform(155,24.25);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.4,24.3,1,1,0,0,0,14.6,14.6);
	this.instance_2.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F4E76").s().p("AqIDyQhkAAhHhHQhHhHAAhkQAAhjBHhHQBHhHBkAAIURAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAg");
	this.shape_3.setTransform(89.075,24.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C283B").s().p("AqIDyQhkAAhHhHQhHhHAAhkQAAhjBHhHQBHhHBkAAIURAAQBkAABHBHQBHBHAABjQAABkhHBHQhHBHhkAAg");
	this.shape_4.setTransform(89.075,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seleccionar, new cjs.Rectangle(0,0,178.2,51.2), null);


(lib.retros_finales = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mal:5,mal2:109,bien:195});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.parent.control_juego.visible = false;
		this.parent.counter.visible = false;
		this.parent.stars.visible = false;
		this.parent.stars_mc.visible = false;
		this.parent.timer.visible = false;
		
		console.log("RETROS:: " + this.parent.score + " INTNTOS:: " + this.parent.attempts);
		if(this.parent.score >= 80){
			this.gotoAndPlay("bien");
		}else{
			if(this.parent.attempts>=2){
				this.gotoAndPlay("mal2");
			}else{
				this.gotoAndPlay("mal");
			}
		}
	}
	this.frame_103 = function() {
		this.score_txt.text = this.parent.score;
	}
	this.frame_106 = function() {
		this.stop();
		
		
		this.btn_salir.addEventListener("click",hazSalir.bind(this));
		
		function hazSalir(){
			if(window.parent){
				window.parent.HazCerrar();
			}else{
				top.close();
			}
		}
	}
	this.frame_189 = function() {
		this.score_txt.text = this.parent.score;
	}
	this.frame_193 = function() {
		this.stop();
		
		
		this.btn_salir.addEventListener("click",hazSalir.bind(this));
		
		function hazSalir(){
			if(window.parent){
				window.parent.HazCerrar();
			}else{
				top.close();
			}
		}
	}
	this.frame_261 = function() {
		this.score_txt.text = this.parent.score;
	}
	this.frame_262 = function() {
		this.stop();
		
		this.bt_sig.addEventListener("click",hazSig.bind(this));
		function hazSig(){
			this.play();
		}
	}
	this.frame_342 = function() {
		playSound("_6_Diapositiva25_01");
	}
	this.frame_1353 = function() {
		this.stop();
		
		
		this.btn_salir.addEventListener("click",hazSalir.bind(this));
		
		function hazSalir(){
			if(window.parent){
				window.parent.HazCerrar();
			}else{
				top.close();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(99).call(this.frame_103).wait(3).call(this.frame_106).wait(83).call(this.frame_189).wait(4).call(this.frame_193).wait(68).call(this.frame_261).wait(1).call(this.frame_262).wait(80).call(this.frame_342).wait(1011).call(this.frame_1353).wait(1));

	// salir
	this.btn_salir = new lib.salir();
	this.btn_salir.name = "btn_salir";
	this.btn_salir.parent = this;
	this.btn_salir.setTransform(827.2,537.05,1,1,0,0,0,90,26.4);

	this.bt_sig = new lib.siguiente();
	this.bt_sig.name = "bt_sig";
	this.bt_sig.parent = this;
	this.bt_sig.setTransform(770.2,527.15,1,1,0,0,0,81,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_salir,p:{regY:26.4,x:827.2,y:537.05}}]},95).to({state:[]},12).to({state:[{t:this.btn_salir,p:{regY:26.4,x:827.2,y:537.05}}]},72).to({state:[]},15).to({state:[{t:this.bt_sig}]},67).to({state:[]},2).to({state:[{t:this.btn_salir,p:{regY:25.8,x:869.2,y:596.2}}]},1082).wait(9));

	// calificacion
	this.score_txt = new cjs.Text("000", "72px 'Arial'", "#E8580E");
	this.score_txt.name = "score_txt";
	this.score_txt.textAlign = "center";
	this.score_txt.lineHeight = 80;
	this.score_txt.lineWidth = 162;
	this.score_txt.parent = this;
	this.score_txt.setTransform(507.45,195.95);
	this.score_txt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.score_txt).wait(103).to({_off:false},0).to({_off:true},4).wait(82).to({_off:false},0).to({_off:true},5).wait(67).to({_off:false,x:525.45,y:176.95},0).to({_off:true},2).wait(1091));

	// Layer_4
	this.instance = new lib.r_mal();
	this.instance.parent = this;
	this.instance.setTransform(658.6,258.85,1,1,0,0,0,418.6,121.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.r_mal2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(658.6,258.85,1,1,0,0,0,418.6,121.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.r_bien();
	this.instance_2.parent = this;
	this.instance_2.setTransform(522.2,295.5,1,1,0,0,0,265.1,199.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({y:227.05,alpha:1},24).to({_off:true},17).wait(1247));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(147).to({_off:false},0).to({y:227.05,alpha:1},24).to({_off:true},23).wait(1160));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(239).to({_off:false},0).to({alpha:1},20).wait(4).to({alpha:0},20).to({_off:true},1).wait(1070));

	// FlashAICB
	this.instance_3 = new lib.envo_g();
	this.instance_3.parent = this;
	this.instance_3.setTransform(517.15,321.1,0.0378,0.0378,0,0,0,421.7,263.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).to({regX:422.1,regY:263,scaleX:1,scaleY:1,y:321.05,alpha:1},20).to({_off:true},60).wait(3).to({_off:false,regX:421.7,regY:263.1,scaleX:0.0378,scaleY:0.0378,y:321.1,alpha:0},0).to({regX:422.1,regY:263,scaleX:1,scaleY:1,y:321.05,alpha:1},19).to({_off:true},65).wait(25).to({_off:false,regX:421.7,regY:263.1,scaleX:0.0378,scaleY:0.0378,y:321.1,alpha:0},0).to({regX:422.1,regY:263,scaleX:1,scaleY:1,y:321.05,alpha:1},20).wait(24).to({alpha:0},20).to({_off:true},1).wait(1070));

	// Layer_14
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(290.15,599.1,1,1,0,0,0,258.1,12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1239).to({_off:false},0).wait(115));

	// Layer_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#930037").s().p("AgEGGIAAsLIAJAAIAAMLg");
	this.shape.setTransform(0.5,600.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#930037").s().p("AkSGGIAAsLIIlAAIAAMLg");
	this.shape_1.setTransform(27.4539,600.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#930037").s().p("AofGGIAAsLIQ/AAIAAMLg");
	this.shape_2.setTransform(54.4079,600.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#930037").s().p("AstGGIAAsLIZbAAIAAMLg");
	this.shape_3.setTransform(81.3618,600.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#930037").s().p("Aw6GGIAAsLMAh1AAAIAAMLg");
	this.shape_4.setTransform(108.3158,600.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#930037").s().p("A1IGGIAAsLMAqRAAAIAAMLg");
	this.shape_5.setTransform(135.2697,600.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#930037").s().p("A5VGGIAAsLMAyrAAAIAAMLg");
	this.shape_6.setTransform(162.2237,600.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#930037").s().p("A9jGGIAAsLMA7HAAAIAAMLg");
	this.shape_7.setTransform(189.1776,600.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#930037").s().p("EghwAGGIAAsLMBDhAAAIAAMLg");
	this.shape_8.setTransform(216.1316,600.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#930037").s().p("Egl+AGGIAAsLMBL9AAAIAAMLg");
	this.shape_9.setTransform(243.0855,600.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#930037").s().p("EgqLAGGIAAsLMBUXAAAIAAMLg");
	this.shape_10.setTransform(270.0395,600.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#930037").s().p("EguZAGGIAAsLMBczAAAIAAMLg");
	this.shape_11.setTransform(296.9934,600.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#930037").s().p("EgymAGGIAAsLMBlNAAAIAAMLg");
	this.shape_12.setTransform(323.9474,600.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#930037").s().p("Eg20AGGIAAsLMBtpAAAIAAMLg");
	this.shape_13.setTransform(350.9013,600.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#930037").s().p("Eg7CAGGIAAsLMB2FAAAIAAMLg");
	this.shape_14.setTransform(377.8553,600.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#930037").s().p("Eg/PAGGIAAsLMB+fAAAIAAMLg");
	this.shape_15.setTransform(404.8092,600.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#930037").s().p("EhDdAGGIAAsLMCG7AAAIAAMLg");
	this.shape_16.setTransform(431.7632,600.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#930037").s().p("EhHqAGGIAAsLMCPVAAAIAAMLg");
	this.shape_17.setTransform(458.7171,600.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#930037").s().p("EhL4AGGIAAsLMCXxAAAIAAMLg");
	this.shape_18.setTransform(485.6711,600.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#930037").s().p("EhQFAGGIAAsLMCgLAAAIAAMLg");
	this.shape_19.setTransform(512.625,600.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1220).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(115));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_283 = new cjs.Graphics().p("AgtAuQgTgTAAgbQAAgaATgTQAUgTAZAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgZAAgUgTg");
	var mask_graphics_284 = new cjs.Graphics().p("AjoDpQhghhAAiIQAAiIBghgQBhhgCHAAQCIAABhBgQBgBgAACIQAACIhgBhQhhBgiIAAQiHAAhhhgg");
	var mask_graphics_285 = new cjs.Graphics().p("AmjGjQititAAj2QAAj1CtiuQCviuD0AAQD2AACuCuQCtCuAAD1QAAD2itCtQiuCvj2AAQj0AAivivg");
	var mask_graphics_286 = new cjs.Graphics().p("ApdJeQj8j7AAljQAAljD8j7QD7j7FiAAQFjAAD8D7QD7D7AAFjQAAFjj7D7Qj8D8ljAAQliAAj7j8g");
	var mask_graphics_287 = new cjs.Graphics().p("AsYMZQlJlIAAnRQAAnQFJlJQFJlIHPAAQHRAAFJFIQFIFJAAHQQAAHRlIFIQlJFJnRAAQnPAAlJlJg");
	var mask_graphics_288 = new cjs.Graphics().p("AvTPUQmWmWAAo+QAAo9GWmWQGWmWI9AAQI+AAGWGWQGWGWAAI9QAAI+mWGWQmWGWo+AAQo9AAmWmWg");
	var mask_graphics_289 = new cjs.Graphics().p("AyOSPQnjnkAAqrQAAqrHjnjQHknjKqAAQKsAAHjHjQHjHjAAKrQAAKrnjHkQnjHjqsAAQqqAAnknjg");
	var mask_graphics_290 = new cjs.Graphics().p("A1JVJQowowAAsZQAAsYIwoxQIxoxMYAAQMZAAIxIxQIwIxAAMYQAAMZowIwQoxIysZAAQsYAAoxoyg");
	var mask_graphics_291 = new cjs.Graphics().p("A4EYEQp+p+AAuGQAAuGJ+p+QJ/p+OFAAQOGAAJ/J+QJ+J+AAOGQAAOGp+J+Qp/J/uGAAQuFAAp/p/g");
	var mask_graphics_292 = new cjs.Graphics().p("A6+a/QrMrLAAv0QAAvzLMrMQLLrLPzAAQP0AALMLLQLLLMAAPzQAAP0rLLLQrMLMv0AAQvzAArLrMg");
	var mask_graphics_293 = new cjs.Graphics().p("A95d6QsZsZAAxhQAAxgMZsZQMZsZRgAAQRhAAMZMZQMZMZAARgQAARhsZMZQsZMZxhAAQxgAAsZsZg");
	var mask_graphics_294 = new cjs.Graphics().p("Egg0Ag1QtmtmAAzPQAAzONmtmQNmtmTOAAQTPAANmNmQNmNmAATOQAATPtmNmQtmNmzPAAQzOAAtmtmg");
	var mask_graphics_295 = new cjs.Graphics().p("EgjvAjwQuzu0AA08QAA07Ozu0QO0uzU7AAQU8AAO0OzQOzO0AAU7QAAU8uzO0Qu0Oz08AAQ07AAu0uzg");
	var mask_graphics_296 = new cjs.Graphics().p("EgmqAmqQwBwAAA2qQAA2pQBwBQQCwBWoAAQWqAAQBQBQQBQBAAWpQAAWqwBQAQwBQC2qAAQ2oAAwCwCg");
	var mask_graphics_297 = new cjs.Graphics().p("EgplAplQxOxOAA4XQAA4WROxPQRPxOYWAAQYXAAROROQRPRPAAYWQAAYXxPROQxORP4XAAQ4WAAxPxPg");
	var mask_graphics_298 = new cjs.Graphics().p("EgsfAsgQycycAA6EQAA6EScybQScycaDAAQaFAASbScQScSbAAaEQAAaEycScQybSc6FAAQ6DAAycycg");
	var mask_graphics_299 = new cjs.Graphics().p("EgvaAvbQzpzpAA7yQAA7xTpzpQTpzpbxAAQbyAATpTpQTpTpAAbxQAAbyzpTpQzpTp7yAAQ7xAAzpzpg");
	var mask_graphics_300 = new cjs.Graphics().p("EgyVAyWQ0203AA9fQAA9eU203QU302deAAQdfAAU3U2QU2U3AAdeQAAdf02U3Q03U29fAAQ9eAA0302g");
	var mask_graphics_301 = new cjs.Graphics().p("Eg1QA1QQ2E2DAA/NQAA/MWE2EQWE2EfMAAQfNAAWEWEQWEWEAAfMQAAfN2EWDQ2EWF/NAAQ/MAA2E2Fg");
	var mask_graphics_302 = new cjs.Graphics().p("Eg4LA4LUgXRgXRAAAgg6UAAAgg5AXRgXSUAXSgXRAg5AAAUAg6AAAAXRAXRUAXSAXSAAAAg5UAAAAg6gXSAXRUgXRAXSgg6AAAUgg5AAAgXSgXSg");
	var mask_graphics_303 = new cjs.Graphics().p("Eg7GA7GUgYegYeAAAgioUAAAginAYegYfUAYfgYeAinAAAUAioAAAAYeAYeUAYfAYfAAAAinUAAAAiogYfAYeUgYeAYfgioAAAUginAAAgYfgYfg");
	var mask_graphics_304 = new cjs.Graphics().p("Eg+AA+BUgZsgZsAAAgkVUAAAgkUAZsgZsUAZsgZsAkUAAAUAkVAAAAZsAZsUAZsAZsAAAAkUUAAAAkVgZsAZsUgZsAZsgkVAAAUgkUAAAgZsgZsg");
	var mask_graphics_305 = new cjs.Graphics().p("EhA7BA8Uga5ga5AAAgmDUAAAgmCAa5ga5UAa5ga5AmCAAAUAmDAAAAa5Aa5UAa5Aa5AAAAmCUAAAAmDga5Aa5Uga5Aa5gmDAAAUgmCAAAga5ga5g");
	var mask_graphics_306 = new cjs.Graphics().p("EhD2BD2UgcGgcGAAAgnwUAAAgnvAcGgcHUAcHgcGAnvgABUAnwAABAcGAcGUAcIAcHgABAnvUAABAnwgcIAcGUgcGAcIgnwgABUgnvAABgcHgcIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(283).to({graphics:mask_graphics_283,x:512.5,y:362.475}).wait(1).to({graphics:mask_graphics_284,x:512.05,y:361.6761}).wait(1).to({graphics:mask_graphics_285,x:511.6,y:360.8772}).wait(1).to({graphics:mask_graphics_286,x:511.15,y:360.0783}).wait(1).to({graphics:mask_graphics_287,x:510.7,y:359.2793}).wait(1).to({graphics:mask_graphics_288,x:510.25,y:358.4804}).wait(1).to({graphics:mask_graphics_289,x:509.8,y:357.6815}).wait(1).to({graphics:mask_graphics_290,x:509.35,y:356.8826}).wait(1).to({graphics:mask_graphics_291,x:508.9,y:356.0837}).wait(1).to({graphics:mask_graphics_292,x:508.45,y:355.2848}).wait(1).to({graphics:mask_graphics_293,x:508,y:354.4859}).wait(1).to({graphics:mask_graphics_294,x:507.55,y:353.687}).wait(1).to({graphics:mask_graphics_295,x:507.1,y:352.888}).wait(1).to({graphics:mask_graphics_296,x:506.65,y:352.0891}).wait(1).to({graphics:mask_graphics_297,x:506.2,y:351.2902}).wait(1).to({graphics:mask_graphics_298,x:505.75,y:350.4913}).wait(1).to({graphics:mask_graphics_299,x:505.3,y:349.6924}).wait(1).to({graphics:mask_graphics_300,x:504.85,y:348.8935}).wait(1).to({graphics:mask_graphics_301,x:504.4,y:348.0946}).wait(1).to({graphics:mask_graphics_302,x:503.95,y:347.2957}).wait(1).to({graphics:mask_graphics_303,x:503.5,y:346.4967}).wait(1).to({graphics:mask_graphics_304,x:503.05,y:345.6978}).wait(1).to({graphics:mask_graphics_305,x:502.6,y:344.8989}).wait(1).to({graphics:mask_graphics_306,x:502.15,y:344.1}).wait(1048));

	// Layer_12
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(280.5,517,1,1,0,0,0,193.6,62);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(614).to({_off:false},0).to({y:468.1,alpha:1},17).wait(723));

	// FlashAICB
	this.instance_6 = new lib.Symbol3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(280.1,82.6,1,1,0,0,0,193.2,18.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(342).to({_off:false},0).to({y:151.6,alpha:1},21).wait(991));

	// Layer_9
	this.instance_7 = new lib.medalla();
	this.instance_7.parent = this;
	this.instance_7.setTransform(643.25,25.2,0.1049,0.1049,0,0,0,106.3,97.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(306).to({_off:false},0).to({regX:106,scaleX:0.9104,scaleY:0.9104,x:280.05,y:286.85,alpha:1},23,cjs.Ease.get(1)).to({regX:106.6,scaleX:0.0352,x:280.15,y:259.55},9,cjs.Ease.get(1)).to({regX:106,scaleX:0.9104,x:280.05,y:286.85},7).wait(1009));

	// Layer_10
	this.instance_8 = new lib.img2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(531,133,0.48,0.48);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(283).to({_off:false},0).wait(1071));

	// Layer_7
	this.instance_9 = new lib.fondo2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(512,364.15,1,1,0,0,0,512,319.3);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(283).to({_off:false},0).wait(1071));

	// Layer_1
	this.instance_10 = new lib.back();
	this.instance_10.parent = this;
	this.instance_10.setTransform(512,319,1,1,0,0,0,512,319);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({alpha:0.6406},23).to({_off:true},79).wait(89).to({_off:false,alpha:0},0).to({alpha:0.6406},23).wait(44).to({alpha:0},20).to({_off:true},1).wait(1070));

	// Layer_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgTAxQgLgEgKgIIAMgTQAIAGAJADQAIADAGAAQAGAAADgCQADgCAAgDIAAgBQAAgDgDgCIgHgDIgKgDQgHgCgHgEQgHgDgEgFQgFgGAAgKIAAAAQAAgLAFgHQAFgHAIgEQAJgEAJAAQAKAAAKADQAKAEAIAFIgLAUIgPgHQgHgCgFAAQgFAAgCACQgDACAAADQAAADADACIAGAEIALADIAOAGQAHAEAFAEQAEAGAAAJIAAABQAAALgFAHQgFAIgJADQgJAEgLAAQgJAAgMgEg");
	this.shape_20.setTransform(838.125,672.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAuQgMgGgHgMQgHgMAAgQQAAgOAGgMQAHgMALgHQAMgHANAAQARAAALAIQAMAIAEAMQAGAMAAAOIAAADIAAAFIhGAAQACAJAHAFQAGAGAJgBQAHAAAFgCQAGgCAGgGIARAPQgIAJgKAFQgKAEgOABQgOAAgMgHgAAWgHQgBgKgGgGQgFgGgKAAQgHAAgGAGQgGAFgBALIAqAAIAAAAg");
	this.shape_21.setTransform(827.7,672.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNBFIAAiJIAbAAIAACJg");
	this.shape_22.setTransform(819.025,671.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAxQgHgEgFgHQgFgHAAgKIAAAAQAAgLAFgHQAGgGAJgEQAJgEAMAAIANACIALADIAAgCQAAgJgFgFQgGgFgKAAQgIAAgHACIgNAEIgHgWIARgHQAKgBALAAQAMAAAJACQAIADAGAGQAFAGADAIQADAIAAALIAAA5IgcAAIAAgLQgFAGgIAEQgGAEgLAAQgKAAgIgEgAgNAKQgFADAAAHIAAAAQAAAGAEADQAFAEAHgBQAJAAAGgEQAGgGAAgIIAAgEIgIgEIgKgBQgIAAgGAFg");
	this.shape_23.setTransform(810.275,672.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASA0IAAg4QAAgKgFgGQgEgFgJAAQgHAAgFAFQgFAGAAAKIAAA4IgdAAIAAhlIAdAAIAAAOQAFgGAHgFQAHgFAKAAQARAAAIAKQAJAKAAASIAABBg");
	this.shape_24.setTransform(799,672.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBFIAAhlIAbAAIAABlgAgOgrIAAgZIAdAAIAAAZg");
	this.shape_25.setTransform(790.175,671.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTBGIAAhMIgMAAIAAgYIAMAAIAAgGQAAgJACgGQACgGAEgEQAIgIAOAAIAMAAIAJADIAAAXIgGgBIgHAAQgFAAgDACQgDADABAFIAAAFIAXAAIAAAXIgXAAIAABMg");
	this.shape_26.setTransform(783.85,671);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAxQgLgEgKgIIAMgTQAIAGAJADQAIADAGAAQAGAAADgCQADgCAAgDIAAgBQAAgDgDgCIgHgDIgKgDQgHgCgHgEQgHgDgEgFQgFgGAAgKIAAAAQAAgLAFgHQAFgHAIgEQAJgEAJAAQAKAAAKADQAKAEAIAFIgLAUIgPgHQgHgCgFAAQgFAAgCACQgDACAAADQAAADADACIAGAEIALADIAOAGQAHAEAFAEQAEAGAAAJIAAABQAAALgFAHQgFAIgJADQgJAEgLAAQgJAAgMgEg");
	this.shape_27.setTransform(769.425,672.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAuQgMgIgHgLQgHgMAAgPQAAgOAHgMQAIgMAMgHQAMgHAPAAQAQAAAMAHQANAHAHAMQAHAMAAAOIAAAAQAAAOgHANQgHALgNAIQgMAGgQABQgPgBgNgGgAgNgYQgGAFgDAFQgEAHAAAHIAAAAQAAAHAEAHQADAGAHAEQAFAEAHAAQAIAAAHgEQAFgEAEgGQACgHAAgHQAAgHgCgGQgEgHgGgEQgGgDgIAAQgIAAgFADg");
	this.shape_28.setTransform(758.5,672.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeA0IAAhlIAdAAIAAAUQADgKAIgGQAIgGANAAIAAAeIgCAAQgOAAgJAJQgHAJAAARIAAAmg");
	this.shape_29.setTransform(748.925,672.8231);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGA+QgGgDgDgGQgEgHgBgMIAAgvIgMAAIAAgZIAMAAIAAgaIAdAAIAAAaIAXAAIAAAZIgXAAIAAArQAAAFACACQACADAFAAIAIgBIAGgDIAAAXIgKAEQgGACgGAAIgDAAQgHAAgGgDg");
	this.shape_30.setTransform(740.45,671.6786);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAuQgMgGgHgMQgHgMAAgQQAAgOAGgMQAHgMALgHQALgHAOAAQARAAALAIQAMAIAEAMQAGAMAAAOIAAADIAAAFIhGAAQACAJAHAFQAGAGAIgBQAHAAAHgCQAFgCAGgGIARAPQgIAJgKAFQgKAEgOABQgOAAgMgHgAAWgHQgBgKgGgGQgFgGgKAAQgIAAgGAGQgFAFgBALIAqAAIAAAAg");
	this.shape_31.setTransform(730.85,672.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgeA0IAAhlIAdAAIAAAUQADgKAIgGQAIgGANAAIAAAeIgCAAQgOAAgJAJQgHAJAAARIAAAmg");
	this.shape_32.setTransform(721.775,672.8231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[]},5).to({state:[]},191).wait(1158));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1025.3,683.4);


(lib.comenzar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.btn_comenzar();
	this.instance.parent = this;
	this.instance.setTransform(77.75,22.05,1,1,0,0,0,78,22.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_comenzar(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.brillo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135.2,21.35,0.8659,0.8659,0,0,0,17.6,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkZAtQgJgDgHgHQgHgGgEgKQgDgIAAgLIAAAAQAAgJADgJQAEgJAHgHQAHgHAJgEQAKgDALAAQALAAAJADQAJAEAHAHQAHAGAEAKQADAJAAAJQAAALgDAIQgEAKgHAGQgHAHgJADQgKAEgLABQgLgBgJgEgAkQgbQgGADgDAEQgEAEgCAFQgCAGAAAFQAAAGACAFQACAGAEAEQAEAEAFADQAFACAHAAQAGAAAFgCQAGgDADgEQAEgEACgFQACgGAAgGIAAAAQAAgFgCgFQgCgGgEgEQgEgEgFgDQgFgCgHAAQgGAAgFACgAl/AuQgJgEgHgHQgGgHgEgJQgDgIAAgLIAAAAQAAgJADgJQAEgJAGgHQAHgHAJgEQAJgDAMAAIAMABIAKACIAIAFIAHAGIgNAQQgGgFgGgDQgFgDgIAAQgGAAgFACQgFADgEAEQgDAEgCAFQgCAGAAAFQAAAGACAFQACAGADAEQAEAEAFADQAFACAGAAQAJAAAFgDIAMgIIANAOIgIAGQgEAEgEACQgFACgGABIgMACQgLAAgJgEgAGEAwIgUgeIgRAAIAAAeIgVAAIAAhfIAsAAQARAAAKAJQAJAIAAAOIAAABQAAALgFAHQgGAHgJAEIAXAigAFfAAIAWAAQAIgBAEgDQAEgEAAgGQAAgHgEgEQgFgDgIAAIgVAAgAEmAwIgJgWIgpAAIgIAWIgWAAIAphfIAUAAIApBfgAD8AIIAZAAIgMgegAB7AwIAAgQIA1g8IgzAAIAAgTIBOAAIAAAQIg1A8IA1AAIAAATgABVAwIgug8IAAA8IgVAAIAAhfIATAAIAtA6IAAg6IAVAAIAABfgAhJAwIAAhfIBIAAIAAATIgzAAIAAATIAtAAIAAASIgtAAIAAAUIA0AAIAAATgAh0AwIAAg+IgbAoIgBAAIgagnIAAA9IgVAAIAAhfIAXAAIAZAoIAZgoIAXAAIAABfg");
	this.shape.setTransform(65.325,20.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA7IA6g7Ig6g6IAKgKIBFBEIhFBFg");
	this.shape_1.setTransform(138.775,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA7IA6g7Ig6g6IAKgKIBFBEIhFBFg");
	this.shape_2.setTransform(134.075,21);

	this.instance_2 = new lib.Path_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.25,21,1,1,0,0,0,12.6,12.6);
	this.instance_2.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F4E76").s().p("AowDRQhXAAg+g9Qg8g+gBhWQABhWA8g9QA+g9BXAAIRhAAQBXAAA+A9QA8A9ABBWQgBBWg8A+Qg+A9hXAAg");
	this.shape_3.setTransform(77.05,20.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C283B").s().p("AowDRQhXAAg+g9Qg8g9gBhXQABhWA8g9QA+g9BXAAIRhAAQBXAAA+A9QA8A9ABBWQgBBXg8A9Qg+A9hXAAg");
	this.shape_4.setTransform(77.05,23.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.comenzar, new cjs.Rectangle(-0.2,-0.2,156,44.5), null);


(lib.pregunta_true_false_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hitArea
	this.hitArea = new lib.hitArea();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(3.05,1.4,0.0755,0.7752,0,0,0,-339.2,-33.8);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// Layer_2
	this.checkbox = new lib.copiaSímbolo82();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(3.05,1.45,0.8449,0.8449,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.checkbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.pregunta_true_false_mc, new cjs.Rectangle(0.2,-0.4,57,56.1), null);


(lib.pregunta_multichoice_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.paloma.visible = false;
		/*
		var that = this
		
		var question
		var answer = 0
		
		var NUM_BTNS = 6
		var BTN_NAME = "answer_mc_"
		
		
		this.activate = function(questionObj) {
			
			question = questionObj;
			answer = 0
			initBtns()
			initTextFields()
		
		}
		
		this.check = function(){
			return answer == question.correcta
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].removeAllEventListeners()
				that[BTN_NAME + i].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i)
				initTextField(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i]
		
		
			if(btn.currentFrame > 0) btn.gotoAndStop(0)
		
			btn.cursor = "pointer"
			btn._id = i	
			
			btn.text.text = question['opcion_' + i];
		
			btn.on('click', function(){
				resetBtns()
				answer = this._id
				this.checkbox.gotoAndStop('on')
				that.parent.showCheck()
			})
		}
		
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off')
			}
		}
		
		// Para CENTRAR TEXTOS
		function centrarTexto(txt){
			var alto_max = 70;
			var medidas_ =txt.getBounds();
			console.log(alto_max + " - "  + medidas_.height + " / 2 = " + ((alto_max - medidas_.height) / 2));
			txt.text.y = (alto_max - medidas_.height) / 2;
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hitArea
	this.hitArea = new lib.hitArea();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(312.9,27.05,0.83,0.7605,0,0,0,0,0.1);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// Layer_2
	this.paloma = new lib.bien_mal1();
	this.paloma.name = "paloma";
	this.paloma.parent = this;
	this.paloma.setTransform(-19.95,135.4,1,1,0,0,0,20,128.5);

	this.timeline.addTween(cjs.Tween.get(this.paloma).wait(1));

	// text
	this.text = new cjs.Text("", "19px 'Arial'", "#FFFFFF");
	this.text.name = "text";
	this.text.lineHeight = 19;
	this.text.lineWidth = 528;
	this.text.parent = this;
	this.text.setTransform(90.15,14.3495);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// circle
	this.checkbox = new lib.copiaSímbolo82();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(3.05,1.45,0.8449,0.8449,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.checkbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.pregunta_multichoice_mc, new cjs.Rectangle(-39.9,-0.5,665.6999999999999,66.8), null);


(lib.pregunta_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.hitArea = new lib.hitArea();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(377,19.8,1,0.5297);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// hitArea
	this.text = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text.name = "text";
	this.text.lineHeight = 20;
	this.text.lineWidth = 652;
	this.text.parent = this;
	this.text.setTransform(90.15,14.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_2
	this.checkbox = new lib.copiaSímbolo82();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(28.6,1.45,0.595,0.595);

	this.timeline.addTween(cjs.Tween.get(this.checkbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.pregunta_mc, new cjs.Rectangle(0,0.7,754,38.9), null);


(lib.pregunta_columns_a_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		var that = this
		
		var question
		var answer = 0
		
		var NUM_BTNS = 4
		var BTN_NAME = "answer_mc_"
		
		
		this.activate = function(questionObj) {
			
			question = questionObj;
			answer = 0
			initBtns()
			initTextFields()
		
		}
		
		this.check = function(){
			return answer == question.correcta
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].removeAllEventListeners()
				that[BTN_NAME + i].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i)
				initTextField(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i]
		
		
			if(btn.currentFrame > 0) btn.gotoAndStop(0)
		
			btn.cursor = "pointer"
			btn._id = i
		
			btn.text.text = question['opcion_' + i];
		
			btn.on('click', function(){
				resetBtns()
				answer = this._id
				this.checkbox.gotoAndStop('on')
				that.parent.showCheck()
			})
		}
		
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off')
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hitArea
	this.hitArea = new lib.hitArea();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(29.9,27.05,0.0722,0.7605,0,0,0,0,0.1);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// circle
	this.checkbox = new lib.copiaSímbolo82();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(3.05,1.45,0.8449,0.8449,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.checkbox).wait(1));

}).prototype = getMCSymbolPrototype(lib.pregunta_columns_a_mc, new cjs.Rectangle(2.7,-0.5,54.5,56.2), null);


(lib.copiamc_brillo_sig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// envo hijo
	this.instance = new lib.copiaCopiadeSymbol8();
	this.instance.parent = this;
	this.instance.setTransform(124.75,120.85,1.0914,1.0914,0,0,0,89.5,89.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:124.7,y:117.65,alpha:0.0586},2,cjs.Ease.get(1)).to({x:127.85,y:120.2,alpha:0.3789},2,cjs.Ease.get(1)).to({x:125.15,y:123.65,alpha:0.6914},2,cjs.Ease.get(1)).to({x:124.7,y:120.8,alpha:1},2,cjs.Ease.get(1)).wait(7).to({alpha:0},9,cjs.Ease.get(1)).wait(1));

	// envo
	this.instance_1 = new lib.copiaCopiadeSymbol12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(124.75,120.85,0.824,0.824,0,0,0,112.8,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},13,cjs.Ease.get(1)).wait(2).to({alpha:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,7.1,227.5,227.5);


(lib.copiamc_brillo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// brillo
	this.instance = new lib.copiamc_brillo_sig();
	this.instance.parent = this;
	this.instance.setTransform(102.55,111.25,1,1,0,0,0,129.6,134.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiamc_brillo_1, new cjs.Rectangle(-4.3,-4.3,204.20000000000002,204.20000000000002), null);


(lib.copiaboton01_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F4E76").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape.setTransform(81,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C283B").s().p("ApNDcQhcAAhAhBQhAhAAAhbQAAhaBAhAQBAhBBcAAISbAAQBbAABABBQBBBAAABaQAABbhBBAQhABBhbAAg");
	this.shape_1.setTransform(81,24.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BHIg5iMIAiAAIAkBhIAlhhIAgAAIg3CMgAFmBGIgegtIgYAAIAAAtIgfAAIAAiLIBAAAQAZAAAOAMQANAMAAAWIAAAAQAAASgIAJQgIALgOAFIAjAygAEwgBIAfAAQALAAAGgGQAHgFAAgJQgBgKgGgFQgGgFgMAAIgeAAgADbBGIgNggIg7AAIgNAgIgfAAIA8iMIAcAAIA8CMgACeALIAlAAIgSgsgAAxBGIAAiLIAfAAIAACLgAihBGIhEhYIAABYIgeAAIAAiLIAcAAIBCBVIAAhVIAeAAIAACLgAmJBGIAAiLIBpAAIAAAbIhLAAIAAAdIBCAAIAAAaIhCAAIAAAeIBMAAIAAAbg");
	this.shape_2.setTransform(80.6,22.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.hitArea = new lib.Symbol1();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(89.45,89.45);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// envo
	this.instance = new lib.copiaCopiadeSymbol9();
	this.instance.parent = this;
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,89.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// brillo
	this.brillo = new lib.copiamc_brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(89.7,89.25,1,1,0,0,0,97.8,97.8);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(1));

	// envo hijo
	this.instance_1 = new lib.copiaCopiadeSymbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.45,89.45,1.0914,1.0914,0,0,0,89.5,89.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// envo
	this.instance_2 = new lib.copiaCopiadeSymbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.5,89.5,0.824,0.824,0,0,0,112.8,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_4
	this.instance_3 = new lib.back_btn1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.5,90.5,1,1,0,0,0,92.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaboton01_1copy, new cjs.Rectangle(-12.5,-12.9,204.3,204.6), null);


(lib.copiaboton01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.hitArea = new lib.Symbol1();
	this.hitArea.name = "hitArea";
	this.hitArea.parent = this;
	this.hitArea.setTransform(89.45,89.45);
	this.hitArea.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitArea).wait(1));

	// envo
	this.instance = new lib.copiaCopiadeSymbol9();
	this.instance.parent = this;
	this.instance.setTransform(89.5,89.5,1,1,0,0,0,89.5,89.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// brillo
	this.brillo = new lib.copiamc_brillo_1();
	this.brillo.name = "brillo";
	this.brillo.parent = this;
	this.brillo.setTransform(89.7,89.25,1,1,0,0,0,97.8,97.8);

	this.timeline.addTween(cjs.Tween.get(this.brillo).wait(1));

	// envo hijo
	this.instance_1 = new lib.copiaCopiadeSymbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.45,89.45,1.0914,1.0914,0,0,0,89.5,89.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// envo
	this.instance_2 = new lib.copiaCopiadeSymbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.5,89.5,0.824,0.824,0,0,0,112.8,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Capa_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak8B0QgPgEgGgHQgHgGABgKQAAgJAGgHQAHgHAKgEQgFgCgCgEQgCgEAAgGQAAgIAFgHQAGgHAIgFQgLgGgGgKQgFgJAAgMQAAgOAHgKQAHgLANgGQANgHAUAAQAPAAALAEQALAEAHAHQAHgGAJgEQAIgDAIgBIAFAfIgKAAIgPADIACAGIABAHQAAAOgHAJQgHALgNAGQgNAGgTAAIgLAAIgKgCIgDADIgBAEQAAAEAEABQADABAIAAIAUACQAiABAPAJQAPAJAAATQAAANgKAJQgKAJgRAFQgRAEgXAAQgZAAgQgDgAkwBLIgCAHQAAAJAJAEQAJAEAUAAQAQAAAJgEQAKgDAAgHQAAgEgCgDQgDgCgIgCQgHgCgQAAIgVgBIgEgBIgFAAIgFAFgAkhghQgGAGAAAKQAAALAGAGQAGAGALAAQALAAAGgGQAGgGAAgLQAAgKgGgGQgFgHgMAAQgLAAgGAHgAoTBEQgPgEgMgIQgMgHgKgJIAWgbQAGAHAKAGQAKAGAKAEQALAEALABQAPAAAJgGQAJgFAAgLQAAgKgJgGQgKgFgSgEIgZgIQgMgEgJgGQgKgGgGgJQgGgKAAgOQAAgRAJgNQAIgMAPgHQAPgGAUAAQAOAAANAEQANADALAGQAMAGAJAIIgTAcQgHgFgJgFQgIgGgKgDQgJgDgJAAQgOAAgHAFQgHAFAAAJQAAAHAEAEQAFAFAIAEIAVAGIAYAHQAMAFAKAGQAJAGAGAKQAGAIAAAPQAAAPgIAMQgIANgQAIQgPAIgZAAQgRAAgPgFgAHoBBQgQgGgJgPQgKgQAAgZQAAgTAGgNQAHgNAKgIQAKgJAMgDQALgEALAAQAKAAALADQALAEAJAIQAJAIAFAOQAGAPAAAWIAAAGIhYAAQABAQAJAHQAIAHANAAQAMAAAKgFQALgEAHgGIAPAXQgMAKgOAFQgPAFgRAAIgDAAQgQAAgOgHgAIhgJQgBgOgHgHQgGgHgMAAQgJAAgHAHQgHAGgDAPIA0AAIAAAAgABSBBQgQgGgJgPQgKgQAAgZQAAgTAGgNQAHgNAKgIQAKgJAMgDQALgEALAAQAKAAALADQALAEAJAIQAJAIAFAOQAGAPAAAWIAAAGIhYAAQABAQAJAHQAIAHANAAQAMAAAKgFQALgEAHgGIAPAXQgMAKgOAFQgPAFgRAAIgDAAQgQAAgOgHgACLgJQgBgOgHgHQgGgHgMAAQgJAAgHAHQgHAGgDAPIA0AAIAAAAgAijA/QgLgJAAgVIAAhgIAoAAIAABVQAAAIAEAFQADAFAJAAQAIAAAHgEQAHgEAHgGIAAhZIAoAAIAACEIglAAIgDgVQgEAGgHAFQgGAFgJAEQgJAEgLAAIgCAAQgQAAgKgJgAF/BDQgKgDgEgKQgFgJAAgQIAAg/IgWAAIAAgdIAWAAIAAgrIAogGIAAAxIAiAAIAAAdIgiAAIAAA7QAAAKAEAEQAFADAIAAIAHgBIAHgBIACAdIgGABIgLABIgLAAQgQAAgKgEgAEcBFIAAhTQAAgJgEgFQgEgFgIAAQgIABgHADQgHAEgHAGIAABYIgoAAIAAiEIAlAAIADAVQAEgFAGgGQAHgFAJgEQAIgEAMAAQALAAAJAEQAJAEAFAJQAFAIAAAOIAABggAgRBFIAAiEIAnAAIAACEgAmPBFIAAiEIAoAAIAACEgAgOhSQgGgGAAgIQAAgJAGgGQAGgFAKgBQALABAGAFQAGAGAAAJQAAAIgGAGQgGAGgLAAQgKAAgGgGgAmMhSQgGgGAAgIQAAgJAGgGQAGgFALgBQALABAGAFQAGAGAAAJQAAAIgGAGQgGAGgLAAQgLAAgGgGg");
	this.shape.setTransform(90.375,129.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Capa_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9CC53").s().p("Al/l+IMAF+IsBF/g");
	this.shape_1.setTransform(98.8,65.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Capa_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A2745").s().p("ApfJhQj8j8AAllQAAlkD8j8QD7j8FkAAQFkAAD8D8QD8D8AAFkQAAFlj8D8Qj8D7lkABQlkgBj7j7g");
	this.shape_2.setTransform(89.45,89.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.copiaboton01_1, new cjs.Rectangle(-12.5,-12.9,204.3,204.6), null);


(lib.tipo_true_false = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		
		var question;
		var answer = 0;
		
		var NUM_BTNS = 2;
		var BTN_NAME = "answer_mc_";
		
		
		this.activate = function(questionObj) {
			
			question = questionObj;
			answer = 0;
			initBtns();
		
		}
		
		this.check = function(){
			console.log('es correcta? ', answer == question.correcta);
			return answer == question.correcta
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].removeAllEventListeners();
				that[BTN_NAME + i].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i);
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i];
			
			//console.log(btn)
			if(btn.checkbox.currentFrame > 0) btn.checkbox.gotoAndStop(0)
		
			btn.cursor = "pointer";
			btn._id = i;
		
			btn.on('click', function(){
				resetBtns()
				answer = this._id;
				this.checkbox.gotoAndStop('on');
				that.parent.showCheck()
			})
		}
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off');
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AClAuQgRgRAAgdQAAgcARgSQAPgOAYAAQAXAAAPAOQARASAAAcQAAAdgRARQgPAPgXAAQgYAAgPgPgAC2gdQgIAMAAARQAAASAIAMQAIALAOgBQANABAIgLQAIgMAAgSQAAgRgIgMQgIgKgNAAQgOAAgIAKgAAlAoIANgSQAHAIAKAFQALAFAJAAQAKAAAGgDQAGgEAAgGQAAgGgGgFQgFgDgNgDQgWgGgIgEQgNgJAAgQQAAgRAMgJQALgJATAAQAZgBAVASIgMASQgHgGgIgEQgKgEgIgBQgIABgFADQgFADAAAFQAAAHAGAEQAFADANADQAVAGAJAFQANAJAAAQQAAAPgLAKQgMALgXAAQgdAAgWgVgAhkAgIgoAAIgJAbIgYAAIAqh2IAZAAIApB0IgZAEgAhqANIgNgmIgBAAIgNAmIAbAAgAgyA7IAAh1IAaAAIAABgIAyAAIAEAVgAkCA7IAAh1IBOAAIAAAVIg0AAIAAAdIAmAAIAEAUIgqAAIAAAvg");
	this.shape.setTransform(104.825,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGYAuQgSgRAAgdQAAgcASgSQAPgOAXAAQAXAAAPAOQARASAAAcQAAAdgRARQgPAPgXAAQgXAAgPgPgAGogdQgIAMAAARQAAASAIAMQAIALAOgBQAOABAHgLQAJgMgBgSQABgRgJgMQgHgKgOAAQgOAAgIAKgAFEAOIgPAAIAAAtIgaAAIAAh1IAtAAQAuAAAAAkQAAAagZAHIAbAuIgZAEgAE1gFIASAAQALAAAFgEQAGgEgBgIQABgJgGgDQgFgEgLAAIgSAAgAAOAgIgnAAIgKAbIgXAAIAph2IAYAAIAqB0IgZAEgAAIANIgMgmIgBAAIgOAmIAbAAgAjuAOIgQAAIAAAtIgaAAIAAh1IAtAAQAuAAAAAkQABAagZAHIAbAuIgZAEgAj+gFIASAAQAMAAAFgEQAFgEAAgIQAAgJgFgDQgFgEgMAAIgSAAgAnNA7Ignh0IAYgDIAcBVIAAAAIAdhTIAYAAIgpB1gAC2A7IAAh1IBRAAIAAAVIg3AAIAAAaIAqAAIAFATIgvAAIAAAeIA6AAIAAAVgABAA7IAAh1IAkAAQAegBAQANQASAPAAAfQAAAegTAQQgPANgeAAgABaAmIAMAAQAUAAAIgJQAIgJAAgUQAAgSgIgKQgJgIgTgBIgMAAgAinA7IAAh1IAlAAQAdgBAQANQASAPAAAfQAAAegSAQQgRANgcAAgAiNAmIAMAAQATAAAJgJQAIgJAAgUQAAgSgIgKQgJgIgTgBIgMAAgAl8A7IAAh1IBRAAIAAAVIg3AAIAAAaIAqAAIAEATIguAAIAAAeIA5AAIAAAVg");
	this.shape_1.setTransform(-78.6,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.answer_mc_2 = new lib.pregunta_true_false_mc();
	this.answer_mc_2.name = "answer_mc_2";
	this.answer_mc_2.parent = this;
	this.answer_mc_2.setTransform(102.45,-11.3,2.1071,2.1061,0,0,0,28.7,27.6);

	this.answer_mc_1 = new lib.pregunta_true_false_mc();
	this.answer_mc_1.name = "answer_mc_1";
	this.answer_mc_1.parent = this;
	this.answer_mc_1.setTransform(-80.15,-11.3,2.1071,2.1061,0,0,0,28.7,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_mc_1},{t:this.answer_mc_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipo_true_false, new cjs.Rectangle(-140.1,-70.2,302.5,118), null);


(lib.tipo_multiple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		var that = this
		
		var question
		var answer = 0
		
		var NUM_BTNS = 6
		var BTN_NAME = "answer_mc_"
		
		
		this.activate = function(questionObj) {
			
			question = questionObj;
			answer = 0
			initBtns()
		
		}
		
		this.check = function(){
			// agregacion JGC
			if(answer!=0){
				if(answer == question.correcta){
					that[BTN_NAME + answer].paloma.gotoAndStop(0);		
				}else{
					that[BTN_NAME + answer].paloma.gotoAndStop(1);	
				}
				that[BTN_NAME + answer].paloma.visible = true;
				//
				return answer == question.correcta
			}
		}
		
		this.disable = function () {
			
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].removeAllEventListeners()
				that[BTN_NAME + i].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				
				initBtn(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i]
		
		   //console.log("BTN"+i);
			//JGC
			btn.paloma.visible = false;
			
			if(btn.checkbox.currentFrame > 0) btn.checkbox.gotoAndStop(0)
		
			//console.log("question['opcion_' + i]::: " + question['opcion_' + i] + " ::: " + (question['opcion_' + i] == "" || question['opcion_' + i] == null ));
				
			if(question['opcion_' + i] == "" || question['opcion_' + i] == null){
				//console.log("entra a quitar Boton......");
				btn.visible = false;
			}else{
				btn.visible = true;
				btn.text.text = question['opcion_' + i];
				centrarTexto(btn);
			}	
		
			btn.cursor = "pointer"
			btn._id = i
			
			
		
		
			btn.on('click', function(){
				resetBtns()
				answer = this._id
				this.checkbox.gotoAndStop('on')
				that.parent.showCheck()
			})
		}
		
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off')
			}
		}
		// Para CENTRAR TEXTOS
		function centrarTexto(txt){
			var alto_max = 60;
			var medidas_ = txt.text.getBounds();
			txt.text.y = (alto_max - medidas_.height) / 2;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.answer_mc_6 = new lib.pregunta_multichoice_mc();
	this.answer_mc_6.name = "answer_mc_6";
	this.answer_mc_6.parent = this;
	this.answer_mc_6.setTransform(0,271.55,1,1,0,0,0,377,20.1);

	this.answer_mc_5 = new lib.pregunta_multichoice_mc();
	this.answer_mc_5.name = "answer_mc_5";
	this.answer_mc_5.parent = this;
	this.answer_mc_5.setTransform(0,205.2,1,1,0,0,0,377,20.1);

	this.answer_mc_4 = new lib.pregunta_multichoice_mc();
	this.answer_mc_4.name = "answer_mc_4";
	this.answer_mc_4.parent = this;
	this.answer_mc_4.setTransform(0,130.55,1,1,0,0,0,377,20.1);

	this.answer_mc_3 = new lib.pregunta_multichoice_mc();
	this.answer_mc_3.name = "answer_mc_3";
	this.answer_mc_3.parent = this;
	this.answer_mc_3.setTransform(0,42.2,1,1,0,0,0,377,20.1);

	this.answer_mc_2 = new lib.pregunta_multichoice_mc();
	this.answer_mc_2.name = "answer_mc_2";
	this.answer_mc_2.parent = this;
	this.answer_mc_2.setTransform(0,-46.15,1,1,0,0,0,377,20.1);

	this.answer_mc_1 = new lib.pregunta_multichoice_mc();
	this.answer_mc_1.name = "answer_mc_1";
	this.answer_mc_1.parent = this;
	this.answer_mc_1.setTransform(0,-134.45,1,1,0,0,0,377,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_mc_1},{t:this.answer_mc_2},{t:this.answer_mc_3},{t:this.answer_mc_4},{t:this.answer_mc_5},{t:this.answer_mc_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipo_multiple, new cjs.Rectangle(-416.9,-155,665.7,472.8), null);


(lib.tipo_multichoice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		var that = this
		
		var question
		var answer = "0"
		
		var NUM_BTNS = 6
		var BTN_NAME = "answer_mc_"
		
		
		this.activate = function(questionObj) {
			question = questionObj;
			answer = "0"
			initBtns()
		
		}
		
		this.check = function(){
			var allAnswers = []
			for (var i = 1; i <= NUM_BTNS; i++) {
				if(that[BTN_NAME + i]._answer) allAnswers.push(i)
			}
			//console.log(allAnswers.join(','))
			//console.log(question.correcta.trim())
			return allAnswers.join(',') == question.correcta.trim()
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].removeAllEventListeners()
				that[BTN_NAME + i].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i]
		
			if(btn.checkbox.currentFrame > 0) btn.checkbox.gotoAndStop(0)
		
			if(question['opcion_' + i] == "" || question['opcion_' + i] == null ){
				btn.visible = false;
			}else{
				btn.visible = true;
				btn.text.text = question['opcion_' + i];
				centrarTexto(btn);
			}
		
			btn.cursor = "pointer"
			btn._id = i
			
			btn._answer = false
		
			btn.on('click', function(){
		
				if(this._answer) {
					btn.checkbox.gotoAndStop('off')
				} else {
					btn.checkbox.gotoAndStop('on')
				}
				this._answer = !this._answer
				that.parent.showCheck()
			})
		}
		
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off')
			}
		}
		
		// Para CENTRAR TEXTOS
		function centrarTexto(txt){
			var alto_max = 45;
			var medidas_ = txt.text.getBounds();
			//console.log(alto_max + " - "  + medidas_.height + " / 2 = " + ((alto_max - medidas_.height) / 2));
			txt.text.y = (alto_max - medidas_.height) / 2;
			//console.log("MOVER Y:: " + txt.text.y);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.answer_mc_6 = new lib.pregunta_mc();
	this.answer_mc_6.name = "answer_mc_6";
	this.answer_mc_6.parent = this;
	this.answer_mc_6.setTransform(0,114.5,1,1,0,0,0,377,20.1);

	this.answer_mc_5 = new lib.pregunta_mc();
	this.answer_mc_5.name = "answer_mc_5";
	this.answer_mc_5.parent = this;
	this.answer_mc_5.setTransform(0,68.5,1,1,0,0,0,377,20.1);

	this.answer_mc_4 = new lib.pregunta_mc();
	this.answer_mc_4.name = "answer_mc_4";
	this.answer_mc_4.parent = this;
	this.answer_mc_4.setTransform(0,22.55,1,1,0,0,0,377,20.1);

	this.answer_mc_3 = new lib.pregunta_mc();
	this.answer_mc_3.name = "answer_mc_3";
	this.answer_mc_3.parent = this;
	this.answer_mc_3.setTransform(0,-22.4,1,1,0,0,0,377,20.1);

	this.answer_mc_2 = new lib.pregunta_mc();
	this.answer_mc_2.name = "answer_mc_2";
	this.answer_mc_2.parent = this;
	this.answer_mc_2.setTransform(0,-68.45,1,1,0,0,0,377,20.1);

	this.answer_mc_1 = new lib.pregunta_mc();
	this.answer_mc_1.name = "answer_mc_1";
	this.answer_mc_1.parent = this;
	this.answer_mc_1.setTransform(0,-114.4,1,1,0,0,0,377,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_mc_1},{t:this.answer_mc_2},{t:this.answer_mc_3},{t:this.answer_mc_4},{t:this.answer_mc_5},{t:this.answer_mc_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipo_multichoice, new cjs.Rectangle(-377,-133.8,754,267.8), null);


(lib.tipo_columns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		var that = this
		
		var question
		
		var NUM_BTNS = 6
		var BTN_NAME = "answer_mc_"
		var moving = 0
		var counter = 0
		var answers
		
		
		
		this.activate = function(questionObj) {
			question = questionObj;
			moving = 0
			counter = 0
			answers = parseAnswers()
			initBtns()
		}
		
		this.check = function(){
			var allAnswers = []
			for (var i = 1; i <= NUM_BTNS; i++) {
				if(that[BTN_NAME + i + '_b']._set) allAnswers.push(that[BTN_NAME + i + '_b']._set)
			}
			//console.log(allAnswers.join(','))
			//console.log(question.correcta.trim())
			return allAnswers.join(',') == question.correcta.trim()
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i + '_a'].removeAllEventListeners()
				that[BTN_NAME + i + '_a'].cursor = 'default'
				that[BTN_NAME + i + '_b'].removeAllEventListeners()
				that[BTN_NAME + i + '_b'].cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i)
				initPlace(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i + '_a']
			btn.text = that['text_' + i + '_a']
		
			btn.visible = true
			btn.text.visible = true
		
			if(btn.checkbox.currentFrame > 0) btn.checkbox.gotoAndStop(0)
			btn.checkbox.letter.gotoAndStop(i);
		
			btn._x = btn._x || btn.x
			btn._y = btn._y || btn.y
		
			btn.x = btn._x
			btn.y = btn._y
			
			if(question['opcion_' + i] == "" || question['opcion_' + i] == null ) {
				btn.visible = false
				btn.text.visible = false
			}else{
				btn.text.text = answers.a[i - 1];
				centrarTexto(btn, btn.text);
			}
		
			btn.cursor = "pointer"
			btn._id = i
			
			btn._set = false
		
			btn.on('click', function(){
		
				if(!moving && !this._set) { //posicion inicial
					moving = this._id
					this.checkbox.gotoAndStop('on')
				} else if(!moving && this._set) { // ya está puesto
					moving = this._id
					this.checkbox.gotoAndStop('on')
				} else if(moving && !this._set) { // se deja en donde está (inicio)
					moving = 0
					this.checkbox.gotoAndStop('off')
				} else if(moving && this._set) { // se deja en donde está (lugar)
					// moving = 0
					// this.checkbox.gotoAndStop('off')
				}
		
			})
		}
		
		function initPlace(i) {
			var place = that[BTN_NAME + i + '_b']
			place.text = that['text_' + i + '_b']
		
			place.visible = true
			place.text.visible = true
		
			if(place.checkbox.currentFrame > 0) place.checkbox.gotoAndStop(0)
		
			if(question['opcion_' + i] == "" || question['opcion_' + i] == null ) {
				place.visible = false
				place.text.visible = false
			}else{
				place.text.text = answers.b[i - 1]
				centrarTexto(place, place.text);
			}
		
			place.cursor = "pointer"
			place._id = i
			
			
			place._set = false
		
			place.on('click', function(){
		
				if(!moving && !this._set) { //posicion inicial
					// moving = this._id
					// this.checkbox.gotoAndStop('on')
				} else if(!moving && this._set) { // ya está puesto y se vuelve a mover
					// moving = this._set
				} else if(moving && !this._set) { // se deja en donde está (inicio)
					this._set = moving
					that[BTN_NAME + moving + '_a'].x = this.x
					that[BTN_NAME + moving + '_a'].y = this.y
					that[BTN_NAME + moving + '_a']._set = moving
					moving = 0
				} else if(moving && this._set) { // se deja en donde está (lugar)
					//moving = 0
				}
		
		
				if( checkAllBtns() ) that.parent.showCheck()
			})
		}
		
		function checkAllBtns() {
			var count = 0;
			for (var i = 1; i <= counter; i++) {
				if(that[BTN_NAME + i + '_a']._set) count++
			}
			return count == counter
		}
		
		function resetBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i].checkbox.gotoAndStop('off')
			}
		}
		
		function parseAnswers() {
			var answersObj = { a: [], b: [] }
			
			for (var i = 1; i <= NUM_BTNS; i++) {
			
				if ( !(question['opcion_' + i] == "" || question['opcion_' + i] == null) ) {
					counter++
					var splittedAnswer = question['opcion_' + i].split('|')
					answersObj.a.push(splittedAnswer[0])
					answersObj.b.push(splittedAnswer[1])
				}
			
			}
			return answersObj
		}
		
		// Para CENTRAR TEXTOS
		function centrarTexto(btn, txt){
			var alto_max = 60;
			var medidas_ = txt.getBounds();
			console.log(alto_max + " - "  + medidas_.height + " / 2 = " + ((alto_max - medidas_.height) / 2));
			txt.y = (btn.y - 30) + ((alto_max - medidas_.height) / 2);
			console.log("MOVER Y:: " + txt.y);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.text_6_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_6_a.name = "text_6_a";
	this.text_6_a.lineHeight = 18;
	this.text_6_a.lineWidth = 305;
	this.text_6_a.parent = this;
	this.text_6_a.setTransform(-287.05,147.4993);

	this.answer_mc_6_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_6_a.name = "answer_mc_6_a";
	this.answer_mc_6_a.parent = this;
	this.answer_mc_6_a.setTransform(-347.1,164.55,1,1,0,0,0,29.9,27.6);

	this.text_5_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_5_a.name = "text_5_a";
	this.text_5_a.lineHeight = 18;
	this.text_5_a.lineWidth = 305;
	this.text_5_a.parent = this;
	this.text_5_a.setTransform(-287.05,81.7993);

	this.answer_mc_5_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_5_a.name = "answer_mc_5_a";
	this.answer_mc_5_a.parent = this;
	this.answer_mc_5_a.setTransform(-347.1,99,1,1,0,0,0,29.9,27.6);

	this.text_4_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_4_a.name = "text_4_a";
	this.text_4_a.lineHeight = 18;
	this.text_4_a.lineWidth = 305;
	this.text_4_a.parent = this;
	this.text_4_a.setTransform(-287.05,18.2993);

	this.text_3_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_3_a.name = "text_3_a";
	this.text_3_a.lineHeight = 18;
	this.text_3_a.lineWidth = 305;
	this.text_3_a.parent = this;
	this.text_3_a.setTransform(-287.05,-47.2007);

	this.text_2_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_2_a.name = "text_2_a";
	this.text_2_a.lineHeight = 18;
	this.text_2_a.lineWidth = 305;
	this.text_2_a.parent = this;
	this.text_2_a.setTransform(-287.05,-114.7007);

	this.text_1_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_1_a.name = "text_1_a";
	this.text_1_a.lineHeight = 18;
	this.text_1_a.lineWidth = 305;
	this.text_1_a.parent = this;
	this.text_1_a.setTransform(-287.05,-180.2007);

	this.answer_mc_4_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_4_a.name = "answer_mc_4_a";
	this.answer_mc_4_a.parent = this;
	this.answer_mc_4_a.setTransform(-347.1,35.45,1,1,0,0,0,29.9,27.6);

	this.answer_mc_3_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_3_a.name = "answer_mc_3_a";
	this.answer_mc_3_a.parent = this;
	this.answer_mc_3_a.setTransform(-347.1,-30.15,1,1,0,0,0,29.9,27.6);

	this.answer_mc_2_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_2_a.name = "answer_mc_2_a";
	this.answer_mc_2_a.parent = this;
	this.answer_mc_2_a.setTransform(-347.1,-97.7,1,1,0,0,0,29.9,27.6);

	this.answer_mc_1_a = new lib.pregunta_columns_a_mc();
	this.answer_mc_1_a.name = "answer_mc_1_a";
	this.answer_mc_1_a.parent = this;
	this.answer_mc_1_a.setTransform(-347.1,-163.25,1,1,0,0,0,29.9,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_mc_1_a},{t:this.answer_mc_2_a},{t:this.answer_mc_3_a},{t:this.answer_mc_4_a},{t:this.text_1_a},{t:this.text_2_a},{t:this.text_3_a},{t:this.text_4_a},{t:this.answer_mc_5_a},{t:this.text_5_a},{t:this.answer_mc_6_a},{t:this.text_6_a}]}).wait(1));

	// Layer_3
	this.answer_mc_6_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_6_b.name = "answer_mc_6_b";
	this.answer_mc_6_b.parent = this;
	this.answer_mc_6_b.setTransform(430.4,164.55,1,1,0,0,0,29.9,27.6);

	this.answer_mc_5_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_5_b.name = "answer_mc_5_b";
	this.answer_mc_5_b.parent = this;
	this.answer_mc_5_b.setTransform(430.4,99,1,1,0,0,0,29.9,27.6);

	this.answer_mc_4_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_4_b.name = "answer_mc_4_b";
	this.answer_mc_4_b.parent = this;
	this.answer_mc_4_b.setTransform(430.4,35.45,1,1,0,0,0,29.9,27.6);

	this.answer_mc_3_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_3_b.name = "answer_mc_3_b";
	this.answer_mc_3_b.parent = this;
	this.answer_mc_3_b.setTransform(430.4,-30.15,1,1,0,0,0,29.9,27.6);

	this.answer_mc_2_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_2_b.name = "answer_mc_2_b";
	this.answer_mc_2_b.parent = this;
	this.answer_mc_2_b.setTransform(430.4,-97.7,1,1,0,0,0,29.9,27.6);

	this.answer_mc_1_b = new lib.pregunta_columns_a_mc();
	this.answer_mc_1_b.name = "answer_mc_1_b";
	this.answer_mc_1_b.parent = this;
	this.answer_mc_1_b.setTransform(430.4,-163.25,1,1,0,0,0,29.9,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_mc_1_b},{t:this.answer_mc_2_b},{t:this.answer_mc_3_b},{t:this.answer_mc_4_b},{t:this.answer_mc_5_b},{t:this.answer_mc_6_b}]}).wait(1));

	// Layer_4
	this.text_6_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_6_b.name = "text_6_b";
	this.text_6_b.textAlign = "right";
	this.text_6_b.lineHeight = 13;
	this.text_6_b.lineWidth = 305;
	this.text_6_b.parent = this;
	this.text_6_b.setTransform(386.65,140.4993);

	this.text_5_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_5_b.name = "text_5_b";
	this.text_5_b.textAlign = "right";
	this.text_5_b.lineHeight = 13;
	this.text_5_b.lineWidth = 305;
	this.text_5_b.parent = this;
	this.text_5_b.setTransform(386.65,74.2493);

	this.text_4_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_4_b.name = "text_4_b";
	this.text_4_b.textAlign = "right";
	this.text_4_b.lineHeight = 13;
	this.text_4_b.lineWidth = 305;
	this.text_4_b.parent = this;
	this.text_4_b.setTransform(386.65,10.0493);

	this.text_3_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_3_b.name = "text_3_b";
	this.text_3_b.textAlign = "right";
	this.text_3_b.lineHeight = 13;
	this.text_3_b.lineWidth = 305;
	this.text_3_b.parent = this;
	this.text_3_b.setTransform(386.65,-56.1507);

	this.text_2_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_2_b.name = "text_2_b";
	this.text_2_b.textAlign = "right";
	this.text_2_b.lineHeight = 13;
	this.text_2_b.lineWidth = 305;
	this.text_2_b.parent = this;
	this.text_2_b.setTransform(386.65,-124.3507);

	this.text_1_b = new cjs.Text("", "13px 'Arial'", "#072146");
	this.text_1_b.name = "text_1_b";
	this.text_1_b.textAlign = "right";
	this.text_1_b.lineHeight = 13;
	this.text_1_b.lineWidth = 305;
	this.text_1_b.parent = this;
	this.text_1_b.setTransform(386.65,-190.5508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1_b},{t:this.text_2_b},{t:this.text_3_b},{t:this.text_4_b},{t:this.text_5_b},{t:this.text_6_b}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipo_columns, new cjs.Rectangle(-374.3,-192.5,832,387), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.bf = new lib.pregunta_columns_a_mc();
	this.bf.name = "bf";
	this.bf.parent = this;
	this.bf.setTransform(140,0,0.5963,0.5963,0,0,0,29.9,27.6);

	this.bt = new lib.pregunta_columns_a_mc();
	this.bt.name = "bt";
	this.bt.parent = this;
	this.bt.setTransform(-140,0,0.5963,0.5963,0,0,0,29.9,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bt},{t:this.bf}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-156.2,-16.7,312.4,33.5), null);


(lib.tipo_checkbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		var that = this
		
		var question
		
		var NUM_BTNS = 8
		var BTN_NAME = "answer_mc_"
		var moving = 0
		var counter = 0
		var answers
		
		
		
		this.activate = function(questionObj) {
			question = questionObj;
			moving = 0
			counter = 0
			answers = parseAnswers()
			initBtns()
		}
		
		this.check = function(){
			var allAnswers = []
			for (var i = 1; i <= NUM_BTNS; i++) {
				if(that[BTN_NAME + i ]._answer) allAnswers.push(that[BTN_NAME + i]._answer)
			}
		
			return allAnswers.join(',') == question.correcta.trim()
		}
		
		this.disable = function () {
			for (var i = 1; i <= NUM_BTNS; i++) {
				that[BTN_NAME + i ].bt.removeAllEventListeners()
				that[BTN_NAME + i ].bf.removeAllEventListeners()
				that[BTN_NAME + i ].bt.cursor = 'default'
				that[BTN_NAME + i ].bf.cursor = 'default'
			}
		}
		
		
		function initBtns() {
			for (var i = 1; i <= NUM_BTNS; i++) {
				initBtn(i)
			}
		}
		
		function initBtn(i) {
			var btn = that[BTN_NAME + i ]
			btn.text = that['text_' + i ]
		
			btn.visible = true
			btn.text.visible = true
		
			//console.log(btn)
		
			if(btn.bt.checkbox.currentFrame > 0) btn.bt.checkbox.gotoAndStop(0)
			if(btn.bf.checkbox.currentFrame > 0) btn.bf.checkbox.gotoAndStop(0)
			
		
			// if(question['opcion_' + i] == "" || question['opcion_' + i] == null ) {
			// 	btn.visible = false
			// 	btn.text.visible = false
			// }
		
			btn.bt.cursor = "pointer"
			btn.bf.cursor = "pointer"
			btn._id = i
			
			btn.text.text = answers.items[i - 1]
			btn._answer = 0
		
			btn.bt.on('click', function(){
		
				this.parent._answer = 1
				this.checkbox.gotoAndStop('on')
				this.parent.bf.checkbox.gotoAndStop('off')
				if(checkAllBtns()) that.parent.showCheck()
			})
		
			btn.bf.on('click', function(){
		
				this.parent._answer = 2
				this.checkbox.gotoAndStop('on')
				this.parent.bt.checkbox.gotoAndStop('off')
				if(checkAllBtns()) that.parent.showCheck()
			})
		}
		
		
		function checkAllBtns() {
			var count = 0;
			for (var i = 1; i <= counter; i++) {
				if(that[BTN_NAME + i ]._answer > 0) count++
			}
			return count == counter
		}
		
		
		function parseAnswers() {
			var answersObj = { a: [], b: [], items: [] }
			
			var splittedAnswer = question['opcion_' + 1].split('/')
			answersObj.a = question['opcion_' + 2]
			answersObj.b = question['opcion_' + 3]
		
			that['text_a'].text = question['opcion_' + 2]
			that['text_b'].text = question['opcion_' + 3]
		
			for (var i = 0; i < splittedAnswer.length; i++) {
			
				if ( !(splittedAnswer[i] == "" || splittedAnswer[i] == null) ) {
					counter++
					answersObj.items.push(splittedAnswer[i].trim())
				}
			
			}
		
			return answersObj
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.answer_mc_8 = new lib.Symbol2();
	this.answer_mc_8.name = "answer_mc_8";
	this.answer_mc_8.parent = this;
	this.answer_mc_8.setTransform(186.15,153.9);

	this.answer_mc_7 = new lib.Symbol2();
	this.answer_mc_7.name = "answer_mc_7";
	this.answer_mc_7.parent = this;
	this.answer_mc_7.setTransform(186.15,115.75);

	this.answer_mc_6 = new lib.Symbol2();
	this.answer_mc_6.name = "answer_mc_6";
	this.answer_mc_6.parent = this;
	this.answer_mc_6.setTransform(186.15,77.7);

	this.answer_mc_5 = new lib.Symbol2();
	this.answer_mc_5.name = "answer_mc_5";
	this.answer_mc_5.parent = this;
	this.answer_mc_5.setTransform(186.15,39.65);

	this.answer_mc_4 = new lib.Symbol2();
	this.answer_mc_4.name = "answer_mc_4";
	this.answer_mc_4.parent = this;
	this.answer_mc_4.setTransform(186.15,1.6);

	this.answer_mc_3 = new lib.Symbol2();
	this.answer_mc_3.name = "answer_mc_3";
	this.answer_mc_3.parent = this;
	this.answer_mc_3.setTransform(186.15,-36.45);

	this.answer_mc_2 = new lib.Symbol2();
	this.answer_mc_2.name = "answer_mc_2";
	this.answer_mc_2.parent = this;
	this.answer_mc_2.setTransform(186.15,-74.5);

	this.answer_mc_1 = new lib.Symbol2();
	this.answer_mc_1.name = "answer_mc_1";
	this.answer_mc_1.parent = this;
	this.answer_mc_1.setTransform(186.15,-112.55);

	this.text_8 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_8.name = "text_8";
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 305;
	this.text_8.parent = this;
	this.text_8.setTransform(-427.05,146.2993);

	this.text_7 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_7.name = "text_7";
	this.text_7.lineHeight = 20;
	this.text_7.lineWidth = 305;
	this.text_7.parent = this;
	this.text_7.setTransform(-427.05,107.4993);

	this.text_6 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_6.name = "text_6";
	this.text_6.lineHeight = 20;
	this.text_6.lineWidth = 305;
	this.text_6.parent = this;
	this.text_6.setTransform(-427.05,68.7993);

	this.text_5 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_5.name = "text_5";
	this.text_5.lineHeight = 20;
	this.text_5.lineWidth = 305;
	this.text_5.parent = this;
	this.text_5.setTransform(-427.05,30.0993);

	this.text_4 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_4.name = "text_4";
	this.text_4.lineHeight = 20;
	this.text_4.lineWidth = 305;
	this.text_4.parent = this;
	this.text_4.setTransform(-427.05,-8.6507);

	this.text_3 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_3.name = "text_3";
	this.text_3.lineHeight = 20;
	this.text_3.lineWidth = 305;
	this.text_3.parent = this;
	this.text_3.setTransform(-427.05,-47.3507);

	this.text_2 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_2.name = "text_2";
	this.text_2.lineHeight = 20;
	this.text_2.lineWidth = 305;
	this.text_2.parent = this;
	this.text_2.setTransform(-427.05,-86.0507);

	this.text_b = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_b.name = "text_b";
	this.text_b.textAlign = "center";
	this.text_b.lineHeight = 20;
	this.text_b.lineWidth = 273;
	this.text_b.parent = this;
	this.text_b.setTransform(320.45,-155.6507);

	this.text_a = new cjs.Text("", "18px 'Arial'", "#072146");
	this.text_a.name = "text_a";
	this.text_a.textAlign = "center";
	this.text_a.lineHeight = 18;
	this.text_a.lineWidth = 273;
	this.text_a.parent = this;
	this.text_a.setTransform(38.45,-155.6507);

	this.text_1 = new cjs.Text("", "20px 'Arial'", "#072146");
	this.text_1.name = "text_1";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 305;
	this.text_1.parent = this;
	this.text_1.setTransform(-427.05,-124.7507);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text_a},{t:this.text_b},{t:this.text_2},{t:this.text_3},{t:this.text_4},{t:this.text_5},{t:this.text_6},{t:this.text_7},{t:this.text_8},{t:this.answer_mc_1},{t:this.answer_mc_2},{t:this.answer_mc_3},{t:this.answer_mc_4},{t:this.answer_mc_5},{t:this.answer_mc_6},{t:this.answer_mc_7},{t:this.answer_mc_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tipo_checkbox, new cjs.Rectangle(-429,-157.6,888,328.29999999999995), null);


(lib.preguntas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var that = this;
		// var answersType = ['true_false', 'multichoice', 'multiple', 'columns', 'checkbox']
		var answersType = ['true_false', 'multichoice', 'multiple', 'columns', 'checkbox']
		var currentAnswerType = "";
		
		var question;
		
		// Text related variables
		// var MAX_LINES = 3;
		
		// var questionTextInitialY = that.question_mc.text.y;
		// var answerTextInitialY = that.answer_mc_1.text.y;
		
		this.activate = function (questionObj, index) {
		
			question = questionObj;
			hideAnswersType();
			setAnswerType();
			activateAnswersType();
			initTexTFields();
			initBtns();
			//that.pager_mc.text.text = index;
			that.pager_mc.gotoAndStop(index);
			//centrarTexto(that.pager_mc);
			that.retros.gotoAndStop(0)
		
		}
		
		this.disable = function () {
			that.next_mc.removeAllEventListeners();
			that.check_mc.removeAllEventListeners();
			that.check_mc.visible = false;
			that.check_mc.visible = false;
		}
		
		function setAnswerType() {
			switch (question.tipo) {
				case "V/F":
					currentAnswerType = answersType[0]
					break;
				case "opcion_multiple":
					currentAnswerType = answersType[1]
					break;
				case "multiple":
					currentAnswerType = answersType[2]
					break;
				case "columnas":
					currentAnswerType = answersType[3]
					break;
				case "checkbox":
					currentAnswerType = answersType[4]
					break;
				default:
					break;
			}
		}
		
		function activateAnswersType() {
			that[currentAnswerType].visible = true;
			that[currentAnswerType].activate(question)
		}
		
		function hideAnswersType() {
			for (var i = 0; i < answersType.length; i++) {
				that[answersType[i]].visible = false;
			}
		}
		
		function initTexTFields() {
		
			that.question_mc.text.text = question.pregunta;
			centrarTexto(that.question_mc);
		
		}
		
		function initTextAnswers(i) {
			that['answer_mc_' + i].initialY = that['answer_mc_' + i].y;
			that['answer_mc_' + i].text.centerTextVertically = centerTextVertically;
		}
		
		// Ajustes JGC
		//function check() {
		this.check = function(){
			//that.parent.insertRespuestaUsuario(that[currentAnswerType].check());
			if (that[currentAnswerType].check()) {
				showQuestionRetro('good')
				that.parent.setAnswers(true)
			} else {
				showQuestionRetro('bad')
				that.parent.setAnswers(false)
			}
		}
		
		function showQuestionRetro(type) {
			console.log(type)
			if (type == 'good') {
				that.retros.gotoAndPlay('good')
			} else {
				that.retros.gotoAndPlay('bad')
			}
			that.next_mc.visible = true
			that.check_mc.visible = false
		}
		
		function initBtns() {
			that.next_mc.visible = false
			that.check_mc.visible = false
			that.next_mc.cursor = 'pointer'
			that.check_mc.cursor = 'pointer'
		
			that.next_mc.on('click', function () {
				that.parent.next();
			})
		
			that.check_mc.on('click', function () {
				that.check(); // se le aumento that. JGC
				that[currentAnswerType].disable();
			})
		}
		
		this.getQuestion = function () {
			return question
		}
		
		this.showCheck = function () {
			that.check_mc.visible = true;
		}
		// agregacion JGC
		this.disabledBtns = function(){
			that[currentAnswerType].disable();
		}
		
		// Para CENTRAR TEXTOS
		function centrarTexto(txt) {
			var alto_max = 60;
			var medidas_ = txt.text.getBounds();
			//console.log(alto_max + " - "  + medidas_.height + " / 2 = " + ((alto_max - medidas_.height) / 2));
			txt.text.y = (alto_max - medidas_.height) / 2;
			//console.log("MOVER Y:: " + txt.text.y);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// next
	this.next_mc_antes = new lib.copiaboton01_1();
	this.next_mc_antes.name = "next_mc_antes";
	this.next_mc_antes.parent = this;
	this.next_mc_antes.setTransform(697.3,-88.6,0.3477,0.3475);
	new cjs.ButtonHelper(this.next_mc_antes, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.next_mc_antes).wait(1));

	// retrofinal
	this.retros = new lib.copiaretro_final();
	this.retros.name = "retros";
	this.retros.parent = this;
	this.retros.setTransform(-513,-366.75);

	this.timeline.addTween(cjs.Tween.get(this.retros).wait(1));

	// checkbox
	this.checkbox = new lib.tipo_checkbox();
	this.checkbox.name = "checkbox";
	this.checkbox.parent = this;
	this.checkbox.setTransform(-28.85,103.55);

	this.timeline.addTween(cjs.Tween.get(this.checkbox).wait(1));

	// columns
	this.columns = new lib.tipo_columns();
	this.columns.name = "columns";
	this.columns.parent = this;
	this.columns.setTransform(-28.85,129.55);

	this.timeline.addTween(cjs.Tween.get(this.columns).wait(1));

	// multiple
	this.multiple = new lib.tipo_multichoice();
	this.multiple.name = "multiple";
	this.multiple.parent = this;
	this.multiple.setTransform(-21.15,140.35);

	this.timeline.addTween(cjs.Tween.get(this.multiple).wait(1));

	// multichoice
	this.multichoice = new lib.tipo_multiple();
	this.multichoice.name = "multichoice";
	this.multichoice.parent = this;
	this.multichoice.setTransform(-28.85,53.15);

	this.timeline.addTween(cjs.Tween.get(this.multichoice).wait(1));

	// true_false
	this.true_false = new lib.tipo_true_false();
	this.true_false.name = "true_false";
	this.true_false.parent = this;
	this.true_false.setTransform(-28.85,113.05);

	this.timeline.addTween(cjs.Tween.get(this.true_false).wait(1));

	// check
	this.next_mc = new lib.siguiente();
	this.next_mc.name = "next_mc";
	this.next_mc.parent = this;
	this.next_mc.setTransform(382.4,216.65,1,1,0,0,0,81,23.3);

	this.check_mc = new lib.enviar();
	this.check_mc.name = "check_mc";
	this.check_mc.parent = this;
	this.check_mc.setTransform(311.35,216.65,1,1,0,0,0,81,23.3);

	this.check_mc_antes = new lib.copiaboton01_1copy();
	this.check_mc_antes.name = "check_mc_antes";
	this.check_mc_antes.parent = this;
	this.check_mc_antes.setTransform(705.2,209.1,0.3477,0.3475);
	new cjs.ButtonHelper(this.check_mc_antes, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.check_mc_antes},{t:this.check_mc},{t:this.next_mc}]}).wait(1));

	// paginacion
	this.pager_mc = new lib.pagination();
	this.pager_mc.name = "pager_mc";
	this.pager_mc.parent = this;
	this.pager_mc.setTransform(-424.05,-207.65);

	this.timeline.addTween(cjs.Tween.get(this.pager_mc).wait(1));

	// question
	this.question_mc = new lib.preg();
	this.question_mc.name = "question_mc";
	this.question_mc.parent = this;
	this.question_mc.setTransform(65.55,-155.35,1,1,0,0,0,410.1,44.5);

	this.timeline.addTween(cjs.Tween.get(this.question_mc).wait(1));

}).prototype = getMCSymbolPrototype(lib.preguntas, new cjs.Rectangle(-620.3,-409,1392.1,779.9), null);


// stage content:
(lib.COMMET_VV_evaluacion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{seleccionar:822,comenzar:1396,act:1456,retros:1512});

	// timeline functions:
	this.frame_2 = function() {
		//this.gotoAndPlay('act');
		var that = this;
		
		if(that.pagesService){
			that.attempts = parseInt(that.pagesService.getIntentos());
			that.score = parseInt(that.pagesService.getCalif());
			var the_attempts = (that.attempts===null || that.attempts==="undefined" || that.attempts==="" || isNaN(that.attempts));
			var the_score = (that.score===null || that.score==="undefined" || that.score==="" || isNaN(that.score));
			
			
			console.log(that.attempts + " ------------ " + that.score);
			if(the_attempts || the_score){
				the_attempts = 0;
				the_score = 0;
			}else{
				if(that.attempts>=2 || that.score>=80){
					this.gotoAndPlay("retros");
				}
			}
			
		}
	}
	this.frame_140 = function() {
		this.stop();
		this.btn1.addEventListener("click",hazIni.bind(this));
		function hazIni(){
			this.play();
		}
	}
	this.frame_145 = function() {
		playSound("_6_Diapositiva5_01_2");
	}
	this.frame_820 = function() {
		this.btn_sel.visible = false;
	}
	this.frame_821 = function() {
		this.stop();
		
		this.avatar = 0;
		this.btn_sel.visible = false;
		
		this.sel1.id = 1;
		this.sel2.id = 2;
		this.sel1.addEventListener("click",hazSel.bind(this));
		this.sel2.addEventListener("click",hazSel.bind(this));
		
		function hazSel(e){
			this.avatar = e.currentTarget.id;
			this.sel1.gotoAndStop(0);
			this.sel2.gotoAndStop(0);
			
			e.currentTarget.gotoAndStop(1);
			//this.btn_sel.visible = true;
			
			this.play();
		}
		/*
		this.btn_sel.addEventListener("click",hazSig.bind(this));
		function hazSig(){
			this.play();
		}*/
	}
	this.frame_822 = function() {
		this.anima1.visible = false;
		this.anima2.visible = false;
		
		this["anima"+this.avatar].visible = true;
	}
	this.frame_858 = function() {
		playSound("_6_Diapositiva6_01");
	}
	this.frame_1395 = function() {
		this.stop();
		this.btn_ini.addEventListener("click",hazIni.bind(this));
		function hazIni(){
			this.btn_ini.visible = false;
			this["anima"+this.avatar].gotoAndPlay(1);
		}
	}
	this.frame_1469 = function() {
		this.stop();
		this.marca.visible = false;
		//this.marca2.visible = false;
		
		//this.avatar = 1;
		
		this.marca.gotoAndStop('t' + this.avatar + '1');
		this.marca.visible = true;
		
		this.play();
	}
	this.frame_1497 = function() {
		//this.stop();
		
		
		
		
		this.ev.visible = false;
		this.conte_mc.visible = false;
	}
	this.frame_1498 = function() {
		this.stop();
		
		var that = this;
		
		this.vistos_array = [0,0,0,0,0];
		this.conta_preg = 0;
		this.conta_seccion=0;
		this.conta_errores = 0;
		this.conta_aciertos = 0;
		
		
		this.calif_anterior = 0;
		
		this.attempts = 0;
		this.score = 0;
		this.answers_topics_totals = [0,0,0,0,0];
		this.answers_topics_corrects = [0,0,0,0,0];
		
		var TOTAL_TOPICS = 5;
		var TOTAL_QUESTIONS = 10;
		var questions = [];
		var index = 0;
		var minScore = 80;
		var answers = []
		var questionGral=[];
		
		
		//
		
		this.marca.gotoAndStop('t' + this.avatar + '1');
		this.marca.visible = true;
		
		function fetchQuestions() {
			if(that.pagesService){
				questionGral = that.pagesService.regresaBDPreguntas();
				
				that.attempts = that.pagesService.getIntentos();
				console.log("INTENTOS:: " + that.attempts);
				if(that.attempts===null || that.attempts==="undefined" || that.attempt==="" || isNaN(that.attempts)){
					that.attempts = 0;
				}
			}else{
				questionGral=[
				{'topico':'videoclip','tema':'tema1','pregunta':'¿Cuáles son las fases que componen la metodología de COMMET?','opcion_1':'Conocer, Comprender, Conectar, Concretar','opcion_2':'Buscar, Calificar, Contactar, Finalizar','opcion_3':'Seleccionar, Investigar, Comunicar, Presentar','opcion_4':'Entender, Comprender, Contactar, Negociar','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Correcto! COMMET es una metodología de cuatro fases para Conocer, Comprender, Conectar y Concretar con mejores prospectos.','retro_mal':'¡Incorrecto! Las fases de COMMET responden a una metodología para Conocer, Comprender, Conectar y Concretar con mejores prospectos para crear más oportunidades de negocios.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'2. ¿Cuántas líneas estratégicas se definieron para el Proyecto Evolución? ','opcion_1':'a) Tres','opcion_2':'b) Cinco','opcion_3':'c) Seis','opcion_4':'d) Diez','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Correcto! Son seis líneas estratégicas que buscan consolidar la marca Solistica: Service Delivery, Organización, Esfera, Marca, Performance Management y Comercial ','retro_mal':'¡Incorrecto! Son seis líneas estratégicas que buscan consolidar la marca Solistica: Service Delivery, Organización, Esfera, Marca, Performance Management y Comercial ','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'3. ¿Cuál es la aspiración de Solistica ante el Proyecto Evolución?','opcion_1':'a) Convertirnos en una empresa 3PL con servicios integrales de logística','opcion_2':'b) Convertirnos en el operador logístico líder en América Latina','opcion_3':'c) Convertirnos en proveedores de servicios logísticos para nuestros Clientes','opcion_4':'d) Fortalecer nuestro portafolio de servicios e incorporar nuevas capacidades','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! Esta aspiración surge después del fortalecimiento de nuestro portafolio de productos e incorporar nuevas capacidades.','retro_mal':'¡Incorrecto! Evolución surge con la aspiración de convertirnos en el operador logístico líder en América.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'4. COMMET nos permitirá lograr que nuestros clientes dejen de vernos como proveedores de servicios y nos vean como…','opcion_1':'a) Vendedores profesionales y altamente capacitados','opcion_2':'b) Solucionadores de problemas con productos espefícinos','opcion_3':'c) Recurso comercial o de negocios','opcion_4':'d) Recurso estratégico','opcion_5':'','opcion_6':'','correcta':'4','retro_bien':'¡Correcto! Esta metodología nos permitirá posicionarnos para que nuestros clientes dejen de vernos como proveedores de servicios y nos vean como un recurso estratégico.','retro_mal':'¡Incorrecto! Con COMMET queremos llevar a otro nivel la percepción de nuestros clientes para que nos vean como un recurso estratégico para su negocio. ','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'5. ¿Cuál de la siguientes, no es una de las fases de COMMET?','opcion_1':'a) Concretar','opcion_2':'b) Comprender','opcion_3':'c) Seleccionar','opcion_4':'d) Conectar','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Correcto! Las cuatro fases son: Conocer, Comprender, Conectar y Concretar.','retro_mal':'¡Incorrecto! La fase que no corresponde a la metodología COMMET es "Seleccionar".','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'6. ¿Qué es COMMET?','opcion_1':'a) Un proyecto estratetégico integrado por seis líneas de negocios que buscan consolidar la marca Solistica.','opcion_2':'b) Una metodología comercial que nos ofrece herramientas y técnicas para posicionarnos como generadores de valor ante nuestros clientes para gestionar nuevas oportunidades y crear relaciones de negocio a largo plazo.','opcion_3':'c) Es la fase del proceso comercial que busca entender a detalle el negocio de nuestros clientes, sus objetivos, estrategias y los retos que enfrenta.','opcion_4':'d) Es una herramienta para darnos visibilidad profesional ante nuestros clientes para la mejora de los servicios y el rediseño de nuestra estructura.','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! COMMET es una metodología que nos ofrece las herramientas para que nuestros clientes nos perciban como un recurso estratégico y así gestionar nuevas oportunidades y crear relaciones a largo plazo.','retro_mal':'¡Incorrecto! COMMET es una metodología que nos ofrece las herramientas para que nuestros clientes nos perciban como un recurso estratégico y así gestionar nuevas oportunidades y crear relaciones a largo plazo.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'videoclip','tema':'tema1','pregunta':'7. Nombre del proyecto que consta de 6 líneas estratégicas con el objetivo de posicionar a Solistica.','opcion_1':'a) Evolución','opcion_2':'b) COMMET','opcion_3':'c) LinkedIn','opcion_4':'d) Alineación con influencia','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Correcto! Con este proyecto buscamos mejorar la ejecución de nuestros servicios, rediseñando nuestra estructura, buscando la excelencia operativa y estandarizando nuestro modelo comercial en todas nuestras regiones.','retro_mal':'¡Incorrecto! Evolución es el proyecto con el que buscamos mejorar la ejecución de nuestros servicios, rediseñando nuestra estructura, buscando la excelencia operativa y estandarizando nuestro modelo comercial en todas nuestras regiones a través de seis líneas estratégicas.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conocer','tema':'tema2','pregunta':'1. Has hecho contacto con empresas importantes, tú crees que pueden ser clientes potenciales para Solistica; sin embargo, sabes que antes de invertir tiempo con algunos Leads, debes calificarlos ¿cómo lo haces?','opcion_1':'a) Utilizando el CRM para conocer si existe oportunidad y potencialidad para crear relaciones a largo plazo.','opcion_2':'b) Hacer citas con todos los Leads para saber qué puedes ofrecerles.','opcion_3':'c) Estudiar sus páginas web para ver si hay oportunidad de negocio.','opcion_4':'d) Conocer su dirección y perfil del proceso logístico.','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Correcto! Esta es la herramienta técnica que te permitirá saber si se cuenta con lo necesario para que ese prospecto se convierta en un cliente de Solistica.','retro_mal':'¡Incorrecto! Para estandarizar los procesos de calificación, es necesario apoyarse en la herramienta tecnológica que facilita este proceso: CRM.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conocer','tema':'tema2','pregunta':'2. Mateo Uribe es un vendedor que aprovecha las herramientas de las redes sociales para contactar y conocer a clientes potenciales, él te ha dicho que se ha posicionado mejor como un profesional con relación a su visibilidad de LinkedIn, ¿a través de qué medida crees que lo ha logrado?','opcion_1':'a) Valor de oportunidad','opcion_2':'b) Venta Social','opcion_3':'c) Acercamiento a contactos a través de la red de LinkedIn','opcion_4':'d) Actualización de la información pública','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! La venta social (Social Selling Index) es una medida que incrementa tu visibilidad profesional en LinkedIn para atraer un público específico y fomentar tu percepción del cliente como generador de valor.','retro_mal':'¡Incorrecto! La medida para incrementar tu visibilidad profesional en LinkedIn es la venta social (Social Selling Index), ésta busca atraer a un público específico y fomentar tu percepción del cliente como generador de valor.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conocer','tema':'tema2','pregunta':'3. ¿Para qué calificamos la oportunidad de nuestros prospectos?','opcion_1':'a) Para clasificar nuestra cartera de clientes.','opcion_2':'b) Nos permite seleccionar solo aquellos prospectos con los que sabemos que podemos ganar.','opcion_3':'c) Nos permite conocer los criterios que son importantes para vender nuestras soluciones.','opcion_4':'d) Nos permite saber si tiene el potencial de crear valor para ambas compañías.','opcion_5':'','opcion_6':'','correcta':'4','retro_bien':'¡Correcto! Calificar la oportunidad de nuestros prospectos nos permite optimizar nuestros esfuerzos con clientes que tienen potencial para crear valor.','retro_mal':'¡Incorrecto! Calificar la oportunidad de nuestros prospectos nos permite saber si tiene el potencial para crear valor al trabajar juntos.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conocer','tema':'tema2','pregunta':'4. Son algunos criterios para calificar la oportunidad de nuestros prospectos...','opcion_1':'a) Presencia, venta e industria','opcion_2':'b) Solución, historial y antigüedad','opcion_3':'c) Valor de oportunidad, Business fit y calidad de la información','opcion_4':'d) Calidad de mentoring, fuerza del coach y solution fit','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Correcto! El valor de oportunidad, el Business fit, la calidad de información, la influencia con el Tomador de Deciciones y la fuerza del Gatekeeper son solo algunos de los criterios que nos permiten calificar la oportunidad de nuestros prospectos.','retro_mal':'¡Incorrecto! Estos criterios no son considerados para calificar la oportunidad de nuestros prospectos.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'1. Mario Cruz te habló de la empresa en la que trabaja en una reunión donde coincidieron, después de eso no lo has vuelto a ver, pero con el nombre de la empresa pudiste investigar más y descubriste que Solistica podría contribuir a su estrategia. ¿Qué tipo de jugador fue Mario?','opcion_1':'a) Coach','opcion_2':'b) Gatekeeper','opcion_3':'c) Contacto','opcion_4':'d) Tomador de Decisiones','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Muy bien! Mario fue la persona que te permitió tener el primer contacto con la empresa.','retro_mal':'¡Incorrecto! Mario sólo ha sido un medio para conocer al posible cliente; sin embargo, no ha participado de ninguna otra manera en tu estrategia.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'2. Visitaste la página web de la empresa con la que quieres hablar de negocios y obtuviste información sobre su cultura y filosofía organizacional, ¿a qué dimensión de la información corresponden estos datos?','opcion_1':'a) Dirección y perfil del negocio','opcion_2':'b) Situación de la industria y tendencias','opcion_3':'c) Estructura organizacional y jugadores clave','opcion_4':'d) Dirección y perfil del proceso logístico','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Bien hecho! Recuerda que este primer cuadrante te permite conocer la información general del prospecto, en ella se incluye la filosofía organizacional, el perfil, cultura, etc.','retro_mal':'¡Incorrecto! Este cuadrante requiere información más estratégica sobre el posible cliente, no aquella que se encuentra a la mano en los sitios públicos y que la empresa quiere mostrar en general.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'3. Alejandro Morales es una persona muy reconocida dentro de la organización con la que quieres conectar, a pesar de sus múltiples responsabilidades, siempre tiene tiempo para escucharte y orientarte; gracias a él has conseguido información muy valiosa, ¿qué tipo de jugador es?','opcion_1':'a) Gatekeeper','opcion_2':'b) Coach','opcion_3':'c) Contacto','opcion_4':'d) Tomador de Decisiones','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! Alejandro es un Coach que facilita tu camino y el desarrollo de tu estrategia. ¡Él quiere verte ganar!','retro_mal':'¡Incorrecto! Esta opción no habla de quien quiere verte ganar.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'4. Es la fase de COMMET donde tienes la misión de investigar profundamente a tu prospecto y analizar las maneras en que existe alineacion entre ambas compañías.','opcion_1':'a) Conocer','opcion_2':'b) Comprender','opcion_3':'c) Conectar','opcion_4':'d) Concretar','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Así es! Comprender significa entender el negocio del prospecto, lo que te ayudará a encontrar puntos de encuentro para crear una relación de negocios a largo plazo.','retro_mal':'¡Incorrecto! Esta fase no busca entender a profundidad el negocio del cliente.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'5. Para comprender mejor a tu prospecto, has decidido realizar visitas a sus instalaciones y obtener información interna, pero también has obtenido datos públicos de gran utilidad. Además de esta información, has podido observar e interpretar datos que solo conseguiste a través del análisis que lograste, ¿qué tipo de información es?','opcion_1':'a) Datos','opcion_2':'b) Hechos','opcion_3':'c) Externa','opcion_4':'d) Insights','opcion_5':'','opcion_6':'','correcta':'4','retro_bien':'¡Correcto! Es la experiencia única que adquieres de la relación con personas dentro de la organización.','retro_mal':'¡Incorrecto! Esta información es valiosa, pero no es resultado de tu experiencia dentro de la Organización.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'6. En tu investigación hacia una compañía en particular has identificado a Adrián Ramírez, él normalmente establece la prioridad de los proyectos internos, tiene una visión hacia el futuro y tiende a enfocarse en el valor del los negocios más que en sus costos. Has intentado localizarlo para entrevistarte con él pero es de difícil acceso, ¿qué rol crees que puede tener él en tu proceso?','opcion_1':'a) Contacto','opcion_2':'b) Coach','opcion_3':'c) Gatekeeper','opcion_4':'d) Tomador de Decisiones','opcion_5':'','opcion_6':'','correcta':'4','retro_bien':'¡Correcto! Adrián es quien puede comprar lo que tú vendes: Valor y, seguramente, apreciará tu comprensión de su negocio.','retro_mal':'¡Incorrecto! Adrián es quien compra valor y conoce la estrategia y situación actual de negocio.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'7. Has recopilado gran cantidad de información por varios medios, sin embargo, sin orden, es poco útil, ¿cuál es la herramienta que te puede ayudar a clasificarla y segmentarla?','opcion_1':'a) Business Fit','opcion_2':'b) Solution fit','opcion_3':'c) Red de contactos','opcion_4':'d) Matriz PORE','opcion_5':'','opcion_6':'','correcta':'4','retro_bien':'¡Correcto! Esta matriz te ayudará a clasificar la información en cuatro cuadrantes: Perfil, Objetivos, Retos y Estrategias','retro_mal':'¡Incorrecto! Antes de realizar una propuesta de negocio, debes entender profundamente el perfil del cliente, sus desafíos, retos y estrategias.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'8. Después de una exhaustiva investigación e identificar los puntos de encuentro específicos en donde Solistica y tu cliente pueden crear valor, ¿qué herramienta utilizas para posicionar esta sinergia?','opcion_1':'a) Presentación que posicione el Business Fit','opcion_2':'b)Presentación que exponga la Solution Fit','opcion_3':'c) Gráfico de la red de contactos','opcion_4':'d) Documento que describe la matriz PORE','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Muy bien! El Business Fit está enfocado en mostrar al prospecto la relación a largo plazo que pueden establecer para generar valor en conjunto.','retro_mal':'¡Incorrecto! Éste no es un documento enfocado en mostrar la relación a largo plazo que se puede establecer en conjunto.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'9. Te estás preparando para tener la reunión con el Tomador de Decisiones de un gran prospecto, para ello sabes lo importante que es contar con el Business Fit, ¿en qué orden realizas los pasos para elaborarlo?','opcion_1':'1. Investigo el negocio, 2. Identifico los objetivos de negocio del prospecto, 3. Investigo el impacto financiero, 4. Selecciono nuestros diferenciadores','opcion_2':'1. Identifico los objetivos de negocio del prospecto, 2. Investigo el impacto financiero, 3. Investigo el negocio y la solución, 4. Selecciono nuestros diferenciadores','opcion_3':'1. Selecciono nuestros diferenciadores, 2. Investigo el impacto financiero, 3. Investigo el negocio y la solución, 4. Selecciono los objetivos del prospecto','opcion_4':'1. Investigo el impacto financiero, 2. Selecciono los objetivos del prospecto, 3. Selecciono nuestros diferenciadores, 4. Investigo el negocio y la solución','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Muy bien! Éste es el camino correcto para encontrar los puntos de conversación con el cliente y mostrar cómo creamos valor al sumarnos a su estrategia','retro_mal':'¡Incorrecto! Recuerda que el inicio siempre es comprender al cliente y elegir aquellos objetivos donde podemos sumar para después mostrar los diferenciadores que nos hacen la mejor opción.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'10. Propone un producto o servicio para atender las características particulares y necesidades del cliente con el que Solistica hace negocios a corto plazo.','opcion_1':'a) Business Fit','opcion_2':'b) Solution Fit','opcion_3':'c) Red de contactos','opcion_4':'d) Matriz PORE','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Muy bien! El Solution Fit está enfocado en los servicios o productos y sus precios, resuelven necesidades específicas a corto plazo.','retro_mal':'¡Incorrecto! El documento que buscas, habla de las opciones específicas que le puedes dar al cliente a corto plazo.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Comprender1y2','tema':'tema3','pregunta':'11. ¿Qué descripción define mejor una reunión de exploración?','opcion_1':'a) Es el momento más importante del proceso. Es cuando te presentas ante el Tomador de Decisiones para presentarle tu propuesta de valor.','opcion_2':'b) Es el primer contacto que haces con la compañía del prospecto para tener acceso a sus colaboradores e información que te permita iniciar tu investigación.','opcion_3':'c) Es una sesión donde te reúnes con un Coach para validar la información que obtuviste e interpretaste acerca de la compañía. Además te ofrecen una ventaja competitiva.','opcion_4':'d) Es una reunión que tienes con tu equipo de trabajo para calificar la oportunidad de tu prospecto y definir si existe posibilidad de crear una alineación entre ambas compañías.','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Correcto! Estas sesiones son la oportunidad para validad tu entendimiento y aprovechar a tus Coaches para obtener una ventaja ante la competencia.','retro_mal':'¡Incorrecto! Las juntas de exploración ocurren usualmente con tu Coach para valodar la información de tu investigación.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conectar','tema':'tema4','pregunta':'1. Alberto Soto es una persona con mucha credibilidad dentro de la organización que estás investigando, el CEO le tiene mucha confianza por sus acertados consejos, cuando te escuchó supo que eras de gran valor para sus objetivos y te programó una cita con el Tomador de Decisiones, ¿cómo se llama esta estrategia de acercamiento?','opcion_1':'a) Agenda a través de contactos','opcion_2':'b) Carta de presentación','opcion_3':'c) Introducción por parte del Coach','opcion_4':'d) Solicitudes de la Gerencia','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Muy bien! Aprovechaste las habilidades de este Coach para llegar fácilmente con el Tomador de Decisiones','retro_mal':'¡Incorrecto! Recuerda que en esta estrategia requieres de un gran aliado que tenga fácil acceso al Tomador de Decisiones.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conectar','tema':'tema4','pregunta':'2. Entraste a un proceso de licitación para crear una relación con un cliente muy importante. Tu estrategia de participación en estos procesos debe basarse en tu capacidad para asumir riesgos y atreverte a apostar todo tu trabajo y esfuerzo invertido aún existiendo altas posibilidades de perder la licitación.','opcion_1':'FALSO','opcion_2':'VERDADERO','opcion_3':'','opcion_4':'','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Correcto! Tu estrategia de participación en estos procesos debe basarse en las posibilidades reales de éxito: No compitas si no puedes ganar. Aléjate si tienes altas probabilidades de perder.','retro_mal':'¡Incorrecto! Tu estrategia de participación en estos procesos debe basarse en las posibilidades reales de éxito: No compitas si tienes altas probabilidades de perder.','tipo':'falso_verdadero','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conectar','tema':'tema4','pregunta':'3. El Tomador de Decisiones se caracteriza, entre otras cosas, por:','opcion_1':'a) Tener el presupuesto e interés para comprar valor, puede decir que "sí" cuando todos dicen que "no" y viceversa, raramente acepta ser quien tiene la última palabra y es difícil de impresionar.','opcion_2':'b) Restringir tu acceso a la compañía, bloquear tu estrategia de venta y limitar tu efectividad.','opcion_3':'c) Ayudar a darle dirección a las ideas, tiene disposición para apoyar en el desarrollo de la estrategia de negocio y proporciona información completa y confiable sobre la organización.','opcion_4':'d) Puede ser cualquier persona. Son aquellas que no necesariamente participarán o apoyarán en el proceso comercial.','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Correcto! Además, es quien establece la prioridad de los proyectos, tiene expectativa muy altas de tu investigación, se enfoca en el futuro.','retro_mal':'¡Incorrecto! El Tomador de Decisiones, es quien tiene el presupuesto e interés para comprar valor, puede decir que "sí" cuando todos dicen que "no" y decir que "no" cuando los demás dicen "sí", raramente acepta ser quien toma las decisiones y es difícil de impresionar.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Conectar','tema':'tema4','pregunta':'4. Gatekeeper se caracteriza, entre otras cosas, por:','opcion_1':'a) Tener el presupuesto e interés para comprar valor, puede decir que "sí" cuando todos dicen que "no" y decir que "no" cuando los demás dicen "sí", raramente acepta ser quien toma las decisiones y es difícil de impresionar.','opcion_2':'b) Restringir tu acceso a la compañía, bloquear tu estrategia de venta y limitar tu efectividad, puede ser una persona o proceso.','opcion_3':'c) Ayudar a darle dirección a las ideas, tiene disposición para apoyar en el desarrollo de la estrategia de negocio y proporciona información completa y confiable sobre la organización, posee credibilidad.','opcion_4':'d) Puede ser cualquier persona. Son aquellas que no necesariamente participarán o apoyarán en el proceso comercial.','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! Además, puede tener intereses en una solución diferente a la tuya o de tipo personal y ser interno o externo a la compañía del cliente. Incluso podrías ser tú mismo.','retro_mal':'¡Incorrecto! El Gatekeeper, se caracteriza por restringir tu acceso a la compañía, bloquear tu estrategia de venta y limitar tu efectividad, puede ser una persona o proceso, entre otras cosas.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'1. Por fin has logrado contactar a Carlos Esquivel, el CEO de la empresa que has estado estudiando; en la llamada te ha dado una cita para que realices una presentación, ¿cuál será el objetivo de ésta de acuerdo a la metodología COMMET?','opcion_1':'a) Presentarle la historia de Solistica','opcion_2':'b) Compartir el portafolio de servicios que brindamos','opcion_3':'c) Mostrar el potencial del Business Fit','opcion_4':'c) Que él te explique los problemas del negocio para diseñar una solución personalizada','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Muy bien! Es tu momento de mostrar el entendimiento del negocio que te ha dado tu investigación; además, de compartir los puntos de encuentro que tienen ambas empresas','retro_mal':'¡Incorrecto! Esta parte de la presentación es importante; sin embargo, el tiempo es valioso para mostrar la forma en que ambas empresas pueden crear valor juntas.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'2. Estás al frente del equipo directivo de la empresa y empiezas a hablar acerca de los casos de éxito que ha tenido Solistica como un recurso estratégico en la misma industria, compartiendo información que se alinea con su negocio. ¿Qué etapa de la presentación estás desarrollando?','opcion_1':'Ellos','opcion_2':'Business Fit','opcion_3':'Nosotros','opcion_4':'Acción','opcion_5':'','opcion_6':'','correcta':'3','retro_bien':'¡Correcto! Después de presentar la investigación que has realizado, es importante compartir qué ha hecho Solistica con otros clientes para aterrizarlos en las propuestas de valor del Business Fit','retro_mal':'¡Incorrecto! Durante el flujo de la presentación primero se expone nuestro entendimiento del negocio (Ellos), luego nuestros casos de éxito y la información que haga sentido con su negocio (Nosotros), posteriormente el Business Fit que se diseñó y finalmente los pasos de acción para empezar a trabajar juntos.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'3. Es uno de los momentos clave previo a la entrega de la presentación, te ayuda a analizar tu desempeño y perfeccionarlo.','opcion_1':'Ensayo','opcion_2':'Preventa','opcion_3':'Desarrollo','opcion_4':'Confirmación de asistentes','opcion_5':'','opcion_6':'','correcta':'1','retro_bien':'¡Así es! El ensayo debe llevarse a cabo para asegurarte de que la presentación es correcta y tu discurso apropiado y poderoso para que el Tomador de Decisiones se interese en hacer negocios contigo.','retro_mal':'¡Incorrecto! Para que tu presentación sea todo un éxito, es muy importante que practiques lo suficiente para impactar y mostrar el gran valor que puedes agregar en el logro de objetivos del cliente.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'4. En la presentación, hay un elemento propio de ti que debes de cuidar para transmitir el mensaje correcto, ¿cuál es?','opcion_1':'a) Borrador','opcion_2':'b) Tono','opcion_3':'c) Atuendo','opcion_4':'d) Notas','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! El tono que utilices en cada fase de la presentación, influye en el efecto que tiene sobre tus receptores, presta mucha atención a él.','retro_mal':'¡Incorrecto! Recuerda que tú eres el medio más poderoso para enviar el mensaje que deseas, tu voz y tus mismos gestos son tus herramientas más valiosas.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'5. Alejandro Tovar, el CEO con quien te has reunido, quedó impresionado con el desarrollo de tu presentación, ahora tienes acuerdos para tener una sesión de trabajo con otras personas para llevar a la acción tu Business Fit, ¿a qué fase de la presentación corresponde esto?','opcion_1':'a) Desarrollo','opcion_2':'b) Seguimiento','opcion_3':'c) Ensayo','opcion_4':'d) Revisión con el Coach','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Bien hecho! Lograste concretar y cerrar con compromisos de colaboración. Ahora comienza el seguimiento a la relación estratégica entre el cliente y Solistica.','retro_mal':'¡Incorrecto! Ésta es una fase previa a tu presentación con el Tomador de Decisiones. Recuerda que tu contacto posterior para llevar a la acción los acuerdos, es fundamental para afianzar la relación de negocio.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',},
				{'topico':'Concretar','tema':'tema5','pregunta':'6. ¿Cuál es el flujo para la estructura de una presentación COMMET?','opcion_1':'a) Nosotros, Business Fit, Acción, Seguimiento ','opcion_2':'b) Ellos, Nosotros, Business Fit, Acción','opcion_3':'c) Ellos, Solution Fit, Acción, Seguimiento ','opcion_4':'d) Presentación, Identificación de necesidades, Solución, Acuerdos','opcion_5':'','opcion_6':'','correcta':'2','retro_bien':'¡Correcto! Este es el flujo correcto que permitirá que demuestres tu entendimiento del negocio y cómo a partir de éste has identificado la alineación de negocios entre ambas compañías.','retro_mal':'¡Incorrecto! Recuerda que existe un flujo que responde al entendimiento que tienes sobre el negocio del Cliente y con base en él es posible identificar la alineación de negocios que ambas empresas pueden tener.','tipo':'opcion_multiple','':'','':'','':'','':'','':'','':'','':'','':'',}]
		
		
			}
		}
		
				
		/* Obtengo solo las preguntas que requiero */
		var cuantas_preguntas = 10;
		var cuantas_core = 2;
		var cuantas_nocore = 0;
		
		var TOPIC = "tema";
		var currentTopic = 0;
		var currentQuestion = 0;
		var currentQuestionTopic = 0;
		var question;
		
		var wrong = 0;
		var correct = 0;
		var MAX_WRONG = 3;
			
		function init() {
		
			fetchQuestions()
			questionsObj = createQuestionsObject(questionGral, 'tema');
			// console.log("TOTAL PREGUNTAS: ", questionGral);
			console.log("questionsObj: ", questionsObj );
		
			initBtns();
			answers = []
			//that.attempts++;
			//that.saveAttempts(that.attempts);
			
			that.ev.visible = false;
			that.conte_mc.visible = false;
		
			that.timer.init();
			nextTopic()
		}
		
		that.next = function() {
			that.ev.disable();
			nextQuestion();
		}
		
		function initBtns() {
			for (var i = 1; i <= TOTAL_TOPICS; i++) {
				initBtn(i)
			}
		
			//that["pin"+1].enable()
		
		}
		
		function initBtn(i) {
			var btn = that["pin"+i];
			btn._id = i;
			btn.brillo.visible = false;
			btn._enabled = false;
		
			btn.on('click', function(){
				if(this._enabled) nextQuestion();
			})
		
			btn.enable = function() {
				this.mouseEnabled = true;
				this._enabled = true;
				this.brillo.visible = true;
			}
		
			btn.disable = function() {
				this.mouseEnabled = false;
				this._enabled = false;
				this.brillo.visible = false;
			}
		
		}
		
		this.setAnswers = function(answer) {
			answers[index] = answer;
			questions[index] = answer;
			if(!answer) {
				that.counter.takeOption();
				wrong++;
			} else {
				correct++;
				that.stars.show(correct);
			}
			that.timer.stop();
		
			console.log("correct: ", correct);
			console.log("wrong: ", wrong);
		}
		
		this.questionTimeout = function() {
			//this.setAnswers(false);
			//nextQuestion();
			that.ev.check();
			that.ev.disabledBtns();
			//that[currentAnswerType].disable();
		}
		
		function initQuestion() {
		
			console.log('currentTopic: ', currentTopic)
			console.log('currentQuestionTopic: ', currentQuestionTopic)
		
			question = getQuestion();
			that.ev.visible = true;
			that.conte_mc.visible = true;
			that.ev.activate(question, index);
			that.timer.reset();
			that.timer.start();
			console.log('Correct: ', question.correcta);
		}
		
		function getQuestion() {
			return questionsObj[TOPIC + currentTopic].shift();
		}
		
		function nextQuestion() {
			console.log('Next question')
			// si se debe salir a los 3 errores
			/*if(checkWrongs()) {
				finishEvaluation()
				return;
			} */
		
			if(currentQuestionTopic == 2) { // last question in topic
				nextTopic();
				that.ev.visible = false;
				that.conte_mc.visible = false;
			} else if(currentQuestionTopic < 2) { // 
				index++;
				currentQuestionTopic++;
				initQuestion()
			} 
		}
		
		function checkWrongs() {
			return  wrong >= MAX_WRONG
		}
		
		function nextTopic() {
			console.log('next topic')
			if(currentTopic < TOTAL_TOPICS) {
				if( that["pin"+currentTopic] ) that["pin"+currentTopic].disable()
				currentTopic++;
				currentQuestionTopic = 0;
				
				that["pin"+1].disable();
				that["pin"+2].disable();
				that["pin"+3].disable();
				that["pin"+4].disable();
				that["pin"+5].disable();
				
				that["pin"+currentTopic].enable();
		
				that.letreros_mc.show(currentTopic);
				
				console.log('t' + String(that.avatar) + currentTopic)
				if( that.marca.currentLabel != ('t' + String(that.avatar) + currentTopic)  ) that.marca.gotoAndStop('t' + String(that.avatar) + currentTopic);
				that.conte_mc.pin.gotoAndStop('n' + currentTopic);
			} else {
				if( that["pin"+currentTopic] ) that["pin"+currentTopic].disable();
					
				finishEvaluation()
			}
		}
		
		function evaluate() {
		
			console.log("TOTALES: " + that.answers_topics_totals);
			console.log("CORRECTAS: " + that.answers_topics_corrects);
			
			var score = (correct * 100) / TOTAL_QUESTIONS;
		
			that.score = parseInt(score)
			
			saveScore(that.score)
			
			//if(that.pagesService){
				/*console.log("Enviar a LMS los datos....");
				that.pagesService.setCalif(that.score);
				that.pagesService.setCalifTotales(that.answers_topics_totals.join(","));
				that.pagesService.setCalifCorrectas(that.answers_topics_corrects.join(","));
				
				that.pagesService.brilla();*/
			//}
			
		}
		
		// Actualización 07OCT19
		function finishEvaluation() {
			console.log('that.attempts', that.attempts);
			
			that.ev.disable();
			evaluate();
		
			if (that.score >= minScore) {
				// that.setCompleted();
				//that.setPassed();
				showRetro('good');
			} else {
				if(that.attempts>=2){
					//that.setCompleted();
					//that.setFailed();
					showRetro('bad2');
				}else{
					showRetro('bad');
				}
				
			}
		}
		
		
		function showRetro(type) {
			console.log(type)
			if(type == 'good'){
				that.retros.gotoAndPlay('bien')
			} else if(type == 'bad'){
				that.retros.gotoAndPlay('mal')
			}else{
				that.retros.gotoAndPlay('mal2')
			}
			// that.retros.gotoAndPlay(1);
		}
		
		function saveScore(score) {
			console.log('score: ' + that.score);
			if (that.scormService) {
				console.log(score + " > " + that.calif_anterior);
				var enviar_calif = 0;
				if(score > that.calif_anterior){
					enviar_calif = score;
				}else{
					enviar_calif = that.calif_anterior;
				}
				
				console.log("enviar_calif: " + enviar_calif);
							
				
				that.attempts++;
				var done_ = score>=80 || that.attempts>=2;
				that.scormService.saveGrade(enviar_calif, that.attempts, done_);			
				// tambien se actualiza el objetivo								
				/*
				that.scormService.setValue("cmi.objectives.0.score.scaled",String((enviar_calif/100)));
				that.scormService.setValue("cmi.objectives.0.score.raw",String(enviar_calif));							
				that.scormService.setValue("cmi.objectives.0.description",String("1"));	
				*/
			}		
			// el cierre de la eval se hce vía app...
		}
		
		this.setCompleted = function(score) {
			if (that.scormService) {
				that.scormService.saveStatus('completed');
			}
		}
		
		// Actualización 07OCT19
		this.setPassed = function() {
			/*if (that.scormService) {
				that.scormService.saveStatus('passed');
			}*/
			if (that.scormService) {
				console.log("GUARDA scormService PASSED:::::");
				that.scormService.setValue("cmi.progress_measure","1"); 
				that.scormService.setValue("cmi.objectives.0.progress_measure","1");
				
				that.scormService.setValue("cmi.objectives.0.completion_status","completed");
				that.scormService.setValue("cmi.objectives.0.success_status","passed");
				
				that.scormService.saveStatus("completed");
				that.scormService.saveStatus("passed");		
			}
		}
		
		// Actualización 07OCT19
		this.setFailed = function() {
			/*if (that.scormService) {
				that.scormService.saveStatus('passed');
			}*/
			if (that.scormService) {
				//this.parent.scormService.saveStatus("failed");
				console.log("GUARDA scormService FAILED:::::");
				
				that.scormService.setValue("cmi.progress_measure","1"); 
				that.scormService.setValue("cmi.objectives.0.progress_measure","1");
				
				that.scormService.setValue("cmi.objectives.0.completion_status","completed");
				that.scormService.setValue("cmi.objectives.0.success_status","passed");
				
				that.scormService.saveStatus("completed");
				that.scormService.saveStatus("failed");	
			}
		}
		
		this.saveAttempts = function(attempts) {
			
			/*if(this.memory){
				this.memory.save('attempts', attempts);
			}*/
			if(that.pagesService){
				that.pagesService.setIntentos(attempts);
			}
			
		}
		
		this.exit = function() {
			if(that.pagesService){	
				that.pagesService.brilla();
			}
		}
		
		init();
		
		//  Utils
		
		function shuffle(array) {
		  var currentIndex = array.length, temporaryValue, randomIndex;
		
		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {
		
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		
		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }
		
		  return array;
		}
		
		function createQuestionsObject(questionsArray, key) {
			var questionsObj = {};
			var tempArray = [];
		
			for(var i = 0; i < TOTAL_TOPICS; i++ ) {
				var topic = key + (i + 1);
				tempArray = filterByProperties(questionsArray, key, topic );
				console.log(tempArray)
				questionsObj[topic] = shuffle(tempArray)
			}
		
			return questionsObj;
		}
		
		function filterByProperties(array, property, value){
			var my_array = [];
		
			console.log(array);
			
			for(var i=0;i<array.length;i++){
				//console.log(questionsGral[i]);
				//console.log(array[i][property] + " == " + value);
				//console.log(" --------- " );
				if(array[i][property] == value){
					my_array.push(array[i]);
				}
			}
			
			return my_array;
		}
	}
	this.frame_1499 = function() {
		this.stop();
	}
	this.frame_1513 = function() {
		this.stop();
		/*
		if(this.pagesService){
			//this.answers_topics_totals = String("1,3,0,8,8").split(","); //this.pagesService.getCalifTotales();
			//this.answers_topics_corrects = String("1,2,0,3,6").split(","); // this.pagesService.getCalifCorrectas();
			this.score = parseInt(this.pagesService.getCalif());	
			
			//this.answers_topics_totals = String(this.pagesService.getCalifTotales()).split(","); //;
			//this.answers_topics_corrects = String(this.pagesService.getCalifCorrectas()).split(","); // this.pagesService.getCalifCorrectas();
			
			//console.log("this.answers_topics_totals: " + this.answers_topics_totals);
			//console.log("this.answers_topics_corrects: " + this.answers_topics_corrects);
		}
		
		*/
		this.ev.visible = false;
		this.conte_mc.visible = false;
		
		this.retros.gotoAndPlay(1);
		this.retros.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(138).call(this.frame_140).wait(5).call(this.frame_145).wait(675).call(this.frame_820).wait(1).call(this.frame_821).wait(1).call(this.frame_822).wait(36).call(this.frame_858).wait(537).call(this.frame_1395).wait(74).call(this.frame_1469).wait(28).call(this.frame_1497).wait(1).call(this.frame_1498).wait(1).call(this.frame_1499).wait(14).call(this.frame_1513).wait(1));

	// Layer_6
	this.instance = new lib.brillo();
	this.instance.parent = this;
	this.instance.setTransform(434.5,447.75,1.4716,1.2723,0,0,0,17.7,17.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({_off:false},0).to({_off:true},1).wait(1373));

	// brill
	this.btn1 = new lib.Btn_iniciar();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(510.3,455);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(140).to({_off:false},0).to({_off:true},1).wait(1373));

	// botones
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006699").s().p("EhvUAx2MAAAhjrMDepAAAMgQaBjrg");
	this.shape.setTransform(-716.5,319);
	this.shape._off = true;

	this.btn_ini = new lib.comenzar();
	this.btn_ini.name = "btn_ini";
	this.btn_ini.parent = this;
	this.btn_ini.setTransform(932.1,599.8,1,1,0,0,0,77,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},225).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.btn_ini}]},1144).to({state:[]},4).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(225).to({_off:false},0).wait(1).to({x:-604.5455},0).wait(1).to({x:-492.5909},0).wait(1).to({x:-380.6364},0).wait(1).to({x:-268.6818},0).wait(1).to({x:-156.7273},0).wait(1).to({x:-44.7727},0).wait(1).to({x:67.1818},0).wait(1).to({x:179.1364},0).wait(1).to({x:291.0909},0).wait(1).to({x:403.0455},0).wait(1).to({x:515},0).wait(1).to({x:626.9545},0).wait(1).to({x:738.9091},0).wait(1).to({x:850.8636},0).wait(1).to({x:962.8182},0).wait(1).to({x:1074.7727},0).wait(1).to({x:1186.7273},0).wait(1).to({x:1298.6818},0).wait(1).to({x:1410.6364},0).wait(1).to({x:1522.5909},0).wait(1).to({x:1634.5455},0).wait(1).to({x:1746.5},0).to({_off:true},1).wait(1266));

	// Layer_16
	this.retros = new lib.retros_finales();
	this.retros.name = "retros";
	this.retros.parent = this;
	this.retros.setTransform(512,319,1,1,0,0,0,512,319);
	this.retros._off = true;

	this.timeline.addTween(cjs.Tween.get(this.retros).wait(1497).to({_off:false},0).wait(17));

	// timer
	this.timer = new lib.timer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(922.4,23.45,1,1,0,0,0,55.5,12);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(1496).to({_off:false},0).wait(18));

	// stars
	this.stars = new lib.Symbol8();
	this.stars.name = "stars";
	this.stars.parent = this;
	this.stars.setTransform(512,21.6,1,1,0,0,0,99.5,17.1);
	this.stars._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(1496).to({_off:false},0).wait(18));

	// counter
	this.counter = new lib.Symbol7();
	this.counter.name = "counter";
	this.counter.parent = this;
	this.counter.setTransform(272.2,23.5,1,1,0,0,0,60.5,18);
	this.counter._off = true;

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1496).to({_off:false},0).wait(18));

	// estrellas_vacias
	this.stars_mc = new lib.estrellas_vacias();
	this.stars_mc.name = "stars_mc";
	this.stars_mc.parent = this;
	this.stars_mc.setTransform(512.05,21.7,1,1,0,0,0,99.3,17.2);
	this.stars_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stars_mc).wait(885).to({_off:false},0).wait(629));

	// barra
	this.instance_1 = new lib.barra();
	this.instance_1.parent = this;
	this.instance_1.setTransform(445.9,23.5,1,1,0,0,0,407,18);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.control_juego = new lib.barra();
	this.control_juego.name = "control_juego";
	this.control_juego.parent = this;
	this.control_juego.setTransform(449.25,26.5,1,1,0,0,0,407,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},861).to({state:[{t:this.control_juego}]},24).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(861).to({_off:false},0).to({_off:true,x:449.25,y:26.5,alpha:1},24).wait(629));

	// PReguntas
	this.ev = new lib.preguntas();
	this.ev.name = "ev";
	this.ev.parent = this;
	this.ev.setTransform(512,369.5);
	this.ev._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ev).wait(1497).to({_off:false},0).wait(17));

	// contenido
	this.conte_mc = new lib.juego();
	this.conte_mc.name = "conte_mc";
	this.conte_mc.parent = this;
	this.conte_mc.setTransform(512,319.3,1,1,0,0,0,512,319.3);
	this.conte_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.conte_mc).wait(1497).to({_off:false},0).wait(17));

	// marcadorELLA
	this.marca = new lib.marcadoresElla();
	this.marca.name = "marca";
	this.marca.parent = this;
	this.marca.setTransform(242.5,298.4,1,1,0,0,0,51.5,51.4);
	this.marca._off = true;

	this.timeline.addTween(cjs.Tween.get(this.marca).wait(1469).to({_off:false},0).wait(45));

	// text
	this.btn_sel = new lib.seleccionar();
	this.btn_sel.name = "btn_sel";
	this.btn_sel.parent = this;
	this.btn_sel.setTransform(203.95,471.1,1,1,0,0,0,89,25.6);

	this.instance_2 = new lib.text2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(703.05,680.6,1,1,0,0,0,138.2,32.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_sel}]},820).to({state:[]},2).to({state:[{t:this.instance_2}]},498).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},61).to({state:[{t:this.instance_2}]},18).to({state:[]},1).wait(99));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1320).to({_off:false},0).to({y:582.4},15).wait(61).to({alpha:0},18).to({_off:true},1).wait(99));

	// animacion el
	this.anima2 = new lib.animacion_el();
	this.anima2.name = "anima2";
	this.anima2.parent = this;
	this.anima2.setTransform(530,455.2,1,1,0,0,0,21,58.2);
	this.anima2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.anima2).wait(822).to({_off:false},0).to({_off:true},574).wait(118));

	// animacion ella
	this.anima1 = new lib.animacion_ella();
	this.anima1.name = "anima1";
	this.anima1.parent = this;
	this.anima1.setTransform(530,455.2,1,1,0,0,0,21,58.2);
	this.anima1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.anima1).wait(822).to({_off:false},0).to({_off:true},574).wait(118));

	// letreros
	this.letreros_mc = new lib.titulos();
	this.letreros_mc.name = "letreros_mc";
	this.letreros_mc.parent = this;
	this.letreros_mc.setTransform(482,238.15,1.0806,1.0806,0,0,0,446.8,178.1);
	this.letreros_mc.alpha = 0;
	this.letreros_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.letreros_mc).wait(1469).to({_off:false},0).to({regX:446.9,regY:178,scaleX:1,scaleY:1,x:482.1,y:238,alpha:1},29).wait(16));

	// bloque5
	this.instance_3 = new lib.bloque5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(851.8,274,1,1,0,0,0,40.8,54);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.pin5 = new lib.bloque5();
	this.pin5.name = "pin5";
	this.pin5.parent = this;
	this.pin5.setTransform(851.8,334,1,1,0,0,0,40.8,54);
	this.pin5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(885).to({_off:false},0).to({_off:true,y:334,alpha:1},18).wait(611));
	this.timeline.addTween(cjs.Tween.get(this.pin5).wait(885).to({_off:false},18).wait(518).to({regX:40.9,regY:54.1,scaleX:1.1924,scaleY:1.1924,x:671.2,y:385.45},48,cjs.Ease.get(1)).wait(45));

	// bloque4
	this.instance_4 = new lib.bloque4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(810.6,166.8,1,1,0,0,0,40.6,53.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.pin4 = new lib.bloque4();
	this.pin4.name = "pin4";
	this.pin4.parent = this;
	this.pin4.setTransform(810.6,226.8,1,1,0,0,0,40.6,53.8);
	this.pin4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(879).to({_off:false},0).to({_off:true,y:226.8,alpha:1},18).wait(617));
	this.timeline.addTween(cjs.Tween.get(this.pin4).wait(879).to({_off:false},18).wait(524).to({scaleX:1.1924,scaleY:1.1924,x:621.95,y:257.55},48,cjs.Ease.get(1)).wait(45));

	// bloque3
	this.instance_5 = new lib.bloque3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(711.6,113,1,1,0,0,0,40.6,54);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.pin3 = new lib.bloque3();
	this.pin3.name = "pin3";
	this.pin3.parent = this;
	this.pin3.setTransform(711.6,173,1,1,0,0,0,40.6,54);
	this.pin3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(873).to({_off:false},0).to({_off:true,y:173,alpha:1},18).wait(623));
	this.timeline.addTween(cjs.Tween.get(this.pin3).wait(873).to({_off:false},18).wait(530).to({scaleX:1.1924,scaleY:1.1924,x:503.9,y:193.4},48,cjs.Ease.get(1)).wait(45));

	// bloque2
	this.instance_6 = new lib.bloque2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(591.6,177,1,1,0,0,0,40.6,54);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.pin2 = new lib.bloque2();
	this.pin2.name = "pin2";
	this.pin2.parent = this;
	this.pin2.setTransform(591.6,237,1,1,0,0,0,40.6,54);
	this.pin2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(867).to({_off:false},0).to({_off:true,y:237,alpha:1},18).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.pin2).wait(867).to({_off:false},18).wait(536).to({regY:54.1,scaleX:1.1924,scaleY:1.1924,x:360.85,y:269.8},48,cjs.Ease.get(1)).wait(45));

	// bloque1
	this.instance_7 = new lib.bloque1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(491.8,214,1,1,0,0,0,40.8,54);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.pin1 = new lib.bloque1();
	this.pin1.name = "pin1";
	this.pin1.parent = this;
	this.pin1.setTransform(491.8,274,1,1,0,0,0,40.8,54);
	this.pin1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(861).to({_off:false},0).to({_off:true,y:274,alpha:1},18).wait(635));
	this.timeline.addTween(cjs.Tween.get(this.pin1).wait(861).to({_off:false},18).wait(542).to({regX:40.9,regY:54.1,scaleX:1.1924,scaleY:1.1924,x:241.95,y:313.9},48,cjs.Ease.get(1)).wait(45));

	// barra
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202C52").s().p("EhP/ADcIAAm3MCf/AAAIAAG3g");
	this.shape_1.setTransform(0.4922,22,0.001,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202C52").s().p("AiSDcIAAm3IElAAIAAG3g");
	this.shape_2.setTransform(14.7083,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202C52").s().p("AkgDcIAAm3IJBAAIAAG3g");
	this.shape_3.setTransform(28.9167,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202C52").s().p("AmuDcIAAm3INdAAIAAG3g");
	this.shape_4.setTransform(43.125,22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202C52").s().p("Ao8DcIAAm3IR5AAIAAG3g");
	this.shape_5.setTransform(57.3333,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202C52").s().p("ArKDcIAAm3IWVAAIAAG3g");
	this.shape_6.setTransform(71.5417,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202C52").s().p("AtZDcIAAm3IazAAIAAG3g");
	this.shape_7.setTransform(85.75,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#202C52").s().p("AvnDcIAAm3IfPAAIAAG3g");
	this.shape_8.setTransform(99.9583,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#202C52").s().p("Ax1DcIAAm3MAjrAAAIAAG3g");
	this.shape_9.setTransform(114.1667,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#202C52").s().p("A0DDcIAAm3MAoHAAAIAAG3g");
	this.shape_10.setTransform(128.375,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#202C52").s().p("A2RDcIAAm3MAsjAAAIAAG3g");
	this.shape_11.setTransform(142.5833,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#202C52").s().p("A4fDcIAAm3MAw/AAAIAAG3g");
	this.shape_12.setTransform(156.7917,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#202C52").s().p("A6tDcIAAm3MA1bAAAIAAG3g");
	this.shape_13.setTransform(171,22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#202C52").s().p("A87DcIAAm3MA53AAAIAAG3g");
	this.shape_14.setTransform(185.2083,22);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#202C52").s().p("A/JDcIAAm3MA+TAAAIAAG3g");
	this.shape_15.setTransform(199.4167,22);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#202C52").s().p("EghXADcIAAm3MBCvAAAIAAG3g");
	this.shape_16.setTransform(213.625,22);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#202C52").s().p("EgjlADcIAAm3MBHLAAAIAAG3g");
	this.shape_17.setTransform(227.8333,22);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#202C52").s().p("EglzADcIAAm3MBLnAAAIAAG3g");
	this.shape_18.setTransform(242.0417,22);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#202C52").s().p("EgoCADcIAAm3MBQEAAAIAAG3g");
	this.shape_19.setTransform(256.25,22);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#202C52").s().p("EgqQADcIAAm3MBUhAAAIAAG3g");
	this.shape_20.setTransform(270.4583,22);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#202C52").s().p("EgseADcIAAm3MBY9AAAIAAG3g");
	this.shape_21.setTransform(284.6667,22);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#202C52").s().p("EgusADcIAAm3MBdZAAAIAAG3g");
	this.shape_22.setTransform(298.875,22);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#202C52").s().p("Egw6ADcIAAm3MBh1AAAIAAG3g");
	this.shape_23.setTransform(313.0833,22);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#202C52").s().p("EgzIADcIAAm3MBmRAAAIAAG3g");
	this.shape_24.setTransform(327.2917,22);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#202C52").s().p("Eg1WADcIAAm3MBqtAAAIAAG3g");
	this.shape_25.setTransform(341.5,22);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#202C52").s().p("Eg3kADcIAAm3MBvJAAAIAAG3g");
	this.shape_26.setTransform(355.7083,22);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#202C52").s().p("Eg5yADcIAAm3MBzlAAAIAAG3g");
	this.shape_27.setTransform(369.9167,22);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#202C52").s().p("Eg8AADcIAAm3MB4BAAAIAAG3g");
	this.shape_28.setTransform(384.125,22);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#202C52").s().p("Eg+OADcIAAm3MB8dAAAIAAG3g");
	this.shape_29.setTransform(398.3333,22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#202C52").s().p("EhAcADcIAAm3MCA5AAAIAAG3g");
	this.shape_30.setTransform(412.5417,22);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#202C52").s().p("EhCrADcIAAm3MCFWAAAIAAG3g");
	this.shape_31.setTransform(426.75,22);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#202C52").s().p("EhE5ADcIAAm3MCJzAAAIAAG3g");
	this.shape_32.setTransform(440.9583,22);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#202C52").s().p("EhHHADcIAAm3MCOPAAAIAAG3g");
	this.shape_33.setTransform(455.1667,22);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#202C52").s().p("EhJVADcIAAm3MCSrAAAIAAG3g");
	this.shape_34.setTransform(469.375,22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#202C52").s().p("EhLjADcIAAm3MCXHAAAIAAG3g");
	this.shape_35.setTransform(483.5833,22);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#202C52").s().p("EhNxADcIAAm3MCbjAAAIAAG3g");
	this.shape_36.setTransform(497.7917,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:0.001,x:0.4922}}]},822).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_1,p:{scaleX:1,x:512}}]},1).wait(656));

	// generales
	this.instance_8 = new lib.instrucciones_generales();
	this.instance_8.parent = this;
	this.instance_8.setTransform(182.5,359.4,1,1,0,0,0,167.5,265.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(822).to({_off:false},0).to({x:207.5,alpha:1},19).wait(555).to({alpha:0},18).to({_off:true},1).wait(99));

	// el
	this.instance_9 = new lib.el();
	this.instance_9.parent = this;
	this.instance_9.setTransform(296.6,381.6,1,1,0,0,0,86.6,86.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.sel2 = new lib.el();
	this.sel2.name = "sel2";
	this.sel2.parent = this;
	this.sel2.setTransform(296.6,316.6,1,1,0,0,0,86.6,86.6);
	new cjs.ButtonHelper(this.sel2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},314).to({state:[{t:this.sel2}]},19).to({state:[]},489).wait(692));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(314).to({_off:false},0).to({_off:true,y:316.6,alpha:1},19,cjs.Ease.get(1)).wait(1181));

	// ella
	this.instance_10 = new lib.ella();
	this.instance_10.parent = this;
	this.instance_10.setTransform(115.4,381.1,1,1,0,0,0,87.4,87.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.sel1 = new lib.ella();
	this.sel1.name = "sel1";
	this.sel1.parent = this;
	this.sel1.setTransform(115.4,316.1,1,1,0,0,0,87.4,87.1);
	new cjs.ButtonHelper(this.sel1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},305).to({state:[{t:this.sel1}]},19).to({state:[]},498).wait(692));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(305).to({_off:false},0).to({_off:true,y:316.1,alpha:1},19,cjs.Ease.get(1)).wait(1190));

	// text
	this.instance_11 = new lib.text_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.5,164.35,1,1,0,0,0,158.5,25.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(289).to({_off:false},0).to({alpha:1},16).to({_off:true},517).wait(692));

	// FlashAICB
	this.instance_12 = new lib.envo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-239,319.5,1,1,0,0,0,205,319);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(269).to({_off:false},0).to({x:205},20).wait(1116).to({x:-298},14).to({_off:true},2).wait(93));

	// laberinto
	this.instance_13 = new lib.laberinto();
	this.instance_13.parent = this;
	this.instance_13.setTransform(512.1,337.1,0.9543,0.9543,0,0,0,318.1,243.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(247).to({_off:false},0).to({regX:318,regY:243.2,scaleX:0.8145,scaleY:0.8145,x:710,y:337.05,alpha:1},24).wait(1150).to({regX:318.1,scaleX:0.9712,scaleY:0.9711,x:502.15,y:388.95},48,cjs.Ease.get(1)).wait(45));

	// Layer_13
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(207,163,70,0)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_37.setTransform(511.4,340.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(207,163,70,0.007)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_38.setTransform(511.4,340.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(207,163,70,0.015)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_39.setTransform(511.4,340.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(207,163,70,0.022)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_40.setTransform(511.4,340.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(207,163,70,0.03)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_41.setTransform(511.4,340.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(207,163,70,0.037)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_42.setTransform(511.4,340.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(207,163,70,0.045)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_43.setTransform(511.4,340.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(207,163,70,0.052)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_44.setTransform(511.4,340.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(207,163,70,0.059)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_45.setTransform(511.4,340.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(207,163,70,0.067)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_46.setTransform(511.4,340.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(207,163,70,0.074)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_47.setTransform(511.4,340.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(207,163,70,0.082)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_48.setTransform(511.4,340.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(207,163,70,0.089)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_49.setTransform(511.4,340.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(207,163,70,0.097)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_50.setTransform(511.4,340.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(207,163,70,0.104)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_51.setTransform(511.4,340.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(207,163,70,0.112)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_52.setTransform(511.4,340.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(207,163,70,0.119)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_53.setTransform(511.4,340.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(207,163,70,0.126)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_54.setTransform(511.4,340.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(207,163,70,0.134)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_55.setTransform(511.4,340.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(207,163,70,0.141)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_56.setTransform(511.4,340.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(207,163,70,0.149)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_57.setTransform(511.4,340.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(207,163,70,0.156)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_58.setTransform(511.4,340.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(207,163,70,0.164)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_59.setTransform(511.4,340.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(207,163,70,0.171)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_60.setTransform(511.4,340.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(207,163,70,0.178)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_61.setTransform(511.4,340.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(207,163,70,0.186)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_62.setTransform(511.4,340.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(207,163,70,0.193)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_63.setTransform(511.4,340.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(207,163,70,0.201)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_64.setTransform(511.4,340.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(207,163,70,0.208)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_65.setTransform(511.4,340.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(207,163,70,0.216)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_66.setTransform(511.4,340.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(207,163,70,0.223)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_67.setTransform(511.4,340.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(207,163,70,0.23)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_68.setTransform(511.4,340.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(207,163,70,0.238)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_69.setTransform(511.4,340.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(207,163,70,0.245)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_70.setTransform(511.4,340.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(207,163,70,0.253)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_71.setTransform(511.4,340.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(207,163,70,0.26)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_72.setTransform(511.4,340.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(207,163,70,0.268)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_73.setTransform(511.4,340.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(207,163,70,0.275)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_74.setTransform(511.4,340.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(207,163,70,0.283)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_75.setTransform(511.4,340.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(207,163,70,0.29)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_76.setTransform(511.4,340.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(207,163,70,0.297)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_77.setTransform(511.4,340.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(207,163,70,0.305)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_78.setTransform(511.4,340.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(207,163,70,0.312)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_79.setTransform(511.4,340.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(207,163,70,0.32)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_80.setTransform(511.4,340.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(207,163,70,0.327)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_81.setTransform(511.4,340.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(207,163,70,0.335)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_82.setTransform(511.4,340.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(207,163,70,0.342)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_83.setTransform(511.4,340.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(207,163,70,0.349)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_84.setTransform(511.4,340.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(207,163,70,0.357)").s().p("EgqcAuQMge6hcfMBz0AAAMAe4Bcfg");
	this.shape_85.setTransform(511.4,340.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37}]},1421).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).wait(45));

	// Layer_10
	this.instance_14 = new lib.fondo2_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(512,319.3,1,1,0,0,0,512,319.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(236).to({_off:false},0).wait(1278));

	// ico3
	this.instance_15 = new lib.ico3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(393.25,558.8,1.4698,1.4698,0,0,0,44.7,44.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(94).to({_off:false},0).to({regY:44.7,scaleX:1,scaleY:1,y:558.65,alpha:0.3086},20,cjs.Ease.get(1)).to({_off:true},122).wait(1278));

	// ico2
	this.instance_16 = new lib.ico2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(843.3,482.55,1.7093,1.7093,0,0,0,71.9,32.6);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(82).to({_off:false},0).to({scaleX:1.218,scaleY:1.218,x:843.25,alpha:0.1484},14,cjs.Ease.get(1)).to({_off:true},140).wait(1278));

	// ico1
	this.instance_17 = new lib.ico1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(897.6,259.95,1.2794,1.2794,0,0,0,46.7,68);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(70).to({_off:false},0).to({regX:46.6,scaleX:1,scaleY:1,x:897.45,alpha:0.1406},16,cjs.Ease.get(1)).to({_off:true},150).wait(1278));

	// ico4
	this.instance_18 = new lib.ico4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(94.1,403.55,1.5531,1.5531,0,0,0,46.6,67.7);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(57).to({_off:false},0).to({regY:67.6,scaleX:1.1985,scaleY:1.1985,x:94.05,y:403.35,alpha:0.1484},16,cjs.Ease.get(1)).to({_off:true},163).wait(1278));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AgEImIAAxLIAJAAIAARLg");
	var mask_graphics_17 = new cjs.Graphics().p("AhVImIAAxLICrAAIAARLg");
	var mask_graphics_18 = new cjs.Graphics().p("AimImIAAxLIFNAAIAARLg");
	var mask_graphics_19 = new cjs.Graphics().p("Aj2ImIAAxLIHtAAIAARLg");
	var mask_graphics_20 = new cjs.Graphics().p("AlHImIAAxLIKPAAIAARLg");
	var mask_graphics_21 = new cjs.Graphics().p("AmYImIAAxLIMxAAIAARLg");
	var mask_graphics_22 = new cjs.Graphics().p("AnpImIAAxLIPTAAIAARLg");
	var mask_graphics_23 = new cjs.Graphics().p("Ao5ImIAAxLIRzAAIAARLg");
	var mask_graphics_24 = new cjs.Graphics().p("AqKImIAAxLIUVAAIAARLg");
	var mask_graphics_25 = new cjs.Graphics().p("ArbImIAAxLIW3AAIAARLg");
	var mask_graphics_26 = new cjs.Graphics().p("AssImIAAxLIZZAAIAARLg");
	var mask_graphics_27 = new cjs.Graphics().p("At9ImIAAxLIb7AAIAARLg");
	var mask_graphics_28 = new cjs.Graphics().p("AvNImIAAxLIebAAIAARLg");
	var mask_graphics_29 = new cjs.Graphics().p("AweImIAAxLMAg9AAAIAARLg");
	var mask_graphics_30 = new cjs.Graphics().p("AxvImIAAxLMAjfAAAIAARLg");
	var mask_graphics_31 = new cjs.Graphics().p("AzAImIAAxLMAmBAAAIAARLg");
	var mask_graphics_32 = new cjs.Graphics().p("A0QImIAAxLMAohAAAIAARLg");
	var mask_graphics_33 = new cjs.Graphics().p("A1hImIAAxLMArDAAAIAARLg");
	var mask_graphics_34 = new cjs.Graphics().p("A2yImIAAxLMAtlAAAIAARLg");
	var mask_graphics_35 = new cjs.Graphics().p("A4DImIAAxLMAwHAAAIAARLg");
	var mask_graphics_36 = new cjs.Graphics().p("A5UImIAAxLMAypAAAIAARLg");
	var mask_graphics_37 = new cjs.Graphics().p("A6kImIAAxLMA1JAAAIAARLg");
	var mask_graphics_38 = new cjs.Graphics().p("A71ImIAAxLMA3rAAAIAARLg");
	var mask_graphics_39 = new cjs.Graphics().p("A9GImIAAxLMA6NAAAIAARLg");
	var mask_graphics_40 = new cjs.Graphics().p("A+XImIAAxLMA8vAAAIAARLg");
	var mask_graphics_41 = new cjs.Graphics().p("A/oImIAAxLMA/RAAAIAARLg");
	var mask_graphics_42 = new cjs.Graphics().p("Egg4AImIAAxLMBBxAAAIAARLg");
	var mask_graphics_43 = new cjs.Graphics().p("EgiJAImIAAxLMBETAAAIAARLg");
	var mask_graphics_44 = new cjs.Graphics().p("EgjaAImIAAxLMBG1AAAIAARLg");
	var mask_graphics_45 = new cjs.Graphics().p("EgkrAImIAAxLMBJXAAAIAARLg");
	var mask_graphics_46 = new cjs.Graphics().p("Egl7AImIAAxLMBL3AAAIAARLg");
	var mask_graphics_47 = new cjs.Graphics().p("EgnMAImIAAxLMBOZAAAIAARLg");
	var mask_graphics_48 = new cjs.Graphics().p("EgodAImIAAxLMBQ7AAAIAARLg");
	var mask_graphics_49 = new cjs.Graphics().p("EgpuAImIAAxLMBTdAAAIAARLg");
	var mask_graphics_50 = new cjs.Graphics().p("Egq/AImIAAxLMBV/AAAIAARLg");
	var mask_graphics_51 = new cjs.Graphics().p("EgsPAImIAAxLMBYfAAAIAARLg");
	var mask_graphics_52 = new cjs.Graphics().p("EgtgAImIAAxLMBbBAAAIAARLg");
	var mask_graphics_53 = new cjs.Graphics().p("EguxAImIAAxLMBdjAAAIAARLg");
	var mask_graphics_54 = new cjs.Graphics().p("EgwCAImIAAxLMBgFAAAIAARLg");
	var mask_graphics_55 = new cjs.Graphics().p("EgxSAImIAAxLMBilAAAIAARLg");
	var mask_graphics_56 = new cjs.Graphics().p("EgyjAImIAAxLMBlHAAAIAARLg");
	var mask_graphics_57 = new cjs.Graphics().p("Egz0AImIAAxLMBnpAAAIAARLg");
	var mask_graphics_58 = new cjs.Graphics().p("Eg1FAImIAAxLMBqLAAAIAARLg");
	var mask_graphics_59 = new cjs.Graphics().p("Eg2WAImIAAxLMBstAAAIAARLg");
	var mask_graphics_60 = new cjs.Graphics().p("Eg3mAImIAAxLMBvNAAAIAARLg");
	var mask_graphics_61 = new cjs.Graphics().p("Eg43AImIAAxLMBxvAAAIAARLg");
	var mask_graphics_62 = new cjs.Graphics().p("Eg6IAImIAAxLMB0RAAAIAARLg");
	var mask_graphics_63 = new cjs.Graphics().p("Eg7ZAImIAAxLMB2zAAAIAARLg");
	var mask_graphics_64 = new cjs.Graphics().p("Eg8pAImIAAxLMB5TAAAIAARLg");
	var mask_graphics_65 = new cjs.Graphics().p("Eg96AImIAAxLMB71AAAIAARLg");
	var mask_graphics_66 = new cjs.Graphics().p("Eg/LAImIAAxLMB+XAAAIAARLg");
	var mask_graphics_67 = new cjs.Graphics().p("EhAcAImIAAxLMCA5AAAIAARLg");
	var mask_graphics_68 = new cjs.Graphics().p("EhBtAImIAAxLMCDbAAAIAARLg");
	var mask_graphics_69 = new cjs.Graphics().p("EhC9AImIAAxLMCF7AAAIAARLg");
	var mask_graphics_70 = new cjs.Graphics().p("EhEOAImIAAxLMCIdAAAIAARLg");
	var mask_graphics_71 = new cjs.Graphics().p("EhFfAImIAAxLMCK/AAAIAARLg");
	var mask_graphics_72 = new cjs.Graphics().p("EhGwAImIAAxLMCNhAAAIAARLg");
	var mask_graphics_73 = new cjs.Graphics().p("EhIBAImIAAxLMCQDAAAIAARLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:0,y:135.05}).wait(1).to({graphics:mask_graphics_17,x:8.0702,y:135.05}).wait(1).to({graphics:mask_graphics_18,x:16.1404,y:135.05}).wait(1).to({graphics:mask_graphics_19,x:24.2105,y:135.05}).wait(1).to({graphics:mask_graphics_20,x:32.2807,y:135.05}).wait(1).to({graphics:mask_graphics_21,x:40.3509,y:135.05}).wait(1).to({graphics:mask_graphics_22,x:48.4211,y:135.05}).wait(1).to({graphics:mask_graphics_23,x:56.4912,y:135.05}).wait(1).to({graphics:mask_graphics_24,x:64.5614,y:135.05}).wait(1).to({graphics:mask_graphics_25,x:72.6316,y:135.05}).wait(1).to({graphics:mask_graphics_26,x:80.7018,y:135.05}).wait(1).to({graphics:mask_graphics_27,x:88.7719,y:135.05}).wait(1).to({graphics:mask_graphics_28,x:96.8421,y:135.05}).wait(1).to({graphics:mask_graphics_29,x:104.9123,y:135.05}).wait(1).to({graphics:mask_graphics_30,x:112.9825,y:135.05}).wait(1).to({graphics:mask_graphics_31,x:121.0526,y:135.05}).wait(1).to({graphics:mask_graphics_32,x:129.1228,y:135.05}).wait(1).to({graphics:mask_graphics_33,x:137.193,y:135.05}).wait(1).to({graphics:mask_graphics_34,x:145.2632,y:135.05}).wait(1).to({graphics:mask_graphics_35,x:153.3333,y:135.05}).wait(1).to({graphics:mask_graphics_36,x:161.4035,y:135.05}).wait(1).to({graphics:mask_graphics_37,x:169.4737,y:135.05}).wait(1).to({graphics:mask_graphics_38,x:177.5439,y:135.05}).wait(1).to({graphics:mask_graphics_39,x:185.614,y:135.05}).wait(1).to({graphics:mask_graphics_40,x:193.6842,y:135.05}).wait(1).to({graphics:mask_graphics_41,x:201.7544,y:135.05}).wait(1).to({graphics:mask_graphics_42,x:209.8246,y:135.05}).wait(1).to({graphics:mask_graphics_43,x:217.8947,y:135.05}).wait(1).to({graphics:mask_graphics_44,x:225.9649,y:135.05}).wait(1).to({graphics:mask_graphics_45,x:234.0351,y:135.05}).wait(1).to({graphics:mask_graphics_46,x:242.1053,y:135.05}).wait(1).to({graphics:mask_graphics_47,x:250.1754,y:135.05}).wait(1).to({graphics:mask_graphics_48,x:258.2456,y:135.05}).wait(1).to({graphics:mask_graphics_49,x:266.3158,y:135.05}).wait(1).to({graphics:mask_graphics_50,x:274.386,y:135.05}).wait(1).to({graphics:mask_graphics_51,x:282.4561,y:135.05}).wait(1).to({graphics:mask_graphics_52,x:290.5263,y:135.05}).wait(1).to({graphics:mask_graphics_53,x:298.5965,y:135.05}).wait(1).to({graphics:mask_graphics_54,x:306.6667,y:135.05}).wait(1).to({graphics:mask_graphics_55,x:314.7368,y:135.05}).wait(1).to({graphics:mask_graphics_56,x:322.807,y:135.05}).wait(1).to({graphics:mask_graphics_57,x:330.8772,y:135.05}).wait(1).to({graphics:mask_graphics_58,x:338.9474,y:135.05}).wait(1).to({graphics:mask_graphics_59,x:347.0175,y:135.05}).wait(1).to({graphics:mask_graphics_60,x:355.0877,y:135.05}).wait(1).to({graphics:mask_graphics_61,x:363.1579,y:135.05}).wait(1).to({graphics:mask_graphics_62,x:371.2281,y:135.05}).wait(1).to({graphics:mask_graphics_63,x:379.2982,y:135.05}).wait(1).to({graphics:mask_graphics_64,x:387.3684,y:135.05}).wait(1).to({graphics:mask_graphics_65,x:395.4386,y:135.05}).wait(1).to({graphics:mask_graphics_66,x:403.5088,y:135.05}).wait(1).to({graphics:mask_graphics_67,x:411.5789,y:135.05}).wait(1).to({graphics:mask_graphics_68,x:419.6491,y:135.05}).wait(1).to({graphics:mask_graphics_69,x:427.7193,y:135.05}).wait(1).to({graphics:mask_graphics_70,x:435.7895,y:135.05}).wait(1).to({graphics:mask_graphics_71,x:443.8596,y:135.05}).wait(1).to({graphics:mask_graphics_72,x:451.9298,y:135.05}).wait(1).to({graphics:mask_graphics_73,x:460,y:135.05}).wait(163).to({graphics:null,x:0,y:0}).wait(1278));

	// FlashAICB
	this.instance_19 = new lib.line();
	this.instance_19.parent = this;
	this.instance_19.setTransform(445,137.95,1,1,0,0,0,445,24.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(16).to({_off:false},0).to({_off:true},220).wait(1278));

	// Layer_2
	this.instance_20 = new lib.titulo();
	this.instance_20.parent = this;
	this.instance_20.setTransform(512.1,280,1.2577,1.2577,0,0,0,256.1,104.9);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1,scaleY:1,x:512.05,y:279.95,alpha:1},28,cjs.Ease.get(1)).to({_off:true},208).wait(1278));

	// Layer_1
	this.instance_21 = new lib.fondo();
	this.instance_21.parent = this;
	this.instance_21.setTransform(512.6,319.7,1,1,0,0,0,512.6,319.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},236).wait(1278));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-917,279.5,3376,460.9);
// library properties:
lib.properties = {
	id: 'DBF4687AE0D149FE95B8972713C768F2',
	width: 1024,
	height: 638,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/an_el2.png?1571854915398", id:"an_el2"},
		{src:"images/an_ella2.png?1571854915398", id:"an_ella2"},
		{src:"images/Bitmap3.png?1571854915398", id:"Bitmap3"},
		{src:"images/Bitmap5.png?1571854915399", id:"Bitmap5"},
		{src:"images/candado.png?1571854915399", id:"candado"},
		{src:"images/estrella_vacia.png?1571854915399", id:"estrella_vacia"},
		{src:"images/fondo1.png?1571854915399", id:"fondo1"},
		{src:"images/fondo2.png?1571854915399", id:"fondo2"},
		{src:"images/img2.png?1571854915399", id:"img2"},
		{src:"images/insignia.png?1571854915399", id:"insignia"},
		{src:"images/laberinto2.png?1571854915399", id:"laberinto2"},
		{src:"images/oportunidades.png?1571854915399", id:"oportunidades"},
		{src:"images/oportunidades_no.png?1571854915399", id:"oportunidades_no"},
		{src:"images/perfil1.png?1571854915399", id:"perfil1"},
		{src:"images/perfil2.png?1571854915399", id:"perfil2"},
		{src:"images/pin1.png?1571854915399", id:"pin1"},
		{src:"images/pin2.png?1571854915399", id:"pin2"},
		{src:"images/pin3.png?1571854915399", id:"pin3"},
		{src:"images/pin4.png?1571854915399", id:"pin4"},
		{src:"images/pin5.png?1571854915399", id:"pin5"},
		{src:"images/puntaje.png?1571854915399", id:"puntaje"},
		{src:"images/titulo2_1.png?1571854915399", id:"titulo2_1"},
		{src:"sounds/_6_Diapositiva25_01.mp3?1571854915399", id:"_6_Diapositiva25_01"},
		{src:"sounds/_6_Diapositiva5_01_2.mp3?1571854915399", id:"_6_Diapositiva5_01_2"},
		{src:"sounds/_6_Diapositiva6_01.mp3?1571854915399", id:"_6_Diapositiva6_01"}
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
an.compositions['DBF4687AE0D149FE95B8972713C768F2'] = {
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