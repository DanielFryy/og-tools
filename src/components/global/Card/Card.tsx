import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { CardProps as Props } from "./Card.types";
import Soon from "@/components/global/Soon/Soon";
import { Button } from "@/components/ui/button";
import { Card as CardUI, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Card = (props: Props) => {
  const { className, icon: Icon, title, description, link, soon, buttonText = `Open ${title}` } = props;

  return (
    <CardUI className={twMerge("Card flex flex-col", className)}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {Icon ? <Icon className="h-8 w-8 text-primary" /> : null}
        <CardTitle>{title}</CardTitle>
        {soon ? <Soon className="ml-auto" /> : null}
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="min-h-20">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className={twMerge("w-full", !!soon ? "pointer-events-none opacity-50" : "")} disabled={!!soon} asChild>
          <Link href={link}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </CardUI>
  );
};

export default Card;
