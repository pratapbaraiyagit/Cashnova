import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import NewsletterForm from "@/components/newsletter-form";
import { Button } from "../ui/button";
import Logo from "../logo";

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Cashnova</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-2">
              Empowering you with the financial knowledge to build a better future.
            </p>
            <div className="flex mt-6 space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-sm">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link></li>
                <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold tracking-wider uppercase text-sm">About Us</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/newsletter" className="text-muted-foreground hover:text-primary transition-colors">Newsletter</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
                <h3 className="font-semibold tracking-wider uppercase text-sm">Stay Updated</h3>
                <p className="text-muted-foreground my-4 text-sm">Get the latest tips directly in your inbox.</p>
                <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cashnova. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
