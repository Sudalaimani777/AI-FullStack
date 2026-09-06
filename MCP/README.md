# 🔌 Model Context Protocol (MCP) Weather Server

Welcome to the **MCP Weather Agent Server**, a custom implementation of the **Model Context Protocol (MCP)** standard using TypeScript, `@modelcontextprotocol/sdk`, `Zod`, and standard input/output (`stdio`) transport streams.

---

## 📂 Repository Architecture

```text
MCP/
├── 📄 server.ts            # Custom MCP Server implementation (Tools & Resources)
├── 📄 package.json         # Node.js dependencies (@modelcontextprotocol/sdk, Zod)
├── 📄 package-lock.json    # Exact dependency lockfile
└── 📄 README.md            # Project documentation
```

---

## 🛠️ Architecture & Key Concepts

The Model Context Protocol (MCP) allows AI models and assistants (such as Claude Desktop or custom AI agents) to securely interface with tools, resources, and external APIs.

### 🧰 Registered MCP Tools

#### 1. `getWeatherDataByCityName`
- **Description**: Retrieves current weather conditions and forecast for a specified city.
- **Input Parameters**:
  - `city` (`string`): The target city name (e.g. `"New York"`, `"London"`).
- **Output**: JSON payload with `temperature`, `condition`, `humidity`, and `forecast`.

#### 2. `track-weather`
- **Description**: Tracks an ongoing weather tracking request by ID.
- **Input Parameters**:
  - `trackingNumber` (`string`): Tracking ID reference.

---

### 📦 Registered MCP Resources

#### 1. `weather-supported-cities`
- **Resource URI**: `weather://cities`
- **MIME Type**: `text/plain`
- **Description**: Exposes a plain-text list of supported weather query cities (`New York`, `London`).

---

### 🛰️ Transport Layer
The server initializes an instance of `StdioServerTransport` to communicate asynchronously over standard I/O streams:

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: "MCP Weather Agent",
    version: "1.0.0",
});

// Start transport connection
const transport = new StdioServerTransport();
await server.connect(transport);
```

---

## 🚀 Running & Testing the MCP Server

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch the MCP Server via `tsx`
```bash
npx tsx server.ts
```

### 3. Integrating with AI Assistant Configs (e.g. `claude_desktop_config.json`)
To connect this local MCP server to an AI clienthost over `stdio`:

```json
{
  "mcpServers": {
    "weather-agent": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "C:/Users/acer/Documents/Codings/AI-FullStack/MCP/server.ts"
      ]
    }
  }
}
```

---

*Part of the AI & Full-Stack Development Workspace.*
