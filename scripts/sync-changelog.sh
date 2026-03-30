#!/bin/bash

# Diretório de saída
OUTPUT_DIR="src/content/changelog"
URL="https://raw.githubusercontent.com/promovaweb/setupvibe/main/CHANGELOG.md"

# Criar diretório se não existir
mkdir -p "$OUTPUT_DIR"

# Baixar o changelog
echo "Baixando Changelog de $URL..."
TEMP_FILE=$(mktemp)
curl -sL "$URL" > "$TEMP_FILE"

# O arquivo original usa ## [vX.Y.Z] - YYYY-MM-DD
# Vamos percorrer linha a linha e criar os arquivos
CURRENT_FILE=""
while IFS= read -r line; do
    if [[ "$line" =~ ^"## [v" ]]; then
        # Extrair versão e data
        VERSION=$(echo "$line" | sed -E 's/## \[v([^]]+)\].*/\1/')
        DATE=$(echo "$line" | sed -E 's/.*- ([0-9]{4}-[0-9]{2}-[0-9]{2}).*/\1/')
        
        # Caso a data não seja encontrada (ex: [Unreleased])
        if [[ ! "$DATE" =~ [0-9]{4}-[0-9]{2}-[0-9]{2} ]]; then
            DATE=$(date +%Y-%m-%d)
        fi

        CURRENT_FILE="$OUTPUT_DIR/$VERSION.md"
        echo "Processando versão $VERSION..."
        
        echo "---" > "$CURRENT_FILE"
        echo "version: \"$VERSION\"" >> "$CURRENT_FILE"
        echo "date: \"$DATE\"" >> "$CURRENT_FILE"
        echo "title: \"Versão $VERSION\"" >> "$CURRENT_FILE"
        echo "---" >> "$CURRENT_FILE"
        echo "" >> "$CURRENT_FILE"
    elif [ -n "$CURRENT_FILE" ]; then
        # Adicionar linha ao arquivo atual, removendo o marcador horizontal do Keep a Changelog se existir
        if [[ ! "$line" =~ ^"---" ]]; then
            # Usar classes CSS em spans ou tags para não quebrar o parser do markdown
            if [[ "$line" =~ ^"### Added" ]]; then
                echo "### <span class=\"changelog-added\">Added</span>" >> "$CURRENT_FILE"
            elif [[ "$line" =~ ^"### Changed" ]]; then
                echo "### <span class=\"changelog-changed\">Changed</span>" >> "$CURRENT_FILE"
            elif [[ "$line" =~ ^"### Fixed" ]]; then
                echo "### <span class=\"changelog-fixed\">Fixed</span>" >> "$CURRENT_FILE"
            elif [[ "$line" =~ ^"### Docs" ]]; then
                echo "### <span class=\"changelog-docs\">Docs</span>" >> "$CURRENT_FILE"
            else
                echo "$line" >> "$CURRENT_FILE"
            fi
        fi
    fi
done < "$TEMP_FILE"

rm "$TEMP_FILE"
echo "Changelog sincronizado com sucesso!"
