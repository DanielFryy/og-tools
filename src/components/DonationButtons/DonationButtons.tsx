import { SiKofi, SiPatreon, SiPaypal } from "@icons-pack/react-simple-icons";
import { CreditCard, Heart } from "lucide-react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { cryptoAddresses } from "./DonationButtons.helpers";
import { DonationButtonsProps as Props } from "./DonationButtons.types";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const DonationButtons = (props: Props) => {
  const { className } = props;
  const [showThankYou, setShowThankYou] = useState(false);
  const [copiedAddresses, setCopiedAddresses] = useState<Record<string, boolean>>({});

  const handleDonationClick = (platform: string) => {
    const donationLinks: Record<string, string> = {
      paypal: "https://paypal.me/danielfryy",
      kofi: "https://ko-fi.com/danielfryy",
      patreon: "https://patreon.com/danielfryy",
      crypto: "#crypto-donation"
    };

    if (platform === "crypto") {
      return;
    } else {
      window.open(donationLinks[platform], "_blank");
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  const copyToClipboard = async (text: string, symbol: string) => {
    try {
      await navigator.clipboard.writeText(text);

      // Set this specific address as copied
      setCopiedAddresses(prev => ({ ...prev, [symbol]: true }));

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedAddresses(prev => ({ ...prev, [symbol]: false }));
      }, 2000);
    } catch (e) {
      console.error("Failed to copy text: ", e);
    }
  };

  return (
    <div
      className={twMerge(
        "DonationButtons border-t pt-4 group-data-[collapsible=icon]:pt-2 flex flex-col gap-2",
        className
      )}
    >
      <div className="group-data-[collapsible=icon]:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-rose-500" />
          <span className="text-sm font-medium">Support OG-Tools</span>
        </div>
        {showThankYou ? (
          <span className="text-xs text-green-600 animate-fade-in">Thank you for your support!</span>
        ) : null}
      </div>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="cursor-pointer"
            tooltip="Donate with PayPal"
            onClick={() => handleDonationClick("paypal")}
          >
            <SiPaypal className="h-3 w-3 text-blue-600" />
            <span>PayPal</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="cursor-pointer"
            tooltip="Donate with Ko-fi"
            onClick={() => handleDonationClick("kofi")}
          >
            <SiKofi className="h-3 w-3" />
            <span>Ko-fi</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="cursor-pointer"
            tooltip="Donate with Patreon"
            onClick={() => handleDonationClick("patreon")}
          >
            <SiPatreon className="h-3 w-3" />
            <span>Patreon</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <Popover>
          <PopoverTrigger asChild>
            <SidebarMenuItem>
              <SidebarMenuButton
                className="cursor-pointer"
                tooltip="Donate with Crypto"
                onClick={() => handleDonationClick("crypto")}
              >
                <CreditCard className="h-3 w-3 text-purple-600" />
                <span>Crypto</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-3 flex flex-col gap-3">
            <h4 className="font-medium text-sm">Cryptocurrency Donations</h4>
            <div className="flex flex-col gap-2">
              {cryptoAddresses.map(crypto => {
                const { name, symbol, address } = crypto;

                return (
                  <div className="flex flex-col gap-1" key={symbol}>
                    <p className="text-xs font-medium">
                      {name} ({symbol})
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-muted p-1 rounded block overflow-x-auto flex-1">{address}</code>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => copyToClipboard(address, symbol)}
                        aria-label={`Copy ${symbol} address`}
                        title="Copy address"
                      >
                        {copiedAddresses[symbol] ? (
                          <Check className="h-3.5 w-3.5 text-green-500" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">Use the BEP20 Network</p>
            <p className="text-xs text-muted-foreground">Click the copy icon to copy the address to your clipboard.</p>
          </PopoverContent>
        </Popover>
      </SidebarMenu>
    </div>
  );
};

export default DonationButtons;
