"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        toast({
          title: "Message sent successfully!",
          variant: "success",
          description:
            "Thank you for reaching out to us. We'll get back to you soon.",
        });
        setFormData({ from_name: "", from_email: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (error) {
      toast({
        title: "Failed to send message, please try again.",
        variant: "destructive",
        description:
          (error as Error).message || "An unexpected error occurred.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-us"
      className="bg-white lg:flex p-4 lg:p-20 justify-evenly space-y-8 lg:space-y-0  "
    >
      <div className="lg:w-1/3 flex flex-col justify-evenly space-y-4 lg:space-y-0 ">
        <div>
          <span className="font-semibold text-md">CONTACT US</span>
          <p className="text-lg lg:text-4xl pb-4">
            We&apos;d love to hear from you!
          </p>
          <p>
            Whether you have questions, want to collaborate, or are simply
            curious about what we do, our team is always ready to connect. Reach
            out to us, and we&apos;ll get back to you as soon as possible.
            Let&apos;s make a difference together today!
          </p>
        </div>
        <span>Give us a call:</span>
        <div className="flex gap-4 justify-center lg:justify-start">
          <Link
            href="https://www.facebook.com"
            className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition hover:text-blue-600 duration-300"
          >
            <Facebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.instagram.com"
            className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition hover:text-pink-600 duration-300"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:info@kidsbeyondlimit.com"
            className="bg-gray-100 rounded-md p-3 hover:bg-gray-200 transition"
          >
            <Mail className="w-6 h-6 hover:text-green-600" />
          </Link>
          <Link
            href="tel:+0724984502"
            className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition"
          >
            <Phone className="w-6 h-6 hover:text-green-600" />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 lg:w-1/3">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="from_name">Name</Label>
          <Input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="from_email">Email</Label>
          <Input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending ..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
