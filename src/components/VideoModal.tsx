import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";

interface VideoModalProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonClassName?: string;
}

const VideoModal = ({ 
  videoUrl, 
  thumbnailUrl, 
  title, 
  buttonText, 
  buttonVariant = "outline",
  buttonSize = "lg",
  buttonClassName = ""
}: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant}
          size={buttonSize}
          className={buttonClassName}
        >
          <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
        <div className="relative aspect-video w-full">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Video */}
          {isOpen && (
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          
          {/* Thumbnail when closed */}
          {!isOpen && (
            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
              <img 
                src={thumbnailUrl} 
                alt={title}
                className="w-full h-full object-cover rounded-lg opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;