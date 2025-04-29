import { Shield, Table, Database, Percent, Proportions } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Card from "@/components/global/Card/Card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OG-Tools | Defenses",
  description:
    "Discover a suite of powerful calculators to plan and optimize your OGame defenses. Choose the calculator mode that matches your strategy—manual input, cost matching, custom ratios, or percentage-based splits."
};

const DefensesPage = () => {
  return (
    <div className="DefensesPage flex flex-1 flex-col items-center h-fit min-h-full">
      <section className="flex-1 flex flex-col items-center justify-center text-center w-full py-12 max-w-[120rem] md:py-24 lg:py-32 bg-muted/80 rounded px-4 md:px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Defense Calculators</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Optimize your defense setup with our specialized calculators and tools
          </p>
        </div>
      </section>
      <section className="w-full py-12 max-w-[120rem] md:py-24 px-4 md:px-6 gap-8 grid grid-cols-1 @4xl/main:grid-cols-2 @7xl/main:grid-cols-3 @8xl/main:grid-cols-4 justify-items-center">
        <Card
          title="Manual Calculator"
          description="Directly enter the quantity for each defense type to plan your setup exactly as you want. No restrictions—perfect for custom strategies and experimenting with different compositions."
          link="/defenses/manual"
          icon={Table}
          className="max-w-96 min-w-96"
        />
        <Card
          title="Cost Match Calculator"
          description="Select a base defense and set its quantity. The calculator will automatically adjust the quantities of other defenses so that their total resource cost matches your chosen base defense. Ideal for balancing defenses by a specific resource."
          link="/defenses/cost-match"
          icon={Database}
          className="max-w-96 min-w-96"
          soon
        />
        <Card
          title="Ratio Calculator"
          description="Pick a base defense and define the ratio for each defense type. The calculator will compute the required quantities to maintain your specified ratios, making it easy to design proportionally balanced setups."
          link="/defenses/ratio"
          icon={Proportions}
          className="max-w-96 min-w-96"
        />
        <Card
          title="Percent Calculator"
          description="Choose a base defense and assign a percentage to each defense type. The calculator distributes the setup according to your chosen percentages, helping you achieve precise resource allocation across your defenses."
          link="/defenses/percent"
          icon={Percent}
          className="max-w-96 min-w-96"
          soon
        />
      </section>
      <section className="flex-1 flex flex-col @4xl:flex-row gap-4 justify-evenly w-full py-12 max-w-[120rem] md:py-24 px-4 md:px-6 bg-muted/80 rounded">
        <div className="flex flex-col justify-center gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Use Our Defense Calculators?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our specialized calculators help you make informed decisions about your defense composition
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span>Precise resource calculations for all defense types</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-4 w-4 text-primary" />
              </div>
              <span>Optimize your defense based on a pivot structure</span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-b from-blue-900 to-slate-900 p-4">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center opacity-10" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground dark:text-primary">
              <Shield className="h-16 w-16 mb-4" />
              <h3 className="text-2xl font-bold">Defense Optimization</h3>
              <p className="mt-2 text-lg">Build the perfect defense for your gameplay style</p>
              <div className="mt-6 flex gap-4">
                <Link href="/defenses/manual">
                  <Button variant="secondary" className="z-10">
                    Manual Calculator
                  </Button>
                </Link>
                <Link href="/defenses/cost-match">
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

export default DefensesPage;
