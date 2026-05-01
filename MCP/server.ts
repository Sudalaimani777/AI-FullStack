import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
    name: "MCP Weather Agent",
    version: "1.0.0",
});

server.tool(
    "track-weather",
    "Tracks the weather in a specified location.",
    {
        trackingNumber: z.string().describe("The tracking number for the weather tracking request."),
    },
    async ({ trackingNumber }) => {
        return {
            content: [
                {
                    type: "text",
                    text: `The weather tracking request with tracking number ${trackingNumber} has been received and is being processed.`,
                },
            ],
        };
    }
);

async function getWeatherByCity(city: string) {
    if (city.toLowerCase() === "new york") {
        return {
            temperature: "25C",
            condition: "Sunny",
            humidity: "60%",
            forecast: "Clear skies expected throughout the day",
        };
    }

    if (city.toLowerCase() === "london") {
        return {
            temperature: "18C",
            condition: "Cloudy",
            humidity: "70%",
            forecast: "Rain expected in the afternoon",
        };
    }

    return {
        temperature: null,
        condition: null,
        humidity: null,
        forecast: null,
        error: "Weather data not available for this city",
    };
}

server.tool(
    "getWeatherDataByCityName",
    "Gets the weather data for a specified city.",
    {
        city: z.string().describe("The name of the city to get the weather data for."),
    },
    async ({ city }) => {
        const weatherData = await getWeatherByCity(city);

        return {
            content: [
                {
                    type: "text",
                    text: JSON.stringify({
                        city,
                        weather: weatherData,
                    }),
                },
            ],
        };
    }
);
server.registerResource(
    "weather-supported-cities",
    "weather://cities",
    {
        mimeType: "text/plain",
        description: "List of supported cities for the weather tool.",
    },
    async () => {
        return {
            contents: [
                {
                    uri: "weather://cities",
                    text: "Supported Cities:\n- London\n- New York",
                },
            ],
        };
    }
);

async function init() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("MCP Weather Agent server is running on stdio.");
    console.error("Available tool: getWeatherDataByCityName");
    console.error("Available resource: weather://cities");
}

init().catch(console.error);
