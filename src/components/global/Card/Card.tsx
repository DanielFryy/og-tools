import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { CardProps as Props } from "./Card.types";
import { Button } from "@/components/ui/button";
import { Card as CardUI, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Card = (props: Props) => {
  const { className, icon: Icon, title, description, link } = props;

  return (
    <CardUI className={twMerge("Card flex flex-col", className)}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {Icon ? <Icon className="h-8 w-8 text-primary" /> : null}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="min-h-20">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button className="w-full">Open {title}</Button>
        </Link>
      </CardFooter>
    </CardUI>
  );
};

export default Card;
