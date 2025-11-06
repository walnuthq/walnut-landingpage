"use client";

import { Container } from "../../components/container";
import {
  Heading,
  Lead,
  Subheading,
  SectionHeading,
} from "../../components/text";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GitHubIcon, TelegramIcon, XIcon } from '@/components/intro'
import {
  CheckCircle,
  RefreshCw,
  Clock,
  Calendar,
  ChevronDown,
  ArrowRight,
  Zap,
  Code2,
  Cpu,
  Database,
  BarChart3,
} from "lucide-react";
import Image from "next/image";
import ethLogo from "../../../public/logo-cluster/eth-logo.svg"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import MainHeader from "../../components/main-header";
import { Progress } from "@/components/progress";



export default function MLIR() {


  return (
    <main className="overflow-hidden">
      <MainHeader />

      <Container className="relative bg-GREY">
        <div className="relative pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <Heading as="h1" className="mb-8">
              Solidity Optimizations Using MLIR
            </Heading>
            <Lead className="mx-auto max-w-3xl mb-12 text-GREY-2">
              This website represents work on MLIR integration into the Solidity compiler to enable more efficient bytecode, lower gas usage, smaller binaries, better memory behaviour, and long-term fixes such as stack-too-deep.
            </Lead>
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
                <Image src={ethLogo} alt="eth" className="w-5 h-5"/>
                <span className="font-medium text-BLACK">Supported by the Ethereum Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Heading as="h2" className="text-center mb-16">
            Work Progress
          </Heading>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                    <CheckCircle className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                  </div>
                  <div>
                    <CardTitle className="text-BLACK">
                      MLIR Integration into solc
                    </CardTitle>
                    <Badge variant="success" className="mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"></span>
                      Done
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-GREY-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>MLIR infrastructure integrated into our solc branch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-600">•</span>
                    <span>Solidity AST → MLIR working pipeline</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="border-t border-slate-200">
                <a href="#" className="inline-flex mt-4 items-center gap-2 text-sm font-medium text-BLUE hover:text-DARK-BLUE transition-colors">
                  View on GitHub
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </CardFooter>
            </Card>
            <Card className="border-2 border-BLUE shadow-md hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-8 px-3 py-1 bg-BLUE text-white text-xs font-semibold rounded-full">
                Current Phase
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    <RefreshCw className="w-6 h-6 text-BLUE" strokeWidth={2.5} />
                  </div>
                  <div>
                    <CardTitle className="text-BLACK">
                      Solidity Dialect
                    </CardTitle>
                    <Badge className="mt-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-BLUE animate-pulse mr-1"></span>
                      In Progress
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-BLACK">Goal: Compile 100 real contracts, full list here (link).</span>
                    <span className="text-sm font-bold text-BLUE">17%</span>
                  </div>
                  <Progress value={17} className="h-3" />
                </div>
                <ul className="space-y-3 text-sm text-GREY-2">
                  <li className="flex items-center gap-2">
                    <span className="text-BLUE">•</span>
                    <span>Defining Solidity ops/types in MLIR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-BLUE ">•</span>
                    <span>Lowering high-level constructs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-BLUE">•</span>
                    <span>Iterative coverage tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100">
                    <Clock className="w-6 h-6 text-slate-400" strokeWidth={2.5} />
                  </div>
                  <div>
                    <CardTitle className="text-BLACK">
                      Optimizations & Reports
                    </CardTitle>
                    <Badge variant="secondary" className="mt-1 bg-slate-100 text-slate-500">
                      <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mr-1"></span>
                      Not Started
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-GREY-2">
                <div>
                  <p className="font-medium text-BLACK mb-2">Planned comparisons:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">solc</Badge>
                    <Badge variant="secondary">solc --via-ir</Badge>
                    <Badge variant="secondary">solx</Badge>
                    <Badge variant="secondary">Solar</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-BLACK mb-2">Focus areas:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                      <span>Gas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                      <span>Code size</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                      <span>Memory</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                      <span>Stack depth</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
      <div className="bg-GREY py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Heading as="h2" className="mb-16">
              Benchmarks & Reports
            </Heading>
            <Card className="rounded-3xl border-2 border-dashed border-slate-300 p-16 md:p-20">
              <div className="flex flex-col items-center justify-center">
                <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-slate-100">
                  <BarChart3 className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-BLACK mb-3">
                  Coming Soon
                </h3>
                <p className="text-GREY-2 max-w-md">
                  Results and analyses will be posted here.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2">
                    <Zap className="w-4 h-4" strokeWidth={2} />
                    Gas
                  </Badge>
                  <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2">
                    <Code2 className="w-4 h-4" strokeWidth={2} />
                    Code Size
                  </Badge>
                  <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2">
                    <Cpu className="w-4 h-4" strokeWidth={2} />
                    Memory
                  </Badge>
                  <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2">
                    <Database className="w-4 h-4" strokeWidth={2} />
                    Stack Depth
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </div>
      <Container className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <SectionHeading className="text-center mb-4">
            Updates
          </SectionHeading>
          <Heading as="h2" className="text-center mb-16">
            Changelog
          </Heading>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <AccordionTrigger className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors group [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-BLUE/10">
                    <Calendar className="w-5 h-5 text-BLUE" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-BLACK">November 7, 2025</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="pl-14 text-GREY-2">
                  <p>Text…</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <AccordionTrigger className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors group [&[data-state=open]>svg]:rotate-180">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-BLUE/10">
                    <Calendar className="w-5 h-5 text-BLUE" strokeWidth={2} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-BLACK">October 31, 2025</h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="pl-14 text-GREY-2">
                  <p>Text…</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>

      <div className="bg-GREY py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Heading as="h2" className="mb-6">
              Stay Up to Date
            </Heading>
            <Lead className="text-GREY-2 mb-10">
              Join our Telegram Working Group
            </Lead>
            <a
            target="_blank"
              href="https://t.me/walnuthq"
              className="inline-flex items-center gap-3 px-8 py-4 bg-BLUE text-white font-semibold rounded-xl hover:bg-DARK-BLUE transition-colors shadow-lg hover:shadow-xl"
            >
              <TelegramIcon className="w-6 h-6" />
              Join Telegram Group
            </a>
          </div>
        </Container>
      </div>
      <Container className="py-24 md:py-32">
        <div className="mx-auto  max-w-4xl">
          <Heading as="h2" className="text-center mb-16">
            MLIR Across Solidity Compilers
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-BLUE hover:shadow-lg transition-all relative group">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-BLUE text-white text-xs font-semibold rounded-full">
                this project
              </div>
              <a href="#" className="block p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-BLACK">solc</h3>
                  <GitHubIcon className="w-5 h-5 text-GREY-2 group-hover:text-BLUE transition-colors" />
                </div>
                <p className="text-sm text-GREY-2">
                  MLIR integration in progress (this project)
                </p>
              </a>
            </Card>
            <Card className="hover:shadow-md transition-all group">
              <a href="#" className="block p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-BLACK">solx</h3>
                  <GitHubIcon className="w-5 h-5 text-GREY-2 group-hover:text-BLUE transition-colors" />
                </div>
                <p className="text-sm text-GREY-2">
                  No MLIR integration yet
                </p>
              </a>
            </Card>

            <Card className="hover:shadow-md transition-all group">
              <a href="#" className="block p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-BLACK">Solar</h3>
                  <GitHubIcon className="w-5 h-5 text-GREY-2 group-hover:text-BLUE transition-colors" />
                </div>
                <p className="text-sm text-GREY-2">
                  No MLIR integration yet
                </p>
              </a>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-GREY-2">
              <span className="font-semibold text-BLACK">Interested in MLIR integration?</span> Contact us.
            </p>
          </div>
        </div>
      </Container>
      <footer className="border-t border-slate-200 py-4">
        <Container>
          <div className="text-center">
            <p className="text-sm text-GREY-2">
              With love by{" "}
              <a
                href="https://walnut.dev/"
                className="inline-flex items-center gap-1 font-semibold text-BLACK hover:text-BLUE transition-colors"
              >
                Walnut 🌰
              </a>
            </p>
          </div>
        </Container>
      </footer>

    </main>
  );
}
