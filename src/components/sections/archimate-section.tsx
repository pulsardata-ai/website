"use client";

import { useTranslations } from "next-intl";
import { ReactFlow, Background, type Node, type Edge, Position, Handle } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { type CSSProperties, memo } from "react";

/* ── Colors ── */
const green = "#00ff41";
const greenMed = "#00cc66";
const greenDim = "#1a5c2a";
const greenDark = "#0a2a10";
const textColor = "#d0f0d0";
const mutedText = "#7daa7d";

/* ── Custom node types ── */

const baseStyle: CSSProperties = {
  fontFamily: "monospace",
  borderRadius: 4,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const BusinessProcessNode = memo(({ data }: { data: { label: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `1.2px solid ${greenMed}`,
      width: 170,
      height: 44,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, background: greenMed, borderRadius: "1px 0 0 1px" }} />
    <span style={{ color: textColor, fontSize: 11, paddingLeft: 20 }}>{data.label}</span>
    <Handle type="source" position={Position.Right} style={{ background: greenMed, border: "none", width: 6, height: 6 }} />
    <Handle type="target" position={Position.Left} style={{ background: greenMed, border: "none", width: 6, height: 6 }} />
  </div>
));
BusinessProcessNode.displayName = "BusinessProcessNode";

const OrchestratorNode = memo(({ data }: { data: { label: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `2px solid ${green}`,
      width: 440,
      height: 38,
      alignItems: "center",
      filter: "drop-shadow(0 0 6px rgba(0,255,65,0.4))",
    }}
  >
    <span style={{ color: green, fontSize: 13, fontWeight: "bold" }}>{data.label}</span>
    <Handle type="source" position={Position.Bottom} id="b0" style={{ background: greenMed, border: "none", width: 6, height: 6, left: "12.5%" }} />
    <Handle type="source" position={Position.Bottom} id="b1" style={{ background: greenMed, border: "none", width: 6, height: 6, left: "37.5%" }} />
    <Handle type="source" position={Position.Bottom} id="b2" style={{ background: greenMed, border: "none", width: 6, height: 6, left: "62.5%" }} />
    <Handle type="source" position={Position.Bottom} id="b3" style={{ background: greenMed, border: "none", width: 6, height: 6, left: "87.5%" }} />
  </div>
));
OrchestratorNode.displayName = "OrchestratorNode";

const AgentNode = memo(({ data }: { data: { label: string; sub: string; tool: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `1.2px solid ${greenMed}`,
      width: 170,
      height: 60,
      padding: "8px 14px",
      gap: 2,
    }}
  >
    <span style={{ color: green, fontSize: 12, fontWeight: "bold" }}>{data.label}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>{data.sub}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>tools: [{data.tool}]</span>
    <Handle type="target" position={Position.Top} style={{ background: greenMed, border: "none", width: 6, height: 6 }} />
    <Handle type="source" position={Position.Right} style={{ background: green, border: "none", width: 6, height: 6 }} />
    <Handle type="target" position={Position.Left} style={{ background: green, border: "none", width: 6, height: 6 }} />
    <Handle type="source" position={Position.Bottom} style={{ background: greenDim, border: "none", width: 6, height: 6 }} />
  </div>
));
AgentNode.displayName = "AgentNode";

const McpBarNode = memo(({ data }: { data: { label: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `1.5px solid ${greenDim}`,
      width: 800,
      height: 28,
      alignItems: "center",
    }}
  >
    <span style={{ color: greenMed, fontSize: 10, letterSpacing: 2, fontWeight: "bold" }}>{data.label}</span>
    <Handle type="target" position={Position.Top} id="t0" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "10%" }} />
    <Handle type="target" position={Position.Top} id="t1" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "28%" }} />
    <Handle type="target" position={Position.Top} id="t2" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "47%" }} />
    <Handle type="target" position={Position.Top} id="t3" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "66%" }} />
    <Handle type="source" position={Position.Bottom} id="s0" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "10%" }} />
    <Handle type="source" position={Position.Bottom} id="s1" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "28%" }} />
    <Handle type="source" position={Position.Bottom} id="s2" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "47%" }} />
    <Handle type="source" position={Position.Bottom} id="s3" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "66%" }} />
    <Handle type="source" position={Position.Bottom} id="s4" style={{ background: greenDim, border: "none", width: 4, height: 4, left: "84%" }} />
  </div>
));
McpBarNode.displayName = "McpBarNode";

