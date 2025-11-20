import { CheckCircle, RefreshCw, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/progress";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface TimelineStep {
  status: "complete" | "current" | "upcoming";
  title: string;
  description?: string;
  items?: string[];
  progress?: {
    value: number;
    label: string;
  };
  badges?: Array<{
    label: string;
    variant?: "default" | "secondary" | "success";
  }>;
  additionalSections?: Array<{
    title: string;
    items: string[];
  }>;
  paragraphDescription?: ReactNode;
  focusAreas?: string[];
}

const steps: TimelineStep[] = [
  {
    status: "complete",
    title: "MLIR Integration into solc",
    items: [
      "MLIR infrastructure integrated into our solc branch",
      "Solidity AST → MLIR working pipeline",
    ],
  },
  {
    status: "current",
    title: "Solidity Dialect",
    progress: {
      value: 17,
      label: "Goal: Compile 100 real contracts, full list here (link).",
    },
    items: [
      "Defining Solidity ops/types in MLIR",
      "Lowering high-level constructs",
      "Iterative coverage tracking",
    ],
  },
  {
    status: "upcoming",
    title: "Optimizations & Reports",
    paragraphDescription:
      <span>Compare our solc enhanced with MLIR with existing Solidity compilers such as <Badge variant="secondary">solc</Badge>, <Badge variant="secondary">solc --via-ir</Badge>, <Badge variant="secondary">solc</Badge>, <Badge variant="secondary">solx</Badge> or <Badge variant="secondary">solar</Badge>. The benchmarks would focus on:</span>,
    focusAreas: ["Gas", "Code size", "Memory", "Stack depth"],
  },
];

export function WorkProgress() {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold text-center mb-8 text-BLACK">
        Work Progress
      </h2>
      <div className="text-center mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-BLUE hover:text-DARK-BLUE transition-colors"
        >
          View on GitHub
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </div>

      <nav aria-label="Work Progress">
        <ol role="list" className="overflow-hidden">
          {steps.map((step, stepIdx) => {
            const isLast = stepIdx === steps.length - 1;
            const lineColor =
              step.status === "complete"
                ? "bg-green-600"
                : "bg-gray-300 dark:bg-gray-700";

            return (
              <li key={stepIdx} className={!isLast ? "relative pb-12" : "relative"}>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className={`absolute top-4 left-4 mt-0.5 -ml-px h-full w-0.5 ${lineColor}`}
                  ></div>
                )}

                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    {step.status === "complete" && (
                      <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors">
                        <span className="text-white">1</span>
                      </span>
                    )}
                    {step.status === "current" && (
                      <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-BLUE bg-white">
                        <span className="text-BLUE">2</span>
                      </span>
                    )}
                    {step.status === "upcoming" && (
                      <span className="relative z-10 flex size-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400 transition-colors">
                        <span className="text-gray-400">3</span>
                      </span>
                    )}
                  </span>

                  <div className="ml-4 flex min-w-0 flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-xl font-semibold ${
                          step.status === "current"
                            ? "text-BLUE"
                            : step.status === "complete"
                            ? "text-BLACK"
                            : "text-gray-500"
                        }`}
                      >
                        {step.title}
                      </span>

                      {step.status === "complete" && (
                        <Badge variant="success">
                          <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"></span>
                          Done
                        </Badge>
                      )}
                      {step.status === "current" && (
                        <>
                          <Badge>
                            <span className="inline-block w-2 h-2 rounded-full bg-BLUE animate-pulse mr-1"></span>
                            In Progress
                          </Badge>
                        </>
                      )}
                      {step.status === "upcoming" && (
                        <Badge variant="secondary" className="bg-slate-100 text-slate-500">
                          <span className="inline-block w-2 h-2 rounded-full bg-slate-400 mr-1"></span>
                          Not Started
                        </Badge>
                      )}
                    </div>

                    {step.progress && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-BLACK">
                            {step.progress.label}
                          </span>
                          <span className="text-sm font-bold text-BLUE">
                            {step.progress.value}%
                          </span>
                        </div>
                        <Progress value={step.progress.value} className="h-3" />
                      </div>
                    )}

                    {step.items && (
                      <ul className="space-y-2 text-sm text-GREY-2 mb-4">
                        {step.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-center gap-2">
                            <span
                              className={` ${
                                step.status === "complete"
                                  ? "text-green-600"
                                  : step.status === "current"
                                  ? "text-BLUE"
                                  : "text-gray-400"
                              }`}
                            >
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.paragraphDescription && (
                      <div className="space-y-3 text-sm">
                        <p className="text-GREY-2 leading-relaxed">
                          {step.paragraphDescription}
                        </p>
                        {step.focusAreas && (
                          <ul className="space-y-1.5 text-GREY-2">
                            {step.focusAreas.map((area, areaIdx) => (
                              <li key={areaIdx} className="flex items-center gap-2">
                                <span className="text-slate-400">•</span>
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {step.additionalSections && (
                      <div className="space-y-4 text-sm">
                        {step.additionalSections.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <p className="font-medium text-BLACK mb-2">
                              {section.title}
                            </p>
                            {section.title.includes("comparison") ? (
                              <div className="flex flex-wrap gap-2">
                                {section.items.map((item, itemIdx) => (
                                  <Badge key={itemIdx} variant="secondary">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            ) : (
                              <ul className="space-y-1.5 text-GREY-2">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-slate-400" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
