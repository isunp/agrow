"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight, EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconBrandAppleFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(usePathname() === "/sign-up");

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    window.history.pushState(null, "", isSignUp ? "/login" : "/sign-up");
  };

  const formVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "visible" },
  };
  return (
    <Card className="border-none bg-transparent sm:border sm:bg-card">
      <CardContent className="mx-auto w-full max-w-md rounded-none p-4 sm:p-6 md:rounded-2xl">
        <CardHeader className="p-0">
          <CardTitle className="text-center text-2xl sm:text-start">
            Welcome to agrowFarm
          </CardTitle>
          <CardDescription className="text-balance text-center sm:text-wrap sm:text-start">
            {isSignUp
              ? "Sign up to agrowFarm for personalized farming advice and resources."
              : "Login to agrowFarm to access your account."}
          </CardDescription>
        </CardHeader>

        <form className="mt-8" onSubmit={handleSubmit}>
          <motion.div
            variants={formVariants}
            initial={isSignUp ? "visible" : "hidden"}
            animate={isSignUp ? "visible" : "hidden"}
          >
            <div className="mb-4 flex space-x-2">
              <LabelInputContainer className="space-y-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="First name"
                  type="text"
                  className="dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary"
                />
              </LabelInputContainer>
              <LabelInputContainer className="space-y-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Last name"
                  type="text"
                  className="dark:bg-background dark:text-foreground dark:shadow-[0px_0px_1px_1px_hsl(var(--border))] dark:placeholder:text-muted-foreground/60 dark:focus-visible:ring-primary"
                />
              </LabelInputContainer>
            </div>
          </motion.div>
          <LabelInputContainer className="mb-4 space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="opswithtej@gmail.com"
              type="email"
              className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                disabled={!password}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-colors enabled:cursor-pointer disabled:text-muted-foreground/60"
              >
                {showPassword ? (
                  <EyeOff className="m-1 h-4 w-4" />
                ) : (
                  <Eye className="m-1 h-4 w-4" />
                )}
              </button>
            </div>
          </LabelInputContainer>
          <motion.div
            variants={formVariants}
            initial={isSignUp ? "visible" : "hidden"}
            animate={isSignUp ? "visible" : "hidden"}
          >
            <LabelInputContainer className="mb-8 space-y-2">
              <Label htmlFor="confirmpassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmpassword"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:focus-visible:ring-primar border dark:!border-border dark:bg-background dark:text-foreground dark:shadow-none dark:placeholder:text-muted-foreground/60"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  disabled={!confirmPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transform transition-colors enabled:cursor-pointer disabled:text-muted-foreground/60"
                >
                  {showPassword ? (
                    <EyeOff className="m-1 h-4 w-4" />
                  ) : (
                    <Eye className="m-1 h-4 w-4" />
                  )}
                </button>
              </div>
            </LabelInputContainer>
          </motion.div>
          <Button variant="default" className="group/btn relative w-full">
            <Link href="/sign-up" className="flex items-center justify-center">
              {isSignUp ? "Sign Up Now" : "Sign In"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Separator className="my-4" />

          <div className="flex flex-col gap-4">
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandAppleFilled className="mr-2 h-4 w-4" />
                Continue with Apple
              </Link>
              <BottomGradient />
            </Button>
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandGoogleFilled className="mr-2 h-4 w-4" />
                Continue with Google
              </Link>
              <BottomGradient />
            </Button>
            <Button variant="secondary" className="group/btn relative w-full">
              <Link
                href="/sign-up"
                className="flex items-center justify-center"
              >
                <IconBrandGithub className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Link>
              <BottomGradient />
            </Button>
          </div>
          <div className="mt-3 text-center text-sm">
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="underline"
                  onClick={toggleForm}
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="underline"
                  onClick={toggleForm}
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col", className)}>{children}</div>
  );
};
