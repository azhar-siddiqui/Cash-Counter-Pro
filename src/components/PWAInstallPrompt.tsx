"use client";

import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

// Extend Navigator interface for iOS standalone detection
declare global {
  interface Navigator {
    standalone?: boolean;
  }
}

interface PWAInstallPromptProps {
  children: React.ReactNode;
}

export const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({
  children,
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [shouldShowPrompt, setShouldShowPrompt] = useState(true);

  const isPWAInstalled = () => {
    // Check if running in standalone mode (installed PWA)
    if (globalThis.navigator.standalone) return true; // iOS Safari
    if (globalThis.matchMedia("(display-mode: standalone)").matches)
      return true; // Other browsers
    return false;
  };

  useEffect(() => {
    // Check if already installed or dismissed
    const isInstalled =
      localStorage.getItem("pwa-installed") === "true" || isPWAInstalled();
    const isDismissed = localStorage.getItem("pwa-dismissed") === "true";

    if (isInstalled || isDismissed) {
      setShouldShowPrompt(false);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Show prompt after some delay or user interaction
      setTimeout(() => setShowPrompt(true), 3000); // Show after 3 seconds
    };

    const handleAppInstalled = () => {
      localStorage.setItem("pwa-installed", "true");
      setShowPrompt(false);
      setShouldShowPrompt(false);
    };

    globalThis.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt,
    );
    globalThis.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      globalThis.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      globalThis.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        localStorage.setItem("pwa-installed", "true");
        setShouldShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-dismissed", "true");
    setShouldShowPrompt(false);
  };

  return (
    <>
      {children}
      <Dialog
        open={shouldShowPrompt && showPrompt}
        onOpenChange={(open) => !open && handleDismiss()}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Install CashCounter Pro</DialogTitle>
            <DialogDescription>
              Install our app for a better experience. Access it directly from
              your home screen!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:justify-end">
            <Button variant="outline" onClick={handleDismiss}>
              Not Now
            </Button>
            <Button onClick={handleInstall}>
              <Download className="size-4 mr-2 animate-bounce" />
              Install
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
