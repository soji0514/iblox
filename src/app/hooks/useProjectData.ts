import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

// Map project names to folder paths in Supabase Storage
const FOLDER_MAP: Record<string, string> = {
  "Negative Freak": "project/negativefreak",
  "yarn plantery": "project/yarnplantery",
  "Citir": "project/citir",
  "dr.br": "project/drbr",
  "sin su ru": "project/sinsuru",
  "puresome": "project/puresome",
  "0100": "project/0100",
  "hyudo": "project/hyudo",
  "un deux trois": "project/undeuxtrois",
  "the garage tapes": "project/thegaragetapes",
};

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

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
        
        const folderPath = FOLDER_MAP[projectName];
        
        if (!folderPath) {
          console.log(`[useProjectData] No folder mapping found for: ${projectName}`);
          setImages([]);
          setLoading(false);
          return;
        }

        console.log(`[useProjectData] Listing files from bucket: portfolio, folder: ${folderPath}`);

        // Use Supabase client to list files
        const { data: files, error: listError } = await supabase.storage
          .from("portfolio")
          .list(folderPath);

        if (listError) {
          console.error(`[useProjectData] Failed to list files:`, listError);
          throw new Error(`Failed to list files: ${listError.message}`);
        }

        console.log(`[useProjectData] Found ${files?.length || 0} files:`, files);

        // Generate public URLs for each file
        const imageUrls = (files || [])
          .filter((file: any) => !file.name.includes('.emptyFolderPlaceholder'))
          .map((file: any) => {
            const { data } = supabase.storage
              .from("portfolio")
              .getPublicUrl(`${folderPath}/${file.name}`);
            return data.publicUrl;
          });

        console.log(`[useProjectData] Generated ${imageUrls.length} image URLs`);
        if (imageUrls.length > 0) {
          console.log(`[useProjectData] First image URL:`, imageUrls[0]);
        }

        setImages(imageUrls);
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
