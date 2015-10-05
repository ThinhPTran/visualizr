"use strict";angular.module("visualizrApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("visualizrApp").controller("MainCtrl",["$scope",function(a){console.log(g3)}]),angular.module("visualizrApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),function(a){function b(){var a={};return a}"undefined"==typeof g3&&(a.g3=b()),g3.canvas=function(a,b){return new c(a,b)};var c=function(a,b){return b&&$.isArray(b)?a?(this._data=b,this._plot=a,this._canvas=d3.select(this._plot._elem).append("canvas").attr("width",this._data.length).attr("height",this._data[0].length).style("width",this._plot._width+"px").style("height",this._plot._height+"px").style("opacity",.95).style("top",this._plot._margin.top+"px").style("left",this._plot._margin.left+"px"),this):"Param: plot is missing, a div to attach the svg is required":"Param: data is missing, An array required"};c.prototype.style={},c.prototype.style.opacity=function(a){return void 0===a?this._style._opacity:(this._style._opacity=a,this._canvas.style("opacity",a),this)},c.prototype.gain=function(a){return void 0===a?this._gain:(this._gain=a,this)},c.prototype.colorScale=function(a){return void 0===a?this._colorScale:(this._colorScale=a,this)},c.prototype.draw=function(){return this._context=this._canvas.node().getContext("2d"),this.drawImage(),this},c.prototype.reDraw=function(a){return this._context.clearRect(0,0,this._data.length,this._data[0].length),this._canvas.attr("width",a.length).attr("height",a[0].length),this._data=a,this.drawImage(),this},c.prototype.drawImage=function(){var a=this._data.length,b=this._data[0].length;this._image=this._context.createImageData(a,b);for(var c=0,d=-1;b>c;++c)for(var e=0;a>e;++e){var f=d3.rgb(this._colorScale(this._data[e][c]*this._gain));this._image.data[++d]=f.r,this._image.data[++d]=f.g,this._image.data[++d]=f.b,this._image.data[++d]=255}return this._context.putImageData(this._image,0,0),this},g3.handle={},g3.handle.line=function(a,b,c,e,f){return new d(a,b,c,e,f)};var d=function j(a,b,c,j,d){return a?(this._plot=a,this._x=b,this._y=c,this._x2=void 0===j?b:j,this._y2=void 0===d?c:d,this):"Param: plot is missing, a div to attach the svg is required"};d.prototype._strokeWidth=30,d.prototype._stroke="black",d.prototype._cursor="pointer",d.prototype._opacity=0,d.prototype._duration=5,d.prototype["class"]=function(a){return void 0===a?this._class:(this._class=a,this)},d.prototype.strokeWidth=function(a){return void 0===a?this._strokeWidth:(this._strokeWidth=a,this)},d.prototype.stroke=function(a){return void 0===a?this._color:(this._color=a,this)},d.prototype.cursor=function(a){return void 0===a?this._cursor:(this._cursor=a,this)},d.prototype.opacity=function(a){return void 0===a?this._opacity:(this._opacity=a,this)},d.prototype.line=function(a){return void 0===a?this._line:(this._line=a,this)},d.prototype.draw=function(){return this._line=this._plot._svg.append("line").attr("class",this._class).style("stroke-width",this._strokeWidth).style("stroke",this._stroke).style("cursor",this._cursor).style("opacity",this._opacity).attr("x1",this._plot._xScale(this._x)).attr("y1",this._plot._yScale(this._y)).attr("x2",this._plot._xScale(this._x2)).attr("y2",this._plot._yScale(this._y2)),this},d.prototype.reDraw=function(a,b,c,d){return this._line.transition().duration(this._duration).attr("x1",this._plot._xScale(a)).attr("y1",this._plot._yScale(b)).attr("x2",this._plot._xScale(c)).attr("y2",this._plot._yScale(d)),this},g3.horizon=function(a,b){return new e(a,b)};var e=function(a,b){return b&&$.isArray(b)?a?(this._data=b,this._plot=a,this._xMin=a._xDomain[0],this._yMin=a._yDomain[0],this):"Param: plot is missing, a div to attach the svg is required":"Param: data is missing, An array required"};e.prototype._xInt=1,e.prototype._yInt=1,e.prototype._duration=5,e.prototype._gain=1,e.prototype._interpolate="basis",e.prototype._color="green",e.prototype._strokeWidth=1.5,e.prototype._opacity=1,e.prototype.interpolate=function(a){return void 0===a?this._interpolate:(this._interpolate=a,this)},e.prototype.xMin=function(a){return void 0===a?this._xMin:(this._xMin=a,this)},e.prototype.yMin=function(a){return void 0===a?this._yMin:(this._yMin=a,this)},e.prototype.xInt=function(a){return void 0===a?this._xInt:(this._xInt=a,this)},e.prototype.yInt=function(a){return void 0===a?this._yInt:(this._yInt=a,this)},e.prototype.duration=function(a){return void 0===a?this._duration:(this._duration=a,this)},e.prototype.gain=function(a){return void 0===a?this._gain:(this._gain=a,this)},e.prototype.color=function(a){return void 0===a?this._color:(this._color=a,this)},e.prototype.strokeWidth=function(a){return void 0===a?this._strokeWidth:(this._strokeWidth=a,this)},e.prototype.opacity=function(a){return void 0===a?this._opacity:(this._opacity=a,this)},e.prototype.cursor=function(a){return void 0===a?this_cursor:(this._cursor=a,this)},e.prototype.lineFunc=function(){var a=this._plot,b=this._xMin,c=this._gain,d=this._interpolate,e=d3.svg.line().x(function(c,d){return a._xScale(d+b)}).y(function(b){return a._yScale(b*c)}).interpolate(d);return e},e.prototype.draw=function(){var a=this.lineFunc();return this._svg=this._plot._svg.append("path").attr("d",a(this._data)).attr("stroke",this._color).attr("stroke-width",this._strokeWidth).style("opacity",this._opacity).attr("fill","none"),this._cursor&&this._svg.style("cursor",this._cursor),this},e.prototype.reDraw=function(a){var b=this.lineFunc();return this._svg.transition().duration(this._duration).attr("d",b(a)),this},g3.log=function(a,b){return new f(a,b)};var f=function(a,b){return b&&$.isArray(b)?a?(this._data=b,this._plot=a,this._xMin=a._xDomain[0],this._yMin=a._yDomain[0],this):"Param: plot is missing, a div to attach the svg is required":"Param: data is missing, An array required"};f.prototype._xInt=1,f.prototype._yInt=1,f.prototype._color="blue",f.prototype._duration=5,f.prototype._strokeWidth=.25,f.prototype.duration=function(a){return void 0===a?this._duration:(this._duration=a,this)},f.prototype.xMin=function(a){return void 0===a?this._xMin:(this._xMin=a,this)},f.prototype.xInt=function(a){return void 0===a?this._xInt:(this._xInt=a,this)},f.prototype.yMin=function(a){return void 0===a?this._yMin:(this._yMin=a,this)},f.prototype.yInt=function(a){return void 0===a?this._yInt:(this._yInt=a,this)},f.prototype.color=function(a){return void 0===a?this._color:(this._color=a,this)},f.prototype.strokeWidth=function(a){return void 0===a?this._strokeWidth:(this._strokeWidth=a,this)},f.prototype.draw=function(){var a=this.lineFunc();return this._svg=this._plot._svg.append("path").datum(this._data).attr("d",a).attr("stroke",this._color).attr("stroke-width",this._strokeWidth).attr("fill","none"),this},f.prototype.reDraw=function(a){var b=this.lineFunc();return this._svg.transition().duration(this._duration).attr("d",b(a)).ease("linear"),this},f.prototype.lineFunc=function(){var a=this._plot,b=this._yInt,c=this._yMin,d=this._interpolate;return d3.svg.line().x(function(b){return a.xScale(b)}).y(function(d,e){return a.yScale(e*b+c)}).interpolate(d)},g3.plot=function(a){return new g(a)};var g=function(a){return a?(this._elem=a,this._margin={top:50,right:0,bottom:30,left:0},this._width=$(this._elem).width()-this._margin.left,this):"Param: elem is missing. A div to attach to is required"};g.prototype._height=800,g.prototype._xDomain=[0,0],g.prototype._yDomain=[0,0],g.prototype._xAxisVisible=!0,g.prototype._yAxisVisible=!0,g.prototype._x2AxisVisible=!0,g.prototype._y2AxisVisible=!0,g.prototype._xOrient="top",g.prototype._x2Orient="bottom",g.prototype._yOrient="left",g.prototype._y2Orient="right",g.prototype._duration=5,g.prototype.duration=function(a){return void 0===a?this._duration:(this._duration=a,this)},g.prototype.margin=function(a,b,c,d){return void 0===a?this._margin:(this._margin={top:a,right:b,bottom:c,left:d},this)},g.prototype.width=function(a){return void 0===a?this._width:(this._width=a,this)},g.prototype.height=function(a){return void 0===a?this._height:(this._height=a,this)},g.prototype.xDomain=function(a){return void 0===a?this._xDomain:(this._xDomain=a,this)},g.prototype.yDomain=function(a){return void 0===a?this._yDomain:(this._yDomain=a,this)},g.prototype.y2Domain=function(a){return void 0===a?this._y2Domain:(this._x2Domain=a,this)},g.prototype.y2Domain=function(a){return void 0===a?this._y2Domain:(this._y2Domain=a,this)},g.prototype.toggleXAxis=function(a){return void 0===a?this._xAxisVisible:(this._xAxisVisible=a,this)},g.prototype.toggleX2Axis=function(a){return void 0===a?this._x2AxisVisible:(this._x2AxisVisible=a,this)},g.prototype.toggleYAxis=function(a){return void 0===a?this._yAxisVisible:(this._yAxisVisible=a,this)},g.prototype.toggleY2Axis=function(a){return void 0===a?this._y2AxisVisible:(this._y2AxisVisible=a,this)},g.prototype.xTicks=function(a){return void 0===a?this._xTicks:(this._xTicks=a,this)},g.prototype.yTicks=function(a){return void 0===a?this._yTicks:(this._yTicks=a,this)},g.prototype.x2Ticks=function(a){return void 0===a?this._x2Ticks:(this._x2Ticks=a,this)},g.prototype.y2Ticks=function(a){return void 0===a?this._y2Ticks:(this._y2Ticks=a,this)},g.prototype.xTitle=function(a){return void 0===a?this._yTitle:(this._xTitle=a,this)},g.prototype.yTitle=function(a){return void 0===a?this._yTitle:(this._yTitle=a,this)},g.prototype.y2Title=function(a){return void 0===a?this._y2Title:(this._y2Title=a,this)},g.prototype.x2Title=function(a){return void 0===a?this._x2Title:(this._x2Title=a,this)},g.prototype.xOrient=function(a){return void 0===a?this._xOrient:(this._xOrient=a,this)},g.prototype.x2Orient=function(a){return void 0===a?this._x2Orient:(this._x2Orient=a,this)},g.prototype.yOrient=function(a){return void 0===a?this._yOrient:(this._yOrient=a,this)},g.prototype.y2Orient=function(a){return void 0===a?this._y2Orient:(this._y2Orient=a,this)},g.prototype.xTickFormat=function(a){return void 0===a?this._xTickFormat:(this._xTickFormat=a,this)},g.prototype.yTickFormat=function(a){return void 0===a?this._yTickFormat:(this._yTickFormat=a,this)},g.prototype.x2TickFormat=function(a){return void 0===a?this._x2TickFormat:(this._x2TickFormat=a,this)},g.prototype.y2TickFormat=function(a){return void 0===a?this._y2TickFormat:(this._y2TickFormat=a,this)},g.prototype.xScale=function(a){return void 0===a?this._xScale:(this._xScale=a,this)},g.prototype.x2Scale=function(a){return void 0===a?this._x2Scale:(this._x2Scale=a,this)},g.prototype.yScale=function(a){return void 0===a?this._yScale:(this._yScale=a,this)},g.prototype.y2Scale=function(a){return void 0===a?this._y2Scale:(this._y2Scale=a,this)},g.prototype.svg=function(a){return void 0===a?this._svg:(this._svg=a,this)},g.prototype.createSVG=function(){return d3.select(this._elem).append("svg").attr("class","log_plot").attr("width",this._width+this._margin.right+this._margin.left).attr("height",this._height+this._margin.bottom+this._margin.top).append("g").attr("height",this.height).attr("transform","translate("+this._margin.left+","+this._margin.top+")")},g.prototype.setScales=function(){this._xScale=d3.scale.linear().domain(this._xDomain).range([0,this._width]),this._yScale=d3.scale.linear().domain(this._yDomain).range([0,this._height]),void 0===this._x2Domain&&(this._x2Domain=this._xDomain),this._x2Scale=d3.scale.linear().domain(this._x2Domain).range([0,this._width]),void 0===this._y2Domain&&(this._y2Domain=this._yDomain),this._y2Scale=d3.scale.linear().domain(this._y2Domain).range([0,this._height])},g.prototype.createAxis=function(a,b,c,d){return d3.svg.axis().scale(a).innerTickSize(b).outerTickSize(3).tickPadding(5).orient(c).ticks(d)},g.prototype.setAxis=function(){this._xAxisVisible&&(this._xAxis=this.createAxis(this._xScale,-this._height,this._xOrient,this._xTicks),this._xAxis.tickFormat(this._xTickFormat),this._svg.append("g").attr("class","x axis").call(this._xAxis)),this._yAxisVisible&&(this._yAxis=this.createAxis(this._yScale,-this._width,this._yOrient,this._yTicks),this._yAxis.tickFormat(this._yTickFormat),this._svg.append("g").attr("class","y axis").call(this._yAxis)),this._x2AxisVisible&&(this._x2Axis=this.createAxis(this._x2Scale,-this._height,this._x2Orient,this._x2Ticks),this._x2Axis.tickFormat(this._x2TickFormat),this._svg.append("g").attr("class","x2 axis").attr("transform","translate(0,"+this._height+")").call(this._x2Axis)),this._y2AxisVisible&&(this._y2Axis=this.createAxis(this._y2Scale,-this._width,this._y2Orient,this._y2Ticks),this._y2Axis.tickFormat(this._y2TickFormat),this._svg.append("g").attr("class","y2 axis").attr("transform","translate("+this._width+",0)").call(this._y2Axis))},g.prototype.setTitles=function(){if(this._xTitle){if(""===this._xTickFormat)var a=-10;else var a=-30;this._svg.append("text").attr("x",this._width/2).attr("y",a).style("text-anchor","middle").style("font-size",12).text(this._xTitle)}if(this._yTitle){if(""===this._yTickFormat)var b=-10;else var b=-40;this._svg.append("text").attr("transform","rotate(-90)").attr("y",b).attr("dy","1em").style("text-anchor","end").style("font-size",12).text(this._yTitle)}if(this._x2Title){if(""===this._x2TickFormat)var a=10;else var a=30;this._svg.append("text").attr("transform","translate(0,"+this._height+")").attr("x",this._width/2).attr("y",a).style("text-anchor","middle").style("font-size",12).text(this._x2Title)}if(this._y2Title){if(""===this._yTickFormat)var b=-10;else var b=-40;this._svg.append("text").attr("transform","translate(0,"+this._height+")").attr("y",b).attr("dy","1em").style("text-anchor","end").style("font-size",12).text(this._y2Title)}},g.prototype.draw=function(){return this.setScales(),this._svg=this.createSVG(),this.setAxis(),this.setTitles(),this},g.prototype.reDraw=function(a,b,c,d){a&&(this._xScale.domain(a),this._svg.select(".x.axis").transition().duration(this._duration).call(this._xAxis).ease("linear")),b&&(this._yScale.domain(b),this._svg.select(".y.axis").transition().duration(this._duration).call(this._yAxis).ease("linear")),void 0===c&&(c=a),this._x2Scale.domain(c),this._svg.select(".x2.axis").transition().duration(this._duration).call(this._x2Axis).ease("linear"),void 0===d&&(d=b),this._y2Scale.domain(d),this._svg.select(".y2.axis").transition().duration(this._duration).call(this._y2Axis).ease("linear")},g3.seismic=function(a,b){return new h(a,b)};var h=function(a,b){return b&&$.isArray(b)?a?(this._data=b,this._plot=a,this):"Param: plot is missing, a div to attach the svg is required":"Param: data is missing, An array required"};h.prototype._max=1,h.prototype._gain=1,h.prototype._duration=5,void 0===h._colorScale&&(h.prototype._colorScale=function(){return d3.scale.linear().domain([-this._max,0,this._max]).range(["#FF0000","#FFFFFF","#0000FF"])}),h.prototype.colorScale=function(a){return void 0===a?this._colorScale:(this._colorScale=a,this)},h.prototype.duration=function(a){return void 0===a?this._duration:(this._duration=a,this)},h.prototype.gain=function(a){return void 0===a?this._gain:(this._gain=a,this)},h.prototype.max=function(a){return void 0===a?this._max:(this._max=a,this)},h.prototype.draw=function(){return this._canvas=g3.canvas(this._plot,this._data).gain(this._gain).colorScale(this._colorScale).draw(),this},h.prototype.reDraw=function(a){this._canvas.gain(this._gain).reDraw(a)},g3.wiggle=function(a,b){return new i(a,b)};var i=function(a,b){return b&&$.isArray(b)?a?(this._data=b,this._plot=a,this._xMin=a._xDomain[0],this._yMin=a._yDomain[0],this._rand=Math.floor(100*Math.random()+100),this):"Param: plot is missing, a div to attach the svg is required":"Param: data is missing, An array required"};i.prototype._skip=0,i.prototype._gain=30,i.prototype._xInt=1,i.prototype._yInt=1,i.prototype._duration=5,i.prototype._sampleRate=1,i.prototype._strokeWidth=.5,i.prototype._color="black",i.prototype._fillColor="black",i.prototype._opacity=.4,i.prototype.skip=function(a){return void 0===a?this._skip:(this._skip=a,this)},i.prototype.gain=function(a){return void 0===a?this._gain:(this._gain=a,this)},i.prototype.max=function(a){return void 0===a?this._max:(this._max=a,this)},i.prototype.xMin=function(a){return void 0===a?this._xMin:(this._xMin=a,this)},i.prototype.yMin=function(a){return void 0===a?this._yMin:(this._yMin=a,this)},i.prototype.xInt=function(a){return void 0===a?this._xInt:(this._xInt=a,this)},i.prototype.yInt=function(a){return void 0===a?this._yInt:(this._yInt=a,this)},i.prototype.fillColor=function(a){return void 0===a?this._fillColor:(this._fillColor=a,this)},i.prototype.color=function(a){return void 0===a?this._color:(this._color=a,this)},i.prototype.strokeWidth=function(a){return void 0===a?this._strokeWidth:(this._strokeWidth=a,this)},i.prototype.sampleRate=function(a){return void 0===a?this._sampleRate:(this._sampleRate=a,this)},i.prototype.duration=function(a){return void 0===a?this._duration:(this._duration=a,this)},i.prototype.opacity=function(a){return void 0===a?this._opacity:(this._opacity=a,this)},i.prototype.lineFunc=function(a){var b=this._plot,c=this._gain,d=this._xMin,e=this._sampleRate,f=this._yInt,g=this._yMin;return d3.svg.area().x(function(f){return b._xScale(f*c+d+a*e)}).y(function(a,c){return b._yScale(c*f+g)}).interpolate("basis")},i.prototype.areaFunc=function(a,b){var c=this._plot,d=this._gain,e=this._xMin,f=this._sampleRate,g=this._yMin,h=this._yInt;return d3.svg.area().x(function(){return c._xScale(b*d+e+a*f)}).y(function(a,b){return c._yScale(b*h+g)}).interpolate("basis")},i.prototype.draw=function(){for(var a=this._data.length-1;a>=0;a--)if(0===this._skip||0===a%this._skip){var b=d3.mean(this._data[a]),c=this.lineFunc(a),d=this.areaFunc(a,b);this._plot._svg.datum(this._data[a]),this._plot._svg.append("clipPath").attr("id","clip-below"+this._rand+a).append("path").attr("d",d.x0(this._plot._width));var e=this._plot,f=this._gain,g=this._xMin,h=this._sampleRate;this._plot._svg.append("path").attr("id","area-below"+a).attr("clip-path","url(#clip-below"+this._rand+a).attr("fill",this._fillColor).style("opacity",this._opacity).attr("d",d.x0(function(b){return e._xScale(b*f+g+a*h)})),this._plot._svg.append("path").attr("class","line"+a).attr("d",c(this._data[a])).attr("stroke",this._color).attr("stroke-width",this._strokeWidth).attr("fill","none")}return this},i.prototype.reDraw=function(a,b,c){this._plot._xScale.domain(b),this._plot._yScale.domain(c),this._plot._svg.select(".x.axis").transition().duration(this._duration).call(this._plot._xAxis).selectAll("text").style("text-anchor","start").attr("transform","rotate(-45)"),this._plot._svg.select(".y.axis").transition().duration(this._duration).call(this._plot._yAxis);for(var d=a.length-1;d>=0;d--)if(0===this._skip||0===d%this._skip){var e=d3.mean(a[d]);this._plot._svg.select("#clip-below"+this._rand+d).remove();var f=this.lineFunc(d),g=this.areaFunc(d,e);this._plot._svg.select(".line"+d).transition().duration(this._duration).attr("d",f(a[d])).ease("linear"),this._plot._svg.datum(a[d]),this._plot._svg.append("clipPath").attr("id","clip-below"+this._rand+d).append("path").attr("d",g.x0(this._plot._width));var h=this._plot,i=this._gain,j=this._xMin,k=this._sampleRate;this._plot._svg.select("#area-below"+d).attr("clip-path","url(#clip-below"+this._rand+d).transition().duration(this._duration).attr("d",g.x0(function(a){return h._xScale(a*i+j+d*k)})).ease("linear")}return this}}(window),angular.module("visualizrApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="col-xs-3"> <ul class="nav nav-pills nav-stacked"> <li class="active"><a href="#/home">Getting Started</a></li> <li><a>Plot</a></li> <li><a>Log</a></li> <li><a>Wiggle</a></li> <li><a>Canvas</a></li> <li><a>Seismic</a></li> <li><a>Horizon</a></li> <li><a>Handle</a></li> </ul> </div> <div class="col-xs-9"> <div class="col-xs-12"> <h1>Getting started</h1> <div class="col-xs-12 callout callout-info"> <h3>About the project</h3> <p>G3 is a Javascript charting library, built on top of <a href="http://d3js.org/" target="_blank">d3.js</a>. It\'s primary purpose is to allow easy access to dynamic in broswer geo-oriented charts. </p> <p>G3 uses d3.js and jQuery as dependencies.</p> </div> </div> <div class="col-xs-12"> <h2>Quick Start</h2> </div> </div>')}]);