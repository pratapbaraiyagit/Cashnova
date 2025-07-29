"use client";

import { useState } from "react";
import { app } from "@/lib/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, Loader2, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

const storage = getStorage(app);

export default function ImageUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setUploadedImageUrl(null);
      setHasCopied(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please choose an image file to upload.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setUploadedImageUrl(null);

    try {
      const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      setUploadedImageUrl(downloadURL);
      toast({
        title: "Upload Successful!",
        description: "Your image is now hosted on Firebase Storage.",
      });

    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your image. Please check the console for details.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!uploadedImageUrl) return;
    navigator.clipboard.writeText(uploadedImageUrl);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Image Uploader</CardTitle>
            <CardDescription>
              Upload your blog post images here to get a public URL. You can then paste this URL into your Firestore document.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <Input id="image-upload" type="file" onChange={handleFileChange} accept="image/*" disabled={isLoading}/>
                {file && <p className="text-sm text-muted-foreground">Selected file: {file.name}</p>}
            </div>
            
            <Button onClick={handleUpload} disabled={!file || isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </>
              )}
            </Button>

            {uploadedImageUrl && (
              <div className="space-y-4 rounded-lg border bg-muted p-4">
                <h3 className="font-semibold">Upload Complete!</h3>
                <p className="text-sm text-muted-foreground">
                  Here is the public URL for your image. Copy it and paste it into the `imageUrl` field for your post in Firestore.
                </p>
                <div className="flex items-center gap-2">
                   <Input type="text" readOnly value={uploadedImageUrl} className="flex-grow bg-background"/>
                   <Button onClick={copyToClipboard} variant="outline" size="icon">
                       {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                       <span className="sr-only">Copy URL</span>
                   </Button>
                </div>
                 <div className="mt-4">
                    <img src={uploadedImageUrl} alt="Uploaded preview" className="rounded-md max-h-64 w-auto mx-auto" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
