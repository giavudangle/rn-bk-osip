const mongoose = require("mongoose");

var newsSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: [true, 'Event name cannot blank']
    },
    source:{
        type: String,
        required: [true, 'Event name cannot blank']
    },
    description: {
        type: String
    },
    writtenBy: {
        type: mongoose.Types.ObjectId,
        required: [true]
    },
    hotRate: {
        type: Number,
        required: [true]
    },
    writtenAt: {
        type: Number,
        required: [true, 'Created days cannot blank']
    },
    postAt: {
        type: Number,
        required: [true, 'Start day cannot blank']
    },
});

export default mongoose.model("news", newsSchema);