const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://srv.carbonads.net/static/30242/fc92a6d993c3977219c1de6224fa7c994648d04c",
        set: (v) => v === ""? "default link" : v, //after some time
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;