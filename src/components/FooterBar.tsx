import { Separator } from "@/components/ui/separator";

export default function FooterBar() {
  return (
    <footer className="flex-col">
      <Separator />
      <p className="text-center p-4 text-sm text-gray-500">
        © 2025 Jakub Slezáček and Eva Kuhejdová. All rights reserved.
      </p>
    </footer>
  );
}