const SystemNode = memo(({ data }: { data: { label: string; sub: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: "transparent",
      border: `1.2px solid ${greenDim}`,
      width: 150,
      height: 48,
      padding: "8px 14px",
      gap: 2,
    }}
  >
    <span style={{ color: textColor, fontSize: 11 }}>{data.label}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>{data.sub}</span>
    <Handle type="target" position={Position.Top} style={{ background: greenDim, border: "none", width: 4, height: 4 }} />
  </div>
));
SystemNode.displayName = "SystemNode";

const ObsBarNode = memo(({ data }: { data: { label: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `1px solid ${greenDim}`,
      width: 800,
      height: 28,
      alignItems: "center",
    }}
  >
    <span style={{ color: mutedText, fontSize: 10, letterSpacing: 2 }}>{data.label}</span>
  </div>
));
ObsBarNode.displayName = "ObsBarNode";

const LabelNode = memo(({ data }: { data: { label: string; size?: number } }) => (
  <div style={{ pointerEvents: "none" }}>
    <span style={{ color: greenMed, fontSize: data.size || 10, fontFamily: "monospace", letterSpacing: 3, fontWeight: "bold" }}>{data.label}</span>
  </div>
));
LabelNode.displayName = "LabelNode";

const FooterNode = memo(({ data }: { data: { label: string } }) => (
  <div style={{ pointerEvents: "none" }}>
    <span style={{ color: mutedText, fontSize: 9, fontFamily: "monospace" }}>{data.label}</span>
  </div>
));
FooterNode.displayName = "FooterNode";

const nodeTypes = {
  businessProcess: BusinessProcessNode,
  orchestrator: OrchestratorNode,
  agent: AgentNode,
  mcpBar: McpBarNode,
  system: SystemNode,
  obsBar: ObsBarNode,
  label: LabelNode,
  footer: FooterNode,
};

/* ── Nodes ── */
const nodes: Node[] = [
  // Layer labels
  { id: "lbl-biz", type: "label", position: { x: 20, y: 20 }, data: { label: "BUSINESS LAYER" } },
  { id: "lbl-app", type: "label", position: { x: 20, y: 120 }, data: { label: "APPLICATION LAYER — AGENTIC SYSTEM" } },
  { id: "lbl-tech", type: "label", position: { x: 20, y: 365 }, data: { label: "TECHNOLOGY LAYER — ENTERPRISE SI" } },

  // Business processes
  { id: "bp0", type: "businessProcess", position: { x: 20, y: 50 }, data: { label: "Document Intake" } },
  { id: "bp1", type: "businessProcess", position: { x: 230, y: 50 }, data: { label: "Compliance Review" } },
  { id: "bp2", type: "businessProcess", position: { x: 440, y: 50 }, data: { label: "Data Enrichment" } },
  { id: "bp3", type: "businessProcess", position: { x: 650, y: 50 }, data: { label: "Human Validation" } },

  // Orchestrator
  { id: "orch", type: "orchestrator", position: { x: 200, y: 150 }, data: { label: "SequentialAgent (Google ADK)" } },

  // Agents
  { id: "ag0", type: "agent", position: { x: 20, y: 220 }, data: { label: "Classifier", sub: "LlmAgent", tool: "confluence" } },
  { id: "ag1", type: "agent", position: { x: 230, y: 220 }, data: { label: "Extractor", sub: "LlmAgent", tool: "salesforce, jira" } },
  { id: "ag2", type: "agent", position: { x: 440, y: 220 }, data: { label: "Validator", sub: "LlmAgent", tool: "confluence" } },
  { id: "ag3", type: "agent", position: { x: 650, y: 220 }, data: { label: "Human Gate", sub: "ReviewAgent", tool: "approval_api" } },

  // MCP Bar
  { id: "mcp", type: "mcpBar", position: { x: 20, y: 310 }, data: { label: "MCP SERVERS — TOOL BOUNDARY" } },

  // Systems
  { id: "sys0", type: "system", position: { x: 20, y: 395 }, data: { label: "Confluence", sub: "Knowledge Base" } },
  { id: "sys1", type: "system", position: { x: 190, y: 395 }, data: { label: "Salesforce", sub: "CRM" } },
  { id: "sys2", type: "system", position: { x: 360, y: 395 }, data: { label: "Jira", sub: "Project Mgmt" } },
  { id: "sys3", type: "system", position: { x: 530, y: 395 }, data: { label: "PostgreSQL", sub: "State Store" } },
  { id: "sys4", type: "system", position: { x: 700, y: 395 }, data: { label: "LangSmith", sub: "Observability" } },

  // Observability
  { id: "obs", type: "obsBar", position: { x: 20, y: 465 }, data: { label: "OBSERVABILITY — TRACES, METRICS, AUDIT TRAIL" } },

  // Footer
  { id: "footer", type: "footer", position: { x: 20, y: 510 }, data: { label: "ArchiMate 3.2 — Application Cooperation Viewpoint" } },
];

/* ── Edges ── */
const edgeDefaults = { style: { strokeWidth: 1.5 } };

const edges: Edge[] = [
  // BP flow
  { id: "e-bp01", source: "bp0", target: "bp1", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 }, animated: false },
  { id: "e-bp12", source: "bp1", target: "bp2", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-bp23", source: "bp2", target: "bp3", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },

  // Orchestrator → agents
  { id: "e-orch0", source: "orch", sourceHandle: "b0", target: "ag0", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.2 } },
  { id: "e-orch1", source: "orch", sourceHandle: "b1", target: "ag1", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.2 } },
  { id: "e-orch2", source: "orch", sourceHandle: "b2", target: "ag2", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.2 } },
  { id: "e-orch3", source: "orch", sourceHandle: "b3", target: "ag3", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.2 } },

  // Agent flow (straight so they don't route upward through orch→agent space)
  { id: "e-ag01", source: "ag0", target: "ag1", type: "straight", style: { stroke: green, strokeWidth: 1.8 }, animated: true },
  { id: "e-ag12", source: "ag1", target: "ag2", type: "straight", style: { stroke: green, strokeWidth: 1.8 }, animated: true },
  { id: "e-ag23", source: "ag2", target: "ag3", type: "straight", style: { stroke: green, strokeWidth: 1.8 }, animated: true },

  // Agents → MCP
  { id: "e-ag0mcp", source: "ag0", sourceHandle: "bottom", target: "mcp", targetHandle: "t0", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-ag1mcp", source: "ag1", sourceHandle: "bottom", target: "mcp", targetHandle: "t1", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-ag2mcp", source: "ag2", sourceHandle: "bottom", target: "mcp", targetHandle: "t2", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-ag3mcp", source: "ag3", sourceHandle: "bottom", target: "mcp", targetHandle: "t3", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },

  // MCP → Systems
  { id: "e-mcp0", source: "mcp", sourceHandle: "s0", target: "sys0", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-mcp1", source: "mcp", sourceHandle: "s1", target: "sys1", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-mcp2", source: "mcp", sourceHandle: "s2", target: "sys2", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-mcp3", source: "mcp", sourceHandle: "s3", target: "sys3", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
  { id: "e-mcp4", source: "mcp", sourceHandle: "s4", target: "sys4", type: "smoothstep", style: { stroke: greenDim, strokeWidth: 1, strokeDasharray: "5 3" } },
];

function ArchimateDiagram() {
  return (
    <div style={{ width: "100%", height: 560, background: "#020b04", borderRadius: 6 }} role="img" aria-label="ArchiMate architecture diagram">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={edgeDefaults}
        fitView
        fitViewOptions={{ padding: 0.05 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
        colorMode="dark"
      >
        <Background color={greenDim} gap={40} size={0.5} />
      </ReactFlow>
    </div>
  );
}

export function ArchimateSection() {
  const t = useTranslations("archimate");
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">{t("label")}</p>
        <div className="border border-border rounded bg-bg-card box-glow overflow-hidden">
          <div className="p-4 md:p-6"><ArchimateDiagram /></div>
        </div>
        <p className="text-text-muted text-xs font-mono mt-4">{t("caption")}</p>
      </div>
    </section>
  );
}
