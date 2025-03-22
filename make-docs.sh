#!/usr/bin/env bash

# This script generates the documentation structure.

set -euo pipefail

docs_dir="content/docs"

files=(
    "guide/index.mdx"

    "guide/installation/docker.mdx"
    "guide/installation/linux.mdx"
    "guide/installation/macos.mdx"
    "guide/installation/system-requirements.mdx"
    "guide/installation/uninstall.mdx"
    "guide/installation/windows.mdx"

    "guide/quick-start/basic-operations.mdx"
    "guide/quick-start/first-connection.mdx"

    "guide/configuration/authentication.mdx"
    "guide/configuration/cli.mdx"
    "guide/configuration/configuration-file.mdx"
    "guide/configuration/database-connections.mdx"
    "guide/configuration/environment-variables.mdx"
    "guide/configuration/global-settings.mdx"
    "guide/configuration/gui.mdx"
    "guide/configuration/index.mdx"
    "guide/configuration/plugins.mdx"
    "guide/configuration/troubleshooting.mdx"

    "api/index.mdx"
    "api/api-reference.mdx"
    "api/authentication-security.mdx"
    "api/endpoints/connection.mdx"
    "api/endpoints/query.mdx"
    "api/endpoints/schema.mdx"
    "api/endpoints/user.mdx"
    "api/integration-examples.mdx"
    "api/troubleshooting.mdx"

    "cli/index.mdx"
    "cli/command-reference.mdx"
    "cli/configuration/cli-flags.mdx"
    "cli/configuration/config-file-structure.mdx"
    "cli/configuration/environment-variables.mdx"
    "cli/configuration-options.mdx"
    "cli/database-management.mdx"
    "cli/plugin-management.mdx"
    "cli/troubleshooting.mdx"

    "gui/index.mdx"
    "gui/customization.mdx"
    "gui/keyboard-shortcuts.mdx"
    "gui/layout-navigation.mdx"
    "gui/query-interface/query-editor.mdx"
    "gui/query-interface/query-history.mdx"
    "gui/query-interface/query-optimization.mdx"
    "gui/query-interface/visual-query-builder.mdx"
    "gui/schema-management/browsing-objects.mdx"
    "gui/schema-management/creating-modifying-objects.mdx"
    "gui/schema-management/entity-relationship-diagrams.mdx"
    "gui/schema-management/schema-comparison.mdx"
    "gui/troubleshooting.mdx"
    "gui/workspace-management.mdx"

    "plugins/index.mdx"
    "plugins/architecture/plugin-interfaces.mdx"
    "plugins/architecture/security-model.mdx"
    "plugins/architecture/wasm-runtime.mdx"
    "plugins/developing-plugins/automation-plugin-development.mdx"
    "plugins/developing-plugins/nosql-plugin-development.mdx"
    "plugins/developing-plugins/publishing-plugins.mdx"
    "plugins/developing-plugins/sql-plugin-development.mdx"
    "plugins/developing-plugins/theme-plugin-development.mdx"
    "plugins/using-plugins/configuring-plugins.mdx"
    "plugins/using-plugins/discovering-plugins.mdx"
    "plugins/using-plugins/installing-plugins.mdx"
    "plugins/using-plugins/updates-versioning.mdx"
)

# Function to create file with base template
template() {
    cat <<EOF
---
title: $(basename "$1" .mdx | sed 's/-/ /g' | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
description: $(basename "$1" .mdx | sed 's/-/ /g' | awk '{print toupper(substr($0,1,1)) substr($0,2)}')
---

TODO: Write content for $(basename "$1" .mdx)
EOF
}

# Create directories and files
for file in "${files[@]}"; do
    filepath="$docs_dir/$file"
    mkdir -p "$(dirname "$filepath")"
    template "$file" >"$filepath"
done

# Count and display the number of directories and files
num_dirs=$(find "$docs_dir" -type d | wc -l)
num_files=$(find "$docs_dir" -type f | wc -l)
echo "Documentation structure created successfully in $docs_dir"
echo "Total directories: $num_dirs"
echo "Total files: $num_files"
