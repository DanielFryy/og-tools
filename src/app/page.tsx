import { BarChart3, Calculator, RefreshCw, Rocket, Shield, Zap } from "lucide-react";
import Link from "next/link";

import BlueBox from "@/components/global/BlueBox/BlueBox";
import Card from "@/components/global/Card/Card";
import HighlightBox from "@/components/global/HighlightBox/HighlightBox";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="Home flex-1 flex flex-col items-center justify-center h-fit min-h-full">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col @4xl:flex-row gap-4 justify-evenly w-full py-12 max-w-[120rem] md:py-24 px-4 md:px-6 bg-muted/80 rounded">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              OGame Tools - Defense and Fleet Calculator
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Optimize your fleet and defense rebuilding strategy with precision calculations tailored for OGame
              players.
            </p>
          </div>
          <div className="flex flex-col gap-2 @md/main:flex-row">
            <Link href="/ships/cost-match">
              <Button size="lg" className="gap-1">
                <Rocket className="h-4 w-4" />
                Ships Calculator
              </Button>
            </Link>
            <Link href="/defenses/ratio">
              <Button size="lg" variant="outline" className="gap-1">
                <Shield className="h-4 w-4" />
                Defenses Calculator
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <BlueBox className="min-w-80">
            <Rocket className="h-16 w-16 mb-4" />
            <h3 className="text-2xl font-bold">Supported Server</h3>
            <p className="mt-2 text-lg">Undae (s199-us.ogame.gameforge.com)</p>
            <p className="mt-6 text-sm text-blue-200">More servers coming soon</p>
          </BlueBox>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 max-w-[120rem] md:py-24 px-4 md:px-6 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tools designed to help you maintain a balanced and proportional setup after attacks
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 @4xl/main:grid-cols-2 @7xl/main:grid-cols-3 @8xl/main:grid-cols-4 justify-items-center">
          <Card
            title="Defense Calculator"
            description="Calculate the optimal number of defense units to rebuild based on predefined proportions."
            link="/defenses/ratio"
            icon={Shield}
            className="max-w-80 min-w-80"
            buttonText="Get Started"
          />
          <Card
            title="Fleet Management"
            description="Ensure a balanced ratio between fleet units for optimal resource efficiency and combat effectiveness."
            link="/ships/cost-match"
            icon={Rocket}
            className="max-w-80 min-w-80"
            buttonText="Get Started"
          />
          <Card
            title="Round Numbers"
            description="Get results in round numbers for simplicity and ease of use when rebuilding your forces."
            link="/about"
            icon={Calculator}
            className="max-w-80 min-w-80"
            buttonText="Learn More"
          />
        </div>
      </section>

      {/* Why Use Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[120rem] px-4 md:px-6 bg-muted/80 rounded flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Use OGame Tools?</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Save time and optimize your gameplay with our specialized calculators
          </p>
        </div>
        <div className="grid max-w-5xl grid-cols-1 gap-8 @4xl/main:grid-cols-2 @7xl/main:grid-cols-3 @8xl/main:grid-cols-4 justify-items-center">
          <HighlightBox
            title="Time Efficiency"
            description="Quickly calculate rebuilding needs without manual calculations"
            icon={Zap}
          />
          <HighlightBox
            title="Optimal Ratios"
            description="Maintain balanced proportions between different units for maximum effectiveness"
            icon={BarChart3}
          />
          <HighlightBox
            title="Quick Recovery"
            description="Recover faster after attacks with precise rebuilding strategies"
            icon={RefreshCw}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 max-w-[120rem] px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Optimize Your OGame Strategy?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get started with our calculators and take your gameplay to the next level
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/ships/cost-match">
              <Button size="lg" className="gap-1">
                <Rocket className="h-4 w-4" />
                Ships Calculator
              </Button>
            </Link>
            <Link href="/defenses/ratio">
              <Button size="lg" variant="outline" className="gap-1">
                <Shield className="h-4 w-4" />
                Defenses Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
