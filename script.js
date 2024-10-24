$(document).ready(function() {
    var crackersData = {
        "Items": [
            {
                "Name": "Colour Koti(Flower Pot) ",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.1080",
                "Our_price": "Rs.600"
            },
            {
                "Name": "Ashoka (Fower pot)",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.510",
                "Our_price": "Rs.320"
            },
            {
                "Name": "Fancy Flower pot 5G",
                "Quantity": "1 Piece",
                "Mrp": "Rs.500",
                "Our_Price": "Rs.350"
            },
            {
                "Name": "Fancy Magical Peacock",
                "Quantity": "1 Piece",
                "Mrp": "Rs.1000",
                "Our_price": "Rs.420"
            },
            {
                "Name": "Ground Chakar Deluxe",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.900",
                "Our_price": "Rs.300"
            },
            {
                "Name": "Hydrogen Double Cat Deluxe",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.1650",
                "Our_price": "Rs.600"
            },
            {
                "Name": "King Kong",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.375",
                "Our_Price": "Rs.220"
            },
            {
                "Name": "Whistling Rocket",
                "Quantity": "1 Box (6 Pieces)",
                "Mrp": "Rs.1500",
                "Our_Price": "Rs.600"
            },
            {
                "Name": "2 Sound Rocket",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.1500",
                "Our_price": "Rs.500"
            },
            {
                "Name": "Rocket Bomb",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.500",
                "Our_Price": "Rs.300"
            },
            {
                "Name": "Fancy Waterfall Pencil ",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.600",
                "Our_Price": "Rs.320"
            },
            {
                "Name": "Maska Chaska (Fancy)",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.550",
                "Our_price": "Rs.300"
            },
            {
                "Name": "4 x 4 Wheel (Fancy)",
                "Quantity": "1 Piece",
                "Mrp": "Rs.500",
                "Our_price": "Rs.300"
            },
            {
                "Name": "Angry Bird (Fancy)",
                "Quantity": "1 Piece",
                "Mrp": "Rs.200",
                "Our_price": "Rs.150"
            },
            {
                "Name": "Kit-Kat",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.180",
                "Our_price": "Rs.100"
            },
            {
                "Name": "Twinkling Star",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.890",
                "Our_price": "Rs.250"
            },
            {
                "Name": "Pencil",
                "Quantity": "1 Box (10 Pieces)",
                "Mrp": "Rs.500",
                "Our_price": "Rs.250"
            },
            {
                "Name": "Guns (small)",
                "Quantity": "1 Piece",
                "Mrp": "-",
                "Our_price": "Rs.50"
            },
            {
                "Name": "Guns (Big)",
                "Quantity": "1 Piece",
                "Mrp": "-",
                "Our_price": "Rs.100"
            },
            {
                "Name": "Mirchi",
                "Quantity": "1 Pack",
                "Mrp": "Rs.45",
                "Our_price": "Rs.30"
            },
            {
                "Name": "28 Wala",
                "Quantity": "1 Piece",
                "Mrp": "Rs.180",
                "Our_price": "Rs.100"
            },
            {
                "Name": "100 Wala Deluxe",
                "Quantity": "1 Piece",
                "Mrp": "Rs.450",
                "Our_price": "Rs.300"
            },
            {
                "Name": "1000 Wala",
                "Quantity": "1 Box",
                "Mrp": "Rs.900",
                "Our_price": "Rs.300"
            },
            {
                "Name": "2000 Wala",
                "Quantity": "1 Box",
                "Mrp": "Rs.1800",
                "Our_price": "Rs.550"
            },
            {
                "Name": "5000 Wala",
                "Quantity": "1 Box",
                "Mrp": "Rs.3000",
                "Our_price": "Rs.1300"
            },
            {
                "Name": "10,000 Wala",
                "Quantity": "1 Box",
                "Mrp": "Rs.6000",
                "Our_price": "Rs.2450"
            },
            {
                "Name": "30 Shots",
                "Quantity": "1 Box",
                "Mrp": "Rs.1600",
                "Our_price": "Rs.600"
            },
            {
                "Name": "60 Shots",
                "Quantity": "1 Box",
                "Mrp": "Rs.3200",
                "Our_price": "Rs.1150"
            },
            {
                "Name": "120 Shots",
                "Quantity": "1 Box",
                "Mrp": "Rs.6400",
                "Our_price": "Rs.2250"
            },
            {
                "Name": "240 Shots",
                "Quantity": "1 Box",
                "Mrp": "Rs.8500",
                "Our_price": "Rs.3300"
            },
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
 
