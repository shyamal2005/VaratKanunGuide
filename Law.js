import mongoose from "mongoose";

const lawSchema = new mongoose.Schema({
  law: { type: String, required: true },
  section: { type: String },
  summary: { type: String },
  category: { type: String },
  solutions: [String],
  videos: [
    {
      title: String,
      link: String,
      duration: String,
      views: String,
      expert: String
    }
  ],
  documents: [
    {
      name: String,
      type: String,
      size: String,
      downloads: String
    }
  ]
}, { timestamps: true });

export default mongoose.model("Law", lawSchema);

