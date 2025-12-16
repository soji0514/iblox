import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-bb561f76`;

export function useProjectData(projectName: string | null) {
  const [images, setImages] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectName) {
      setImages([]);
      setDescription("");
      return;
    }

    async function fetchProjectData() {
      setLoading(true);
      setError(null);

      try {
        console.log(`[useProjectData] Fetching data for project: ${projectName}`);
        console.log(`[useProjectData] API URL: ${API_URL}`);
        console.log(`[useProjectData] Project ID: ${projectId}`);
        
        // Test health endpoint first
        const healthUrl = `${API_URL}/health`;
        console.log(`[useProjectData] Testing health endpoint: ${healthUrl}`);
        
        try {
          const healthResponse = await fetch(healthUrl, {
            headers: {
              Authorization: `Bearer ${publicAnonKey}`,
            },
          });
          console.log(`[useProjectData] Health check status: ${healthResponse.status}`);
          const healthData = await healthResponse.json();
          console.log(`[useProjectData] Health check response:`, healthData);
        } catch (healthError) {
          console.error(`[useProjectData] Health check failed:`, healthError);
        }
        
        // Fetch images
        const imagesUrl = `${API_URL}/projects/${encodeURIComponent(projectName)}/images`;
        console.log(`[useProjectData] Fetching images from: ${imagesUrl}`);
        
        const imagesResponse = await fetch(
          imagesUrl,
          {
            headers: {
              Authorization: `Bearer ${publicAnonKey}`,
            },
          }
        );

        console.log(`[useProjectData] Images response status: ${imagesResponse.status}`);

        if (!imagesResponse.ok) {
          const errorText = await imagesResponse.text();
          console.error(`[useProjectData] Images fetch failed:`, errorText);
          throw new Error(`Failed to fetch images: ${errorText}`);
        }

        const imagesData = await imagesResponse.json();
        console.log(`[useProjectData] Images response:`, imagesData);
        const imageUrls = imagesData.images?.map((img: any) => img.url) || [];
        console.log(`[useProjectData] Extracted ${imageUrls.length} image URLs`);
        if (imageUrls.length > 0) {
          console.log(`[useProjectData] First image URL:`, imageUrls[0]);
        }
        setImages(imageUrls);

        // Fetch description
        const descResponse = await fetch(
          `${API_URL}/projects/${encodeURIComponent(projectName)}/description`,
          {
            headers: {
              Authorization: `Bearer ${publicAnonKey}`,
            },
          }
        );

        if (!descResponse.ok) {
          throw new Error("Failed to fetch description");
        }

        const descData = await descResponse.json();
        setDescription(descData.description || "");
      } catch (err) {
        console.error("[useProjectData] Error fetching project data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchProjectData();
  }, [projectName]);

  return { images, description, loading, error };
}