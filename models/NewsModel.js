const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NewsSchema = new Schema(
    {
        title: { type: String },
        content: { type: String },
        date: { type: Date },
        type: { type: String, default: "news" },
        isPublic: { type: Boolean, default: false },
        images: { type: Array }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)




const News = mongoose.model("News", NewsSchema);

module.exports = News;
