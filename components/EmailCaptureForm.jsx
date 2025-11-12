import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }
    
    setStatus("loading");
    
    try {
      const webhookUrl = 'https://connorprovines.app.n8n.cloud/webhook/connor-provines-consulting';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'implementation-guide',
          pageURL: window.location.href,
          pagePath: window.location.pathname,
          pageTitle: document.title,
          pageSlug: window.location.pathname.split('/').pop()
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setMessage("Success! Check your inbox for the workflow.");
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-12">
      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Get the Workflow</h2>
        <p className="text-white/90 mb-6 text-sm">
          Enter your email below and I'll send the workflow along with the implementation guide.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className="flex-1 bg-white border-0 h-12"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2d3748] hover:bg-[#1a202c] text-white h-12 px-6 font-semibold whitespace-nowrap"
            >
              {status === "loading" ? "Sending..." : "Get it Now"}
            </Button>
          </div>
          
          {status === "success" && (
            <div className="flex items-center gap-2 bg-white/20 text-white p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}
          
          {status === "error" && (
            <div className="flex items-center gap-2 bg-red-500/20 text-white p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}