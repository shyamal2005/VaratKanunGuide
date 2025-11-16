import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database.js";
import Law from "./models/Law.js";
import lawsData from "./importData.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const API_PREFIX = process.env.API_PREFIX || "/api";

connectDB();

app.use(cors());
app.use(express.json());

// Health
app.get("/", (req, res) => res.json({ message: "Bharat Kanun Guide Backend API", version: "1.0.0" }));

// GET /api/laws  (pagination optional)
app.get(`${API_PREFIX}/laws`, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 50, 200);
    const skip = (page - 1) * limit;
    const count = await Law.countDocuments();
    if (count === 0) return res.json({ success: true, count: lawsData.length, data: lawsData });
    const data = await Law.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    res.json({ success: true, count, page, limit, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET /api/laws/search?q=...
app.get(`${API_PREFIX}/laws/search`, async (req, res) => {
  try {
    const q = req.query.q || "";
    const regex = new RegExp(q, "i");
    const results = await Law.find({ $or: [{ law: regex }, { summary: regex }, { category: regex }] });
    if (!results.length) {
      const fallback = lawsData.filter(item =>
        (item.law || "").toLowerCase().includes(q.toLowerCase()) ||
        (item.summary || "").toLowerCase().includes(q.toLowerCase()) ||
        (item.category || "").toLowerCase().includes(q.toLowerCase())
      );
      return res.json({ success: true, query: q, results: fallback, count: fallback.length });
    }
    res.json({ success: true, query: q, results, count: results.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET /api/laws/category/:category
app.get(`${API_PREFIX}/laws/category/:category`, async (req, res) => {
  try {
    const cat = req.params.category;
    const results = await Law.find({ category: { $regex: cat, $options: "i" } });
    res.json({ success: true, category: cat, results, count: results.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// GET /api/laws/:id
app.get(`${API_PREFIX}/laws/:id`, async (req, res) => {
  try {
    const law = await Law.findById(req.params.id);
    if (!law) return res.status(404).json({ success: false, message: "Law not found" });
    res.json({ success: true, data: law });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
});

// POST /api/laws  (Create)
app.post(`${API_PREFIX}/laws`, async (req, res) => {
  try {
    const created = await Law.create(req.body);
    res.status(201).json({ success: true, data: created });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "Invalid data", error: err.message });
  }
});

// PUT /api/laws/:id  (Update)
app.put(`${API_PREFIX}/laws/:id`, async (req, res) => {
  try {
    const updated = await Law.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ success: false, message: "Law not found" });
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "Invalid update", error: err.message });
  }
});

// DELETE /api/laws/:id
app.delete(`${API_PREFIX}/laws/:id`, async (req, res) => {
  try {
    const deleted = await Law.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Law not found" });
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
