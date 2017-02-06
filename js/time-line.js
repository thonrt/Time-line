"use strict";
window.onload = function() {
	var options = {
		container: $(".time-line-container")
	}
	var timeLine = new TimeLine(options);
	timeLine.init();
};
var TimeLine = function(options) {
	this.container = options.container;
};
TimeLine.prototype = {
	defaultOption: function() {
		var data = [{
			title: "2015",
			id: "first",
			subs: [{
				id: "sub_one",
				value: "hahahahahhahahahhha"
			}, {
				id: "sub_two",
				value: 'hehehehehehehehehehehe'
			}, {
				id: "sub_three",
				value: "jhahjhdkeuhkahkdjhkhakhjk"
			}]
		}, {
			title: "2016",
			id: "second",
			subs: [{
				id: "sub_one",
				value: "hahahahahhahahahhha"
			}, {
				id: "sub_two",
				value: 'hehehehehehehehehehehe'
			}, {
				id: "sub_three",
				value: "jhahjhdkeuhkahkdjhkhakhjk"
			}]
		},{
			title: "2016",
			id: "second",
			subs: [{
				id: "sub_one",
				value: "hahahahahhahahahhha"
			}, {
				id: "sub_two",
				value: 'hehehehehehehehehehehe'
			}, {
				id: "sub_three",
				value: "jhahjhdkeuhkahkdjhkhakhjk"
			}]
		},{
			title: "2016",
			id: "second",
			subs: [{
				id: "sub_one",
				value: "hahahahahhahahahhha"
			}, {
				id: "sub_two",
				value: 'hehehehehehehehehehehe'
			}, {
				id: "sub_three",
				value: "jhahjhdkeuhkahkdjhkhakhjk"
			}]
		},{
			title: "2016",
			id: "second",
			subs: [{
				id: "sub_one",
				value: "hahahahahhahahahhha"
			}, {
				id: "sub_two",
				value: 'hehehehehehehehehehehe'
			}, {
				id: "sub_three",
				value: "jhahjhdkeuhkahkdjhkhakhjk"
			}]
		}];

		return {
			data: data
		};
	},
	init: function() {
		this.options = this.defaultOption();
		this.render();
	},
	render: function() {
		this.data = this.options.data;
		if (!this.data) {
			return this;
		}
		this.createDom();
		this.systoleAnimate();
	},

	createDom: function() {
		var self = this;
		this.data.forEach(function(item, index) {
			var div = $("<div/>").addClass("time-line-content");
			var ul = $("<ul/>");
			var h2 = $("<h2/>").addClass(item.id).append($("<span/>").addClass("info").html(item.title));
			if (!item.subs) {
				return this;
			}
			ul.append(h2);
			item.subs.forEach(function(value, key) {
				var li = $("<li/>").append($("<span/>").html(value.value));
				ul.append(li);
				div.append(ul);
			});
			self.container.append(div);
		});
	},

	systoleAnimate:function(){
		var $wrapEle = this.container.find(".time-line-content");
		var $targetA = $wrapEle.find("h2 span");
		var parentH,eleTop=[];
		parentH = $wrapEle.parent().height();
		$wrapEle.parent().css({"height":59});
		setTimeout(function(){
			$wrapEle.find("ul").children(":not(h2.first)").each(function(idx){
				eleTop.push($(this).position().top);
				$(this).css({"margin-top":-eleTop[idx] +50}).children().hide();
			}).animate({"margin-top":0}, 2000).children().fadeIn();
			$wrapEle.parent().animate({"height":parentH}, 3600);

		$wrapEle.find("ul").children(":not('h2:first')").css({"-webkit-animation-duration":"2s","-webkit-animation-delay":"0","-webkit-animation-timing-function":"ease","-webkit-animation-fill-mode":"both"}).end().children("h2").css({"position":"relative"});
		},600);

		$targetA.click(function(){
			$(this).parent().css({"position":"relative"});
			$(this).parent().siblings().slideToggle("slow");
			$wrapEle.parent().removeAttr("style");
			return false;
	});
	}

};