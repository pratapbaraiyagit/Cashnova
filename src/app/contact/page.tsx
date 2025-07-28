import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MessageSquare, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from 'next/link';

const socialLinks = [
  { icon: Twitter, href: "#", name: "Twitter" },
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <MessageSquare className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Get In Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a question, feedback, or a collaboration idea? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </div>
        <div className="md:col-span-1">
            <Card>
                 <CardHeader>
                    <CardTitle>Connect with us</CardTitle>
                    <CardDescription>Follow us on social media.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map(social => (
                      <Link key={social.name} href={social.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                          <social.icon className="h-6 w-6 text-primary" />
                          <span className="font-medium">{social.name}</span>
                      </Link>
                  ))}
                   <div className="flex items-center gap-3 p-3 rounded-lg border-t pt-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <span className="font-medium text-muted-foreground">contact@cashnova.com</span>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
