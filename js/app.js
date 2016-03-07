var initialCats = [
	{
		clickCount: 0,
		name: "Gilligan",
		imgSrc: "img/22252709_010df3379e_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["Gigi","Goobs","Gillyyyyy"]
	},
	{
		clickCount: 0,
		name: "Fonzi",
		imgSrc: "img/434164568_fea0ad4013_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["The Fonz","Henry","Ayyyyyy"]
	},
	{
		clickCount: 0,
		name: "Reginald",
		imgSrc: "img/1413379559_412a540d29_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["Reggie","Ragdoll","Reeree"]
	},
	{
		clickCount: 0,
		name: "Bill Gates",
		imgSrc: "img/4154543904_6e2428c421_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["Billy","Computer Man","Windowz"]
	},
	{
		clickCount: 0,
		name: "Spock",
		imgSrc: "img/9648464288_2516b35537_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["Leonard","Nemoy","Enterprize"]
	}
]

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames );

	this.levelUp = ko.computed(function () {
		if (this.clickCount() < 10) {
			return "Newborn";
		}else if (this.clickCount() < 50) {
			return "Kitten";
		}else if (this.clickCount() < 100) {
			return "Teen";
		}else{
			return "Oldy";
		}
	}, this);
}

var ViewModel = function () {
	var self = this;
	
	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};

	this.changeCat = function (cat) {
		self.currentCat(ko.observable(cat));
	};

}

ko.applyBindings(new ViewModel());