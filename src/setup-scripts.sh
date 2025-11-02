#!/bin/bash

echo "🔧 Making deployment scripts executable..."

chmod +x fix-redirects.sh
chmod +x deploy-safe.sh
chmod +x deploy-now.sh

echo "✅ Scripts are now executable!"
echo ""
echo "You can now use:"
echo "  • ./fix-redirects.sh"
echo "  • ./deploy-safe.sh"
echo "  • ./deploy-now.sh"
echo ""
