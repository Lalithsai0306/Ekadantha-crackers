$(document).ready(function() {
    var crackersData = {
        "items": [
            {
                "name": "31/2 LAXMI",
                "quantity": "1 BUNDLE (15 PACKS)",
                "mrp": "Rs. 650",
                "our_price": "Rs. 350"
            },
            {
                "name": "4\" LAXMI",
                "quantity": "1 BUNDLE (10 PACKS)",
                "mrp": "Rs. 650",
                "our_price": "Rs. 350"
            },
            {
                "name": "4\" DELUXE LAXMI",
                "quantity": "1 BUNDLE (10 PACKS)",
                "mrp": "Rs. 880",
                "our_price": "Rs. 480"
            },
            {
                "name": "GOLD LAXMI",
                "quantity": "1 BUNDLE (10 PACKS)",
                "mrp": "Rs. 1100",
                "our_price": "Rs. 550"
            },
            {
                "name": "5\" DELUXE LAXMI",
                "quantity": "1 BUNDLE (10 PACKS)",
                "mrp": "Rs. 1250",
                "our_price": "Rs. 620"
            },
            {
                "name": "2 SOUND",
                "quantity": "1 BUNDLE (10 PACKS)",
                "mrp": "Rs. 800",
                "our_price": "Rs. 400"
            },
            {
                "name": "GROUND CHAKAR (BIG)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 300",
                "our_price": "Rs. 150"
            },
            {
                "name": "GROUND CHAKAR (SPECIAL)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 400",
                "our_price": "Rs. 200"
            },
            {
                "name": "GROUND CHAKAR (DELUXE)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 500",
                "our_price": "Rs. 250"
            },
            {
                "name": "GROUND CHAKAR (SPINNER)",
                "quantity": "1 BUNDLE (5 PIECES)",
                "mrp": "Rs. 500",
                "our_price": "Rs. 250"
            },
            {
                "name": "FLOWER POT (SMALL)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 300",
                "our_price": "Rs. 150"
            },
            {
                "name": "FLOWER POT (BIG)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 400",
                "our_price": "Rs. 200"
            },
            {
                "name": "FLOWER POT (SPECIAL)",
                "quantity": "1 BUNDLE (10 PIECES)",
                "mrp": "Rs. 500",
                "our_price": "Rs. 250"
            }
        ]
    };

    // Dynamically load data into the table
    crackersData.items.forEach(function(item) {
        var row = `<tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.mrp}</td>
            <td>${item.our_price}</td>
        </tr>`;
        $('#price-table tbody').append(row);
    });
});
 