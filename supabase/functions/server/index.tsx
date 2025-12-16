import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Storage bucket name
const BUCKET_NAME = 'portfolio';

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Enable logger
app.use('*', logger(console.log));

// Health check endpoint
app.get("/make-server-bb561f76/health", (c) => {
  console.log("[Server] Health check called");
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Get project images
app.get("/make-server-bb561f76/projects/:projectName/images", async (c) => {
  try {
    const projectName = c.req.param('projectName');
    console.log(`[Server] Fetching images for project: ${projectName}`);
    
    // Map project names to folder paths
    const folderMap: { [key: string]: string } = {
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

    const folderPath = folderMap[projectName];
    
    if (!folderPath) {
      console.log(`[Server] No folder mapping found for project: ${projectName}`);
      return c.json({ images: [] });
    }

    console.log(`[Server] Looking for files in bucket: ${BUCKET_NAME}, folder: ${folderPath}`);

    // List all files in the project folder
    const { data: files, error: listError } = await supabase.storage
      .from(BUCKET_NAME)
      .list(folderPath);

    if (listError) {
      console.error(`[Server] Error listing files in ${folderPath}:`, listError);
      return c.json({ error: `Failed to list images: ${listError.message}` }, 500);
    }

    console.log(`[Server] Found ${files?.length || 0} files in ${folderPath}`);
    console.log(`[Server] File details:`, files?.map(f => ({ name: f.name, size: f.metadata?.size, type: f.metadata?.mimetype })));

    if (!files || files.length === 0) {
      console.log(`[Server] No files found in ${folderPath}`);
      return c.json({ images: [] });
    }

    // Generate signed URLs for each image
    const images = await Promise.all(
      files
        .filter(file => !file.name.includes('.emptyFolderPlaceholder'))
        .map(async (file) => {
          const filePath = `${folderPath}/${file.name}`;
          console.log(`[Server] Creating URL for: ${filePath}`);
          
          // Get public URL (bucket must be public)
          const { data: publicUrlData } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(filePath);
          
          console.log(`[Server] Public URL for ${file.name}: ${publicUrlData.publicUrl}`);
          
          return {
            path: filePath,
            url: publicUrlData.publicUrl,
            name: file.name,
          };
        })
    );

    const validImages = images.filter(img => img !== null);
    console.log(`[Server] Returning ${validImages.length} valid images for ${projectName}`);
    
    return c.json({ images: validImages });
  } catch (error) {
    console.error('[Server] Error fetching project images:', error);
    return c.json({ error: 'Failed to fetch project images', details: String(error) }, 500);
  }
});

// Get project description
app.get("/make-server-bb561f76/projects/:projectName/description", async (c) => {
  try {
    const projectName = c.req.param('projectName');
    const description = await kv.get(`project:${projectName}:description`);
    
    return c.json({ description: description || '' });
  } catch (error) {
    console.error('Error fetching project description:', error);
    return c.json({ error: 'Failed to fetch project description', details: String(error) }, 500);
  }
});

// Update project description
app.post("/make-server-bb561f76/projects/:projectName/description", async (c) => {
  try {
    const projectName = c.req.param('projectName');
    const { description } = await c.req.json();
    
    await kv.set(`project:${projectName}:description`, description);
    
    return c.json({ success: true });
  } catch (error) {
    console.error('Error updating project description:', error);
    return c.json({ error: 'Failed to update project description', details: String(error) }, 500);
  }
});

console.log("[Server] Starting server...");
Deno.serve(app.fetch);