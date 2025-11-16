import React, { useState } from "react";
import {
  Search, Scale, BookOpen, Video, Users, Shield,
  FileText, ArrowRight, Play, Download, Clock, Eye, Phone, Mail, MapPin
} from "lucide-react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Search function — connects only to backend
 const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const handleSearch = async () => {
  if (!query.trim()) return;
  setLoading(true);
  try {
    const res = await fetch(`${API_BASE}/api/laws/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    if (data.success) {
      setResults(data.results);
    } else {
      setResults([]);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    setResults([]);
  } finally {
    setLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const categories = [
    { id: "all", name: "All Laws", icon: "📚", count: 3 },
    { id: "women", name: "Women Rights", icon: "👩", count: 1 },
    { id: "cyber", name: "Cyber Laws", icon: "💻", count: 1 },
    { id: "consumer", name: "Consumer Rights", icon: "🛍️", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bharat Kanun Guide</h1>
                <p className="text-xs text-gray-500">India's Legal Assistance Platform</p>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "Laws", "Resources", "Lawyers", "Help"].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-blue-600 font-medium">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Get Legal Help
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Indian Laws
              <span className="block text-blue-600">Made Simple</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Free, easy-to-understand legal information for every Indian
              <span className="block">in English, Hindi, and Regional languages</span>
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Describe your legal issue... (e.g., 'domestic violence', 'cyber crime')"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-8 py-6 text-lg rounded-2xl border border-gray-200 shadow-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                />
                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="absolute right-2 top-2 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 font-medium"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free Legal Analysis</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Multi-language Support</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>24/7 Expert Assistance</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {results.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Legal Solutions Found</h2>
              <p className="text-gray-600">
                {results.length} relevant law{results.length !== 1 ? "s" : ""} found for "{query}"
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {results.map((law) => (
              <div
                key={law.id}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Law Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 border-b">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl bg-white p-4 rounded-2xl shadow-lg">
                        {law.category === "Women Rights"
                          ? "👩‍⚖️"
                          : law.category === "Cyber Crime"
                          ? "💻"
                          : "🛍️"}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{law.law}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {law.category}
                          </span>
                        </div>
                        <p className="text-blue-600 font-semibold mb-2">{law.section}</p>
                        <p className="text-gray-700 text-lg leading-relaxed">{law.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Solutions */}
                  {law.solutions?.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <FileText size={24} className="mr-3 text-blue-600" />
                        Step-by-Step Legal Solution
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {law.solutions.map((solution, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <span className="text-sm font-semibold text-gray-500">
                                STEP {index + 1}
                              </span>
                            </div>
                            <h5 className="font-bold text-gray-900 mb-2 text-lg">{solution}</h5>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Videos & Documents */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Videos */}
                    {law.videos?.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Video size={24} className="mr-3 text-blue-600" />
                          Video Explanations
                        </h4>
                        <div className="space-y-4">
                          {law.videos.map((video, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200 hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                            >
                              <div className="flex space-x-4">
                                <div className="flex-shrink-0">
                                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-105 transition-transform duration-300">
                                    <Play size={24} fill="currentColor" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {video.title}
                                  </h5>
                                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <span className="flex items-center space-x-1">
                                      <Clock size={14} />
                                      <span>{video.duration}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                      <Eye size={14} />
                                      <span>{video.views}</span>
                                    </span>
                                  </div>
                                  <div className="text-xs text-blue-600 font-medium mt-2">
                                    By {video.expert}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Documents */}
                    {law.documents?.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Download size={24} className="mr-3 text-blue-600" />
                          Legal Documents & Forms
                        </h4>
                        <div className="space-y-4">
                          {law.documents.map((doc, index) => (
                            <div
                              key={index}
                              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200 hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <FileText size={20} />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {doc.name}
                                    </h5>
                                    <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                                      <span>{doc.type}</span>
                                      <span>•</span>
                                      <span>{doc.size}</span>
                                      <span>•</span>
                                      <span>{doc.downloads} downloads</span>
                                    </div>
                                  </div>
                                </div>
                                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                                  <Download size={16} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Scale size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bharat Kanun Guide</h3>
                  <p className="text-gray-400 text-sm">India's Legal Assistance Platform</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making Indian laws accessible and understandable for every citizen.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {["Browse Laws", "Legal Resources", "Find Lawyers", "Success Stories", "About Us"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors duration-200 text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal Resources</h4>
              <ul className="space-y-3 text-gray-400">
                {["Legal Dictionary", "Case Studies", "Template Library", "Video Guides", "Blog"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors duration-200 text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Support</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400" />
                  <span>Legal Helpline: 1800-123-456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400" />
                  <span>help@bharatkanunguide.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-400" />
                  <span>24/7 Online Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Bharat Kanun Guide. For educational purposes only. Not legal advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
