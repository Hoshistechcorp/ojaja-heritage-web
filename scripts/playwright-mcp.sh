#!/bin/sh
# Launches the Playwright MCP server (https://github.com/microsoft/playwright-mcp).
# In Claude Code cloud sessions a Chromium build is preinstalled at /opt/pw-browsers;
# use it so the server doesn't need to download a browser.
if [ -z "$PLAYWRIGHT_MCP_EXECUTABLE_PATH" ] && [ -x /opt/pw-browsers/chromium ]; then
  export PLAYWRIGHT_MCP_EXECUTABLE_PATH=/opt/pw-browsers/chromium
fi
exec npx -y @playwright/mcp@latest --browser chromium --headless --isolated "$@"
