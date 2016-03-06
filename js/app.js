var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Juice");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
	this.imgAttribution = ko.observable("http://www.google.com");
	this.nicknames = ko.observableArray([
		{name: "Cuddles"},
		{name: "Jimbo"},
		{name: "Rambo"}
	]);

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
	this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function () {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel());