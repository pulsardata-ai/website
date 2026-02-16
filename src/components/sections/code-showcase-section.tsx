import { useTranslations } from "next-intl";

const codeSnippet = `from google.adk.agents import LlmAgent, SequentialAgent
from google.adk.tools import agent_tool
from tools.mcp import salesforce, confluence, jira

# Specialized agents — bounded MCP tools per agent
classifier = LlmAgent(
    name="DocumentClassifier",
    model="gemini-2.5-pro",
    instruction="Classify incoming documents by type and urgency.",
    tools=[confluence],
    output_key="classification",
)

extractor = LlmAgent(
    name="DataExtractor",
    model="gemini-2.5-pro",
    instruction="Extract structured fields from {classification}.",
    tools=[salesforce, jira],
    output_key="extracted_data",
)

validator = LlmAgent(
    name="ComplianceValidator",
    model="gemini-2.5-pro",
    instruction="Validate {extracted_data} against regulatory rules.",
    tools=[confluence],
    output_key="validation_report",
)

# Orchestration — sequential pipeline with human gate
root_agent = SequentialAgent(
    name="DocumentProcessingPipeline",
    description="Enterprise document intake → extract → validate.",
    sub_agents=[classifier, extractor, validator, human_review],
)`;

export function CodeShowcaseSection() {
  const t = useTranslations("codeShowcase");

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">
          {t("label")}
        </p>
        <div className="border border-border rounded bg-bg-card box-glow overflow-hidden">
          {/* Terminal title bar */}
          <div className="border-b border-border px-4 py-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="text-text-muted text-xs font-mono ml-3">
              agent_topology.py
            </span>
          </div>
          {/* Code content */}
          <div className="p-5 overflow-x-auto">
            <pre className="text-xs md:text-sm font-mono leading-relaxed">
              <code>
                {codeSnippet.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-text-muted select-none w-8 text-right mr-4 shrink-0">
                      {i + 1}
                    </span>
                    <span
                      className={
                        line.startsWith("#")
                          ? "text-text-muted italic"
                          : line.includes("def ") || line.includes("class ")
                            ? "text-green"
                            : /^(from|import)\s/.test(line)
                              ? "text-green-medium"
                              : line.trim().startsWith('"')
                                ? "text-green-medium"
                                : "text-text"
                      }
                    >
                      {line || "\u00A0"}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
        <p className="text-text-muted text-xs font-mono mt-4">
          {t("caption")}
        </p>
      </div>
    </section>
  );
}
