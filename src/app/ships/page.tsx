import { Rocket, Calculator, Table, Database } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Card from "@/components/global/Card/Card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OG-Tools | Ships",
  description:
    "Explore a suite of powerful calculators to plan and optimize your OGame fleets. Compare different calculation modes and find the perfect tool for your strategy—whether you want full control, balanced costs, custom ratios, or precise percentage splits."
};

const ShipsPage = () => {
  return (
    <div className="ShipsPage flex flex-1 flex-col items-center h-fit min-h-full">
      <section className="flex-1 flex flex-col items-center justify-center text-center w-full py-12 max-w-[120rem] md:py-24 lg:py-32 bg-muted/80 rounded px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ship Calculators</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Optimize your fleet with our specialized ship calculators and tools
          </p>
        </div>
      </section>
      <section className="w-full py-12 max-w-[120rem] md:py-24 flex px-4 md:px-6 gap-8 justify-evenly">
        <Card
          title="Manual Calculator"
          description="A flexible calculator where you can freely input ship quantities and see the total resource costs. Perfect for planning custom fleet compositions without predefined ratios."
          link="/ships/manual"
          icon={Table}
          className="max-w-96 min-w-96"
        />
        <Card
          title="Cost Match Calculator"
          description="Calculate the number of ships you need to match a specific resource cost. Perfect for quick calculations."
          link="/ships/cost-match"
          icon={Database}
          className="max-w-96 min-w-96"
        />
      </section>
      <section className="flex-1 flex gap-4 justify-evenly w-full py-12 max-w-[120rem] md:py-24 px-4 md:px-6 bg-muted/80 rounded">
        <div className="flex flex-col justify-center gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Use Our Ship Calculators?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our specialized calculators help you make informed decisions about your fleet composition
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-4 w-4 text-primary" />
              </div>
              <span>Precise resource calculations for all ship types</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Calculator className="h-4 w-4 text-primary" />
              </div>
              <span>Optimize your fleet based on a pivot ship</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-b from-blue-900 to-slate-900 p-4">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-10" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground dark:text-primary">
              <Rocket className="h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold">Fleet Optimization</h3>
              <p className="mt-2 text-lg">Build the perfect fleet for your gameplay style</p>
              <div className="mt-6 flex gap-4">
                <Link href="/ships/manual">
                  <Button variant="secondary" className="z-10">
                    Manual Calculator
                  </Button>
                </Link>
                <Link href="/ships/cost-match">
                  <Button variant="secondary" className="z-10">
                    Cost Match Calculator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShipsPage;
