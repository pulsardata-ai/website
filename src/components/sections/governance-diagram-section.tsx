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
const orange = "#cc8800";
const orangeDim = "#332200";

/* ── Custom node types ── */

const baseStyle: CSSProperties = {
  fontFamily: "monospace",
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const StepNode = memo(({ data }: { data: { title: string; line1: string; line2: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: greenDark,
      border: `1.2px solid ${greenMed}`,
      width: 200,
      height: 78,
      gap: 4,
    }}
  >
    <span style={{ color: green, fontSize: 11, fontWeight: "bold" }}>{data.title}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>{data.line1}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>{data.line2}</span>
    <Handle type="source" position={Position.Right} id="right" style={{ background: greenMed, border: "none", width: 6, height: 6 }} />
    <Handle type="target" position={Position.Left} id="left" style={{ background: greenMed, border: "none", width: 6, height: 6 }} />
    <Handle type="target" position={Position.Top} id="top" style={{ background: orange, border: "none", width: 6, height: 6 }} />
  </div>
));
StepNode.displayName = "StepNode";

const GateNode = memo(({ data }: { data: { title: string; action: string; who: string } }) => (
  <div
    style={{
      ...baseStyle,
      background: orangeDim,
      border: `2px solid ${orange}`,
      width: 110,
      height: 66,
      filter: "drop-shadow(0 0 6px rgba(204,136,0,0.4))",
      gap: 2,
    }}
  >
    <span style={{ color: orange, fontSize: 11, fontWeight: "bold" }}>{data.title}</span>
    <span style={{ color: orange, fontSize: 9 }}>{data.action}</span>
    <span style={{ color: mutedText, fontSize: 9 }}>{data.who}</span>
    <Handle type="target" position={Position.Left} style={{ background: orange, border: "none", width: 6, height: 6 }} />
    <Handle type="source" position={Position.Bottom} style={{ background: orange, border: "none", width: 6, height: 6 }} />
  </div>
));
GateNode.displayName = "GateNode";

const TitleNode = memo(({ data }: { data: { label: string } }) => (
  <div style={{ pointerEvents: "none", width: 840, textAlign: "center" }}>
    <span style={{ color: greenMed, fontSize: 10, fontFamily: "monospace", letterSpacing: 3, fontWeight: "bold" }}>{data.label}</span>
  </div>
));
TitleNode.displayName = "TitleNode";

const LoopLabelNode = memo(({ data }: { data: { label: string } }) => (
  <div style={{ pointerEvents: "none" }}>
    <span style={{ color: mutedText, fontSize: 9, fontFamily: "monospace", letterSpacing: 1 }}>{data.label}</span>
  </div>
));
LoopLabelNode.displayName = "LoopLabelNode";

const RaciNode = memo(() => {
  const roles = ["Business", "DSI", "RSSI", "Architect", "Data Owner", "COMEX"];
  const rows = [
    { label: "Agent request", v: ["R", "A", "C", "C", "I", "I"] },
    { label: "Risk classification", v: ["C", "R", "A", "C", "C", "I"] },
    { label: "Architecture review", v: ["I", "C", "C", "R/A", "C", "I"] },
    { label: "Security audit", v: ["I", "C", "R/A", "C", "C", "I"] },
    { label: "Deploy decision", v: ["C", "R", "A", "C", "C", "A"] },
    { label: "Monitoring & review", v: ["C", "R", "C", "R", "A", "I"] },
  ];

  const colorFor = (v: string) => {
    if (v.includes("R")) return green;
    if (v === "A") return orange;
    if (v === "C") return greenMed;
    return mutedText;
  };

  return (
    <div
      style={{
        width: 820,
        border: `1.5px dashed ${greenDim}`,
        borderRadius: 4,
        padding: "16px 20px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ color: greenMed, fontSize: 10, letterSpacing: 3, fontWeight: "bold", marginBottom: 12 }}>
        RACI — AGENT GOVERNANCE ROLES
      </div>

      {/* Header */}
      <div style={{ display: "flex", marginBottom: 4 }}>
        <div style={{ width: 160 }} />
        {roles.map((r) => (
          <div key={r} style={{ flex: 1, textAlign: "center", color: green, fontSize: 9, fontWeight: "bold" }}>{r}</div>
        ))}
      </div>

      <div style={{ borderBottom: `0.8px solid ${greenDim}`, marginBottom: 6 }} />

      {/* Rows */}
      {rows.map((row) => (
        <div key={row.label} style={{ display: "flex", marginBottom: 3 }}>
          <div style={{ width: 160, color: textColor, fontSize: 9 }}>{row.label}</div>
          {row.v.map((val, vi) => (
            <div
              key={vi}
              style={{
                flex: 1,
                textAlign: "center",
                color: colorFor(val),
                fontSize: 10,
                fontWeight: val.includes("R") || val === "A" ? "bold" : "normal",
              }}
            >
              {val}
            </div>
          ))}
        </div>
      ))}

      <div style={{ marginTop: 10, color: mutedText, fontSize: 8 }}>
        R = Responsible &nbsp;|&nbsp; A = Accountable &nbsp;|&nbsp; C = Consulted &nbsp;|&nbsp; I = Informed
      </div>
    </div>
  );
});
RaciNode.displayName = "RaciNode";

const nodeTypes = {
  step: StepNode,
  gate: GateNode,
  title: TitleNode,
  loopLabel: LoopLabelNode,
  raci: RaciNode,
};

/* ── Layout constants ── */
const W = 200;
const gapX = 30;
const rowH = 110;
const col = (c: number) => c * (W + gapX);
const row = (r: number) => 40 + r * rowH;

/* ── Nodes ── */
const nodes: Node[] = [
  // Title
  { id: "title", type: "title", position: { x: 0, y: 0 }, data: { label: "AGENT GOVERNANCE FRAMEWORK — LIFECYCLE & ORGANIZATIONAL CONTROLS" } },

  // Row 0: Steps 1-3
  { id: "s1", type: "step", position: { x: col(0), y: row(0) }, data: { title: "1. Agent Request", line1: "Business sponsor submits", line2: "use case + impact analysis" } },
  { id: "s2", type: "step", position: { x: col(1), y: row(0) }, data: { title: "2. Risk Classification", line1: "EU AI Act risk level", line2: "Autonomy scope + data access" } },
  { id: "s3", type: "step", position: { x: col(2), y: row(0) }, data: { title: "3. Architecture Review", line1: "Design Authority validates", line2: "topology, tools, boundaries" } },

  // Gate 1
  { id: "g1", type: "gate", position: { x: col(3) + 45, y: row(0) + 6 }, data: { title: "GATE 1", action: "GO / NO-GO", who: "DSI + RSSI" } },

  // Row 1: Steps 4-6
  { id: "s4", type: "step", position: { x: col(0), y: row(1) }, data: { title: "4. POC Development", line1: "Scoped implementation", line2: "Instrumented from day 1" } },
  { id: "s5", type: "step", position: { x: col(1), y: row(1) }, data: { title: "5. Security Audit", line1: "RSSI review: tool access,", line2: "data exposure, prompt injection" } },
  { id: "s6", type: "step", position: { x: col(2), y: row(1) }, data: { title: "6. Business Validation", line1: "Process owner validates", line2: "decision matrix + escalations" } },

  // Gate 2
  { id: "g2", type: "gate", position: { x: col(3) + 45, y: row(1) + 6 }, data: { title: "GATE 2", action: "DEPLOY", who: "COMEX sign-off" } },

  // Row 2: Steps 7-9
  { id: "s7", type: "step", position: { x: col(0), y: row(2) }, data: { title: "7. Production Deploy", line1: "Gradual rollout", line2: "Shadow → supervised → auto" } },
  { id: "s8", type: "step", position: { x: col(1), y: row(2) }, data: { title: "8. Continuous Monitoring", line1: "KPIs, cost, quality, drift", line2: "Human intervention rate" } },
  { id: "s9", type: "step", position: { x: col(2), y: row(2) }, data: { title: "9. Periodic Review", line1: "Quarterly governance board", line2: "Adjust autonomy levels" } },

  // Loop label
  { id: "loop-label", type: "loopLabel", position: { x: 250, y: row(2) + 100 }, data: { label: "CONTINUOUS IMPROVEMENT LOOP" } },

  // RACI
  { id: "raci", type: "raci", position: { x: 10, y: row(2) + 130 }, data: {} },
];

/* ── Edges ── */
const edges: Edge[] = [
  // Row 0 flow
  { id: "e-s12", source: "s1", sourceHandle: "right", target: "s2", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-s23", source: "s2", sourceHandle: "right", target: "s3", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-s3g1", source: "s3", sourceHandle: "right", target: "g1", type: "smoothstep", style: { stroke: orange, strokeWidth: 1.5 } },

  // Gate 1 → Step 4 (bottom of gate → top of step)
  { id: "e-g1s4", source: "g1", target: "s4", targetHandle: "top", type: "smoothstep", style: { stroke: orange, strokeWidth: 1.5 } },

  // Row 1 flow
  { id: "e-s45", source: "s4", sourceHandle: "right", target: "s5", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-s56", source: "s5", sourceHandle: "right", target: "s6", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-s6g2", source: "s6", sourceHandle: "right", target: "g2", type: "smoothstep", style: { stroke: orange, strokeWidth: 1.5 } },

  // Gate 2 → Step 7 (bottom of gate → top of step)
  { id: "e-g2s7", source: "g2", target: "s7", targetHandle: "top", type: "smoothstep", style: { stroke: orange, strokeWidth: 1.5 } },

  // Row 2 flow
  { id: "e-s78", source: "s7", sourceHandle: "right", target: "s8", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
  { id: "e-s89", source: "s8", sourceHandle: "right", target: "s9", targetHandle: "left", type: "smoothstep", style: { stroke: greenMed, strokeWidth: 1.5 } },
];

function GovernanceDiagram() {
  return (
    <div style={{ width: "100%", height: 640, background: "#020b04", borderRadius: 6 }} role="img" aria-label="Agent governance framework diagram">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
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

export function GovernanceDiagramSection() {
  const t = useTranslations("governanceDiagram");
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">{t("label")}</p>
        <div className="border border-border rounded bg-bg-card box-glow overflow-hidden">
          <div className="p-4 md:p-6"><GovernanceDiagram /></div>
        </div>
        <p className="text-text-muted text-xs font-mono mt-4">{t("caption")}</p>
      </div>
    </section>
  );
}
