"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditProfileForm from "@/components/custom/Edit_portfolio/personal_info_edit";
import ChangeUsernameForm from "@/components/custom/Edit_portfolio/customUrlComponent";
import EmbedCodePage from "@/components/custom/embeddedCode";
import { useUser } from "@clerk/nextjs";

export default function EditPortfolio() {
  const { user } = useUser();
  const userId = user?.id;
  
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/profile/${userId}`);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUserData(data.data.username);
      } catch (err) {
        
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Please sign in to edit your portfolio
          </h2>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto py-10">
      {userData && <EmbedCodePage userName={userData} />}
    </div>
  );
}
