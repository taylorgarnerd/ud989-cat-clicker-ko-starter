var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames);

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
	this.currentCat = ko.observable(new Cat({
		clickCount: 0,
		name: "Juice",
		imgSrc: "img/22252709_010df3379e_z.jpg",
		imgAttribution: "http://www.google.com",
		nicknames: ["Cuddles","Jimbo","Rambo"]
	}));

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel());