(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 60,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCC532").s().p("AhjBHIAAguIBjAAQApAAAdgcQAcgbABgoIAAArQABAngeAdQgdAegpAAg");
	this.shape.setTransform(10,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhjBMIAAg2QAAgnAdgeQAegdAoAAIBjAAIAAA5QgBAmgcAcQgdAegpgBg");
	this.shape_1.setTransform(10,7.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.grain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-10.1,7,0.05,0.05,0,0,0,0,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10,regY:10,scaleX:0.07,scaleY:0.07,rotation:0.6,x:-9.3,y:6.3},0).wait(1).to({scaleX:0.1,scaleY:0.1,rotation:1.2,x:-9.1,y:6.1},0).wait(1).to({scaleX:0.12,scaleY:0.12,rotation:1.7,x:-8.8,y:6},0).wait(1).to({scaleX:0.15,scaleY:0.15,rotation:2.3,x:-8.6,y:5.8},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:2.9,x:-8.3,y:5.7},0).wait(1).to({scaleX:0.2,scaleY:0.2,rotation:3.5,x:-8,y:5.5},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:4,x:-7.7,y:5.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:4.6,x:-7.5,y:5.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:5.2,x:-7.2,y:5.2},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:5.8,x:-6.9,y:5.1},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:6.3,x:-6.6,y:4.9},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:6.9,x:-6.3,y:4.8},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:7.5,x:-6},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:8.1,x:-5.7,y:4.6},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:8.6,x:-5.4},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:9.2,x:-5},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:9.8,x:-4.8,y:4.5},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:10.4,x:-4.4,y:4.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:10.9,x:-4.1,y:4.3},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:11.5,x:-3.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:12.1,x:-3.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:12.7,x:-3.1,y:4.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:13.3,x:-2.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:13.8,x:-2.4,y:4.1},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:14.4,x:-2.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:15,x:-1.7},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:15.6,x:-1.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:16.1,x:-1},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:16.7,x:-0.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:17.3,x:-0.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:17.9,x:0},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:18.4,x:0.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:19,x:0.7,y:4.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:19.6,x:1.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:20.2,x:1.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:20.7,x:1.8,y:4.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:21.3,x:2.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:21.9,x:2.6,y:4.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.5,x:3,y:4.5},0).wait(1).to({rotation:16.4,x:2.3,y:3.1},0).wait(1).to({rotation:10.2,x:1.5,y:1.9},0).wait(1).to({rotation:4.1,x:0.6,y:0.6},0).wait(1).to({rotation:-2,x:-0.4,y:-0.4},0).wait(1).to({rotation:-8.1,x:-1.6,y:-1.4},0).wait(1).to({rotation:-6.3,x:-1.2,y:-1.1},0).wait(1).to({rotation:-4.5,x:-0.9,y:-0.9},0).wait(1).to({rotation:-2.7,x:-0.6,y:-0.5},0).wait(1).to({rotation:-0.9,x:-0.3,y:-0.2},0).wait(1).to({rotation:0.9,x:0.1,y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,6,1,1);


(lib.stauk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.grain();
	this.instance.setTransform(-9.9,-259.9,1,1,0,0,180,-9.7,7.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:-21.1,y:-265.4},0).wait(61).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 11
	this.instance_1 = new lib.grain();
	this.instance_1.setTransform(-9.9,-229.9,1,1,0,0,180,-9.7,7.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:-21.1,y:-235.4},0).wait(75).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 10
	this.instance_2 = new lib.grain();
	this.instance_2.setTransform(-9.9,-199.9,1,1,0,0,180,-9.7,7.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:-21.1,y:-205.4},0).wait(83).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 4
	this.instance_3 = new lib.grain();
	this.instance_3.setTransform(10,-256.5,1,1,0,0,0,-9.7,7.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:21.2,y:-262},0).wait(61).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 3
	this.instance_4 = new lib.grain();
	this.instance_4.setTransform(11,-226.5,1,1,0,0,0,-9.7,7.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:22.2,y:-232},0).wait(75).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 2
	this.instance_5 = new lib.grain();
	this.instance_5.setTransform(11,-197.5,1,1,0,0,0,-9.7,7.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(1).to({regX:1.5,regY:2.4,x:22.2,y:-203},0).wait(83).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(5,1,1).p("AAAAyIAAhj");
	this.shape.setTransform(0,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC00").ss(5.2,1,1).p("AAAhbIAAC3");
	this.shape_1.setTransform(0,-9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC00").ss(5.4,1,1).p("AAAiEIAAEJ");
	this.shape_2.setTransform(0,-13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(5.5,1,1).p("AAAitIAAFb");
	this.shape_3.setTransform(0,-17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFCC00").ss(5.7,1,1).p("AAAjUIAAGp");
	this.shape_4.setTransform(0,-21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFCC00").ss(5.8,1,1).p("AAAj8IAAH5");
	this.shape_5.setTransform(0,-25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFCC00").ss(6,1,1).p("AAAkiIAAJF");
	this.shape_6.setTransform(0,-29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFCC00").ss(6.1,1,1).p("AAAlIIAAKR");
	this.shape_7.setTransform(0,-32.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFCC00").ss(6.3,1,1).p("AAAltIAALb");
	this.shape_8.setTransform(0,-36.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFCC00").ss(6.4,1,1).p("AAAmRIAAMj");
	this.shape_9.setTransform(0,-40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFCC00").ss(6.6,1,1).p("AAAm0IAANp");
	this.shape_10.setTransform(0,-43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFCC00").ss(6.7,1,1).p("AAAnXIAAOv");
	this.shape_11.setTransform(0,-47.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFCC00").ss(6.9,1,1).p("AAAn5IAAPz");
	this.shape_12.setTransform(0,-50.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFCC00").ss(7,1,1).p("AAAobIAAQ3");
	this.shape_13.setTransform(0,-54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFCC00").ss(7.1,1,1).p("AAAo7IAAR3");
	this.shape_14.setTransform(0,-57.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFCC00").ss(7.2,1,1).p("AAApbIAAS3");
	this.shape_15.setTransform(0,-60.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFCC00").ss(7.4,1,1).p("AAAp7IAAT3");
	this.shape_16.setTransform(0,-63.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFCC00").ss(7.5,1,1).p("AAAqZIAAUz");
	this.shape_17.setTransform(0,-66.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFCC00").ss(7.6,1,1).p("AAAq3IAAVv");
	this.shape_18.setTransform(0,-69.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFCC00").ss(7.7,1,1).p("AAArUIAAWp");
	this.shape_19.setTransform(0,-72.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFCC00").ss(7.8,1,1).p("AAArwIAAXh");
	this.shape_20.setTransform(0,-75.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFCC00").ss(8,1,1).p("AAAsMIAAYZ");
	this.shape_21.setTransform(0,-78.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFCC00").ss(8.1,1,1).p("AAAsnIAAZP");
	this.shape_22.setTransform(0,-80.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFCC00").ss(8.2,1,1).p("AAAtBIAAaD");
	this.shape_23.setTransform(0,-83.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFCC00").ss(8.3,1,1).p("AAAtbIAAa3");
	this.shape_24.setTransform(0,-86);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFCC00").ss(8.4,1,1).p("AAAt0IAAbp");
	this.shape_25.setTransform(0,-88.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFCC00").ss(8.5,1,1).p("AAAuMIAAcZ");
	this.shape_26.setTransform(0,-90.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFCC00").ss(8.6,1,1).p("AAAujIAAdH");
	this.shape_27.setTransform(0,-93.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFCC00").ss(8.6,1,1).p("AAAu6IAAd1");
	this.shape_28.setTransform(0,-95.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFCC00").ss(8.7,1,1).p("AAAvPIAAef");
	this.shape_29.setTransform(0,-97.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFCC00").ss(8.8,1,1).p("AAAvlIAAfL");
	this.shape_30.setTransform(0,-99.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFCC00").ss(8.9,1,1).p("AAAv5IAAfz");
	this.shape_31.setTransform(0,-101.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFCC00").ss(9,1,1).p("AAAwNMAAAAgb");
	this.shape_32.setTransform(0,-103.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFCC00").ss(9.1,1,1).p("AAAwgMAAAAhB");
	this.shape_33.setTransform(0,-105.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFCC00").ss(9.1,1,1).p("AAAwyMAAAAhl");
	this.shape_34.setTransform(0,-107.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFCC00").ss(9.2,1,1).p("AAAxEMAAAAiJ");
	this.shape_35.setTransform(0,-109.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFCC00").ss(9.3,1,1).p("AAAxVMAAAAir");
	this.shape_36.setTransform(0,-111);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFCC00").ss(9.3,1,1).p("AAAxlMAAAAjL");
	this.shape_37.setTransform(0,-112.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFCC00").ss(9.4,1,1).p("AAAx0MAAAAjp");
	this.shape_38.setTransform(0,-114.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFCC00").ss(9.5,1,1).p("AAAyDMAAAAkH");
	this.shape_39.setTransform(0,-115.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFCC00").ss(9.5,1,1).p("AAAyRMAAAAkj");
	this.shape_40.setTransform(0,-117);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFCC00").ss(9.6,1,1).p("AAAyeMAAAAk9");
	this.shape_41.setTransform(0,-118.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFCC00").ss(9.6,1,1).p("AAAyrMAAAAlX");
	this.shape_42.setTransform(0,-119.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFCC00").ss(9.7,1,1).p("AAAy3MAAAAlv");
	this.shape_43.setTransform(0,-120.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFCC00").ss(9.7,1,1).p("AAAzCMAAAAmF");
	this.shape_44.setTransform(0,-121.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFCC00").ss(9.7,1,1).p("AAAzMMAAAAmZ");
	this.shape_45.setTransform(0,-122.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFCC00").ss(9.8,1,1).p("AAAzWMAAAAmt");
	this.shape_46.setTransform(0,-123.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFCC00").ss(9.8,1,1).p("AAAzfMAAAAm/");
	this.shape_47.setTransform(0,-124.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFCC00").ss(9.9,1,1).p("AAAznMAAAAnP");
	this.shape_48.setTransform(0,-125.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFCC00").ss(9.9,1,1).p("AAAzvMAAAAnf");
	this.shape_49.setTransform(0,-126.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFCC00").ss(9.9,1,1).p("AAAz2MAAAAnt");
	this.shape_50.setTransform(0,-127.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFCC00").ss(9.9,1,1).p("AAAz8MAAAAn5");
	this.shape_51.setTransform(0,-127.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0BMAAAAoD");
	this.shape_52.setTransform(0,-128.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0GMAAAAoN");
	this.shape_53.setTransform(0,-128.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0KMAAAAoV");
	this.shape_54.setTransform(0,-129.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0NMAAAAob");
	this.shape_55.setTransform(0,-129.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0PMAAAAof");
	this.shape_56.setTransform(0,-129.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0RMAAAAoj");
	this.shape_57.setTransform(0,-129.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFCC00").ss(10,1,1).p("AAA0SMAAAAol");
	this.shape_58.setTransform(0,-130);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAUUMAAAgon");
	this.shape_59.setTransform(0,-130);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAw6MAAAAh1");
	this.shape_60.setTransform(0,-108.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAt1IAAbr");
	this.shape_61.setTransform(0,-88.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFCC00").ss(10,1,1).p("AAArGIAAWN");
	this.shape_62.setTransform(0,-71.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAorIAARX");
	this.shape_63.setTransform(0,-55.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAmlIAANL");
	this.shape_64.setTransform(0,-42.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAkzIAAJn");
	this.shape_65.setTransform(0,-30.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAjWIAAGt");
	this.shape_66.setTransform(0,-21.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAiOIAAEd");
	this.shape_67.setTransform(0,-14.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAhaIAAC1");
	this.shape_68.setTransform(0,-9.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAg7IAAB3");
	this.shape_69.setTransform(0,-6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFCC00").ss(10,1,1).p("AAAAyIAAhj");
	this.shape_70.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_59}]},50).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-12.5,5,15);


// stage content:



(lib.Wheat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 3
	this.instance = new lib.stauk();
	this.instance.setTransform(363.8,260,1,1,0,0,0,3.8,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},120).wait(43));

	// Layer 1 copy
	this.instance_1 = new lib.stauk();
	this.instance_1.setTransform(193.7,260,1,1,0,0,180,3.8,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},120).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(470,577.5,167.5,15);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;