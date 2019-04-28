const fs = require('fs');

class Product {
	constructor(info) {
		this.barcode = info.barcode;
		this.name = info.name;
		this.qty = info.qty;
		this.disc = info.disc;
		this.tax = info.tax;
		this.cost = info.cost;
		this.lastUpdated = info.lastUpdated;
		this.purchases = info.purchases;
		this.stock = info.stock;
	}
}

class Transaction {
	constructor(info) {
		this.id = info.id;
		this.date = info.date;
		this.totalCost = info.totalCost;
		this.payment = info.payment;
		this.change = info.change;
		this.produts = info.products;

		// for hold & recall
		this.isSold = info.isSold;
		this.name = info.name;
	}
}

// get the date today
function upDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	return mm + '/' + dd + '/' + yyyy;
}
