"use client"
import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function EmbedCodePage({ userName }: { userName: string }) {
  const iframeCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded Portfolio</title>
    <style>
        body { margin: 0; padding: 0; background: linear-gradient(to bottom, #f9fafb, #e5e7eb); color: #1f2937; }
        iframe { width: 100vw; height: 100vh; border: none; }
    </style>
</head>
<body>
    <iframe src="https://portique.vercel.app/${userName}"></iframe>
</body>
</html>`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iframeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col items-center justify-center p-6">
      <div className="container max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-gray-900 shadow-2xl rounded-xl border border-gray-300 dark:border-gray-700">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Embed Your Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-300">Copy the code below to embed your portfolio on any website.</p>
        </motion.div>
        
        <motion.div
          className="relative bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-6 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <pre className="overflow-x-auto whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
            <code>{iframeCode}</code>
          </pre>
          <Button
            className="absolute top-2 right-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"} <Copy size={16} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
