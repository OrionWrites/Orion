
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Globe, User } from "lucide-react";
import { motion } from "framer-motion";

export default function OrionWrites() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800">
      <header className="p-6 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-4xl font-bold text-indigo-700">Orion Writes</h1>
        <p className="text-sm text-gray-600">Thoughts that travel the stars.</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 grid gap-8">
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">✨ Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-sm text-gray-600">
                  Learnings, study techniques, academic tips, and reading lists for the curious mind.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <User className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-bold">Personal Growth</h3>
                <p className="text-sm text-gray-600">
                  Self-discovery stories, productivity habits, reflections, and mindset tools.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-pink-600 mb-3" />
                <h3 className="text-xl font-bold">Travel</h3>
                <p className="text-sm text-gray-600">
                  Destination guides, travelogues, cultural insights, and photo essays.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">📝 Latest Posts</h2>
          <div className="grid gap-6">
            {[1,2,3].map((_, i) => (
              <Card key={i} className="hover:shadow-md transition duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sample Blog Title #{i+1}</h3>
                  <p className="text-sm text-gray-600 mb-2">July {9 - i}, 2025</p>
                  <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod...
                  </p>
                  <Button variant="link" className="mt-2 p-0 text-blue-600">Read more →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-white border-t py-6 mt-10 text-center text-sm text-gray-500">
        © 2025 Orion Writes. All rights reserved.
      </footer>
    </div>
  );
}
