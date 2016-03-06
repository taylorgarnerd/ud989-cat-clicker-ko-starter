var ViewModel = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Juice");
	this.level = ko.observable("Newborn");
	this.imgSrc = ko.observable("img/22252709_010df3379e_z.jpg");
	this.imgAttribution = ko.observable("http://www.google.com");

	this.levelUp = function () {
		if (this.clickCount() < 10) {
			this.level("Newborn");
		}else if (this.clickCount() < 50) {
			this.level("Kitten");
		}else if (this.clickCount() < 100) {
			this.level("Teen");
		}else{
			this.level("Oldy");
		}
	};

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
		this.levelUp();
	};

}

ko.applyBindings(new ViewModel());