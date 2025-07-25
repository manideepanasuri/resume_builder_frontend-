import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  name = "Launch UI",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Changelog", href: "" },
        { text: "Documentation", href: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "" },
        { text: "Careers", href: "" },
        { text: "Blog", href: "" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "" },
        { text: "Twitter", href: "" },
        { text: "Github", href: "" },
      ],
    },
  ],
  copyright = "© 2025 Mikołaj Dobrucki. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "" },
    { text: "Terms of Service", href: "" },
  ],
  showModeToggle = true,
  className,
}: Readonly<FooterProps>) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
